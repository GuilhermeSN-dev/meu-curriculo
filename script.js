
// Informações do currículo

const curriculo = {

    dadosPessoais: {
        nome: "Guilherme Silva do Nascimento",
        idade: 23,
        cargo: "Estudante de Análise e Desenvolvimento de Sistemas",
        email: "guinascimentoti@gmail.com",
        telefone: "(11) 98332-2483",
        cidade: "Suzano - SP",
        linkedin: "https://www.linkedin.com/in/guilherme-silva-do-nascimento-054b313b9/",
        github: "https://github.com/GuilhermeSN-dev"
    },

    sobreMim: "Sou estudante de Análise e Desenvolvimento de Sistemas, com interesse em tecnologia, programação e desenvolvimento web. Atualmente trabalho na área de produção e concilio minha atividade profissional com a faculdade. Busco uma oportunidade de estágio em Desenvolvimento de Software para desenvolver meus conhecimentos e iniciar minha carreira na área.",

    formacao: {
        instituicao: "Centro Universitário Piaget (UNIPiaget)",
        curso: "Análise e Desenvolvimento de Sistemas",
        semestre: "2º semestre",
        situacao: "Cursando"
    },

    experiencia: [
        {
            empresa: "RC MIX",
            cargo: "Operador de Processos de Produção",
            inicio: "01/10/2022",
            termino: "Atual",
            descricao: "Atuação em processos de produção industrial, conciliando a rotina profissional com a graduação em Análise e Desenvolvimento de Sistemas."
        }
    ],

    conhecimentos: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "SQL",
        "MySQL",
        "Git e GitHub"
    ],

    nivelConhecimento: "Básico",

    habilidades: [
        "Organização",
        "Responsabilidade",
        "Trabalho em equipe",
        "Disposição para aprender"
    ],

    projetos: [
        {
            nome: "Projetos acadêmicos de programação",
            descricao: "Desenvolvimento de atividades práticas durante a graduação, envolvendo lógica de programação, desenvolvimento web e banco de dados.",
            tecnologias: [
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "SQL"
            ]
        }
    ],

    objetivoProfissional: "Conquistar uma oportunidade de estágio em Desenvolvimento de Software.",

    disponibilidade: "Presencial, remoto ou híbrido"

};


// Função para carregar as informações no HTML

function carregarCurriculo() {

    // Dados pessoais

    document.getElementById("nome").textContent =
        curriculo.dadosPessoais.nome;

    document.getElementById("cargo").textContent =
        curriculo.dadosPessoais.cargo;

    document.getElementById("email").textContent =
        curriculo.dadosPessoais.email;

    document.getElementById("telefone").textContent =
        curriculo.dadosPessoais.telefone;

    document.getElementById("cidade").textContent =
        curriculo.dadosPessoais.cidade;

    document.getElementById("sobre").textContent =
        curriculo.sobreMim;

    document.getElementById("objetivo").textContent =
        curriculo.objetivoProfissional;

    document.getElementById("disponibilidade").textContent =
        curriculo.disponibilidade;


    // Formação acadêmica

    document.getElementById("formacao").textContent =
        curriculo.formacao.curso + " - " +
        curriculo.formacao.instituicao;

    document.getElementById("semestre").textContent =
        curriculo.formacao.semestre + " | " +
        curriculo.formacao.situacao;


    // Links das redes sociais

    const linkedin = document.getElementById("linkedin");
    linkedin.href = curriculo.dadosPessoais.linkedin;

    const github = document.getElementById("github");
    github.href = curriculo.dadosPessoais.github;


    // Experiência profissional

    const experiencia = document.getElementById("experiencia");

    curriculo.experiencia.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("experiencia-item");

        const empresa = document.createElement("h3");
        empresa.textContent = item.empresa;

        const cargo = document.createElement("p");
        cargo.textContent = item.cargo;

        const periodo = document.createElement("p");
        periodo.textContent = item.inicio + " - " + item.termino;

        const descricao = document.createElement("p");
        descricao.textContent = item.descricao;

        div.appendChild(empresa);
        div.appendChild(cargo);
        div.appendChild(periodo);
        div.appendChild(descricao);

        experiencia.appendChild(div);

    });


    // Conhecimentos técnicos

    const conhecimentos = document.getElementById("conhecimentos");

    curriculo.conhecimentos.forEach(item => {

        const span = document.createElement("span");

        span.textContent = item + " - " + curriculo.nivelConhecimento;

        conhecimentos.appendChild(span);

    });


    // Projetos acadêmicos

    const projetos = document.getElementById("projetos");

    curriculo.projetos.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("projeto-item");

        const nome = document.createElement("h3");
        nome.textContent = item.nome;

        const descricao = document.createElement("p");
        descricao.textContent = item.descricao;

        const tecnologias = document.createElement("p");
        tecnologias.textContent =
            "Tecnologias: " + item.tecnologias.join(", ");

        div.appendChild(nome);
        div.appendChild(descricao);
        div.appendChild(tecnologias);

        projetos.appendChild(div);

    });


    // Habilidades

    const habilidades = document.getElementById("habilidades");

    curriculo.habilidades.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        habilidades.appendChild(li);

    });

}


// Executar quando a página carregar

document.addEventListener("DOMContentLoaded", carregarCurriculo);
