//Pull from .env

require("dotenv").config();

var keys = require("./keys.js");
var request = require("request");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var fs = require('fs'); 
var client = new Twitter(keys.twitter);
 


var userInput = process.argv[2];

var userChoice = process.argv[3];

// for (var i = 2; i < userInput.length; i++){
//     userChoice = userChoice + " " + userInput[i];

// }
switch(userInput){
    case "my-tweets":
    myTweets();
    break;

    case "spotify-this-song":
    mySpotify();
    break;

    case "movie-this":
    myOmbd(userChoice);
    break;

    case "do-what-it-says":
    doWhatItSays();
    break;
}

function myTweets(){

    client.get('statuses/user_timeline', function(error, tweets, response) {
        if(!error){
        for ( var i =0; i< tweets.length; i++) {
            console.log(tweets[0].text);  // The favorites.
            console.log(tweets[0].created_at);
        }
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
        
        }
        var songInfo = data.tracks.items;
            console.log("artist(s): " + songInfo[0].artists[0].name);
            console.log("song name " + songInfo[0].name);
            console.log("preview link " + songInfo[0].preview_url);
            console.log("album " + songInfo[0].album.name);
     
            // console.log(JSON.stringify(data.tracks.items[0], null, 2))
     
    });
}

function myOmbd() {

    if(userChoice === undefined) {
        userChoice = "mr. nobody";
    }
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + userChoice + "&y=&plot=short&apikey=c44af206"
    request(queryUrl, function(error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        
            console.log("* Title of the movie:                              " + JSON.parse(body).Title);
            console.log("* Year the movie came out:                         " + JSON.parse(body).Year);
            console.log("* IMDB Rating of the movie:                        " + JSON.parse(body).imdbRating);
            console.log("* Rotten Tomatoes Rating of the movies:            " + JSON.parse(body).Plot);
            console.log("* Country where the movie was produced produced:   " + JSON.parse(body).Country);
            console.log("* Language of the movie:                           " + JSON.parse(body).Language);
            console.log("* Plot of the movie:                               " + JSON.parse(body).Plot);
            console.log("* Actors in the movie:                             " + JSON.parse(body).Actors);
        }
    });
}
function doWhatItSays() {

   

    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error){
            console.log(error)
        }
        console.log(data);

        data = data.split(',');

        var command;
        var parameter;

        
        if (data.length == 2) {
            command = data[0];
            parameter = data[1];
           

         

    };
}


    )}