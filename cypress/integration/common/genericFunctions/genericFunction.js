class GenericFunctions{
    visitUrl(url){
        cy.visit(url)
    }
}

export const genericFunctions = new GenericFunctions()