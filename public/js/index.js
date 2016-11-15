(function () {
  window.addEventListener("load", function() {
    var storySummary = document.getElementById('storySummary');
    var headlines = document.getElementById('headlines');
    var controller = new NewsManagerController(storySummary,
                              headlines,
                              new NewsManagerModel(),
                              new NewsManagerView(),
                              new ApiManager());
    controller.api.apiRequest(function(headlines) {
      controller.createStories(headlines);
    });
  });
})();
