// Interacción de la tienda: abrir/cerrar el chat, elegir talle y preguntar desde los productos
const chatWidget = document.getElementById("chat-widget");
const chatToggle = document.getElementById("chat-toggle");
const chatClose = document.getElementById("chat-close");

function openChat() {
    chatWidget.hidden = false;
    chatToggle.hidden = true;
    messageInput.focus();
}

function closeChat() {
    chatWidget.hidden = true;
    chatToggle.hidden = false;
}

// Abre el chat y le manda la pregunta al asistente
function askAssistant(question) {
    openChat();
    addMessage(question, "user");
    sendMessage(question);
}

chatToggle.addEventListener("click", openChat);
chatClose.addEventListener("click", closeChat);

document.querySelectorAll("[data-open-chat]").forEach((button) => {
    button.addEventListener("click", openChat);
});

// Preguntas frecuentes y botones de encargo
document.querySelectorAll("[data-ask]").forEach((button) => {
    button.addEventListener("click", () => askAssistant(button.dataset.ask));
});

// Selección de talle en cada producto
document.querySelectorAll(".sizes").forEach((group) => {
    group.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            group.querySelectorAll("button").forEach((b) => b.classList.remove("selected"));
            button.classList.add("selected");
        });
    });
});

// "Lo quiero": arma la consulta con la prenda y el talle elegido
document.querySelectorAll("[data-product]").forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.closest(".product");
        const size = product.querySelector(".sizes .selected");
        const sizeText = size ? ` en talle ${size.textContent}` : "";

        askAssistant(`Hola! Me interesa ${button.dataset.product}${sizeText}.`);
    });
});
