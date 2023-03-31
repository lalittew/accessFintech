const { Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps")
const { genericFunctions } = require("../../genericFunctions/genericFunction")
const { accessFintechHomePage } = require("./accessFintechHomePage")

Given("I am on Access Fintech home page", () => {
    genericFunctions.visitUrl(Cypress.env('baseUrl'))
})

Then("I verify the UI of home page", () => {
    accessFintechHomePage.verifyUIHomePage()
})