(function(exports){

function NewsManagerView () {

}

NewsManagerView.prototype = {

  createLink: function(storyList) {
    for (var i = 0; i < storyList.length; i++) {
      var headline = storyList[i].webTitle;
      var thumbnail = storyList[i].fields.thumbnail;
      var list = "<li><img src='" + thumbnail + "'><br><a id='" + i + "' class='link' href='#" + i + "'>" + headline + "</a></li><br>";
      document.getElementById("headlines").innerHTML += list;
    }
  },

  displaySummary: function(title, newsSummary) {
     var headline = "<h1>" + title + "</h1>"
     var summary = "<p>" + newsSummary + "</p>";
     document.getElementById("storySummary").innerHTML += headline;
     document.getElementById("storySummary").innerHTML += summary;
   },

   invisible: function(id) {
      var element = document.getElementById(id);
      element.style.display = "none";
    }

};

exports.NewsManagerView = NewsManagerView;


})(this);
