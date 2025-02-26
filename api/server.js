const jsonServer = require("json-server");
const jsonServerAuth = require("json-server-auth");
const express = require("express");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(express.json());
server.use(middlewares);

const rules = jsonServerAuth.rewriter({
  users: 644,
  products: 644,
  carts: 600,
});

server.db = router.db;
server.use(rules);
server.use(jsonServerAuth);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
