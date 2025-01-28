let occasionList=[
    {
        id: 1,
        recipeTitle: "Gulab Jamun",
        recipeDescription: "A traditional Indian dessert made from khoya, soaked in fragrant sugar syrup.",
        imgUrl: "/Gulab Jamun.jpeg",
        imgL: "/Gulab JamunH.jpeg",
        preparationDescription: `
          1. Knead khoya, flour, and baking soda into a soft dough.\n
          2. Shape into small balls and deep fry until golden.\n
          3. Prepare sugar syrup flavored with cardamom and rose water.\n
          4. Soak fried balls in warm syrup for at least 2 hours.\n
          5. Serve warm or chilled.\n
        `,
        dietDetails: ["Vegetarian", "High-Calorie Dessert", "Rich"],
        nutritionalInformation: {
          calories: "150",
          protein: "2g",
          carbs: "30g",
          fat: "4g"
        },
        ingredients: ["Khoya", "Sugar", "Flour", "Cardamom", "Rose Water"],
        category: "dessert",
        occasion: "Festival",
        categoryName: "Sweet Dish"
      },
      {
        id: 2,
        recipeTitle: "Litti Chokha",
        recipeDescription: "A Bihar specialty of stuffed wheat balls served with mashed vegetables.",
        imgUrl: "/Litti Chokha.jpeg",
        imgL: "/Litti ChokhaH.jpeg",
        preparationDescription: `
          **For Litti:**\n
          1. Knead whole wheat flour with water and salt to form dough.\n
          2. Prepare stuffing with roasted gram flour, spices, mustard oil, and garlic.\n
          3. Fill dough balls with the mixture, seal, and bake or roast until cooked.\n\n
          **For Chokha:**\n
          1. Roast eggplant and tomatoes; mash with boiled potatoes.\n
          2. Mix with mustard oil, green chilies, garlic, and coriander leaves.\n
          3. Serve hot litti with chokha.\n
        `,
        dietDetails: ["Vegetarian", "Rustic", "Rich in Fiber"],
        nutritionalInformation: {
          calories: "300",
          protein: "8g",
          carbs: "40g",
          fat: "10g"
        },
        ingredients: ["Wheat Flour", "Gram Flour", "Eggplant", "Tomatoes", "Mustard Oil"],
        category: "meals",
        occasion: "Festive Gathering",
        categoryName: "Traditional Dish"
      },
      {
        id: 3,
        recipeTitle: "Puran Poli",
        recipeDescription: "A sweet stuffed flatbread from Maharashtra, made with chana dal and jaggery.",
        imgUrl: "/Puran Poli1.jpeg",
        imgL: "/Puran Poli.jpeg",
        preparationDescription: `
          1. Cook chana dal until soft, then mash and mix with jaggery and cardamom powder.\n
          2. Prepare dough using wheat flour, oil, and water; let it rest for 30 minutes.\n
          3. Roll dough balls, fill with the sweet stuffing, and seal edges.\n
          4. Roll out carefully and cook on a hot griddle with ghee until golden.\n
          5. Serve hot with a dollop of ghee.\n
        `,
        dietDetails: ["Vegetarian", "Rich in Fiber", "Sweet"],
        nutritionalInformation: {
          calories: "250",
          protein: "6g",
          carbs: "40g",
          fat: "6g"
        },
        ingredients: ["Chana Dal", "Jaggery", "Wheat Flour", "Cardamom", "Ghee"],
        category: "dessert",
        occasion: "Festival",
        categoryName: "Flatbread"
      },
      {
        id: 4,
        recipeTitle: "Chicken Biryani",
        recipeDescription: "A royal rice dish made with marinated chicken, basmati rice, and aromatic spices.",
        imgUrl: "/Chicken Biryani.jpeg",
        imgL: "/Chicken BiryaniH.jpeg",
        preparationDescription: `
          1. Marinate chicken with yogurt, ginger-garlic paste, and spices for 2 hours.\n
          2. Partially cook basmati rice with whole spices like cardamom and cloves.\n
          3. Layer rice and chicken in a pot, drizzle with saffron milk, and seal tightly.\n
          4. Cook on low heat for 30 minutes.\n
          5. Serve hot with raita or salan.\n
        `,
        dietDetails: ["Non-Vegetarian", "Rich in Protein", "Flavorful"],
        nutritionalInformation: {
          calories: "450",
          protein: "25g",
          carbs: "50g",
          fat: "15g"
        },
        ingredients: ["Chicken", "Basmati Rice", "Yogurt", "Spices", "Saffron"],
        category: "meals",
        occasion: "Wedding",
        categoryName: "Main Course"
      },
      {
        id: 5,
        recipeTitle: "Celebration Chocolate Cake",
        recipeDescription: "A rich and moist chocolate cake perfect for birthdays, anniversaries, or any celebration.",
        imgUrl: "/CelebrationChocolateCake.jpeg",
        imgL: "/CelebrationChocolateCakeLarge.jpeg",
        preparationDescription: `
          **For the Cake:**\n
          1. Preheat oven to 350°F (175°C). Grease and line two 9-inch round cake pans.\n
          2. In a bowl, sift together 1 3/4 cups all-purpose flour, 3/4 cup cocoa powder, 1 1/2 teaspoons baking soda, and a pinch of salt.\n
          3. In another bowl, whisk 2 large eggs, 1 cup granulated sugar, 1/2 cup brown sugar, 1/2 cup vegetable oil, and 1 teaspoon vanilla extract.\n
          4. Slowly mix the dry ingredients into the wet ingredients, alternating with 1 cup of buttermilk.\n
          5. Stir in 1/2 cup hot coffee for a smooth batter.\n
          6. Divide batter evenly between pans and bake for 30-35 minutes. Let the cakes cool completely.\n\n
          **For the Frosting:**\n
          1. Beat 1 cup unsalted butter with 2 1/2 cups powdered sugar until fluffy.\n
          2. Add 3/4 cup cocoa powder, 1/4 cup milk, and 1 teaspoon vanilla extract. Beat until smooth.\n\n
          **Assembly:**\n
          1. Place one cake layer on a plate and spread a thick layer of frosting.\n
          2. Place the second layer on top and frost the top and sides.\n
          3. Decorate with sprinkles, chocolate shavings, or fresh fruits.\n
        `,
        dietDetails: ["Vegetarian", "Rich in Chocolate", "Perfect for Parties"],
        nutritionalInformation: {
          calories: "450",
          protein: "6g",
          carbs: "60g",
          fat: "20g"
        },
        ingredients: [
          "All-Purpose Flour",
          "Cocoa Powder",
          "Eggs",
          "Sugar",
          "Vegetable Oil",
          "Buttermilk",
          "Butter",
          "Powdered Sugar"
        ],
        category: "dessert",
        occasion: "Celebration",
        categoryName: "Cake"
      },
      {
        id: 6,
        recipeTitle: "Jalebi",
        recipeDescription: "A spiral-shaped deep-fried dessert soaked in saffron sugar syrup.",
        imgUrl: "/Jalebi.jpeg",
        imgL: "/JalebiH.jpeg",
        preparationDescription: `
          1. Prepare a batter with all-purpose flour, yogurt, and water. Ferment for 6-8 hours.\n
          2. Heat oil in a pan and pour batter in a spiral shape using a piping bag.\n
          3. Fry until crispy and golden.\n
          4. Soak fried jalebis in warm saffron sugar syrup for a minute.\n
          5. Serve hot and crispy.\n
        `,
        dietDetails: ["Vegetarian", "High-Calorie Dessert", "Traditional Sweet"],
        nutritionalInformation: {
          calories: "250",
          protein: "2g",
          carbs: "50g",
          fat: "5g"
        },
        ingredients: ["All-Purpose Flour", "Yogurt", "Sugar", "Saffron", "Oil"],
        category: "dessert",
        occasion: "Festival",
        categoryName: "Sweet Dish"
      },
      {
        id: 7,
        recipeTitle: "Samosa",
        recipeDescription: "A crispy and flaky pastry filled with a spicy potato mixture.",
        imgUrl: "/Samosa.jpeg",
        imgL: "/SamosaH.jpeg",
        preparationDescription: `
          1. Prepare dough with all-purpose flour, ajwain, salt, and ghee. Rest for 30 minutes.\n
          2. Sauté boiled and mashed potatoes with peas, cumin, and spices (coriander, garam masala, chili powder).\n
          3. Roll dough into small discs, fill with potato mixture, and seal into a triangle shape.\n
          4. Deep fry on medium heat until golden and crisp.\n
          5. Serve hot with tamarind or mint chutney.\n
        `,
        dietDetails: ["Vegetarian", "Deep-Fried", "Spicy"],
        nutritionalInformation: {
          calories: "200",
          protein: "4g",
          carbs: "28g",
          fat: "10g"
        },
        ingredients: ["All-Purpose Flour", "Potatoes", "Peas", "Spices", "Oil"],
        category: "snacks",
        occasion: "Tea Party",
        categoryName: "Starter"
      },
      {
        id: 8,
        recipeTitle: "Sheer Khurma",
        recipeDescription: "A festive dessert made with vermicelli, milk, dates, and dry fruits.",
        imgUrl: "/Sheer Khurma.jpeg",
        imgL: "/Sheer KhurmaH.jpeg",
        preparationDescription: `
          1. Heat ghee in a pan and roast vermicelli until golden brown.\n
          2. Add milk, sugar, and cardamom; simmer until vermicelli is soft.\n
          3. Stir in chopped dates, almonds, cashews, and pistachios.\n
          4. Cook for a few more minutes and garnish with saffron strands.\n
          5. Serve warm or chilled.\n
        `,
        dietDetails: ["Vegetarian", "Rich in Dry Fruits", "Traditional Dessert"],
        nutritionalInformation: {
          calories: "300",
          protein: "8g",
          carbs: "40g",
          fat: "10g"
        },
        ingredients: ["Vermicelli", "Milk", "Dates", "Sugar", "Dry Fruits"],
        category: "dessert",
        occasion: "Eid",
        categoryName: "Sweet Dish"
      }
      
      
      
      
];