(function(exports){

function NewsManagerController (storySummary, headlines, NewsManagerModel, NewsManagerView, ApiManager) {
  this.storySummary = storySummary;
  this.headlines = headlines;
  this.model = NewsManagerModel;
  this.view = NewsManagerView;
  this.api = ApiManager;
}

NewsManagerController.prototype = {

  createStories: function(JSON) {
    this.model.saveNews(JSON);
    this.view.createLinks(this.model.storyList);
    this.setupHeadlines();
  },

  showSummary: function(id, summary){
    this.view.invisible('headlines');
    var title = this.model.getTitle(id);
    var fullStoryLink = this.model.getUrl(id);
    var thumbnail = this.model.getThumbnail(id);
    this.view.displaySummary(thumbnail, title, summary, fullStoryLink, this.storySummary);
  },

  setupHeadlines: function() {
    var self = this;
    this.headlines.addEventListener('click', function(){
      var link = self.model.getUrl(event.target.id);
      var id = event.target.id;
      self.api.summaryApiRequest(link, function(summary) {
        self.showSummary(id, summary);
      });
    });
  }
}

exports.NewsManagerController = NewsManagerController;

})(this);
