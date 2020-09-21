import React from "react";
import Contacts from "../db/contacts.json";
import Calendar from "../db/calendar.json";
import Dropbox from "../db/dropbox.json";
import Slack from "../db/slack.json";
import Tweet from "../db/tweet.json";
import { dateFormat, relativeDate } from "./utils";

// Get Data from json files
export const getData = (search, type = "all") => {
    let filtered = [];

  if (type === "contacts" || type === "all") {
     filtered.contacts = Contacts.contacts.filter((data) => {
      data.last_contact = dateFormat(data.last_contact);
      return data.matching_terms.includes(search);
    });
  }

  if (type === "calendar" || type === "all") {
    filtered.calendar = Calendar.calendar.filter((data) => {
      data.date = dateFormat(data.date);   
      return data.matching_terms.includes(search);
    });
  }

  if (type === "dropbox" || type === "all") {
    filtered.dropbox = Dropbox.dropbox.filter((data) => {
      data.created = dateFormat(data.created);
      return data.matching_terms.includes(search);
    });
  }

  if (type === "slack" || type === "all") {
    filtered.slack = Slack.slack.filter((data) => {
      data.channel = '#' + data.channel;
      data.timestamp = relativeDate(data.timestamp);
      return data.matching_terms.includes(search);
    });
  }

  if (type === "tweet" || type === "all") {
    filtered.tweet = Tweet.tweet.filter((data) => {
      data.timestamp = relativeDate(data.timestamp);
      return data.matching_terms.includes(search);
    });
  }
  
  return {
    filtered,
  };
};
