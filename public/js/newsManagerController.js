(function(exports){

function NewsManagerController (storySummary, headlines, NewsManagerModel, NewsManagerView, ApiManager) {
  this.storySummary = storySummary;
  this.headlines = headlines;
  this.model = NewsManagerModel;
  this.view = NewsManagerView;
  this.api = ApiManager;
}

NewsManagerController.prototype = {

  createStories: function(JSON, self) {
    self.model.saveNews(JSON);
    self.view.createLinks(self.model.storyList);
    self.setupHeadlines();
  },

  showSummary: function(id, newsSummary, self){
    self.view.invisible('headlines');
    var title = self.model.getTitle(id);
    var fullStoryLink = self.model.getUrl(id);
    var thumbnail = self.model.getThumbnail(id);
    self.view.displaySummary(thumbnail, title, newsSummary, fullStoryLink, self.storySummary);
  },

  setupHeadlines: function() {
    var self = this;
    this.headlines.addEventListener('click', function(){
      var link = self.model.getUrl(event.target.id);
      var id = event.target.id;
      self.api.summaryApiRequest(link, id, self, self.showSummary);
    });
  }
}

exports.NewsManagerController = NewsManagerController;

})(this);
