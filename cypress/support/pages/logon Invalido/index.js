
const el = require('./elements').ELEMENTS;

class Invalido{
    acessarSite(){
        //cy.visit - para poder entrar no site atraves do cypress
        cy.visit('https://opensource-demo.orangehrmlive.com');
    }

    realizarLoginInvalido(){

        cy.get(el.username).type('Admin'); //cy,get - busca o elemento
        cy.get(el.password).type('minad321'); //cy.type - insere um texto

        cy.get(el.buttonLogin).click(); //.click - acao de clicar
    
    }

    validacaoSpanLoginInvalido(){

        cy.get(el.spanMessage).should('have.text', 'Invalid credentials') // valida mensagem de credenciais invalidas
    }
}
export default new Invalido()