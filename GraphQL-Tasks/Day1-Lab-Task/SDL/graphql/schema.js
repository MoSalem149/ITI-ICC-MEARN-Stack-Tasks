const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Product {
        id: ID!
        name: String!
        price: Float!
        categoryId: Int!
    }

    input CreateProductDto {
        name: String!
        price: Float!
        categoryId: Int!
    }

    type RootQuery {
        products: [Product]
        product(id: ID!): Product
    }

    type RootMutation {
        createProduct(productInput: CreateProductDto): Product!
        updateProduct(id: ID!, productInput: CreateProductDto): Product!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
