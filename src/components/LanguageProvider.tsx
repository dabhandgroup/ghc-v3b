"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

type Lang = "en" | "el";

interface Translations {
  // Nav
  home: string;
  about: string;
  ventures: string;
  careers: string;
  press: string;
  investors: string;
  contact: string;
  dashboard: string;
  signIn: string;
  applyNow: string;
  viewAllVentures: string;
  // Hero
  slogan: string;
  heroSub: string;
  ourVentures: string;
  ourStory: string;
  // About
  whoWeAre: string;
  aboutTitle: string;
  aboutDesc: string;
  globalDay1Title: string;
  globalDay1Desc: string;
  shipFastTitle: string;
  shipFastDesc: string;
  disruptTitle: string;
  disruptDesc: string;
  dataTitle: string;
  dataDesc: string;
  seeBuilt: string;
  // Ventures
  whatWeBuilt: string;
  venturesTitle: string;
  venturesSub: string;
  // Break
  builtAustralia: string;
  // Culture
  ourCulture: string;
  cultureTitle: string;
  cultureP1: string;
  cultureP2: string;
  pressMedia: string;
  hqLocation: string;
  globalTeam: string;
  venturesCountries: string;
  // Team
  ourTeam: string;
  meetLeaders: string;
  teamSub: string;
  // Map
  globalPresence: string;
  whereWeOperate: string;
  // Tech Hub
  techHub: string;
  techHubTitle: string;
  techHubDesc: string;
  // Careers
  workWithUs: string;
  openRoles: string;
  viewAll: string;
  // CTA
  investWithUs: string;
  backNextWave: string;
  ctaDesc: string;
  investorAccess: string;
  generalEnquiries: string;
  // Investor Relations
  investorRelations: string;
  irTitle: string;
  irDesc: string;
  // Interest funnel
  registerInterest: string;
  interested: string;
  followProject: string;
  // Footer
  allRights: string;
  // Stats
  stat1Label: string;
  stat2Label: string;
  stat3Label: string;
  stat4Label: string;
}

const en: Translations = {
  home: "Home",
  about: "About",
  ventures: "Ventures",
  careers: "Careers",
  press: "Press",
  investors: "Investors",
  contact: "Contact",
  dashboard: "Dashboard",
  signIn: "Sign In",
  applyNow: "Apply Now",
  viewAllVentures: "View all ventures",
  slogan: "Companies connecting commerce",
  heroSub: "Entertainment, data, fashion, gaming, nightlife \u2014 we build disruptive ventures from Australia with global reach and relentless ambition.",
  ourVentures: "Our ventures",
  ourStory: "Our story",
  whoWeAre: "Who we are",
  aboutTitle: "Building the future\nof entertainment.",
  aboutDesc: "We\u2019re an Australian-based technology group building disruptive ventures across six verticals. Every venture starts with a conviction that something in the world is broken \u2014 and that we\u2019re the ones to fix it.",
  globalDay1Title: "Global from day one",
  globalDay1Desc: "Every venture is built for every market. Australia is home \u2014 everywhere else is the playground.",
  shipFastTitle: "Ship fast, iterate faster",
  shipFastDesc: "Small teams, high conviction. We move faster than anyone else because we have to.",
  disruptTitle: "Disrupt or don\u2019t bother",
  disruptDesc: "Incremental improvements bore us. Every venture targets a fundamentally broken market.",
  dataTitle: "Data in everything",
  dataDesc: "Signal over noise. Every decision, every venture, every pivot rooted in real intelligence.",
  seeBuilt: "See what we\u2019ve built",
  whatWeBuilt: "What we\u2019ve built",
  venturesTitle: "Six ventures.\nSix industries.",
  venturesSub: "Each one targets a broken market and reimagines it from first principles.",
  builtAustralia: "Built in Australia.\nDeployed everywhere.",
  ourCulture: "Our culture",
  cultureTitle: "Passion\nat play.",
  cultureP1: "We believe the best products come from people who are genuinely obsessed with what they\u2019re building. Our teams are small, global, and ruthlessly focused on outcomes over process.",
  cultureP2: "We don\u2019t think in products. We think in movements. Every venture in our portfolio started as a conviction that something in the world was fundamentally broken \u2014 and that we were the ones to fix it.",
  pressMedia: "Press & Media enquiries",
  hqLocation: "Collingwood, Melbourne, VIC \u2014 HQ",
  globalTeam: "Global Remote Team",
  venturesCountries: "Ventures in 40+ Countries",
  ourTeam: "Our team",
  meetLeaders: "Meet our\nleadership.",
  teamSub: "The people behind the ventures. Experienced leaders driving innovation across every vertical.",
  globalPresence: "Global presence",
  whereWeOperate: "Where our\nteams operate.",
  techHub: "Tech hub",
  techHubTitle: "Melbourne\nTech Hub.",
  techHubDesc: "Our headquarters in Collingwood, Melbourne houses our engineering, design, and operations teams. A purpose-built tech hub designed for collaboration and innovation.",
  workWithUs: "Work with us",
  openRoles: "Open roles.",
  viewAll: "View all roles",
  investWithUs: "Invest with us",
  backNextWave: "Back the next wave.",
  ctaDesc: "Get exclusive access to our portfolio, co-investment pipeline, and direct line to the founding team.",
  investorAccess: "Investor access",
  generalEnquiries: "General enquiries",
  investorRelations: "Investor relations",
  irTitle: "Investor\nRelations.",
  irDesc: "Access our investor portal for quarterly updates, financial highlights, and co-investment opportunities.",
  registerInterest: "Register Interest",
  interested: "Interested",
  followProject: "Follow Project",
  allRights: "All rights reserved.",
  stat1Label: "Global data records inside Profiles.io",
  stat2Label: "Ventures disrupting industries simultaneously",
  stat3Label: "Peer-to-peer fashion rental marketplace globally",
  stat4Label: "Made in Australia. Deployed everywhere on earth.",
};

const el: Translations = {
  home: "\u0391\u03c1\u03c7\u03b9\u03ba\u03ae",
  about: "\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac",
  ventures: "\u0395\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2",
  careers: "\u039a\u03b1\u03c1\u03b9\u03ad\u03c1\u03b1",
  press: "\u03a4\u03cd\u03c0\u03bf\u03c2",
  investors: "\u0395\u03c0\u03b5\u03bd\u03b4\u03c5\u03c4\u03ad\u03c2",
  contact: "\u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b1",
  dashboard: "\u03a0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2",
  signIn: "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
  applyNow: "\u0391\u03af\u03c4\u03b7\u03c3\u03b7",
  viewAllVentures: "\u0394\u03b5\u03af\u03c4\u03b5 \u03cc\u03bb\u03b5\u03c2 \u03c4\u03b9\u03c2 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2",
  slogan: "\u0395\u03c4\u03b1\u03b9\u03c1\u03b5\u03af\u03b5\u03c2 \u03c0\u03bf\u03c5 \u03c3\u03c5\u03bd\u03b4\u03ad\u03bf\u03c5\u03bd \u03c4\u03bf \u03b5\u03bc\u03c0\u03cc\u03c1\u03b9\u03bf",
  heroSub: "\u03a8\u03c5\u03c7\u03b1\u03b3\u03c9\u03b3\u03af\u03b1, \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1, \u03bc\u03cc\u03b4\u03b1, \u03c0\u03b1\u03b9\u03c7\u03bd\u03af\u03b4\u03b9\u03b1, \u03bd\u03c5\u03c7\u03c4\u03b5\u03c1\u03b9\u03bd\u03ae \u03b6\u03c9\u03ae \u2014 \u03c7\u03c4\u03af\u03b6\u03bf\u03c5\u03bc\u03b5 \u03b1\u03bd\u03b1\u03c4\u03c1\u03b5\u03c0\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u0391\u03c5\u03c3\u03c4\u03c1\u03b1\u03bb\u03af\u03b1 \u03bc\u03b5 \u03c0\u03b1\u03b3\u03ba\u03cc\u03c3\u03bc\u03b9\u03b1 \u03b5\u03bc\u03b2\u03ad\u03bb\u03b5\u03b9\u03b1.",
  ourVentures: "\u039f\u03b9 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2 \u03bc\u03b1\u03c2",
  ourStory: "\u0397 \u03b9\u03c3\u03c4\u03bf\u03c1\u03af\u03b1 \u03bc\u03b1\u03c2",
  whoWeAre: "\u03a0\u03bf\u03b9\u03bf\u03b9 \u03b5\u03af\u03bc\u03b1\u03c3\u03c4\u03b5",
  aboutTitle: "\u03a7\u03c4\u03af\u03b6\u03bf\u03c5\u03bc\u03b5 \u03c4\u03bf \u03bc\u03ad\u03bb\u03bb\u03bf\u03bd\n\u03c4\u03b7\u03c2 \u03c8\u03c5\u03c7\u03b1\u03b3\u03c9\u03b3\u03af\u03b1\u03c2.",
  aboutDesc: "\u0395\u03af\u03bc\u03b1\u03c3\u03c4\u03b5 \u03ad\u03bd\u03b1\u03c2 \u03c4\u03b5\u03c7\u03bd\u03bf\u03bb\u03bf\u03b3\u03b9\u03ba\u03cc\u03c2 \u03cc\u03bc\u03b9\u03bb\u03bf\u03c2 \u03bc\u03b5 \u03ad\u03b4\u03c1\u03b1 \u03c4\u03b7\u03bd \u0391\u03c5\u03c3\u03c4\u03c1\u03b1\u03bb\u03af\u03b1 \u03c0\u03bf\u03c5 \u03c7\u03c4\u03af\u03b6\u03b5\u03b9 \u03b1\u03bd\u03b1\u03c4\u03c1\u03b5\u03c0\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c3\u03b5 \u03ad\u03be\u03b9 \u03ba\u03bb\u03ac\u03b4\u03bf\u03c5\u03c2.",
  globalDay1Title: "\u03a0\u03b1\u03b3\u03ba\u03cc\u03c3\u03bc\u03b9\u03bf\u03b9 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03c0\u03c1\u03ce\u03c4\u03b7 \u03bc\u03ad\u03c1\u03b1",
  globalDay1Desc: "\u039a\u03ac\u03b8\u03b5 \u03b5\u03c0\u03b9\u03c7\u03b5\u03af\u03c1\u03b7\u03c3\u03b7 \u03c7\u03c4\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03ba\u03ac\u03b8\u03b5 \u03b1\u03b3\u03bf\u03c1\u03ac. \u0397 \u0391\u03c5\u03c3\u03c4\u03c1\u03b1\u03bb\u03af\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c4\u03bf \u03c3\u03c0\u03af\u03c4\u03b9 \u03bc\u03b1\u03c2.",
  shipFastTitle: "\u0393\u03c1\u03ae\u03b3\u03bf\u03c1\u03b7 \u03b1\u03bd\u03ac\u03c0\u03c4\u03c5\u03be\u03b7",
  shipFastDesc: "\u039c\u03b9\u03ba\u03c1\u03ad\u03c2 \u03bf\u03bc\u03ac\u03b4\u03b5\u03c2, \u03bc\u03b5\u03b3\u03ac\u03bb\u03b7 \u03c0\u03b5\u03c0\u03bf\u03af\u03b8\u03b7\u03c3\u03b7. \u039a\u03b9\u03bd\u03bf\u03cd\u03bc\u03b1\u03c3\u03c4\u03b5 \u03c0\u03b9\u03bf \u03b3\u03c1\u03ae\u03b3\u03bf\u03c1\u03b1 \u03b1\u03c0\u03cc \u03bf\u03c0\u03bf\u03b9\u03bf\u03bd\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5 \u03ac\u03bb\u03bb\u03bf.",
  disruptTitle: "\u0394\u03b9\u03b1\u03c4\u03b1\u03c1\u03b1\u03c7\u03ae \u03ae \u03c4\u03af\u03c0\u03bf\u03c4\u03b1",
  disruptDesc: "\u039a\u03ac\u03b8\u03b5 \u03b5\u03c0\u03b9\u03c7\u03b5\u03af\u03c1\u03b7\u03c3\u03b7 \u03c3\u03c4\u03bf\u03c7\u03b5\u03cd\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03b8\u03b5\u03bc\u03b5\u03bb\u03b9\u03c9\u03b4\u03ce\u03c2 \u03c7\u03b1\u03bb\u03b1\u03c3\u03bc\u03ad\u03bd\u03b7 \u03b1\u03b3\u03bf\u03c1\u03ac.",
  dataTitle: "\u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03c3\u03b5 \u03cc\u03bb\u03b1",
  dataDesc: "\u039a\u03ac\u03b8\u03b5 \u03b1\u03c0\u03cc\u03c6\u03b1\u03c3\u03b7 \u03b2\u03b1\u03c3\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03c3\u03b5 \u03c0\u03c1\u03b1\u03b3\u03bc\u03b1\u03c4\u03b9\u03ba\u03ae \u03b5\u03c5\u03c6\u03c5\u0390\u03b1.",
  seeBuilt: "\u0394\u03b5\u03af\u03c4\u03b5 \u03c4\u03b9 \u03c7\u03c4\u03af\u03c3\u03b1\u03bc\u03b5",
  whatWeBuilt: "\u03a4\u03b9 \u03c7\u03c4\u03af\u03c3\u03b1\u03bc\u03b5",
  venturesTitle: "\u0388\u03be\u03b9 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2.\n\u0388\u03be\u03b9 \u03ba\u03bb\u03ac\u03b4\u03bf\u03b9.",
  venturesSub: "\u039a\u03ac\u03b8\u03b5 \u03bc\u03af\u03b1 \u03c3\u03c4\u03bf\u03c7\u03b5\u03cd\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03c7\u03b1\u03bb\u03b1\u03c3\u03bc\u03ad\u03bd\u03b7 \u03b1\u03b3\u03bf\u03c1\u03ac \u03ba\u03b1\u03b9 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b1\u03bd\u03b1\u03c3\u03c7\u03b5\u03b4\u03b9\u03ac\u03b6\u03b5\u03b9 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03b1\u03c1\u03c7\u03ae.",
  builtAustralia: "\u03a7\u03c4\u03af\u03c3\u03c4\u03b7\u03ba\u03b5 \u03c3\u03c4\u03b7\u03bd \u0391\u03c5\u03c3\u03c4\u03c1\u03b1\u03bb\u03af\u03b1.\n\u0394\u03b9\u03b1\u03c4\u03af\u03b8\u03b5\u03c4\u03b1\u03b9 \u03c0\u03b1\u03bd\u03c4\u03bf\u03cd.",
  ourCulture: "\u0397 \u03ba\u03bf\u03c5\u03bb\u03c4\u03bf\u03cd\u03c1\u03b1 \u03bc\u03b1\u03c2",
  cultureTitle: "\u03a0\u03ac\u03b8\u03bf\u03c2\n\u03c3\u03c4\u03b7 \u03b4\u03bf\u03c5\u03bb\u03b5\u03b9\u03ac.",
  cultureP1: "\u03a0\u03b9\u03c3\u03c4\u03b5\u03cd\u03bf\u03c5\u03bc\u03b5 \u03cc\u03c4\u03b9 \u03c4\u03b1 \u03ba\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03b1 \u03c0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03b1 \u03c0\u03c1\u03bf\u03ad\u03c1\u03c7\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03b1\u03bd\u03b8\u03c1\u03ce\u03c0\u03bf\u03c5\u03c2 \u03c0\u03bf\u03c5 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b3\u03bd\u03ae\u03c3\u03b9\u03b1 \u03c0\u03b1\u03b8\u03b9\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03b9 \u03bc\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c0\u03bf\u03c5 \u03c7\u03c4\u03af\u03b6\u03bf\u03c5\u03bd.",
  cultureP2: "\u0394\u03b5\u03bd \u03c3\u03ba\u03b5\u03c6\u03c4\u03cc\u03bc\u03b1\u03c3\u03c4\u03b5 \u03c3\u03b5 \u03c0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03b1. \u03a3\u03ba\u03b5\u03c6\u03c4\u03cc\u03bc\u03b1\u03c3\u03c4\u03b5 \u03c3\u03b5 \u03ba\u03b9\u03bd\u03ae\u03bc\u03b1\u03c4\u03b1.",
  pressMedia: "\u03a4\u03cd\u03c0\u03bf\u03c2 & \u039c\u03ad\u03c3\u03b1",
  hqLocation: "\u039a\u03cc\u03bb\u03b9\u03bd\u03b3\u03b3\u03bf\u03c5\u03bd\u03c4, \u039c\u03b5\u03bb\u03b2\u03bf\u03cd\u03c1\u03bd\u03b7 \u2014 \u0388\u03b4\u03c1\u03b1",
  globalTeam: "\u03a0\u03b1\u03b3\u03ba\u03cc\u03c3\u03bc\u03b9\u03b1 \u039f\u03bc\u03ac\u03b4\u03b1",
  venturesCountries: "\u0395\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c3\u03b5 40+ \u03c7\u03ce\u03c1\u03b5\u03c2",
  ourTeam: "\u0397 \u03bf\u03bc\u03ac\u03b4\u03b1 \u03bc\u03b1\u03c2",
  meetLeaders: "\u0393\u03bd\u03c9\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03b7\u03bd\n\u03b7\u03b3\u03b5\u03c3\u03af\u03b1 \u03bc\u03b1\u03c2.",
  teamSub: "\u039f\u03b9 \u03ac\u03bd\u03b8\u03c1\u03c9\u03c0\u03bf\u03b9 \u03c0\u03af\u03c3\u03c9 \u03b1\u03c0\u03cc \u03c4\u03b9\u03c2 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2.",
  globalPresence: "\u03a0\u03b1\u03b3\u03ba\u03cc\u03c3\u03bc\u03b9\u03b1 \u03c0\u03b1\u03c1\u03bf\u03c5\u03c3\u03af\u03b1",
  whereWeOperate: "\u03a0\u03bf\u03cd \u03b4\u03c1\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03bf\u03c0\u03bf\u03b9\u03bf\u03cd\u03bd\u03c4\u03b1\u03b9\n\u03bf\u03b9 \u03bf\u03bc\u03ac\u03b4\u03b5\u03c2 \u03bc\u03b1\u03c2.",
  techHub: "\u03a4\u03b5\u03c7\u03bd\u03bf\u03bb\u03bf\u03b3\u03b9\u03ba\u03cc \u03ba\u03ad\u03bd\u03c4\u03c1\u03bf",
  techHubTitle: "\u039c\u03b5\u03bb\u03b2\u03bf\u03cd\u03c1\u03bd\u03b7\nTech Hub.",
  techHubDesc: "\u03a4\u03b1 \u03ba\u03b5\u03bd\u03c4\u03c1\u03b9\u03ba\u03ac \u03bc\u03b1\u03c2 \u03b3\u03c1\u03b1\u03c6\u03b5\u03af\u03b1 \u03c3\u03c4\u03bf \u039a\u03cc\u03bb\u03b9\u03bd\u03b3\u03b3\u03bf\u03c5\u03bd\u03c4 \u03c4\u03b7\u03c2 \u039c\u03b5\u03bb\u03b2\u03bf\u03cd\u03c1\u03bd\u03b7\u03c2 \u03c3\u03c4\u03b5\u03b3\u03ac\u03b6\u03bf\u03c5\u03bd \u03c4\u03b9\u03c2 \u03bf\u03bc\u03ac\u03b4\u03b5\u03c2 \u03bc\u03b7\u03c7\u03b1\u03bd\u03b9\u03ba\u03ae\u03c2, \u03c3\u03c7\u03b5\u03b4\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03ba\u03b1\u03b9 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03b9\u03ce\u03bd.",
  workWithUs: "\u0394\u03bf\u03c5\u03bb\u03ad\u03c8\u03c4\u03b5 \u03bc\u03b1\u03b6\u03af \u03bc\u03b1\u03c2",
  openRoles: "\u0391\u03bd\u03bf\u03b9\u03c7\u03c4\u03ad\u03c2 \u03b8\u03ad\u03c3\u03b5\u03b9\u03c2.",
  viewAll: "\u0394\u03b5\u03af\u03c4\u03b5 \u03cc\u03bb\u03b5\u03c2 \u03c4\u03b9\u03c2 \u03b8\u03ad\u03c3\u03b5\u03b9\u03c2",
  investWithUs: "\u0395\u03c0\u03b5\u03bd\u03b4\u03cd\u03c3\u03c4\u03b5 \u03bc\u03b1\u03b6\u03af \u03bc\u03b1\u03c2",
  backNextWave: "\u03a3\u03c4\u03b7\u03c1\u03af\u03be\u03c4\u03b5 \u03c4\u03bf \u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03bf \u03ba\u03cd\u03bc\u03b1.",
  ctaDesc: "\u0391\u03c0\u03bf\u03ba\u03c4\u03ae\u03c3\u03c4\u03b5 \u03b1\u03c0\u03bf\u03ba\u03bb\u03b5\u03b9\u03c3\u03c4\u03b9\u03ba\u03ae \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7 \u03c3\u03c4\u03bf \u03c7\u03b1\u03c1\u03c4\u03bf\u03c6\u03c5\u03bb\u03ac\u03ba\u03b9\u03cc \u03bc\u03b1\u03c2.",
  investorAccess: "\u03a0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7 \u03b5\u03c0\u03b5\u03bd\u03b4\u03c5\u03c4\u03ce\u03bd",
  generalEnquiries: "\u0393\u03b5\u03bd\u03b9\u03ba\u03ac \u03b5\u03c1\u03c9\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
  investorRelations: "\u03a3\u03c7\u03ad\u03c3\u03b5\u03b9\u03c2 \u03b5\u03c0\u03b5\u03bd\u03b4\u03c5\u03c4\u03ce\u03bd",
  irTitle: "\u03a3\u03c7\u03ad\u03c3\u03b5\u03b9\u03c2\n\u0395\u03c0\u03b5\u03bd\u03b4\u03c5\u03c4\u03ce\u03bd.",
  irDesc: "\u03a0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7 \u03c3\u03c4\u03b7\u03bd \u03c0\u03cd\u03bb\u03b7 \u03b5\u03c0\u03b5\u03bd\u03b4\u03c5\u03c4\u03ce\u03bd \u03b3\u03b9\u03b1 \u03c4\u03c1\u03b9\u03bc\u03b7\u03bd\u03b9\u03b1\u03af\u03b5\u03c2 \u03b5\u03bd\u03b7\u03bc\u03b5\u03c1\u03ce\u03c3\u03b5\u03b9\u03c2.",
  registerInterest: "\u0395\u03ba\u03b4\u03ae\u03bb\u03c9\u03c3\u03b7 \u03b5\u03bd\u03b4\u03b9\u03b1\u03c6\u03ad\u03c1\u03bf\u03bd\u03c4\u03bf\u03c2",
  interested: "\u0395\u03bd\u03b4\u03b9\u03b1\u03c6\u03ad\u03c1\u03bf\u03bc\u03b1\u03b9",
  followProject: "\u03a0\u03b1\u03c1\u03b1\u03ba\u03bf\u03bb\u03bf\u03cd\u03b8\u03b7\u03c3\u03b7",
  allRights: "\u039c\u03b5 \u03b5\u03c0\u03b9\u03c6\u03cd\u03bb\u03b1\u03be\u03b7 \u03c0\u03b1\u03bd\u03c4\u03cc\u03c2 \u03b4\u03b9\u03ba\u03b1\u03b9\u03ce\u03bc\u03b1\u03c4\u03bf\u03c2.",
  stat1Label: "\u03a0\u03b1\u03b3\u03ba\u03cc\u03c3\u03bc\u03b9\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03c3\u03c4\u03bf Profiles.io",
  stat2Label: "\u0395\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c0\u03bf\u03c5 \u03b1\u03bd\u03b1\u03c4\u03c1\u03ad\u03c0\u03bf\u03c5\u03bd \u03ba\u03bb\u03ac\u03b4\u03bf\u03c5\u03c2",
  stat3Label: "\u03a0\u03c1\u03ce\u03c4\u03b7 \u03c0\u03bb\u03b1\u03c4\u03c6\u03cc\u03c1\u03bc\u03b1 \u03b5\u03bd\u03bf\u03b9\u03ba\u03af\u03b1\u03c3\u03b7\u03c2 \u03bc\u03cc\u03b4\u03b1\u03c2 P2P",
  stat4Label: "\u039a\u03b1\u03c4\u03b1\u03c3\u03ba\u03b5\u03c5\u03ac\u03c3\u03c4\u03b7\u03ba\u03b5 \u03c3\u03c4\u03b7\u03bd \u0391\u03c5\u03c3\u03c4\u03c1\u03b1\u03bb\u03af\u03b1.",
};

const translations: Record<Lang, Translations> = { en, el };

const LangContext = createContext<{
  lang: Lang;
  t: Translations;
  setLang: (l: Lang) => void;
}>({
  lang: "en",
  t: en,
  setLang: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("ghc-lang") as Lang | null;
    if (stored === "en" || stored === "el") {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("ghc-lang", l);
  }, []);

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
}
