import express from 'express';

const app = express();
const version = process.env.VERSION;

app.get(`/api/${version}/welcome/:name`, async (request, response) => {
  console.log(`[${version}] Handling request for ${request.params.name}`);
  response.send(`Hello ${request.params.name}! This is app version ${version}.`);
});
app.get(`/api/:version/welcome/:name`, (request, response) => {
  console.log(`[${version}] Replaying request for ${request.params.name}`);
  response.set('fly-replay', `app=replay-js-${request.params.version}`).send();
});
app.get('*', (_request, response) => {
  response.status(404).send("<div>404 Not Found</div>");
});

app.listen(3000, () => {
  console.log(`Server with app version ${version} is listening on port 3000`);
});