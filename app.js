console.log("hello, world");
let age = 17;
let movieRating = "18";

if (age > 17) {
  console.log("you can watch any movie!");
} else if (age == 17) {
  if (movieRating === "PG" || "15" || "12" || "U") {
    console.log("You can watch the movie");
  } else if (age <= 17) {
    if (movieRating === "18")
      console.log(
        "Sorry you can't watch the movie. You need to get older or something"
      );
  } else console.log("you can watch this movie");
}
