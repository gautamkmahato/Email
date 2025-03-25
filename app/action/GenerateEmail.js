'use server'

export default async function GenerateEmail(prompt) {
    const response = await fetch('', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(prompt)
    })
    const result = await response.json();

    return result;
}
