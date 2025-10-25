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
    cy.get('[id="add-button"]').should('not.be.disabled').should('contain', 'Add task')
    cy.get('[data-cy="delete-button"]').should('not.be.disabled').should('contain', 'Delete')
  })
})

describe("Ajout d'une tâche", () => {
  it('Ajouter une tâche et vérifier le rendu', () => {
    cy.mount(App)
    cy.get('li').should('contain', "Faire le ménage").and('have.length', 1)
    cy.get('[data-cy="newTask"]').should('be.empty')
    cy.get('[data-cy="newTask"]').type("Cuisiner")
    cy.get('[id="add-button"]').click()
    cy.get('li').should('have.length', 2)
    cy.get('li').eq(0).should('contain', "Faire le ménage")
    cy.get('li').eq(1).should('contain', "Cuisiner")
  })
})
