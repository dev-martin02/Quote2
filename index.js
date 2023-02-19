const ID = document.getElementById("advice-title");
const advText = document.getElementById("advice-text");
const btn = document.getElementById("button");
const text = document.getElementById("text");
const btn2 = document.getElementById("valor");
let url = "https://api.adviceslip.com/advice";

const getQuote = async (url) => {
  // * define the URL in a variable
  try {
    if (!text.value) {
      const response = await (await fetch(url)).json();
      advText.innerText = response.slip.advice;
      ID.innerText = response.slip.id;
    } else if (text.value > 224) {
      advText.innerText = "Can you please go lower?";
      ID.innerText = "No quote";
      text.value = "";
    } else if (text.value < 0) {
      advText.innerText = "No queremos vibras negativas";
      ID.innerText = "Nada negativo";
      text.value = "";
    } else if (text.value == 22) {
      advText.innerText = "the cat cataplum in the water and no more miau miau";
      ID.innerText = "Aprendiendo Ingles";
      text.value = "";
    } else {
      const response = await (await fetch(`${url}/${text.value}`)).json();
      advText.innerText = response.slip.advice;
      ID.innerText = response.slip.id;
      text.value = "";
    }
  } catch (err) {
    console.error(err);
  }
};

getQuote(url);

btn.addEventListener("click", () => getQuote(url));

btn2.addEventListener("click", () => getQuote(url));
