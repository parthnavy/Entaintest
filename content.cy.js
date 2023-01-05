import { RACING_CATEGORIES } from "../config/constants";

describe('Page Content', () => {
  it('Should correctly display page title', () => {
    cy.visit('http://192.168.1.110:3000'); // Added 

    cy.get('[data-testid=page-title]').contains('Next To Go Races').and('be.visible');
  });

  it('Should have all filters checked by default', () => {
    cy.visit('');

    cy.get('[data-testid=category-filters]').within(() => {
      RACING_CATEGORIES.forEach((category) => {
        cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
          cy.get('[data-testid=category-filter-label]').contains(category.name).and('be.visible');
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
        });
      })
    });
  })
  //Added a new testcase for checking if timer values are displayed correctly
  it('Check if timer values are not empty',function(){
    //verify whether all timer fields are not empty and have some text/values
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(4) > :nth-child(2)').should('not.be.empty')  
    cy.get(':nth-child(5) > :nth-child(2)').should('not.be.empty')
  })
});
