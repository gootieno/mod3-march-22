// Create your event listeners here
window.addEventListener("DOMContentLoaded", () => {
  // PART 0
  //   alert("DOM LOADED");

  // PART 1
  const redInput = document.getElementById("red-input");
  const changeRed = (e) => {
    console.log("input event!");
    let value = e.target.value.trim().toLowerCase();
    if (value === "red") {
      redInput.style.backgroundColor = "red";
    } else {
      redInput.style.backgroundColor = "";
    }
  };

  //   redInput.addEventListener("input", changeRed);

  redInput.addEventListener("input", (e) => {
    console.log("input event!");
    let value = e.target.value.trim().toLowerCase();
    if (value === "red") {
      redInput.style.backgroundColor = "red";
    } else {
      redInput.style.backgroundColor = "";
    }
  });

  // PART 2
  const addItem = document.getElementById("add-item");
  const ul = document.querySelector("#part-2 > ul");

  addItem.addEventListener("click", addLi);

  function addLi() {
    const input = document.querySelector("#list-add");
    const value = input.value;
    const newLi = document.createElement("li");
    newLi.innerText = value;
    ul.appendChild(newLi);
    input.value = "";
  }

  // PART 3
  const colorSelect = document.getElementById("color-select");
  const changeColor = (e) => {
    console.log("change event!");
    const section = document.getElementById("part-3");
    section.style.backgroundColor = e.target.value;
  };

  colorSelect.addEventListener("change", changeColor);

  // PART 4
  const removeListeners = document.getElementById("remove-listeners");
  removeListeners.addEventListener("click", () => {
    console.log("fired");
    redInput.removeEventListener("input", (e) => {
      redInput.style.backgroundColor = "";
    });
    addItem.removeEventListener("click", addLi);
    colorSelect.removeEventListener("change", changeColor);
  });
});
