export function request( method: string, body?: string|object, id?:string) {
    return (fetch(`http://localhost:3000/v1/users/changeProfile/${id}`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then(response => response.json())
    );
} 