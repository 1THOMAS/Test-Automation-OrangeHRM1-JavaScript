
const el = require('./elements').ELEMENTS;

class addUser{
    acessarSite(){

        cy.visit('https://opensource-demo.orangehrmlive.com');

    }

    realizarLogin(){

        cy.get(el.username).type('Admin'); //cy,get - busca o elemento
        cy.get(el.password).type('admin123'); //cy.type - insere um texto
        cy.get(el.buttonLogin).click(); //.click - acao de clicar

    }
    preencherUsuario(){

        cy.get(el.menu).click();
        cy.get(el.buttonAdd).click();
        cy.get(el.systemName).type('Patolino');  //trocar sempre um nome de usuario 
        cy.get(el.systemLastName).type('Lino');

        cy.get(el.buttonSave).click();         

    }

    validacaoUsuarioAdicionado(){

        cy.contains(el.header).should('contain', 'Patolino') // <-- sempre colocar o mesmo username no contains
    }

    preencherDetalhes(){

        cy.get(el.ssnNumber).type('4002-8922');
        cy.get(el.nationalily).click({force:true});
        cy.get(el.brNationality).click()
        cy.get(el.birth).type('1982-02-28')
        cy.get(el.gender).click({force:true})
        cy.get(el.save).click()
    }
}
export default new addUser()


