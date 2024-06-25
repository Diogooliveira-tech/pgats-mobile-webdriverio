import LoginPage from '../pageobjects/login.page.js'

describe('Lojinha app', () => {
    it('[CT-001] - Realizar login na lojinha app', async () => {
        // Arrange (preparação)
        const usuario = 'admin2'
        const senha = 'admin'
        const loginPage = new LoginPage()
        // Act (ação)
        await (
            await loginPage
                .logarNaLojinhaFluentPage(usuario, senha))
            .validaOLoginNaLojinha('Lista de Produtos')  // Assert (assertiva)
        await driver.saveScreenshot('./teste.png')
    })
})

