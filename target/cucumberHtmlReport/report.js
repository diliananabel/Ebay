$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/bns/belatrix/userstory/features/SearchProduct.feature");
formatter.feature({
  "line": 1,
  "name": "Search Product in ebay",
  "description": "\r\nAs a user\r\nI want to use a program for navigate on ebay page\r\nSo that search a product on ebay page",
  "id": "search-product-in-ebay",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "The search products shows the first 5 results",
  "description": "",
  "id": "search-product-in-ebay;the-search-products-shows-the-first-5-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Test_001"
    },
    {
      "line": 7,
      "name": "@HappyPath"
    },
    {
      "line": 7,
      "name": "@FirstFormat"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "enter to Ebay page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "enter \"\u003cproduct\u003e\" in the product search screen on ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on the button \"Search\" in screen on ebay page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click in the check \"brand\" \"\u003cbrand\u003e\" on ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click in the check \"size\" \"\u003csize\u003e\" in page on ebay",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "print the number of results of the product search on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on the button \"Best Match\" on ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click in the option \"Price + Shipping lowest\" Price lowest Best Match",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "print the order the results of the search product on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "print the order taking the first \"\u003cfirst\u003e\" results order Name by ASC",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "click on the button \"Best Match\" on ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "click in the option \"Price + Shipping highest\" Price highest Best Match",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "print the order the results of the search product on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "print the order taking the first \"\u003cfirst\u003e\" results order Price by Desc",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "search-product-in-ebay;the-search-products-shows-the-first-5-results;",
  "rows": [
    {
      "cells": [
        "product",
        "brand",
        "size",
        "first"
      ],
      "line": 27,
      "id": "search-product-in-ebay;the-search-products-shows-the-first-5-results;;1"
    },
    {
      "cells": [
        "Shoes",
        "PUMA",
        "10",
        "5"
      ],
      "line": 28,
      "id": "search-product-in-ebay;the-search-products-shows-the-first-5-results;;2"
    }
  ],
  "keyword": "Examples",
  "tags": [
    {
      "line": 25,
      "name": "@test"
    },
    {
      "line": 25,
      "name": "@chrome"
    }
  ]
});
formatter.before({
  "duration": 13951508100,
  "status": "passed"
});
formatter.before({
  "duration": 1027900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "The search products shows the first 5 results",
  "description": "",
  "id": "search-product-in-ebay;the-search-products-shows-the-first-5-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@HappyPath"
    },
    {
      "line": 25,
      "name": "@chrome"
    },
    {
      "line": 7,
      "name": "@Test_001"
    },
    {
      "line": 7,
      "name": "@FirstFormat"
    },
    {
      "line": 25,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "enter to Ebay page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "enter \"Shoes\" in the product search screen on ebay page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on the button \"Search\" in screen on ebay page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click in the check \"brand\" \"PUMA\" on ebay page",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click in the check \"size\" \"10\" in page on ebay",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "print the number of results of the product search on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on the button \"Best Match\" on ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click in the option \"Price + Shipping lowest\" Price lowest Best Match",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "print the order the results of the search product on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "print the order taking the first \"5\" results order Name by ASC",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "click on the button \"Best Match\" on ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "click in the option \"Price + Shipping highest\" Price highest Best Match",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "print the order the results of the search product on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "print the order taking the first \"5\" results order Price by Desc",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct.enterToEbayPage()"
});
formatter.result({
  "duration": 96403900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 7
    }
  ],
  "location": "SearchProduct.enterInTheProductSearchScreenOnEbayPage(String)"
});
formatter.result({
  "duration": 95986300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 21
    }
  ],
  "location": "SearchProduct.clickOnTheButtonInScreenOnEbayPage(String)"
});
formatter.result({
  "duration": 4606859500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "brand",
      "offset": 20
    },
    {
      "val": "PUMA",
      "offset": 28
    }
  ],
  "location": "SearchProduct.clickInTheCheckOnEbayPage(String,String)"
});
formatter.result({
  "duration": 10735225800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "size",
      "offset": 20
    },
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "SearchProduct.clickInTheCheckInPageOnEbay(String,String)"
});
formatter.result({
  "duration": 16845122000,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct.printTheNumberOfResultsOfTheProductSearchOnEbayPage()"
});
formatter.result({
  "duration": 175168100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Best Match",
      "offset": 21
    }
  ],
  "location": "SearchProduct.clickOnTheButtonOnEbayPage(String)"
});
formatter.result({
  "duration": 10141495500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price + Shipping lowest",
      "offset": 21
    }
  ],
  "location": "SearchProduct.clickInTheOptionPriceLowestBestMatch(String)"
});
formatter.result({
  "duration": 1621641300,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct.printTheOrderByPriceAscendantTheResultsOfTheSearchProductOnEbayPage()"
});
formatter.result({
  "duration": 73060500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 34
    }
  ],
  "location": "SearchProduct.printTheOrderTakingTheFiveResults(String)"
});
formatter.result({
  "duration": 574406500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Best Match",
      "offset": 21
    }
  ],
  "location": "SearchProduct.clickOnTheButtonOnEbayPage(String)"
});
formatter.result({
  "duration": 10131774200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price + Shipping highest",
      "offset": 21
    }
  ],
  "location": "SearchProduct.clickInTheOptionBestMatch(String)"
});
formatter.result({
  "duration": 1677360900,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct.printTheOrderByPriceAscendantTheResultsOfTheSearchProductOnEbayPage()"
});
formatter.result({
  "duration": 83364300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 34
    }
  ],
  "location": "SearchProduct.printTheOrderTakingTheFirstResultsOrderPriceByDesc(String)"
});
formatter.result({
  "duration": 574935200,
  "status": "passed"
});
formatter.after({
  "duration": 4668571900,
  "status": "passed"
});
formatter.after({
  "duration": 104500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "SF - The search products shows the first 5 results",
  "description": "",
  "id": "search-product-in-ebay;sf---the-search-products-shows-the-first-5-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@Test_001"
    },
    {
      "line": 31,
      "name": "@HappyPath"
    },
    {
      "line": 31,
      "name": "@SecondFormat"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "SF - enter to Ebay page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "SF - enter \"\u003ccaso_prueba\u003e\" in the product search screen on ebay page \"Ebay Data\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "SF - click on the button \"Search\" in screen on ebay page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "SF - click in the check \"brand\" \"\u003ccaso_prueba\u003e\" on ebay page \"Ebay Data\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "SF - click in the check \"size\" \"\u003ccaso_prueba\u003e\" in page on ebay \"Ebay Data\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "SF - print the number of results of the product search on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "SF - click on the button \"Best Match\" on ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "SF - click in the option \"Price + Shipping lowest\" Price lowest Best Match",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "SF - print the order the results of the search product on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "SF - print the order taking the first \"\u003ccaso_prueba\u003e\" results order Name by ASC \"Ebay Data\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "SF - click on the button \"Best Match\" on ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "SF - click in the option \"Price + Shipping highest\" Price highest Best Match",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "SF - print the order the results of the search product on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "SF - print the order taking the first \"\u003ccaso_prueba\u003e\" results order Price by Desc \"Ebay Data\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "search-product-in-ebay;sf---the-search-products-shows-the-first-5-results;",
  "rows": [
    {
      "cells": [
        "caso_prueba"
      ],
      "line": 50,
      "id": "search-product-in-ebay;sf---the-search-products-shows-the-first-5-results;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 51,
      "id": "search-product-in-ebay;sf---the-search-products-shows-the-first-5-results;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 52,
      "id": "search-product-in-ebay;sf---the-search-products-shows-the-first-5-results;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12851841200,
  "status": "passed"
});
formatter.before({
  "duration": 1434800,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "SF - The search products shows the first 5 results",
  "description": "",
  "id": "search-product-in-ebay;sf---the-search-products-shows-the-first-5-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@HappyPath"
    },
    {
      "line": 31,
      "name": "@SecondFormat"
    },
    {
      "line": 31,
      "name": "@Test_001"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "SF - enter to Ebay page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "SF - enter \"1\" in the product search screen on ebay page \"Ebay Data\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "SF - click on the button \"Search\" in screen on ebay page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "SF - click in the check \"brand\" \"1\" on ebay page \"Ebay Data\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "SF - click in the check \"size\" \"1\" in page on ebay \"Ebay Data\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "SF - print the number of results of the product search on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "SF - click on the button \"Best Match\" on ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "SF - click in the option \"Price + Shipping lowest\" Price lowest Best Match",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "SF - print the order the results of the search product on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "SF - print the order taking the first \"1\" results order Name by ASC \"Ebay Data\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "SF - click on the button \"Best Match\" on ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "SF - click in the option \"Price + Shipping highest\" Price highest Best Match",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "SF - print the order the results of the search product on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "SF - print the order taking the first \"1\" results order Price by Desc \"Ebay Data\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductSecondFormat.sfEnterToEbayPage()"
});
formatter.result({
  "duration": 28624000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    },
    {
      "val": "Ebay Data",
      "offset": 58
    }
  ],
  "location": "SearchProductSecondFormat.sfEnterInTheProductSearchScreenOnEbayPage(String,String)"
});
formatter.result({
  "duration": 566755600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 26
    }
  ],
  "location": "SearchProductSecondFormat.sfClickOnTheButtonInScreenOnEbayPage(String)"
});
formatter.result({
  "duration": 4975406300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "brand",
      "offset": 25
    },
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "Ebay Data",
      "offset": 50
    }
  ],
  "location": "SearchProductSecondFormat.sfClickInTheCheckOnEbayPage(String,String,String)"
});
formatter.result({
  "duration": 11392151800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "size",
      "offset": 25
    },
    {
      "val": "1",
      "offset": 32
    },
    {
      "val": "Ebay Data",
      "offset": 52
    }
  ],
  "location": "SearchProductSecondFormat.sfClickInTheCheckInPageOnEbay(String,String,String)"
});
formatter.result({
  "duration": 16878088100,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductSecondFormat.sfPrintTheNumberOfResultsOfTheProductSearchOnEbayPage()"
});
formatter.result({
  "duration": 170361500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Best Match",
      "offset": 26
    }
  ],
  "location": "SearchProductSecondFormat.sfClickOnTheButtonOnEbayPage(String)"
});
formatter.result({
  "duration": 10128890400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price + Shipping lowest",
      "offset": 26
    }
  ],
  "location": "SearchProductSecondFormat.sfClickInTheOptionPriceLowestBestMatch(String)"
});
formatter.result({
  "duration": 1602760600,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductSecondFormat.sfPrintTheOrderTheResultsOfTheSearchProductOnEbayPage()"
});
formatter.result({
  "duration": 138336100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    },
    {
      "val": "Ebay Data",
      "offset": 69
    }
  ],
  "location": "SearchProductSecondFormat.sfPrintTheOrderTakingTheFirstResultsOrderNameByASC(String,String)"
});
formatter.result({
  "duration": 509127200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Best Match",
      "offset": 26
    }
  ],
  "location": "SearchProductSecondFormat.sfClickOnTheButtonOnEbayPage(String)"
});
formatter.result({
  "duration": 10146115300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price + Shipping highest",
      "offset": 26
    }
  ],
  "location": "SearchProductSecondFormat.sfClickInTheOptionPriceHighestBestMatch(String)"
});
formatter.result({
  "duration": 1506373700,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductSecondFormat.sfPrintTheOrderTheResultsOfTheSearchProductOnEbayPage()"
});
formatter.result({
  "duration": 70886500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    },
    {
      "val": "Ebay Data",
      "offset": 71
    }
  ],
  "location": "SearchProductSecondFormat.sfPrintTheOrderTakingTheFirstResultsOrderPriceByDesc(String,String)"
});
formatter.result({
  "duration": 491117600,
  "status": "passed"
});
formatter.after({
  "duration": 4897642500,
  "status": "passed"
});
formatter.after({
  "duration": 105100,
  "status": "passed"
});
formatter.before({
  "duration": 13361409300,
  "status": "passed"
});
formatter.before({
  "duration": 1079400,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "SF - The search products shows the first 5 results",
  "description": "",
  "id": "search-product-in-ebay;sf---the-search-products-shows-the-first-5-results;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@HappyPath"
    },
    {
      "line": 31,
      "name": "@SecondFormat"
    },
    {
      "line": 31,
      "name": "@Test_001"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "SF - enter to Ebay page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "SF - enter \"2\" in the product search screen on ebay page \"Ebay Data\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "SF - click on the button \"Search\" in screen on ebay page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "SF - click in the check \"brand\" \"2\" on ebay page \"Ebay Data\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "SF - click in the check \"size\" \"2\" in page on ebay \"Ebay Data\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "SF - print the number of results of the product search on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "SF - click on the button \"Best Match\" on ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "SF - click in the option \"Price + Shipping lowest\" Price lowest Best Match",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "SF - print the order the results of the search product on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "SF - print the order taking the first \"2\" results order Name by ASC \"Ebay Data\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "SF - click on the button \"Best Match\" on ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "SF - click in the option \"Price + Shipping highest\" Price highest Best Match",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "SF - print the order the results of the search product on ebay page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "SF - print the order taking the first \"2\" results order Price by Desc \"Ebay Data\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductSecondFormat.sfEnterToEbayPage()"
});
formatter.result({
  "duration": 32469300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    },
    {
      "val": "Ebay Data",
      "offset": 58
    }
  ],
  "location": "SearchProductSecondFormat.sfEnterInTheProductSearchScreenOnEbayPage(String,String)"
});
formatter.result({
  "duration": 110260600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 26
    }
  ],
  "location": "SearchProductSecondFormat.sfClickOnTheButtonInScreenOnEbayPage(String)"
});
formatter.result({
  "duration": 5378925800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "brand",
      "offset": 25
    },
    {
      "val": "2",
      "offset": 33
    },
    {
      "val": "Ebay Data",
      "offset": 50
    }
  ],
  "location": "SearchProductSecondFormat.sfClickInTheCheckOnEbayPage(String,String,String)"
});
formatter.result({
  "duration": 10545172900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "size",
      "offset": 25
    },
    {
      "val": "2",
      "offset": 32
    },
    {
      "val": "Ebay Data",
      "offset": 52
    }
  ],
  "location": "SearchProductSecondFormat.sfClickInTheCheckInPageOnEbay(String,String,String)"
});
formatter.result({
  "duration": 17571789000,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductSecondFormat.sfPrintTheNumberOfResultsOfTheProductSearchOnEbayPage()"
});
formatter.result({
  "duration": 158766000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Best Match",
      "offset": 26
    }
  ],
  "location": "SearchProductSecondFormat.sfClickOnTheButtonOnEbayPage(String)"
});
formatter.result({
  "duration": 10129034500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price + Shipping lowest",
      "offset": 26
    }
  ],
  "location": "SearchProductSecondFormat.sfClickInTheOptionPriceLowestBestMatch(String)"
});
formatter.result({
  "duration": 2173414300,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductSecondFormat.sfPrintTheOrderTheResultsOfTheSearchProductOnEbayPage()"
});
formatter.result({
  "duration": 33534300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    },
    {
      "val": "Ebay Data",
      "offset": 69
    }
  ],
  "location": "SearchProductSecondFormat.sfPrintTheOrderTakingTheFirstResultsOrderNameByASC(String,String)"
});
formatter.result({
  "duration": 526387700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Best Match",
      "offset": 26
    }
  ],
  "location": "SearchProductSecondFormat.sfClickOnTheButtonOnEbayPage(String)"
});
formatter.result({
  "duration": 10135101600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price + Shipping highest",
      "offset": 26
    }
  ],
  "location": "SearchProductSecondFormat.sfClickInTheOptionPriceHighestBestMatch(String)"
});
formatter.result({
  "duration": 1990810200,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductSecondFormat.sfPrintTheOrderTheResultsOfTheSearchProductOnEbayPage()"
});
formatter.result({
  "duration": 165657400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    },
    {
      "val": "Ebay Data",
      "offset": 71
    }
  ],
  "location": "SearchProductSecondFormat.sfPrintTheOrderTakingTheFirstResultsOrderPriceByDesc(String,String)"
});
formatter.result({
  "duration": 358298500,
  "status": "passed"
});
formatter.after({
  "duration": 4881214100,
  "status": "passed"
});
formatter.after({
  "duration": 20100,
  "status": "passed"
});
});