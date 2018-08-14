//Adds click lister to all buttons
$("button").on("click", function() {
  var animal = $(this).attr("data-animal");
  var queryUrl = "http://api.giphy.com/v1/gifs/search?q="+ animal + "&limit=25&api_key=wUxTID7t7Ok0HX4UqYkHvt9codY6rjGP";
  
  $.ajax({ 
    url: queryUrl,
    method: "GET"
    }).then(function(response){
          var results = response.data;
          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var animalDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var animalImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            animalImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            animalDiv.append(p);
            animalDiv.append(animalImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(animalDiv);
    }}
  );})