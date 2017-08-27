Assignment 5 - AJAX
===

Lately we've been making web applications using using specific POST and GET calls to retrieve new pages from the server with new content. 
For example, in A4 your server likely used a series of function calls to generate a string for the entire webpage, and re-loaded the entire page with each change.

What if you wanted to load new content, *without* re-loading the entire page? With AJAX this becomes possible.

Assignment details
---

Do the following to complete this assignment:

1. Clone the [starting project code](https://github.com/cs4241-16b/A5-AJAX). **DO NOT FORK THE REPO and DO NOT MAKE IT PUBLIC.** Since this is an extension of Assignment 4, you can just copy your code over into this repository. Please make sure to copy all the required files into this repository. 
2. The goal of this project is to expand on Assignment 4: 
    * Implement adding, deleteing, and filtering of a list, as before. 
    * However, this time the list must be pulled and manipulated from the server using AJAX (XMLHttpRequest). 
    * This means: all functionality should work without reloading the page.
    * On the server side, ensure that you have routes and function calls that match up with the XMLHttpRequests you make from the client side.
    * Technical challenge ideas:
        * Updating the URL on the client side in this case is not required, but is a good technical challenge.
        * Also, for additional challenge, implement inline editing of the list items.
3. Deploy your project to Heroku.
    * Ensure that your project has the proper naming scheme (`cs4241-a5-yourGitHubUsername`) so we can find it.
4. The project will be graded against the following rubric (120 total):
    * 100: Fulfilling the requirements above
    * 10: Good theming and layout
    * 10: Technical Achievement: Have fun here! Check out advanced resources for some ideas. Don't forget to include an explanation of your achievement on your page.
5. Include a README.md describing your technical achievement to recieve credit. 
    * Your README.md should be served when an attempt to access `<your-url>/README.md` is made.


Resources
---

AJAX pages on MDN:

- [XMLHttpRequest Documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [AJAX Getting Started](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started)
- [Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

A good resource for general HTML/CSS/Javascript is the [Mozilla Developer Network](https://developer.mozilla.org/en-US/). This contains all the references you need for front-end design.

A good resource for font is the [Google Fonts](https://fonts.google.com/) project, with hundreds of different fonts to choose from so that you don't have to stick with Comic Sans. Or Impact.

If you want icons, look into [Font Awesome](http://fontawesome.io/).

Advanced Resources
---
*Note that none of these are required for a good assignment, but it's generally a good idea to master a couple of frameworks if you are interested in developing web application in a real environment. As always, you should master the basics first before moving on to other parts*

[API Example] (https://www.npmjs.com/package/imdb-api) : It's possible to query databases and sites using API. Even GitHub provides its own API. Check out this example that queries movie and television data. Something similar could be used to build a list, and even filter it!

[Bootstrap](http://getbootstrap.com/) is a popular front-end framework for building responsive web pages and in general makes your life easier. 

[UIKit](https://getuikit.com/) is another alternative to Bootstrap that you could look into. It is lighter than Bootstrap __and__ supports animation, if that's what you are into. 

[Sass](http://sass-lang.com/) is an extension to CSS that makes maintaining/writing CSS easier and more fun. You basically write in Sass, and the complier will output a CSS file to use in production. 

