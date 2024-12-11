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
})