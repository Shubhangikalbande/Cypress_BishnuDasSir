describe("navigation",()=>{


    it("navigation",()=>{

        cy.visit("https://www.flipkart.com/")
        cy.get('input[placeholder="Search for Products, Brands and More"]').should("be.visible").click().type("toys")
        cy.go(-1)
        cy.go(1)
        cy.go('back')
        cy.go('forward')
    })
    
})