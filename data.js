const allRecipes = [
    {
        week: 'Semaine 1',
        days: [
            {
                day: 'Lundi',
                meals: [
                    {
                        id: 'lundi-lunch-s1',
                        meal: 'Lunch',
                        title: 'Salade de Poulet et Céleri sur Pain Tranché',
                        prepTime: '10 minutes',
                        cookTime: '0 minutes',
                        portions: '3',
                        ingredients: [
                            'Poulet cuit déchiqueté (environ 250g)',
                            'Céleri coupé en dés (environ 1 branche)',
                            'Mayonnaise (environ 60g)',
                            'Pain tranché blanc (6 tranches)'
                        ],
                        instructions: [
                            "Mélangez le poulet déchiqueté, le céleri et la mayonnaise dans un bol.",
                            "Étalez la salade de poulet sur le pain tranché.",
                            "Coupez en sandwichs et servez."
                        ],
                        nutrition: {
                            calories: '~350 kcal',
                            proteins: '~20g',
                            carbs: '~30g',
                            fats: '~18g',
                            fibers: '~2g',
                            sodium: '~500 mg'
                        }
                    },
                    {
                        id: 'lundi-dinner-s1',
                        meal: 'Dîner',
                        title: 'Pâtes Penne Rigate à la Bolognaise',
                        prepTime: '10 minutes',
                        cookTime: '20 minutes',
                        portions: '3',
                        ingredients: [
                            'Pâtes Penne Rigate (environ 250g)',
                            'Viande hachée (environ 300g)',
                            'Sauce à spaghetti (1 canne de 680ml)'
                        ],
                        instructions: [
                            "Faites cuire les pâtes selon les instructions du paquet. Égouttez-les.",
                            "Dans une autre poêle, faites cuire la viande hachée jusqu'à ce qu'elle soit dorée. Égouttez le gras.",
                            "Ajoutez la sauce à spaghetti à la viande hachée et laissez mijoter.",
                            "Servez la sauce sur les pâtes."
                        ],
                        nutrition: {
                            calories: '~450 kcal',
                            proteins: '~25g',
                            carbs: '~50g',
                            fats: '~15g',
                            fibers: '~4g',
                            sodium: '~700 mg'
                        }
                    }
                ]
            }
        ]
    }
];
