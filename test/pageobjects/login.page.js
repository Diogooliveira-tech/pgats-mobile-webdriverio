import { $ } from '@wdio/globals'
import ListaDeProdutosPage from './listaDeProdutos.page.js'

export default class LoginPage {

    get txtUsuario() { return $('android=new UiSelector().packageName("com.example.lojinha").className("android.widget.EditText").instance(0)') }
    get txtSenha() { return $('//android.view.View[@text="Senha"]/../android.widget.EditText') }
    get btnEntrar() { return $('android=new UiSelector().text("ENTRAR")') }

    async cliqueBtnEntrar() {
        await this.btnEntrar.click()
    }

    async preencherTxtUsuario(usuario) {
        await this.txtUsuario.setValue(usuario)
    }

    async preencherTxtSenha(senha) {
        await this.txtSenha.setValue(senha)
    }

    async logarNaLojinha(usuario, senha) {
        await Promise.all([
            this.preencherTxtUsuario(usuario),
            this.preencherTxtSenha(senha)
        ])
        await this.cliqueBtnEntrar()
    }

    async logarNaLojinhaFluentPage(usuario, senha) {
        await Promise.all([
            this.preencherTxtUsuario(usuario),
            this.preencherTxtSenha(senha)
        ])
        await this.cliqueBtnEntrar()
        return new ListaDeProdutosPage()
    }
}