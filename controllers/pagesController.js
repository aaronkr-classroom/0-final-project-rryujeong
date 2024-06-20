// homeController.js
"use strict";

/**
 * Listing 12.5 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */
module.exports = {
  showHome: (req, res) => {
    res.render("index", {
      page: "home",
      title: "Home",
    });
  },
  showAbout: (req, res) => {
    res.render("_pages/about", {
      page: "about",
      title: "About",
    });
  },
  showOotd: (req, res) => {
    res.render("_pages/Ootd", {
      page: "Ootd",
      title: "Ootd",
    });
  },
  showTop: (req, res) => {
    res.render("_pages/Top", {
      page: "Top",
      title: "Top",
    });
  },
  showBottom: (req, res) => {
    res.render("_pages/Bottom", {
      page: "Bottom",
      title: "Bottom",
    });
  },
  showTransportation: (req, res) => {
    res.render("_pages/transportation", {
      page: "transportation",
      title: "Transportation",
    });
  },
};
