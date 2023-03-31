import { genericFunctions } from "../../genericFunctions/genericFunction"
import { accessFintechHomePage } from "../homePageTest/accessFintechHomePage"

class AccessFintechCountriesPage{
    //elements/locators related to home page
    filterTextBox = 'input[type="text"]'
    countriesCount = '.evgQHo'
    countriesTable = 'table[name="Countries"]'
    countriesHeaderCheckBox = 'th[class="sc-iqAbSa gfcIZQ"] > input'
    countriesHeaderColumns = '.gfcIZQ'
    totalRowsCountriesBody = 'tbody[class="sc-jrsJCI emsrNO"] > tr'

    //Strings related to Countries page
    totalCountriesCount = '250 countries'
    countriesHeaderColumnnameFlag = 'Flag'
    countriesHeaderColumnnameCode = 'Code'
    countriesHeaderColumnnameName= 'Name'
    countriesHeaderColumnnameContinent = 'Continent'
    countriesHeaderColumnnameCapital = 'Capital'
    countriesHeaderColumnnameCurrency = 'Currency'
    countriesHeaderColumnnameLanguage = 'Language'
    countriesHeaderColumnnameVisited = 'Visited'
    countriesHeaderColumnnameWantToGo = 'Want to go'
    rowsCount250 = '250'

    verifyUICountriesPage(){
        //Verify that Countries tab is present and is highlighted in blue colour
        genericFunctions.verifyElementIsVisible(accessFintechHomePage.countriesTab)
        genericFunctions.verifyElementHaveText(accessFintechHomePage.countriesTab, accessFintechHomePage.countriesTabText)
        genericFunctions.verifyBackGroundColorElement(accessFintechHomePage.countriesTab, accessFintechHomePage.menuTabHighlightedInBlue)

        //Verify that Home tab is present and is highlighted in transparent colour
        genericFunctions.verifyElementIsVisible(accessFintechHomePage.homeTab)
        genericFunctions.verifyElementHaveText(accessFintechHomePage.homeTab, accessFintechHomePage.homeTabText)
        genericFunctions.verifyBackGroundColorElement(accessFintechHomePage.homeTab, accessFintechHomePage.menuTabHighlightedInTransparent)

        //Verify the total number of countries present in table
        genericFunctions.verifyElementIsVisible(this.countriesCount)
        genericFunctions.verifyElementHaveText(this.countriesCount, this.totalCountriesCount)

        //Verify that Countries table is present and visible
        genericFunctions.verifyElementIsVisible(this.countriesTable)

        //Verify the table columns of header in country table
        genericFunctions.verifyElementIsVisible(this.countriesHeaderCheckBox)

        //Verify the columns name of countries header
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesHeaderColumns, 1)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesHeaderColumns, 1, this.countriesHeaderColumnnameFlag)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesHeaderColumns, 2)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesHeaderColumns, 2, this.countriesHeaderColumnnameCode)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesHeaderColumns, 3)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesHeaderColumns, 3, this.countriesHeaderColumnnameName)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesHeaderColumns, 4)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesHeaderColumns, 4, this.countriesHeaderColumnnameContinent)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesHeaderColumns, 5)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesHeaderColumns, 5, this.countriesHeaderColumnnameCapital)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesHeaderColumns, 6)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesHeaderColumns, 6, this.countriesHeaderColumnnameCurrency)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesHeaderColumns, 7)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesHeaderColumns, 7, this.countriesHeaderColumnnameLanguage)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesHeaderColumns, 8)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesHeaderColumns, 8, this.countriesHeaderColumnnameVisited)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesHeaderColumns, 9)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesHeaderColumns, 9, this.countriesHeaderColumnnameWantToGo)

        //Count the total number of rows in countries body and verify its 250
        this.countRowsCountriesTableBody(this.totalRowsCountriesBody, this.rowsCount250)
    }

    countRowsCountriesTableBody(element, expectedLenth){
        cy.get(element).should('have.length', expectedLenth)
    }
}

export const accessFintechCountriesPage = new AccessFintechCountriesPage()