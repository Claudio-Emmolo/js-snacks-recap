/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/


const {createApp} = Vue;

createApp({
	data() {
		return{
          peopleList : [],
          searchName : "",
          searchResult : null,
          searchStart : false,
		}
	},

    methods: {

        generateRandomName(){

            for (let i = 0; i < 10; i++){

                axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                .then((response) => {
                    const result = response.data.response;
                    this.peopleList.push(result)
                });
                
            }
        },

        researchName(){
            this.searchStart = !this.searchStart
            
            if (this.peopleList.includes(this.searchName)){
                this.searchResult = true;
                this.searchName = ""

                setTimeout(() => {
                    this.searchResult = false;
                    this.searchStart = !this.searchStart
                }, 1000);
                
            } else {
                this.searchResult = false;
                this.searchName = ""

                setTimeout(() => {
                    this.searchResult = true;
                    this.searchStart = !this.searchStart
                }, 1000);
            }
        }
    },

    created(){
        this.generateRandomName();
    }

    


}).mount ('#app')
