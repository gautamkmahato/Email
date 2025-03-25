'use server'

export default async function saveContent(design, description, email_from, user_id) {
    const inputData = { design, description, email_from, user_id };

    // Determine the base URL
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : process.env.NEXT_PUBLIC_BASE_URL;

    // Construct the full URL
    const apiUrl = `${baseUrl}/api/save`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
    });

    if (!response.ok) {
        // Handle errors appropriately
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save content');
    }

    const result = await response.json();
    return result;
}
