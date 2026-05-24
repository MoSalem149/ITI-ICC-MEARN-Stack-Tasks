const request = require("supertest");
const app = require("..");
const { clearDatabase } = require("../db.connection");

const req = request(app);

describe("lab testing:", () => {
  let token, todoInDB, token2;

  beforeAll(async () => {
    let myUser = {
      name: "mohamed salem",
      email: "mohamed@gmail.com",
      password: "abc123",
    };

    await req.post("/user/signup").send(myUser);
    let res = await req.post("/user/login").send(myUser);
    token = res.body.token;

    // second user with no todos
    let user2 = {
      name: "wael salem",
      email: "wael@gmail.com",
      password: "abc123",
    };
    await req.post("/user/signup").send(user2);
    let res2 = await req.post("/user/login").send(user2);
    token2 = res2.body.token;

    // create a todo for first user
    let res3 = await req
      .post("/todo")
      .send({ title: "my first todo" })
      .set({ authorization: token });
    todoInDB = res3.body.data;
  });

  describe("users routes:", () => {
    // Note: user name must be sent in req query not req params
    it("req to get(/search) ,expect to get the correct user with his name", async () => {
      let res = await req.get("/user/search").query({ name: "mohamed salem" });
      expect(res.status).toBe(200);
      expect(res.body.data.name).toBe("mohamed salem");
    });

    it("req to get(/search) with invalid name ,expect res status and res message to be as expected", async () => {
      let res = await req.get("/user/search").query({ name: "not exist" });
      expect(res.status).toBe(200);
      expect(res.body.message).toContain("There is no user with name:");
    });

    it("req to delete(/) ,expect res status to be 200 and a message sent in res", async () => {
      let res = await req.delete("/user/");
      expect(res.status).toBe(200);
      expect(res.body.message).toBeDefined();
    });
  });

  describe("todos routes:", () => {
    it("req to patch(/) with id only ,expect res status and res message to be as expected", async () => {
      let res = await req
        .patch(`/todo/${todoInDB._id}`)
        .send({})
        .set({ authorization: token });
      expect(res.status).toBe(400);
      expect(res.body.message).toContain("must provide title and id");
    });

    it("req to patch(/) with id and title ,expect res status and res to be as expected", async () => {
      let res = await req
        .patch(`/todo/${todoInDB._id}`)
        .send({ title: "updated title" })
        .set({ authorization: token });
      expect(res.status).toBe(200);
      expect(res.body.data.title).toBe("updated title");
    });

    it("req to get( /user) ,expect to get all user's todos", async () => {
      let res = await req.get("/todo/user").set({ authorization: token });
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
    });

    it("req to get( /user) ,expect to not get any todos for user hasn't any todo", async () => {
      let res = await req.get("/todo/user").set({ authorization: token2 });
      expect(res.status).toBe(200);
      expect(res.body.message).toBeDefined();
    });
  });

  afterAll(async () => {
    await clearDatabase();
  });
});
