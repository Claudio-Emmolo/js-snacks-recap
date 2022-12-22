/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
 Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. */


const {createApp} = Vue;

createApp({
	data() {
		return{
            chatList : [],
          userMessage : ""
		}
	},

    methods: {

        sendMessage(){
            const message = {
                text : this.userMessage,
                status : 'send'
            };

            this.chatList.push(message);

            this.userMessage = ""

            setTimeout(() => {
                axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
                .then((response) => {
                    const randomMessage = {
                        text: response.data.response,
                        status : 'receive'
                    }

                    this.chatList.push(randomMessage);

                });
            }, 800);
        }

       
    },

    


}).mount ('#app')
