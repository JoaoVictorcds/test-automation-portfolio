Cypress.Commands.add('preencheNome_invalido', () => {
    cy.get('[name="pessoa.nome"]')
        .invoke('val', '123') // inseri desse modo pois a variavel 'actionForm' do codigo nao foi definida e causa quebra de teste
        .trigger('change').should('have.value', '123')
    cy.get('span[name="validationMessage"]').should('not.be.visible')// valida que nao aparece mensagem de erro
})

Cypress.Commands.add('preencheTelefone_invalido', () => {
    cy.get('button.iti__selected-country').click()
    cy.contains('Argentina').click()
    cy.get('[name="pessoa.telefonePrincipal"]').type('abc')
    cy.get('span[name="validationMessage"]').contains('Preencha este campo').should('be.visible')
})

Cypress.Commands.add('validaErroGenerico', () => {
    cy.get('span[name="validationMessage"]').contains('Preencha este campo').should('be.visible')
})

Cypress.Commands.add('validaGeneralizacao', () => {
    cy.get('p:contains("Lorem ipsum")')
        .its('length')
        .should('be.greaterThan', 1)
})

Cypress.Commands.add('preencheInscricao', () => {
    cy.get('[name="pessoa.nome"]')
        .invoke('val', 'Nometeste')
        .trigger('change').should('have.value', 'Nometeste')
    cy.get('span[name="validationMessage"]').should('not.be.visible')

    cy.get('button.iti__selected-country').click()
    cy.contains('Brazil').click()
    cy.get('[name="pessoa.telefonePrincipal"]').type('11985668686')

    cy.get('input[name="pessoa.emailPrincipal"]').type('teste@teste.com')
    cy.get('#rbBtnNext').click().wait(300)
    cy.get('.rbToasterError').contains('É necessário informar a base legal').should('be.visible')
})

Cypress.Commands.add('btnSemFuncao', () => {
    cy.get('#iiv4k5').should('not.have.attr', 'href')
    cy.get('#inawao').should('not.have.attr', 'href')
    cy.get('#inzf4v').should('not.have.attr', 'href')
    cy.get('#i90t3o').should('not.have.attr', 'href')
})

Cypress.Commands.add('urlInscricaoIncorreta', () => {
    cy.get('#ixy3u1').should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://google.com.br/')
})

Cypress.Commands.add('hrefDiferente', () => {
    cy.get('#ifpwp7')
        .should('have.attr', 'href')
        .and('not.include', 'youtube.com')
})

Cypress.Commands.add('redirecionamentoIguais', () => {
    cy.get('#i6b9dk, #iwmzne, #izq1hh, #itzwfq').should('have.attr', 'href', 'https://cursos.rubeus.com.br/analista-rubeus/')
})