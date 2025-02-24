describe("hooks n tags",()=>{
    it("tags",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{ tags: ['smoke']})
        cy.get('input[ placeholder="Username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')
    })
    
})