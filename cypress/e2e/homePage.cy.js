describe('Home Page User Flow', () => {
    beforeEach(() => {
      // cy.intercept('GET', 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&page=500', {
      //   statusCode: 201,
      //   body: {
      //     id: 2,
      //     image: "https://ca.slack-edge.com/T029P2S9M-U37MJAV0T-007ccf2f5eb2-512",
      //     name: "Leta Keane"
      //   }
      // })

      // cy.intercept('GET', 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&page=500', (req) => {
      //   req.reply({
      //     statusCode: 200, // default
      //     fixture: 'movies.json'
      //   })
      // })

      cy.intercept('GET', 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&page=500').as('movies.json')
        .visit('http://localhost:3000/')

        // cy.intercept(
        //   {
        //     method: 'GET',
        //     path: 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&page=500',
        //   },
        //   {
        //     fixture: 'movies.json',
        //   },
        //   ).as('movies.json')
        //    .visit('http://localhost:3000/')

      // cy.intercept('GET', 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&page=500', {fixture: 'movies.json'})
      //   .visit('http://localhost:3000/');

      // cy.intercept('GET', 'https://api.themoviedb.org/3/movie/900?api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&language=en-US&append_to_response=videos', {fixture: "video.json"})
      // .visit('http://localhost:3000/');
    });
    
    it('should be able to visit the url', () => {
      cy.url()
        .should('eq', 'http://localhost:3000/');
    });

    it('Should see a navbar', () => {
      cy.get('.nav')
        .should('be.visible')
        .get('.app-title')
        .contains('Spotlight Cinema')
        .get('.search-bar-input')
        .invoke('attr', 'placeholder')
        .should('contain', 'Search by title...')
        .get('.dropdown')
        .contains('All Genres')
    })

    it('Should see a movie banner and trailer below navbar', () => {
      cy.get('.banner-section')
        .should('be.visible')
    })

    it('Should see a list of movie posters after the video banner', () => {
      cy.intercept('GET', 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&page=500', {fixture: 'movies.json'})
        .visit('http://localhost:3000/');

      cy.get('.movies-container')
        .should('be.visible')
    })
  })