// Creiamo una nuova istanza di Vue
new Vue({
    el: '#app',
    data: {
        message: "Benvenuto sul nostro sito!",
        imageUrl: "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/547c1414-645e-491a-9ff1-9b018771878e/cane_di_labrador_retriever_disteso_nel_parco_in_una_giornata_soleggiata.jpg"
    },
    mounted() {
        // Stampa il messaggio anche in console quando l'istanza di Vue è montata
        console.log(this.message);
    }
});