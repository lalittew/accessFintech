const { Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps")
const { genericFunctions } = require("../../genericFunctions/genericFunction")
const { accessFintechCountryInfoPage } = require("./accessFintechCountryinfoPage")

Then("I verify the UI of country info page", () => {
    accessFintechCountryInfoPage.verifyUICountryInfoPage()
})

And("I click on {string} button on country info page", (countryInfoButton) => {
    accessFintechCountryInfoPage.clickButtonCountryInfoPage(countryInfoButton)
})

Then("I click back to countries link", () => {
    genericFunctions.clickElement(accessFintechCountryInfoPage.backToCountriesLink)
})

Then("I verify the UI of {string} on country info page", (countryInfoButtonUIAfterClicking) => {
    accessFintechCountryInfoPage.countryInfoButtonUIAfterClicking(countryInfoButtonUIAfterClicking)
})