Feature: This page is very the functionality of Country Info page

    Scenario Outline: Verify the UI of country info page
        Given I am on Countries page
        And I enter <country> name in filter text box
        Then navigate to country information page
        And I verify the UI of country info page

    Examples:
        | country        | countriesVisited |
        | India          |    1             |

    Scenario Outline: Verify that UI/name of button in Country Info page is changed on clicking
        Given I am on Countries page
        And I enter <country> name in filter text box
        Then navigate to country information page
        Then I click on "Set as visited" button on country info page
        And I verify the UI of "Visited button" on country info page
        Then I click on "Set as want to visit" button on country info page
        And I verify the UI of "Want to visit button" on country info page


    Examples:
        | country        | countriesVisited |
        | India          |    1             |
