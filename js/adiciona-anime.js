

botaoEnviar.addEventListener('click', (event) => {

    event.preventDefault();

    if(validarCampos()) {
        const anime = obterAnime();
        enviarDados(anime);
        limparFormulario();
    }  
  
});

function obterAnime() {
    const anime = {
        nome: campoNome.value,
        descricao: campoDescricao.value,
        episodios: campoEpisodios.value,
        data: campoData.value.toString(),
        video: campoVideo.files[0],
        imagem: campoImagem.files[0],
    }
    return anime;
}

function enviarDados(anime) {
    console.log(anime);
}