import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ListaDeProdutosPage from '../pageobjects/listaDeProdutos.page.js'

describe('Lojinha app', () => {
    it('Realizar login na lojinha app', async () => {
        // Arrange (preparação)
        const usuario = 'admin2'
        const senha = 'admin'
        const loginPage = new LoginPage()
        const listaDeProdutosPage = new ListaDeProdutosPage()
        // Act (ação)
        await loginPage.logarNaLojinha(usuario, senha)
        // Assert (assertiva)
        expect(await listaDeProdutosPage.obterTextoLblListaDeProduto()).toEqual('Lista de Produtos')
        await driver.saveScreenshot('./teste.png')
    })
})

