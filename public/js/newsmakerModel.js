(function (exports) {
  function NewsManagerModel() {
    this.storyList = [];
  };

NewsManagerModel.prototype = {
  saveNews: function (stories) {
    this.storyList = stories;
  },

  getTitle: function (index) {
    return this.storyList[index].webTitle;
  },

  getUrl: function (index) {
    return this.storyList[index].webUrl;
  },

  getThumbnail: function (index) {
    return this.storyList[index].fields.thumbnail;
  }

};

  exports.NewsManagerModel = NewsManagerModel;

})(this);
