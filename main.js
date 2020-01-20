// Making fragment to attach later
const fragment = document.createDocumentFragment()

// Create 5 sections for our article
const msg1 = document.createElement('section')
msg1.className = "message"
msg1.textContent = "Hey!  Are you still coming over tonight?"

const msg2 = document.createElement('section')
msg2.className = "message"
msg2.textContent = "Yeah! I'm on my way just stuck in a little traffic"

const msg3 = document.createElement('section')
msg3.className = "message"
msg3.textContent = "That sounds awful!"

const msg4 = document.createElement('section')
msg4.className = "message"
msg4.textContent = "Yeah it's back to back out here!  I'll be there soon though."

const msg5 = document.createElement('section')
msg5.className = "message"
msg5.textContent = "Ok well drive safe and cya soon!"

// Put the sections on the article
fragment.appendChild(msg1)
fragment.appendChild(msg2)
fragment.appendChild(msg3)
fragment.appendChild(msg4)
fragment.appendChild(msg5)

console.log(fragment)

document.querySelector("#messages").appendChild(fragment)