import { genericFunctions } from "../../genericFunctions/genericFunction"

class AccessFintechHomePage{
    //elements/locators related to home page
    homeTab = 'a[title="Home"]'
    countriesTab = 'a[title="Countries"]'
    headingDashboard = 'h3'
    countriesCountIdentifier = '.caQbbb'
    countriesInfoIdentifier = '.ehNZyA'


    //String related to home page
    homeTabText = "Home"
    countriesTabText = "Countries"
    defaultBlueColor = 'rgb(0, 94, 189)'
    menuTabHighlightedInTransparent = 'rgba(0, 0, 0, 0)'
    headingDashboardText = 'Dashboard'
    countriesAvailableText = 'Countries available'
    countriesVisitedText = 'Countries visited'
    countriesToVisitText = 'Countries to visit'
    number250Text = '250'
    number0Text = '0'

    //Functions related to home page
    verifyUIHomePage(){
        //Verify that Home tab is present and is highlighted in blue colour
        genericFunctions.verifyElementIsVisible(this.homeTab)
        genericFunctions.verifyElementHaveText(this.homeTab, this.homeTabText)
        genericFunctions.verifyBackGroundColorOfElement(this.homeTab, this.defaultBlueColor)

        //Verify that Countries tab is present and is highlighted in transparent colour
        genericFunctions.verifyElementIsVisible(this.countriesTab)
        genericFunctions.verifyElementHaveText(this.countriesTab, this.countriesTabText)
        genericFunctions.verifyBackGroundColorOfElement(this.countriesTab, this.menuTabHighlightedInTransparent)

        //Verify that Dashboard heading is present and have proper text
        genericFunctions.verifyElementIsVisible(this.headingDashboard)
        genericFunctions.verifyElementHaveText(this.headingDashboard, this.headingDashboardText)

        //Verify the Countries available section
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesCountIdentifier, 0)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesCountIdentifier, 0, this.number250Text)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesInfoIdentifier, 0)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesInfoIdentifier, 0, this.countriesAvailableText)

        //Verify the Countries visited section
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesCountIdentifier, 1)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesCountIdentifier, 1, this.number0Text)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesInfoIdentifier, 1)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesInfoIdentifier, 1, this.countriesVisitedText)

        //Verify the Countries to visit section
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesCountIdentifier, 2)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesCountIdentifier, 2, this.number0Text)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countriesInfoIdentifier, 2)
        genericFunctions.verifyElementHaveTextWithIndex(this.countriesInfoIdentifier, 2, this.countriesToVisitText)
    }
}

export const accessFintechHomePage = new AccessFintechHomePage()