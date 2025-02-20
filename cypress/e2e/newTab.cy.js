describe("handling mutiple window",()=>{
    it("approach 1",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('a[target="_blank"]').invoke("removeAttr","target")
        cy.contains("Click Here").click()
        cy.url().should("include","https://the-internet.herokuapp.com/windows/new")
        cy.contains("New Window").should("be.visible")
        cy.go("back")
        cy.get('a[target="_blank"]').invoke("removeAttr","target")
        
       cy.contains("Elemental Selenium",{timeout:16000}).click()
       
    })
    it.only("2nd approach",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('a[target="_blank"]').then((link)=>{

            const newlink=link.prop("href")
            cy.visit(newlink)
        })
        cy.url().should("eq","https://the-internet.herokuapp.com/windows/new")
        cy.contains("New Window").should("be.visible")
        cy.get('h3').should('not.have.text', 'Opening a new window')
        cy.go(-1)
    })
})