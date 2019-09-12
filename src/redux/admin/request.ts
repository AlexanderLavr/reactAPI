export function request(url:string,  method: string, body?: object) {
    return (fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then((response : any) => {return  response.text().then(function(text :any) {
        return text ? JSON.parse(text) : {}
            }) 
        })
    );
} 

export function requestID( method: string,  id?:any, body?: object) {
    return (fetch(`http://localhost:3000/v1/users/getAdminUser/${id}`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then(response => response.json())
    );
}