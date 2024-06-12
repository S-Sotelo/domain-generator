/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //no autoguardado
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let tlds = [".com", ".es", ".net", ".co", ".cl", ".org"];

  let domainNames = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          let domainName = pronoun + adj + noun + tld;
          domainNames.push(domainName);
          console.log(domainName);
        }
      }
    }
  }

  document.body.innerHTML =
    "<ul>" +
    domainNames.map(domainName => "<li>" + domainName + "</li>").join(" ") +
    "</ul>";
};
