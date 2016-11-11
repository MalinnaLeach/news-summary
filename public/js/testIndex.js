(function () {
  window.addEventListener("load", function() {
    var storySummary = document.getElementById('storySummary');
    var headlines = document.getElementById('headlines');
    var controller = new NewsManagerController(storySummary,
                              headlines,
                              new NewsManagerModel(),
                              new NewsManagerView());
    testSuite(controller);
    });
})();
