let quotes = [];

async function loadData() {
  try {
    const quoteResponse = await fetch("json/quotes.json");
    const quoteJSON = await quoteResponse.json();
    quotes = quoteJSON.quote;

    const zufall = Math.floor(Math.random() * quotes.length);
    document.getElementById("the-quote").innerText = quotes[zufall];
  } catch (error) {
    document.getElementById("the-quote").innerText =
      "Das Zitat konnte nicht geladen werden :(";
  }
}

loadData();
