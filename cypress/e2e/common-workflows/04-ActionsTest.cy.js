/// <reference types="cypress" />



describe("Actions and Interacting with Elements", () => {

  /* beforeEach(() => {
      cy.visit('https://itera-qa.azurewebsites.net/home/automation')
  }); */
  
  
  it('interacts with Radio Buttons', () => {

    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

    cy.get('#sex_1').should('be.visible')
    cy.get('#sex_2').should('be.visible')

    cy.get('#sex_1').check().should('be.checked')
    cy.get('#sex_2').should('not.be.checked')

    cy.get('#sex_2').check().should('be.checked')
    cy.get('#sex_1').should('not.be.checked')
     

  });


  it('interacts with Radio Buttons', () => {

    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

    cy.get('.checkbox').should('be.visible')
    cy.get('.checkbox').then((labelText)=>{
        cy.log(labelText.text())
    })

    cy.get('.checkbox input').check().should('be.checked')
    cy.get('.checkbox input').uncheck().should('not.be.checked')

    cy.get(".input-radio[name=deliverymethod]").first().check().should('be.checked')
    cy.get(".input-radio[name=deliverymethod]").last().check().should('be.checked')
     

  });


  it('interacts with Droprdowns', () => {

    cy.visit('https://www.zoho.com/commerce/free-demo.html')

    cy.get('#zcf_address_country').select('Japan').should('have.value', 'Japan')


  });


  it('interacts with Radio Buttons', () => {

    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

    cy.get('#select2-billing_country-container').click()

    //typing
    cy.get('.select2-search__field').type('Italy').type('{enter}')

    //verify
    cy.get('#select2-billing_country-container').should('have.text','Italy')
     

  });









  
})
  