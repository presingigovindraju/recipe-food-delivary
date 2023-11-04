document.addEventListener("DOMContentLoaded", function () {
    const recipes = [
        
        {
            "name": "Veggie Delight",
            "imageSrc": "https://source.unsplash.com/random?veggies",
            "time": "30 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "https://source.unsplash.com/random?chicken",
            "time": "45 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://source.unsplash.com/random?pizza",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.1
        },
        {
            "name": "Steak",
            "imageSrc": "https://source.unsplash.com/random?steak",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.7
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://source.unsplash.com/random?salmon",
            "time": "50 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://source.unsplash.com/random?pasta",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.0
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://source.unsplash.com/random?salad",
            "time": "20 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.9
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://source.unsplash.com/random?friedChicken",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "https://source.unsplash.com/random?risotto",
            "time": "45 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Burger",
            "imageSrc": "https://source.unsplash.com/random?burger",
            "time": "30 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://source.unsplash.com/random?paneerTikka",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.4
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://source.unsplash.com/random?ribs",
            "time": "70 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://source.unsplash.com/random?caesarSalad",
            "time": "25 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.8
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://source.unsplash.com/random?fishTacos",
            "time": "35 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://source.unsplash.com/random?chocolateCake",
            "time": "90 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        }
    ];

    const recipeContainer = document.getElementById("recipeContainer");
    const openDrawerButton = document.getElementById("openDrawerButton");
    const closeDrawerButton = document.getElementById("closeDrawerButton");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const nav = document.querySelector("nav");

    function openDrawer() {
        mobileDrawer.style.left = "0";
    }

    function closeDrawer() {
        mobileDrawer.style.left = "-80%"; 
    }

    openDrawerButton.addEventListener("click", openDrawer);

    closeDrawerButton.addEventListener("click", closeDrawer);

    function createRecipeCard(recipe) {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        
        recipeCard.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-details">
                <p class="recipe-type">${recipe.type === 'veg' ? 'Veg' : 'Non-Veg'}</p>
                <div class="recipe-name-rating">
                    <h1 class="recipe-name">${recipe.name}</h1>
                    <div class="recipe-rating">
                        <p><span class="star-icon">★</span> ${recipe.rating}</p>
                    </div>
                </div>
                <div class="recipe-time-action">
                <p class="recipe-time">${recipe.time}</p>
                <div class="recipe-actions">
                <i class="material-icons like-button">${recipe.isLiked ? "favorite" : "favorite_border"}</i>
                    <i class="material-icons chat">chat</i>
                </div>
                </div>
            </div>
        `;

        
        const likeButton = recipeCard.querySelector(".like-button");
        likeButton.addEventListener("click", () => {
            recipe.isLiked = !recipe.isLiked;
            likeButton.textContent = recipe.isLiked ? "favorite" : "favorite_border";
        });

        recipeContainer.appendChild(recipeCard);
    }

    
    function displayRecipes(recipesToDisplay) {
        recipeContainer.innerHTML = "";
        recipesToDisplay.forEach((recipe) => {
            createRecipeCard(recipe);
        });
    }

    
    displayRecipes(recipes);

    
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });

    
    const allRecipes = document.getElementById("AllRecipes");
    const vegRecipes = document.getElementById("VegRecipes");
    const nonVegRecipes = document.getElementById("NonVegRecipes");

    allRecipes.addEventListener("click", () => {
        displayRecipes(recipes);
    });

    vegRecipes.addEventListener("click", () => {
        const vegRecipes = recipes.filter((recipe) => recipe.type === "veg");
        displayRecipes(vegRecipes);
    });

    nonVegRecipes.addEventListener("click", () => {
        const nonVegRecipes = recipes.filter((recipe) => recipe.type === "non-veg");
        displayRecipes(nonVegRecipes);
    });

    
    const ratingFilterAbove = document.getElementById("ratingFilterAbove");
    const ratingFilterBelow = document.getElementById("ratingFilterBelow");

    function filterByRating(rating, isAbove) {
        const filteredRecipes = isAbove
            ? recipes.filter((recipe) => recipe.rating >= rating)
            : recipes.filter((recipe) => recipe.rating < rating);
        displayRecipes(filteredRecipes);
    }

    ratingFilterAbove.addEventListener("click", () => {
        filterByRating(4.0, true);
    });

    ratingFilterBelow.addEventListener("click", () => {
        filterByRating(4.0, false);
    });

    
    openDrawerButton.addEventListener("click", () => {
        mobileDrawer.style.display = "block";
    });

    closeDrawerButton.addEventListener("click", () => {
        mobileDrawer.style.display = "none";
    });

    
    function toggleMenuIcon() {
        if (window.innerWidth <= 786) {
            nav.style.display = "none"; 
            openDrawerButton.style.display = "block"; 
        } else {
            nav.style.display = "flex"; 
            openDrawerButton.style.display = "none"; 
            mobileDrawer.style.display = "none"; 
        }
    }

    
    toggleMenuIcon();
    window.addEventListener("resize", toggleMenuIcon);
});