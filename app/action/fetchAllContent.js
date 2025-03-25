'use server'

export default async function fetchAllContent() {

    // Determine the base URL
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : process.env.NEXT_PUBLIC_BASE_URL;

    // Construct the full URL
    const apiUrl = `${baseUrl}/api/getAllTemplates`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        // Handle errors appropriately
        const errorData = await response.json().catch(() => ({ message: 'Failed to get the content' }));
        throw new Error(errorData.message);
    }

    // Check if the response body is empty
    const result = await response.json();
    if (!result) {
        throw new Error('Received empty response from the server');
    }

    return result;
}
