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
