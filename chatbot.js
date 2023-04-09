const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const apiUrl = "http://localhost:5005/webhooks/rest/webhook";
var coll = document.getElementsByClassName("collapsible");

send.addEventListener("click", () => renderUserMessage());

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var content = this.nextElementSibling;

      if (content.style.maxHeight) {
          content.style.maxHeight = null;
      } else {
          content.style.maxHeight = content.scrollHeight + "px";
      }

  });

} 
txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});



const renderUserMessage = async () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  
  const data = { message: userInput };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };
  
  try {
    const response = await fetch(apiUrl, options);
    const messages = await response.json();
    messages.forEach(message => {
      renderMessageEle(message.text, "chatbot");
    });
    setScrollPosition();
  } catch (error) {
    console.log(error);
  }
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type === "chatbot") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};
