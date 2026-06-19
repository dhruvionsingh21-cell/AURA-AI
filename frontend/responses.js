// ======================================
// AURA Responses
// ======================================

function getAIReply(message) {

    const text = message.toLowerCase();

    if (
        text === "hi" ||
        text === "hello" ||
        text === "hey"
    ) {

        return "👋 Hello Harmeet! How are you today?";

    }

    else if (
        text === "how are you" ||
        text === "how r u"
    ) {

        return "😊 I'm doing great! Thanks for asking.";

    }

    else if (text === "bye") {

        return "👋 Goodbye! See you soon.";

    }

    return "🤖 I'm still learning. Soon I'll become much smarter!";
}