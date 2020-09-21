const contacts = require("../db/contacts.json");
const calendar = require("../db/calendar.json");
const dropbox = require("../db/dropbox.json");
const slack = require("../db/slack.json");
const tweet = require("../db/tweet.json");


module.exports = function ()  {
    return {
        contacts: contacts,
        calendar: calendar,
        dropbox: dropbox,
        slack: slack,
        tweet: tweet
    }
};
