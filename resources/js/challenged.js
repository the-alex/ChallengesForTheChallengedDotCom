// Variable Declarations
var challenges = ["Tell a joke to someone you don’t know", "Introduce yourself to someone you haven’t met", "Learn a new recipe, and cook yourself that", "3 hours of homework before relaxing", "Contact an organization you would like to be involved with", "Call that friend", "Draw/write for an hour", "Read for pleasure for an hour - physical book", "Organize an activity for your friends", "Mail a letter to someone you care about", "Do not swear today", "Visit a new location in Ann Arbor", "Ask a girl on a date", "Overtly flirt - has to be stranger", "Don’t look away", "1 Day without phone", "No phone in conversation", "Wake up at 7AM - if Friday/Saturday, set alarm for nearest weekday", "Day for yourself, no time with others", "Lay down on the ground in a well trafficked area longest time", "Enter into a conversation regarding a conflict you’ve been avoiding in an attempt to resolve it", "Spend $10 on someone else", "Don’t sleep in your house", "30 minutes of meditation", "50 Flyers", "Go for a run today", "Organize a meal with a friend", "Don’t complain today", "Apply for job", "Sell/donate something", "Audio commentary", "Dress Gud (attempt to contact a celebrity - Trevor)"];

/*
Anthony: overtly flirt. Zeitler: day for yourself. Lancendorfer: don't complain. Spencer: organize lunch with friend. Trevor: call that friend
*/


var players = {
    "alexZeit": [22, 19, 27, 18, 12, 4, 21, 3, 29, 9, 13, 26, 17, 25, 11, 0, 15, 16, 7, 1, 8, 10, 14, 31, 30, 5, 2, 28, 24, 23, 6, 20],

    "alexChoj": [27, 24, 7, 20, 6, 17, 4, 8, 31, 26, 0, 30, 25, 19, 9, 1, 14, 16, 5, 23, 18, 11, 10, 15, 12, 2, 28, 22, 3, 29, 13, 21],

    "trevor": [11, 12, 14, 13, 9, 2, 30, 22, 29, 5, 10, 17, 1, 27, 21, 4, 26, 15, 16, 8, 18, 28, 6, 24, 3, 7, 20, 31, 19, 0, 25, 23],

    "anthony": [27, 10, 21, 31, 28, 14, 15, 1, 6, 7, 25, 8, 3, 30, 20, 17, 26, 29, 16, 12, 22, 2, 18, 0, 24, 13, 23, 4, 11, 9, 19, 5],

    "nick": [22, 2, 26, 28, 16, 3, 11, 25, 21, 23, 8, 0, 24, 20, 4, 18, 17, 9, 14, 1, 29, 15, 6, 19, 7, 30, 5, 12, 27, 31, 13, 10],

    "spencer": [16, 22, 26, 6, 19, 15, 14, 21, 13, 27, 12, 9, 10, 25, 30, 29, 28, 23, 11, 1, 24, 3, 20, 5, 4, 0, 2, 7, 18, 8, 17, 31]
};


function rawr() {
    var elt = document.getElementById("main-heading");
    elt.innerHTML = "";
}