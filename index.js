// Elements
const container = document.getElementById("quote-container");

// API Stuff
async function GetQuote() {
    try {
        const response = await fetch('https://api.kanye.rest');
        const data = await response.json();
        return data;
    } catch(err) {
        console.error(err);
    }
}

GetQuote().then(data => {
    console.log(data.quote);

    const text = document.createElement('H2');
    text.innerHTML = `${data.quote}`;
    text.id = 'quote';
    container.appendChild(text);
})