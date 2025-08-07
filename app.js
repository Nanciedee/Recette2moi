document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('recipes-container');
    const modal = document.getElementById('recipe-modal');
    const modalContent = document.getElementById('recipe-details');
    const closeButton = document.querySelector('.close-button');

    // Fonction pour créer une carte de recette
    function createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <p><strong>${recipe.day}</strong> - ${recipe.meal}</p>
        `;
        card.addEventListener('click', () => showRecipeDetails(recipe));
        return card;
    }

    // Fonction pour afficher les détails de la recette dans la modale
    function showRecipeDetails(recipe) {
        modalContent.innerHTML = `
            <h2>${recipe.title}</h2>
            <p><strong>Jour :</strong> ${recipe.day}</p>
            <p><strong>Repas :</strong> ${recipe.meal}</p>
            <p><strong>Temps de préparation :</strong> ${recipe.prepTime}</p>
            <p><strong>Temps de cuisson :</strong> ${recipe.cookTime}</p>
            <p><strong>Portions :</strong> ${recipe.portions}</p>

            <h3>Ingrédients</h3>
            <ul>
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>

            <h3>Préparation</h3>
            <ol>
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>

            <h3>Valeurs nutritionnelles (approximatives)</h3>
            <ul>
                <li><strong>Calories :</strong> ${recipe.nutrition.calories}</li>
                <li><strong>Protéines :</strong> ${recipe.nutrition.proteins}</li>
                <li><strong>Glucides :</strong> ${recipe.nutrition.carbs}</li>
                <li><strong>Lipides :</strong> ${recipe.nutrition.fats}</li>
                <li><strong>Fibres :</strong> ${recipe.nutrition.fibers}</li>
                <li><strong>Sodium :</strong> ${recipe.nutrition.sodium}</li>
            </ul>
        `;
        modal.style.display = 'flex';
    }

    // Gestionnaires d'événements pour la modale
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Génération du contenu à partir de la variable allRecipes
    if (typeof allRecipes !== 'undefined' && allRecipes.length > 0) {
        allRecipes.forEach(week => {
            const weekSection = document.createElement('section');
            weekSection.classList.add('week-section');

            const weekTitle = document.createElement('h2');
            weekTitle.textContent = week.week;
            weekSection.appendChild(weekTitle);

            const recipesGrid = document.createElement('div');
            recipesGrid.classList.add('recipes-grid');
            
            week.days.forEach(day => {
                day.meals.forEach(recipe => {
                    recipesGrid.appendChild(createRecipeCard(recipe));
                });
            });

            weekSection.appendChild(recipesGrid);
            mainContainer.appendChild(weekSection);
        });
    } else {
        mainContainer.innerHTML = '<p>Aucune recette n\'a été trouvée.</p>';
    }
});
