document.addEventListener('DOMContentLoaded', () => {
    const recipesGrid = document.querySelector('.recipes-grid');
    const modal = document.getElementById('recipe-modal');
    const modalContent = document.getElementById('recipe-details');
    const closeButton = document.querySelector('.close-button');

    // Fonction pour créer une carte de recette dans la grille
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
            
            `;
        modal.style.display = 'flex'; // Afficher la modale
    }

    // Fonction pour fermer la modale
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fermer la modale si l'utilisateur clique en dehors
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Construire la grille de recettes
    recipes.forEach(recipe => {
        recipesGrid.appendChild(createRecipeCard(recipe));
    });
});
