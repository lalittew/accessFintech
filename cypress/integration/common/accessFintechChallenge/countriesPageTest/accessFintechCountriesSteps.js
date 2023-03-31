const { Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps")
const { accessFintechCountriesPage } = require("./accessFintechCountriesPage")

Then("I verify the UI of countries page", () => {
    accessFintechCountriesPage.verifyUICountriesPage()
})