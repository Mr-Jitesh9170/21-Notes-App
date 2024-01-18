const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("views engine", "ejs")



let NotesData = [
  {
    title: "Javascript Animations",
    description: "Javascript animations are pretty cool"
  },
  {
    title: "Learn Morgan 12",
    description: "Morgan is a Nodejs middleware to log HTTP requests Maintaining and reading logs can help you better."
  },
  {
    title: "Build a React Portfolio with T",
    description: "Learn how to add Tailwind CSS to you react project and build a portfolio with tailwind grid layout."
  },
  {
    title: "Javascript Animations",
    description: "Javascript animations are pretty cool"
  },
  {
    title: "Learn Morgan 12",
    description: "Morgan is a Nodejs middleware to log HTTP requests Maintaining and reading logs can help you better."
  },
  {
    title: "Build a React Portfolio with T",
    description: "Learn how to add Tailwind CSS to you react project and build a portfolio with tailwind grid layout."
  }, {
    title: "Javascript Animations",
    description: "Javascript animations are pretty cool"
  },
  {
    title: "Learn Morgan 12",
    description: "Morgan is a Nodejs middleware to log HTTP requests Maintaining and reading logs can help you better."
  },
  {
    title: "Build a React Portfolio with T",
    description: "Learn how to add Tailwind CSS to you react project and build a portfolio with tailwind grid layout."
  },
  {
    title: "Javascript Animations",
    description: "Javascript animations are pretty cool"
  },
  {
    title: "Learn Morgan 12",
    description: "Morgan is a Nodejs middleware to log HTTP requests Maintaining and reading logs can help you better."
  },
  {
    title: "Build a React Portfolio with T",
    description: "Learn how to add Tailwind CSS to you react project and build a portfolio with tailwind grid layout."
  },
  {
    title: "Javascript Animations",
    description: "Javascript animations are pretty cool"
  },
  {
    title: "Learn Morgan 12",
    description: "Morgan is a Nodejs middleware to log HTTP requests Maintaining and reading logs can help you better."
  },
  {
    title: "Build a React Portfolio with T",
    description: "Learn how to add Tailwind CSS to you react project and build a portfolio with tailwind grid layout."
  },
  {
    title: "Javascript Animations",
    description: "Javascript animations are pretty cool"
  },
  {
    title: "Learn Morgan 12",
    description: "Morgan is a Nodejs middleware to log HTTP requests Maintaining and reading logs can help you better."
  },
  {
    title: "Build a React Portfolio with T",
    description: "Learn how to add Tailwind CSS to you react project and build a portfolio with tailwind grid layout."
  },
]

app.get("/", (req, res) => {
  res.render("notes.ejs", { NotesData });
});


app.get("/create", (req, res) => {
  res.render("createNotes.ejs")
})

app.get("/update", (req, res) => {
  res.render("Update.ejs")
})

app.post("/create", (req, res) => {
  NotesData.push({
    title: req.body.title,
    description: req.body.description
  })
  res.redirect("/")
})

app.listen(port, () => {
  console.log("Server is live on -> ", port);
});
