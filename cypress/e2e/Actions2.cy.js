import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';


describe("actions",()=>{

    it("to hover over element",()=>{

        cy.visit("https://www.flipkart.com/")
        cy.get('div[class="H6-NpN _3N4_BX"]').trigger('mouseover')
    })
    it("test right click",()=>{
        
        cy.visit('https://practice.expandtesting.com/context-menu')
        cy.get('div#hot-spot').rightclick()
    })
    it("double click",()=>{

        cy.visit("https://qa-practice.netlify.app/double-click")
        cy.get('button[id="double-click-btn"]').dblclick()
        cy.get('div[id="double-click-result"]').should("have.text","Congrats, you double clicked!")
    })
    it.only("drag and drop",()=>{

        cy.visit('https://www.globalsqa.com/demo-site/draganddrop/')
        cy.get('img[id="angular"]').drag('img[id="angular"]')
    })
    it("upload file",()=>{
        cy.visit('https://aspuploader.com/demo/form-singlefile.asp')
        cy.get('button[id="myuploaderButton"]').attachFile("example.json")
        cy.get('tbody tr.AjaxUploaderQueueTableRow td:nth-child(2)').should('contain',"example.json")
    })

    it("scrolling",()=>{
        cy.visit("https://practice.expandtesting.com/scrollbars")
        cy.scrollTo("bottom")
        cy.scrollTo('top')
        cy.get('button[class="btn btn-primary"]').scrollIntoView()
        cy.get('button[class="btn btn-primary"]').should('be.visible')
     })
})