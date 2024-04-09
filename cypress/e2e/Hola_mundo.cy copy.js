describe("Bienvenido al curso de Cypress seccion 1",() =>{
    cy.log("Hola munso")
    cy.wait(4000)
})  

it("Segundo test -> campo name", ()=>{
    cy.visit("https://stores.wilbby.com/")

    cy.get("#title").type("La Perrera")
    cy.wait(4000)
})

