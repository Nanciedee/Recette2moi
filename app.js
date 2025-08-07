// On récupère le conteneur principal où les recettes seront affichées.
// Cet ID ('recipes-container') correspond à l'élément <main> de votre fichier HTML.
const recipesContainer = document.getElementById('recipes-container');

// Vérifions si la variable allRecipes existe et est un tableau non vide.
if (typeof allRecipes !== 'undefined' && allRecipes.length > 0) {

    // On parcourt chaque semaine dans le tableau allRecipes
    allRecipes.forEach(week => {
        // Crée un titre pour la semaine (ex: "Semaine 1")
        const weekTitle = document.createElement('h2');
        weekTitle.textContent = week.week;
        recipesContainer.appendChild(weekTitle);

        // On parcourt chaque jour de la semaine
        week.days.forEach(day => {
            // Crée un titre pour le jour (ex: "Lundi")
            const dayTitle = document.createElement('h3');
            dayTitle.textContent = day.day;
            recipesContainer.appendChild(dayTitle);

            // On crée un conteneur pour les repas de ce jour
            const mealsList = document.createElement('ul');
            mealsList.className = 'meals-list';
            recipesContainer.appendChild(mealsList);

            // On parcourt chaque repas (lunch, dîner) de la journée
            day.meals.forEach(recipe => {
                // Crée un élément de liste pour chaque recette
                const recipeItem = document.createElement('li');
                recipeItem.className = 'recipe-item';

                // Génère le HTML pour la recette
                recipeItem.innerHTML = `
                    <h4>${recipe.meal}: ${recipe.title}</h4>
                    <p><strong>Temps de préparation:</strong> ${recipe.prepTime}</p>
                    <p><strong>Temps de cuisson:</strong> ${recipe.cookTime}</p>
                    <p><strong>Portions:</strong> ${recipe.portions}</p>
                    
                    <h5>Ingrédients:</h5>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>

                    <h5>Instructions:</h5>
                    <ol>
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>

                    <details>
                        <summary>Informations nutritionnelles</summary>
                        <p><strong>Calories:</strong> ${recipe.nutrition.calories}</p>
                        <p><strong>Protéines:</strong> ${recipe.nutrition.proteins}</p>
                        <p><strong>Glucides:</strong> ${recipe.nutrition.carbs}</p>
                        <p><strong>Matières grasses:</strong> ${recipe.nutrition.fats}</p>
                        <p><strong>Fibres:</strong> ${recipe.nutrition.fibers}</p>
                        <p><strong>Sodium:</strong> ${recipe.nutrition.sodium}</p>
                    </details>
                `;

                // Ajoute la recette à la liste des repas
                mealsList.appendChild(recipeItem);
            });
        });
    });

} else {
    // Si le tableau est vide ou n'existe pas, affiche un message d'erreur.
    recipesContainer.innerHTML = '<p>Aucune recette n\'a été trouvée.</p>';
}
