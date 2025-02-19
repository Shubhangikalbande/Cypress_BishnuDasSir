describe("handling mutiple window",()=>{
    it("approach 1",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('target="_blank').invoke("removeAttr","target")
       
    })
})