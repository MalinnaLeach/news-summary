(function (exports) {

  function ApiManager() {
    this.xhr = new XMLHttpRequest();
    this.headlines = "";
    this.summary = "";
  }

  ApiManager.prototype = {

    apiRequest: function(controller, callback){
      this.xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail", true);
      this.xhr.send();
      var self = this;
      this.xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
          var newsObject = JSON.parse(this.responseText);
          self.headlines = newsObject.response.results;
          callback(self.headlines, controller);
        }
      }
    },

    summaryApiRequest: function(link, id, controller, callback) {
      this.xhr.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + link, true);
      this.xhr.send();
      self = this;
      this.xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
          var newsSummary = JSON.parse(this.responseText);
          self.summary = newsSummary.sentences;
          callback(id, self.summary, controller);
        }
      }
    }
  };

  exports.ApiManager = ApiManager;

})(this);
