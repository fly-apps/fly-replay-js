import express from 'express';
const app = express();
const vsn = process.env.VERSION;

app.get(`/api/${vsn}/hi/:name`, (req, resp) => {
  console.log(`[${vsn}] Serving ${req.params.name}`);
  resp.send(`Hi ${req.params.name}! This is version ${vsn}.`);
});
app.get(`/api/:vsn/hi/:name`, (req, resp) => {
  console.log(`[${vsn}] Replaying for ${req.params.name}`);
  resp.set('fly-replay', `app=fly-replay-${req.params.vsn}`).send();
});
app.get('*', (_req, resp) => {
  resp.status(404).send("Not Found");
});

app.listen(3000, () => {
  console.log(`App version ${vsn} listens on port 3000`);
});