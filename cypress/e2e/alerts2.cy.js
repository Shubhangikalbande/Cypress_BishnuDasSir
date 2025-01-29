describe("alerts",()=>{

    it("alerts",()=>{

        cy.visit("https://vinothqaacademy.com/alert-and-popup/")
        cy.get('button[ name="alertbox"]').click()
        cy.on('window:alert',(alert)=>{

            expect(alert).to.contains("You clicked on OK!")
        })
        cy.get("#demotwo").should("have.text","You clicked on OK!")
    })

    it("confirm",()=>{

        cy.visit("https://vinothqaacademy.com/alert-and-popup/")

        cy.get('button[name="confirmalertbox"]').click()
        cy.on('window:alert',(alert)=>{
            expect(alert).to.contains("You clicked on OK!")
            cy.get("#demotwo").should("have.text","You clicked on OK!")
        })
    })
    it("confirm cancel",()=>{

        cy.visit("https://vinothqaacademy.com/alert-and-popup/")

        cy.get('button[name="confirmalertbox"]').click()
        cy.on('window:confirm',()=> false)
        cy.get("#demo").should("have.text","You clicked on Cancel!")
    })
    it("prompt",()=>{

 cy.visit("https://vinothqaacademy.com/alert-and-popup/")
 cy.window().then((abc)=>{
    cy.stub( abc,"prompt").returns("yes")
 })
 cy.get('button[name="promptalertbox1234"]').click()
 cy.get("#demoone").should("have.text","Thanks for Liking Automation")

    })

    it.only("prompt cancel",()=>{
        cy.visit("https://vinothqaacademy.com/alert-and-popup/")
        cy.window().then((abc)=>{
            cy.stub(abc,'prompt').callsFake(()=>null)
        })
        cy.get('button[name="promptalertbox1234"]').click()
        cy.get("#demoone").should("have.text","User cancelled the prompt.")
    })
})