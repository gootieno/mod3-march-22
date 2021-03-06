// Making buttons interactive

// Add dog button
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    // URL of new dog image
    const url = data.message;
    // Get breed (Hint: Parse from URL)
    // const breed = url.split('/')[4];
    let breed = url.split("/");
    breed = breed[breed.length - 2];
    console.log("this is the url from breed ", breed);

    // const dog = `<li><figure><img src=${url}><figcaption>${breed}</figcaption></figure></li>`

    // Create element to inject
    const newDog = document.createElement("li");

    const newFigure = document.createElement("figure");

    newFigure.style.width = "200px";

    const newImg = document.createElement("img");
    console.log("new image ", newImg);
    newImg.src = url;
    // newImg.style.width = "200px";
    // const anotherImg = document.createElement("img");
    // console.log("new image with src", anotherImg);

    const newCaption = document.createElement("figcaption");
    newCaption.innerText = breed;

    newFigure.appendChild(newImg);
    newFigure.appendChild(newCaption);

    newDog.appendChild(newFigure);

    // // Inject element into correct location
    const ul = document.getElementsByTagName("ul")[0];
    ul.appendChild(newDog);
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

// Remove first dog button
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  // Select first dog
  const firstDog = document.querySelector("li");

  // Remove
  if (firstDog) {
    firstDog.remove();
  } else {
    console.log("No dogs left!! :(");
  }
});

// Remove last dog button
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  // Select last dog
  const allDogs = document.querySelectorAll("li");
  let lastDog;
  if (allDogs.length > 0) {
    lastDog = allDogs[allDogs.length - 1];
  }

  // Remove
  if (lastDog) {
    lastDog.remove();
  } else {
    console.log("No dogs left!! :(");
  }
});
