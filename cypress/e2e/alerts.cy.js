describe("alerts",()=>{
    it("handling alerts",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert',(alert)=>{
            expect(alert).to.contains("I am a JS Alert")


        })
        cy.get('#result').should("have.text","You successfully clicked an alert")
    })
    it("confirm",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:alert',(alert)=>{
            expect(alert).to.contains("I am a JS Confirm")


        })
        cy.get('#result').should("have.text","You clicked: Ok")
    })
    it("cancel",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', () => false)  

           
        
        cy.get("#result").should("have.text","You clicked: Cancel")

    })
    it("promt" ,()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((abc)=>{
            cy.stub( abc,'prompt').returns("hi")
        })

        cy.get("button[onClick='jsPrompt()']").click()

        cy.get("#result").should('have.text', 'You entered: hi')

    })
    it.only("prompt window cancel",()=>{

        cy.window().then( (window) => {
           
            cy.stub(window, 'prompt').callsFake(() => null)
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get("#result").should('have.text', 'You entered: null')
      
    })



})