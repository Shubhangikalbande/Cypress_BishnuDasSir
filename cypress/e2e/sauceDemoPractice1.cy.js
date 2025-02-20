describe("Sauce Demo Practice", () => {
    it("Login to amazon", () => {
        cy.visit("https://www.amazon.in/");
        cy.contains("Hello, sign in").trigger('mouseover')
        // cy.get('span[class="nav-action-inner"]',{ multiple: true }).click()
        cy.contains('Sign in',{timeout :3000}).click()
        cy.get('input#ap_email_login',{timeout :90000}).type("shubhangi.s.kalbande@gmail.com")
        cy.contains('Continue').should('be.visible')
        cy.get('input[class="a-button-input"][type="submit"]', { timeout: 15000 })  // Increased timeout
          .should('be.visible')
          .click();
          cy.get('input#ap_password').type("Agastya@2021")
          cy.get('input[id="signInSubmit"]',{timeout :3000}).click()

       cy.get('input#twotabsearchtextbox').click().type("phone")
       cy.get('input#nav-search-submit-button').click()
       cy.get('img[alt="Sponsored Ad - Redmi A4 5G (Starry Black, 4GB RAM, 64GB Storage) | Global Debut SD 4s Gen 2 | Segment Largest 6.88in 120Hz..."]',{timeout:5000}).click()
        
          

    });

    it("add to cart n verify cart",()=>{

        cy.visit("https://www.amazon.in/");
        cy.get('input#twotabsearchtextbox').click().type("iphone").type('{enter}')
        cy.get('img[alt="Sponsored Ad - Apple iPhone 15 (128 GB) - Black"]').should('be.visible')
        
        cy.get('div[class="a-section aok-relative s-image-fixed-height"]').eq(0).click()
        cy.get('button#a-autoid-1-announce').click()
        cy.get('span#nav-cart-count').should('have.text','1')

        
    })
    it("add all product to the cart which appears in the search",()=>{
        cy.visit("https://www.amazon.in/");
        cy.get('input#twotabsearchtextbox').click().type("iphone").type('{enter}')
        cy.get('div[data-component-type="s-search-result"]').each(($ele,index)=>{
            if(index <= 18){
                cy.wrap($ele).first().invoke('removeAttr', 'target').click()
                cy.contains("Add to cart", { timeout: 10000 }).should('be.visible').click()
            }
        })
        cy.get('span#nav-cart-count').should('have.text','17')
    })
    it.only(" count total no of iphone in the product list",()=>{
        cy.visit("https://www.amazon.in/");
        cy.get('input#twotabsearchtextbox').click().type("iphone").type('{enter}')
        cy.get('div[data-component-type="s-search-result"]').its("length")
    })
});
