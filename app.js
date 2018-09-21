// config
var startURL = "https://google.com/";
var wanted = "";

// modules
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

// sub functions
var loadPage = (url) => {
    request(startURL, (error, response, body) => {
        if (error) console.log(error);
        var $ = cheerio.load(body);
        return $;
    });
};
var getLinks = (page) => {};
var catLinks = (links) => {};

// main function
var crawl = (url, autotraverse) => {
    console.log("Crawling: " + url);
    var page = loadPage(url);
    return page;
};

// start the function
crawl(startURL, false);