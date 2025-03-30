function autenticar() {
    const login = document.getElementById('usuario').value;
    /* esta linha faz com que o objeto document html seja capturado por meio ao elemento id que colocamos no input do formulário. Este valor será adicionado na variável de tipo const chamada login. Vamos fazer o mesmo para o campo senha */

    const senha = document.getElementById('senha').value;

    //Agora vamos fazer a validação dos dados

    if (login==='usuario' && senha==='1234AB') {
        document.getElementById('mensagem').innerHTML="Usuário autenticado com sucesso!";
    }
    else{
        document.getElementById('mensagem').innerHTML="Acesso negado! Usuário ou Senha Incorretos.";
    }
}