const User = require("../lab/lab2");

describe("Test User class constructor", () => {
  test("should create user with name, password and empty cart", () => {
    const user1 = new User("John", "password123");

    expect(user1.name).toBe("John");
    expect(user1.password).toBe("password123");
    expect(user1.cart).toEqual([]);
  });
});

describe("Test addToCart", () => {
  let user1;

  beforeEach(() => {
    user1 = new User("John", "password123");
  });

  test("should add product to cart array", () => {
    const product = { name: "Laptop", price: 1000 };

    user1.addToCart(product);

    expect(user1.cart.length).toBe(1);
    expect(user1.cart).toContain(product);
  });

  test("should add multiple products to cart", () => {
    const product1 = { name: "Laptop", price: 1000 };
    const product2 = { name: "Mouse", price: 50 };

    user1.addToCart(product1);
    user1.addToCart(product2);

    expect(user1.cart.length).toBe(2);
    expect(user1.cart).toEqual([product1, product2]);
  });
});

describe("Test calculateTotalCartPrice", () => {
  let user1;

  beforeEach(() => {
    user1 = new User("John", "password123");
  });

  test("should return 0 for empty cart", () => {
    const total = user1.calculateTotalCartPrice();

    expect(total).toBe(0);
  });

  test("should calculate correct total for one product", () => {
    user1.addToCart({ name: "Laptop", price: 1000 });

    const total = user1.calculateTotalCartPrice();

    expect(total).toBe(1000);
  });

  test("should calculate correct total for multiple products", () => {
    user1.addToCart({ name: "Laptop", price: 1000 });
    user1.addToCart({ name: "Mouse", price: 50 });
    user1.addToCart({ name: "Keyboard", price: 150 });

    const total = user1.calculateTotalCartPrice();

    expect(total).toBe(1200);
  });
});

describe("Test checkout", () => {
  let user1;
  let paymentModel;

  beforeEach(() => {
    user1 = new User("John", "password123");

    paymentModel = {
      goToVerifyPage: jest.fn(),
      returnBack: jest.fn(),
      isVerify: jest.fn(),
    };
  });

  test("should call all paymentModel methods", () => {
    paymentModel.isVerify.mockReturnValue(true);

    user1.checkout(paymentModel);

    expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
    expect(paymentModel.returnBack).toHaveBeenCalled();
    expect(paymentModel.isVerify).toHaveBeenCalled();
  });

  test("should return true if payment is verified", () => {
    paymentModel.isVerify.mockReturnValue(true);

    const result = user1.checkout(paymentModel);

    expect(result).toBe(true);
  });

  test("should return false if payment is not verified", () => {
    paymentModel.isVerify.mockReturnValue(false);

    const result = user1.checkout(paymentModel);

    expect(result).toBe(false);
  });
});
