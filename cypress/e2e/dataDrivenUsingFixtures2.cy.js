describe("data driven testing using fixtures",()=>{

    it("data driven testing",()=>{
        cy.visit("https://accounts.google.com/v3/signin/identifier?checkedDomains=youtube&continue=https%3A%2F%2Fmail.google.com%2Fmail&ddm=1&dsh=S655918999%3A1740482267285963&flowEntry=AccountChooser&flowName=GlifWebSignIn&hl=en&ifkv=ASSHykr6UDbF4Roq6_S1siINLNoMoNMqMCK3aq-aDmVpUSFv-z2DeNPhkvE5tKfGmBc4kWjbDyy5&pstMsg=1")
        cy.fixture("gmailLogin.json").then((users)=>{
            users.forEach(element => {
                cy.get("input#identifierId").type(element.emailid)
                cy.contains('Next',{force: true}).click()
                cy.get('input[type="password"]').type(element.pass)
                cy.url().should("include","https://mail.google.com/mail/u/0/#inbox")
                cy.get('div[class="gb_D gb_jb gb_Mf gb_0"]').click()
                cy.contains("Sign out").click()
            });
        })
    })
})