var testSuite = function (controller) {

    var stories = dummyData.response.results;

    (function seeIfFirstHeadlinesCreated() {
      controller.createStories(stories, controller);
      expect.elementIdToContainInnerText("A member's view: 'You need to plan a long time before you're ill'", 0);
      removeLinks();
    })();

    (function seeIfLastHeadlinesCreated() {
      controller.createStories(stories, controller);
      expect.elementIdToContainInnerText("The week started with an old-school jailbreak, and ended with ...", 9);
      removeLinks();
    })();

    (function showsThumbnailImages() {
      controller.createStories(stories, controller);
      imgUrl = "https://media.guim.co.uk/b4c346f9e4bc39b227e71c4ec41ab3cc02464559/0_0_1920_1152/500.jpg";
      expect.elementAttributeToContainInnerHTML(imgUrl, "img", 1, "src" );
    })();

    (function showSummary() {
      controller.showSummary(2, dummySummary, controller);
      expect.elementIdToContainInnerText("Robert Redford at Sundance", "storySummary");
    })();

    function removeLinks() {
      var element = document.getElementById("headlines");
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }

};
