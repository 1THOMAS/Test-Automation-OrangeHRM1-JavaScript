
const el = require('./elements').ELEMENTS;

class customFields{
    acessarSite(){

        cy.visit('https://opensource-demo.orangehrmlive.com');

    }

    realizarLogin(){

        cy.get(el.username).type('Admin'); //cy,get - busca o elemento
        cy.get(el.password).type('admin123'); //cy.type - insere um texto
        cy.get(el.buttonLogin).click(); //.click - acao de clicar  

    }
    addCustomFields(){
        
        //cy.contains(el.buttonPIM).click({force:true})
        cy.contains(el.buttonConfig).click({force:true})
        cy.contains(el.buttonCustomFields).click({force:true})        

    }

    ValidacaoPaginaCustomFIelds(){

        cy.contains(el.header).should('contain','Custom Fields')

    }
}
export default new customFields()