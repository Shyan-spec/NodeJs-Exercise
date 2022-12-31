const WebSocket = require('ws');
const axios = require('axios');


const serverAddress = "ws://127.0.0.1:5000";

const ws = new WebSocket(serverAddress);


const apiKey=`UERVeH0XZj3beN6X`
const apiUrl = `https://api.exchange.coinbase.com/currencies/`
     

async function getCrypto () {
   let importantCrypto = []
   

  
        let response = await fetch(apiUrl);
         let data = await response.json();

         show(data)

    }

    function show(data) {
        let crypto = []
        for(let item of data) {
            if(item.id === 'BTC' || item.id === 'ETH' || item.id === 'XRP' || item.id === 'LTC' ) {
                crypto.push(item.id);
            }
            
        }
        console.log(crypto)
        return crypto;
        
    }

    



getCrypto();


ws.on('open', function() {
    ws.send("Hello server!");
});
ws.on('message', (msg) => {
    console.log("Recived msg from the server: " + msg);
});