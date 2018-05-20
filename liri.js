//Pull from .env

require("dotenv").config();

var keys = require("./keys.js");
var request = require("request");
var Twitter = require("twitter");
var spotify = require("spotify");

var spotify = new Spotify(keys.spotify.id);
  
var client = new Twitter(keys.twitter);




var userInput = process.argv;

var userChoice = "";

for (var i = 2; i < userInput.length; i++){
    userChoice = userChoice + " " + userInput[i];

}
switch(userInput[2]){
    case "my-tweets":
    myTweets();
    break;

    case "spotify-this-song":
    mySpotify();
    break;

    case "movie-this":
    myMovie();
    break;

    case "do-what-it-says":
    whatItSays();
    break;


}


function myTweets(){

    client.get('statuses/user_timeline', function(error, tweets, response) {
        if(!error){
        // console.log(tweets);  // The favorites.
        // console.log(response);  // Raw response object.
        }
    });
      
}

function mySpotify(){
    spotify.search({ type: 'track', query: userChoice }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
        else{
            console.log(data)
        }
     
        // Do something with 'data'
    });
}

function myOmdb()
    var omdb = require('omdb');
 
omdb.search('movie-this', function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });
 
}

var request = require('request');{
request('http://www.omdbapi.com/?i=tt3896198&apikey=c44af206', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
    }
);






}
