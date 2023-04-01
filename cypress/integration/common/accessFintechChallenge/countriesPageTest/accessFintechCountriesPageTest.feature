Feature: This feature file is to verify the functionality of Countries page

    Scenario: Verify the UI of Countries page
        Given I am on Countries page
        Then I verify the UI of countries page

    Scenario Outline: Verify the filtering with valid country name returns one row but invalid country name returns no rows
        Given I am on Countries page
        When I enter <country> name in filter text box
        Then I get the number of rows returned as <rowCount>

    Examples:
        | country        | rowCount | 
        | India          | 1        | 
        | invalidCountry | 0        |
        | Ind            | 2        |

    Scenario: Verify the drop down values of Mark as
        Given I am on Countries page
        And I verify the values of Mark as drop down

    Scenario Outline: Verify that user is able to mark country as visited by clicking the visited check mark and then reset the country visited from Home page
        Given I am on Countries page
        And I enter <country> name in filter text box
        When I select the single country as visited
        Then I verify that the colour of single country visited mark is green
        Then I can check the number of <countriesVisited> in home page
        When I click reset button of "Countries visited"
        Then I verify that country visited counter is zero

    Examples:
        | country        | countriesVisited |
        | India          |    1             |

    Scenario Outline: Verify that user is able to mark country as visited from Mark as drop down and then reset the country visited from Home page
        Given I am on Countries page
        And I enter <country> name in filter text box
        Then I select check box for country filtered
        And I select value as "visited" from Mark as drop down
        Then I verify that the colour of single country visited mark is green
        Then I can check the number of <countriesVisited> in home page
        When I click reset button of "Countries visited"
        Then I verify that country visited counter is zero

    Examples:
        | country        | countriesVisited |
        | India          |    1             |

    Scenario Outline: Verify that user is able to mark country as visited from country details page and then reset the country visited from Home page
        Given I am on Countries page
        And I enter <country> name in filter text box
        Then navigate to country information page
        And I click on "Set as visited" button on country info page
        Then I click back to countries link 
        And I enter <country> name in filter text box
        Then I verify that the colour of single country visited mark is green
        Then I can check the number of <countriesVisited> in home page
        When I click reset button of "Countries visited"
        Then I verify that country visited counter is zero

    Examples:
        | country        | countriesVisited |
        | India          |    1             |    