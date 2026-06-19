// Get HTML Elements
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

// Main function
function sendMessage() {

    const message = userInput.value.trim();

    if(message === ""){
        return;
    }

    addUserMessage(message);
chatBox.scrollTop = chatBox.scrollHeight;
    const reply = getAIReply(message);

    showTyping(function(){

        addAIMessage(reply);
chatBox.scrollTop = chatBox.scrollHeight;
    });

    userInput.value = "";

    userInput.focus();

    chatBox.scrollTop = chatBox.scrollHeight;

}

// Click
sendButton.addEventListener("click", sendMessage);

// Enter
userInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        sendMessage();

    }

});
welcomeMessage();
