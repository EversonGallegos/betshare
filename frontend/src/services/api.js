import { URL, 
    endpoint_games, 
    endpoint_send_request, 
    endpoint_cart,
    endpoint_tickets, 
    endpoint_quote_manager,
    endpoint_bet,
    endpoint_get_token,
    endpoint_refresh_token} from "../constants/globals"

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
        let tickets = []
        const data = await fetch(URL+endpoint_quote_manager, {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        
        if (data.length > 0) {
            let isUnique
            tickets = data.reduce((ticketArr, ticketCurr) => {
                isUnique = true
                for(let i = 0; i < ticketArr.length; i++){
                    //verifica se há mais de uma requisição para o mesmo ticket
                    //se houver, concatena as requisições em um único ticket
                    if(ticketCurr['ticket']['id'] === ticketArr[i]['ticket']['id']){
                        //converte a requisição em uma lista de requisições
                        if(!Array.isArray(ticketArr[i]['request'])){
                            let req = ticketArr[i]['request']
                            ticketArr[i]['request'] = []
                            ticketArr[i]['request'].push(req)
                        }
                        ticketArr[i]['request'].push(ticketCurr['request'])
                        ticketArr[i]['quotes'] += ticketCurr['quotes']
                        isUnique = false
                    }
                }
                //insere no array o ticket se ele for único
                if(isUnique) ticketArr.push(ticketCurr)
                return ticketArr
            }, [])
        }
        return tickets
    },

    getBet: async (ticket_id) => {
        const data = await fetch(URL+endpoint_bet+`${ticket_id}/`, {
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            }
        }).then((data) => data.json())
        return data
    },

    setToken: (access, refresh) => {
        localStorage.setItem('access_betshare', access)
        localStorage.setItem('refresh_betshare', refresh)
    },

    Login: async (username, password) => {
        const user = JSON.stringify({
            'username': username, 
            'password': password})
        const response = await fetch(URL+endpoint_get_token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: user
        }).then((response) => response)
    
        if(response.status === 200){
            const data = await response.json()
            service.setToken(data['access'], data['refresh'])
            return response.status
        }else{
            return response.status
        }
    },

    refreshToken: async () => {
        const token_refresh = JSON.stringify({
            'refresh': localStorage.getItem('refresh_betshare')
        })
        const response = fetch(URL+endpoint_refresh_token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: token_refresh
        }).then(response => response)
        console.log(token_refresh)
        if(response.status === 200){
            const data = await response.json()
            console.log(data)
            service.setToken(data['access'], data['refresh'])
        }
    },

    

}