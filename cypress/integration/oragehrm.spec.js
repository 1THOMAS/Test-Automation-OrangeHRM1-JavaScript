/// <reference types="cypress" />

import logon from '../support/pages/logon/index'
import invalido from '../support/pages/logon Invalido/index'
import addUser from '../support/pages/addUser/index'
import customFields from '../support/pages/customFields/index'
import Logout from '../support/pages/Logout';

describe('Testes site OrangeHRM com JavaScript', () => { 
           
    it('realizar login no painel ', () => {        
        
        logon.acessarSite()
        logon.realizarLogin()
        logon.validacaoLogin()
        
    });

    it('Span login invalido', () => {  
               
        invalido.acessarSite()
        invalido.realizarLoginInvalido()
        invalido.validacaoSpanLoginInvalido()
        
    });
    

    it('adicionar um usuario', () => {        

        addUser.acessarSite()
        addUser.realizarLogin()
        addUser.preencherUsuario()
        addUser.validacaoUsuarioAdicionado()
        addUser.preencherDetalhes()
    });   

    it('Validacao aba Custom Fields', () => {   

        customFields.acessarSite()
        customFields.realizarLogin()
        customFields.addCustomFields()
        customFields.ValidacaoPaginaCustomFIelds()

    });

    it('Logout do sistema', () => {
          
        Logout.acessarSite()
        Logout.realizarLogin()
        Logout.realizarLogout()
        Logout.validacaoLogoutDoSistema()
        
    });
    
});