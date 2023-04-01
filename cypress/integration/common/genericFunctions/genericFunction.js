class GenericFunctions{
    visitUrl(url){
        cy.visit(url)
    }

    verifyElementIsVisible(elementToVerify){
        cy.get(elementToVerify).should('be.visible')
    }

    verifyElementHaveText(element, textToVerify){
        cy.get(element).should('have.text', textToVerify)
    }

    verifyBackGroundColorOfElement(element, backgroundColor){
        cy.get(element).should('have.css', 'background-color').and('eq', backgroundColor)
    }

    verifyColorOfElement(element, elementColor){
        cy.get(element).should('have.css', 'color').and('eq', elementColor)
    }

    verifyElementIsVisibleWithIndex(elementToVerify, index){
        cy.get(elementToVerify).eq(index).should('be.visible')
    }

    verifyElementHaveTextWithIndex(element, index, textToVerify){
        cy.get(element).eq(index).should('have.text', textToVerify)
    }

    clickElement(element){
        cy.get(element).click()
    }

    clickElementWithIndex(element, index){
        cy.get(element).eq(index).click()
    }

    enterText(element, textToEnter){
        cy.get(element).clear()
        cy.get(element).type(textToEnter)
    }

    verifyLengthOfElement(element, expectedLength){
        cy.get(element).should('have.length', expectedLength)
    }
}

export const genericFunctions = new GenericFunctions()