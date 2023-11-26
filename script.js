document.querySelectorAll(".info-box").forEach((box) => {
  box.addEventListener("click", function () {
    switch (this.id) {
      case "donate-kit":
        openModal("donateModal");
        break;
      case "buy-receive-kit":
        openModal("buyReceiveModal");
        break;
      case "stock-near-me":
        openModal("stockModal");
        break;
      case "player-spotlight":
        openModal("playerSpotlightModal");
        break;
    }
  });
});

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Close the modal when the user clicks on <span> (x)
document.querySelectorAll(".close-button").forEach((button) => {
  button.addEventListener("click", function () {
    var modal = this.closest(".modal");
    if (modal) {
      modal.style.display = "none";
    }
  });
});

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
