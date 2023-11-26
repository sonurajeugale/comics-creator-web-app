// This file contains functions for API interactions.
/**
 * Makes a POST request to the specified API endpoint to generate an image based on provided text input.
 * 
 * @param {object} data - The data to be sent in the request body, containing the text input.
 * @returns {Promise<Blob>} - A promise that resolves with the image data as a Blob.
 */
 export async function query(data: { inputs: string }): Promise<Blob> {
    const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
            method: "POST",
            headers: { 
                "Accept": "image/png",
                "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return result;
}
