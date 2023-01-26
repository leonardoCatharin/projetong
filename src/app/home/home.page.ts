import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public checking = true;
  public valor = 9;

  public filmes = [
    {cod: 1, titulo: 'Viúva Negra',           sinopse: 'Em Viúva Negra, acompanhamos a vida de Natasha Romanoff (Scarlett Johansson) após os eventos de Guerra Civil. Se escondendo do governo norte-americano devido a sua aliança com o time do Capitão América, Natasha ainda precisa confrontar partes de sua história quando surge uma conspiração perigosa ligada ao seu passado. Perseguida por uma força que não irá parar até derrotá-la, ela terá que lidar com sua antiga vida de espiã, e também reencontrar membros de sua família que deixou para trás antes de se tornar parte dos Vingadores.',   ano: 2021, status: true},
    {cod: 2, titulo: '1917',                  sinopse: 'Em 1917, os cabos Schofield (George MacKay) e Blake (Dean-Charles Chapman) são jovens soldados britânicos durante a Primeira Guerra Mundial. Quando eles são encarregados de uma missão aparentemente impossível, os dois precisam atravessar território inimigo, lutando contra o tempo, para entregar uma mensagem que pode salvar cerca de 1600 colegas de batalhão.',   ano: 2020, status: true},
    {cod: 3, titulo: 'Jojo Rabbit',           sinopse: 'Alemanha, durante a Segunda Guerra Mundial. Jojo (Roman Griffin Davis) é um jovem nazista de 10 anos, que trata Adolf Hitler (Taika Waititi) como um amigo próximo, em sua imaginação. Seu maior sonho é participar da Juventude Hitlerista, um grupo pró-nazista composto por outras pessoas que concordam com os seus ideais. Um dia, Jojo descobre que sua mãe (Scarlett Johansson) está escondendo uma judia (Thomasin McKenzie) no sótão de casa. Depois de várias tentativas frustradas para expulsá-la, o jovem rebelde começa a desenvolver empatia pela nova hóspede.',   ano: 2020, status: true},
    {cod: 4, titulo: 'Adoráveis Mulheres',    sinopse: 'As irmãs Jo (Saoirse Ronan), Beth (Eliza Scanlen), Meg (Emma Watson) e Amy (Florence Pugh) amadurecem na virada da adolescência para a vida adulta enquanto os Estados Unidos atravessam a Guerra Civil. Com personalidades completamente diferentes, elas enfrentam os desafios de crescer unidas pelo amor que nutrem umas pelas outras.',  ano: 2020, status: true},
    {cod: 5, titulo: 'Troco em Dobro',        sinopse: 'Na trama de Troco em Dobro, Spenser (Mark Wahlberg), um ex-policial mais conhecido por causar problemas do que resolvê-los, acabou de sair da prisão. Mas ele se vê obrigado a ajudar seu antigo treinador de boxe Henry (Alan Arkin) e permanece na cidade de Boston mesmo com a intenção de ir embora. Quando dois ex-colegas de Spenser são assassinados, ele recruta Hawk (Winston Duke), um lutador de MMA, para ajudá-lo a investigar e levar os culpados à justiça.',  ano: 2020, status: true},
    {cod: 6, titulo: 'Mulher Maravilha 1984', sinopse: 'Mulher-Maravilha 1984 acompanha Diana Prince/Mulher-Maravilha (Gal Gadot) em 1984, durante a Guerra Fria, entrando em conflito com dois grande inimigos - o empresário de mídia Maxwell Lord (Pedro Pascal) e a amiga que virou inimiga Barbara Minerva/Cheetah (Kristen Wiig) - enquanto se reúne com seu interesse amoroso Steve Trevor (Chris Pine).',   ano: 2020, status: true},
    {cod: 7, titulo: 'King\'s Man: a origem', sinopse: 'Em King’s Man: A Origem, quando um grupo formado pelos piores tiranos e criminosos mais cruéis de todos os tempos planeja uma ameaça capaz de matar milhões de inocentes, um homem é obrigado a correr contra o tempo na tentativa de salvar o futuro da humanidade.', ano: 2021, status: false}
  ]

  constructor() {}

  maskSinopse(str: string, limit: number){
    return str.substring(0, limit) + '... ';
  }

}
