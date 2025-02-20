describe("handling new tabs",()=>{
    it("approach1",()=>{

        cy.visit("https://nichethyself.com/tourism/home.html")
         cy.get('a[target="_blank"]').invoke("removeAttr","target")
         cy.contains("Customized tours").click()

         cy.url().should("eq","https://nichethyself.com/tourism/customised.html")
         cy.go(-1)
         
})
it("aaproch2",()=>{

cy.visit("https://nichethyself.com/tourism/home.html")
cy.get('a[target="_blank"]').then((link)=>{

    let newlink=link.prop("href")
    cy.visit(newlink)
})
cy.url().should("eq","https://nichethyself.com/tourism/customised.html")
         cy.go(-1)
         
})
})