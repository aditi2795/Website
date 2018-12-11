$(document).ready(function() {
    $("#tplft").mouseover(function() {
      // store $(this).text() in a variable
      $(this).text(
        "Developed an application in python to convert sign language to text (English alphabets and letters). Developed a CNN model for feature extraction and classification. (Python, Open CV, Keras)");
      $(this).css({ color: "black", "font-size": "75%", "text-shadow": "none" });
    });
     $("#tplft").mouseout(function() {
      // assign it back here
      $(this).text("Sign Language to Text");
      $(this).css({
        "text-align": "center",
        "font-size": "100%",
        color: "white",
        "text-shadow": "none"
      });
    });
  });
  

$(document).ready(function() {
  $("#btmlft").mouseover(function() {
    // store $(this).text() in a variable
    $(this).text(
      "Developed a restaurant recommendation system based on user reviews using sentiment analysis by polling live data from Facebook, twitter feed and suggesting the top restaurants in a location in the order of rating based on the user sentiments. (Python, NLTk ,TwitterAPI)"
    );
    $(this).css({ color: "white", "font-size": "75%", "text-shadow": "none" });
  });
   $("#btmlft").mouseout(function() {
    // assign it back here
    $(this).text("Restaurant Recommendation System");
    $(this).css({
      "text-align": "center",
      "font-size": "100%",
      color: "black",
      "text-shadow": "none"
    });
  });
});

$(document).ready(function() {
  $("#tprt").mouseover(function() {
    // store $(this).text() in a variable
    $(this).text(
      "Developed a system in python using image processing and image segmentation. Using horizontal and vertical profiling, segmented the images into 3x2 grids, generated a binary vector and mapped it with the vector for English letters (Python) "
    );
    $(this).css({ color: "white", "font-size": "75%", "text-shadow": "none" });
  });
  $("#tprt").mouseout(function() {
    // assign it back here
    $(this).text("Braille to English");
    $(this).css({
      "text-align": "center",
      "font-size": "100%",
      color: "black",
      "text-shadow": "none"
    });
  });
});

/************************bottom right ****************/
$(document).ready(function() {
  $("#btmrt").mouseover(function() {
    // store $(this).text() in a variable
    $(this).text(
      "Implemented Normal Equation Hypothesis and gradient descent for weather prediction. Drew a comparison between the efficiencies of both the linear regression and normal equation method."
    );
    $(this).css({ color: "black", "font-size": "75%" });
  });
  $("#btmrt").mouseout(function() {
    // assign it back here
    $(this).text("Weather Prediction System");
    $(this).css({
      "text-align": "center",
      "font-size": "100%",
      color: "white",
      "text-shadow": "none"
    });
  });
});
