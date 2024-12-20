describe("test suite",()=>{

    beforeEach(()=>{

        cy.visit("https://www.amazon.in/")
    })

    it("css selector_part1",()=>{
        cy.wait(5000)
        cy.get('#nav-logo-sprites').should("be.visible").click()
        cy.get('[id="twotabsearchtextbox"]').click()
        cy.get('[id="icp-nav-flyout"]')
        cy.get('[id="nav-orders"]')
        cy.get('[id="nav-link-accountList"]').trigger('mouseover')
        cy.get('a.nav-action-signin-button[data-nav-role="signin"]', { timeout: 5000 })
      .should('be.visible')
      .click();
      cy.go(-1)
      cy.get("img[alt='Décor']").trigger('mouseover')
      cy.get('img[alt="Lighting solutions"]').click()
      cy.wait(5000)
      cy.go('back')
      cy.wait(5000)
      cy.get('a.a-carousel-goto-nextpage',{ multiple: true }).should('be.visible').click()
      cy.get('a.a-carousel-goto-prevpage').click()
      cy.get('a.nav-a[data-csa-c-slot-id="nav_cs_3"]').click()
      cy.wait(5000)
      cy.get('back')
      cy.get('img[alt="Refrigerators"] ').click()
    })
    it("css selector_part2",()=>{

        cy.wait(5000)
        
      cy.get('.a-icon-next-rounded',{ multiple: true }).should('be.visible').click()
        cy.get('.a-icon-previous-rounded').should('be.visible').click()
        cy.get('img[alt="Fashion accessories"]').click()
        cy.get('img[alt="Huntlie 2 Pcs Hair Mogra Scented Rubber band Gajra Hair accessories for Women And Girls, Hair Flower Bun Artificial Gajra ..."]').should('be.visible').click()
        cy.visit('https://www.amazon.in/')
        cy.get("#twotabsearchtextbox").click().type("iphone 16")
        cy.get("#nav-search-submit-button").click()
         cy.get('img[alt="Sponsored Ad - iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with..."]').click()
       
   
   
   
    })

    it.only("css selector_part2",()=>{

        cy.get("#twotabsearchtextbox").click().clear().type('fridge')
        cy.get("#nav-search-submit-button").click()
       
      
       
   
   
   
    })
})