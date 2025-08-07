const recipes = [
    {
        id: 'lundi-lunch',
        day: 'Lundi',
        meal: 'Lunch',
        title: 'Salade de Poulet et Céleri sur Pain Tranché',
        prepTime: '10 minutes',
        cookTime: '0 minutes',
        portions: '3',
        ingredients: [
            '2 cannes de 156g de flocons de poulet',
            'Céleri coupé en morceaux (environ 1/4 tasse, coupé en dés fins)',
            'Mayonnaise (environ 50g ou 3 c. à soupe)',
            'Pain tranché blanc (6 tranches)',
            'Sel et poivre au goût'
        ],
        instructions: [
            "Égouttez la canne de flocons de poulet soigneusement.",
            "Dans un bol moyen, émiettez le poulet à l'aide d'une fourchette.",
            "Coupez le céleri en très petits dés et ajoutez-le au poulet.",
            "Incorporez la mayonnaise au mélange. Salez et poivrez au goût. Mélangez bien jusqu'à obtenir une consistance homogène.",
            "Tartinez généreusement la préparation sur les tranches de pain tranché blanc.",
            "Servez immédiatement."
        ],
        nutrition: {
            calories: '~300 kcal',
            proteins: '~15g',
            carbs: '~25g',
            fats: '~15g',
            fibers: '~2g',
            sodium: '~400 mg'
        }
    },
    {
        id: 'lundi-dinner',
        day: 'Lundi',
        meal: 'Dîner',
        title: 'Pâtes Penne Rigate à la Bolognaise',
        prepTime: '10 minutes',
        cookTime: '15 minutes',
        portions: '3',
        ingredients: [
            '200g de pâtes Penne Rigate non cuites',
            '1 canne de 400g de sauce bolognaise à la viande',
            'Fromage râpé mozzarella (environ 30g, optionnel)'
        ],
        instructions: [
            "Dans une grande casserole, portez à ébullition environ 2 litres d'eau salée.",
            "Ajoutez les pâtes Penne Rigate et faites cuire selon les instructions du paquet (généralement 10-12 minutes). Égouttez soigneusement.",
            "Pendant la cuisson des pâtes, versez la sauce bolognaise dans une casserole moyenne. Faites chauffer à feu moyen, en remuant de temps en temps.",
            "Une fois les pâtes égouttées, ajoutez-les directement dans la casserole de sauce bolognaise. Mélangez bien.",
            "Servez immédiatement. Si désiré, saupoudrez de fromage râpé mozzarella."
        ],
        nutrition: {
            calories: '~480 kcal',
            proteins: '~25g',
            carbs: '~60g',
            fats: '~15g',
            fibers: '~5g',
            sodium: '~700 mg'
        }
    },
    {
        id: 'mardi-lunch',
        day: 'Mardi',
        meal: 'Lunch',
        title: 'Sandwichs à la Viande Fumée (Smoke Meat)',
        prepTime: '5 minutes',
        cookTime: '5 minutes (optionnel)',
        portions: '3',
        ingredients: [
            '100g de Smoke Meat',
            'Pain tranché blanc (6 tranches)',
            'Mayonnaise (environ 15g, optionnel)',
            'Fromage fort petit QC (environ 30g, optionnel)'
        ],
        instructions: [
            "Si vous préférez la viande chaude, réchauffez le Smoke Meat dans une poêle à feu moyen ou au micro-ondes.",
            "Tartinez légèrement la mayonnaise sur les tranches de pain tranché blanc si désiré.",
            "Garnissez chaque sandwich de Smoke Meat. Vous pouvez ajouter des tranches de fromage.",
            "Coupez les sandwichs en deux et servez."
        ],
        nutrition: {
            calories: '~280 kcal',
            proteins: '~18g',
            carbs: '~25g',
            fats: '~10g',
            fibers: '~2g',
            sodium: '~600 mg'
        }
    },
    {
        id: 'mardi-dinner',
        day: 'Mardi',
        meal: 'Dîner',
        title: 'Courge Spaghetti avec Boulettes de Bœuf et Sauce Tomate',
        prepTime: '15 minutes',
        cookTime: '20-25 minutes',
        portions: '3',
        ingredients: [
            '1 courge spaghetti',
            '8 mini boulettes de bœuf',
            '1 canne de 680ml de sauce pour pâtes Primo',
            'Sel et poivre au goût',
            'Fromage râpé mozzarella (environ 30g, optionnel)'
        ],
        instructions: [
            "Coupez la courge spaghetti en deux. Évidez les graines. Faites cuire au four préchauffé à 190°C (375°F) pendant 20-25 minutes.",
            "Pendant ce temps, combinez les boulettes et la sauce dans une casserole. Faites chauffer à feu moyen-doux pendant environ 15-20 minutes.",
            "Une fois la courge cuite, utilisez une fourchette pour gratter la chair, créant des 'spaghetti'.",
            "Servez la courge spaghetti avec les boulettes et la sauce. Saupoudrez de fromage si désiré."
        ],
        nutrition: {
            calories: '~400 kcal',
            proteins: '~20g',
            carbs: '~45g',
            fats: '~15g',
            fibers: '~7g',
            sodium: '~800 mg'
        }
    },
    {
        id: 'mercredi-lunch',
        day: 'Mercredi',
        meal: 'Lunch',
        title: 'Pita Souvlaki au Poulet (Version Rapide)',
        prepTime: '10 minutes',
        cookTime: '5 minutes',
        portions: '3',
        ingredients: [
            '1 poulet BBQ cuit (environ 1/3)',
            '3 tortillas',
            '1/2 concombre coupé en dés',
            'Salade (quelques feuilles)',
            'Mayonnaise (environ 15g, optionnel)'
        ],
        instructions: [
            "Effilochez ou coupez en dés le poulet BBQ. Réchauffez-le si vous le souhaitez.",
            "Coupez le concombre en petits dés et la salade en lanières.",
            "Étalez les tortillas. Garnissez de poulet, de concombre et de salade.",
            "Ajoutez un filet de mayonnaise si désiré. Roulez fermement et servez."
        ],
        nutrition: {
            calories: '~350 kcal',
            proteins: '~25g',
            carbs: '~30g',
            fats: '~15g',
            fibers: '~3g',
            sodium: '~450 mg'
        }
    },
    {
        id: 'mercredi-dinner',
        day: 'Mercredi',
        meal: 'Dîner',
        title: 'Saucisses Cheddar et Bacon avec Knorr Sidekicks',
        prepTime: '5 minutes',
        cookTime: '15 minutes',
        portions: '3',
        ingredients: [
            '6 saucisses cheddar et bacon',
            '1 sachet Knorr Sidekicks Pâtes poulet et Cheddar',
            'Lait (selon instructions)',
            'Beurre (selon instructions)'
        ],
        instructions: [
            "Dans une poêle, faites cuire les saucisses à feu moyen-vif pendant environ 10-15 minutes.",
            "Pendant ce temps, suivez les instructions du sachet Knorr Sidekicks pour préparer les pâtes.",
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
    },
    {
        id: 'jeudi-lunch',
        day: 'Jeudi',
        meal: 'Lunch',
        title: 'Salade de Saumon en Conserve avec Concombre et Tomates',
        prepTime: '10 minutes',
        cookTime: '0 minutes',
        portions: '3',
        ingredients: [
            '1 canne de 213g de saumon rose en conserve',
            '1/2 concombre (coupé en dés)',
            '1/2 tomate (coupée en dés)',
            'Mayonnaise (environ 30g)',
            'Sel et poivre au goût'
        ],
        instructions: [
            "Égouttez le saumon. Dans un bol, émiettez le saumon avec une fourchette.",
            "Coupez le concombre et la tomate en dés. Ajoutez-les au saumon.",
            "Incorporez la mayonnaise. Salez et poivrez. Mélangez bien.",
            "Servez la salade de saumon sur des feuilles de salade ou avec des biscuits."
        ],
        nutrition: {
            calories: '~250 kcal',
            proteins: '~20g',
            carbs: '~10g',
            fats: '~15g',
            fibers: '~1g',
            sodium: '~450 mg'
        }
    },
    {
        id: 'jeudi-dinner',
        day: 'Jeudi',
        meal: 'Dîner',
        title: 'Pâtes Carbonara Crémeuses avec Knorr Sidekicks',
        prepTime: '5 minutes',
        cookTime: '15 minutes',
        portions: '3',
        ingredients: [
            '200g de pâtes coudes non cuites',
            '1 sachet Knorr Sidekicks Pâtes Carbonara crémeuse',
            'Lait (selon instructions)',
            'Beurre (selon instructions)',
            'Jambon cuit (environ 50g, optionnel)'
        ],
        instructions: [
            "Faites cuire les pâtes coudes selon les instructions. Égouttez.",
            "Pendant ce temps, préparez la sauce Knorr Sidekicks avec le lait et le beurre.",
            "Si vous utilisez du jambon, ajoutez-le à la sauce.",
            "Ajoutez les pâtes égouttées à la sauce et mélangez bien."
        ],
        nutrition: {
            calories: '~450 kcal',
            proteins: '~20g',
            carbs: '~55g',
            fats: '~18g',
            fibers: '~3g',
            sodium: '~800 mg'
        }
    },
    {
        id: 'vendredi-lunch',
        day: 'Vendredi',
        meal: 'Lunch',
        title: 'Tacos Croustillants au Bœuf Haché',
        prepTime: '15 minutes',
        cookTime: '10 minutes',
        portions: '3',
        ingredients: [
            '3 galettes de bœuf haché cuit',
            '5 coquilles à tacos croustillants',
            'Salade',
            'Fromage râpé mozzarella (environ 50g)',
            'Mayonnaise (environ 15g, optionnel)',
            '1/2 tomate (coupée en dés)',
            '1/2 concombre (coupé en dés)'
        ],
        instructions: [
            "Émiettez les galettes de bœuf et faites-les chauffer dans une poêle.",
            "Préparez les garnitures : salade, tomate et concombre.",
            "Réchauffez les coquilles à tacos au four.",
            "Assemblez les tacos avec le bœuf, les légumes et le fromage. Ajoutez de la mayonnaise si désiré."
        ],
        nutrition: {
            calories: '~380 kcal',
            proteins: '~22g',
            carbs: '~25g',
            fats: '~20g',
            fibers: '~2g',
            sodium: '~450 mg'
        }
    },
    {
        id: 'vendredi-dinner',
        day: 'Vendredi',
        meal: 'Dîner',
        title: 'Côtelettes de Porc avec Knorr Sidekicks Pâtes Beurre et Fines Herbes et Haricots Verts',
        prepTime: '10 minutes',
        cookTime: '20 minutes',
        portions: '3',
        ingredients: [
            '5 côtelettes de porc cuites (3 pour le repas)',
            '1 sachet Knorr Sidekicks Pâtes beurre et fines herbes',
            '1 canne de 398ml de haricot vert à la française',
            'Beurre (selon instructions)',
            'Sel et poivre au goût'
        ],
        instructions: [
            "Réchauffez les côtelettes de porc au four ou à la poêle.",
            "Préparez les pâtes Sidekicks en suivant les instructions du sachet.",
            "Égouttez et réchauffez les haricots verts.",
            "Servez une côtelette de porc avec une portion de pâtes et de haricots verts."
        ],
        nutrition: {
            calories: '~450 kcal',
            proteins: '~30g',
            carbs: '~35g',
            fats: '~20g',
            fibers: '~4g',
            sodium: '~700 mg'
        }
    },
    {
        id: 'samedi-lunch',
        day: 'Samedi',
        meal: 'Lunch',
        title: 'Pâtes Froides à la Salade de Poulet',
        prepTime: '15 minutes',
        cookTime: '10 minutes',
        portions: '3',
        ingredients: [
            '150g de pâtes coudes non cuites',
            '1 canne de 156g de flocons de poulet',
            'Mayonnaise (environ 50g)',
            '1 canne de 398ml de pois et carottes',
            'Sel et poivre au goût'
        ],
        instructions: [
            "Faites cuire les pâtes. Égouttez et rincez à l'eau froide.",
            "Égouttez le poulet et les pois/carottes.",
            "Dans un grand bol, mélangez les pâtes, le poulet, les pois/carottes et la mayonnaise.",
            "Salez et poivrez. Réfrigérez avant de servir."
        ],
        nutrition: {
            calories: '~380 kcal',
            proteins: '~18g',
            carbs: '~45g',
            fats: '~15g',
            fibers: '~5g',
            sodium: '~400 mg'
        }
    },
    {
        id: 'samedi-dinner',
        day: 'Samedi',
        meal: 'Dîner',
        title: 'Saucisses Italiennes Douces avec Penne Rigate et Sauce à la Viande',
        prepTime: '10 minutes',
        cookTime: '25 minutes',
        portions: '3',
        ingredients: [
            '6 saucisses italiennes douces crues',
            '200g de pâtes Penne Rigate non cuites',
            '1 canne de 680ml de sauce pour pâtes Primo',
            'Fromage râpé mozzarella (environ 30g, optionnel)'
        ],
        instructions: [
            "Faites cuire les saucisses. Une fois cuites, coupez-les en rondelles.",
            "Pendant ce temps, faites cuire les pâtes Penne Rigate. Égouttez.",
            "Réchauffez la sauce pour pâtes. Ajoutez les rondelles de saucisses.",
            "Servez les pâtes avec la sauce aux saucisses. Saupoudrez de fromage si désiré."
        ],
        nutrition: {
            calories: '~520 kcal',
            proteins: '~28g',
            carbs: '~60g',
            fats: '~20g',
            fibers: '~6g',
            sodium: '~800 mg'
        }
    },
    {
        id: 'dimanche-lunch',
        day: 'Dimanche',
        meal: 'Lunch',
        title: 'Salade Fraîche avec Poulet BBQ et Avocat',
        prepTime: '15 minutes',
        cookTime: '0 minutes',
        portions: '3',
        ingredients: [
            'Salade (environ 1/2 du reste)',
            'Bébé épinard (environ 1/2 du reste)',
            '1 poulet BBQ cuit (environ 1/3)',
            '2 avocats',
            '1 canne de 398ml de cœurs de palmier',
            'Huile d\'olive et vinaigre (optionnel)',
            'Sel et poivre au goût'
        ],
        instructions: [
            "Préparez la base de salade avec la salade et les bébés épinards.",
            "Effilochez ou coupez le poulet. Coupez les avocats et les cœurs de palmier.",
            "Ajoutez le poulet, l'avocat et les cœurs de palmier à la base de salade.",
            "Arrosez de vinaigrette (optionnelle) et servez."
        ],
        nutrition: {
            calories: '~400 kcal',
            proteins: '~25g',
            carbs: '~20g',
            fats: '~25g',
            fibers: '~7g',
            sodium: '~300 mg'
        }
    },
    {
        id: 'dimanche-dinner',
        day: 'Dimanche',
        meal: 'Dîner',
        title: 'Pizza Maison Rapide',
        prepTime: '15 minutes',
        cookTime: '15-20 minutes',
        portions: '3',
        ingredients: [
            '1 pâte à pizza avec sauce à faire soi-même',
            '1 canne de 213ml de sauce à pizza',
            'Pepperoni (environ 70g)',
            'Fromage râpé mozzarella (environ 100g)',
            '1/2 piment doux rouge (coupé en lanières fines)'
        ],
        instructions: [
            "Préchauffez le four. Étalez la pâte et la sauce à pizza.",
            "Garnissez avec le pepperoni, le piment et le fromage.",
            "Enfournez pendant 15 à 20 minutes, jusqu'à ce que la croûte soit dorée.",
            "Laissez refroidir quelques minutes avant de servir."
        ],
        nutrition: {
            calories: '~550 kcal',
            proteins: '~28g',
            carbs: '~50g',
            fats: '~25g',
            fibers: '~4g',
            sodium: '~900 mg'
        }
    }
];

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
