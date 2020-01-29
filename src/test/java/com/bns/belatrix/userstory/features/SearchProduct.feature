Feature: Search Product in ebay

  As a user
  I want to use a program for navigate on ebay page
  So that search a product on ebay page

  @Test_001 @HappyPath @FirstFormat
  Scenario Outline: The search products shows the first 5 results

    Given  enter to Ebay page
    When   enter "<product>" in the product search screen on ebay page
    And    click on the button "Search" in screen on ebay page
    When   click in the check "brand" "<brand>" on ebay page
    When   click in the check "size" "<size>" in page on ebay
    Then   print the number of results of the product search on ebay page
    When   click on the button "Best Match" on ebay page
    And    click in the option "Price + Shipping lowest" Price lowest Best Match
    Then   print the order the results of the search product on ebay page
    Then   print the order taking the first "<first>" results order Name by ASC
    When   click on the button "Best Match" on ebay page
    And    click in the option "Price + Shipping highest" Price highest Best Match
    Then   print the order the results of the search product on ebay page
    Then   print the order taking the first "<first>" results order Price by Desc

  @test @chrome
    Examples:
      | product | brand     | size | first |
      | Shoes   | PUMA      | 10   |  5    |


  @Test_001 @HappyPath @SecondFormat
  Scenario Outline: SF - The search products shows the first 5 results

    Given  SF - enter to Ebay page
    When   SF - enter "<caso_prueba>" in the product search screen on ebay page "Ebay Data"
    And    SF - click on the button "Search" in screen on ebay page
    When   SF - click in the check "brand" "<caso_prueba>" on ebay page "Ebay Data"
    When   SF - click in the check "size" "<caso_prueba>" in page on ebay "Ebay Data"
    Then   SF - print the number of results of the product search on ebay page
    When   SF - click on the button "Best Match" on ebay page
    And    SF - click in the option "Price + Shipping lowest" Price lowest Best Match
    Then   SF - print the order the results of the search product on ebay page
    Then   SF - print the order taking the first "<caso_prueba>" results order Name by ASC "Ebay Data"
    When   SF - click on the button "Best Match" on ebay page
    And    SF - click in the option "Price + Shipping highest" Price highest Best Match
    Then   SF - print the order the results of the search product on ebay page
    Then   SF - print the order taking the first "<caso_prueba>" results order Price by Desc "Ebay Data"

    Examples:
      | caso_prueba |
      | 1           |
      | 2           |

