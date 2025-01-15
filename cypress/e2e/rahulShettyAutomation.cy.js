describe("RS automation",()=>{

    it("testing checkbox",()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[type="checkbox"]').then(($element)=>{

            $element.each((index,element)=>{
                cy.wrap(element).check().should("be.checked")
            })
        })

    })

    it("table",()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('#product').contains("Course")
        cy.get("#product tbody").each(($row)=>{

            cy.wrap($row).find('td').contains("Selenium",{timeout:7000}).then(($cell)=>{

                cy.wrap($cell).invoke('css', 'background-color', 'red')
            })
        
    })
})

it.only("another table", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Ensure that the table is visible
    cy.get('#product tbody').should("be.visible");

    // Iterate over each row in the table
    cy.get("#product  tbody tr").each(($row) => {

        
        // Search for a cell within the row that contains 'Alex'
        cy.wrap($row).find('td').contains("Engineer",{timeout:7000}).then(($cell) => {
           
            cy.wrap($cell).invoke("css","background-color", "red");
        });
    });
});

})