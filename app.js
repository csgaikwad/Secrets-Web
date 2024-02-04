const bodyParser = require("body-parser");
const express = require("express");
// const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
var username;

mongoose.connect(
  // "mongodb link"
);

const secretSchema = new mongoose.Schema(
  { content: { type: String, required: true } },
  { timestamps: true }
);

const userSchema = {
  email: { type: String, required: true },
  password: { type: String, required: true },
  secrets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Secret" }],
};

const User = new mongoose.model("User", userSchema);
const Secret = mongoose.model("Secret", secretSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/register", function (req, res) {
  res.render("register");
});
app.get("/login", function (req, res) {
  res.render("login");
});
app.get("/logout", (req, res) => {
  setTimeout(() => {
    res.render("home");
  }, 2000);
});
app.get("/submit", (req, res) => {
  res.render("submit");
});

app.post("/register", async function (req, res) {
  try {
    console.log(req.body);
    const newUser = new User(req.body);
    await newUser.save();
    username = req.body.email;
    console.log(username);
    res.render("submit");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/submit", async (req, res) => {
  try {
    const newSecret = new Secret({ content: req.body.secret });
    console.log(newSecret);
    const user = await User.findOne({ email: username });
    if (user) {
      await newSecret.save();
      user.secrets = user.secrets || [];
      user.secrets.push(newSecret);
      await user.save();
      var formatedDate = newSecret.createdAt.toLocaleString();
      res.render("secrets", {
        secret: newSecret.content,
        date: formatedDate,
      });
    } else {
      res.json({ status: "failed", message: "User not found" });
      console.log("User not found.");
    }
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/login", (req, res) => {
  setTimeout(async () => {
    const { email: user, password } = req.body;
    // const user = req.body.email; const pass = req.body.password;
    const foundUser = await User.findOne({ email: user });
    try {
      if (foundUser) {
        if (foundUser.password === password) {
          const UserSecrets = await User.findOne({ email: user }).populate(
            "secrets"
          );
          console.log(UserSecrets);
          const secretArray = UserSecrets.secrets;
          let a;
          let b;
          if (secretArray.length > 0) {
            a = secretArray[secretArray.length - 1].content;
           b = secretArray[secretArray.length - 1].createdAt;
            console.log("Content of the last secret: " + a);
            console.log("Time of the creation of last secret: " + b);
          } else {
            console.log("No secrets available for this user.");
          }
          res.render("secrets", { secret: a , date : b });
          username = foundUser.email;
        } else {
          res.json({ status: "failed", message: "Wrong Password" });
        }
      } else {
        res.json({ status: "failed", message: "User not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }, 2000);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
