"use strict";

const express = require("express"),
    app = express(),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),
    subscribersController = require("./controllers/subscriberController"),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose");


    mongoose.connect(
        "mongodb+srv://it231:Kendrick220@cluster0-tr8nc.gcp.mongodb.net/summercamp_db?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );

mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(homeController.logRequestPaths);




app.get("/", (req, res) => {
    res.render("index");
});

app.get("/class", homeController.showClass);
app.get("/about", homeController.showAbout);
app.get("/more", homeController.showMore);
app.get("/coaches", homeController.showCoaches);

app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/register", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);



app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});