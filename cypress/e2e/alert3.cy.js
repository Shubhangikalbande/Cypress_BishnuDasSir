describe("alerts",()=>{

    it("alert",()=>{
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get('input[onclick="show_alert()"]').click()
        cy.on('window:alert',(alert)=>{

           expect(alert).to.contain("You triggered and handled the alert dialog")
        })
        cy.get('#alertexplanation').should("have.text","You triggered and handled the alert dialog")

    }) 
})