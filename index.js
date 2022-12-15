let myEmojis = ["😍", "😎", "🤠"];
const emojiContainer = document.getElementById("emoji-container");
const push = document.getElementById("push-btn");
const unshift = document.getElementById("unshift-btn");
const pop = document.getElementById("pop-btn");
const shift = document.getElementById("shift-btn");
const emojiInput = document.getElementById("emoji-input");

let emojiLenth = myEmojis.length;

function renderEmojis() {
    emojiContainer.innerHTML = "";
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement("span");
        emoji.textContent = myEmojis[i];
        emojiContainer.append(emoji);
    }  
}

renderEmojis();

push.addEventListener("click", function(){

    if (emojiInput.value) {
        myEmojis.push(emojiInput.value);
        emojiInput.value = "";        
        renderEmojis();
    }   
    
    
    
})

unshift.addEventListener ("click", function(){    
    
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value);
        emojiInput.value = "";        
        renderEmojis();
    }   
    
})


pop.addEventListener ("click", function(){      
   
        myEmojis.pop();
        emojiInput.value = "";        
        renderEmojis();   
})

shift.addEventListener ("click", function(){    
  
    myEmojis.shift();
    emojiInput.value = "";        
    renderEmojis(); 
 })

 function action(buttonToBePushed) {
    if (emojiInput.value) {
        myEmojis.buttonToBePushed(emojiInput.value);
        emojiInput.value = "";        
        renderEmojis();
    } 
 }
 