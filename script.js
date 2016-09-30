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
    },
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

var displayMenu = function (start, end) {
    'use strict';
    var ul = document.createElement("ul"),
        i,
        li,
        div,
        div2,
        dishTitle,
        dishIngredients,
        image,
        price,
        btn;

    document.body.appendChild(ul);

    for (i = start; i < end; i += 1) {
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
};

(function () {
    'use strict';
    displayMenu(0, 8);
}());

var btn = document.querySelector(".load-more-button");

btn.addEventListener("click", function () {
    'use strict';
    var count = menu.length,
        menuDishes = document.querySelector(".menu"),
        ul = document.querySelector(".menu ul:last-of-type");
    if (btn.classList.contains("menu-full")) {
        btn.innerHTML = 'Load more <img src="img/arrow-down.png">';
        btn.classList.remove("menu-full");
        menuDishes.removeChild(ul);
    } else {
        displayMenu(8, count);
        btn.classList.add("menu-full");
        btn.innerHTML = 'Load less <img src="img/arrow-up.png">';
    }
});