# My solution for Bike24's Frontend Challenge
This repository is used as my approach for this challenge. My focus was to stick as much as possible to the functional part of the task leaving styling and other features as a secondary aspect.


## How do I execute it locally?

You'll need `Node.js` installed at least at version 18.9. You'll also need access to a Terminal for following next steps:

```
npm install # install all dependencies
npm run dev # Run a development server (by default http://localhost:5173/b24-front-challenge-ts/)
```


## Changelog:

- **v0.01**. Boiler plate. I've created the project with Vite. Cleaned all example code. Added Bootstrap for not wasting too much time styling in this task (it's not the purpose of this challenge). Created 2 Components (Cart & ProductSelection) non functional but good visually as a mockup.
- **v0.02**. ProductSelection component. Gave a state and some logic between controls to make it a bit functional. 
- **v0.03**. Added a Context for storing the cart.
- **v0.04**. Cart component and Context. Added dynamic list and its functionality for Adding an item, Removing an item and Removing all items.
- **v0.05**. Added a format currency funcionality.
- **v0.06**. Included calculations for totals and small validations.
- **v0.07**. Added Modal Checkout and Toast Errors.
- **v0.08**. Toast messages Refactored.
- **v0.09**. Fixed some undefined datatypes.
- **v0.10**. Added .yml file for deploy on GitHub Pages.


# The Challenge:
Greetings and welcome to the Bike24 Frontend challenge

![UI example](https://github.com/Bike24/FrontendCodingChallenge/blob/main/assets/ui_example.png?raw=true)

&nbsp;
&nbsp;

## The rules
-   The visualisation above is just a suggestion, it's up to **you** to implement it according to **your imagination**

-   Most parts of our frontend are written in React, so using React for your task is an advantage 

-   Focus on **code quality** and **best practices**

-   We expect some unit- and integration-tests. Use the testing frameworks you like

-   Using **Typescript** is mandatory

-   Provide your code in a github repository. We will execute it locally and may not know which node.js version you have used.

-   Imagine how you would deploy such a app with a **cloud provider,** take some notes in the **Readme**

-   You can use libraries, but maybe we ask why exactly this one

-   Please **avoid** a **single commit** at the end, we are also interested in the commit history :)

_Hint: You will find the products in the data folder_ 

&nbsp;
&nbsp;


## The task

**Try to imagine a wild :upside_down_face: product owner approaching you and wanting to improve the shopping experience for our customers. The following requirements are specified*

-   As a customer I want to be able to select products from the drop down list.

-   As a customer I would like to be able to determine the quantity of the product before I add it to the shopping cart.

-   As a customer I would like to be informed when I exceed the maximum number of products and be prevented from entering more than this number

-   As a customer I want to be able to see all my products in the shopping cart

-   As a customer I want to be able to see the unit price in my shopping cart. Optional task: there is a value "taxRate" provided - use it to calculate the gross price for each product.

-   As a customer I want to be able to see the total of the shopping cart at any time

-   As a customer I want to be able to remove products from the shopping cart either one by one or by all at one by pressing the "clear Cart" button.

-   It's not allowed to add more than 10 different product types in the shopping cart. As a customer I want to be able to see a visual representation of how many product types I can still add in a progress bar on the bottom.

-   As a customer I want to see a graphical overlay when I confirm the purchase to know that my order was successful

-   It is not allowed to add a quantity of items to the shopping cart that exceeds the "**maxAmount**" of the respective product. As a customer I want to be able to select the quantity of products with a slider
 
 
&nbsp;
&nbsp;
&nbsp;


### Good luck

