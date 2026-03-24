const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const meals = [
  {
    title: "Dinner",
    calories: "★ 535",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=500&q=80",
    featured: false
  },
  {
    title: "Brunch",
    calories: "★ 450",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=500&q=80",
    featured: true,
    details: "Calories<br>Fat - 30gm<br>Protein - 50gm<br>Carbs - 200gm"
  },
  {
    title: "Breakfast",
    calories: "★ 634",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=80",
    featured: false
  },
  {
    title: "Lunch",
    calories: "★ 634",
    image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=500&q=80",
    featured: false
  }
];

const mealList = document.getElementById("mealList");
const prevMeal = document.getElementById("prevMeal");
const nextMeal = document.getElementById("nextMeal");

let startIndex = 0;

function renderMeals() {
  mealList.innerHTML = "";

  for (let i = 0; i < meals.length; i++) {
    const meal = meals[(startIndex + i) % meals.length];
    const mealCard = document.createElement("div");
    mealCard.className = meal.featured ? "meal-item meal-featured" : "meal-item";

    mealCard.innerHTML = `
      <img src="${meal.image}" alt="${meal.title}" />
      <h4>${meal.title}</h4>
      <small>${meal.calories}</small>
      ${meal.featured && meal.details ? `<p>${meal.details}</p>` : ""}
    `;

    mealList.appendChild(mealCard);
  }
}

prevMeal.addEventListener("click", () => {
  startIndex = (startIndex - 1 + meals.length) % meals.length;
  renderMeals();
});

nextMeal.addEventListener("click", () => {
  startIndex = (startIndex + 1) % meals.length;
  renderMeals();
});

renderMeals();