import 'cypress-iframe';


describe("handling iframes",()=>{

    it("iframe1",()=>{

  

    cy.visit("https://demoqa.com/frames")
    cy.iframe("#frame1").find("h1#sampleHeading").should("have.text","This is a sample page")
})
})