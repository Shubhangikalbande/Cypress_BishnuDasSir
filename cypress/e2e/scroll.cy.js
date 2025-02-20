cy.scrollTo('bottom'); // Scroll to the bottom of the page
cy.scrollTo('top');    // Scroll to the top of the page

cy.get('.my-element').scrollIntoView();
cy.get('.scrollable-container').scrollTo('right'); // Scroll to the right
cy.get('.scrollable-container').scrollTo('left');  // Scroll to the left
