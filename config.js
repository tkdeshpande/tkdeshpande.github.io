"use strict";

const blogAuthor = 'Tejas Deshpande';
const employer = 'Grover Group GmbH';
const designation = `Senior Mobile Test Automation Engineer @ ${employer}`;
module.exports = {
  url: "https://tkdeshpande.github.io",
  pathPrefix: "/",
  title: `Blog by ${blogAuthor}`,
  subtitle: designation,
  copyright: "Tejas Deshpande© All rights reserved.",
  disqusShortname: "",
  postsPerPage: 4,
  googleAnalyticsId: "",
  useKatex: false,
  menu: [
    {
      label: "Articles",
      path: "/",
    },
    {
      label: "About me",
      path: "/pages/about",
    },
    {
      label: "Contact me",
      path: "/pages/contacts",
    },
  ],
  author: {
    name: blogAuthor,
    photo: "/photo.jpg",
    bio: designation,
    contacts: {
      email: "",
      facebook: "",
      telegram: "",
      twitter: "#",
      github: "https://github.com/tkdeshpande",
      rss: "",
      vkontakte: "",
      linkedin: "https://www.linkedin.com/in/tkdeshpande",
      instagram: "#",
      line: "",
      gitlab: "",
      weibo: "",
      codepen: "",
      youtube: "",
      soundcloud: "",
      medium: "",
    },
  },
};
