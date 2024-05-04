import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(express.static("public"));

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts }); // Passing the posts array to the index.ejs template
});

app.get("/display", (req, res) => {
  res.render("display.ejs", { posts });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/submit", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  let count=1;
  posts.push({ title, content,count });
   // Pushing the new post to the posts array
  res.redirect("/display"); // Redirecting to the display page after submitting the form
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
