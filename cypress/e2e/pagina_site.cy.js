/// <reference types='cypress'/>

describe('Testes de validação de qualidade na página /site', () => {

    beforeEach(() => {
        cy.visit('/site').wait(500)
        cy.url().should('include', 'site')
    })

    it('Caracteres indevidos na validação de dados em Assinatura Newsletter e alerta de erro genérico ', () => {
        cy.preencheNome_invalido()
        cy.preencheTelefone_invalido()
        cy.validaErroGenerico()
    })

    it('Redirecionamento incorreto', () => {
        cy.redirecionamentoIguais()
    })

    it('Ausência de limite mínimo de caracteres no campo "Nome" no Newsletter', () => {
        cy.nomeSemMinimo()
    })

    it('Redundância e poluição visual nos blocos de redes sociais', () => {
        cy.excessoRedesSociais()
    })

    it('Alerta de erro ao tentar assinar newsletter corretamente', () => {
        cy.preencheInscricao()
    })
})