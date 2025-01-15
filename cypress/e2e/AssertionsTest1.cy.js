/// <reference types="cypress" />



describe('testing basic app', () => {
    beforeEach(() => {
  
      cy.visit("https://opensource-demo.orangehrmlive.com/")
    })
  
    it(' assertions test', () => {
      
      //implicit assertions
      cy.url().should('include','orangehrmlive.com')
      .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('contain','orangehrm')
      .and('not.contain', 'greennhrm')


      cy.title().should('include','Orange')
      .and('eq','OrangeHRM')
      .and('contain','HRM')

      cy.get('.orangehrm-login-logo img[alt=orangehrm-logo]').should('be.visible')
      .and('exist')

      cy.get("a").should('have.length','5')

      cy.get("input[placeholder='Username']").type("Admin")
      .should('have.value', "Admin")

      cy.get("input[placeholder='Password']").type("admin123")
      .should('have.value', "admin123")

      cy.get("button[type='submit']").click()

      //explicit assertions
      const expectedName = "David Billa"
      cy.get('.oxd-userdropdown-name').then((x)=>{
        let actualName = x.text()
        cy.log(actualName)
        //BDD style 
        expect(actualName).to.eq(expectedName)

        //TDD style
        assert.equal(actualName, expectedName)
      })
    })
  
  })
  