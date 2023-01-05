describe('Category Filters', () => {
//I have found a bug/doubt and I have mentioned that in the last testcase

  //test filter-when only thoroghbred is selected
  it('test filter Thoroughbred', function(){
  cy.visit('http://192.168.1.110:3000')

  //deselect greyhound and harness
  cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()
  cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').click()
  cy.wait(1000)

  //verify throughbred checkbox is selected
  cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('be.checked')

})

  //test filter-when only harness is selected

it('test filter Harness', function(){
  cy.visit('http://192.168.1.110:3000')

  //deselect greyhound and thoroghbred 
  cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
  cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()
  cy.wait(1000)

  //verify harness checkbox is selected
  cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('be.checked')

})


  //test filter-when only greyhound is selected

it('test filter Greyhound', function(){
  cy.visit('http://192.168.1.110:3000')

  //deselect harness and thoroghbred
  cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
  cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').click()
  cy.wait(1000)

  //verify greyhound checkbox is selected
  cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('be.checked')

})

//test filter - when thoroughbred and greyhound are selected
it('test filter Thoroughbred and Greyhound', function(){
  cy.visit('http://192.168.1.110:3000')

  //deselect harness
  cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').click()
  cy.wait(1000)

  //verify greyhound and thoroughbred checkboxes are selected
  cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('be.checked')
  cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('be.checked')
})

//test filter - when thoroughbred and harness are selected
it('test filter Thoroughbred and Harness', function(){
  cy.visit('http://192.168.1.110:3000')

  //deselect greyhound
  cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()
  cy.wait(1000)

  //verify harness and thoroughbred checkboxes are selected
  cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('be.checked')
  cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('be.checked')

})

//test filter - when greyhound and harness are selected
it('test filter Greyhound and Harness', function(){
  cy.visit('http://192.168.1.110:3000')

  //deselect thoroughbred
  cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
  cy.wait(1000)

  //verify harness and greyhound checkboxes are selected
  cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('be.checked')
  cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('be.checked')
  
})

 //Is this a bug?I am not able to see filter results when all 3 categories are deselected and the checkboxes 
 // are all selected automatically when I try to test thiss scenario
  it('test all checkboxes are deslected', function(){
    cy.visit('http://192.168.1.110:3000')

    //deselect all 3 categories
    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').click()

  })

});


