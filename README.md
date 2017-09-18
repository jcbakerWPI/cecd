Assignment 5 - AJAX
===

Lately we've been making web applications using using specific POST and GET calls to retrieve new pages from the server with new content. 
For example, in A4 your server likely used a series of function calls to generate a string for the entire webpage, and re-loaded the entire page with each change.

What if you wanted to load new content, *without* re-loading the entire page? With AJAX this becomes possible.

Assignment details
---

1. Fork the starting project code. **DO NOT MAKE IT PUBLIC.** 
  * This is an extension of A4, so copy your files over.
2. The goal of this project is to expand on Assignment 4 by adding XMLHttpRequests instead of traditional page-reloads:
  * Implement add, delete, update, and filtering of your data, as before. 
  * However, this time the data must be pulled and manipulated using AJAX (XMLHttpRequest). 
  * This means: all functionality should work without reloading the page.
  * On the server side, ensure that you have routes and function calls that match up with the XMLHttpRequests you make from the client side.
3. Deploy your project to Heroku.
	* Ensure that your project has the proper naming scheme (`aX-yourGitHubUsername`) so we can find it.

Technical challenges include things like updating the URL on the client side.
Design challenges should focus around usability, such as inline editing of the list items.

Note: Please do not push node_modules folder to git. (Do not remove it from .gitignore) If you are using an external library, please add the library in package.json. Heroku loads the library from there. 

Resources
---

AJAX pages on MDN:

- [XMLHttpRequest Documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [AJAX Getting Started](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started)
- [Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

A good resource for general HTML/CSS/Javascript is the [Mozilla Developer Network](https://developer.mozilla.org/en-US/). This contains all the references you need for front-end design.

Sample Readme (delete the above when you're ready to submit, and modify the below so with your links and descriptions)
---

Lane Harrison  
http://aX-codementum.herokuapp.com

This project shows ...

## Technical Achievements
- **Proved P=NP**: Using a combination of...
- **Solved AI**: ...

### Design Achievements
- **Re-vamped Apple's Design Philosophy**: Shown in `style.css`, the code...
