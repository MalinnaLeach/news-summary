(function (exports) {

  function ApiManager() {
    this.xhr = new XMLHttpRequest();
  }

  ApiManager.prototype = {

    apiRequest: function(callback){
      this.xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail", true);
      this.xhr.send();
      this.xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
          var newsObject = JSON.parse(this.responseText);
          var headlines = newsObject.response.results;
          callback(headlines);
        }
      }
    },

    summaryApiRequest: function(link, callback) {
      this.xhr.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + link, true);
      this.xhr.send();
      this.xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
          var summaryObject = JSON.parse(this.responseText);
          var summary = summaryObject.sentences;
          callback(summary);
        }
      }
    }
  };

  exports.ApiManager = ApiManager;

})(this);
