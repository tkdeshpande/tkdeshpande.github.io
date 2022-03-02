"use strict";

const blogAuthor = 'Tejas Deshpande';
const employer = 'Grover Group GmbH';
const designation = `Senior Mobile Test Automation Engineer @ ${employer}`;
module.exports = {
  url: "https://tkdeshpande.github.io",
  pathPrefix: "/",
  title: `Blog by ${blogAuthor}`,
  subtitle: designation,
  copyright: "© All rights reserved.",
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
      github: "#",
      rss: "",
      vkontakte: "",
      linkedin: "#",
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
