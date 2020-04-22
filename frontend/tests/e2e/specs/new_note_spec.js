describe('New note page', () => {
  before(() =>
    cy.exec('echo "{ notes: [] }" > data-mock.json')
  )

  it('successfully loads', () => {
    cy.visit('/#/new')
  })

  it('shows post title input', () => {
    cy.visit('/#/new')
    
    cy.get('input').then(el => 
      expect(el).to.exist
    )
  })

  it('shows post content textarea', () => {
    cy.visit('/#/new')

    cy.get('textarea').then(el =>
      expect(el).to.exist
    )
  })

  it('shows a button named "Add" to add the note', () => {
    cy.visit('/#/new')

    cy.get('button').then(el => {
      expect(el).to.exist
      expect(el.text()).to.equal('Add')
    })
  })

  it('can add new note', () => {
    const generateRandomString = length => {
      let alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
      let text = ''
      for (let i = 0; i < length; i++)
        text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
      return text
    }

    const TITLE = generateRandomString(10)
    const CONTENT = generateRandomString(10)

    cy.visit('/#/new')

    cy.get('input')
      .type(TITLE)

    cy.get('textarea')
      .type(CONTENT)

    cy.get('button')
      .click()

    cy.visit('/#/')

    cy.get('p.note-title')
      .contains(TITLE)

    cy.get('.note-body')
      .contains(CONTENT)
  })
})
