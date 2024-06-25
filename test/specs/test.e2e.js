import { expect } from '@wdio/globals'
describe('Lojinha app', () => {
    it('Realizar login na lojinha app', async () => {
        // Arrange (preparação)
        const usuario = 'admin2'
        const senha = 'admin'
        // Login
        const txtUsuario = $('android=new UiSelector().packageName("com.example.lojinha").className("android.widget.EditText").instance(0)')
        const txtSenha = $('//android.view.View[@text="Senha"]/../android.widget.EditText')
        const btnEntrar = $('android=new UiSelector().text("ENTRAR")')
        // Listar produtos
        const lblListaDeProduto = $('android=new UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")')
        // Act (ação)
        await txtUsuario.waitForDisplayed()
        await txtSenha.waitForDisplayed()
        await txtUsuario.setValue(usuario) // admin
        await txtSenha.setValue(senha) // admin
        await btnEntrar.click() // clicar no botão entrar
        const listaDeProduto = await lblListaDeProduto.getText()
        // Assert (assertiva)
        expect(listaDeProduto).toEqual('Lista de Produtos')
        await driver.saveScreenshot('./teste.png')
    })
})

