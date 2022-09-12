
const el = require('./elements').ELEMENTS;

class Logon{
    acessarSite(){
        //cy.visit - para poder entrar no site atraves do cypress
        cy.visit('https://opensource-demo.orangehrmlive.com');
    }

    realizarLogin(){

        cy.get(el.username).type('Admin'); //cy,get - busca o elemento
        cy.get(el.password).type('admin123'); //cy.type - insere um texto

        cy.get(el.buttonLogin).click(); //.click - acao de clicar
    
    }

    validacaoLogin(){

        cy.get(el.welcome).should('contain', 'Employee Information');

    }
}
export default new Logon()

