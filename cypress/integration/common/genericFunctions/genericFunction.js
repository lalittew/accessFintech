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

    verifyBackGroundColorElement(element, backgroundColor){
        cy.get(element).should('have.css', 'background-color').and('eq', backgroundColor)
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
}

export const genericFunctions = new GenericFunctions()