describe("fixtures",()=>{


    it("fixtures",()=>{

        cy.fixture("orangeHRMData.json").then((value)=>{
            

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.get('input[ placeholder="Username"]').type(value.uname)
        cy.get('input[name="password"]').type(value.pass)
        cy.get('button[type="submit"]').click()
        })

       cy.contains("Dashboard").should("be.visible")
    })
})