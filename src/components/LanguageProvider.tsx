"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

export type Lang = "en" | "el" | "es" | "fr" | "de" | "it" | "pt" | "zh" | "ja" | "ar" | "ko" | "hi" | "nl" | "ru" | "tr";

export interface LangOption {
  code: Lang;
  label: string;
  flag: string;
}

export const LANGUAGES: LangOption[] = [
  { code: "en", label: "English", flag: "\ud83c\uddec\ud83c\udde7" },
  { code: "el", label: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac", flag: "\ud83c\uddec\ud83c\uddf7" },
  { code: "es", label: "Espa\u00f1ol", flag: "\ud83c\uddea\ud83c\uddf8" },
  { code: "fr", label: "Fran\u00e7ais", flag: "\ud83c\uddeb\ud83c\uddf7" },
  { code: "de", label: "Deutsch", flag: "\ud83c\udde9\ud83c\uddea" },
  { code: "it", label: "Italiano", flag: "\ud83c\uddee\ud83c\uddf9" },
  { code: "pt", label: "Portugu\u00eas", flag: "\ud83c\udde7\ud83c\uddf7" },
  { code: "zh", label: "\u4e2d\u6587", flag: "\ud83c\udde8\ud83c\uddf3" },
  { code: "ja", label: "\u65e5\u672c\u8a9e", flag: "\ud83c\uddef\ud83c\uddf5" },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629", flag: "\ud83c\uddf8\ud83c\udde6" },
  { code: "ko", label: "\ud55c\uad6d\uc5b4", flag: "\ud83c\uddf0\ud83c\uddf7" },
  { code: "hi", label: "\u0939\u093f\u0928\u094d\u0926\u0940", flag: "\ud83c\uddee\ud83c\uddf3" },
  { code: "nl", label: "Nederlands", flag: "\ud83c\uddf3\ud83c\uddf1" },
  { code: "ru", label: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439", flag: "\ud83c\uddf7\ud83c\uddfa" },
  { code: "tr", label: "T\u00fcrk\u00e7e", flag: "\ud83c\uddf9\ud83c\uddf7" },
];

interface Translations {
  home: string; about: string; ventures: string; careers: string; press: string;
  investors: string; contact: string; dashboard: string; signIn: string; applyNow: string;
  viewAllVentures: string; slogan: string; heroSub: string; ourVentures: string; ourStory: string;
  whoWeAre: string; aboutTitle: string; aboutDesc: string; globalDay1Title: string; globalDay1Desc: string;
  shipFastTitle: string; shipFastDesc: string; disruptTitle: string; disruptDesc: string;
  dataTitle: string; dataDesc: string; seeBuilt: string; whatWeBuilt: string; venturesTitle: string;
  venturesSub: string; builtAustralia: string; ourCulture: string; cultureTitle: string;
  cultureP1: string; cultureP2: string; pressMedia: string; hqLocation: string; globalTeam: string;
  venturesCountries: string; ourTeam: string; meetLeaders: string; teamSub: string;
  globalPresence: string; whereWeOperate: string; techHub: string; techHubTitle: string;
  techHubDesc: string; workWithUs: string; openRoles: string; viewAll: string;
  investWithUs: string; backNextWave: string; ctaDesc: string; investorAccess: string;
  generalEnquiries: string; investorRelations: string; irTitle: string; irDesc: string;
  registerInterest: string; interested: string; followProject: string; allRights: string;
  stat1Label: string; stat2Label: string; stat3Label: string; stat4Label: string;
}

const en: Translations = {
  home: "Home", about: "About", ventures: "Ventures", careers: "Careers", press: "Press",
  investors: "Investors", contact: "Contact", dashboard: "Dashboard", signIn: "Sign In",
  applyNow: "Apply Now", viewAllVentures: "View all ventures",
  slogan: "Companies connecting commerce",
  heroSub: "Entertainment, data, fashion, gaming, nightlife \u2014 we build disruptive ventures from Australia with global reach and relentless ambition.",
  ourVentures: "Our ventures", ourStory: "Our story", whoWeAre: "Who we are",
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
  seeBuilt: "See what we\u2019ve built", whatWeBuilt: "What we\u2019ve built",
  venturesTitle: "Six ventures.\nSix industries.",
  venturesSub: "Each one targets a broken market and reimagines it from first principles.",
  builtAustralia: "Built in Australia.\nDeployed everywhere.",
  ourCulture: "Our culture", cultureTitle: "Passion\nat play.",
  cultureP1: "We believe the best products come from people who are genuinely obsessed with what they\u2019re building. Our teams are small, global, and ruthlessly focused on outcomes over process.",
  cultureP2: "We don\u2019t think in products. We think in movements. Every venture in our portfolio started as a conviction that something in the world was fundamentally broken \u2014 and that we were the ones to fix it.",
  pressMedia: "Press & Media enquiries",
  hqLocation: "Collingwood, Melbourne, VIC \u2014 HQ", globalTeam: "Global Remote Team",
  venturesCountries: "Ventures in 40+ Countries", ourTeam: "Our team",
  meetLeaders: "Meet our\nleadership.",
  teamSub: "The people behind the ventures. Experienced leaders driving innovation across every vertical.",
  globalPresence: "Global presence", whereWeOperate: "Where our\nteams operate.",
  techHub: "Tech hub", techHubTitle: "Melbourne\nTech Hub.",
  techHubDesc: "Our headquarters in Collingwood, Melbourne houses our engineering, design, and operations teams. A purpose-built tech hub designed for collaboration and innovation.",
  workWithUs: "Work with us", openRoles: "Open roles.", viewAll: "View all roles",
  investWithUs: "Invest with us", backNextWave: "Back the next wave.",
  ctaDesc: "Get exclusive access to our portfolio, co-investment pipeline, and direct line to the founding team.",
  investorAccess: "Investor access", generalEnquiries: "General enquiries",
  investorRelations: "Investor relations", irTitle: "Investor\nRelations.",
  irDesc: "Access our investor portal for quarterly updates, financial highlights, and co-investment opportunities.",
  registerInterest: "Register Interest", interested: "Interested", followProject: "Follow Project",
  allRights: "All rights reserved.",
  stat1Label: "Global data records inside Profiles.io",
  stat2Label: "Ventures disrupting industries simultaneously",
  stat3Label: "Peer-to-peer fashion rental marketplace globally",
  stat4Label: "Made in Australia. Deployed everywhere on earth.",
};

const el: Translations = {
  home: "\u0391\u03c1\u03c7\u03b9\u03ba\u03ae", about: "\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac", ventures: "\u0395\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2", careers: "\u039a\u03b1\u03c1\u03b9\u03ad\u03c1\u03b1", press: "\u03a4\u03cd\u03c0\u03bf\u03c2",
  investors: "\u0395\u03c0\u03b5\u03bd\u03b4\u03c5\u03c4\u03ad\u03c2", contact: "\u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b1", dashboard: "\u03a0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2", signIn: "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7", applyNow: "\u0391\u03af\u03c4\u03b7\u03c3\u03b7",
  viewAllVentures: "\u0394\u03b5\u03af\u03c4\u03b5 \u03cc\u03bb\u03b5\u03c2 \u03c4\u03b9\u03c2 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2",
  slogan: "\u0395\u03c4\u03b1\u03b9\u03c1\u03b5\u03af\u03b5\u03c2 \u03c0\u03bf\u03c5 \u03c3\u03c5\u03bd\u03b4\u03ad\u03bf\u03c5\u03bd \u03c4\u03bf \u03b5\u03bc\u03c0\u03cc\u03c1\u03b9\u03bf",
  heroSub: "\u03a8\u03c5\u03c7\u03b1\u03b3\u03c9\u03b3\u03af\u03b1, \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1, \u03bc\u03cc\u03b4\u03b1, \u03c0\u03b1\u03b9\u03c7\u03bd\u03af\u03b4\u03b9\u03b1, \u03bd\u03c5\u03c7\u03c4\u03b5\u03c1\u03b9\u03bd\u03ae \u03b6\u03c9\u03ae \u2014 \u03c7\u03c4\u03af\u03b6\u03bf\u03c5\u03bc\u03b5 \u03b1\u03bd\u03b1\u03c4\u03c1\u03b5\u03c0\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u0391\u03c5\u03c3\u03c4\u03c1\u03b1\u03bb\u03af\u03b1 \u03bc\u03b5 \u03c0\u03b1\u03b3\u03ba\u03cc\u03c3\u03bc\u03b9\u03b1 \u03b5\u03bc\u03b2\u03ad\u03bb\u03b5\u03b9\u03b1.",
  ourVentures: "\u039f\u03b9 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2 \u03bc\u03b1\u03c2", ourStory: "\u0397 \u03b9\u03c3\u03c4\u03bf\u03c1\u03af\u03b1 \u03bc\u03b1\u03c2", whoWeAre: "\u03a0\u03bf\u03b9\u03bf\u03b9 \u03b5\u03af\u03bc\u03b1\u03c3\u03c4\u03b5",
  aboutTitle: "\u03a7\u03c4\u03af\u03b6\u03bf\u03c5\u03bc\u03b5 \u03c4\u03bf \u03bc\u03ad\u03bb\u03bb\u03bf\u03bd\n\u03c4\u03b7\u03c2 \u03c8\u03c5\u03c7\u03b1\u03b3\u03c9\u03b3\u03af\u03b1\u03c2.",
  aboutDesc: "\u0395\u03af\u03bc\u03b1\u03c3\u03c4\u03b5 \u03ad\u03bd\u03b1\u03c2 \u03c4\u03b5\u03c7\u03bd\u03bf\u03bb\u03bf\u03b3\u03b9\u03ba\u03cc\u03c2 \u03cc\u03bc\u03b9\u03bb\u03bf\u03c2 \u03bc\u03b5 \u03ad\u03b4\u03c1\u03b1 \u03c4\u03b7\u03bd \u0391\u03c5\u03c3\u03c4\u03c1\u03b1\u03bb\u03af\u03b1 \u03c0\u03bf\u03c5 \u03c7\u03c4\u03af\u03b6\u03b5\u03b9 \u03b1\u03bd\u03b1\u03c4\u03c1\u03b5\u03c0\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c3\u03b5 \u03ad\u03be\u03b9 \u03ba\u03bb\u03ac\u03b4\u03bf\u03c5\u03c2.",
  globalDay1Title: "\u03a0\u03b1\u03b3\u03ba\u03cc\u03c3\u03bc\u03b9\u03bf\u03b9 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03c0\u03c1\u03ce\u03c4\u03b7 \u03bc\u03ad\u03c1\u03b1",
  globalDay1Desc: "\u039a\u03ac\u03b8\u03b5 \u03b5\u03c0\u03b9\u03c7\u03b5\u03af\u03c1\u03b7\u03c3\u03b7 \u03c7\u03c4\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03ba\u03ac\u03b8\u03b5 \u03b1\u03b3\u03bf\u03c1\u03ac. \u0397 \u0391\u03c5\u03c3\u03c4\u03c1\u03b1\u03bb\u03af\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c4\u03bf \u03c3\u03c0\u03af\u03c4\u03b9 \u03bc\u03b1\u03c2.",
  shipFastTitle: "\u0393\u03c1\u03ae\u03b3\u03bf\u03c1\u03b7 \u03b1\u03bd\u03ac\u03c0\u03c4\u03c5\u03be\u03b7", shipFastDesc: "\u039c\u03b9\u03ba\u03c1\u03ad\u03c2 \u03bf\u03bc\u03ac\u03b4\u03b5\u03c2, \u03bc\u03b5\u03b3\u03ac\u03bb\u03b7 \u03c0\u03b5\u03c0\u03bf\u03af\u03b8\u03b7\u03c3\u03b7. \u039a\u03b9\u03bd\u03bf\u03cd\u03bc\u03b1\u03c3\u03c4\u03b5 \u03c0\u03b9\u03bf \u03b3\u03c1\u03ae\u03b3\u03bf\u03c1\u03b1 \u03b1\u03c0\u03cc \u03bf\u03c0\u03bf\u03b9\u03bf\u03bd\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5 \u03ac\u03bb\u03bb\u03bf.",
  disruptTitle: "\u0394\u03b9\u03b1\u03c4\u03b1\u03c1\u03b1\u03c7\u03ae \u03ae \u03c4\u03af\u03c0\u03bf\u03c4\u03b1", disruptDesc: "\u039a\u03ac\u03b8\u03b5 \u03b5\u03c0\u03b9\u03c7\u03b5\u03af\u03c1\u03b7\u03c3\u03b7 \u03c3\u03c4\u03bf\u03c7\u03b5\u03cd\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03b8\u03b5\u03bc\u03b5\u03bb\u03b9\u03c9\u03b4\u03ce\u03c2 \u03c7\u03b1\u03bb\u03b1\u03c3\u03bc\u03ad\u03bd\u03b7 \u03b1\u03b3\u03bf\u03c1\u03ac.",
  dataTitle: "\u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03c3\u03b5 \u03cc\u03bb\u03b1", dataDesc: "\u039a\u03ac\u03b8\u03b5 \u03b1\u03c0\u03cc\u03c6\u03b1\u03c3\u03b7 \u03b2\u03b1\u03c3\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03c3\u03b5 \u03c0\u03c1\u03b1\u03b3\u03bc\u03b1\u03c4\u03b9\u03ba\u03ae \u03b5\u03c5\u03c6\u03c5\u0390\u03b1.",
  seeBuilt: "\u0394\u03b5\u03af\u03c4\u03b5 \u03c4\u03b9 \u03c7\u03c4\u03af\u03c3\u03b1\u03bc\u03b5", whatWeBuilt: "\u03a4\u03b9 \u03c7\u03c4\u03af\u03c3\u03b1\u03bc\u03b5",
  venturesTitle: "\u0388\u03be\u03b9 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2.\n\u0388\u03be\u03b9 \u03ba\u03bb\u03ac\u03b4\u03bf\u03b9.",
  venturesSub: "\u039a\u03ac\u03b8\u03b5 \u03bc\u03af\u03b1 \u03c3\u03c4\u03bf\u03c7\u03b5\u03cd\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03c7\u03b1\u03bb\u03b1\u03c3\u03bc\u03ad\u03bd\u03b7 \u03b1\u03b3\u03bf\u03c1\u03ac \u03ba\u03b1\u03b9 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b1\u03bd\u03b1\u03c3\u03c7\u03b5\u03b4\u03b9\u03ac\u03b6\u03b5\u03b9 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03b1\u03c1\u03c7\u03ae.",
  builtAustralia: "\u03a7\u03c4\u03af\u03c3\u03c4\u03b7\u03ba\u03b5 \u03c3\u03c4\u03b7\u03bd \u0391\u03c5\u03c3\u03c4\u03c1\u03b1\u03bb\u03af\u03b1.\n\u0394\u03b9\u03b1\u03c4\u03af\u03b8\u03b5\u03c4\u03b1\u03b9 \u03c0\u03b1\u03bd\u03c4\u03bf\u03cd.",
  ourCulture: "\u0397 \u03ba\u03bf\u03c5\u03bb\u03c4\u03bf\u03cd\u03c1\u03b1 \u03bc\u03b1\u03c2", cultureTitle: "\u03a0\u03ac\u03b8\u03bf\u03c2\n\u03c3\u03c4\u03b7 \u03b4\u03bf\u03c5\u03bb\u03b5\u03b9\u03ac.",
  cultureP1: "\u03a0\u03b9\u03c3\u03c4\u03b5\u03cd\u03bf\u03c5\u03bc\u03b5 \u03cc\u03c4\u03b9 \u03c4\u03b1 \u03ba\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03b1 \u03c0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03b1 \u03c0\u03c1\u03bf\u03ad\u03c1\u03c7\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03b1\u03bd\u03b8\u03c1\u03ce\u03c0\u03bf\u03c5\u03c2 \u03c0\u03bf\u03c5 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b3\u03bd\u03ae\u03c3\u03b9\u03b1 \u03c0\u03b1\u03b8\u03b9\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03b9 \u03bc\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c0\u03bf\u03c5 \u03c7\u03c4\u03af\u03b6\u03bf\u03c5\u03bd.",
  cultureP2: "\u0394\u03b5\u03bd \u03c3\u03ba\u03b5\u03c6\u03c4\u03cc\u03bc\u03b1\u03c3\u03c4\u03b5 \u03c3\u03b5 \u03c0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03b1. \u03a3\u03ba\u03b5\u03c6\u03c4\u03cc\u03bc\u03b1\u03c3\u03c4\u03b5 \u03c3\u03b5 \u03ba\u03b9\u03bd\u03ae\u03bc\u03b1\u03c4\u03b1.",
  pressMedia: "\u03a4\u03cd\u03c0\u03bf\u03c2 & \u039c\u03ad\u03c3\u03b1",
  hqLocation: "\u039a\u03cc\u03bb\u03b9\u03bd\u03b3\u03b3\u03bf\u03c5\u03bd\u03c4, \u039c\u03b5\u03bb\u03b2\u03bf\u03cd\u03c1\u03bd\u03b7 \u2014 \u0388\u03b4\u03c1\u03b1", globalTeam: "\u03a0\u03b1\u03b3\u03ba\u03cc\u03c3\u03bc\u03b9\u03b1 \u039f\u03bc\u03ac\u03b4\u03b1",
  venturesCountries: "\u0395\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c3\u03b5 40+ \u03c7\u03ce\u03c1\u03b5\u03c2", ourTeam: "\u0397 \u03bf\u03bc\u03ac\u03b4\u03b1 \u03bc\u03b1\u03c2",
  meetLeaders: "\u0393\u03bd\u03c9\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03b7\u03bd\n\u03b7\u03b3\u03b5\u03c3\u03af\u03b1 \u03bc\u03b1\u03c2.",
  teamSub: "\u039f\u03b9 \u03ac\u03bd\u03b8\u03c1\u03c9\u03c0\u03bf\u03b9 \u03c0\u03af\u03c3\u03c9 \u03b1\u03c0\u03cc \u03c4\u03b9\u03c2 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2.",
  globalPresence: "\u03a0\u03b1\u03b3\u03ba\u03cc\u03c3\u03bc\u03b9\u03b1 \u03c0\u03b1\u03c1\u03bf\u03c5\u03c3\u03af\u03b1",
  whereWeOperate: "\u03a0\u03bf\u03cd \u03b4\u03c1\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03bf\u03c0\u03bf\u03b9\u03bf\u03cd\u03bd\u03c4\u03b1\u03b9\n\u03bf\u03b9 \u03bf\u03bc\u03ac\u03b4\u03b5\u03c2 \u03bc\u03b1\u03c2.",
  techHub: "\u03a4\u03b5\u03c7\u03bd\u03bf\u03bb\u03bf\u03b3\u03b9\u03ba\u03cc \u03ba\u03ad\u03bd\u03c4\u03c1\u03bf", techHubTitle: "\u039c\u03b5\u03bb\u03b2\u03bf\u03cd\u03c1\u03bd\u03b7\nTech Hub.",
  techHubDesc: "\u03a4\u03b1 \u03ba\u03b5\u03bd\u03c4\u03c1\u03b9\u03ba\u03ac \u03bc\u03b1\u03c2 \u03b3\u03c1\u03b1\u03c6\u03b5\u03af\u03b1 \u03c3\u03c4\u03bf \u039a\u03cc\u03bb\u03b9\u03bd\u03b3\u03b3\u03bf\u03c5\u03bd\u03c4 \u03c4\u03b7\u03c2 \u039c\u03b5\u03bb\u03b2\u03bf\u03cd\u03c1\u03bd\u03b7\u03c2 \u03c3\u03c4\u03b5\u03b3\u03ac\u03b6\u03bf\u03c5\u03bd \u03c4\u03b9\u03c2 \u03bf\u03bc\u03ac\u03b4\u03b5\u03c2 \u03bc\u03b7\u03c7\u03b1\u03bd\u03b9\u03ba\u03ae\u03c2, \u03c3\u03c7\u03b5\u03b4\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03ba\u03b1\u03b9 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03b9\u03ce\u03bd.",
  workWithUs: "\u0394\u03bf\u03c5\u03bb\u03ad\u03c8\u03c4\u03b5 \u03bc\u03b1\u03b6\u03af \u03bc\u03b1\u03c2", openRoles: "\u0391\u03bd\u03bf\u03b9\u03c7\u03c4\u03ad\u03c2 \u03b8\u03ad\u03c3\u03b5\u03b9\u03c2.", viewAll: "\u0394\u03b5\u03af\u03c4\u03b5 \u03cc\u03bb\u03b5\u03c2 \u03c4\u03b9\u03c2 \u03b8\u03ad\u03c3\u03b5\u03b9\u03c2",
  investWithUs: "\u0395\u03c0\u03b5\u03bd\u03b4\u03cd\u03c3\u03c4\u03b5 \u03bc\u03b1\u03b6\u03af \u03bc\u03b1\u03c2", backNextWave: "\u03a3\u03c4\u03b7\u03c1\u03af\u03be\u03c4\u03b5 \u03c4\u03bf \u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03bf \u03ba\u03cd\u03bc\u03b1.",
  ctaDesc: "\u0391\u03c0\u03bf\u03ba\u03c4\u03ae\u03c3\u03c4\u03b5 \u03b1\u03c0\u03bf\u03ba\u03bb\u03b5\u03b9\u03c3\u03c4\u03b9\u03ba\u03ae \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7 \u03c3\u03c4\u03bf \u03c7\u03b1\u03c1\u03c4\u03bf\u03c6\u03c5\u03bb\u03ac\u03ba\u03b9\u03cc \u03bc\u03b1\u03c2.",
  investorAccess: "\u03a0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7 \u03b5\u03c0\u03b5\u03bd\u03b4\u03c5\u03c4\u03ce\u03bd", generalEnquiries: "\u0393\u03b5\u03bd\u03b9\u03ba\u03ac \u03b5\u03c1\u03c9\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
  investorRelations: "\u03a3\u03c7\u03ad\u03c3\u03b5\u03b9\u03c2 \u03b5\u03c0\u03b5\u03bd\u03b4\u03c5\u03c4\u03ce\u03bd", irTitle: "\u03a3\u03c7\u03ad\u03c3\u03b5\u03b9\u03c2\n\u0395\u03c0\u03b5\u03bd\u03b4\u03c5\u03c4\u03ce\u03bd.",
  irDesc: "\u03a0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7 \u03c3\u03c4\u03b7\u03bd \u03c0\u03cd\u03bb\u03b7 \u03b5\u03c0\u03b5\u03bd\u03b4\u03c5\u03c4\u03ce\u03bd \u03b3\u03b9\u03b1 \u03c4\u03c1\u03b9\u03bc\u03b7\u03bd\u03b9\u03b1\u03af\u03b5\u03c2 \u03b5\u03bd\u03b7\u03bc\u03b5\u03c1\u03ce\u03c3\u03b5\u03b9\u03c2.",
  registerInterest: "\u0395\u03ba\u03b4\u03ae\u03bb\u03c9\u03c3\u03b7 \u03b5\u03bd\u03b4\u03b9\u03b1\u03c6\u03ad\u03c1\u03bf\u03bd\u03c4\u03bf\u03c2", interested: "\u0395\u03bd\u03b4\u03b9\u03b1\u03c6\u03ad\u03c1\u03bf\u03bc\u03b1\u03b9", followProject: "\u03a0\u03b1\u03c1\u03b1\u03ba\u03bf\u03bb\u03bf\u03cd\u03b8\u03b7\u03c3\u03b7",
  allRights: "\u039c\u03b5 \u03b5\u03c0\u03b9\u03c6\u03cd\u03bb\u03b1\u03be\u03b7 \u03c0\u03b1\u03bd\u03c4\u03cc\u03c2 \u03b4\u03b9\u03ba\u03b1\u03b9\u03ce\u03bc\u03b1\u03c4\u03bf\u03c2.",
  stat1Label: "\u03a0\u03b1\u03b3\u03ba\u03cc\u03c3\u03bc\u03b9\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03c3\u03c4\u03bf Profiles.io",
  stat2Label: "\u0395\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c0\u03bf\u03c5 \u03b1\u03bd\u03b1\u03c4\u03c1\u03ad\u03c0\u03bf\u03c5\u03bd \u03ba\u03bb\u03ac\u03b4\u03bf\u03c5\u03c2",
  stat3Label: "\u03a0\u03c1\u03ce\u03c4\u03b7 \u03c0\u03bb\u03b1\u03c4\u03c6\u03cc\u03c1\u03bc\u03b1 \u03b5\u03bd\u03bf\u03b9\u03ba\u03af\u03b1\u03c3\u03b7\u03c2 \u03bc\u03cc\u03b4\u03b1\u03c2 P2P",
  stat4Label: "\u039a\u03b1\u03c4\u03b1\u03c3\u03ba\u03b5\u03c5\u03ac\u03c3\u03c4\u03b7\u03ba\u03b5 \u03c3\u03c4\u03b7\u03bd \u0391\u03c5\u03c3\u03c4\u03c1\u03b1\u03bb\u03af\u03b1.",
};

function makeFallback(nav: Partial<Translations>): Translations { return { ...en, ...nav }; }

const es = makeFallback({ home: "Inicio", about: "Nosotros", ventures: "Empresas", careers: "Carreras", press: "Prensa", investors: "Inversores", contact: "Contacto", dashboard: "Panel", signIn: "Iniciar sesi\u00f3n", applyNow: "Aplicar", slogan: "Empresas conectando el comercio", heroSub: "Entretenimiento, datos, moda, juegos, vida nocturna \u2014 construimos empresas disruptivas desde Australia con alcance global.", ourVentures: "Nuestras empresas", ourStory: "Nuestra historia", allRights: "Todos los derechos reservados.", registerInterest: "Registrar inter\u00e9s" });
const fr = makeFallback({ home: "Accueil", about: "\u00c0 propos", ventures: "Entreprises", careers: "Carri\u00e8res", press: "Presse", investors: "Investisseurs", contact: "Contact", dashboard: "Tableau de bord", signIn: "Connexion", applyNow: "Postuler", slogan: "Des entreprises connectant le commerce", heroSub: "Divertissement, donn\u00e9es, mode, jeux, vie nocturne \u2014 nous construisons des entreprises disruptives depuis l\u2019Australie.", ourVentures: "Nos entreprises", ourStory: "Notre histoire", allRights: "Tous droits r\u00e9serv\u00e9s.", registerInterest: "Manifester son int\u00e9r\u00eat" });
const de = makeFallback({ home: "Startseite", about: "\u00dcber uns", ventures: "Unternehmen", careers: "Karriere", press: "Presse", investors: "Investoren", contact: "Kontakt", signIn: "Anmelden", applyNow: "Bewerben", slogan: "Unternehmen verbinden den Handel", heroSub: "Unterhaltung, Daten, Mode, Gaming, Nachtleben \u2014 wir bauen disruptive Unternehmen aus Australien mit globaler Reichweite.", ourVentures: "Unsere Unternehmen", ourStory: "Unsere Geschichte", allRights: "Alle Rechte vorbehalten.", registerInterest: "Interesse bekunden" });
const it = makeFallback({ home: "Home", about: "Chi siamo", ventures: "Imprese", careers: "Carriere", press: "Stampa", investors: "Investitori", contact: "Contatti", signIn: "Accedi", applyNow: "Candidati", slogan: "Aziende che connettono il commercio", ourVentures: "Le nostre imprese", ourStory: "La nostra storia", allRights: "Tutti i diritti riservati.", registerInterest: "Registra interesse" });
const pt = makeFallback({ home: "In\u00edcio", about: "Sobre", ventures: "Empresas", careers: "Carreiras", press: "Imprensa", investors: "Investidores", contact: "Contato", signIn: "Entrar", applyNow: "Candidatar", slogan: "Empresas conectando o com\u00e9rcio", ourVentures: "Nossas empresas", ourStory: "Nossa hist\u00f3ria", allRights: "Todos os direitos reservados.", registerInterest: "Registrar interesse" });
const zh = makeFallback({ home: "\u9996\u9875", about: "\u5173\u4e8e", ventures: "\u4f01\u4e1a", careers: "\u804c\u4e1a", press: "\u65b0\u95fb", investors: "\u6295\u8d44\u8005", contact: "\u8054\u7cfb", signIn: "\u767b\u5f55", applyNow: "\u7533\u8bf7", slogan: "\u8fde\u63a5\u5546\u4e1a\u7684\u4f01\u4e1a", ourVentures: "\u6211\u4eec\u7684\u4f01\u4e1a", ourStory: "\u6211\u4eec\u7684\u6545\u4e8b", allRights: "\u7248\u6743\u6240\u6709\u3002", registerInterest: "\u767b\u8bb0\u5174\u8da3" });
const ja = makeFallback({ home: "\u30db\u30fc\u30e0", about: "\u6982\u8981", ventures: "\u4e8b\u696d", careers: "\u63a1\u7528", press: "\u30d7\u30ec\u30b9", investors: "\u6295\u8cc7\u5bb6", contact: "\u304a\u554f\u3044\u5408\u308f\u305b", signIn: "\u30ed\u30b0\u30a4\u30f3", applyNow: "\u5fdc\u52df", slogan: "\u5546\u696d\u3092\u3064\u306a\u3050\u4f01\u696d", ourVentures: "\u4e8b\u696d\u7d39\u4ecb", ourStory: "\u79c1\u305f\u3061\u306e\u30b9\u30c8\u30fc\u30ea\u30fc", allRights: "\u5168\u8457\u4f5c\u6a29\u6240\u6709\u3002", registerInterest: "\u8208\u5473\u3092\u767b\u9332" });
const ar = makeFallback({ home: "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", about: "\u0639\u0646\u0651\u0627", ventures: "\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639", careers: "\u0627\u0644\u0648\u0638\u0627\u0626\u0641", press: "\u0627\u0644\u0635\u062d\u0627\u0641\u0629", investors: "\u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u0648\u0646", contact: "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627", signIn: "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644", applyNow: "\u062a\u0642\u062f\u0645", slogan: "\u0634\u0631\u0643\u0627\u062a \u062a\u0631\u0628\u0637 \u0627\u0644\u062a\u062c\u0627\u0631\u0629", ourVentures: "\u0645\u0634\u0627\u0631\u064a\u0639\u0646\u0627", ourStory: "\u0642\u0635\u062a\u0646\u0627", allRights: "\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.", registerInterest: "\u0633\u062c\u0644 \u0627\u0647\u062a\u0645\u0627\u0645\u0643" });
const ko = makeFallback({ home: "\ud648", about: "\uc18c\uac1c", ventures: "\uc0ac\uc5c5", careers: "\ucc44\uc6a9", press: "\ubcf4\ub3c4\uc790\ub8cc", investors: "\ud22c\uc790\uc790", contact: "\ubb38\uc758", signIn: "\ub85c\uadf8\uc778", applyNow: "\uc9c0\uc6d0\ud558\uae30", slogan: "\uc0c1\uc5c5\uc744 \uc5f0\uacb0\ud558\ub294 \uae30\uc5c5", ourVentures: "\uc6b0\ub9ac\uc758 \uc0ac\uc5c5", ourStory: "\uc6b0\ub9ac\uc758 \uc774\uc57c\uae30", allRights: "\ubaa8\ub4e0 \uad8c\ub9ac \ubcf4\uc720.", registerInterest: "\uad00\uc2ec \ub4f1\ub85d" });
const hi = makeFallback({ home: "\u0939\u094b\u092e", about: "\u0939\u092e\u0627\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902", ventures: "\u0909\u0926\u094d\u092f\u092e", careers: "\u0915\u0930\u093f\u092f\u0930", press: "\u092a\u094d\u0930\u0947\u0938", investors: "\u0928\u093f\u0935\u0947\u0936\u0915", contact: "\u0938\u0902\u092a\u0930\u094d\u0915", signIn: "\u0938\u093e\u0907\u0928 \u0907\u0928", applyNow: "\u0906\u0935\u0947\u0926\u0928", slogan: "\u0935\u094d\u092f\u093e\u092a\u093e\u0930 \u0915\u094b \u091c\u094b\u0921\u093c\u0928\u0947 \u0935\u093e\u0932\u0940 \u0915\u0902\u092a\u0928\u093f\u092f\u093e\u0901", ourVentures: "\u0939\u092e\u093e\u0930\u0947 \u0909\u0926\u094d\u092f\u092e", ourStory: "\u0939\u092e\u093e\u0930\u0940 \u0915\u0939\u093e\u0928\u0940", allRights: "\u0938\u0930\u094d\u0935\u093e\u0927\u093f\u0915\u093e\u0930 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924\u0964", registerInterest: "\u0930\u0941\u091a\u093f \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902" });
const nl = makeFallback({ home: "Home", about: "Over ons", ventures: "Ondernemingen", careers: "Vacatures", press: "Pers", investors: "Investeerders", contact: "Contact", signIn: "Inloggen", applyNow: "Solliciteren", slogan: "Bedrijven die handel verbinden", ourVentures: "Onze ondernemingen", ourStory: "Ons verhaal", allRights: "Alle rechten voorbehouden.", registerInterest: "Interesse registreren" });
const ru = makeFallback({ home: "\u0413\u043b\u0430\u0432\u043d\u0430\u044f", about: "\u041e \u043d\u0430\u0441", ventures: "\u041f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f", careers: "\u041a\u0430\u0440\u044c\u0435\u0440\u0430", press: "\u041f\u0440\u0435\u0441\u0441\u0430", investors: "\u0418\u043d\u0432\u0435\u0441\u0442\u043e\u0440\u044b", contact: "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b", signIn: "\u0412\u043e\u0439\u0442\u0438", applyNow: "\u041f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443", slogan: "\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438, \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044e\u0449\u0438\u0435 \u043a\u043e\u043c\u043c\u0435\u0440\u0446\u0438\u044e", ourVentures: "\u041d\u0430\u0448\u0438 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f", ourStory: "\u041d\u0430\u0448\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044f", allRights: "\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.", registerInterest: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441" });
const tr = makeFallback({ home: "Ana Sayfa", about: "Hakk\u0131m\u0131zda", ventures: "Giri\u015fimler", careers: "Kariyer", press: "Bas\u0131n", investors: "Yat\u0131r\u0131mc\u0131lar", contact: "\u0130leti\u015fim", signIn: "Giri\u015f Yap", applyNow: "Ba\u015fvur", slogan: "Ticareti birle\u015ftiren \u015firketler", ourVentures: "Giri\u015fimlerimiz", ourStory: "Hikayemiz", allRights: "T\u00fcm haklar\u0131 sakl\u0131d\u0131r.", registerInterest: "\u0130lgi kaydet" });

const translations: Record<Lang, Translations> = { en, el, es, fr, de, it, pt, zh, ja, ar, ko, hi, nl, ru, tr };

const VALID_LANGS = new Set<string>(Object.keys(translations));

const LangContext = createContext<{
  lang: Lang;
  t: Translations;
  setLang: (l: Lang) => void;
}>({ lang: "en", t: en, setLang: () => {} });

export function useLang() { return useContext(LangContext); }

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("ghc-lang");
    if (stored && VALID_LANGS.has(stored)) setLangState(stored as Lang);
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
