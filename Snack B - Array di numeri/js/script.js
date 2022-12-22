/** Chiedere all'utente quanti elementi vuole includere nell'array.
 Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
 Stampare a schermo la somma dei numeri generati. */


const {createApp} = Vue;

createApp({
	data() {
		return{
            numberList : null,
            userNumber : null,
		}
	},

    methods: {

        getUserNumber(){
            axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.userNumber}`)
            .then((response) => {
                this.numberList = response.data.response;
                this.userNumber = null
            });
        }
    }

    


}).mount ('#app')
