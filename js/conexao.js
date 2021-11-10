
// Requisição para o animes.json
// Pega o animes.json para verificar se o anime digitado já existe no cadastro.

fetch('animes.json')
.then(
  function(resposta) {
    if (resposta.status !== 200) {
        console.log('Erro na requisição: ' + resposta.status);
        return;
    }

    resposta.json().then(function(dados) {
        existeAnime(dados);
    });
  }
)
.catch(function(err) {
  console.log('Fetch Error :-S', err);
});

