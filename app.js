document.addEventListener('DOMContentLoaded', () => {
    // Supposons que le fichier JSON est disponible via une API ou un script
    const recipesData = [
        {
            week: 'Semaine 1',
            days: [
                {
                    day: 'Lundi',
                    meals: [
                        {
                            id: 'lundi-lunch-s1',
                            day: 'Lundi',
                            meal: 'Déjeuner',
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
                            id: 'lundi-dinner-s1',
                            day: 'Lundi',
                            meal: 'Souper',
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
                    day: 'Mardi',
                    meals: [
                        {
                            id: 'mardi-lunch-s1',
                            day: 'Mardi',
                            meal: 'Déjeuner',
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
                            id: 'mardi-dinner-s1',
                            day: 'Mardi',
                            meal: 'Souper',
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
                    day: 'Mercredi',
                    meals: [
                        {
                            id: 'mercredi-lunch-s1',
                            day: 'Mercredi',
                            meal: 'Déjeuner',
                            title: 'Pâté Chinois (Version Rapide)',
                            prepTime: '5 minutes',
                            cookTime: '20 minutes',
                            portions: '3',
                            ingredients: [
                                '1 canne de 398ml de maïs en crème',
                                '1 galette de boeuf haché',
                                'Pommes de terre en flocons (environ 1 tasse)'
                            ],
                            instructions: [
                                "Faites cuire la galette de boeuf haché et émiettez-la.",
                                "Mélangez le boeuf haché avec le maïs en crème.",
                                "Préparez la purée de pommes de terre en flocons et étalez-la sur le mélange. Faites cuire au four 10-15 minutes."
                            ],
                            nutrition: {
                                calories: '~450 kcal',
                                proteins: '~20g',
                                carbs: '~50g',
                                fats: '~18g',
                                fibers: '~6g',
                                sodium: '~650 mg'
                            }
                        },
                        {
                            id: 'mercredi-dinner-s1',
                            day: 'Mercredi',
                            meal: 'Souper',
                            title: 'Mini Pizza sur pain naan',
                            prepTime: '5 minutes',
                            cookTime: '5 minutes',
                            portions: '3',
                            ingredients: [
                                '3 pains naan (mini)',
                                'Sauce à pizza',
                                'Mozzarella râpée',
                                'Pepperoni (optionnel)'
                            ],
                            instructions: [
                                "Étalez la sauce et la mozzarella sur les pains naan.",
                                "Ajoutez du pepperoni.",
                                "Enfournez à 200°C (400°F) pendant 5 minutes ou jusqu'à ce que le fromage soit fondu."
                            ],
                            nutrition: {
                                calories: '~400 kcal',
                                proteins: '~20g',
                                carbs: '~40g',
                                fats: '~18g',
                                fibers: '~2g',
                                sodium: '~700 mg'
                            }
                        }
                    ]
                },
                {
                    day: 'Jeudi',
                    meals: [
                        {
                            id: 'jeudi-lunch-s1',
                            day: 'Jeudi',
                            meal: 'Déjeuner',
                            title: 'Restes de Mini Pizza sur pain naan',
                            prepTime: '5 minutes',
                            cookTime: '5 minutes',
                            portions: '3',
                            ingredients: [
                                'Restes de mini pizza'
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
                            id: 'jeudi-dinner-s1',
                            day: 'Jeudi',
                            meal: 'Souper',
                            title: 'Bœuf haché avec Ketchup et Pommes de Terre en dés (restes)',
                            prepTime: '0 minutes',
                            cookTime: '10 minutes',
                            portions: '3',
                            ingredients: [
                                'Restes de bœuf haché avec ketchup et pommes de terre'
                            ],
                            instructions: [
                                "Réchauffez le bœuf haché et les pommes de terre au four ou à la poêle."
                            ],
                            nutrition: {
                                calories: '~500 kcal',
                                proteins: '~30g',
                                carbs: '~45g',
                                fats: '~20g',
                                fibers: '~5g',
                                sodium: '~700 mg'
                            }
                        }
                    ]
                },
                {
                    day: 'Vendredi',
                    meals: [
                        {
                            id: 'vendredi-lunch-s1',
                            day: 'Vendredi',
                            meal: 'Déjeuner',
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
                        },
                        {
                            id: 'vendredi-dinner-s1',
                            day: 'Vendredi',
                            meal: 'Souper',
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
                            day: 'Lundi',
                            meal: 'Déjeuner',
                            title: 'Restes de Quiche',
                            prepTime: '0 minutes',
                            cookTime: '10 minutes',
                            portions: '3',
                            ingredients: [
                                'Restes de quiche aux légumes et fromage'
                            ],
                            instructions: [
                                "Réchauffez la quiche au four ou au micro-ondes. Servez chaud."
                            ],
                            nutrition: {
                                calories: '~400 kcal',
                                proteins: '~15g',
                                carbs: '~30g',
                                fats: '~25g',
                                fibers: '~2g',
                                sodium: '~600 mg'
                            }
                        },
                        {
                            id: 'lundi-dinner-s2',
                            day: 'Lundi',
                            meal: 'Souper',
                            title: 'Bœuf Haché avec Ketchup et Pommes de Terre en dés',
                            prepTime: '5 minutes',
                            cookTime: '20 minutes',
                            portions: '3',
                            ingredients: [
                                '450g de boeuf haché',
                                '3-4 pommes de terre',
                                'Ketchup (environ 60g)',
                            ],
                            instructions: [
                                "Faites cuire et émiettez le boeuf haché dans une poêle. Assaisonnez et ajoutez le ketchup à la fin.",
                                "Coupez les pommes de terre en dés et faites-les rôtir ou frire.",
                                "Servez le boeuf haché sur les pommes de terre."
                            ],
                            nutrition: {
                                calories: '~500 kcal',
                                proteins: '~30g',
                                carbs: '~45g',
                                fats: '~20g',
                                fibers: '~5g',
                                sodium: '~700 mg'
                            }
                        }
                    ]
                },
                {
                    day: 'Mardi',
                    meals: [
                        {
                            id: 'mardi-lunch-s2',
                            day: 'Mardi',
                            meal: 'Déjeuner',
                            title: 'Spaghetti aux Boulettes (restes)',
                            prepTime: '0 minutes',
                            cookTime: '10 minutes',
                            portions: '3',
                            ingredients: [
                                'Restes de spaghetti aux boulettes'
                            ],
                            instructions: [
                                "Réchauffez les restes de spaghetti au micro-ondes ou dans une casserole sur la cuisinière."
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
                            id: 'mardi-dinner-s2',
                            day: 'Mardi',
                            meal: 'Souper',
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
                    day: 'Mercredi',
                    meals: [
                        {
                            id: 'mercredi-lunch-s2',
                            day: 'Mercredi',
                            meal: 'Déjeuner',
                            title: 'Pâté à la viande (version rapide) - Reste',
                            prepTime: '5 minutes',
                            cookTime: '20-25 minutes',
                            portions: '3',
                            ingredients: [
                                '1 galette de boeuf haché',
                                '1 canne de 398ml de sauce à la viande',
                                '1 pâte à tarte (non cuite)'
                            ],
                            instructions: [
                                "Faites cuire la galette de boeuf haché et émiettez-la.",
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
                            id: 'mercredi-dinner-s2',
                            day: 'Mercredi',
                            meal: 'Souper',
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
                            id: 'jeudi-lunch-s2',
                            day: 'Jeudi',
                            meal: 'Déjeuner',
                            title: 'Pâté Chinois (Version Rapide)',
                            prepTime: '5 minutes',
                            cookTime: '20 minutes',
                            portions: '3',
                            ingredients: [
                                '1 canne de 398ml de maïs en crème',
                                '1 galette de boeuf haché',
                                'Pommes de terre en flocons (environ 1 tasse)'
                            ],
                            instructions: [
                                "Faites cuire la galette de boeuf haché et émiettez-la.",
                                "Mélangez le boeuf haché avec le maïs en crème.",
                                "Préparez la purée de pommes de terre en flocons et étalez-la sur le mélange. Faites cuire au four 10-15 minutes."
                            ],
                            nutrition: {
                                calories: '~450 kcal',
                                proteins: '~20g',
                                carbs: '~50g',
                                fats: '~18g',
                                fibers: '~6g',
                                sodium: '~650 mg'
                            }
                        },
                        {
                            id: 'jeudi-dinner-s2',
                            day: 'Jeudi',
                            meal: 'Souper',
                            title: 'Mini Pizza sur pain naan',
                            prepTime: '5 minutes',
                            cookTime: '5 minutes',
                            portions: '3',
                            ingredients: [
                                '3 pains naan (mini)',
                                'Sauce à pizza',
                                'Mozzarella râpée',
                                'Pepperoni (optionnel)'
                            ],
                            instructions: [
                                "Étalez la sauce et la mozzarella sur les pains naan.",
                                "Ajoutez du pepperoni.",
                                "Enfournez à 200°C (400°F) pendant 5 minutes ou jusqu'à ce que le fromage soit fondu."
                            ],
                            nutrition: {
                                calories: '~400 kcal',
                                proteins: '~20g',
                                carbs: '~40g',
                                fats: '~18g',
                                fibers: '~2g',
                                sodium: '~700 mg'
                            }
                        }
                    ]
                },
                {
                    day: 'Vendredi',
                    meals: [
                        {
                            id: 'vendredi-lunch-s2',
                            day: 'Vendredi',
                            meal: 'Déjeuner',
                            title: 'Restes de mini pizza sur pain naan',
                            prepTime: '0 minutes',
                            cookTime: '5 minutes',
                            portions: '3',
                            ingredients: [
                                'Restes de mini pizza'
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
                            id: 'vendredi-dinner-s2',
                            day: 'Vendredi',
                            meal: 'Souper',
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
                            day: 'Lundi',
                            meal: 'Déjeuner',
                            title: 'Restes de Saucisses italiennes',
                            prepTime: '0 minutes',
                            cookTime: '10 minutes',
                            portions: '3',
                            ingredients: [
                                'Restes de saucisses italiennes'
                            ],
                            instructions: [
                                "Réchauffez les saucisses et les pâtes au micro-ondes ou à la poêle."
                            ],
                            nutrition: {
                                calories: '~550 kcal',
                                proteins: '~28g',
                                carbs: '~45g',
                                fats: '~30g',
                                fibers: '~3g',
                                sodium: '~950 mg'
                            }
                        },
                        {
                            id: 'lundi-dinner-s3',
                            day: 'Lundi',
                            meal: 'Souper',
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
                    day: 'Mardi',
                    meals: [
                        {
                            id: 'mardi-lunch-s3',
                            day: 'Mardi',
                            meal: 'Déjeuner',
                            title: 'Reste de soupe Minestrone',
                            prepTime: '0 minutes',
                            cookTime: '10 minutes',
                            portions: '3',
                            ingredients: [
                                'Reste de soupe Minestrone',
                                'Croûtons'
                            ],
                            instructions: [
                                "Réchauffez la soupe et ajoutez des croûtons avant de servir."
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
                            id: 'mardi-dinner-s3',
                            day: 'Mardi',
                            meal: 'Souper',
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
                        }
                    ]
                },
                {
                    day: 'Mercredi',
                    meals: [
                        {
                            id: 'mercredi-lunch-s3',
                            day: 'Mercredi',
                            meal: 'Déjeuner',
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
                            id: 'mercredi-dinner-s3',
                            day: 'Mercredi',
                            meal: 'Souper',
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
                    day: 'Jeudi',
                    meals: [
                        {
                            id: 'jeudi-lunch-s3',
                            day: 'Jeudi',
                            meal: 'Déjeuner',
                            title: 'Restes de Quiche aux légumes et fromage',
                            prepTime: '0 minutes',
                            cookTime: '10 minutes',
                            portions: '3',
                            ingredients: [
                                'Restes de quiche'
                            ],
                            instructions: [
                                "Réchauffez la quiche au four ou au micro-ondes. Servez chaud."
                            ],
                            nutrition: {
                                calories: '~400 kcal',
                                proteins: '~15g',
                                carbs: '~30g',
                                fats: '~25g',
                                fibers: '~2g',
                                sodium: '~600 mg'
                            }
                        },
                        {
                            id: 'jeudi-dinner-s3',
                            day: 'Jeudi',
                            meal: 'Souper',
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
                    day: 'Vendredi',
                    meals: [
                        {
                            id: 'vendredi-lunch-s3',
                            day: 'Vendredi',
                            meal: 'Déjeuner',
                            title: 'Restes de pâté à la viande',
                            prepTime: '0 minutes',
                            cookTime: '10 minutes',
                            portions: '3',
                            ingredients: [
                                'Reste de pâté à la viande'
                            ],
                            instructions: [
                                "Réchauffez le pâté au four ou au micro-ondes."
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
                            id: 'vendredi-dinner-s3',
                            day: 'Vendredi',
                            meal: 'Souper',
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
                            day: 'Lundi',
                            meal: 'Déjeuner',
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
                            day: 'Lundi',
                            meal: 'Souper',
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
                            day: 'Mardi',
                            meal: 'Déjeuner',
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
                            day: 'Mardi',
                            meal: 'Souper',
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
                            day: 'Mercredi',
                            meal: 'Déjeuner',
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
                            day: 'Mercredi',
                            meal: 'Souper',
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
                            day: 'Jeudi',
                            meal: 'Déjeuner',
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
                            day: 'Jeudi',
                            meal: 'Souper',
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
                            day: 'Vendredi',
                            meal: 'Déjeuner',
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
                            day: 'Vendredi',
                            meal: 'Souper',
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

    const weeksData = recipesData;
    const recipesContainer = document.getElementById('recipes-container');
    const modal = document.getElementById('recipe-modal');
    const modalDetails = document.getElementById('recipe-details');
    const closeModal = document.querySelector('.close-button');
    const weekNavContainer = document.getElementById('week-nav');

    let currentWeek = 0; // Index de la semaine affichée
    
    // Le compteur de cartes doit être global et non réinitialisé
    let cardCount = 0;

    function createWeekNav() {
        weekNavContainer.innerHTML = '';
        weeksData.forEach((week, index) => {
            const button = document.createElement('button');
            button.textContent = week.week;
            button.addEventListener('click', () => {
                currentWeek = index;
                renderWeek(currentWeek);
                updateWeekNav();
            });
            weekNavContainer.appendChild(button);
        });
        updateWeekNav();
    }

    function updateWeekNav() {
        const buttons = weekNavContainer.querySelectorAll('button');
        buttons.forEach((button, index) => {
            if (index === currentWeek) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    function renderWeek(weekIndex) {
        recipesContainer.innerHTML = '';
        const week = weeksData[weekIndex];
        const weekSection = document.createElement('div');
        weekSection.className = 'week-section';
        const weekTitle = document.createElement('h2');
        weekTitle.textContent = week.week;
        weekSection.appendChild(weekTitle);
        recipesContainer.appendChild(weekSection);

        week.days.forEach(day => {
            const daySection = document.createElement('div');
            daySection.className = 'day-section';
            const dayTitle = document.createElement('h3');
            dayTitle.textContent = day.day;
            daySection.appendChild(dayTitle);

            const recipesGrid = document.createElement('div');
            recipesGrid.className = 'recipes-grid';

            day.meals.forEach(meal => {
                const recipeCard = document.createElement('div');
                recipeCard.className = 'recipe-card';
                
                const colorIndex = (cardCount % 6) + 1; // 6 est le nombre de couleurs que vous avez définies
                recipeCard.classList.add(`card-color-${colorIndex}`);
                cardCount++;

                recipeCard.innerHTML = `
                    <h3>${meal.title}</h3>
                    <p><strong>Repas:</strong> ${meal.meal}</p>
                    <p><strong>Temps de préparation:</strong> ${meal.prepTime}</p>
                    <p><strong>Temps de cuisson:</strong> ${meal.cookTime}</p>
                `;

                recipeCard.addEventListener('click', () => {
                    showRecipeDetails(meal);
                });

                recipesGrid.appendChild(recipeCard);
            });

            daySection.appendChild(recipesGrid);
            recipesContainer.appendChild(daySection);
        });
    }

    function showRecipeDetails(recipe) {
    const modalDetails = document.getElementById('recipe-details');

    modalDetails.innerHTML = `
        <style>
            .modal-content {
                background-color: #fff;
                padding: 2.5rem;
                border-radius: 15px;
                width: 90%;
                max-width: 800px;
                position: relative;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }
            #recipe-details h2 {
                color: #4a69bd;
                font-size: 2rem;
                margin-top: 0;
                border-bottom: 2px solid #ddd;
                padding-bottom: 10px;
                margin-bottom: 20px;
            }
            #recipe-details h3 {
                color: #6a89cc;
                font-size: 1.5rem;
                margin-top: 25px;
                border-bottom: 1px solid #eee;
                padding-bottom: 5px;
            }
            #recipe-details p {
                font-size: 1.1rem;
                line-height: 1.6;
            }
            #recipe-details ul,
            #recipe-details ol {
                padding-left: 20px;
                margin-top: 10px;
            }
            #recipe-details ul li,
            #recipe-details ol li {
                font-size: 1rem;
                line-height: 1.4;
                margin-bottom: 5px;
                background-color: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 5px;
                padding: 8px 12px;
            }
        </style>
        <h2>${recipe.title}</h2>
        <p><strong>Repas:</strong> ${recipe.meal}</p>
        <p><strong>Temps de préparation:</strong> ${recipe.prepTime}</p>
        <p><strong>Temps de cuisson:</strong> ${recipe.cookTime}</p>
        <p><strong>Portions:</strong> ${recipe.portions}</p>
        
        <h3>Ingrédients :</h3>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        
        <h3>Instructions :</h3>
        <ol>
            ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
        </ol>
        
        <h3>Valeurs Nutritionnelles :</h3>
        <ul>
            ${Object.keys(recipe.nutrition).map(key => `<li><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${recipe.nutrition[key]}</li>`).join('')}
        </ul>
    `;
    modal.style.display = 'flex';
}

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    createWeekNav();
    renderWeek(currentWeek);
});
