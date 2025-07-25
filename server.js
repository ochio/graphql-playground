import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`type Query { hello: String } `)

const rootValue = {
  hello() {
    return "Hello World"
  }
}

graphql({
  schema,
  source: "{ hello }",
  rootValue,
}).then((res) => {
  console.log(res);
})