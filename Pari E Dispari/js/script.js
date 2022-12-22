/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
 Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/


const {createApp} = Vue;

createApp({
	data() {
		return{
          numbersPari : [],
          numbersDispari : [],
		}
	},

    methods: {

        generateRandomNumber(){
                axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=1')
                 .then((response) => {
                    const result = response.data.response[0];
                    (result % 2 == 0) ? this.numbersPari.push(result) : this.numbersDispari.push(result)
                 });
                
            }

        },


}).mount ('#app')
