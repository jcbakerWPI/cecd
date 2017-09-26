
// first time page load
function loadPage() {
  document.getElementById('search').addEventListener('input', handleSearch);
  var currentState = window.history.state;

  // If there is a working state and the search box form is populated, search before anything else
  if(currentState && currentState.search) {
    // Re-Search
    runSearch(currentState.search);
  }
  // else, print movies currently in the DB
  else {
    
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {handleRes(req);}
    req.open('GET', '/index.html');
    req.send();
  }
}

function clearForms() {
  // set title and rating to empty to "clear" the search form
  document.getElementById('search').value = '';
  title.value = '';
  rating.value = '';

  // send back to home path on clear
  window.history.pushState(null, '', '/')
}

window.onpopstate = function(event) {
  var currentState = event.state;

  // if search window is populated, run search
  if(currentState && currentState.search) {
    document.getElementById('search').value = currentState.search;
    
    runSearch(currentState.search);
  }
}

function handleSearch() {
  var userSearch = document.getElementById('search').value;
  window.history.pushState({'search':userSearch}, '', '/search');
  runSearch(userSearch);
}

function runSearch(search) {
  var req = new XMLHttpRequest();
  if(search) {
    printOutput("<span>"+search+"</span>");
  }
  else {
    printOutput("All Movies");
    clearForms();
  }
  req.onreadystatechange = function() {handleRes(req);}
  req.open('GET', "?search="+search);
  req.send();
}

function handleRes(req) {
  if( req.readyState !== XMLHttpRequest.DONE )
    return;
  if(req.status === 200) {
    console.log('response')
    console.log(req.responseText)
    printListOfMovies(JSON.parse(req.responseText));
  }
}

function printListOfMovies (movieList) {
  var finalList = '', j;

  // iterate through list of movies from DB and add delete option to each in the HTMl table
  for (j = 0; j < movieList.length; j++) {
    
    finalList +='<li> ' + movieList[i].title+' ('+movieList[i].rating+'/10) ' + '</li> ';
  }

  document.getElementById("movieList").innerHTML = finalList;
}

function addMovie() {
  var req = new XMLHttpRequest();
  var title = document.getElementById('title');
  var rating = document.getElementById('rating');


  if(title.value) {
    printOutput("New movie: <span>" + title.value + "</span> added!");
  }
  else {
    printOutput("Please include a title before submitting!");
  }

  req.onreadystatechange = function (){
    handleRes(req);
  }
  req.open('POST', '');
  req.send('title=' +title.value+ '&rating=' +rating.value);

  clearForms();
}
/*
function delItem(movieToDel) {
  var req = new XMLHttpRequest();

  printOutput("<span>"+movieToDel+"</span> removed!");

  req.onreadystatechange = function (){
    handleRes(req);
  }
  req.open('POST', '');
  req.send('del='+movieToDel);
  clearForms();
}
*/

function delMovie() {
  var req = new XMLHttpRequest();
  var title = document.getElementById('title');

  if(title.value) {
    printOutput("<span>" + title.value + "</span> deleted!");
  }
  else {
    printOutput("Please include the title of the movie to be deleted!");
  }

  req.onreadystatechange = function (){
    handleRes(req);
  }
  req.open('POST', '');
  req.send('del=' +title.value);

  clearForms();
}

function printOutput(output) {
  document.getElementById('importantOutput').innerHTML = output;
}