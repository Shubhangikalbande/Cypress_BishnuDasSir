import '@4tw/cypress-drag-drop';


describe("drag n drop",()=>{

    it("drag n drop",()=>{

    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    cy.get('div#box3').drag("div#box106")
    cy.get('div#box7').drag("div#box107")
    })
    
})