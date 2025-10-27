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
    cy.get('li').should('contain', "Faire le ménage").and('have.length', 1)
    cy.get('input').should('be.empty')
    cy.get('[id="add-button"]').should('not.be.disabled').and('contain', 'Add task')
    cy.get('[data-cy="delete-button"]').should('not.be.disabled').and('contain', 'Delete')
  })
})

describe("Ajout d'une tâche", () => {
  it('Ajouter une tâche et vérifier le rendu', () => {
    cy.mount(App)
    // Vérifier l'initialisation
    cy.get('li').should('contain', "Faire le ménage").and('have.length', 1)
    cy.get('[data-cy="newTask"]').as("newTask")
    cy.get('@newTask').should('be.empty')

    // Ajout d'une tâche
    cy.get('@newTask').type("Cuisiner")
    cy.get('[id="add-button"]').click()

    // Vérifier le résultat
    cy.get('li').should('have.length', 2)
    cy.get('li').eq(0).contains("Faire le ménage")
    cy.get('li').eq(1).contains("Cuisiner")
  })
})

describe("Suppression d'une tâche", () => {
  it('Supprimer une tâche', () => {
    cy.mount(App)
    // Vérifier l'initialisation
  
    cy.get('li').eq(0).find('[data-cy="delete-button"]').click()
    cy.get('li').should('have.length', 0)
  })
})
