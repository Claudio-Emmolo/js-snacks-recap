/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
 Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/


const {createApp} = Vue;

createApp({
	data() {
		return{
          emailList : [],
		}
	},

    methods: {

        generateRandomEmail(){
            for (let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                 .then((response) => {
                    const result = response.data.response;
                    console.log(result);
                    this.emailList.push(result);


                 });
                
            }

        },

    },
    
    created(){
        this.generateRandomEmail();
    }


}).mount ('#app')
