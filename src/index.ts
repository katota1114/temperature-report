import express from "express";
import server from "https";
import fs from "fs";

let port = process.env.PORT;
if (port == null || port == "") {
  port = "3000";
}

const app: express.Express = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const options : server.ServerOptions = {
  key: fs.readFileSync("./privatekey.pem"),
  cert: fs.readFileSync("./cert.pem"),
};
server.createServer(options, app).listen(8443);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.listen(port, () => {
  console.log(`Start on port ${port}`);
});
