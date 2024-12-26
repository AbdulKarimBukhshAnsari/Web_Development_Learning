let API_Key = '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';
let input_API = document.querySelector('#prompt');
let button = document.querySelector('.generate');
let image = document.querySelector('img');

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
        {
            headers: {
                Authorization: `Bearer ${API_Key}`,  // Fixed the error here
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return result;
}

button.addEventListener('click', async function() {
    query({"inputs": `${input_API.value}`}).then((response) => {
        const object_URL = URL.createObjectURL(response);
        image.src = object_URL; 
        console.log('Done')
    });
});
