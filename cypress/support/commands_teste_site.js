Cypress.Commands.add('nomeSemMinimo', () => {
    cy.get('[name="pessoa.nome"]')
        .invoke('val', 'a') // inseri desse modo pois a variavel 'actionForm' do codigo nao foi definida e causa quebra de teste
        .trigger('change').should('have.value', 'a')
    cy.get('span[name="validationMessage"]').should('not.be.visible')
})

Cypress.Commands.add('excessoRedesSociais', () => {
    cy.get('a[href="https://www.instagram.com/canalrubeus/"]').should('have.length', 3)
    cy.get('a[href="https://www.youtube.com/@Rubeus"]').should('have.length', 3)
    cy.get('a[href="https://www.linkedin.com/company/rubeus/"]').should('have.length', 3)
    cy.get('a[href="https://www.facebook.com/CanalRubeus"]').should('have.length', 3)
    cy.get('a[href="https://x.com/CanalRubeus"]').should('have.length', 2)
})   