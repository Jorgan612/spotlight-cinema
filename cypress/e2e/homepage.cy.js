describe('Landing Page User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home');
  });

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/home');
  });

  it('should see a nav bar with a title', () => {
    cy.get('.nav')
      .get('.app-title')
      .contains('Spotlight Cinema')
      .should('be.visible');
  });

  it('should see a home button on the nav', () => {
      cy.get('.nav')
        .get('.return-home-btn')
        .click()
        .should('be.visible');
  });

  it('should see an option to visit the watchlist on the nav bar, and be able to click it to visit the user watchlist', () => {
    cy.get('[href="/watchlist"] > .selector')
      .click()
      .should('be.visible');
  });

  it('should see a drop down on the nav to select movie titles by genre', () => {
    cy.get('.dropdown')
      .contains('All Genres')
      .should('be.visible')
  });

  it('should be able to click a genre type and see a list of a specific genre\'s movies', () => {
    cy.get('.dropdown')
      .select('Action')
      .url()
      .should('eq', 'http://localhost:3000/genres')
  });

  });