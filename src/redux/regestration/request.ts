export function request( method: string, body?: object) {
    return (fetch('http://localhost:3000/v1/register', {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then(response => response.json())
    );
}