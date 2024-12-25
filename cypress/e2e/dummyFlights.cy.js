describe("test suite",()=>{

    it("book flight",()=>{

        cy.visit("https://dummy-tickets.com/")
    cy.contains("ONE WAY").click().should("be.visible")
    cy.get('#select2-departure-city-container').type("pune").type('{enter}')
    cy.get('#select2-destination-city-container').type("delhi").type('{enter')

    })

    
})