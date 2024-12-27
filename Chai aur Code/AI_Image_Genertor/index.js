
let API_Key ='';
let input_API = document.querySelector('.prompt');
let button = document.querySelector('.generate-image');
let image = document.querySelector('img');
let icon = document.querySelector('.icon');
let downloadButton = document.querySelector('.download-button');


async function query(data) {
    image.classList.remove('hidden');
    image.src = 'loading GIF.gif'; 
    icon.style.display = 'none';
    const response = await fetch(
        "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
        {
            headers: {
                Authorization: `Bearer ${API_Key}`,  
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return result;
}

button.addEventListener('click', async function () {
    query({ "inputs": `${input_API.value}` }).then((response) => {
        const object_URL = URL.createObjectURL(response);
        icon.style.display = 'none'; // Hides the icon

        // Update image source
        image.src = object_URL;

        // Show download button and set its href
        downloadButton.classList.remove('hidden');
        downloadButton.href = object_URL;

        console.log('Image URL:', object_URL);
    });
});
