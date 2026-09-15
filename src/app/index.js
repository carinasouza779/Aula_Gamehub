// ETAPA 1 - iNICIO DO PROJETO: TELA INICIAL

//O  que fazemos aqui?
// Esta é a tela inicial do app (rota"/")

import { View, Text , ScrollView , FlatList ,Pressable , StyleSheet } from "react-native";

import { useRoute } from "expo-router";
 
import Gamecard from "../components/Gamecard";
// Reutilizar componentes, isso evita duplicação código e mantem a consistência visual.

import {jogos} from "../data/jogos";
// Importante uma array de objetos do arquivo data/jogos.js

import {cores} from "../data/tema"
// importa a paleta de cores do app do arquivo data/tema.js

export default function Inicio(){
    
    const router = useRouter();
    // obtemos o objeto de navegação
    const destaques = jogos.filter((jogo) => jogo.destaque)
    //percore o array jogos e cria um novo array destaque contendo apenas os objetos cuja
    //o campo "destaque" seja true.
    const populares = [...jogos].sort((a,b) => b.nota - a.nota).slice(0, 5);
    // ...jogos -> cria uma cópia do array original
    // sort((a, b) => b.nota - a.nota) ordena a cópia da maior nota para a menor
    // .slice(0, 5): extrai apenas os 5 primeiros elementos do array

    //------------------------------------
    // Bloco 2 - Estrutura da tela
    // -----------------------------------
    return(
        //inicio do JSX retornado pelo componente: difene o que será renderizado na tela
        <scollView style={style.container} contentContainerStyle={StyleSheet.conteudo}>
            {/* scrollview: container com rolagem vertical*/}
            <text style={StyleSheet.titulo}>GameHub</text>
            {/* Exibe o texto "Gamehub" como titulo, usando o estilo "titulo" */}
            <text style={style.subtitulo}>Seu universo de jogos em um só lugar</text>

    //------------------------------------
    // Bloco 2.1 - Seção jogos
    // -----------------------------------


        </scollView>
    );
}
    