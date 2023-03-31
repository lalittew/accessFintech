const { Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps")
const { genericFunctions } = require("../genericFunctions/genericFunction")

Given("I am on Access Fintech home page", () => {
    genericFunctions.visitUrl(Cypress.env('baseUrl'))
})


