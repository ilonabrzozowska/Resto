/*global document */

var menu = [
    {
        name: "Voluptate cillum fugiat.",
        ingredients: "Cheese, tomato, mushrooms, onions.",
        price: "$50"
    },
    {
        name: "Metus varius laoreet.",
        ingredients: "Chicken, mozzarella cheese, onions.",
        price: "$62"
    },
    {
        name: "Donec sodales magna.",
        ingredients: "Tuna, Sweetcorn, Cheese.",
        price: "$25"
    },
    {
        name: "Saugue velit cursus.",
        ingredients: "Pineapple, Minced Beef, Cheese.",
        price: "$30"
    },
    {
        name: "Arcu pede enim justo.",
        ingredients: "Tuna, Sweetcorn, Cheese.",
        price: "$45"
    },
    {
        name: "Cras dapibussemper nisi.",
        ingredients: "Pineapple, Minced Beef, Cheese.",
        price: "$32"
    },
    {
        name: "Quam semper libero.",
        ingredients: "Cheese, tomato, mushrooms, onions.",
        price: "$15"
    },
    {
        name: "Nam eget dui Etiam.",
        ingredients: "Chicken, mozzarella cheese, onions.",
        price: "$35"
    }
];

(function () {
    'use strict';
    var ul = document.createElement("ul"),
        i,
        count = menu.length,
        li,
        div,
        div2,
        dishTitle,
        dishIngredients,
        image,
        price,
        btn;

    document.body.appendChild(ul);

    for (i = 0; i < count; i += 1) {
        li = document.createElement("li");
        div = document.createElement("div");
        div2 = document.createElement("div");
        dishTitle = document.createElement("p");
        dishIngredients = document.createElement("p");
        image = document.createElement("img");
        price = document.createElement("p");
        btn = document.querySelector(".load-more-button");
        li.appendChild(div);
        div.appendChild(div2);
        div2.appendChild(dishTitle);
        div2.appendChild(dishIngredients);
        div.appendChild(image);
        div.appendChild(price);
        dishTitle.innerHTML = menu[i].name;
        dishTitle.className = "dish-title";
        dishIngredients.innerHTML = menu[i].ingredients;
        dishIngredients.className = "dish-ingredients";
        image.src = "img/line.png";
        price.innerHTML = menu[i].price;
        price.className = "dish-price";
        ul.appendChild(li);
    }
    document.querySelector(".menu").insertBefore(ul, btn);

}());