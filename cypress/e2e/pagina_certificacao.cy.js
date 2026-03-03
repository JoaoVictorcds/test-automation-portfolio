/// <reference types='cypress'/>

describe('Testes de validação de qualidade na página /certificacao', () => {

    beforeEach(() => {
        cy.visit('/certificacao').wait(500)
        cy.url().should('include', 'certificacao')
    })

    it('Uso de Texto "Lorem Ipsum" generalizado', () => {
        cy.validaGeneralizacao()
    })

    it('Aceitação de dados inválidos em campos do cadastro', () => {
        cy.preencheNome_invalido()
        cy.preencheTelefone_invalido()
        cy.validaErroGenerico()
    })

    it('Mensagem de erro "Base Legal" desalinhada e impeditiva', () => {
        cy.preencheInscricao()
    })

    it('Botão "Saiba mais" sem funcionalidade (Head e "Outros Cursos")', () => {
        cy.btnSemFuncao()
    })

    it('Botão "Quero me certificar" (rodapé) redireciona para outro domínio', () => {
        cy.urlInscricaoIncorreta()
    })

    it('Ícone do YouTube redireciona para URL do TikTok', () => {
        cy.hrefDiferente()
    })
})