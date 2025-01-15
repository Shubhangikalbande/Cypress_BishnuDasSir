describe("test suite",()=>{

    it("testing radio button",()=>{
        cy.visit("https://qa-automation-practice.netlify.app/radiobuttons")
        cy.get("#radio-button1").click().should("be.checked")
        cy.get("#radio-button2").should("not.be.checked")
        cy.get("#radio-button3").should("not.be.checked")
         cy.get("#radio-button2").click().should("be.checked")
         cy.get("#radio-button1").should("not.be.checked")
        cy.get("#radio-button3").should("not.be.checked")
        

    })
    it.only("checkboxes",()=>{
        cy.visit("https://qa-automation-practice.netlify.app/checkboxes")
        cy.get('#checkbox1').check().should("be.checked")
        cy.get('#checkbox2').should("not.be.checked")
        cy.get('#checkbox3').should("not.be.checked")
        cy.get('#checkbox2').check().should("be.checked")
        cy.get('#checkbox1').uncheck().should("not.be.checked")
        cy.get('#checkbox3').check().should("be.checked")
        cy.contains("Reset").click()
        cy.get('#checkbox2').should("not.be.checked")
        cy.get('#checkbox3').should("not.be.checked")

        
    })
})