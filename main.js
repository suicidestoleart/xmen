let loginCerto = "repolho";
let passwordCerto = "1234";

function logar() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    if (login == loginCerto) {
        if (password == passwordCerto) {
            window.location.replace("painellControle.html");

        }
    }
    document.getElementById("deuRuim").hidden = false;
}

function mudarPersonagem(personagem) {
    let dict = {
        0: ["imagens/x-menteam.webp", "X-men team", "Conheça a equipe dos x-men"],
        1: ["imagens/wolverine.png", "Wolverine", "Amaldiçoado com uma fúria incontrolável, o mutante violento conhecido como Wolverine tem uma reputação tanto de super-herói excepcional quanto de assassino letal. Nascido como James Howlett em uma família canadense rica no final do século 19, ele foi forçado a abandonar sua família após a trágica manifestação de suas habilidades bestiais de fator de cura acelerado, sentidos profundamente aprimorados e garras de osso em cada mão. Adotando o nome de Logan, ele vagou pelo mundo, vivendo uma longa vida cheia de sangue, guerra e traição, tendo o vil Dentes de Sabre como seu arqui-inimigo e o guerreiro japonês Ogun como seu sensei. Infelizmente, agindo como um lobo solitário, Logan era um sujeito involuntário do programa Arma X e teve seus ossos revestidos de indestrutível Adamantium, tornando-se um ativo ainda mais letal. Resgatado e auxiliado por Mac e Heather Hudson, ele se juntou ao Departamento H como um agente do governo canadense conhecido como Wolverine ."],
        2: ["imagens/misticalinda.png", "Mistíca", ""],
        3: ["imagens/stormm.png", "Tempestade", ""],
        4: ["imagens/vampira.webp", "Vampira", ""],
        5: ["imagens/gambit.png", "Gambit", ""],
        6: ["imagens/magneto3.png", "Magneto", ""],
        7: ["imagens/jean.webp", "Jean Grey", ""],
        8: ["imagens/fera2.webp", "Fera", ""],
        9: ["imagens/noturno2.png", "Noturno", ""]
        
    }

    document.getElementById("personagem").src = dict[personagem][0]
    document.getElementById("nome").innerText = dict[personagem][1]
    document.getElementById("descricao").innerText = dict[personagem][2]
}