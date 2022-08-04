

export const request = async (method, url, data) => {


    try {

        let req;

        if (method === "GET") {
            req = fetch(url)
        } else {
           
            req = fetch(url,{
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        } const response = await req;
            const result = await response.json();
            return result
    } catch (error) {
        console.log(error)
    }
}

export const get =request.bind({},'GET')
export const post =request.bind({},'POST')
export const put =request.bind({},'PUT')
export const del =request.bind({},'DELETE')
























