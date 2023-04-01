const { Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps")
const { genericFunctions } = require("../../genericFunctions/genericFunction")
const { accessFintechCountryInfoPage } = require("../countryInfoPageTest/accessFintechCountryinfoPage")
const { accessFintechHomePage } = require("../homePageTest/accessFintechHomePage")
const { accessFintechCountriesPage } = require("./accessFintechCountriesPage")

Then("I verify the UI of countries page", () => {
    accessFintechCountriesPage.verifyUICountriesPage()
})

Given("I am on Countries page", () => {
    genericFunctions.visitUrl(Cypress.env('baseUrl'))
    genericFunctions.clickElement(accessFintechHomePage.countriesTab)
})

When(/^I enter (.*) name in filter text box$/, (country) => {
    genericFunctions.enterText(accessFintechCountriesPage.filterTextBox, country)
})

Then(/^I get the number of rows returned as (.*)$/, (rowCount) => {
    accessFintechCountriesPage.countRowsCountriesTableBody(accessFintechCountriesPage.totalRowsCountriesBody, rowCount)
})

And("I verify the values of Mark as drop down", () => {
    genericFunctions.clickElement(accessFintechCountriesPage.countriesHeaderCheckBox)
    accessFintechCountriesPage.verifyMarkAsDropDownValues(accessFintechCountriesPage.marAsDropDown, accessFintechCountriesPage.markAsDropDownValues)
})

When("I select the single country as visited", () => {
    genericFunctions.clickElement(accessFintechCountriesPage.countryVisitedCheckMark)
})

Then("I verify that the colour of single country visited mark is green", () => {
    genericFunctions.verifyColorOfElement(accessFintechCountriesPage.countryVisitedCheckMark, accessFintechCountriesPage.greenColor)
})

Then(/^I can check the number of (.*) in home page$/, (countryVisited) => {
    genericFunctions.clickElement(accessFintechHomePage.homeTab)
    genericFunctions.verifyElementHaveTextWithIndex(accessFintechHomePage.countriesCountIdentifier, 1, countryVisited)
})

When("I click reset button of {string}", (resetButtonToClick) => {
    accessFintechCountriesPage.clickResetButton(resetButtonToClick)
})

Then("I verify that country visited counter is zero", () => {
    genericFunctions.verifyElementHaveTextWithIndex(accessFintechHomePage.countriesCountIdentifier, 1, accessFintechHomePage.number0Text)
})

Then("I select check box for country filtered", () => {
    genericFunctions.clickElementWithIndex(accessFintechCountriesPage.checkBoxCountries, 0)
})

And("I select value as {string} from Mark as drop down", (valueOfDropDown) => {
    accessFintechCountriesPage.selectValueMarkAsDropDown(valueOfDropDown)
})

Then("navigate to country information page", () => {
    genericFunctions.clickElementWithIndex(accessFintechCountriesPage.rowCountryInfo, 1)
})