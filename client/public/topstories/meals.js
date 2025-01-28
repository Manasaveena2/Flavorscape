// let mealsList=[
//     {
//         id: 1,
//         recipeTitle: "Grilled Chicken Breast",
//         recipeDescription: "A healthy and flavorful chicken dish marinated with herbs and grilled to perfection.",
//         imgUrl: "/grilled_chicken_breast.jpeg",
//         imgL:"Grilled Chicken BreastH.jpeg",
//         preparationDescription: `
//           1. Marinate chicken breast with olive oil, lemon juice, garlic, and mixed herbs for 30 minutes.\n
//           2. Preheat a grill pan and cook the chicken for 5-7 minutes on each side until fully cooked.\n
//           3. Let it rest for a few minutes before serving with a side of vegetables.\n
//         `,
//         dietDetails: ["High Protein", "Low Carb", "Gluten-Free"],
//         nutritionalInformation: {
//           calories: "200",
//           protein: "30g",
//           carbs: "2g",
//           fat: "6g"
//         },
//         ingredients: ["Chicken Breast", "Olive Oil", "Lemon Juice", "Garlic", "Mixed Herbs"],
//         category: "meals"
//       },
//       {
//         id: 2,
//         recipeTitle: "Veggie Stir-Fry with Rice",
//         recipeDescription: "A quick and colorful vegetable stir-fry served with steamed rice.",
//         imgUrl: "/Veggie Stir-Fry with Rice.jpeg",
//         imgL:"Veggie Stir-Fry with Rice.jpeg",
//         preparationDescription: `
//           1. Heat oil in a wok, add garlic, ginger, and sliced vegetables (bell peppers, carrots, broccoli).\n
//           2. Stir-fry on high heat for 3-5 minutes.\n
//           3. Add soy sauce, sesame oil, and a pinch of salt. Serve over steamed rice.\n
//         `,
//         dietDetails: ["Vegan", "High Fiber", "Low Fat"],
//         nutritionalInformation: {
//           calories: "250",
//           protein: "6g",
//           carbs: "40g",
//           fat: "4g"
//         },
//         ingredients: ["Rice", "Bell Peppers", "Carrots", "Broccoli", "Soy Sauce", "Garlic", "Ginger"],
//         category: "meals"
//       },
//       {
//         id: 3,
//         recipeTitle: "Beef Tacos",
//         recipeDescription: "Crispy tacos filled with seasoned beef, fresh veggies, and cheese.",
//         imgUrl: "/Beef Tacos.jpeg",
//         imgL:"Beef Tacos1.jpeg",
//         preparationDescription: `
//           1. Cook ground beef with taco seasoning until browned.\n
//           2. Fill taco shells with beef, shredded lettuce, diced tomatoes, and grated cheese.\n
//           3. Serve with salsa or sour cream.\n
//         `,
//         dietDetails: ["High Protein", "Rich in Iron", "Non-Vegetarian"],
//         nutritionalInformation: {
//           calories: "280",
//           protein: "18g",
//           carbs: "25g",
//           fat: "12g"
//         },
//         ingredients: ["Ground Beef", "Taco Shells", "Lettuce", "Tomatoes", "Cheese", "Taco Seasoning"],
//         category: "meals"
//       },
//       {
//         id: 4,
//         recipeTitle: "Paneer Butter Masala",
//         recipeDescription: "A creamy and rich North Indian curry made with paneer cubes and a spiced tomato gravy.",
//         imgUrl: "/Paneer Butter Masala.jpeg",
//         imgL:"Paneer Butter Masala1.jpeg",
//         preparationDescription: `
//           1. Heat butter, sauté onions and tomatoes with spices, and blend to form a smooth gravy.\n
//           2. Add cream, paneer cubes, and simmer for 5-7 minutes.\n
//           3. Garnish with coriander and serve with naan or rice.\n
//         `,
//         dietDetails: ["Vegetarian", "High Protein", "Rich in Calcium"],
//         nutritionalInformation: {
//           calories: "320",
//           protein: "12g",
//           carbs: "15g",
//           fat: "24g"
//         },
//         ingredients: ["Paneer", "Tomatoes", "Onions", "Cream", "Butter", "Spices"],
//         category: "meals"
//       },
//       {
//         id: 5,
//         recipeTitle: "Caesar Salad with Chicken",
//         recipeDescription: "A classic Caesar salad topped with grilled chicken and crunchy croutons.",
//         imgUrl: "/Caesar Salad with Chicken.jpeg",
//         imgL:"Caesar Salad with ChickenH.jpeg",
//         preparationDescription: `
//           1. Grill chicken breast and slice into strips.\n
//           2. Toss romaine lettuce with Caesar dressing and top with chicken, croutons, and Parmesan.\n
//         `,
//         dietDetails: ["High Protein", "Low Carb", "Gluten-Free Option"],
//         nutritionalInformation: {
//           calories: "230",
//           protein: "20g",
//           carbs: "8g",
//           fat: "12g"
//         },
//         ingredients: ["Chicken Breast", "Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan Cheese"],
//         category: "meals"
//       },
//       {
//         id: 6,
//         recipeTitle: "Thai Green Curry",
//         recipeDescription: "A fragrant and creamy curry made with coconut milk, green curry paste, and vegetables.",
//         imgUrl: "/Thai Green Curry.jpeg",
//         imgL:"Thai Green CurryH.jpeg",
//         preparationDescription: `
//           1. Heat oil in a pan, add green curry paste and fry until fragrant.\n
//           2. Add coconut milk, vegetables, and your choice of protein (chicken, tofu).\n
//           3. Simmer until vegetables are tender. Serve with steamed jasmine rice.\n
//         `,
//         dietDetails: ["Gluten-Free", "Can be Vegan", "Rich in Flavor"],
//         nutritionalInformation: {
//           calories: "320",
//           protein: "12g",
//           carbs: "25g",
//           fat: "18g"
//         },
//         ingredients: ["Green Curry Paste", "Coconut Milk", "Vegetables", "Chicken or Tofu", "Jasmine Rice"],
//         category: "meals"
//       }
//       {
//         id: 7,
//         recipeTitle: "Veggie Burrito Bowl",
//         recipeDescription: "A wholesome bowl filled with rice, beans, veggies, and salsa.",
//         imgUrl: "/Veggie Burrito Bowl.jpeg",
//         imgL:"Veggie Burrito BowlH.jpeg",
//         preparationDescription: `
//           1. Cook rice and black beans separately.\n
//           2. Assemble in a bowl with rice, beans, sautéed veggies, salsa, and guacamole.\n
//           3. Garnish with cilantro and serve.\n
//         `,
//         dietDetails: ["Vegan", "High Fiber", "Low Fat"],
//         nutritionalInformation: {
//           calories: "350",
//           protein: "10g",
//           carbs: "50g",
//           fat: "8g"
//         },
//         ingredients: ["Rice", "Black Beans", "Bell Peppers", "Salsa", "Guacamole"],
//         category: "meals"
//       },
//       {
//         id: 8,
//         recipeTitle: "Sambar Rice",
//         recipeDescription: "A wholesome South Indian dish made by mixing rice with tangy lentil-based sambar.",
//         imgUrl: "/Sambar Rice1.jpeg",
//         imgL:"Sambar Rice.jpeg",
//         preparationDescription: `
//           1. Cook rice and toor dal (split pigeon peas) until soft.\n
//           2. Prepare sambar with tamarind, vegetables (like drumsticks, carrots, and beans), and a spice blend.\n
//           3. Mix cooked rice and dal with sambar and garnish with coriander and ghee.\n
//           4. Serve with papad and pickle.\n
//         `,
//         dietDetails: ["Vegetarian", "High Fiber", "Rich in Protein"],
//         nutritionalInformation: {
//           calories: "300",
//           protein: "10g",
//           carbs: "55g",
//           fat: "5g"
//         },
//         ingredients: ["Rice", "Toor Dal", "Vegetables", "Tamarind", "Sambar Powder"],
//         category: "meals"
//       },
//       {
//         id: 9,
//         recipeTitle: "Hyderabadi Chicken Biryani",
//         recipeDescription: "A fragrant and flavorful rice dish cooked with marinated chicken, spices, and basmati rice.",
//         imgUrl: "/Hyderabadi Chicken Biryani.jpeg",
//         imgL:"Hyderabadi Chicken BiryaniH.jpeg",
//         preparationDescription: `
//           1. Marinate chicken with yogurt, ginger-garlic paste, and spices for 1-2 hours.\n
//           2. Partially cook basmati rice with whole spices like cardamom and cinnamon.\n
//           3. Layer marinated chicken and rice, drizzle with saffron milk, and cook on low heat (dum) for 30-40 minutes.\n
//           4. Serve with raita or salan.\n
//         `,
//         dietDetails: ["Non-Vegetarian", "Rich in Protein", "High-Calorie Meal"],
//         nutritionalInformation: {
//           calories: "450",
//           protein: "20g",
//           carbs: "50g",
//           fat: "15g"
//         },
//         ingredients: ["Chicken", "Basmati Rice", "Yogurt", "Spices", "Saffron"],
//         category: "meals"
//       },
//       {
//         id: 10,
//         recipeTitle: "Lemon Rice",
//         recipeDescription: "A tangy rice dish flavored with lemon juice, curry leaves, and peanuts.",
//         imgUrl: "/Lemon Rice.jpeg",
//         imgL: "/Lemon RiceH.jpeg",
//         preparationDescription: `
//           1. Cook rice and let it cool.\n
//           2. Heat oil, add mustard seeds, curry leaves, green chilies, and peanuts.\n
//           3. Mix in cooked rice, turmeric, salt, and lemon juice.\n
//           4. Serve with pickle or papad.\n
//         `,
//         dietDetails: ["Vegetarian", "Gluten-Free", "Quick Meal"],
//         nutritionalInformation: {
//           calories: "200",
//           protein: "4g",
//           carbs: "35g",
//           fat: "5g"
//         },
//         ingredients: ["Rice", "Lemon Juice", "Curry Leaves", "Peanuts", "Turmeric"],
//         category: "meals"
//       },
//       {
//         id: 11,
//         recipeTitle: "Curd Rice",
//         recipeDescription: "A comforting and cooling dish made with yogurt, rice, and tempered spices.",
//         imgUrl: "/Curd Rice.jpeg",
//         imgL: "/Curd RiceH.jpeg",
//         preparationDescription: `
//           1. Cook rice and let it cool.\n
//           2. Mix rice with yogurt, salt, and a splash of milk.\n
//           3. Temper mustard seeds, curry leaves, and green chilies in oil and add to the curd rice.\n
//           4. Garnish with coriander and serve chilled with pickle.\n
//         `,
//         dietDetails: ["Vegetarian", "Probiotic-Rich", "Easy to Digest"],
//         nutritionalInformation: {
//           calories: "200",
//           protein: "6g",
//           carbs: "30g",
//           fat: "5g"
//         },
//         ingredients: ["Rice", "Yogurt", "Mustard Seeds", "Curry Leaves", "Green Chilies"],
//         category: "meals"
//       },
//       {
//         id: 12,
//         recipeTitle: "Tomato Pappu",
//         recipeDescription: "A tangy lentil curry made with toor dal, tomatoes, and tempered spices.",
//         imgUrl: "/Tomato Pappu.jpeg",
//         imgL: "/Tomato Pappu1.jpeg",
//         preparationDescription: `
//           1. Cook toor dal with chopped tomatoes, turmeric, and water until soft.\n
//           2. Mash the dal and tomatoes, then add tempered spices (mustard seeds, garlic, dried red chilies).\n
//           3. Simmer for 5 minutes and garnish with coriander leaves.\n
//           4. Serve with steamed rice and ghee.\n
//         `,
//         dietDetails: ["Vegetarian", "Rich in Protein", "Gluten-Free"],
//         nutritionalInformation: {
//           calories: "220",
//           protein: "10g",
//           carbs: "30g",
//           fat: "4g"
//         },
//         ingredients: ["Toor Dal", "Tomatoes", "Turmeric", "Garlic", "Spices"],
//         category: "meals"
//       },
//       {
//         id: 13,
//         recipeTitle: "Vegetable Biryani",
//         recipeDescription: "A fragrant rice dish loaded with spiced mixed vegetables and basmati rice.",
//         imgUrl: "/Vegetable Biryani.jpeg",
//         imgL: "/Vegetable BiryaniH.jpeg",
//         preparationDescription: `
//           1. Sauté onions, tomatoes, and spices, then add mixed vegetables and cook until tender.\n
//           2. Partially cook basmati rice with whole spices and layer it with the vegetable mixture.\n
//           3. Steam the layers on low heat (dum) for 20-30 minutes.\n
//           4. Serve with raita or curry.\n
//         `,
//         dietDetails: ["Vegetarian", "Rich in Fiber", "Gluten-Free"],
//         nutritionalInformation: {
//           calories: "350",
//           protein: "8g",
//           carbs: "60g",
//           fat: "10g"
//         },
//         ingredients: ["Basmati Rice", "Mixed Vegetables", "Onions", "Spices", "Yogurt"],
//         category: "meals"
//       },
//       {
//         id: 14,
//         recipeTitle: "Chole Bhature",
//         recipeDescription: "A classic Punjabi dish of spicy chickpea curry served with fluffy fried bread.",
//         imgUrl: "/Chole Bhature.jpeg",
//         imgL: "/Chole BhatureH.jpeg",
//         preparationDescription: `
//           1. Soak and cook chickpeas until tender.\n
//           2. Sauté onions, ginger-garlic paste, and tomatoes. Add spices like chole masala and amchur.\n
//           3. Simmer cooked chickpeas in the gravy until well-coated.\n
//           4. Knead dough for bhature using flour, yogurt, and baking soda. Roll and deep fry.\n
//           5. Serve hot with pickle and onions.\n
//         `,
//         dietDetails: ["Vegetarian", "Rich in Fiber", "High-Calorie Meal"],
//         nutritionalInformation: {
//           calories: "450",
//           protein: "12g",
//           carbs: "60g",
//           fat: "15g"
//         },
//         ingredients: ["Chickpeas", "Onions", "Tomatoes", "Flour", "Spices"],
//         category: "meals"
//       },
      
//       {
//         id: 15,
//         recipeTitle: "Dal Makhani",
//         recipeDescription: "A creamy lentil dish made with black lentils and kidney beans, slow-cooked in a rich gravy.",
//         imgUrl: "/Dal Makhani.jpeg",
//         imgL: "/Dal MakhaniH.jpeg",
//         preparationDescription: `
//           1. Soak black lentils and kidney beans overnight, then pressure cook.\n
//           2. Prepare gravy with butter, onions, tomatoes, ginger-garlic paste, and spices.\n
//           3. Add cooked lentils and beans to the gravy, then simmer with cream for a creamy consistency.\n
//           4. Serve with naan or rice.\n
//         `,
//         dietDetails: ["Vegetarian", "Rich in Protein", "High-Calorie Meal"],
//         nutritionalInformation: {
//           calories: "380",
//           protein: "14g",
//           carbs: "30g",
//           fat: "20g"
//         },
//         ingredients: ["Black Lentils", "Kidney Beans", "Cream", "Butter", "Spices"],
//         category: "meals"
//       }
      
// ]