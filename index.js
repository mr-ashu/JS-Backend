const jsonServer =require("json-server")
const server =jsonServer.create();

const path =jsonServer.router("db.json");
const middlewares=jsonServer.defaults();

const port=8080;

server.use(middlewares);
server.use(path)

server.listen(port)