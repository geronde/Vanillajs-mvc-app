class Api {
    constructor() {
        this.url = 'https://api-server-feed.herokuapp.com/api'
        this.config = {
            method: 'GET',
            headers: {  
                        'Content-Type':'text/plain'
                     },
            mode: 'cors',
            cache: 'default'
        };
    }

    async getData() {
        const apiCall = await fetch(this.url, this.config)
        const response = await apiCall.text()
        const decompressedResponse = await LZString.decompressFromBase64(response)
        return await JSON.parse(decompressedResponse)
    }

}