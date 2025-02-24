

describe("hooks",()=>{

    before(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.log("runs once before all the tests")
    })

    beforeEach(()=>{
        cy.get('input[ placeholder="Username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.log("runs everytime before all the tests")
    })

    after(()=>{
        
        cy.log('runs once after all ths test')

    })
    afterEach(()=>{
        cy.get('.oxd-userdropdown-tab').click()
        // cy.get('ul[class="oxd-dropdown-menu"]>li:nth-child(4) a').should("be.visible")
        // cy.contains("Logout").should('be.visible')
        
        cy.log('runs everytime  after all ths test are exectuted')
    })

    it("hooks testing",()=>{
        cy.contains("Admin").click()
        // cy.get('input[fdprocessedid="ehg636f"]').type("shu")
        cy.contains('Username').should('be.visible')
        cy.contains('User Role').should('be.visible')
        cy.contains('Employee Name').should('be.visible').click()
        cy.contains('Status').should('be.visible')
        cy.contains("Search").click()
    })
})