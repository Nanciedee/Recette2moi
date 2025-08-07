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
            },
            {
                day: 'Mardi',
                meals: [
                    {
                        id: 'mardi-lunch-s1',
                        meal: 'Lunch',
                        title: 'Sandwichs à la Viande Fumée (Smoke Meat)',
                        prepTime: '5 minutes',
                        cookTime: '5 minutes',
                        portions: '3',
                        ingredients: [
                            'Viande fumée en tranches (environ 300g)',
                            'Pain de seigle (6 tranches)',
                            'Moutarde de Dijon (optionnel)',
                            'Cornichons à l\'aneth (optionnel)'
                        ],
                        instructions: [
                            "Réchauffez la viande fumée dans une poêle ou au micro-ondes.",
                            "Préparez les sandwichs avec la viande fumée et la moutarde de Dijon sur le pain de seigle.",
                            "Servez avec des cornichons."
                        ],
                        nutrition: {
                            calories: '~400 kcal',
                            proteins: '~30g',
                            carbs: '~35g',
                            fats: '~15g',
                            fibers: '~3g',
                            sodium: '~1200 mg'
                        }
                    },
                    {
                        id: 'mardi-dinner-s1',
                        meal: 'Dîner',
                        title: 'Courge Spaghetti avec Boulettes de Bœuf et Sauce Tomate',
                        prepTime: '10 minutes',
                        cookTime: '20 minutes',
                        portions: '3',
                        ingredients: [
                            '1 courge spaghetti moyenne',
                            'Boulettes de bœuf (environ 8)',
                            'Sauce tomate (1 canne de 680ml)'
                        ],
                        instructions: [
                            "Faites cuire la courge spaghetti au four ou au micro-ondes. Grattez l'intérieur pour en faire des 'spaghettis'.",
                            "Faites cuire les boulettes de bœuf dans la sauce tomate.",
                            "Servez la sauce avec les boulettes sur les 'spaghettis' de courge."
                        ],
                        nutrition: {
                            calories: '~300 kcal',
                            proteins: '~20g',
                            carbs: '~30g',
                            fats: '~12g',
                            fibers: '~6g',
                            sodium: '~600 mg'
                        }
                    }
                ]
            },
            {
                day: 'Mercredi',
                meals: [
                    {
                        id: 'mercredi-lunch-s1',
                        meal: 'Lunch',
                        title: 'Pita Souvlaki au Poulet (Version Rapide)',
                        prepTime: '10 minutes',
                        cookTime: '15 minutes',
                        portions: '3',
                        ingredients: [
                            'Poulet coupé en dés (environ 300g)',
                            'Mélange d\'épices à Souvlaki',
                            'Pains pitas (3)',
                            'Sauce Tzatziki (maison ou du commerce)',
                            'Tomates et concombres coupés en dés'
                        ],
                        instructions: [
                            "Faites mariner le poulet dans les épices à Souvlaki. Faites-le cuire dans une poêle.",
                            "Réchauffez les pitas. Garnissez-les avec le poulet, les légumes et la sauce Tzatziki."
                        ],
                        nutrition: {
                            calories: '~400 kcal',
                            proteins: '~30g',
                            carbs: '~40g',
                            fats: '~12g',
                            fibers: '~4g',
                            sodium: '~800 mg'
                        }
                    },
                    {
                        id: 'mercredi-dinner-s1',
                        meal: 'Dîner',
                        title: 'Saucisses Cheddar et Bacon avec Knorr Sidekicks',
                        prepTime: '10 minutes',
                        cookTime: '20 minutes',
                        portions: '3',
                        ingredients: [
                            '3 saucisses Cheddar et Bacon',
                            '1 paquet de Knorr Sidekicks au choix'
                        ],
                        instructions: [
                            "Faites cuire les saucisses dans une poêle. Coupez-les en rondelles.",
                            "Préparez les Knorr Sidekicks selon les instructions du paquet.",
                            "Mélangez les saucisses et les pâtes ensemble."
                        ],
                        nutrition: {
                            calories: '~500 kcal',
                            proteins: '~25g',
                            carbs: '~45g',
                            fats: '~28g',
                            fibers: '~3g',
                            sodium: '~950 mg'
                        }
                    }
                ]
            },
            {
                day: 'Jeudi',
                meals: [
                    {
                        id: 'jeudi-lunch-s1',
                        meal: 'Lunch',
                        title: 'Salade de Saumon en Conserve avec Concombre et Tomates',
                        prepTime: '10 minutes',
                        cookTime: '0 minutes',
                        portions: '3',
                        ingredients: [
                            '2 cannes de saumon en conserve',
                            '1/2 concombre, coupé en dés',
                            '2 tomates, coupées en dés',
                            'Mayonnaise (environ 40g)'
                        ],
                        instructions: [
                            "Égouttez le saumon et mélangez-le avec le concombre, les tomates et la mayonnaise.",
                            "Servez la salade de saumon sur des craquelins ou dans un sandwich."
                        ],
                        nutrition: {
                            calories: '~300 kcal',
                            proteins: '~20g',
                            carbs: '~10g',
                            fats: '~20g',
                            fibers: '~2g',
                            sodium: '~600 mg'
                        }
                    },
                    {
                        id: 'jeudi-dinner-s1',
                        meal: 'Dîner',
                        title: 'Pâtes Carbonara Crémeuses avec Knorr Sidekicks',
                        prepTime: '10 minutes',
                        cookTime: '15 minutes',
                        portions: '3',
                        ingredients: [
                            '1 paquet de Knorr Sidekicks Pâtes Carbonara',
                            'Bacon coupé en morceaux (environ 150g)',
                            'Crème à cuisson'
                        ],
                        instructions: [
                            "Faites cuire le bacon dans une poêle jusqu'à ce qu'il soit croustillant. Retirez l'excès de gras.",
                            "Préparez les pâtes Knorr Sidekicks selon les instructions du paquet, en utilisant de la crème à la place du lait si désiré.",
                            "Mélangez le bacon et les pâtes. Garnissez de parmesan et de poivre noir si vous le souhaitez."
                        ],
                        nutrition: {
                            calories: '~550 kcal',
                            proteins: '~25g',
                            carbs: '~50g',
                            fats: '~28g',
                            fibers: '~2g',
                            sodium: '~1100 mg'
                        }
                    }
                ]
            },
            {
                day: 'Vendredi',
                meals: [
                    {
                        id: 'vendredi-lunch-s1',
                        meal: 'Lunch',
                        title: 'Tacos Croustillants au Bœuf Haché',
                        prepTime: '15 minutes',
                        cookTime: '15 minutes',
                        portions: '3',
                        ingredients: [
                            'Viande hachée (environ 300g)',
                            'Assaisonnement à tacos',
                            'Coquilles à tacos',
                            'Laitue, tomates, oignons (pour garnir)'
                        ],
                        instructions: [
                            "Faites cuire la viande hachée et ajoutez l'assaisonnement à tacos.",
                            "Préparez les coquilles à tacos selon les instructions du paquet.",
                            "Garnissez les tacos avec la viande et les légumes."
                        ],
                        nutrition: {
                            calories: '~450 kcal',
                            proteins: '~25g',
                            carbs: '~35g',
                            fats: '~22g',
                            fibers: '~4g',
                            sodium: '~800 mg'
                        }
                    },
                    {
                        id: 'vendredi-dinner-s1',
                        meal: 'Dîner',
                        title: 'Côtelettes de Porc avec Knorr Sidekicks et Haricots Verts',
                        prepTime: '10 minutes',
                        cookTime: '20 minutes',
                        portions: '3',
                        ingredients: [
                            '3 côtelettes de porc',
                            '1 paquet de Knorr Sidekicks (Pâtes Beurre et Fines Herbes)',
                            'Haricots verts en conserve (1 canne de 398ml)'
                        ],
                        instructions: [
                            "Faites cuire les côtelettes de porc à la poêle ou au four.",
                            "Préparez les Knorr Sidekicks selon les instructions du paquet.",
                            "Faites chauffer les haricots verts.",
                            "Servez les côtelettes avec les pâtes et les haricots verts."
                        ],
                        nutrition: {
                            calories: '~500 kcal',
                            proteins: '~35g',
                            carbs: '~40g',
                            fats: '~22g',
                            fibers: '~5g',
                            sodium: '~900 mg'
                        }
                    }
                ]
            }
        ]
    },
    {
        week: 'Semaine 2',
        days: [
            {
                day: 'Lundi',
                meals: [
                    {
                        id: 'lundi-lunch-s2',
                        meal: 'Lunch',
                        title: 'Pâtes Froides à la Vinaigrette',
                        prepTime: '10 minutes',
                        cookTime: '15 minutes',
                        portions: '3',
                        ingredients: [
                            'Pâtes (environ 250g)',
                            'Vinaigrette italienne (100ml)',
                            'Légumes coupés en dés (concombre, poivron, tomate)',
                            'Olives noires'
                        ],
                        instructions: [
                            "Faites cuire les pâtes, égouttez et rincez à l'eau froide.",
                            "Mélangez les pâtes froides avec les légumes coupés, les olives et la vinaigrette."
                        ],
                        nutrition: {
                            calories: '~350 kcal',
                            proteins: '~8g',
                            carbs: '~60g',
                            fats: '~10g',
                            fibers: '~4g',
                            sodium: '~400 mg'
                        }
                    },
                    {
                        id: 'lundi-dinner-s2',
                        meal: 'Dîner',
                        title: 'Saucisses Italiennes avec Pâtes et Sauce Rosée',
                        prepTime: '10 minutes',
                        cookTime: '20 minutes',
                        portions: '3',
                        ingredients: [
                            '3 saucisses italiennes douces',
                            'Pâtes (environ 250g)',
                            'Sauce rosée (1 pot de 640ml)'
                        ],
                        instructions: [
                            "Faites cuire les saucisses italiennes.",
                            "Pendant ce temps, faites cuire les pâtes.",
                            "Faites chauffer la sauce rosée.",
                            "Servez les pâtes avec les saucisses et la sauce."
                        ],
                        nutrition: {
                            calories: '~500 kcal',
                            proteins: '~25g',
                            carbs: '~50g',
                            fats: '~22g',
                            fibers: '~3g',
                            sodium: '~900 mg'
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
                        title: 'Salade Fraîche avec Vinaigrette',
                        prepTime: '10 minutes',
                        cookTime: '0 minutes',
                        portions: '3',
                        ingredients: [
                            'Laitue romaine (1 sac)',
                            'Tomates cerises (une poignée)',
                            'Concombre coupé en dés',
                            'Feta émiettée (optionnel)',
                            'Vinaigrette'
                        ],
                        instructions: [
                            "Mélangez tous les ingrédients dans un grand bol. Servez avec la vinaigrette de votre choix."
                        ],
                        nutrition: {
                            calories: '~150 kcal',
                            proteins: '~5g',
                            carbs: '~10g',
                            fats: '~10g',
                            fibers: '~3g',
                            sodium: '~300 mg'
                        }
                    },
                    {
                        id: 'mardi-dinner-s2',
                        meal: 'Dîner',
                        title: 'Pizza Maison Rapide',
                        prepTime: '10 minutes',
                        cookTime: '15-20 minutes',
                        portions: '3',
                        ingredients: [
                            '2 pains naan ou 1 croûte à pizza pré-faite',
                            'Sauce à pizza',
                            'Fromage râpé (mozzarella)',
                            'Garnitures au choix (pepperoni, champignons, poivrons)'
                        ],
                        instructions: [
                            "Préchauffez le four. Étalez la sauce sur la croûte.",
                            "Ajoutez le fromage et les garnitures.",
                            "Faites cuire au four jusqu'à ce que le fromage soit fondu et doré."
                        ],
                        nutrition: {
                            calories: '~450 kcal',
                            proteins: '~25g',
                            carbs: '~40g',
                            fats: '~20g',
                            fibers: '~3g',
                            sodium: '~800 mg'
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
                        title: 'Sandwichs au Jambon et Fromage Grillé',
                        prepTime: '5 minutes',
                        cookTime: '5 minutes',
                        portions: '3',
                        ingredients: [
                            'Pain tranché (6 tranches)',
                            'Jambon tranché (environ 6 tranches)',
                            'Fromage en tranches (cheddar)',
                            'Beurre (pour griller)'
                        ],
                        instructions: [
                            "Beurrez les tranches de pain. Préparez les sandwichs avec jambon et fromage.",
                            "Faites griller dans une poêle à feu moyen jusqu'à ce que le fromage soit fondu et le pain doré."
                        ],
                        nutrition: {
                            calories: '~400 kcal',
                            proteins: '~20g',
                            carbs: '~30g',
                            fats: '~22g',
                            fibers: '~1g',
                            sodium: '~900 mg'
                        }
                    },
                    {
                        id: 'mercredi-dinner-s2',
                        meal: 'Dîner',
                        title: 'Riz Frit au Poulet (Version Rapide)',
                        prepTime: '10 minutes',
                        cookTime: '15 minutes',
                        portions: '3',
                        ingredients: [
                            'Riz cuit (environ 3 tasses)',
                            'Poulet cuit coupé en dés (environ 250g)',
                            'Légumes surgelés (petits pois, carottes)',
                            'Sauce soya (3 c. à soupe)',
                            'Œuf (1)'
                        ],
                        instructions: [
                            "Faites chauffer de l'huile dans un wok ou une grande poêle. Faites sauter le poulet et les légumes.",
                            "Ajoutez le riz cuit et la sauce soya. Mélangez bien.",
                            "Poussez le riz sur le côté et faites brouiller l'œuf. Mélangez le tout."
                        ],
                        nutrition: {
                            calories: '~450 kcal',
                            proteins: '~25g',
                            carbs: '~50g',
                            fats: '~15g',
                            fibers: '~4g',
                            sodium: '~1000 mg'
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
                        title: 'Soupe aux Tomates et Fromage Grillé',
                        prepTime: '5 minutes',
                        cookTime: '10 minutes',
                        portions: '3',
                        ingredients: [
                            'Soupe aux tomates en canne (1 canne)',
                            'Lait (selon les instructions)',
                            'Reste de sandwich au fromage grillé'
                        ],
                        instructions: [
                            "Préparez la soupe aux tomates selon les instructions du paquet.",
                            "Servez la soupe avec des morceaux de sandwich au fromage grillé."
                        ],
                        nutrition: {
                            calories: '~300 kcal',
                            proteins: '~12g',
                            carbs: '~40g',
                            fats: '~10g',
                            fibers: '~5g',
                            sodium: '~800 mg'
                        }
                    },
                    {
                        id: 'jeudi-dinner-s2',
                        meal: 'Dîner',
                        title: 'Bœuf Stroganoff',
                        prepTime: '10 minutes',
                        cookTime: '20 minutes',
                        portions: '3',
                        ingredients: [
                            'Bœuf en lanières (environ 300g)',
                            '1 canne de 284ml de soupe aux champignons',
                            'Crème sure (environ 100g)',
                            'Nouilles aux œufs (environ 250g)'
                        ],
                        instructions: [
                            "Faites cuire les nouilles selon les instructions du paquet.",
                            "Faites revenir les lanières de bœuf dans une poêle. Ajoutez la soupe aux champignons et la crème sure. Mélangez bien et laissez mijoter.",
                            "Servez la sauce sur les nouilles."
                        ],
                        nutrition: {
                            calories: '~500 kcal',
                            proteins: '~30g',
                            carbs: '~45g',
                            fats: '~25g',
                            fibers: '~2g',
                            sodium: '~850 mg'
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
                        title: 'Soupe aux Légumes et Croûtons',
                        prepTime: '5 minutes',
                        cookTime: '10 minutes',
                        portions: '3',
                        ingredients: [
                            '1 canne de soupe aux légumes',
                            'Eau',
                            'Croûtons'
                        ],
                        instructions: [
                            "Préparez la soupe aux légumes selon les instructions de la canne.",
                            "Servez chaud avec des croûtons."
                        ],
                        nutrition: {
                            calories: '~250 kcal',
                            proteins: '~8g',
                            carbs: '~40g',
                            fats: '~5g',
                            fibers: '~6g',
                            sodium: '~700 mg'
                        }
                    },
                    {
                        id: 'vendredi-dinner-s2',
                        meal: 'Dîner',
                        title: 'Pâté Chinois (Version Rapide)',
                        prepTime: '15 minutes',
                        cookTime: '25-30 minutes',
                        portions: '3',
                        ingredients: [
                            'Viande hachée (environ 300g)',
                            '1 canne de 398ml de blé d\'Inde en crème',
                            'Patates en flocons (environ 1 tasse)'
                        ],
                        instructions: [
                            "Faites cuire la viande hachée. Égouttez le gras. Étalez au fond d'un plat allant au four.",
                            "Ajoutez le blé d'Inde en crème sur la viande.",
                            "Préparez la purée de pommes de terre avec les flocons. Étalez sur le maïs. Enfournez à 180°C (350°F) jusqu'à ce que le dessus soit doré."
                        ],
                        nutrition: {
                            calories: '~550 kcal',
                            proteins: '~25g',
                            carbs: '~60g',
                            fats: '~22g',
                            fibers: '~7g',
                            sodium: '~900 mg'
                        }
                    }
                ]
            }
        ]
    },
    {
        week: 'Semaine 3',
        days: [
            {
                day: 'Lundi',
                meals: [
                    {
                        id: 'lundi-lunch-s3',
                        meal: 'Lunch',
                        title: 'Sandwich aux œufs',
                        prepTime: '10 minutes',
                        cookTime: '10 minutes',
                        portions: '3',
                        ingredients: [
                            '4 œufs durs',
                            'Mayonnaise',
                            'Pain tranché'
                        ],
                        instructions: [
                            "Écalez et hachez les œufs durs. Mélangez avec de la mayonnaise.",
                            "Assaisonnez au goût (sel, poivre, paprika).",
                            "Étalez le mélange sur le pain tranché et servez."
                        ],
                        nutrition: {
                            calories: '~350 kcal',
                            proteins: '~15g',
                            carbs: '~25g',
                            fats: '~20g',
                            fibers: '~1g',
                            sodium: '~400 mg'
                        }
                    },
                    {
                        id: 'lundi-dinner-s3',
                        meal: 'Dîner',
                        title: 'Saucisses Hot-Dog avec Macaroni au fromage',
                        prepTime: '5 minutes',
                        cookTime: '15 minutes',
                        portions: '3',
                        ingredients: [
                            '6 saucisses à hot-dog',
                            '1 boîte de 225g de macaroni au fromage Kraft Dinner',
                            'Lait et beurre (selon instructions du paquet)'
                        ],
                        instructions: [
                            "Faites cuire les saucisses à hot-dog. Coupez-les en rondelles.",
                            "Préparez le macaroni au fromage Kraft Dinner selon les instructions du paquet.",
                            "Mélangez les rondelles de saucisses au macaroni au fromage et servez chaud."
                        ],
                        nutrition: {
                            calories: '~500 kcal',
                            proteins: '~20g',
                            carbs: '~50g',
                            fats: '~25g',
                            fibers: '~2g',
                            sodium: '~900 mg'
                        }
                    }
                ]
            },
            {
                day: 'Mardi',
                meals: [
                    {
                        id: 'mardi-lunch-s3',
                        meal: 'Lunch',
                        title: 'Pâté à la viande (version rapide)',
                        prepTime: '5 minutes',
                        cookTime: '20-25 minutes',
                        portions: '3',
                        ingredients: [
                            '1 galette de bœuf haché',
                            '1 canne de 398ml de sauce à la viande',
                            '1 pâte à tarte (non cuite)'
                        ],
                        instructions: [
                            "Faites cuire la galette de bœuf haché et émiettez-la.",
                            "Mélangez la viande et la sauce. Versez dans la pâte à tarte.",
                            "Enfournez à 180°C (350°F) jusqu'à ce que la pâte soit dorée."
                        ],
                        nutrition: {
                            calories: '~450 kcal',
                            proteins: '~15g',
                            carbs: '~40g',
                            fats: '~25g',
                            fibers: '~2g',
                            sodium: '~800 mg'
                        }
                    },
                    {
                        id: 'mardi-dinner-s3',
                        meal: 'Dîner',
                        title: 'Pâté Chinois (Version Rapide) - Reste',
                        prepTime: '5 minutes',
                        cookTime: '10-15 minutes',
                        portions: '3',
                        ingredients: [
                            'Reste de pâté chinois'
                        ],
                        instructions: [
                            "Réchauffez le reste du pâté chinois au four ou au micro-ondes."
                        ],
                        nutrition: {
                            calories: '~550 kcal',
                            proteins: '~25g',
                            carbs: '~60g',
                            fats: '~22g',
                            fibers: '~7g',
                            sodium: '~900 mg'
                        }
                    }
                ]
            },
            {
                day: 'Mercredi',
                meals: [
                    {
                        id: 'mercredi-lunch-s3',
                        meal: 'Lunch',
                        title: 'Mini pizza sur pain naan - Reste',
                        prepTime: '5 minutes',
                        cookTime: '5 minutes',
                        portions: '3',
                        ingredients: [
                            'Reste de mini pizza'
                        ],
                        instructions: [
                            "Réchauffez les mini pizzas au four ou au micro-ondes."
                        ],
                        nutrition: {
                            calories: '~400 kcal',
                            proteins: '~20g',
                            carbs: '~40g',
                            fats: '~18g',
                            fibers: '~2g',
                            sodium: '~700 mg'
                        }
                    },
                    {
                        id: 'mercredi-dinner-s3',
                        meal: 'Dîner',
                        title: 'Soupe Minestrone et Croûtons',
                        prepTime: '5 minutes',
                        cookTime: '10 minutes',
                        portions: '3',
                        ingredients: [
                            '1 canne de 540ml de soupe Minestrone',
                            'Eau (1 canne)',
                            'Croûtons'
                        ],
                        instructions: [
                            "Préparez la soupe Minestrone selon les instructions de la canne.",
                            "Servez chaud avec des croûtons."
                        ],
                        nutrition: {
                            calories: '~200 kcal',
                            proteins: '~8g',
                            carbs: '~30g',
                            fats: '~5g',
                            fibers: '~5g',
                            sodium: '~750 mg'
                        }
                    }
                ]
            },
            {
                day: 'Jeudi',
                meals: [
                    {
                        id: 'jeudi-lunch-s3',
                        meal: 'Lunch',
                        title: 'Pâté Chinois (Version Rapide) - Reste',
                        prepTime: '5 minutes',
                        cookTime: '10-15 minutes',
                        portions: '3',
                        ingredients: [
                            'Reste de pâté chinois'
                        ],
                        instructions: [
                            "Réchauffez le reste du pâté chinois au four ou au micro-ondes."
                        ],
                        nutrition: {
                            calories: '~550 kcal',
                            proteins: '~25g',
                            carbs: '~60g',
                            fats: '~22g',
                            fibers: '~7g',
                            sodium: '~900 mg'
                        }
                    },
                    {
                        id: 'jeudi-dinner-s3',
                        meal: 'Dîner',
                        title: 'Pâté à la viande (version rapide) - Reste',
                        prepTime: '5 minutes',
                        cookTime: '10-15 minutes',
                        portions: '3',
                        ingredients: [
                            'Reste de pâté à la viande'
                        ],
                        instructions: [
                            "Réchauffez le reste du pâté à la viande au four ou au micro-ondes."
                        ],
                        nutrition: {
                            calories: '~450 kcal',
                            proteins: '~15g',
                            carbs: '~40g',
                            fats: '~25g',
                            fibers: '~2g',
                            sodium: '~800 mg'
                        }
                    }
                ]
            },
            {
                day: 'Vendredi',
                meals: [
                    {
                        id: 'vendredi-lunch-s3',
                        meal: 'Lunch',
                        title: 'Soupe Minestrone et Croûtons - Reste',
                        prepTime: '5 minutes',
                        cookTime: '10 minutes',
                        portions: '3',
                        ingredients: [
                            'Reste de soupe Minestrone',
                            'Croûtons'
                        ],
                        instructions: [
                            "Réchauffez la soupe Minestrone et servez avec des croûtons."
                        ],
                        nutrition: {
                            calories: '~200 kcal',
                            proteins: '~8g',
                            carbs: '~30g',
                            fats: '~5g',
                            fibers: '~5g',
                            sodium: '~750 mg'
                        }
                    },
                    {
                        id: 'vendredi-dinner-s3',
                        meal: 'Dîner',
                        title: 'Saucisses sur pain hot-dog',
                        prepTime: '5 minutes',
                        cookTime: '10 minutes',
                        portions: '3',
                        ingredients: [
                            '6 saucisses à hot-dog',
                            '6 pains hot-dog',
                            'Condiments (moutarde, ketchup, relish, etc.)'
                        ],
                        instructions: [
                            "Faites cuire les saucisses dans une poêle ou à l'eau bouillante.",
                            "Préparez les pains hot-dog. Assemblez et ajoutez les condiments."
                        ],
                        nutrition: {
                            calories: '~400 kcal',
                            proteins: '~15g',
                            carbs: '~35g',
                            fats: '~22g',
                            fibers: '~2g',
                            sodium: '~900 mg'
                        }
                    }
                ]
            }
        ]
    },
    {
        week: 'Semaine 4',
        days: [
            {
                day: 'Lundi',
                meals: [
                    {
                        id: 'lundi-lunch-s4',
                        meal: 'Lunch',
                        title: 'Tortillas au Jambon et Fromage',
                        prepTime: '5 minutes',
                        cookTime: '0 minutes',
                        portions: '3',
                        ingredients: [
                            '3 tortillas',
                            'Jambon cuit (environ 80g)',
                            'Fromage en tranches (environ 60g)',
                            'Mayonnaise (environ 10g, optionnel)'
                        ],
                        instructions: [
                            "Étalez les tortillas. Tartinez de mayonnaise si désiré.",
                            "Garnissez de jambon et de fromage.",
                            "Roulez fermement et coupez en deux avant de servir."
                        ],
                        nutrition: {
                            calories: '~300 kcal',
                            proteins: '~18g',
                            carbs: '~25g',
                            fats: '~15g',
                            fibers: '~1g',
                            sodium: '~700 mg'
                        }
                    },
                    {
                        id: 'lundi-dinner-s4',
                        meal: 'Dîner',
                        title: 'Saucisses Hygrade et Pâtes au Fromage',
                        prepTime: '5 minutes',
                        cookTime: '15 minutes',
                        portions: '3',
                        ingredients: [
                            '6 saucisses Hygrade',
                            '1 boîte de 225g de Macaroni au fromage Kraft Dinner',
                            'Lait et beurre (selon instructions du paquet)'
                        ],
                        instructions: [
                            "Faites cuire les saucisses Hygrade dans une poêle. Coupez-les en rondelles.",
                            "Préparez le macaroni au fromage Kraft Dinner selon les instructions du paquet.",
                            "Mélangez les rondelles de saucisses au macaroni au fromage et servez chaud."
                        ],
                        nutrition: {
                            calories: '~500 kcal',
                            proteins: '~20g',
                            carbs: '~50g',
                            fats: '~25g',
                            fibers: '~2g',
                            sodium: '~900 mg'
                        }
                    }
                ]
            },
            {
                day: 'Mardi',
                meals: [
                    {
                        id: 'mardi-lunch-s4',
                        meal: 'Lunch',
                        title: 'Riz Dante et Pois et Carottes',
                        prepTime: '5 minutes',
                        cookTime: '15 minutes',
                        portions: '3',
                        ingredients: [
                            '200g de riz Dante',
                            '1 canne de 398ml de pois et carottes',
                            'Beurre (optionnel)',
                            'Sel et poivre'
                        ],
                        instructions: [
                            "Faites cuire le riz Dante selon les instructions du paquet.",
                            "Égouttez les pois et carottes et faites-les chauffer. Ajoutez du beurre si désiré.",
                            "Servez le riz avec les légumes."
                        ],
                        nutrition: {
                            calories: '~350 kcal',
                            proteins: '~8g',
                            carbs: '~70g',
                            fats: '~5g',
                            fibers: '~6g',
                            sodium: '~250 mg'
                        }
                    },
                    {
                        id: 'mardi-dinner-s4',
                        meal: 'Dîner',
                        title: 'Spaghetti aux Boulettes',
                        prepTime: '10 minutes',
                        cookTime: '20 minutes',
                        portions: '3',
                        ingredients: [
                            '200g de spaghetti',
                            '8 mini boulettes de bœuf',
                            '1 canne de 680ml de sauce pour pâtes Primo'
                        ],
                        instructions: [
                            "Faites cuire les spaghettis. Égouttez.",
                            "Faites chauffer les boulettes dans la sauce pour pâtes Primo.",
                            "Servez les spaghettis avec les boulettes et la sauce."
                        ],
                        nutrition: {
                            calories: '~480 kcal',
                            proteins: '~25g',
                            carbs: '~60g',
                            fats: '~15g',
                            fibers: '~5g',
                            sodium: '~700 mg'
                        }
                    }
                ]
            },
            {
                day: 'Mercredi',
                meals: [
                    {
                        id: 'mercredi-lunch-s4',
                        meal: 'Lunch',
                        title: 'Salade de thon sur pain tranché',
                        prepTime: '10 minutes',
                        cookTime: '0 minutes',
                        portions: '3',
                        ingredients: [
                            '1 canne de 170g de thon en conserve',
                            'Mayonnaise (environ 40g)',
                            'Pain tranché blanc (6 tranches)',
                            'Céleri coupé en dés (environ 1 c. à soupe)'
                        ],
                        instructions: [
                            "Égouttez le thon et mélangez-le avec la mayonnaise et le céleri.",
                            "Étalez la salade de thon sur les tranches de pain."
                        ],
                        nutrition: {
                            calories: '~300 kcal',
                            proteins: '~18g',
                            carbs: '~25g',
                            fats: '~15g',
                            fibers: '~1g',
                            sodium: '~500 mg'
                        }
                    },
                    {
                        id: 'mercredi-dinner-s4',
                        meal: 'Dîner',
                        title: 'Saucisses italiennes douces avec Knorr Sidekicks Pâtes poulet et Cheddar',
                        prepTime: '10 minutes',
                        cookTime: '20 minutes',
                        portions: '3',
                        ingredients: [
                            '3 saucisses italiennes douces',
                            '1 sachet Knorr Sidekicks Pâtes poulet et Cheddar'
                        ],
                        instructions: [
                            "Faites cuire les saucisses et coupez-les en rondelles.",
                            "Préparez les pâtes Sidekicks.",
                            "Mélangez les saucisses et les pâtes ensemble."
                        ],
                        nutrition: {
                            calories: '~550 kcal',
                            proteins: '~28g',
                            carbs: '~45g',
                            fats: '~30g',
                            fibers: '~3g',
                            sodium: '~950 mg'
                        }
                    }
                ]
            },
            {
                day: 'Jeudi',
                meals: [
                    {
                        id: 'jeudi-lunch-s4',
                        meal: 'Lunch',
                        title: 'Pâté à la viande (version rapide)',
                        prepTime: '5 minutes',
                        cookTime: '20-25 minutes',
                        portions: '3',
                        ingredients: [
                            '1 galette de bœuf haché',
                            '1 canne de 398ml de sauce à la viande',
                            '1 pâte à tarte (non cuite)'
                        ],
                        instructions: [
                            "Faites cuire la galette de bœuf haché et émiettez-la.",
                            "Mélangez la viande et la sauce. Versez dans la pâte à tarte.",
                            "Enfournez à 180°C (350°F) jusqu'à ce que la pâte soit dorée."
                        ],
                        nutrition: {
                            calories: '~450 kcal',
                            proteins: '~15g',
                            carbs: '~40g',
                            fats: '~25g',
                            fibers: '~2g',
                            sodium: '~800 mg'
                        }
                    },
                    {
                        id: 'jeudi-dinner-s4',
                        meal: 'Dîner',
                        title: 'Pâté Chinois (Version Rapide) - Reste',
                        prepTime: '5 minutes',
                        cookTime: '10-15 minutes',
                        portions: '3',
                        ingredients: [
                            'Reste de pâté chinois'
                        ],
                        instructions: [
                            "Réchauffez le reste du pâté chinois au four ou au micro-ondes."
                        ],
                        nutrition: {
                            calories: '~450 kcal',
                            proteins: '~20g',
                            carbs: '~50g',
                            fats: '~18g',
                            fibers: '~6g',
                            sodium: '~650 mg'
                        }
                    }
                ]
            },
            {
                day: 'Vendredi',
                meals: [
                    {
                        id: 'vendredi-lunch-s4',
                        meal: 'Lunch',
                        title: 'Mini pizza sur pain naan - Reste',
                        prepTime: '5 minutes',
                        cookTime: '5 minutes',
                        portions: '3',
                        ingredients: [
                            'Reste de mini pizza'
                        ],
                        instructions: [
                            "Réchauffez les mini pizzas au four ou au micro-ondes."
                        ],
                        nutrition: {
                            calories: '~400 kcal',
                            proteins: '~20g',
                            carbs: '~40g',
                            fats: '~18g',
                            fibers: '~2g',
                            sodium: '~700 mg'
                        }
                    },
                    {
                        id: 'vendredi-dinner-s4',
                        meal: 'Dîner',
                        title: 'Soupe Minestrone et Croûtons',
                        prepTime: '5 minutes',
                        cookTime: '10 minutes',
                        portions: '3',
                        ingredients: [
                            '1 canne de 540ml de soupe Minestrone',
                            'Eau (1 canne)',
                            'Croûtons'
                        ],
                        instructions: [
                            "Préparez la soupe Minestrone selon les instructions de la canne.",
                            "Servez chaud avec des croûtons."
                        ],
                        nutrition: {
                            calories: '~200 kcal',
                            proteins: '~8g',
                            carbs: '~30g',
                            fats: '~5g',
                            fibers: '~5g',
                            sodium: '~750 mg'
                        }
                    }
                ]
            }
        ]
    }
];
