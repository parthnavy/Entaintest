describe('Countdown Timer', () => {

  //testcase when all race categories are selected and I verify if all 5 timer fields are not empty
  it('test countdown when all racing categories are selected ',function(){
    cy.visit('http://192.168.1.110:3000')
    cy.wait(1000)

    //verify whether all timer fields are not empty and have some text/values
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(4) > :nth-child(2)').should('not.be.empty')  
    cy.get(':nth-child(5) > :nth-child(2)').should('not.be.empty')
  })


    //testcase when only thoroughbred is selected and I verify if all 5 timer fields are not empty

  it('test countdown when thoroughbred is selected ',function(){
    cy.visit('http://192.168.1.110:3000')

    //deselect other 2 categories-harness and greyhound
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').click()
    cy.wait(1000)

    //verify throughbred checkbox is selected
    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('be.checked')

    //verify whether all timer fields are not empty and have some text/values
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(4) > :nth-child(2)').should('not.be.empty')  
    cy.get(':nth-child(5) > :nth-child(2)').should('not.be.empty')
  })

      //testcase when only greyhound is selected and I verify if all 5 timer fields are not empty


  it('test countdown when greyhound is selected ',function(){
    cy.visit('http://192.168.1.110:3000')
        //deselect other 2 categories-harness and thoroughbred

    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').click()
    cy.wait(1000)
       
    //verify greyhound checkbox is selected
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('be.checked')

    //verify whether all timer fields are not empty and have some text/values
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(4) > :nth-child(2)').should('not.be.empty')  
    cy.get(':nth-child(5) > :nth-child(2)').should('not.be.empty')
  })


      //testcase when only harness is selected and I verify if all 5 timer fields are not empty

  it('test countdown when Harness is selected', function(){
    cy.visit('http://192.168.1.110:3000')

    //deselect other 2 categories-greyhound and thoroughbred
    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()
    cy.wait(1000)
    //verify harness checkbox is selected
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('be.checked')


    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(4) > :nth-child(2)').should('not.be.empty')  
    cy.get(':nth-child(5) > :nth-child(2)').should('not.be.empty')
  
  })
  

        //testcase when  thoroughbred and greyhound are selected and I verify if all 5 timer fields are not empty

  it('test countdown when Thoroughbred and Greyhound are selected', function(){
    cy.visit('http://192.168.1.110:3000')

    //deselect   category-harness
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').click()
    cy.wait(1000)

    //verify checkboxes for greyhound and throughbred are selected
    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('be.checked')
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('be.checked')

    //verify whether all timer fields are not empty and have some text/values
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(4) > :nth-child(2)').should('not.be.empty')  
    cy.get(':nth-child(5) > :nth-child(2)').should('not.be.empty')
  })


        //testcase when  harness and greyhound are selected and I verify if all 5 timer fields are not empty
  it('test countdown when Greyhound and Harness are selected ', function(){
    cy.visit('http://192.168.1.110:3000')

    //deselect   category-thoroughbred
    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
    cy.wait(1000)

    //verify checkboxes for greyhound and harness are selected
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('be.checked')
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('be.checked')
   
    //verify whether all timer fields are not empty and have some text/values
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(4) > :nth-child(2)').should('not.be.empty')  
    cy.get(':nth-child(5) > :nth-child(2)').should('not.be.empty')
  })

  
   //testcase when  thoroughbred and harness are selected and I verify if all 5 timer fields are not empty
  it('test countdown when Thoroughbred  and Harness are selected ', function(){
  cy.visit('http://192.168.1.110:3000')

  //deselect category-greyhound
  cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()
  cy.wait(1000)

  //verify checkboxes for thoroghbred and harness are selected
  cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('be.checked')
  cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('be.checked')
  
  //verify whether all timer fields are not empty and have some text/values
  cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').should('not.be.empty')
  cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)').should('not.be.empty')
    cy.get(':nth-child(4) > :nth-child(2)').should('not.be.empty')  
    cy.get(':nth-child(5) > :nth-child(2)').should('not.be.empty')
})


});
