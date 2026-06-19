// ================================
// AURA AI - Day 2
// ================================

// Find HTML elements
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

// ================================
// Function to send message
// ================================

function sendMessage() {

    const message = userInput.value.trim();

    // Stop if message is empty
    if (message === "") {
        return;
    }

    // ------------------------------
    // USER MESSAGE
    // ------------------------------

    const userMessage = document.createElement("div");

    userMessage.classList.add("user-message");

    userMessage.textContent = "🧑 You: " + message;

    chatBox.appendChild(userMessage);

    // ------------------------------
    // AI RESPONSE
    // ------------------------------

    const text = message.toLowerCase();

    let reply = "";

    if (
        text === "hi" ||
        text === "hello" ||
        text === "hey"
    ) {

        reply = "👋 Hello Harmeet! How are you today?";

    }

    else if (
        text === "how are you" ||
        text === "how r u"
    ) {

        reply = "😊 I'm doing great! Thanks for asking.";

    }

    else if (
        text === "bye"
    ) {

        reply = "👋 Goodbye! Have a wonderful day.";

    }

    else {

        reply = "🤖 I'm still learning. We'll connect a real AI brain very soon!";

    }

    // ------------------------------
    // CREATE AI MESSAGE
    // ------------------------------

    const aiMessage = document.createElement("div");

    aiMessage.classList.add("ai-message");

    aiMessage.textContent = "🤖 AURA: " + reply;

    chatBox.appendChild(aiMessage);

    // ------------------------------
    // CLEAR INPUT
    // ------------------------------

    userInput.value = "";

    // Focus back on input
    userInput.focus();

    // Auto Scroll
    chatBox.scrollTop = chatBox.scrollHeight;

}

// ==================================
// CLICK SEND BUTTON
// ==================================

sendButton.addEventListener("click", sendMessage);

// ==================================
// PRESS ENTER
// ==================================

userInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});