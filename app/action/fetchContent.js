'use server'

export default async function fetchContent(id) {
    const inputData = { id };
    console.log(inputData)

    // Determine the base URL
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : process.env.NEXT_PUBLIC_BASE_URL;

    // Construct the full URL
    const apiUrl = `${baseUrl}/api/content`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
    });

    if (!response.ok) {
        // Handle errors appropriately
        const errorData = await response.json().catch(() => ({ message: 'Failed to get the content' }));
        throw new Error(errorData.message);
    }

    // Check if the response body is empty
    const text = await response.text();
    if (!text) {
        throw new Error('Received empty response from the server');
    }

    const result = JSON.parse(text);  // Parse manually to avoid unexpected JSON parsing errors
    return result;
}
