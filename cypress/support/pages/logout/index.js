const el = require('./elements').ELEMENTS

class logout{
    acessarSite(){
        
        cy.visit('https://opensource-demo.orangehrmlive.com');

    }

    realizarLogin(){

        cy.get(el.username).type('Admin'); //cy,get - busca o elemento
        cy.get(el.password).type('admin123'); //cy.type - insere um texto
        cy.get(el.buttonLogin).click(); //.click - acao de clicar

    }

    realizarLogout(){

        cy.get(el.menuDropDown).click();
        cy.get(el.buttonLogout).click();

    }

    validacaoLogoutDoSistema(){

        cy.contains(el.header).should('contain','Login')
    }

}
export default new logout();