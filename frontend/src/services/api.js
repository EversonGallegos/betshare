import { URL, 
    endpoint_games, 
    endpoint_send_request, 
    endpoint_cart,
    endpoint_tickets, 
    endpoint_quote_manager} from "../constants/globals"

const token = 'c556349da55f68e59805f7ce0f2558bea2036270'

export const service = {
    getGames: async (hook) =>{
        const data = await fetch(URL+endpoint_games, {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        const result = await data
        hook(result)
    },
    sendRequest: async (option, quotes, selecteds) => {
        const data = JSON.stringify({
                                "option": option, 
                                "quotes": quotes,
                                "suggested_numbers": selecteds})
                            
        console.log(data)
        const request = await fetch(URL+endpoint_send_request,{
            method: 'POST',
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            },
            body: data
        }).then(response => response.data)
        return request
    },

    getCart: async () =>{
        const data = await fetch(URL+endpoint_cart, {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        
        return data
    },

    deleteRequest: async (id) =>{
        const data = await fetch(URL+endpoint_cart+`${id}/`, {
            method: 'delete',
            headers: {
                'Authorization': `token ${token}`,
            }
        }).then(result => result)
        return data.status
    },

    getLengthCart: async () => {
        const data = await fetch(URL+endpoint_cart+'length/',{
            headers: {
                'Authorization': `token ${token}`,
            }
        }).then(result => result.json())
        return data
    },
    setPayment: async () => {
        const request = await fetch(URL+endpoint_cart,{
            method: 'post',
            headers: {
                'Authorization': `token ${token}`,
            }
        }).then(result => result)
        return request.status
    },
    getQuoteManager: async () => {
        let ticket = []
        const data = await fetch(URL+endpoint_quote_manager, {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) => {
            if (data.length > 0) {
                let isUnique
                data.map(
                    (item) => {
                        isUnique = true
                        if(ticket.length > 0){
                            for(let i = 0; i < ticket.length; i++){
                                //verifica se há mais de uma requisição para o mesmo ticket
                                //se houver, concatena as requisições em um único ticket
                                if(item['ticket']['id'] === ticket[i]['ticket']['id']){
                                    //converte a requisição em uma lista de requisições
                                    if(!Array.isArray(ticket[i]['request'])){
                                        let req = ticket[i]['request']
                                        ticket[i]['request'] = []
                                        ticket[i]['request'].push(req)
                                    }
                                    ticket[i]['request'].push(item['request'])
                                    ticket[i]['quotes'] += item['quotes']
                                    isUnique = false
                                }
                            }
                            //insere no array o ticket se ele for único
                            if(isUnique) ticket.push(item)
                        }else{
                            //Insere no array o primeiro ticket
                            ticket.push(item)
                        }
                    }
                )
            }
        })
        return ticket
    },
}