//Salvo in una variabile globale la funzione createApp dall'istanza di Vue
const { createApp } = Vue;

//Utilizzo la funzione createApp
createApp({
    //Definisco il data con il return all'interno
    data() {
        return {
            //All'interno del return definisco le variabili
            saluto: '<h1>Ciao sono VUE JS!</h1>',
            image: 'https://picsum.photos/400/400'
        }
    }
    //Collego il createApp con l'elemento del DOM corrispondente
}).mount('#app');