let likeCount = 0;
let copyCount = 0;
let coins = 100;

const likeDisplay = document.getElementById("likeCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount"); // inside header pill
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistory");

// Handle Like Button
document.querySelectorAll(".likeBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    likeCount++;
    likeDisplay.textContent = likeCount;
  });
});

// Handle Copy Button (inside cards)
document.querySelectorAll(".copyBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.dataset.number;
    navigator.clipboard.writeText(number);

    copyCount++;
    copyDisplay.textContent = copyCount; // update header pill
  });
});

// Handle Call Button
document.querySelectorAll(".callBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (coins >= 20) {
      coins -= 20;
      coinDisplay.textContent = coins;

      const name = btn.dataset.name;
      const number = btn.dataset.number;
      const time = new Date().toLocaleTimeString();

      // Show alert (customize text yourself)
      alert(`Calling ${name} at ${number}`);

      // Save to history
      const li = document.createElement("li");
      li.textContent = `${name} (${number}) - ${time}`;
      historyList.prepend(li);

    } else {
      alert("Not enough coins to make a call!");
    }
  });
});

// Clear History
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
