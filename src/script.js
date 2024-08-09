function displayQuotes(response) {
  new Typewriter("#generating-quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function GetApi(event) {
  event.preventDefault();
  let userInput = document.querySelector("#input-topic");
  let apiKey = "0a22ffd903a7dat6od52d64479b35f32";
  let prompt =
    "You are a generator quotes expert and love to write short quotes. You mission is to generate a quotes in 2 or 3 sentences, and use <blockquote> around the quote and give emoji at the end. Make sure to follow the user instructions.";
  let context = `User instructions: Generate a quotes about ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayQuotes);

  let quotesContainer = document.querySelector("#quotes-container");
  quotesContainer.classList.add("hidden");
  let generatingQuote = document.querySelector("#generating-quote");
  new Typewriter("#generating-quote", {
    strings: `generate quotes for topic ${userInput.value}`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let inputForm = document.querySelector("#input-form");
inputForm.addEventListener("submit", GetApi);
