// for navigator language
var lang = window.navigator.language;
// you can change the language
// var lang = 'en';

//change weather params here:
var weatherParams = {
    'q': 'Vienna,Austria',
    'units': 'metric',
    'lang': lang
};

// compliments:
var messages = [
    'Hallo, Mausl!',
    'Seas!',
    'Hallo, es ist schon morgen in der Früh!',
    'Wow, you look hot!',
    'Looking good today!',
    'You look nice!',
    'Enjoy your day!'
];

// feed to display the heandlines in the bottom
var newsfeed = 'http://derStandard.at/?page=rss&ressort=Seite1';

// ical feed
var icalFeed = 'http://webtermine.at/?ec3_ical_wien';