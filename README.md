# An example VanillaJS app showing off `fly-replay`

[![Youtube Thumbnail](https://img.youtube.com/vi/riCh9Xeuf0s/0.jpg)](https://www.youtube.com/watch?v=riCh9Xeuf0s)

Dynamic Request Routing is a unique Fly.io networking feature that allows re-routing requests to other apps, regions, or machines. To use it, you must put an HTTP `fly-replay` header on a response to the request your app received. Once our proxy receives the response with the `fly-replay` header, it will re-send the request according to the header value - e.g., to another app. It is useful, for example, to implement a multi-region Postgres. `fly-replay` allows for re-routing write requests to the master Postgres node.

How to install flyctl: https://fly.io/docs/flyctl/install/

Dynamic Request Routing: https://fly.io/docs/networking/dynamic-request-routing/

Multi-region databases and `fly-replay`: https://fly.io/docs/blueprints/multi-region-fly-replay/

Multi-tenant apps with single-tenant SQLite databases in global Tigris buckets (relies on the fly-replay): https://fly.io/javascript-journal/single-tenant-sqlite-in-tigris/

Real-Time Collaboration with Replicache and Fly-Replay: https://fly.io/blog/replicache-machines-demo/

Fly.io .internal DNS: https://fly.io/docs/networking/private-networking/ 

## Steps to run the demo

1. Set up your app names in  `fly.v{1,2}.toml`
2. Create the apps: `fly apps create js-replay-v{1,2}`.
3. Deploy the apps: `fly deploy --config fly.v{1,2}.toml` 

Check out the video to learn more.
