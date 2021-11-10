
const form = document.querySelector("#cadastro__form");
const botaoEnviar = document.querySelector("#btn__enviar");

const campoNome = form.nome;
const campoDescricao = form.descricao;
const campoEpisodios = form.episodios;
const campoData = form.data;
const campoVideo = form.video;
const campoImagem = form.imagem;

tirarErro(campoNome);
tirarErro(campoDescricao);
tirarErro(campoEpisodios);
tirarErro(campoData);
tirarErro(campoVideo);
tirarErro(campoImagem);

function validarCampos() {
    
    let count = 0;

    if(campoEstaVazio(campoNome)) {
        count++;
    }

    if(campoEstaVazio(campoDescricao)) {
        count++;
    }
    
    if(campoEstaVazio(campoEpisodios)) {
        count++;
    }

    if(campoEstaVazio(campoData)) {
        count++;
    }

    if(campoEstaVazio(campoVideo)) {
        count++;
    }

    if(campoEstaVazio(campoImagem)) {
        count++;
    }

    return (count===0);
}

function limparFormulario() {
    campoNome.value="";
    campoDescricao.value="";
    campoEpisodios.value="";
    campoData.value="";
    campoVideo.value="";
    campoImagem.value="";
}

function campoEstaVazio(campo) {
    if((campo.value === "")) {
        const erro = document.querySelector(`.${campo.name}--erro`);
        erro.textContent = "* Este campo precisa ser preenchido";
        erro.style.display = "block";
        return true;
    } else {
        return false;
    }
}

function tirarErro(campo) {
    campo.addEventListener("click", () => {
        const erro = document.querySelector(`.${campo.name}--erro`);
        erro.style.display = "none";
        campoNome.classList.remove("form__nome--erro");
        campoNome.placeholder = "Digite o nome do anime";
    }); 
}

function existeAnime(dados) {
    campoNome.addEventListener("blur", () => {
        dados.animes.forEach((campo) => {
            if(campo.nome === campoNome.value) {
                const anime = campoNome.value;
                campoNome.classList.add("form__nome--erro");
                campoNome.value = "";
                campoNome.placeholder = `AVISO: O anime ${anime} já está cadastrado`;
                return;
            } else {
              tirarErro(campoNome);
            }
        })
    });
}  
