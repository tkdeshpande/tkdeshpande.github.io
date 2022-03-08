---
title: Getting Started with Selenium & Javascript
date: "2022-07-03"
template: "post"
draft: false
slug: "getting-started-with-selenium-javascript"
category: "Test Automation"
tags:
  - "Selenium"
description: "Quickest way to gets started with Selenium & Javascript"
# socialImage: "/media/image-2.jpg"
---
## Introduction
[Selenium]([#](https://www.selenium.dev/)) has been at the core of Web UI Automation for nearly 2 decades now, however the majority of automation engineers who have been using Selenium since its inception have focused more on Java. Since the advent of [Node.js]([#](https://nodejs.org)) the number of engineers familier with Javascript has grown steadily. Since now the engineers can *"speak"* the same language as the browsers, it makes most sense to use the same for automating the same. Although tools like [Puppeteer](#), [Cypress](#) & [Playwright](#) have seen this need and joined the party, the oldie but goodie hasn't lost the race, not yet. **Enter Selenium with JS.**

The official documentation for Selenium with JS is a good start but since you need to additionally setup the drivers for respective browsers, the code and the steps in the official documentation need some assistance. **Enter this article.**

## System Design
There are mainly 3 ways to get started with Selenium for Javascript:
1. Using the standard Selenium Webdriver.
2. Using [WebdriverIO](#).
3. Using [Nightwatch.js](#).

Unfortunately, with WebdriverIO, you have a full configuration to understand and it can take a while until you get a good grasp which will neither be easy not quick.
Nightwatch.js is relatively easier to get started with its user friendly syntax, however due to my love/hate relationship with the [builder pattern](#), I'll be working with the standard Selenium Webdriver package for Javascript.

Ofcoarse, I love and use **WebdriverIO ❤️** extensively and I'm all better for it, and also would be the same if I spend anytime with Nightwatch.js.
However for this article I want to keep things simple, very very simple. *No fuss, no muss, no wrappers, no trappers* 😉

Now when you first try to setup Selenium Webdriver from its official documentation, it asks to setup native browser drivers first. But that wouldn't be quick now, would it. 😎

Instead we will be using our trusted `chromedriver` package to get us going blazing fast.

## Installation
At the bare minimum, you will need 2 things to be downloaded and installed on your machine:
1. Node.js. 
2. Google Chrome - stable version

## Setting up the project
### 1. Create a Node.js project
- Open an empty directory in your terminal of choice and run the command `npm init --y`.

### 2. Setup Node.js project
- Install dependencies by running following commands at the root of your project:
   1. Command for `selenium-webdriver`: `npm i selenium-webdriver`.
   2. Command for `chromedriver`: `npm i chromedriver --detect_chromedriver_version`. **This step is critical.**

### 3. Writing test cases
1. Create a new javascript file, eg. `index.js`.
2. Require/import `chromedriver` at the top of the file.
3. Require/import `selenium-webdriver`.
4. Example setup chromedriver as follows:

```javascript
require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
```
5. Write test interations as per Selenium [documentation](#)

```javascript
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.google.com');

    await driver.getTitle(); // => "Google"

    driver.manage().setTimeouts({implicit: 0.5 })

    let searchBox = await driver.findElement(By.name('q'));
    let searchButton = await driver.findElement(By.name('btnK'));

    await searchBox.sendKeys('Selenium');
    await searchButton.click();

    await driver.findElement(By.name('q')).getAttribute("value"); // => 'Selenium'

    await driver.quit();
})();
```

### 4. Running the test
Now that you have setup your basic test script you can execute it by runing the following command: `node index.js`

That's it👍

### 5. Sample Project
Finally, feel free to refer [this](#) project from my Github which has the code samples mentioned above.