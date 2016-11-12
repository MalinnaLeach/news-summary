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

  displaySummary: function(thumbnail, title, newsSummary, fullStoryLink, htmlObject) {
     var image = "<img src='" + thumbnail + "'><br>"
     htmlObject.innerHTML += image;
     var headline = "<h1>" + title + "</h1>"
     htmlObject.innerHTML += headline;
     for (var i=0; i<newsSummary.length; i++) {
       var summary = "<p>" + newsSummary[i] + "</p><br>";
       htmlObject.innerHTML += summary;
     }
     var link = "<a href='" + fullStoryLink + "'>Read Full Story Here</a>";
     htmlObject.innerHTML += link;
   },

   invisible: function(id) {
      var element = document.getElementById(id);
      element.style.display = "none";
    }

};

exports.NewsManagerView = NewsManagerView;


})(this);
