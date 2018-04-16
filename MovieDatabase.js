movieObjects = [
  {
    title: "In Bruges",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Les Miserable",
    rating: 3.5,
    hasWatched: false
  }
];

movieObjects.forEach(function(obj) {
  var string = "You have";
  if (obj.hasWatched === true) {
    string += " watched";
  } else {
    string += " not seen";
  }
  string += " '" + obj.title + " - " + obj.rating + " stars";
  console.log(string);
});
