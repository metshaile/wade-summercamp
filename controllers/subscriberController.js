"use strict";

const Subscriber = require("../models/subscriber");

exports.getAllSubscribers = (req, res) => {
    Subscriber.find({})
        .exec()
        .then(subscribers => {
            res.render("subscribers", {
                subscribers: subscribers
            });
        }) 
        .catch(error => {
            console.log(error.message);
            return[];
        })
        .then(() => {
            console.log("promise complete");
        });
    };

exports.getSubscriptionPage = (req, res) => {
    res.render("register");
};



exports.saveSubscriber = (req, res) => {
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        childAge: req.body.childAge,
        phoneNumber: req.body.phoneNumber
    });
    newSubscriber.save()
    .then(() => {
        res.render("thanks");
    })
    .catch(error => {
        res.send(error);
    })
};