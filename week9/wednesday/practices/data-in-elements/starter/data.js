window.addEventListener("DOMContentLoaded", event => {
    console.log('domcontentloaded');
    const shoppingList = document.getElementById("shopping-list");
    document.getElementById("add")
        .addEventListener("click", e => {
            console.log('clicking');
            e.preventDefault();
            const name = document.getElementById("name");
            console.log(name);
            const type = document.getElementById("type");
            console.log(name.value, type.value);
            const li = document.createElement("li");
            li.innerText = name.value;
            li.dataset.type = type.value;
            console.log(li);
            // li.setAttribute("data-type", type.value);
            shoppingList.appendChild(li);

            if (li.dataset.type === 'drinks') {
                li.style.backgroundColor = 'red';
            }
            name.value = "";
            type.value = "drinks";
        })
})