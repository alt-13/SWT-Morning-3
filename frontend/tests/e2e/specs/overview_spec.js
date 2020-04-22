describe('Overview page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('lists notes if any are present', () => {
    cy.visit('/')
    cy.get('body').then(body => {
      const notes = body.find('.note')

      if (notes.length > 0) {
        /*  each note should have a header and a body */
        notes.forEach(n => {
          n.get('.note-header').should.exist
          n.get('.note-body').should.exist
        })
      }
    })
  })
})
