import { genericFunctions } from "../../genericFunctions/genericFunction"
import { accessFintechCountriesPage } from "../countriesPageTest/accessFintechCountriesPage"
import { accessFintechHomePage } from "../homePageTest/accessFintechHomePage"

class AccessFintechCountryInfoPage{
    //elements/locators related to country info page
    countryInfoHeader = 'h1'
    backToCountriesLink = '.fSuKMa'
    setAsVisitedButton = '.dZcYVK'
    visitedButon = '.OIXdF'
    setWantToVisitButton = '.jultnx'
    wantToVisitButton = '.bmHDcs'
    countryInfoKey = '.hEekTv'
    countryInfoValue = 'div[class="sc-bdnylx dUVITD"] > div[class="sc-bdnylx ihAysR"]'
    mapSection = 'iframe[title="map"]'


    //Strings related to Country Info page
    backToCountriesLinkText = ' Go back to countries'
    keyNameText = 'Name'
    keyCodeText = 'Code'
    keyCapitalText = 'Capital'
    keyContinentText = 'Continent'
    keyCurrencyText = 'Currency'
    keyLanguageText = 'Language'
    setAsVisitedButtonText = 'Set as visited'
    visitedButtonText = ' Visited'
    setWantToVisitButtonText = 'Set as want to visit'
    wantToVisitButtonText = ' Want to visit'
    dodgerBlueColor = 'rgb(30, 144, 255)'

    

    // Functions related to Country Info page
    verifyUICountryInfoPage(){
        genericFunctions.verifyElementIsVisible(this.countryInfoHeader)
        genericFunctions.verifyElementIsVisible(this.backToCountriesLink)
        genericFunctions.verifyElementHaveText(this.backToCountriesLink, this.backToCountriesLinkText)
        genericFunctions.verifyLengthOfElement(this.countryInfoKey, 6)
        genericFunctions.verifyLengthOfElement(this.countryInfoValue, 6)
        
        genericFunctions.verifyElementIsVisibleWithIndex(this.countryInfoKey, 0)
        genericFunctions.verifyElementHaveTextWithIndex(this.countryInfoKey, 0, this.keyNameText)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countryInfoKey, 1)
        genericFunctions.verifyElementHaveTextWithIndex(this.countryInfoKey, 1, this.keyCodeText)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countryInfoKey, 2)
        genericFunctions.verifyElementHaveTextWithIndex(this.countryInfoKey, 2, this.keyCapitalText)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countryInfoKey, 3)
        genericFunctions.verifyElementHaveTextWithIndex(this.countryInfoKey, 3, this.keyContinentText)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countryInfoKey, 4)
        genericFunctions.verifyElementHaveTextWithIndex(this.countryInfoKey, 4, this.keyCurrencyText)
        genericFunctions.verifyElementIsVisibleWithIndex(this.countryInfoKey, 5)
        genericFunctions.verifyElementHaveTextWithIndex(this.countryInfoKey, 5, this.keyLanguageText)

        genericFunctions.verifyElementIsVisible(this.setAsVisitedButton)
        genericFunctions.verifyElementHaveText(this.setAsVisitedButton, this.setAsVisitedButtonText)
        genericFunctions.verifyBackGroundColorOfElement(this.setAsVisitedButton, accessFintechHomePage.defaultBlueColor)

        genericFunctions.verifyElementIsVisible(this.setWantToVisitButton)
        genericFunctions.verifyElementHaveText(this.setWantToVisitButton, this.setWantToVisitButtonText)
        genericFunctions.verifyBackGroundColorOfElement(this.setWantToVisitButton, accessFintechHomePage.defaultBlueColor)

        genericFunctions.verifyElementIsVisible(this.mapSection)
    }

    clickButtonCountryInfoPage(countryInfoButton){
        switch(countryInfoButton){
            case 'Set as visited':
                genericFunctions.clickElement(this.setAsVisitedButton)
            break;

            case 'Set as want to visit':
                genericFunctions.clickElement(this.setWantToVisitButton)
            break;
        }
    }

    countryInfoButtonUIAfterClicking(countryInfoButtonUIAfterClicking){
        switch(countryInfoButtonUIAfterClicking){
            case 'Visited button':
                genericFunctions.verifyElementIsVisible(this.visitedButon)
                genericFunctions.verifyElementHaveText(this.visitedButon, this.visitedButtonText)

                genericFunctions.verifyBackGroundColorOfElement(this.visitedButon, accessFintechCountriesPage.greenColor)
            break;

            case 'Want to visit button':
                genericFunctions.verifyElementIsVisible(this.wantToVisitButton)
                genericFunctions.verifyElementHaveText(this.wantToVisitButton, this.wantToVisitButtonText)

                genericFunctions.verifyBackGroundColorOfElement(this.wantToVisitButton, this.dodgerBlueColor)
            break;
        }
    }
}

export const accessFintechCountryInfoPage = new AccessFintechCountryInfoPage()