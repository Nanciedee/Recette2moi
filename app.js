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

    // par ce nouveau code :
allRecipes.forEach(week => {
    week.days.forEach(day => {
        day.meals.forEach(recipe => {
            recipesGrid.appendChild(createRecipeCard(recipe));
        });
    });
});

const allRecipes = [
    {
        week: 'Semaine 2',
        days: [
            {
                day: 'Lundi',
                meals: [
                    {
                        id: 'lundi-lunch-s2',
                        meal: 'Lunch',
                        title: 'Sandwichs au Jambon à l\'Ancienne et Fromage Gouda',
                        prepTime: '5 minutes',
                        cookTime: '0 minutes',
                        portions: '3',
                        ingredients: [
                            '150g de jambon cuit à l\'ancienne',
                            'Pain tranché blanc (6 tranches)',
                            'Fromage Gouda (environ 60g, tranché finement)',
                            'Mayonnaise (environ 15g ou 1 c. à soupe, optionnel)'
                        ],
                        instructions: [
                            "Tartinez légèrement de mayonnaise sur les tranches de pain si désiré.",
                            "Disposez le jambon et le fromage Gouda sur trois tranches de pain.",
                            "Recouvrez avec les trois autres tranches.",
                            "Coupez les sandwichs en deux et servez immédiatement."
                        ],
                        nutrition: {
                            calories: '~320 kcal',
                            proteins: '~20g',
                            carbs: '~25g',
                            fats: '~15g',
                            fibers: '~2g',
                            sodium: '~700 mg'
                        }
                    },
                    {
                        id: 'lundi-dinner-s2',
                        meal: 'Dîner',
                        title: 'Saucisses Italiennes Douces avec Pâtes Coudes et Sauce Alfredo Knorr',
                        prepTime: '10 minutes',
                        cookTime: '20 minutes',
                        portions: '3',
                        ingredients: [
                            '3 saucisses italiennes douces crues',
                            '200g de pâtes coudes non cuites',
                            '1 sachet Knorr Mélanges à Sauce pour Pâtes Alfredo (37g)',
                            'Lait (environ 1/2 tasse, selon instructions du sachet)',
                            'Beurre (environ 1 c. à soupe, selon instructions du sachet)',
                            'Fromage râpé mozzarella (environ 20g, optionnel)'
                        ],
                        instructions: [
                            "Dans une poêle, faites cuire les saucisses italiennes douces pendant 15-20 minutes, jusqu'à ce qu'elles soient cuites. Retirez-les et coupez-les en rondelles.",
                            "Pendant ce temps, faites cuire les pâtes coudes selon les instructions du paquet. Égouttez-les.",
                            "Dans une petite casserole, préparez la sauce Alfredo en fouettant le mélange Knorr avec le lait et le beurre. Portez à ébullition, puis laissez épaissir à feu doux.",
                            "Ajoutez les pâtes égouttées et les rondelles de saucisses à la sauce. Mélangez bien.",
                            "Servez chaud, garni de fromage râpé si désiré."
                        ],
                        nutrition: {
                            calories: '~520 kcal',
                            proteins: '~28g',
                            carbs: '~45g',
                            fats: '~25g',
                            fibers: '~3g',
                            sodium: '~850 mg'
                        }
                    }
                ]
            },
            {
                day: 'Mardi',
                meals: [
                    {
                        id: 'mardi-lunch-s2',
                        meal: 'Lunch',
                        title: 'Tortillas au Salami et Fromage Râpé',
                        prepTime: '5 minutes',
                        cookTime: '0 minutes',
                        portions: '3',
                        ingredients: [
                            '3 tortillas',
                            'Salami de Gênes (environ 80g, tranché)',
                            'Fromage râpé mozzarella (environ 50g)',
                            'Mayonnaise (environ 10g ou 1/2 c. à soupe, optionnel)'
                        ],
                        instructions: [
                            "Déposez chaque tortilla sur une surface plane.",
                            "Tartinez de mayonnaise sur chaque tortilla si désiré.",
                            "Disposez les tranches de salami et saupoudrez de fromage râpé.",
                            "Roulez chaque tortilla fermement.",
                            "Coupez en deux ou en petites rondelles et servez."
                        ],
                        nutrition: {
                            calories: '~300 kcal',
                            proteins: '~15g',
                            carbs: '~25g',
                            fats: '~18g',
                            fibers: '~1g',
                            sodium: '~600 mg'
                        }
                    },
                    {
                        id: 'mardi-dinner-s2',
                        meal: 'Dîner',
                        title: 'Saucisses Hygrade et Sauce à Poutine',
                        prepTime: '5 minutes',
                        cookTime: '10-15 minutes',
                        portions: '3',
                        ingredients: [
                            '6 saucisses Hygrade',
                            '1 canne de sauce à poutine'
                        ],
                        instructions: [
                            "Faites cuire les saucisses Hygrade dans une poêle à feu moyen pendant 10-15 minutes, en les tournant régulièrement.",
                            "Pendant ce temps, faites chauffer la sauce à poutine dans une petite casserole à feu doux.",
                            "Disposez les saucisses chaudes dans les assiettes et recouvrez-les généreusement de sauce à poutine chaude."
                        ],
                        nutrition: {
                            calories: '~350 kcal',
                            proteins: '~15g',
                            carbs: '~20g',
                            fats: '~25g',
                            fibers: '~1g',
                            sodium: '~900 mg'
                        }
                    }
                ]
            },
            {
                day: 'Mercredi',
                meals: [
                    {
                        id: 'mercredi-lunch-s2',
                        meal: 'Lunch',
                        title: 'Soupe Crème de Champignon avec Biscuits Soda',
                        prepTime: '5 minutes',
                        cookTime: '10 minutes',
                        portions: '3',
                        ingredients: [
                            '1 sachet de 71g de Knorr Crème de Champignon',
                            'Lait (environ 2 tasses, selon instructions du sachet)',
                            'Biscuits soda premium plus (10-15 biscuits)',
                            'Eau (environ 2 tasses, selon instructions du sachet)'
                        ],
                        instructions: [
                            "Dans une casserole, fouettez le contenu du sachet Knorr avec l'eau et le lait.",
                            "Portez à ébullition en remuant de temps en temps.",
                            "Réduisez le feu et laissez mijoter 5 minutes, jusqu'à ce que la soupe épaississe.",
                            "Servez chaud, accompagné des biscuits pour tremper."
                        ],
                        nutrition: {
                            calories: '~180 kcal',
                            proteins: '~5g',
                            carbs: '~20g',
                            fats: '~10g',
                            fibers: '~1g',
                            sodium: '~700 mg'
                        }
                    },
                    {
                        id: 'mercredi-dinner-s2',
                        meal: 'Dîner',
                        title: 'Pâtes Penne Rigate avec Sauce Ail Crémeux Knorr et Jambon Cuit',
                        prepTime: '10 minutes',
                        cookTime: '15 minutes',
                        portions: '3',
                        ingredients: [
                            '200g de pâtes Penne Rigate non cuites',
                            '1 sachet Knorr Mélanges à Sauce pour Pâtes Ail Crémeux (37g)',
                            'Jambon cuit (environ 40g, coupé en dés)',
                            'Lait (environ 1/2 tasse, selon instructions du sachet)',
                            'Beurre (environ 1 c. à soupe, selon instructions du sachet)'
                        ],
                        instructions: [
                            "Faites cuire les pâtes Penne Rigate selon les instructions du paquet. Égouttez-les.",
                            "Dans une petite casserole, préparez la sauce Ail Crémeux avec le lait et le beurre. Portez à ébullition, puis laissez épaissir à feu doux.",
                            "Ajoutez le jambon coupé en dés à la sauce et laissez chauffer 1-2 minutes.",
                            "Ajoutez les pâtes égouttées au mélange de sauce et de jambon. Mélangez bien.",
                            "Servez chaud."
                        ],
                        nutrition: {
                            calories: '~400 kcal',
                            proteins: '~18g',
                            carbs: '~50g',
                            fats: '~15g',
                            fibers: '~3g',
                            sodium: '~700 mg'
                        }
                    }
                ]
            },
            {
                day: 'Jeudi',
                meals: [
                    {
                        id: 'jeudi-lunch-s2',
                        meal: 'Lunch',
                        title: 'Salade de Saumon en Conserve avec Mayonnaise et Céleri',
                        prepTime: '10 minutes',
                        cookTime: '0 minutes',
                        portions: '3',
                        ingredients: [
                            '1 canne de 213g de saumon rose en conserve',
                            'Mayonnaise (environ 50g ou 3 c. à soupe)',
                            'Céleri coupé en morceaux (environ 1/4 tasse, coupé en dés fins)',
                            'Pain tranché blanc (6 tranches) OU Biscuits soda premium plus',
                            'Sel et poivre au goût'
                        ],
                        instructions: [
                            "Égouttez soigneusement le saumon. Dans un bol, émiettez-le à la fourchette.",
                            "Coupez le céleri en petits dés et ajoutez-le au saumon.",
                            "Incorporez la mayonnaise. Salez et poivrez. Mélangez bien.",
                            "Servez la salade de saumon sur des tranches de pain ou avec des biscuits soda."
                        ],
                        nutrition: {
                            calories: '~280 kcal',
                            proteins: '~20g',
                            carbs: '~10g',
                            fats: '~18g',
                            fibers: '~1g',
                            sodium: '~480 mg'
                        }
                    },
                    {
                        id: 'jeudi-dinner-s2',
                        meal: 'Dîner',
                        title: 'Saucisses Cheddar et Bacon avec Knorr Sidekicks Pâtes Beurre et Fines Herbes',
                        prepTime: '5 minutes',
                        cookTime: '15 minutes',
                        portions: '3',
                        ingredients: [
                            '6 saucisses cheddar et bacon',
                            '1 sachet Knorr Sidekicks Pâtes beurre et fines herbes',
                            'Lait (selon instructions du sachet)',
                            'Beurre (selon instructions du sachet)'
                        ],
                        instructions: [
                            "Faites cuire les saucisses dans une poêle à feu moyen-vif pendant 10-15 minutes, jusqu'à ce qu'elles soient dorées.",
                            "Pendant ce temps, préparez les pâtes Sidekicks en suivant les instructions du paquet.",
                            "Servez les saucisses chaudes avec les pâtes crémeuses."
                        ],
                        nutrition: {
                            calories: '~500 kcal',
                            proteins: '~25g',
                            carbs: '~40g',
                            fats: '~28g',
                            fibers: '~2g',
                            sodium: '~900 mg'
                        }
                    }
                ]
            },
            {
                day: 'Vendredi',
                meals: [
                    {
                        id: 'vendredi-lunch-s2',
                        meal: 'Lunch',
                        title: 'Soupe Crème de Légumes Knorr',
                        prepTime: '5 minutes',
                        cookTime: '10 minutes',
                        portions: '3',
                        ingredients: [
                            '1 sachet de 8g de Knorr Crème de Légumes',
                            'Lait (environ 2 tasses, selon instructions du sachet)',
                            'Biscuits soda premium plus (optionnel)',
                            'Eau (environ 2 tasses, selon instructions du sachet)'
                        ],
                        instructions: [
                            "Dans une casserole, fouettez le contenu du sachet Knorr avec l'eau et le lait.",
                            "Portez à ébullition, puis réduisez le feu et laissez mijoter 5 minutes.",
                            "Servez chaud, avec des biscuits soda sur le côté si désiré."
                        ],
                        nutrition: {
                            calories: '~150 kcal',
                            proteins: '~4g',
                            carbs: '~18g',
                            fats: '~8g',
                            fibers: '~1g',
                            sodium: '~650 mg'
                        }
                    },
                    {
                        id: 'vendredi-dinner-s2',
                        meal: 'Dîner',
                        title: 'Riz Dante avec Smoke Meat et Sauce à la Poutine',
                        prepTime: '10 minutes',
                        cookTime: '20 minutes',
                        portions: '3',
                        ingredients: [
                            '200g de riz Dante non cuit',
                            '100g de Smoke Meat',
                            '1 canne de sauce à poutine',
                            'Beurre (environ 10g, optionnel)'
                        ],
                        instructions: [
                            "Faites cuire le riz Dante selon les instructions du paquet (ratio 1:2 eau/riz).",
                            "Pendant ce temps, coupez et faites chauffer le Smoke Meat dans une poêle.",
                            "Dans une autre casserole, faites chauffer la sauce à poutine.",
                            "Dans chaque assiette, placez une portion de riz, recouvrez de Smoke Meat, puis nappez généreusement de sauce à poutine."
                        ],
                        nutrition: {
                            calories: '~450 kcal',
                            proteins: '~18g',
                            carbs: '~60g',
                            fats: '~15g',
                            fibers: '~2g',
                            sodium: '~1000 mg'
                        }
                    }
                ]
            },
            {
                day: 'Samedi',
                meals: [
                    {
                        id: 'samedi-lunch-s2',
                        meal: 'Lunch',
                        title: 'Soupe Crème de Poireaux Knorr',
                        prepTime: '5 minutes',
                        cookTime: '10 minutes',
                        portions: '3',
                        ingredients: [
                            '1 sachet de 71g de Knorr Crème de Poireaux',
                            'Lait (environ 2 tasses, selon instructions du sachet)',
                            'Biscuits soda premium plus (optionnel)',
                            'Eau (environ 2 tasses, selon instructions du sachet)'
                        ],
                        instructions: [
                            "Dans une casserole, fouettez le contenu du sachet Knorr avec l'eau et le lait.",
                            "Portez à ébullition, puis réduisez le feu et laissez mijoter 5 minutes.",
                            "Servez chaud, avec des biscuits soda sur le côté si désiré."
                        ],
                        nutrition: {
                            calories: '~160 kcal',
                            proteins: '~4g',
                            carbs: '~20g',
                            fats: '~9g',
                            fibers: '~1g',
                            sodium: '~700 mg'
                        }
                    },
                    {
                        id: 'samedi-dinner-s2',
                        meal: 'Dîner',
                        title: 'Saucisses Hygrade avec Knorr Sidekicks Pâtes au Poulet',
                        prepTime: '5 minutes',
                        cookTime: '15 minutes',
                        portions: '3',
                        ingredients: [
                            '6 saucisses Hygrade',
                            '1 sachet Knorr Sidekicks Pâtes au Poulet',
                            'Lait (selon instructions du sachet)',
                            'Beurre (selon instructions du sachet)'
                        ],
                        instructions: [
                            "Faites cuire les saucisses Hygrade dans une poêle à feu moyen-vif pendant 10-15 minutes, jusqu'à ce qu'elles soient dorées.",
                            "Pendant ce temps, préparez les pâtes Sidekicks en suivant les instructions du paquet.",
                            "Servez les saucisses chaudes avec les pâtes crémeuses."
                        ],
                        nutrition: {
                            calories: '~480 kcal',
                            proteins: '~22g',
                            carbs: '~45g',
                            fats: '~25g',
                            fibers: '~2g',
                            sodium: '~950 mg'
                        }
                    }
                ]
            },
            {
                day: 'Dimanche',
                meals: [
                    {
                        id: 'dimanche-lunch-s2',
                        meal: 'Lunch',
                        title: 'Pâtes Pennine avec Sauce Carbonara Knorr',
                        prepTime: '5 minutes',
                        cookTime: '15 minutes',
                        portions: '3',
                        ingredients: [
                            '200g de pâtes pennine non cuites',
                            '1 sachet Knorr Mélanges à Sauce pour Pâtes Carbonara (48g)',
                            'Lait (selon instructions du sachet)',
                            'Beurre (selon instructions du sachet)',
                            'Pepperoni (environ 20g, coupé en dés, optionnel)'
                        ],
                        instructions: [
                            "Faites cuire les pâtes pennine selon les instructions du paquet. Égouttez-les.",
                            "Dans une petite casserole, préparez la sauce Carbonara avec le lait et le beurre. Portez à ébullition, puis laissez épaissir à feu doux.",
                            "Si vous utilisez du pepperoni, coupez-le en dés et ajoutez-le à la sauce pour le réchauffer.",
                            "Ajoutez les pâtes égouttées à la sauce. Mélangez bien et servez chaud."
                        ],
                        nutrition: {
                            calories: '~450 kcal',
                            proteins: '~18g',
                            carbs: '~55g',
                            fats: '~18g',
                            fibers: '~3g',
                            sodium: '~800 mg'
                        }
                    },
                    {
                        id: 'dimanche-dinner-s2',
                        meal: 'Dîner',
                        title: 'Aubergine Grillée avec Fromage Mozzarella',
                        prepTime: '15 minutes',
                        cookTime: '20 minutes',
                        portions: '3',
                        ingredients: [
                            '1 aubergine',
                            'Fromage râpé mozzarella (environ 50g)',
                            'Riz Dante (environ 200g non cuit, en accompagnement)',
                            'Huile d\'olive (si disponible)',
                            'Sel et poivre au goût'
                        ],
                        instructions: [
                            "Faites cuire le riz Dante dans une casserole (ratio 1:2 eau/riz).",
                            "Pendant ce temps, lavez et coupez l'aubergine en tranches d'environ 1 cm d'épaisseur. Badigeonnez d'huile d'olive (si disponible) et assaisonnez.",
                            "Faites griller les tranches d'aubergine dans une poêle-grill ou une poêle antiadhésive à feu moyen-vif pendant 5-7 minutes par côté.",
                            "Pendant les dernières minutes de cuisson, garnissez les tranches de fromage râpé et couvrez pour le faire fondre.",
                            "Servez l'aubergine grillée et fondante avec une portion de riz."
                        ],
                        nutrition: {
                            calories: '~380 kcal',
                            proteins: '~15g',
                            carbs: '~50g',
                            fats: '~15g',
                            fibers: '~6g',
                            sodium: '~300 mg'
                        }
                    }
                ]
            }
        ]
    }
];
