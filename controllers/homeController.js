"use strict";

var courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }
];

exports.showClass = (req, res) => {
    res.render("class", {
        offeredCourses: courses
    });
};

exports.showAbout = (req, res) => {
    res.render("about", {
        offeredCourses: courses
    });
};

exports.showMore = (req, res) => {
    res.render("more", {
        offeredCourses: courses
    });
};

exports.showCoaches = (req, res) => {
    res.render("coaches", {
        offeredCourses: courses
    });
};

exports.showSignUp = (req, res) => {
    res.render("register");
};

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};

exports.logRequestPaths = (req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
}