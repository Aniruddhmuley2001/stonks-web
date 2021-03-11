const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models");
const Stock = require("./stocks");
const Holding = require("./holdings");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { response } = require("express");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 8080;

mongoose.connect(
  "mongodb+srv://dcei-stonks-2021:dcei-stonks-123@stonks-cluster.5u5xc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

function authToken(req, res, next) {
  console.log("REQ HEADERS", req.headers);
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  if (token == null) {
    res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, user) => {
    if (err) {
      res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/signUp", async (req, res) => {
  let { username, email, password } = req.body;

  const emailExist = await User.findOne({ email: email }).exec();

  if (emailExist) {
    res.send("Email already exist");
  } else {
    const usernameExist = await User.findOne({ email: email }).exec();

    if (usernameExist) {
      res.send("Username Exist");
    } else {
      const user = new User({
        username: username,
        email: email,
        password: password,
        credits: 3000,
      });

      await user.save();
      const accessToken = jwt.sign(
        user.username,
        process.env.ACCESS_SECRET_KEY
      );
      res.json({ accessToken: accessToken });
    }
  }
});

app.post("/signIn", async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findOne({ email: email, password: password }).exec();

  if (user) {
    const accessToken = jwt.sign(user.username, process.env.ACCESS_SECRET_KEY);
    res.json({ accessToken: accessToken });
  } else {
    res.send("Couldnot find user");
  }
});

app.post("/buy", authToken, async (req, res) => {
  let {index,quantity} = req.body

  console.log(index)
  if (req.user && index && quantity) {
    let stock = await Stock.findOne({ index: index }).exec();
    quantity = parseInt(quantity);
    if (!stock) {
      res.send(`${index} Stock doesnot exist`);
    } else {
      let user = await User.findOne({ username: req.user }).exec();

      if (!user) {
        res.send("User doesnot exist");
      } else {
        if (user.credits < stock.price * quantity) {
          res.send("Not enough credits");
        } else {
          let holding = await Holding.findOne({
            stockId: stock._id,
            userId: user._id,
          }).exec();

          if (!holding) {
            let holding = new Holding({
              userId: user._id,
              stockId: stock._id,
              quantity: quantity,
            });

            await holding.save();
          } else {
            holding.quantity += quantity;
            await holding.save();
          }

          user.credits = user.credits - stock.price * quantity;

          await user.save();

          res.send("Successfull");
        }
      }
    }
  } else {
    res.send("Error in request");
  }
});

app.post("/sell", authToken, async (req, res) => {
  let { index, quantity } = req.body;
  if (req.user && index && quantity) {
    let stock = await Stock.findOne({ index: index }).exec();
    quantity = parseInt(quantity);

    if (!stock) {
      res.send(`${index} Stock doesnot exist`);
    }

    let user = await User.findOne({ username: req.user }).exec();
    console.log(req.user);

    if (!user) {
      res.send("User doesnot exist");
    } else {
      let holding = await Holding.findOne({
        stockId: stock._id,
        userId: user._id,
      }).exec();

      if (!holding) {
        res.send("You don't own this stock");
      } else {
        if (holding.quantity < quantity) {
          res.send(
            `You hold ${holding.quantity} share and not ${quantity} shares`
          );
        } else {
          user.credits = user.credits + stock.price * quantity;

          await user.save();
          if (quantity == holding.quantity) {
            await Holding.deleteOne({ _id: holding.id }).exec();
          } else {
            holding.quantity = holding.quantity - quantity;
            await holding.save();
          }

          res.send("Successfull");
        }
      }
    }
  } else {
    res.send("Error in request");
  }
});

app.get("/stocks", async (req, res) => {
  let stocks = await Stock.find().exec();

  res.json(stocks);
});

app.get("/holdings", authToken, async (req, res) => {
  if (req.user) {
    let user = await User.findOne({ username: req.user }).exec();
    let holding = await Holding.find({ userId: user._id }).populate('stockId').exec();

    res.json(holding);
  } else {
    res.send("Error in request");
  }
});

app.get("/verifyToken", authToken, async (req, res) => {
  if (req.user) {
    let user = await User.findOne({ username: req.user }).exec();
    if (user) {
      res.json(user);
    } else {
      res.send("User not found");
    }
  } else {
    res.send("Error in request");
  }
});
app.post("/insertStocks", async (req, res) => {
  let { index, name, price } = req.body;

  let stock = await Stock.findOne({ index: index }).exec();

  if (stock) {
    res.send("Stock exist");
  }

  let newStock = new Stock({
    index: index,
    price: price,
    name: name,
  });

  await newStock.save();

  res.send("Successfull");
});

app.get("/leaderboard",authToken,async (req,res)=>{

  let leaderboard = await Holding.find().populate(['userId','stockId'])
  let result  = []
  for(let i = 0 ;i<leaderboard.length;i++){
    let x = {
      username:  leaderboard[i].userId.username,
      quantity : leaderboard[i].quantity,
      price : leaderboard[i].stockId.price
    }
    result.push(x)
  }


  res.json(result)

})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
