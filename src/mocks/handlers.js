import { rest } from 'msw'
export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts?_limit=10', (req, res, ctx) => {
    // Persist user's authentication in the session
   
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json([
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },])
    )
  }),

]