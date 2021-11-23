import { URL, endpoint_games, endpoint_send_request } from "../constants/globals"
export const service = {
    getGames: async (hook) =>{
        const data = await fetch(URL+endpoint_games, {
            headers: {
                'Authorization': 'token c556349da55f68e59805f7ce0f2558bea2036270',
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
                'Authorization': 'token c556349da55f68e59805f7ce0f2558bea2036270',
                'Content-Type': 'application/json'
            },
            body: data
        }).then(response => response.data)
        return request
    }

}