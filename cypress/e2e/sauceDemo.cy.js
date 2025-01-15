describe(" sauce demo",()=>{

    it("testing the flow",()=>{

        cy.wait(5000)

        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type("standard_user").should("be.visible")
        cy.get("#password").type('secret_sauce')
        cy.get("#password").should("have.value","secret_sauce")
        cy.get('#login-button').click()
        cy.get('img [alt="Sauce Labs Bike Light"]').click()
        cy.get('button[class="btn btn_primary btn_small btn_inventory"]').click()
        cy.get('a.shopping_cart_link').click()
        cy.contains("Sauce Labs Bike Light").should("be.visible")
        cy.contains("checkout").click()
        cy.contains('Checkout: Your Information').should("be.visible")
        cy.get('#first-name').type("shubhangi").should("be.visible")
        cy.get('#last-name').type("kalbande").should("be.visible")
        cy.get('#postal-code').type('455001').should("be.visible")
        cy.contains("Contine").click()
        cy.contains("Checkout: Overview").should("be.visible")
        cy.contains("Sauce Labs Bike Light").should("be.visible")
        cy.contains("Finish").click()
        cy.contains("Thank you for your order!").should('be.visible')
        cy.contains("Back Home").click()
        cy.contains('Swag Labs').should("be.visible")
        cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)').click()
        cy.contains("Add to Cart").click()
        cy.contains("Remove").click()

    })
})