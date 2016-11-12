(function(exports){

function NewsManagerController (storySummary, headlines, NewsManagerModel, NewsManagerView) {
  this.storySummary = storySummary;
  this.headlines = headlines;
  this.newsManagerModel = NewsManagerModel;
  this.newsManagerView = NewsManagerView;
  this.xhr = new XMLHttpRequest();
  this.setupHeadlines();
}

NewsManagerController.prototype = {
  createStory: function(JSON) {
    this.newsManagerModel.saveNews(JSON);
    this.newsManagerView.createLink(this.newsManagerModel.storyList);
  },

  showSummary: function(id, newsSummary){
    this.newsManagerView.invisible('headlines');
    var title = this.newsManagerModel.getTitle(id);
    var fullStoryLink = this.newsManagerModel.getUrl(id);
    var thumbnail = this.newsManagerModel.getThumbnail(id);
    this.newsManagerView.displaySummary(thumbnail, title, newsSummary, fullStoryLink, this.storySummary);
  },

  setupHeadlines: function() {
    var self = this;
    this.headlines.addEventListener('click', function(){
      link = self.newsManagerModel.getUrl(event.target.id);
      id = event.target.id;
      self.summaryApiRequest(link, id);
    });
  },

  apiRequest: function(){
    this.xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail", true);
    this.xhr.send();
    self = this;
    this.xhr.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
        var newsObject = JSON.parse(this.responseText);
        self.createStory(newsObject.response.results);
      }
    }
  },

  summaryApiRequest: function(link, id) {
    this.xhr.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + link, true);
    this.xhr.send();
    self = this;
    this.xhr.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
        var newsSummary = JSON.parse(this.responseText);
        self.showSummary(id, newsSummary.sentences);
      }
    }
  }
}

exports.NewsManagerController = NewsManagerController;

})(this);
