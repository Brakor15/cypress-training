import App from '../App.vue'

describe('App', () => {
  it('mounts and renders properly', () => {
    cy.mount(App)
    cy.get('h1').should('contain', 'To-Do list')
    cy.get('li').should('contain', 'Faire le ménage')
  })
})

describe('Afficher la todo list', () => {
  it('Affiche une liste de tâches', () => {
    cy.mount(App)
    cy.get('li').should('contain', "Faire le ménage").should('have.length', 1)
    cy.get('input').should('be.empty')
    cy.get('button').should('not.be.disabled')
  })
})
