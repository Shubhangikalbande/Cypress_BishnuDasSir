

describe("handling webtable",()=>{

    // beforeEach(()=>{
    //     cy.visit("https://codenboxautomationlab.com/practice/")
    // })
    
       

    it("fetching no. of  rows n columns",()=>{
        cy.get('table#product').should('be.visible')
        cy.get('table#product tbody tr th').should('have.length','3') // no of columns
        cy.get('table#product tbody tr ').should('have.length','12')//no of rows

    })

    it("fetching table heading data",()=>{
        cy.get('table#product tbody tr th').each(($ele)=>{

            let text=$ele.text()
            cy.log(text)
        })

    })
    it("fetching table row data",()=>{
        cy.get('table#product tbody tr td').each(($ele)=>{

            let text2=$ele.text()
            cy.log(text2)
        })

    })
    it("fetching specific table data",()=>{

        cy.get('#product > tbody > tr:nth-child(3) > td:nth-child(2)').should("have.text","Learn SQL in Practical + Database Testing from Scratch")
        cy.get('#product > tbody > tr:nth-child(8) > td:nth-child(3)').should("have.text","40")
        cy.get('#product > tbody > tr:nth-child(12) > td:nth-child(1)').should("have.text","Total")
    })
    it("fetching all cell data",()=>{

        cy.get('table#product tbody tr th').each(($ele)=>{

            let text=$ele.text()
            cy.log(text)
        })

        cy.get('table#product tbody tr td').each(($el)=>{

            cy.log($el.text())
        })
    })
    it("performing certain operation on matching the cell data",()=>{

        //cy.get('#product tbody tr').eq(10) 

        //OR


        it.only("checking the conditional logic in the table",()=>{
        cy.get('#product tbody tr:nth-child(11)').within(()=>{

            cy.get("td:nth-child(3)").each(($el,index)=>{

                let text= $el.text()
                if(text.includes("interview call")){
                    cy.get("td:nth-child(3)").eq(index).then(function(price){
                        let actualprice=price.text()
                        expect(actualprice).to.equal("50")
                    })
                }
            })
            })
        })

    })
    
    it("if the text matches web services then price is 30",()=>{
        cy.get('#product tbody tr td:nth-child(2)').each(($el,index)=>{

            

                let text= $el.text()
                if(text.includes("WebServices")){
                    cy.get("td:nth-child(3)").eq(index).then(function(price){
                        let actualprice=price.text().trim()
                        expect(actualprice).to.equal("30")
                    })
                }
            })
        })


    
    it("performing certain operation on matching the cell data using include",()=>{

    cy.get('#product tbody tr:nth-child(8)').within(()=>{

    cy.get('td').each(($el)=>{
        let text=$el.text()

        if(text.includes('Agile')){

            cy.log("agile found")
        }
    })
})
    })
    it.only("Handling dynamic pagination to get total number of pages", () => {
        cy.visit("https://datatables.net/");
    
        // Get all pagination buttons but exclude 'Previous' and 'Next'
        // cy.get('button.dt-paging-button')
        //     .not('.previous, .next, .first, .last') // Exclude navigation buttons
        //     .last() // Get the last page number
        //     .invoke('text') // Extract the text (which is the last page number)
        //     .then((lastPageNumber) => {
        //         cy.log("Total number of pages: " + lastPageNumber);
        //     });
            
            let pageno=6
            for(let p=1;p<=pageno;p++){
                if(pageno>1){
                    cy.log("activepage",p)
                    cy.get('button.dt-paging-button')
                    .not('.previous, .next, .first, .last') // Exclude nav buttons
                    .eq(p - 1) // Select the correct page index (0-based)
                    .click();
                    cy.wait(2000)
                }

            }
    });
    
})