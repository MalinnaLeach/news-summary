(function(exports){

function NewsManagerController (storySummary, headlines, NewsManagerModel, NewsManagerView) {
  this.storySummary = storySummary;
  this.headlines = headlines;
  this.NewsManagerModel = NewsManagerModel;
  this.NewsManagerView = NewsManagerView;
  this.xhr = new XMLHttpRequest();
  this.setupHeadlines();
}

NewsManagerController.prototype = {
  createStory: function(JSON) {
    this.NewsManagerModel.saveNews(JSON);
    this.NewsManagerView.createLink(this.NewsManagerModel.storyList);
  },

  showSummary: function(title, newsSummary){
    this.NewsManagerView.invisible('headlines');
    this.NewsManagerView.displaySummary(title, newsSummary);
  },

  setupHeadlines: function() {
    var self = this;
    this.headlines.addEventListener('click', function(){
      link = self.NewsManagerModel.getUrl(event.target.id);
      title =self.NewsManagerModel.getTitle(event.target.id);
      self.summaryApiRequest(link, title);
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

  summaryApiRequest: function(link, title) {
    this.xhr.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + link, true);
    this.xhr.send();
    self = this;
    this.xhr.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
        var newsSummary = JSON.parse(this.responseText);
        self.showSummary(title, newsSummary);
      }
    }
  }
}

exports.NewsManagerController = NewsManagerController;

})(this);
