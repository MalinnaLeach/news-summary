var expect = {

  toBeTrue: function(conditionToCheck) {
    if (!conditionToCheck) {
      throw new Error("Expected " + conditionToCheck + " to be true but got false");
    } else {
      console.log("Test passed!");
    }
  },

  toBeFalse: function(conditionToCheck) {
    if (conditionToCheck) {
      throw new Error("Expected " + conditionToCheck + " to be false but got true");
    } else {
      console.log("Test passed!");
    }
  },

  toBeEqual: function(conditionToCheck, expectedResult) {
    if (conditionToCheck !== expectedResult) {
      throw new Error("Expected " + conditionToCheck + " to be " + expectedResult);
    } else {
      console.log("Test passed!");
    }
  },

  tagToContain: function(expectedContents, elementTagName, index) {
    var documentContent = document.getElementsByTagName(elementTagName)[index];
    if (!documentContent.innerText.includes(expectedContents)) {
      throw new Error("Expected " + documentContent.innerText + " to contain " + expectedContents);
    } else {
      console.log("Test passed!");
    }
  },

  elementIdToContain: function(expectedContents, elementId) {
    var listItemContent = document.getElementById(elementId);
    if (!listItemContent.value.includes(expectedContents)) {
      throw new Error("Expected " + listItemContent.innerText + " to contain " + expectedContents);
    } else {
      console.log("Test passed!");
    }
  },

  elementIdToContainInnerText: function(expectedContents, elementId) {
    var listItemContent = document.getElementById(elementId);
    if (!listItemContent.innerText.includes(expectedContents)) {
      throw new Error("Expected " + listItemContent.innerText + " to contain " + expectedContents);
    } else {
      console.log("Test passed!");
    }
  },

  isHidden: function(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display !== "none") {
      throw new Error("Expected " + elementId + " to be hidden");
    } else {
      console.log("Test passed!");
    }
  },

  elementAttributeToContainInnerHTML: function(expectedContents, elementName, elementNumber, elementAttribute) {
    var elementAttributeValue = document.getElementsByTagName(elementName)[elementNumber].getAttribute(elementAttribute);
    expect.toBeEqual(elementAttributeValue, expectedContents);
  },



};
