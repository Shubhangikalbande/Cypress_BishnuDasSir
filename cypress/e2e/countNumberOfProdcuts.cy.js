describe("count no of products",()=>{
    it("count no of prodcuts on the web page",()=>{

        cy.visit("https://www.amazon.in/")
        cy.get('input#twotabsearchtextbox').click().type("shoes")
        cy.get('input[id="nav-search-submit-button"]').click()
        let count=0
        //cy.url().should('eq','https://www.amazon.in/s?k=shoes&crid=G134BY4Z1Q4L&sprefix=%2Caps%2C304&ref=nb_sb_ss_recent_1_0_recent')
        cy.get('div[data-component-type="s-search-result"]').each(($ele)=>{

            const product=$ele.text()
            

            if(product.includes("ASIAN")){
                count=count+1
            }
            
        }).then(()=>{
            cy.log(count)
        })
    })
})