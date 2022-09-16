#! /usr/bin/env node

const async = require('async');
const Pokemon = require('./models/pokemon');
const Type = require('./models/type');
const Ability = require('./models/ability');

var abilities = [];
var types = [];
var pkmn = [];

function createAbility(name, desc, cb){
    var toAdd = new Ability({name: name, desc:desc});

    toAdd.save(function (err){
        if(err){
            cb(err, null)
            return;
        }
        console.log('new Ability: ' + toAdd);
        abilities.push(toAdd);
        cb(null, toAdd)
    })
};

function createType(type, cb){
    var t = new Type(type);

    t.save(function (err){
        if(err){
            cb(err, null)
            return;
        }
        console.log('new type: ' + t);
        types.push(t);
        cb(null, t)
    })
};

function createpkmn(name, type, ability, evolvesFrom, evolvesTo, desc, height, weight){
    
};


// types
function createTypes(cb){
    async.series([
        function (callback){
            createType({"name":"Normal","immune":["Ghost"],"weaknesses":["Rock","Steel"],"strengths":[]},
            callback)
        },
        function (callback){
            createType({"name":"Fire","immune":[],"weaknesses":["Fire","Water","Rock","Dragon"],"strengths":["Grass","Ice","Bug","Steel"]},
            callback)
        },
        function (callback){
            createType({"name":"Water","immune":[],"weaknesses":["Water","Grass","Dragon"],"strengths":["Fire","Ground","Rock"]},
            callback)
        },
        function (callback){
            createType({"name":"Electric","immune":["Ground"],"weaknesses":["Electric","Grass","Dragon"],"strengths":["Water","Flying"]},
            callback)
        },
        function (callback){
            createType({"name":"Grass","immune":[],"weaknesses":["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],"strengths":["Water","Ground","Rock"]},
            callback)
        },
        function (callback){
            createType({"name":"Ice","immune":[],"weaknesses":["Fire","Water","Ice","Steel"],"strengths":["Grass","Ground","Flying","Dragon"]},
            callback)
        },
        function (callback){
            createType({"name":"Fighting","immune":["Ghost"],"weaknesses":["Poison","Flying","Psychic","Bug","Fairy"],"strengths":["Normal","Ice","Rock","Dark","Steel"]},
            callback)
        },
        function (callback){
            createType({"name":"Poison","immune":["Steel"],"weaknesses":["Poison","Ground","Rock","Ghost"],"strengths":["Grass","Fairy"]},
            callback)
        },
        function (callback){
            createType({"name":"Ground","immune":["Flying"],"weaknesses":["Grass","Bug"],"strengths":["Fire","Electric","Poison","Rock","Steel"]},
            callback)
        },
        function (callback){
            createType({"name":"Flying","immune":[],"weaknesses":["Electric","Rock","Steel"],"strengths":["Grass","Fighting","Bug"]},
            callback)
        },
        function (callback){
            createType({"name":"Psychic","immune":["Dark"],"weaknesses":["Psychic","Steel"],"strengths":["Fighting","Poison"]},
            callback)
        },
        function (callback){
            createType({"name":"Bug","immune":[],"weaknesses":["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],"strengths":["Grass","Psychic","Dark"]},
            callback)
        },
        function (callback){
            createType({"name":"Rock","immune":[],"weaknesses":["Fighting","Ground","Steel"],"strengths":["Fire","Ice","Flying","Bug"]},
            callback)
        },
        function (callback){
            createType({"name":"Ghost","immune":["Normal"],"weaknesses":["Dark"],"strengths":["Psychic","Ghost"]},
            callback)
        },
        function (callback){
            createType({"name":"Dragon","immune":["Fairy"],"weaknesses":["Steel"],"strengths":["Dragon"]},
            callback)
        },
        function (callback){
            createType({"name":"Dark","immune":[],"weaknesses":["Fighting","Dark","Fairy"],"strengths":["Psychic","Ghost"]},
            callback)
        },
        function (callback){
            createType({"name":"Steel","immune":[],"weaknesses":["Fire","Water","Electric","Steel"],"strengths":["Ice","Rock","Fairy"]},
            callback)
        },
        function (callback){
            createType({"name":"Fairy","immune":[],"weaknesses":["Fire","Poison","Steel"],"strengths":["Fighting","Dragon","Dark"]}, 
            callback)
        }


        // function(callback) {
        //     createType("normal", [{"rock": 0.5, "ghost": 0, "steel": 0.5}], callback)
        // }, 
        // function(callback) {
        //     createType("fire", [{"fire":0.5, "water": 0.5, "green":2, "ice":2, "bug":2, "rock":0.5, "dragon":0.5, "steel":2}], callback)
        // }, 
        // function(callback) {
        //     createType("water", [{"fire": 2}, {"water": 0.5}, {"grass":0.5}, ], callback)
        // }, 
        // function(callback) {
        //     createType
    ], cb);
}

// [{"name":"Normal","immune":["Ghost"],"weaknesses":["Rock","Steel"],"strengths":[]},
// {"name":"Fire","immune":[],"weaknesses":["Fire","Water","Rock","Dragon"],"strengths":["Grass","Ice","Bug","Steel"]},
// {"name":"Water","immune":[],"weaknesses":["Water","Grass","Dragon"],"strengths":["Fire","Ground","Rock"]},
// {"name":"Electric","immune":["Ground"],"weaknesses":["Electric","Grass","Dragon"],"strengths":["Water","Flying"]},
// {"name":"Grass","immune":[],"weaknesses":["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],"strengths":["Water","Ground","Rock"]},
// {"name":"Ice","immune":[],"weaknesses":["Fire","Water","Ice","Steel"],"strengths":["Grass","Ground","Flying","Dragon"]},
// {"name":"Fighting","immune":["Ghost"],"weaknesses":["Poison","Flying","Psychic","Bug","Fairy"],"strengths":["Normal","Ice","Rock","Dark","Steel"]},
// {"name":"Poison","immune":["Steel"],"weaknesses":["Poison","Ground","Rock","Ghost"],"strengths":["Grass","Fairy"]},
// {"name":"Ground","immune":["Flying"],"weaknesses":["Grass","Bug"],"strengths":["Fire","Electric","Poison","Rock","Steel"]},
// {"name":"Flying","immune":[],"weaknesses":["Electric","Rock","Steel"],"strengths":["Grass","Fighting","Bug"]},
// {"name":"Psychic","immune":["Dark"],"weaknesses":["Psychic","Steel"],"strengths":["Fighting","Poison"]},
// {"name":"Bug","immune":[],"weaknesses":["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],"strengths":["Grass","Psychic","Dark"]},
// {"name":"Rock","immune":[],"weaknesses":["Fighting","Ground","Steel"],"strengths":["Fire","Ice","Flying","Bug"]},
// {"name":"Ghost","immune":["Normal"],"weaknesses":["Dark"],"strengths":["Psychic","Ghost"]},
// {"name":"Dragon","immune":["Fairy"],"weaknesses":["Steel"],"strengths":["Dragon"]},
// {"name":"Dark","immune":[],"weaknesses":["Fighting","Dark","Fairy"],"strengths":["Psychic","Ghost"]},
// {"name":"Steel","immune":[],"weaknesses":["Fire","Water","Electric","Steel"],"strengths":["Ice","Rock","Fairy"]},
// {"name":"Fairy","immune":[],"weaknesses":["Fire","Poison","Steel"],"strengths":["Fighting","Dragon","Dark"]}]

// abilities
function createAbilities(cb){
    async.series([
        function(callback) {
            createAbility("keen eye", "Prevents other Pokémon from lowering accuracy.", callback)
        },
        function(callback) {
            createAbility("Levitate", "Gives immunity to Ground type moves.", callback)
        },
        function(callback) {
            createAbility("Intimidate", "Lowers the foe's Attack stat.", callback)
        },
        function(callback) {
            createAbility("Inner Focus", "The Pokémon is protected from flinching.", callback)
        },
        function(callback) {
            createAbility("Blaze", "Powers up Fire-type moves in a pinch.", callback)
        },
        function(callback) {
            createAbility("Overgrow", "Powers up Grass-type moves in a pinch.", callback)
        },
        function(callback) {
            createAbility("Torrent", "Powers up Water-type moves in a pinch.", callback)
        }
    ],
    cb);
}


var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://tinybossofamilk:A1B2C3@sandbox.pik9tii.mongodb.net/Pokemon-Inventory?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



async.series([
    // createAbilities,
    createTypes
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    mongoose.connection.close();
});

// console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// // Get arguments passed on command line
// var userArgs = process.argv.slice(2);
// /*
// if (!userArgs[0].startsWith('mongodb')) {
//     console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
//     return
// }
// */

// var mongoose = require('mongoose');
// var mongoDB = userArgs[0];
// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// function authorCreate(first_name, family_name, d_birth, d_death, cb) {
//   authordetail = {first_name:first_name , family_name: family_name }
//   if (d_birth != false) authordetail.date_of_birth = d_birth
//   if (d_death != false) authordetail.date_of_death = d_death
  
//   var author = new Author(authordetail);
       
//   author.save(function (err) {
//     if (err) {
//       cb(err, null)
//       return
//     }
//     console.log('New Author: ' + author);
//     authors.push(author)
//     cb(null, author)
//   }  );
// }

// function genreCreate(name, cb) {
//   var genre = new Genre({ name: name });
       
//   genre.save(function (err) {
//     if (err) {
//       cb(err, null);
//       return;
//     }
//     console.log('New Genre: ' + genre);
//     genres.push(genre)
//     cb(null, genre);
//   }   );
// }

// function bookCreate(title, summary, isbn, author, genre, cb) {
//   bookdetail = { 
//     title: title,
//     summary: summary,
//     author: author,
//     isbn: isbn
//   }
//   if (genre != false) bookdetail.genre = genre
    
//   var book = new Book(bookdetail);    
//   book.save(function (err) {
//     if (err) {
//       cb(err, null)
//       return
//     }
//     console.log('New Book: ' + book);
//     books.push(book)
//     cb(null, book)
//   }  );
// }


// function bookInstanceCreate(book, imprint, due_back, status, cb) {
//   bookinstancedetail = { 
//     book: book,
//     imprint: imprint
//   }    
//   if (due_back != false) bookinstancedetail.due_back = due_back
//   if (status != false) bookinstancedetail.status = status
    
//   var bookinstance = new BookInstance(bookinstancedetail);    
//   bookinstance.save(function (err) {
//     if (err) {
//       console.log('ERROR CREATING BookInstance: ' + bookinstance);
//       cb(err, null)
//       return
//     }
//     console.log('New BookInstance: ' + bookinstance);
//     bookinstances.push(bookinstance)
//     cb(null, book)
//   }  );
// }


// function createGenreAuthors(cb) {
//     async.series([
//         function(callback) {
//           authorCreate('Patrick', 'Rothfuss', '1973-06-06', false, callback);
//         },
//         function(callback) {
//           authorCreate('Ben', 'Bova', '1932-11-8', false, callback);
//         },
//         function(callback) {
//           authorCreate('Isaac', 'Asimov', '1920-01-02', '1992-04-06', callback);
//         },
//         function(callback) {
//           authorCreate('Bob', 'Billings', false, false, callback);
//         },
//         function(callback) {
//           authorCreate('Jim', 'Jones', '1971-12-16', false, callback);
//         },
//         function(callback) {
//           genreCreate("Fantasy", callback);
//         },
//         function(callback) {
//           genreCreate("Science Fiction", callback);
//         },
//         function(callback) {
//           genreCreate("French Poetry", callback);
//         },
//         ],
//         // optional callback
//         cb);
// }


// function createBooks(cb) {
//     async.parallel([
//         function(callback) {
//           bookCreate('The Name of the Wind (The Kingkiller Chronicle, #1)', 'I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.', '9781473211896', authors[0], [genres[0],], callback);
//         },
//         function(callback) {
//           bookCreate("The Wise Man's Fear (The Kingkiller Chronicle, #2)", 'Picking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political intrigue, courtship, adventure, love and magic... and further along the path that has turned Kvothe, the mightiest magician of his age, a legend in his own time, into Kote, the unassuming pub landlord.', '9788401352836', authors[0], [genres[0],], callback);
//         },
//         function(callback) {
//           bookCreate("The Slow Regard of Silent Things (Kingkiller Chronicle)", 'Deep below the University, there is a dark place. Few people know of it: a broken web of ancient passageways and abandoned rooms. A young woman lives there, tucked among the sprawling tunnels of the Underthing, snug in the heart of this forgotten place.', '9780756411336', authors[0], [genres[0],], callback);
//         },
//         function(callback) {
//           bookCreate("Apes and Angels", "Humankind headed out to the stars not for conquest, nor exploration, nor even for curiosity. Humans went to the stars in a desperate crusade to save intelligent life wherever they found it. A wave of death is spreading through the Milky Way galaxy, an expanding sphere of lethal gamma ...", '9780765379528', authors[1], [genres[1],], callback);
//         },
//         function(callback) {
//           bookCreate("Death Wave","In Ben Bova's previous novel New Earth, Jordan Kell led the first human mission beyond the solar system. They discovered the ruins of an ancient alien civilization. But one alien AI survived, and it revealed to Jordan Kell that an explosion in the black hole at the heart of the Milky Way galaxy has created a wave of deadly radiation, expanding out from the core toward Earth. Unless the human race acts to save itself, all life on Earth will be wiped out...", '9780765379504', authors[1], [genres[1],], callback);
//         },
//         function(callback) {
//           bookCreate('Test Book 1', 'Summary of test book 1', 'ISBN111111', authors[4], [genres[0],genres[1]], callback);
//         },
//         function(callback) {
//           bookCreate('Test Book 2', 'Summary of test book 2', 'ISBN222222', authors[4], false, callback)
//         }
//         ],
//         // optional callback
//         cb);
// }


// function createBookInstances(cb) {
//     async.parallel([
//         function(callback) {
//           bookInstanceCreate(books[0], 'London Gollancz, 2014.', false, 'Available', callback)
//         },
//         function(callback) {
//           bookInstanceCreate(books[1], ' Gollancz, 2011.', false, 'Loaned', callback)
//         },
//         function(callback) {
//           bookInstanceCreate(books[2], ' Gollancz, 2015.', false, false, callback)
//         },
//         function(callback) {
//           bookInstanceCreate(books[3], 'New York Tom Doherty Associates, 2016.', false, 'Available', callback)
//         },
//         function(callback) {
//           bookInstanceCreate(books[3], 'New York Tom Doherty Associates, 2016.', false, 'Available', callback)
//         },
//         function(callback) {
//           bookInstanceCreate(books[3], 'New York Tom Doherty Associates, 2016.', false, 'Available', callback)
//         },
//         function(callback) {
//           bookInstanceCreate(books[4], 'New York, NY Tom Doherty Associates, LLC, 2015.', false, 'Available', callback)
//         },
//         function(callback) {
//           bookInstanceCreate(books[4], 'New York, NY Tom Doherty Associates, LLC, 2015.', false, 'Maintenance', callback)
//         },
//         function(callback) {
//           bookInstanceCreate(books[4], 'New York, NY Tom Doherty Associates, LLC, 2015.', false, 'Loaned', callback)
//         },
//         function(callback) {
//           bookInstanceCreate(books[0], 'Imprint XXX2', false, false, callback)
//         },
//         function(callback) {
//           bookInstanceCreate(books[1], 'Imprint XXX3', false, false, callback)
//         }
//         ],
//         // Optional callback
//         cb);
// }



// async.series([
//     createGenreAuthors,
//     createBooks,
//     createBookInstances
// ],
// // Optional callback
// function(err, results) {
//     if (err) {
//         console.log('FINAL ERR: '+err);
//     }
//     else {
//         console.log('BOOKInstances: '+bookinstances);
        
//     }
//     // All done, disconnect from database
//     mongoose.connection.close();
// });




