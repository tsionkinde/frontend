let BtnGen = document.querySelector("button");
let quoteEl = document.querySelector("#quote");
let authorEl = document.getElementById("author");

BtnGen.addEventListener("click", async () => {
    const { quote, author } = await getQuote();
    quoteEl.innerText = quote;
    authorEl.innerText = `- ${author}`;
});

async function getQuote() {
    try {
        const res = await fetch("https://dummyjson.com/quotes/random");
        if (!res.ok) throw new Error("Network error");

        const data = await res.json();
        return {
            quote: data.quote,
            author: data.author
        };
    } catch (err) {
        console.error(err);
        return { quote: "Failed to fetch quote", author: "" };
    }
}





