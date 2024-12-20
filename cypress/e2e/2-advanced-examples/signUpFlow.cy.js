describe("Test suite",()=>{
    it("Test the sign up flow",()=>{

        cy.wait(5000)

        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Sign In").click()
        cy.get('input[name="login[username]"]').type("shubhangi.s.kalbande@gmail.com")
        cy.get('input[name="login[password]"]').type("Shubhangi@1988")
        cy.get('#send2').click()
        cy.contains("Welcome, shubhangi kalbande!")
    })
})