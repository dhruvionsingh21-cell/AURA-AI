function showTyping(callback){

    const typing = document.createElement("div");

    typing.classList.add("ai-message");

    typing.id = "typing";

    typing.textContent = "🤖 AURA is typing";
let dots = "";

const animation = setInterval(function(){

    dots += ".";

    if(dots.length > 3){

        dots = "";

    }

    typing.textContent = "🤖 AURA is typing" + dots;

},300);
    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(function(){

        typing.remove();
clearInterval(animation);
        callback();

    },1500);

}
function welcomeMessage(){

    const welcome = document.createElement("div");

    welcome.classList.add("ai-message");

    welcome.innerHTML = `
        👋 <strong>Hello Harmeet!</strong><br><br>
        I'm <strong>AURA</strong>.<br><br>
        Your AI companion.<br><br>
        How are you feeling today?
    `;

    chatBox.appendChild(welcome);

}
function addUserMessage(message){

    const userMessage = document.createElement("div");

    userMessage.classList.add("user-message");

    userMessage.textContent = "🧑 You: " + message;

    chatBox.appendChild(userMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

}
function addAIMessage(message){

    const aiMessage = document.createElement("div");

    aiMessage.classList.add("ai-message");

    aiMessage.textContent = "🤖 AURA: " + message;

    chatBox.appendChild(aiMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

}