describe("booking flight",()=>{

    it("book cheap flight",()=>{


    cy.visit("https://www.google.com/travel/flights?tcfs=UgRgAXgB&ved=2ahUKEwj2pfbB4L2KAxX-jWYCHYYWFmQQyJABegQIABAG&ictx=2")
    cy.get('#i6').click({ force: true })
    cy.contains("One way").click({force: true})//asserstion
    // cy.get('button[jsname="LgbsSe"]',{ multiple: true }).click()
    // cy.get('#i10-1"').click()
    cy.get('[aria-label="Change seating class."]').click({force: true})
    cy.contains("Economy").click({force: true})
    cy.get('[data-placeholder="Where from?"]').click({force: true})
    cy.get('[placeholder="Where to?"]').click({force: true})
    cy.contains("New Delhi").click({force: true})
    
    cy.contains("search").click({force: true})
    cy.get('[aria-label]').then(($element)=>{

        let emissions=[]

        $element.each((index,element)=>{

            let emissionText=element.getAttribute('aria-label')
            const emissionValue = parseFloat(emissionText.match(/(\d+(\.\d+)?)/)[0]); // Extract the number (CO₂ value)

            emissions.push({index,emissionValue})
        })

        let lowEmission=emissions.reduce((pre,curr)=>{
            return curr.emissionValue < pre.emissionValue ? curr : pre

            // cy.log(lowEmission)
            
        })

        cy.get('[aria-label]').eq(lowEmission.index).click({force: true})
        cy.log(lowEmission)
    })

        })

        

        })
    
       

