const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
// const router = jsonServer.router({
//   posts: [...Array(20).keys()].map((id) => ({
//     id,
//     title: "json-server",
//     author: "typicode",
//   })),
// });
const middlewares = jsonServer.defaults();

const token = "insecure-token<3000";
const user = {
  email: "tvthong1995@gmail.com",
  password: "password",
};

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
// server.get("/login", (req, res) => {
//   res.json({ token });
// });

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

const authenticate = (req, res, next) => {
  if (req.headers.access_token !== token) {
    return res.send(401, "unauthorized");
  }
  next();
};

server.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== user.email) {
    return res.status(404).json({ email: "email is not found" });
  }

  if (password !== user.password) {
    return res.status(400).json({ password: "password is incorrect" });
  }

  return res.json({ token });
});

// Use default router
// server.use(authenticate, router);
server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});
