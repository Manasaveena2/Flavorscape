
export const AllRecipes = [
  {
    id: 1,
    recipeTitle: "Pizza",
    recipeDescription: "A classic Italian dish made with a savory crust, tangy tomato sauce, and melted cheese.",
    imgUrl: "pizza.jpeg", // Relative path to the image
    category: "Topstories-Recipes",
    preparationDescription: `
      1. Preheat the oven to 475°F (245°C).\n
      2. Roll out the pizza dough on a floured surface to your desired thickness.\n
      3. Spread a thin, even layer of tomato sauce on the dough, leaving a small border around the edges.\n
      4. Sprinkle a generous amount of shredded mozzarella cheese on top, ensuring even coverage.\n
      5. Add toppings like pepperoni, sliced bell peppers, olives, onions, or mushrooms (optional).\n
      6. Drizzle olive oil over the top for added flavor.\n
      7. Bake the pizza in the preheated oven for 10-12 minutes, or until the crust is golden brown and the cheese is bubbly and slightly browned.\n
      8. Remove from the oven and let cool for a few minutes before slicing and serving. Optionally, garnish with fresh basil leaves or a sprinkle of Parmesan cheese.\n
    `,
    dietDetails: [
      "Vegetarian",
      "Contains Dairy",
      "Can be made Gluten-Free (use gluten-free crust)",
      "Can be made Vegan (use dairy-free cheese and toppings)"
    ],
    nutritionalInformation: {
      servingSize: "1 slice (1/8 of pizza)",
      calories: "285",
      totalFat: "12g",
      saturatedFat: "6g",
      cholesterol: "30mg",
      sodium: "600mg",
      totalCarbohydrates: "34g",
      dietaryFiber: "2g",
      sugars: "3g",
      protein: "12g",
      vitaminA: "10%",
      vitaminC: "12%",
      calcium: "15%",
      iron: "8%"
    },
    flavorProfile: "Savory",
  videoUrl: "https://youtu.be/Ldj_0kywGjM?si=uM8wnv6YU8lxW0F5", // Replace with actual video URL
  tags: ["Italian", "Comfort Food", "Vegetarian", "Gluten-Free Option", "Family Favorite","Under 40 minutes"],
  nutritionalTags: ["Moderate Calorie", "Moderate Protein", "High Fat"]
  },
  
  {
    id: 2,
    recipeTitle: "Pasta",
    recipeDescription: "A versatile dish featuring various types of noodles served with rich sauces and toppings.",
    imgUrl: "pasta.jpeg", // Relative path to the image
    category: "Topstories-Recipes",
    preparationDescription: `
      1. Bring a large pot of salted water to a boil.\n
      2. Add your favorite pasta (spaghetti, penne, fusilli, etc.) and cook according to the package instructions, usually for 8-10 minutes, or until al dente.\n
      3. While the pasta cooks, heat olive oil in a large skillet over medium heat. Add chopped garlic and sauté for 1-2 minutes until fragrant.\n
      4. Add canned crushed tomatoes (for marinara) or heavy cream (for Alfredo) to the skillet. Stir and let it simmer for 5-7 minutes.\n
      5. Season the sauce with salt, pepper, and herbs like basil, oregano, and red pepper flakes to taste.\n
      6. Drain the pasta, reserving about 1/2 cup of pasta water.\n
      7. Toss the cooked pasta into the sauce, adding a little pasta water if the sauce needs thinning.\n
      8. Optionally, add grated Parmesan or mozzarella cheese, and stir to combine.\n
      9. Serve with fresh basil leaves or extra cheese on top. Garnish with a sprinkle of ground black pepper or a drizzle of olive oil.\n
    `,
    dietDetails: [
      "Vegetarian", 
      "Contains Dairy" 
    ],
    nutritionalInformation: {
      servingSize: "1 cup of cooked pasta with sauce",
      calories: "320",
      totalFat: "14g",
      saturatedFat: "7g",
      cholesterol: "35mg",
      sodium: "560mg",
      totalCarbohydrates: "42g",
      dietaryFiber: "3g",
      sugars: "4g",
      protein: "8g",
      vitaminA: "8%",
      vitaminC: "10%",
      calcium: "10%",
      iron: "12%"
    },
    flavorProfile: "Savory",
  videoUrl: "https://youtu.be/fSuQ_3oZ5gY?si=1xMUAx7hqpYGHYlB", // Replace with actual video URL
  tags: ["Italian", "Pasta", "Vegetarian", "Comfort Food", "Quick Meal","Under 35 minutes"],
  nutritionalTags: ["Moderate Calorie", "Moderate Protein", "High Fat"]
  },
  
  {
    id: 3,
    recipeTitle: "Oats Upma",
    recipeDescription: "Oats Upma is a quick, healthy breakfast made with oats, veggies, and spices, perfect for a nutritious start to the day.",
    imgUrl: "oatsupma.jpeg", // Relative path to the image
    category: "Topstories-Recipes",
    preparationDescription: `
      Heat 1 tablespoon of oil in a pan over medium heat.\n
      Add mustard seeds and allow them to splutter. Then, add cumin seeds and sauté for a few seconds.\n
       Add chopped onions, green chilies, and ginger, and sauté until the onions turn golden brown.\n
      Add chopped vegetables like carrots, peas, and beans, and sauté for 3-4 minutes until they are slightly cooked.\n
      Stir in the oats and roast for 2-3 minutes until they are lightly toasted.\n
      Add 1 1/2 cups of water, salt, and turmeric powder. Bring the mixture to a boil.\n
      Reduce the heat to low and cover the pan. Let the oats cook for 3-4 minutes, or until the water is absorbed and the oats are soft.\n
      Garnish with fresh coriander leaves and a squeeze of lemon juice before serving.\n
    Serve hot and enjoy a healthy, flavorful breakfast!
    `,
    dietDetails: [
      "Vegetarian",
      "Gluten-Free (if using certified gluten-free oats)",
      "High in Fiber",
      "Rich in Protein"
    ],
    nutritionalInformation: {
      servingSize: "1 bowl (approximately 1 cup)",
      calories: "180",
      totalFat: "7g",
      saturatedFat: "1g",
      cholesterol: "0mg",
      sodium: "300mg",
      totalCarbohydrates: "25g",
      dietaryFiber: "5g",
      sugars: "3g",
      protein: "6g",
      vitaminA: "25%",
      vitaminC: "15%",
      calcium: "5%",
      iron: "12%"
    },
    flavorProfile: "Savory, Spicy, Mildly Tangy",
  nutritionalTags: [
    "Low Calorie",
    "Moderate Protein",
    "Low Fat"
  ],
  tags: ["Healthy", "Breakfast", "Vegetarian", "Gluten-Free", "Quick", "Under 30 minutes"],
  videoUrl: "https://youtu.be/M7GI9yBH5Zw?si=7q1kxTK0M9GBaPb9"
  },  
  {
    id: 4,
    recipeTitle: "Sprout Salad",
    recipeDescription: "Sprout salad is a refreshing and protein-rich dish made with fresh sprouts, veggies, and light seasoning.",
    imgUrl: "sprout salad.jpeg", // Relative path to the image
    category: "Topstories-Recipes",
    preparationDescription: `
      1. Rinse 1 cup of mixed sprouts (moong, chickpea, or lentil sprouts) thoroughly in water.\n
      2. In a large mixing bowl, combine the sprouts with finely chopped vegetables such as cucumber, tomatoes, onions, and bell peppers.\n
      3. Add a handful of chopped coriander leaves and a small amount of grated carrot for added flavor and color.\n
      4. For the dressing, mix 1 tablespoon of lemon juice, 1 teaspoon of olive oil, 1/2 teaspoon of black pepper, and salt to taste.\n
      5. Pour the dressing over the sprouts and vegetable mixture and toss well to combine.\n
      6. Optionally, add a pinch of chaat masala or cumin powder for an extra burst of flavor.\n
      7. Let the salad sit for 5-10 minutes to allow the flavors to meld together.\n
      8. Serve chilled as a light, protein-packed meal or a side dish.\n
    `,
    dietDetails: [
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "High in Protein",
      "Rich in Fiber",
      "Low-Calorie"
    ],
    nutritionalInformation: {
      servingSize: "1 bowl (approximately 1 cup)",
      calories: "120",
      totalFat: "4g",
      saturatedFat: "0.5g",
      cholesterol: "0mg",
      sodium: "150mg",
      totalCarbohydrates: "18g",
      dietaryFiber: "6g",
      sugars: "4g",
      protein: "8g",
      vitaminA: "15%",
      vitaminC: "25%",
      calcium: "8%",
      iron: "10%"
    },
    flavorProfile: "Fresh, Zesty, Light",
    nutritionalTags: [
       "Low Calorie",
     "High Protein",
      "Low Fat"
    ],
    tags: ["Healthy", "Salad", "Vegan", "Protein-Rich", "Quick", "Under 20 minutes"],
    videoUrl: "https://youtu.be/euP77KYDDF0?si=WZrKoqlSM5WqZWMF"
  }
  ,
  {
    id: 5,
    recipeTitle: "Chocolate Cake",
    recipeDescription: "A decadent dessert with rich layers of moist chocolate and creamy frosting.",
    imgUrl: "Best Chocolate Cake.jpeg", // Relative path to the image
    category: "Topstories-Recipes",
    preparationDescription: `
      1. Preheat the oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.\n
      2. In a large mixing bowl, sift together 1 3/4 cups all-purpose flour, 3/4 cup cocoa powder, 1 1/2 teaspoons baking powder, 1 1/2 teaspoons baking soda, and a pinch of salt.\n
      3. In another bowl, whisk together 2 eggs, 1 cup granulated sugar, 1/2 cup vegetable oil, and 1 teaspoon vanilla extract.\n
      4. Gradually add 1 cup of milk to the wet ingredients, stirring continuously.\n
      5. Add the dry ingredients to the wet ingredients in batches, mixing gently after each addition until fully combined.\n
      6. Stir in 1 cup of boiling water, which will make the batter thin (this will result in a moist cake).\n
      7. Pour the batter evenly into the prepared cake pans.
      8. Bake in the preheated oven for 30-35 minutes, or until a toothpick inserted into the center comes out clean.\n
      9. Let the cakes cool in the pans for 10 minutes, then transfer them to wire racks to cool completely.\n
      10. Once the cakes are completely cooled, frost with your favorite chocolate frosting.\n
      11. Decorate with chocolate shavings or sprinkles and serve as a delicious, indulgent treat.\n
    `,
    dietDetails: [
      "Vegetarian",
      "Contains Dairy and Eggs",
      "Can be Made Vegan (use dairy-free and egg substitutes)",
      "Can be Made Gluten-Free (use gluten-free flour)"
    ],
    nutritionalInformation: {
      servingSize: "1 slice (1/12 of the cake)",
      calories: "320",
      totalFat: "16g",
      saturatedFat: "7g",
      cholesterol: "45mg",
      sodium: "150mg",
      totalCarbohydrates: "40g",
      dietaryFiber: "2g",
      sugars: "28g",
      protein: "4g",
      vitaminA: "6%",
      vitaminC: "2%",
      calcium: "6%",
      iron: "8%"
    },
    flavorProfile: "Sweet, Rich, Chocolatey",
    nutritionalTags: [
     "High Calorie",
      "Low Protein",
       "High Fat"
    ],
    tags: ["Dessert", "Indulgent", "Sweet", "Chocolate", "Baked", "Over 1 hour"],
    videoUrl: "https://youtu.be/3nVnmjSWGfs?si=kiDULNXO5wf0az6i"
  }
  ,
  {
    id: 6,
    recipeTitle: "Pomegranate Juice",
    recipeDescription: "Pomegranate juice is a nutrient-packed drink known for its vibrant color and refreshing, tangy-sweet flavor.",
    imgUrl: "pomegranatejuice.jpeg", // Relative path to the image
    category: "Topstories-Recipes",
    preparationDescription: `
      1. Cut 2 ripe pomegranates in half.\n
      2. Hold each half over a large bowl, cut side down, and tap the back with a spoon to release the seeds. Alternatively, scoop out the seeds with your fingers.\n
      3. Once you have collected the seeds, transfer them to a blender or food processor.\n
      4. Blend the pomegranate seeds for 1-2 minutes until you get a smooth juice.\n
      5. Pour the juice through a fine mesh strainer or cheesecloth to remove the pulp and seeds.\n
      6. Pour the freshly strained juice into a glass or pitcher.\n
      7. Optional: Add a squeeze of lemon juice or a bit of honey for extra sweetness and flavor.\n
      8. Serve chilled over ice and enjoy a refreshing glass of pomegranate juice.\n
    `,
    dietDetails: [
      "Vegan",
      "Gluten-Free",
      "Low in Calories",
      "Rich in Antioxidants",
      "High in Vitamin C"
    ],
    nutritionalInformation: {
      servingSize: "1 cup (8 oz)",
      calories: "120",
      totalFat: "0g",
      saturatedFat: "0g",
      cholesterol: "0mg",
      sodium: "10mg",
      totalCarbohydrates: "33g",
      dietaryFiber: "1g",
      sugars: "30g",
      protein: "1g",
      vitaminA: "0%",
      vitaminC: "25%",
      calcium: "3%",
      iron: "2%"
    },
    flavorProfile: "Sweet, Tangy, Refreshing",
    nutritionalTags: [
      "Low Calorie",
      "High in Vitamin C",
      "Rich in Antioxidants"
    ],
    tags: ["Drink", "Vegan", "Gluten-Free", "Refreshing", "Under 30 minutes"],
    videoUrl: "https://youtube.com/shorts/peEv4Fd_c1w?si=CujuPmhElOCzE6Qm"
  }
  ,
  {
    id: 7,
    recipeTitle: "Kiwi, Avocado Green Smoothie",
    recipeDescription: "A creamy, refreshing smoothie packed with the goodness of kiwi, avocado, and spinach, perfect for a healthy start to your day.",
    imgUrl: "kivi.jpeg", // Relative path to the image
    category: "Topstories-Recipes",
    preparationDescription: `
      1. Peel and chop 2 ripe kiwis and 1 ripe avocado.\n
      2. Add the kiwi and avocado to a blender along with 1 cup of spinach leaves.\n
      3. Pour in 1/2 cup of coconut water or almond milk for a smooth texture.\n
      4. Add 1 tablespoon of honey or maple syrup for a touch of sweetness (optional).\n
      5. Blend the mixture until smooth. If the smoothie is too thick, add a bit more coconut water or almond milk.\n
      6. Taste and adjust sweetness, adding more honey or syrup if desired.\n
      7. Pour the smoothie into glasses and garnish with a slice of kiwi or a sprinkle of chia seeds.\n
      8. Serve immediately and enjoy this nutrient-packed, energizing smoothie.\n
    `,
    dietDetails: [
      "Vegan (if using plant-based milk)",
      "Gluten-Free",
      "Rich in Healthy Fats",
      "High in Fiber",
      "Good Source of Vitamin C"
    ],
    nutritionalInformation: {
      servingSize: "1 glass (approx. 1 cup)",
      calories: "220",
      totalFat: "12g",
      saturatedFat: "1.5g",
      cholesterol: "0mg",
      sodium: "15mg",
      totalCarbohydrates: "30g",
      dietaryFiber: "8g",
      sugars: "14g",
      protein: "3g",
      vitaminA: "20%",
      vitaminC: "80%",
      calcium: "6%",
      iron: "8%"
    },
    flavorProfile: "Creamy, Fresh, Slightly Sweet",
    nutritionalTags: [
      "High Fiber",
      "High Fats",
      "Vegan"
    ],
    tags: ["Smoothie", "Vegan", "Gluten-Free", "Healthy", "Under 30 minutes"],
    videoUrl: "https://youtu.be/cynQ1YdE0fY?si=u_mYPwAf_qLiDSV9"
  }
  ,
  {
    id: 8,
    recipeTitle: "Pancakes",
    recipeDescription: "Fluffy and golden pancakes, perfect for a delicious breakfast or brunch, topped with syrup and fresh fruits.",
    imgUrl: "Pancakes.jpeg", // Relative path to the image
    category: "Topstories-Recipes",
    preparationDescription: `
      1. In a large bowl, whisk together 1 1/2 cups all-purpose flour, 2 tablespoons sugar, 1 tablespoon baking powder, and a pinch of salt.\n
      2. In a separate bowl, beat 1 egg and add 1 1/4 cups milk, 3 tablespoons melted butter, and 1 teaspoon vanilla extract.\n
      3. Pour the wet ingredients into the dry ingredients and stir gently until just combined. Do not overmix; the batter should be lumpy.\n
      4. Heat a non-stick skillet or griddle over medium heat and lightly grease with butter or oil.\n
      5. Pour about 1/4 cup of batter onto the skillet for each pancake.\n
      6. Cook until bubbles form on the surface and the edges look set, about 2-3 minutes. Flip the pancakes and cook for another 1-2 minutes until golden brown.\n
      7. Remove from the skillet and serve immediately.\n
      8. Serve your pancakes with maple syrup, fresh fruits like berries or bananas, and a dusting of powdered sugar for a delicious breakfast treat.\n
    `,
    dietDetails: [
      "Vegetarian",
      "Can be Made Dairy-Free (with plant-based milk and butter)",
      "Can be Made Gluten-Free (with gluten-free flour)",
      "Rich in Carbohydrates",
      "Customizable with various toppings"
    ],
    nutritionalInformation: {
      servingSize: "1 pancake (1/4 of the batch)",
      calories: "120",
      totalFat: "5g",
      saturatedFat: "2g",
      cholesterol: "25mg",
      sodium: "120mg",
      totalCarbohydrates: "16g",
      dietaryFiber: "1g",
      sugars: "5g",
      protein: "3g",
      vitaminA: "4%",
      vitaminC: "0%",
      calcium: "6%",
      iron: "8%"
    },
    flavorProfile: "Buttery, Light, Sweet",
    nutritionalTags: [
      "High Carbohydrate",
      "Vegetarian",
      "Customizable"
    ],
    tags: ["Breakfast", "Vegetarian", "Gluten-Free", "Under 1 hour"],
    videoUrl: "https://youtu.be/NCMKedZvnyI?si=T_RIV8JnmKv1tWEl"
  }
  ,
  {
    id: 9,
    recipeTitle: "Chicken Madras",
    recipeDescription: "A spicy and flavorful South Indian curry made with tender chicken, aromatic spices, and a rich, tangy sauce.",
    imgUrl: "Chicken Madras.jpeg", // Relative path to the image
    category: "Topstories-Recipes",
    preparationDescription: `
      1. Heat 2 tablespoons of oil in a large pot over medium heat. Add 1 chopped onion and sauté until softened and golden brown.\n
      2. Add 3 minced garlic cloves and 1 tablespoon of grated ginger. Cook for 1 minute until fragrant.\n
      3. Stir in 2 tablespoons of Madras curry powder, 1 teaspoon turmeric, 1 teaspoon ground cumin, 1 teaspoon ground coriander, and 1/2 teaspoon ground cinnamon. Cook for another minute to toast the spices.\n
      4. Add 1 pound of chicken (cut into bite-sized pieces) to the pot and cook for 5-7 minutes, stirring occasionally until the chicken is browned on all sides.\n
      5. Pour in 1 can (14 oz) of diced tomatoes and 1 cup of chicken broth. Stir well to combine.\n
      6. Add 1 tablespoon of tamarind paste (or lemon juice) for tanginess and 1 teaspoon of sugar to balance the flavors. Season with salt to taste.\n
      7. Bring the mixture to a simmer, cover, and cook for 20-25 minutes, until the chicken is cooked through and the sauce thickens.\n
      8. Garnish with freshly chopped cilantro and serve hot with steamed rice or naan.\n
    `,
    dietDetails: [
      "Gluten-Free",
      "Can be Made Dairy-Free",
      "High in Protein",
      "Rich in Spices and Antioxidants"
    ],
    nutritionalInformation: {
      servingSize: "1 serving (approx. 1 cup)",
      calories: "320",
      totalFat: "18g",
      saturatedFat: "4g",
      cholesterol: "75mg",
      sodium: "650mg",
      totalCarbohydrates: "8g",
      dietaryFiber: "2g",
      sugars: "4g",
      protein: "30g",
      vitaminA: "10%",
      vitaminC: "20%",
      calcium: "4%",
      iron: "15%"
    },
    flavorProfile: "Spicy, Tangy, Savory",
    nutritionalTags: [
      "High in Protein",
      "Gluten-Free",
      "Rich in Antioxidants"
    ],
    tags: ["Dinner", "Gluten-Free", "High Protein", "Spicy", "Over 1 hour"],
    videoUrl: "https://youtu.be/W_AAKyVGwMs?si=ZXaN2BuJoqFf5_at"
  }
  ,
    {
      id: 10,
      recipeTitle: "Butterscotch Ice Cream",
      recipeDescription: "A creamy, indulgent dessert made with rich butterscotch flavor and a smooth, velvety texture.",
      imgUrl: "Butterscotch Ice Cream.jpeg", // Relative path to the image
      category: "Topstories-Recipes",
      preparationDescription: `
        1. In a medium saucepan, melt 1 cup of brown sugar over medium heat, stirring constantly until it becomes a smooth caramel.\n
        2. Add 1/4 cup of unsalted butter to the caramel and continue stirring until fully incorporated.\n
        3. Slowly pour in 1 cup of heavy cream, stirring continuously. Be careful as the mixture may bubble up.\n
        4. Continue stirring until the caramel sauce is smooth and combined with the cream. Remove from heat and let it cool for a few minutes.\n
        5. In a separate bowl, whisk together 2 cups of cold heavy cream and 1 cup of whole milk.\n
        6. Add the cooled butterscotch mixture to the cream and milk mixture, whisking until well combined.\n
        7. Stir in 1 teaspoon of vanilla extract for added flavor.\n
        8. Pour the mixture into an ice cream maker and churn according to the manufacturer's instructions until it reaches a soft-serve consistency.\n
        9. Transfer the ice cream to a lidded container and freeze for at least 4 hours or until firm.\n
        10. Serve the creamy butterscotch ice cream in bowls or cones, optionally garnished with crushed toffee bits or a drizzle of caramel sauce.\n
      `,
      dietDetails: [
        "Vegetarian",
        "Contains Dairy",
        "Can be Made Dairy-Free (with coconut milk or almond milk)",
        "Rich in Fats",
        "High in Sugar"
      ],
      nutritionalInformation: {
        servingSize: "1 scoop (1/2 cup)",
        calories: 250,
        totalFat: "16g",
        saturatedFat: "10g",
        cholesterol: "45mg",
        sodium: "50mg",
        totalCarbohydrates: "27g",
        dietaryFiber: "0g",
        sugars: "24g",
        protein: "2g",
        vitaminA: "8%",
        vitaminC: "0%",
        calcium: "8%",
        iron: "2%"
      },
      flavorProfile: "Sweet, Rich, Buttery",
  nutritionalTags: [
    "High Sugar",
    "High Fat",
    "Vegetarian"
  ],
  tags: ["Dessert", "Vegetarian", "Under 1 hour"],
  videoUrl: "https://youtu.be/L3ghuX1PlG8?si=oMfD3tekLtpc4ScL"
    }
,    
    {
      id: 11,
      recipeTitle: "Double-Decker Tropical Avocado Smoothies - Cooking Classy",
      recipeDescription: "A tropical and creamy smoothie made with fresh fruits and avocado, layered for a visually stunning and delicious drink.",
      imgUrl: "Double-decker.jpeg", // Relative path to the image
      category: "Topstories-Recipes",
      preparationDescription: `
        **For the Bottom Layer (Tropical Fruit Smoothie):**\n
        1. In a blender, combine 1 ripe avocado, 1/2 cup of pineapple chunks, 1/2 cup of mango, and 1/2 banana.\n
        2. Add 1/2 cup coconut water or almond milk for a smooth texture.\n
        3. Blend until smooth, adding more liquid if necessary to achieve a thick but pourable consistency.\n
        4. Pour the smoothie mixture into glasses, filling them about halfway.\n
    
        **For the Top Layer (Green Smoothie):**\n
        1. In the same blender, combine 1/2 ripe avocado, 1/2 cup spinach, 1/2 banana, and 1/4 cup of coconut milk or almond milk.\n
        2. Blend until smooth. If necessary, add a little more milk to thin out the mixture.\n
        3. Carefully pour the green smoothie mixture on top of the tropical fruit layer, creating a double-decker effect.\n
    
        4. Garnish with a slice of kiwi or a sprinkle of shredded coconut for a tropical touch.\n
        5. Serve immediately and enjoy your creamy, refreshing double-decker tropical smoothie.\n
      `,
      dietDetails: [
        "Vegan (if using plant-based milk)",
        "Gluten-Free",
        "Rich in Healthy Fats",
        "High in Fiber",
        "Packed with Vitamins A and C"
      ],
      nutritionalInformation: {
        servingSize: "1 glass (approx. 1 cup)",
        calories: 250,
        totalFat: "14g",
        saturatedFat: "2g",
        cholesterol: "0mg",
        sodium: "30mg",
        totalCarbohydrates: "30g",
        dietaryFiber: "8g",
        sugars: "15g",
        protein: "3g",
        vitaminA: "25%",
        vitaminC: "90%",
        calcium: "6%",
        iron: "6%"
      },
      flavorProfile: "Tropical, Creamy, Refreshing",
      nutritionalTags: [
        "Vegan",
        "Gluten-Free",
        "Rich in Healthy Fats"
      ],
      tags: ["Smoothie", "Vegan", "Under 1 hour"],
      videoUrl: "https://youtube.com/shorts/73-h2cThKeM?si=h5mRGJ74l87krgO3"
    },
    {
      id: 12,
      recipeTitle: "Chicken Biryani",
      recipeDescription: "A rich and aromatic Indian rice dish made with spiced chicken and basmati rice, layered together and cooked to perfection.",
      imgUrl: "chicken_biryani.jpeg", // Relative path to the image
      category: "Topstories-Recipes",
      preparationDescription: `
        **For the Rice:**\n
        1. Rinse 2 cups of basmati rice under cold water until the water runs clear. Soak the rice for 30 minutes.\n
        2. In a large pot, bring 6 cups of water to a boil. Add 2-3 bay leaves, 4-5 green cardamom pods, 1 cinnamon stick, 4-5 cloves, and 1 teaspoon of cumin seeds.\n
        3. Add the soaked rice to the boiling water and cook for about 5-7 minutes until the rice is 70% cooked. Drain the rice and set it aside.\n
    
        **For the Chicken Marinade:**
        1. In a bowl, mix 1 lb of chicken pieces with 1/2 cup plain yogurt, 1 tablespoon ginger-garlic paste, 1 teaspoon red chili powder, 1 teaspoon garam masala, 1 teaspoon turmeric, 1 teaspoon ground cumin, 1 tablespoon lemon juice, and salt to taste.\n
        2. Let the chicken marinate for at least 30 minutes (or overnight for deeper flavor).\n
    
        **For the Chicken Curry:**
        1. Heat 3 tablespoons of ghee or oil in a large pot. Add 1 sliced onion and sauté until golden brown and caramelized, about 7-10 minutes.\n
        2. Add the marinated chicken to the pot and cook for 7-10 minutes, stirring occasionally, until the chicken is browned on all sides.\n
        3. Add 1 can of diced tomatoes, 1/2 teaspoon of garam masala, 1/2 teaspoon of turmeric, and 1 teaspoon of chili powder. Stir and cook for another 10 minutes until the tomatoes break down and the curry thickens.\n
        4. Add 1/2 cup of water and let the chicken simmer for 15-20 minutes until fully cooked and tender.\n
    
        **Assembling the Biryani:**
        1. In a large pot, layer half of the cooked rice, followed by the chicken curry. Sprinkle with chopped cilantro and mint leaves.\n
        2. Add the remaining rice and top with more cilantro, mint, and a drizzle of ghee.\n
        3. Cover tightly with a lid and cook on low heat for 20-25 minutes to allow the flavors to meld (known as "dum").\n
        4. Remove from heat and let it rest for 10 minutes before serving.\n
    
        **Serving:**
        1. Serve the chicken biryani hot with raita (yogurt sauce), pickles, or a fresh salad on the side.\n
    
      `,
      dietDetails: [
        "Non-Vegetarian",
        "Contains Dairy (yogurt and ghee)",
        "Can be Made Gluten-Free",
        "High in Protein",
        "Rich in Spices and Antioxidants"
      ],
      nutritionalInformation: {
        servingSize: "1 serving (approx. 1 cup)",
        calories: "450",
        totalFat: "20g",
        saturatedFat: "7g",
        cholesterol: "70mg",
        sodium: "700mg",
        totalCarbohydrates: "45g",
        dietaryFiber: "2g",
        sugars: "5g",
        protein: "30g",
        vitaminA: "15%",
        vitaminC: "12%",
        calcium: "6%",
        iron: "20%"
      },
      flavorProfile: "Spicy, Aromatic, Savory",
    nutritionalTags: [
      "High Protein",
      "Non-Vegetarian",
      "Contains Dairy"
    ],
    tags: ["Indian", "Non-Vegetarian", "Under 2 hours"],
    videoUrl: "https://youtu.be/kHjkXysXChw?si=9NaOq0nbYm5TkR23"
    },
    {
      id: 13,
      recipeTitle: "Pancakes",
      recipeDescription: "Fluffy and golden breakfast pancakes served with syrup and fresh fruits.",
      imgUrl: "/pancakes_bf.jpeg",
      imgL:"/pancakesH.jpeg",
      category:"breakfast",
      preparationDescription: `
        1. Mix flour, sugar, baking powder, and salt in a bowl.\n
        2. Combine milk, eggs, melted butter, and vanilla in another bowl.\n
        3. Combine wet and dry ingredients, cook batter on a skillet until golden.\n
      `,
      dietDetails: ["Vegetarian", "Can be Dairy-Free", "Rich in Carbohydrates"],
      nutritionalInformation: {
        calories: "120",
        protein: "3g",
        carbs: "16g",
        fat: "5g"
      },
      ingredients: ["Flour", "Milk", "Eggs", "Butter", "Sugar", "Baking Powder"],
      flavorProfile: "Sweet, Buttery, Fluffy",
    nutritionalTags: [
      "Vegetarian",
      "Dairy-Free Option",
      "High Carb"
    ],
    tags: ["Breakfast", "Vegetarian", "Under 30 minutes"],
    videoUrl: "https://youtu.be/yqrfumtbVrA?si=RFP8gQACc3zw4TwI"
    },
    {
      id: 14,
      recipeTitle: "French Toast",
      recipeDescription: "Golden-brown toast soaked in egg mixture, served with syrup.",
      imgUrl:"/french toast.jpeg",
      imgL:"/french toastH",
      category:"breakfast",
      preparationDescription: `
        1. Beat eggs, milk, cinnamon, and vanilla in a bowl.\n
        2. Dip bread slices and fry until golden brown.\n
        3. Serve with syrup or fresh fruits.\n
      `,
      dietDetails: ["Vegetarian", "Can be Dairy-Free", "Rich in Protein"],
      nutritionalInformation: {
        calories: "150",
        protein: "5g",
        carbs: "18g",
        fat: "6g"
      },
      ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Butter"],
      flavorProfile: "Sweet, Cinnamon, Rich",
    nutritionalTags: [
      "Vegetarian",
      "Dairy-Free Option",
      "High Protein"
    ],
    tags: ["Breakfast", "Vegetarian", "Under 30 minutes"],
    videoUrl: "https://youtu.be/tegRkqRhNdg?si=FhOExOL4g2x9_KCd"
    },
    {
      id: 15,
      recipeTitle: "Oats Upma",
      recipeDescription: "A savory and healthy Indian breakfast dish made with oats and vegetables.",
      imgUrl: "/oats upma.jpeg",
      imgL:"oats upmaH",
      category:"breakfast",
      preparationDescription: `
        1. Dry roast oats until aromatic.\n
        2. Sauté mustard seeds, curry leaves, onions, and veggies.\n
        3. Add water and cook oats until soft.\n
      `,
      dietDetails: ["Vegetarian", "High in Fiber", "Rich in Nutrients"],
      nutritionalInformation: {
        calories: "200",
        protein: "6g",
        carbs: "30g",
        fat: "5g"
      },
      ingredients: ["Oats", "Carrots", "Onions", "Mustard Seeds", "Spices"],
      flavorProfile: "Savory, Spicy, Nutty",
    nutritionalTags: [
      "Vegetarian",
      "High Fiber",
      "High Nutrients"
    ],
    tags: ["Breakfast", "Vegetarian", "Under 30 minutes"],
    videoUrl: "https://youtu.be/Jyvxrpu2pRM?si=9YiBZmHa3L2lgXtY"
    },
    {
      id: 16,
      recipeTitle: "Scrambled Eggs",
      recipeDescription: "Creamy and fluffy scrambled eggs made with a touch of butter.",
      imgUrl: "/Scrambled Eggs.jpeg",
      imgL:"Scrambled EggsH.jpeg",
      category:"breakfast",
      preparationDescription: `
        1. Beat eggs with salt and pepper.\n
        2. Cook slowly in butter, stirring until creamy.\n
      `,
      dietDetails: ["Non-Vegetarian", "Rich in Protein", "Low Carb"],
      nutritionalInformation: {
        calories: "100",
        protein: "6g",
        carbs: "1g",
        fat: "8g"
      },
      ingredients: ["Eggs", "Butter", "Salt", "Pepper"],
      flavorProfile: "Buttery, Rich, Savory",
    nutritionalTags: [
      "Non-Vegetarian",
      "High Protein",
      "Low Carb"
    ],
    tags: ["Breakfast", "Non-Vegetarian", "Under 30 minutes"],
    videoUrl: "https://youtu.be/BJ791ykXDtc?si=bxbT2DTR7ND4yyX2"
    },
    {
      id: 17,
      recipeTitle: "Idli",
      recipeDescription: "Steamed rice cakes, a staple South Indian breakfast.",
      imgUrl: "/Idli.jpeg",
      imgL:"/IdliH.jpeg",
      category:"breakfast",
      preparationDescription: `
        1. Ferment rice and urad dal batter overnight.\n
        2. Steam in idli molds for 15 minutes.\n
      `,
      dietDetails: ["Vegetarian", "Gluten-Free", "Low Calorie"],
      nutritionalInformation: {
        calories: "60",
        protein: "2g",
        carbs: "12g",
        fat: "0.5g"
      },
      ingredients: ["Rice", "Urad Dal", "Salt"],
      flavorProfile: "Mild, Savory, Soft",
    nutritionalTags: [
      "Vegetarian",
      "Gluten-Free",
      "Low Calorie"
    ],
    tags: ["Breakfast", "Vegetarian", "Under 30 minutes"],
    videoUrl: "https://youtu.be/sG7JS6FfgUE?si=roOkAKxhniCKi6L8"
    },
    {
      id: 18,
      recipeTitle: "Dosa",
      recipeDescription: "A crispy and thin South Indian rice and lentil crepe.",
      imgUrl: "/Dosa.jpeg",
      imgL:"/Dosa1.jpeg",
      category:"breakfast",
      preparationDescription: `
        1. Prepare fermented batter from rice and urad dal.\n
        2. Spread on a hot griddle and cook until crisp.\n
      `,
      dietDetails: ["Vegetarian", "Gluten-Free", "Low Calorie"],
      nutritionalInformation: {
        calories: "90",
        protein: "3g",
        carbs: "20g",
        fat: "0.5g"
      },
      ingredients: ["Rice", "Urad Dal", "Salt", "Oil"],
      flavorProfile: "Crispy, Savory, Light",
    nutritionalTags: [
      "Vegetarian",
      "Gluten-Free",
      "Low Calorie"
    ],
    tags: ["Breakfast", "Vegetarian", "Under 30 minutes"],
    videoUrl: "https://youtu.be/DCOJMl9Sp2w?si=2PxZESbXRjWl6Mnz"
    },
    {
      id: 19,
      recipeTitle: "Avocado Toast",
      category:"breakfast",
      recipeDescription: "Healthy toast topped with smashed avocado and optional eggs.",
      imgUrl: "/Avocado Toast.jpeg",
      imgL:"/Avocado ToastH.jpeg",
      preparationDescription: `
        1. Toast bread slices.\n
        2. Spread smashed avocado and season with salt, pepper, and chili flakes.\n
      `,
      dietDetails: ["Vegetarian", "Vegan Option", "Rich in Healthy Fats"],
      nutritionalInformation: {
        calories: "150",
        protein: "3g",
        carbs: "20g",
        fat: "8g"
      },
      ingredients: ["Bread", "Avocado", "Salt", "Pepper"],
      flavorProfile: "Creamy, Savory, Fresh",
    nutritionalTags: [
      "Vegetarian",
      "Vegan Option",
      "Rich in Healthy Fats"
    ],
    tags: ["Breakfast", "Vegetarian", "Under 30 minutes"],
    videoUrl: "https://youtu.be/AT5Rm60i81o?si=SlolqacDClw6KxZp"
    },
    {
      id: 20,
      recipeTitle: "Paratha",
      recipeDescription: "Flaky Indian flatbread stuffed with potatoes or paneer.",
      imgUrl: "/Paratha.jpeg",
      imgL:"/ParathaH.jpeg",
      category:"breakfast",
      preparationDescription: `
        1. Knead whole wheat flour into dough.\n
        2. Roll and stuff with spiced mashed potatoes or paneer.\n
        3. Cook on a griddle with ghee.\n
      `,
      dietDetails: ["Vegetarian", "High Carb", "Customizable Fillings"],
      nutritionalInformation: {
        calories: "180",
        protein: "4g",
        carbs: "30g",
        fat: "6g"
      },
      ingredients: ["Wheat Flour", "Potatoes", "Spices", "Ghee"],
      flavorProfile: "Flaky, Savory, Rich",
    nutritionalTags: [
      "Vegetarian",
      "High Carb",
      "Customizable Fillings"
    ],
    tags: ["Breakfast", "Vegetarian", "Under 1 hour"],
    videoUrl: "https://youtu.be/cOLXzuMuCVM?si=W3yvsNKdXzlcy6qa"
  },
  {
      id: 21,
      recipeTitle: "Poha",
      recipeDescription: "A light and flavorful Indian dish made with flattened rice and spices.",
      imgUrl: "/poha1.jpeg",
      imgL:"/Poha.jpeg",
      category:"breakfast",
      preparationDescription: `
        1. Rinse flattened rice (poha) and set aside.\n
        2. Heat oil, add mustard seeds, curry leaves, and green chilies.\n
        3. Sauté onions, add turmeric and poha, mix well.\n
      `,
      dietDetails: ["Vegetarian", "Gluten-Free", "Low Calorie"],
      nutritionalInformation: {
        calories: "120",
        protein: "2g",
        carbs: "18g",
        fat: "3g"
      },
      ingredients: ["Flattened Rice (Poha)", "Onions", "Mustard Seeds", "Curry Leaves", "Turmeric"],
      flavorProfile: "Savory, Light, Spicy",
    nutritionalTags: [
      "Vegetarian",
      "Gluten-Free",
      "Low Calorie"
    ],
    tags: ["Breakfast", "Vegetarian", "Under 30 minutes"],
    videoUrl: "https://youtu.be/-MUXuB1ul4g?si=uXvwwQM7gwcYSzgM"
    },
    {
      id: 22,
      recipeTitle: "Smoothie Bowl",
      recipeDescription: "A nutrient-packed breakfast made with blended fruits and toppings.",
      imgUrl: "/Smoothie Bowl.jpeg",
      imgL:"smoothie bowlH.jpeg",
      category:"breakfast",
      preparationDescription: `
        1. Blend frozen fruits (e.g., bananas, berries) with yogurt or milk.\n
        2. Pour into a bowl and top with granola, nuts, and fresh fruits.\n
      `,
      dietDetails: ["Vegetarian", "Vegan Option", "Rich in Antioxidants"],
      nutritionalInformation: {
        calories: "200",
        protein: "4g",
        carbs: "30g",
        fat: "5g"
      },
      ingredients: ["Bananas", "Berries", "Yogurt", "Granola", "Nuts"],
      flavorProfile: "Sweet, Creamy, Tropical",
  nutritionalTags: ["Vegetarian", "Vegan Option", "Rich in Antioxidants"],
  tags: ["Breakfast", "Vegetarian", "Under 30 minutes"],
  videoUrl: "https://youtu.be/example8"
    },
    {
      id: 23,
      recipeTitle: "Banana Bread",
      recipeDescription: "Moist and sweet bread made with ripe bananas.",
      imgUrl: "/Banana Bread.jpeg",
      imgL:"/Banana BreadH",
      category:"breakfast",
      preparationDescription: `
        1. Mash ripe bananas and mix with sugar, eggs, butter, and vanilla.\n
        2. Add flour, baking powder, and mix well.\n
        3. Bake in a preheated oven at 350°F (175°C) for 50-60 minutes.\n
      `,
      dietDetails: ["Vegetarian", "Can be Dairy-Free", "Rich in Carbs"],
      nutritionalInformation: {
        calories: "220",
        protein: "3g",
        carbs: "35g",
        fat: "7g"
      },
      ingredients: ["Bananas", "Flour", "Sugar", "Eggs", "Butter", "Baking Powder"],
      flavorProfile: "Sweet, Moist, Nutty",
      nutritionalTags: ["Vegetarian", "High Carb", "Dairy-Free Option"],
      tags: ["Breakfast", "Under 60 minutes", "Vegetarian"],
      videoUrl: "https://youtu.be/example23"
    },
    {
      id: 24,
      recipeTitle: "Masala Omelette",
      recipeDescription: "A spicy Indian-style omelette with onions, chilies, and spices.",
      imgUrl:"/masala omeletteH.jpeg",
      imgL:"/masala omeletteH.jpeg",
      category:"breakfast",
      preparationDescription: `
        1. Beat eggs with chopped onions, chilies, tomatoes, and spices.\n
        2. Pour into a hot, oiled pan and cook until set.\n
      `,
      dietDetails: ["Non-Vegetarian", "High Protein", "Low Carb"],
      nutritionalInformation: {
        calories: "120",
        protein: "10g",
        carbs: "2g",
        fat: "8g"
      },
      ingredients: ["Eggs", "Onions", "Tomatoes", "Green Chilies", "Spices"],
      flavorProfile: "Spicy, Savory, Bold",
      nutritionalTags: ["Non-Vegetarian", "High Protein", "Low Carb"],
      tags: ["Breakfast", "Under 15 minutes", "Non-Vegetarian"],
      videoUrl: "https://youtu.be/example24"
    },
    {
      id: 25,
      recipeTitle: "Bagel with Cream Cheese",
      recipeDescription: "A classic breakfast featuring a toasted bagel with cream cheese.",
      imgUrl: "/Bagel cream.jpeg",
      imgL:"Bagel with Cream Cheese.jpeg",
      category:"breakfast",
      preparationDescription: `
        1. Slice and toast a bagel.\n
        2. Spread cream cheese evenly over both halves.\n
      `,
      dietDetails: ["Vegetarian", "Can be Dairy-Free", "Rich in Carbs"],
      nutritionalInformation: {
        calories: "250",
        protein: "6g",
        carbs: "35g",
        fat: "8g"
      },
      ingredients: ["Bagel", "Cream Cheese"],
      flavorProfile: "Creamy, Savory, Light",
      nutritionalTags: ["Vegetarian", "Dairy-Free Option", "High Carb"],
      tags: ["Breakfast", "Under 15 minutes", "Vegetarian"],
      videoUrl: "https://youtu.be/example25"
    },
    {
      id: 26,
      recipeTitle: "Veggie Sandwich",
      recipeDescription: "A healthy sandwich packed with fresh vegetables and hummus.",
      imgUrl: "/Sandwich.jpeg",
      imgL:"Veggie Sandwich.jpeg",
      category:"breakfast",
      preparationDescription: `
        1. Spread hummus on bread slices.\n
        2. Add sliced cucumbers, tomatoes, lettuce, and avocado.\n
        3. Assemble the sandwich and serve.\n
      `,
      dietDetails: ["Vegetarian", "Vegan Option", "High Fiber"],
      nutritionalInformation: {
        calories: "180",
        protein: "5g",
        carbs: "25g",
        fat: "7g"
      },
      ingredients: ["Bread", "Hummus", "Cucumbers", "Tomatoes", "Lettuce", "Avocado"],
      flavorProfile: "Fresh, Creamy, Light",
  nutritionalTags: ["Vegetarian", "Vegan Option", "High Fiber"],
  tags: ["Breakfast", "Under 15 minutes", "Vegetarian"],
  videoUrl: "https://youtu.be/example26"
    },
    {
      id: 27,
      recipeTitle: "Uttapam",
      recipeDescription: "Thick Indian pancakes topped with veggies and spices.",
      imgUrl: "/Uttapam.jpeg",
      imgL:"uttapamH.jpeg",
      category:"breakfast",
      preparationDescription: `
        1. Pour dosa batter onto a hot griddle.\n
        2. Sprinkle chopped onions, tomatoes, and chilies on top.\n
        3. Cook until golden and serve hot.\n
      `,
      dietDetails: ["Vegetarian", "Gluten-Free", "Rich in Carbs"],
      nutritionalInformation: {
        calories: "130",
        protein: "4g",
        carbs: "22g",
        fat: "3g"
      },
      ingredients: ["Dosa Batter", "Onions", "Tomatoes", "Green Chilies", "Oil"],
      flavorProfile: "Savory, Spicy, Comforting",
  nutritionalTags: ["Vegetarian", "Gluten-Free", "Low Fat"],
  tags: ["Breakfast", "Under 30 minutes", "Vegetarian"],
  videoUrl: "https://youtu.be/example27"
    }
,
{
  id: 28,
  recipeTitle: "Porridge",
  recipeDescription: "Warm and comforting oats porridge sweetened with honey.",
  imgUrl: "/Porridge.jpeg",
  imgL:"PorridgeH.jpeg",
  category:"breakfast",
  preparationDescription: `
    1. Boil oats with milk or water until thickened.\n
    2. Sweeten with honey and top with fruits and nuts.\n
  `,
  dietDetails: ["Vegetarian", "High Fiber", "Low Fat"],
  nutritionalInformation: {
    calories: "150",
    protein: "5g",
    carbs: "27g",
    fat: "2g"
  },
  ingredients: ["Oats", "Milk", "Honey", "Fruits", "Nuts"],
  flavorProfile: "Sweet, Comforting, Creamy",
  nutritionalTags: ["Vegetarian", "High Fiber", "Low Fat"],
  tags: ["Breakfast", "Under 15 minutes", "Vegetarian"],
  videoUrl: "https://youtu.be/example28"
},
{
  id: 29,
  recipeTitle: "Fruit Salad",
  recipeDescription: "A refreshing mix of seasonal fruits, perfect for a healthy breakfast.",
  imgUrl: "/Fruit Salad.jpeg",
  imgL:"Fruit SaladH.jpeg",
  category:"breakfast",
  preparationDescription: `
    1. Chop a variety of fruits like apples, bananas, and berries.\n
    2. Toss with a drizzle of honey and a squeeze of lemon.\n
  `,
  dietDetails: ["Vegetarian", "Vegan", "Rich in Vitamins"],
  nutritionalInformation: {
    calories: "100",
    protein: "1g",
    carbs: "22g",
    fat: "0g"
  },
  ingredients: ["Apples", "Bananas", "Berries", "Honey", "Lemon"],
  flavorProfile: "Fresh, Sweet, Citrusy",
  nutritionalTags: ["Vegetarian", "Vegan", "Rich in Vitamins"],
  tags: ["Breakfast", "Under 15 minutes", "Vegetarian"],
  videoUrl: "https://youtu.be/example29"
},
{
  id: 30,
  recipeTitle: "Chia Pudding",
  recipeDescription: "A creamy and nutrient-dense pudding made with chia seeds.",
  imgUrl: "/Chia Pudding.jpeg",
  imgL:"Chia PuddingH.jpeg",
  category:"breakfast",
  preparationDescription: `
    1. Mix chia seeds with milk and sweetener.\n
    2. Let it sit overnight and top with fruits or nuts.\n
  `,
  dietDetails: ["Vegetarian", "Vegan Option", "High Fiber"],
  nutritionalInformation: {
    calories: "120",
    protein: "4g",
    carbs: "12g",
    fat: "6g"
  },
  ingredients: ["Chia Seeds", "Milk", "Honey", "Fruits"],
  flavorProfile: "Creamy, Sweet, Nutty",
  nutritionalTags: ["Vegetarian", "Vegan Option", "High Fiber"],
  tags: ["Breakfast", "Under 15 minutes", "Vegetarian"],
  videoUrl: "https://youtu.be/example30"
},
{
  id: 31,
  recipeTitle: "Cornflakes with Milk",
  recipeDescription: "A quick breakfast made with crunchy cornflakes and milk.",
  imgUrl: "/Cornflakes with Milk.jpeg",
  imgL:"Cornflakes with MilkH.jpeg",
  category:"breakfast",
  preparationDescription: `
    1. Pour cornflakes into a bowl.\n
    2. Add cold or warm milk and optional fruits or nuts.\n
  `,
  dietDetails: ["Vegetarian", "Gluten-Free Option", "Quick & Easy"],
  nutritionalInformation: {
    calories: "100",
    protein: "3g",
    carbs: "18g",
    fat: "1g"
  },
  ingredients: ["Cornflakes", "Milk", "Fruits (optional)", "Nuts (optional)"],
  flavorProfile: "Crunchy, Sweet, Simple",
  nutritionalTags: ["Vegetarian", "Gluten-Free Option", "Quick & Easy"],
  tags: ["Breakfast", "Under 10 minutes", "Vegetarian"],
  videoUrl: "https://youtu.be/example31"
},
{
  id: 32,
  recipeTitle: "English Muffin with Egg",
  recipeDescription: "A hearty breakfast sandwich with egg and cheese.",
  imgUrl: "/English Muffin Breakfast.jpeg",
  imgL:"English Muffins.jpeg",
  category:"breakfast",
  preparationDescription: `
    1. Toast an English muffin.\n
    2. Cook an egg sunny-side up and layer with cheese and lettuce.\n
  `,
  dietDetails: ["Non-Vegetarian", "High Protein", "Balanced Meal"],
  nutritionalInformation: {
    calories: "210",
    protein: "10g",
    carbs: "20g",
    fat: "10g"
  },
  ingredients: ["English Muffin", "Egg", "Cheese", "Lettuce"],
  flavorProfile: "Savory, Cheesy, Hearty",
  nutritionalTags: ["Non-Vegetarian", "High Protein", "Balanced Meal"],
  tags: ["Breakfast", "Under 15 minutes", "Non-Vegetarian"],
  videoUrl: "https://youtu.be/example32"
},
{
  id: 33,
  recipeTitle: "Grilled Chicken Breast",
  recipeDescription: "A healthy and flavorful chicken dish marinated with herbs and grilled to perfection.",
  imgUrl: "/grilled_chicken_breast.jpeg",
  imgL:"Grilled Chicken BreastH.jpeg",
  preparationDescription: `
    1. Marinate chicken breast with olive oil, lemon juice, garlic, and mixed herbs for 30 minutes.\n
    2. Preheat a grill pan and cook the chicken for 5-7 minutes on each side until fully cooked.\n
    3. Let it rest for a few minutes before serving with a side of vegetables.\n
  `,
  dietDetails: ["High Protein", "Low Carb", "Gluten-Free"],
  nutritionalInformation: {
    calories: "200",
    protein: "30g",
    carbs: "2g",
    fat: "6g"
  },
  ingredients: ["Chicken Breast", "Olive Oil", "Lemon Juice", "Garlic", "Mixed Herbs"],
  category: "meals",
  flavorProfile: "Savory, Herby, Smoky",
  nutritionalTags: ["High Protein", "Low Carb", "Gluten-Free"],
  tags: ["Meals", "Under 30 minutes", "High Protein"],
  videoUrl: "https://youtu.be/example33"
},
{
  id: 34,
  recipeTitle: "Veggie Stir-Fry with Rice",
  recipeDescription: "A quick and colorful vegetable stir-fry served with steamed rice.",
  imgUrl: "/Veggie Stir-Fry with Rice.jpeg",
  imgL:"Veggie Stir-Fry with Rice.jpeg",
  preparationDescription: `
    1. Heat oil in a wok, add garlic, ginger, and sliced vegetables (bell peppers, carrots, broccoli).\n
    2. Stir-fry on high heat for 3-5 minutes.\n
    3. Add soy sauce, sesame oil, and a pinch of salt. Serve over steamed rice.\n
  `,
  dietDetails: ["Vegan", "High Fiber", "Low Fat"],
  nutritionalInformation: {
    calories: "250",
    protein: "6g",
    carbs: "40g",
    fat: "4g"
  },
  ingredients: ["Rice", "Bell Peppers", "Carrots", "Broccoli", "Soy Sauce", "Garlic", "Ginger"],
  category: "meals",
  flavorProfile: "Savory, Crisp, Fresh",
  nutritionalTags: ["Vegan", "High Fiber", "Low Fat"],
  tags: ["Dinner", "Quick", "Vegan", "20 minutes"],
  videoUrl: "https://youtu.be/example34"
},
{
  id: 35,
  recipeTitle: "Beef Tacos",
  recipeDescription: "Crispy tacos filled with seasoned beef, fresh veggies, and cheese.",
  imgUrl: "/Beef Tacos.jpeg",
  imgL:"Beef Tacos1.jpeg",
  preparationDescription: `
    1. Cook ground beef with taco seasoning until browned.\n
    2. Fill taco shells with beef, shredded lettuce, diced tomatoes, and grated cheese.\n
    3. Serve with salsa or sour cream.\n
  `,
  dietDetails: ["High Protein", "Rich in Iron", "Non-Vegetarian"],
  nutritionalInformation: {
    calories: "280",
    protein: "18g",
    carbs: "25g",
    fat: "12g"
  },
  ingredients: ["Ground Beef", "Taco Shells", "Lettuce", "Tomatoes", "Cheese", "Taco Seasoning"],
  category: "meals",
  flavorProfile: "Spicy, Savory, Rich",
  nutritionalTags: ["High Protein", "Rich in Iron"],
  tags: ["Dinner", "High Protein", "Non-Vegetarian", "30 minutes"],
  videoUrl: "https://youtu.be/example35"
},
{
  id: 36,
  recipeTitle: "Paneer Butter Masala",
  recipeDescription: "A creamy and rich North Indian curry made with paneer cubes and a spiced tomato gravy.",
  imgUrl: "/Paneer Butter Masala.jpeg",
  imgL:"Paneer Butter Masala1.jpeg",
  preparationDescription: `
    1. Heat butter, sauté onions and tomatoes with spices, and blend to form a smooth gravy.\n
    2. Add cream, paneer cubes, and simmer for 5-7 minutes.\n
    3. Garnish with coriander and serve with naan or rice.\n
  `,
  dietDetails: ["Vegetarian", "High Protein", "Rich in Calcium"],
  nutritionalInformation: {
    calories: "320",
    protein: "12g",
    carbs: "15g",
    fat: "24g"
  },
  ingredients: ["Paneer", "Tomatoes", "Onions", "Cream", "Butter", "Spices"],
  category: "meals",
  flavorProfile: "Creamy, Rich, Spicy",
  nutritionalTags: ["Vegetarian", "High Protein", "Calcium-rich"],
  tags: ["Lunch", "Vegetarian", "Rich", "40 minutes"],
  videoUrl: "https://youtu.be/example36"
},
{
  id: 37,
  recipeTitle: "Caesar Salad with Chicken",
  recipeDescription: "A classic Caesar salad topped with grilled chicken and crunchy croutons.",
  imgUrl: "/Caesar Salad with Chicken.jpeg",
  imgL:"Caesar Salad with ChickenH.jpeg",
  preparationDescription: `
    1. Grill chicken breast and slice into strips.\n
    2. Toss romaine lettuce with Caesar dressing and top with chicken, croutons, and Parmesan.\n
  `,
  dietDetails: ["High Protein", "Low Carb", "Gluten-Free Option"],
  nutritionalInformation: {
    calories: "230",
    protein: "20g",
    carbs: "8g",
    fat: "12g"
  },
  ingredients: ["Chicken Breast", "Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan Cheese"],
  category: "meals",
  flavorProfile: "Savory, Creamy, Crunchy",
  nutritionalTags: ["High Protein", "Low Carb", "Gluten-Free Option"],
  tags: ["Lunch", "High Protein", "Gluten-Free Option", "25 minutes"],
  videoUrl: "https://youtu.be/example37"
},
{
  id: 38,
  recipeTitle: "Thai Green Curry",
  recipeDescription: "A fragrant and creamy curry made with coconut milk, green curry paste, and vegetables.",
  imgUrl: "/Thai Green Curry.jpeg",
  imgL:"Thai Green CurryH.jpeg",
  preparationDescription: `
    1. Heat oil in a pan, add green curry paste and fry until fragrant.\n
    2. Add coconut milk, vegetables, and your choice of protein (chicken, tofu).\n
    3. Simmer until vegetables are tender. Serve with steamed jasmine rice.\n
  `,
  dietDetails: ["Gluten-Free", "Can be Vegan", "Rich in Flavor"],
  nutritionalInformation: {
    calories: "320",
    protein: "12g",
    carbs: "25g",
    fat: "18g"
  },
  ingredients: ["Green Curry Paste", "Coconut Milk", "Vegetables", "Chicken or Tofu", "Jasmine Rice"],
  category: "meals",
  flavorProfile: "Spicy, Creamy, Fragrant",
  nutritionalTags: ["Gluten-Free", "Can be Vegan", "Rich in Flavor"],
  tags: ["Dinner", "Vegan Option", "Fragrant", "35 minutes"],
  videoUrl: "https://youtu.be/example38"
},
{
  id: 39,
  recipeTitle: "Veggie Burrito Bowl",
  recipeDescription: "A wholesome bowl filled with rice, beans, veggies, and salsa.",
  imgUrl: "/Veggie Burrito Bowl.jpeg",
  imgL:"Veggie Burrito BowlH.jpeg",
  preparationDescription: `
    1. Cook rice and black beans separately.\n
    2. Assemble in a bowl with rice, beans, sautéed veggies, salsa, and guacamole.\n
    3. Garnish with cilantro and serve.\n
  `,
  dietDetails: ["Vegan", "High Fiber", "Low Fat"],
  nutritionalInformation: {
    calories: "350",
    protein: "10g",
    carbs: "50g",
    fat: "8g"
  },
  ingredients: ["Rice", "Black Beans", "Bell Peppers", "Salsa", "Guacamole"],
  category: "meals",
  flavorProfile: "Savory, Fresh, Spicy",
  nutritionalTags: ["Vegan", "High Fiber", "Low Fat"],
  tags: ["Dinner", "Vegan", "Quick", "25 minutes"],
  videoUrl: "https://youtu.be/example39"
},
{
  id: 40,
  recipeTitle: "Sambar Rice",
  recipeDescription: "A wholesome South Indian dish made by mixing rice with tangy lentil-based sambar.",
  imgUrl: "/Sambar Rice1.jpeg",
  imgL:"Sambar Rice.jpeg",
  preparationDescription: `
    1. Cook rice and toor dal (split pigeon peas) until soft.\n
    2. Prepare sambar with tamarind, vegetables (like drumsticks, carrots, and beans), and a spice blend.\n
    3. Mix cooked rice and dal with sambar and garnish with coriander and ghee.\n
    4. Serve with papad and pickle.\n
  `,
  dietDetails: ["Vegetarian", "High Fiber", "Rich in Protein"],
  nutritionalInformation: {
    calories: "300",
    protein: "10g",
    carbs: "55g",
    fat: "5g"
  },
  ingredients: ["Rice", "Toor Dal", "Vegetables", "Tamarind", "Sambar Powder"],
  category: "meals",
  flavorProfile: "Tangy, Spicy, Comforting",
  nutritionalTags: ["Vegetarian", "High Fiber", "Rich in Protein"],
  tags: ["Lunch", "Comfort Food", "Vegetarian", "50 minutes"],
  videoUrl: "https://youtu.be/example40"
},
{
  id: 41,
  recipeTitle: "Hyderabadi Chicken Biryani",
  recipeDescription: "A fragrant and flavorful rice dish cooked with marinated chicken, spices, and basmati rice.",
  imgUrl: "/Hyderabadi Chicken Biryani.jpeg",
  imgL:"Hyderabadi Chicken BiryaniH.jpeg",
  preparationDescription: `
    1. Marinate chicken with yogurt, ginger-garlic paste, and spices for 1-2 hours.\n
    2. Partially cook basmati rice with whole spices like cardamom and cinnamon.\n
    3. Layer marinated chicken and rice, drizzle with saffron milk, and cook on low heat (dum) for 30-40 minutes.\n
    4. Serve with raita or salan.\n
  `,
  dietDetails: ["Non-Vegetarian", "Rich in Protein", "High-Calorie Meal"],
  nutritionalInformation: {
    calories: "450",
    protein: "20g",
    carbs: "50g",
    fat: "15g"
  },
  ingredients: ["Chicken", "Basmati Rice", "Yogurt", "Spices", "Saffron"],
  category: "meals",
  flavorProfile: "Spicy, Fragrant",
  nutritionalTags: ["High Protein", "Non-Vegetarian"],
  tags: ["Dinner", "Spicy", "Rich in Protein", "50 minutes"],
  videoUrl: "https://youtu.be/example41"
},
{
  id: 42,
  recipeTitle: "Lemon Rice",
  recipeDescription: "A tangy rice dish flavored with lemon juice, curry leaves, and peanuts.",
  imgUrl: "/Lemon Rice.jpeg",
  imgL: "/Lemon RiceH.jpeg",
  preparationDescription: `
    1. Cook rice and let it cool.\n
    2. Heat oil, add mustard seeds, curry leaves, green chilies, and peanuts.\n
    3. Mix in cooked rice, turmeric, salt, and lemon juice.\n
    4. Serve with pickle or papad.\n
  `,
  dietDetails: ["Vegetarian", "Gluten-Free", "Quick Meal"],
  nutritionalInformation: {
    calories: "200",
    protein: "4g",
    carbs: "35g",
    fat: "5g"
  },
  ingredients: ["Rice", "Lemon Juice", "Curry Leaves", "Peanuts", "Turmeric"],
  category: "meals",
  flavorProfile: "Tangy, Spicy",
  nutritionalTags: ["Vegetarian", "Gluten-Free"],
  tags: ["Lunch", "Tangy", "Gluten-Free", "Quick (Under 20 minutes)"],
  videoUrl: "https://youtu.be/example42"
},
{
  id: 43,
  recipeTitle: "Curd Rice",
  recipeDescription: "A comforting and cooling dish made with yogurt, rice, and tempered spices.",
  imgUrl: "/Curd Rice.jpeg",
  imgL: "/Curd RiceH.jpeg",
  preparationDescription: `
    1. Cook rice and let it cool.\n
    2. Mix rice with yogurt, salt, and a splash of milk.\n
    3. Temper mustard seeds, curry leaves, and green chilies in oil and add to the curd rice.\n
    4. Garnish with coriander and serve chilled with pickle.\n
  `,
  dietDetails: ["Vegetarian", "Probiotic-Rich", "Easy to Digest"],
  nutritionalInformation: {
    calories: "200",
    protein: "6g",
    carbs: "30g",
    fat: "5g"
  },
  ingredients: ["Rice", "Yogurt", "Mustard Seeds", "Curry Leaves", "Green Chilies"],
  category: "meals",
  flavorProfile: "Mild, Comforting",
  nutritionalTags: ["Vegetarian", "Probiotic-Rich"],
  tags: ["Lunch", "Comfort Food", "Vegetarian", "20 minutes"],
  videoUrl: "https://youtu.be/example43"
},
{
  id: 44,
  recipeTitle: "Tomato Pappu",
  recipeDescription: "A tangy lentil curry made with toor dal, tomatoes, and tempered spices.",
  imgUrl: "/Tomato Pappu.jpeg",
  imgL: "/Tomato Pappu1.jpeg",
  preparationDescription: `
    1. Cook toor dal with chopped tomatoes, turmeric, and water until soft.\n
    2. Mash the dal and tomatoes, then add tempered spices (mustard seeds, garlic, dried red chilies).\n
    3. Simmer for 5 minutes and garnish with coriander leaves.\n
    4. Serve with steamed rice and ghee.\n
  `,
  dietDetails: ["Vegetarian", "Rich in Protein", "Gluten-Free"],
  nutritionalInformation: {
    calories: "220",
    protein: "10g",
    carbs: "30g",
    fat: "4g"
  },
  ingredients: ["Toor Dal", "Tomatoes", "Turmeric", "Garlic", "Spices"],
  category: "meals",
  flavorProfile: "Tangy, Spicy",
  nutritionalTags: ["Vegetarian", "Gluten-Free", "High Protein"],
  tags: ["Lunch", "Spicy", "Gluten-Free", "40 minutes"],
  videoUrl: "https://youtu.be/example44"
},
{
  id: 45,
  recipeTitle: "Vegetable Biryani",
  recipeDescription: "A fragrant rice dish loaded with spiced mixed vegetables and basmati rice.",
  imgUrl: "/Vegetable Biryani.jpeg",
  imgL: "/Vegetable BiryaniH.jpeg",
  preparationDescription: `
    1. Sauté onions, tomatoes, and spices, then add mixed vegetables and cook until tender.\n
    2. Partially cook basmati rice with whole spices and layer it with the vegetable mixture.\n
    3. Steam the layers on low heat (dum) for 20-30 minutes.\n
    4. Serve with raita or curry.\n
  `,
  dietDetails: ["Vegetarian", "Rich in Fiber", "Gluten-Free"],
  nutritionalInformation: {
    calories: "350",
    protein: "8g",
    carbs: "60g",
    fat: "10g",
  },
  ingredients: ["Basmati Rice", "Mixed Vegetables", "Onions", "Spices", "Yogurt"],
  category: "meals",
  flavorProfile: "Spicy",
  nutritionalTags: ["Vegan", "Gluten-Free", "High Fiber"],
  tags: ["Lunch", "Spicy", "Gluten-Free", "30 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 46,
  recipeTitle: "Chole Bhature",
  recipeDescription: "A classic Punjabi dish of spicy chickpea curry served with fluffy fried bread.",
  imgUrl: "/Chole Bhature.jpeg",
  imgL: "/Chole BhatureH.jpeg",
  preparationDescription: `
    1. Soak and cook chickpeas until tender.\n
    2. Sauté onions, ginger-garlic paste, and tomatoes. Add spices like chole masala and amchur.\n
    3. Simmer cooked chickpeas in the gravy until well-coated.\n
    4. Knead dough for bhature using flour, yogurt, and baking soda. Roll and deep fry.\n
    5. Serve hot with pickle and onions.\n
  `,
  dietDetails: ["Vegetarian", "Rich in Fiber", "High-Calorie Meal"],
  nutritionalInformation: {
    calories: "450",
    protein: "12g",
    carbs: "60g",
    fat: "15g"
  },
  ingredients: ["Chickpeas", "Onions", "Tomatoes", "Flour", "Spices"],
  category: "meals",
  flavorProfile: "Spicy",
  nutritionalTags: ["Vegan", "Gluten-Free", "High Fiber"],
  tags: ["Lunch", "Spicy", "Gluten-Free", "30 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},

{
  id: 47,
  recipeTitle: "Dal Makhani",
  recipeDescription: "A creamy lentil dish made with black lentils and kidney beans, slow-cooked in a rich gravy.",
  imgUrl: "/Dal Makhani.jpeg",
  imgL: "/Dal MakhaniH.jpeg",
  preparationDescription: `
    1. Soak black lentils and kidney beans overnight, then pressure cook.\n
    2. Prepare gravy with butter, onions, tomatoes, ginger-garlic paste, and spices.\n
    3. Add cooked lentils and beans to the gravy, then simmer with cream for a creamy consistency.\n
    4. Serve with naan or rice.\n
  `,
  dietDetails: ["Vegetarian", "Rich in Protein", "High-Calorie Meal"],
  nutritionalInformation: {
    calories: "380",
    protein: "14g",
    carbs: "30g",
    fat: "20g"
  },
  ingredients: ["Black Lentils", "Kidney Beans", "Cream", "Butter", "Spices"],
  category: "meals",
  flavorProfile: "Rich and Creamy",
  nutritionalTags: ["High Protein", "Gluten-Free"],
  tags: ["Dinner", "High Protein", "Rich", "40 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 48,
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
  category: "occasion",
  occasion: "Festival",
  categoryName: "Sweet Dish",
  flavorProfile: "Sweet",
  nutritionalTags: ["Rich", "High Calorie", "Vegetarian"],
  tags: ["Dessert", "Sweet", "Festival", "60 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 49,
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
  category: "occasion",
  occasion: "Festive Gathering",
  categoryName: "Traditional Dish",
  flavorProfile: "Earthy",
  nutritionalTags: ["Vegan", "High Fiber", "Gluten-Free"],
  tags: ["Lunch", "Traditional", "High Fiber", "60 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 50,
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
  category: "occasion",
  occasion: "Festival",
  categoryName: "Flatbread",
  flavorProfile: "Sweet",
  nutritionalTags: ["Rich", "High-Calorie", "Vegetarian"],
  tags: ["Dessert", "Sweet", "Festival", "90 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 51,
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
  category: "occasion",
  occasion: "Wedding",
  categoryName: "Main Course",
  flavorProfile: "Savory",
  nutritionalTags: ["Rich", "High Protein", "Non-Vegetarian"],
  tags: ["Main Course", "Rich in Protein", "40 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=example1"
},
{
  id: 52,
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
  category: "occasion",
  occasion: "Celebration",
  categoryName: "Cake",
  flavorProfile: "Sweet",
  nutritionalTags: ["Rich", "High Calorie", "Vegetarian"],
  tags: ["Dessert", "Sweet", "Festival", "90 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 53,
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
  category: "occasion",
  occasion: "Festival",
  categoryName: "Sweet Dish",
  flavorProfile: "Sweet",
  nutritionalTags: ["Rich", "High Calorie", "Vegetarian"],
  tags: ["Dessert", "Sweet", "Festival", "90 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 54,
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
  category: "occasion",
  occasion: "Tea Party",
  categoryName: "Starter",
  flavorProfile: "Savory",
  nutritionalTags: ["Rich", "Deep Fried", "Vegetarian"],
  tags: ["Starter", "Spicy", "Tea Party", "40 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 55,
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
  category: "occasion",
  occasion: "Eid",
  categoryName: "Sweet Dish",
  flavorProfile: "Sweet",
  nutritionalTags: ["Rich", "High Calorie", "Vegetarian"],
  tags: ["Dessert", "Sweet", "Eid", "60 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 56,
  recipeTitle: "Matar Paneer",
  recipeDescription: "A creamy curry made with paneer cubes and green peas cooked in a tomato-onion gravy.",
  imgUrl: "/Matar Paneer.jpeg",
  imgL: "/Matar PaneerH.jpeg",
  preparationDescription: `
    1. Sauté onions, ginger-garlic paste, and tomatoes. Blend into a smooth paste.\n
    2. Heat oil, add spices like cumin, garam masala, and coriander powder.\n
    3. Cook the blended paste with green peas and paneer cubes.\n
    4. Simmer for 10 minutes and garnish with cream and coriander leaves.\n
    5. Serve with roti, naan, or jeera rice.\n
  `,
  dietDetails: ["Vegetarian", "Protein-Rich", "Gluten-Free"],
  nutritionalInformation: {
    calories: "350",
    protein: "12g",
    carbs: "15g",
    fat: "25g"
  },
  ingredients: ["Paneer", "Green Peas", "Tomatoes", "Onions", "Spices"],
  category: "dinner",
  flavorProfile: "Savory",
  nutritionalTags: ["High Protein", "Gluten-Free", "Vegetarian"],
  tags: ["Dinner", "Protein-Rich", "Indian", "45 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 57,
  recipeTitle: "Palak Chicken",
  recipeDescription: "Chicken cooked in a vibrant and healthy spinach-based gravy.",
  imgUrl: "/Palak Chicken.jpeg",
  imgL: "/Palak ChickenHjpeg",
  preparationDescription: `
    1. Blanch spinach and blend it into a smooth puree.\n
    2. Marinate chicken with turmeric, chili powder, and yogurt.\n
    3. Sauté onions, garlic, and ginger, then add marinated chicken.\n
    4. Stir in the spinach puree and spices. Simmer for 15 minutes.\n
    5. Serve with roti, paratha, or rice.\n
  `,
  dietDetails: ["Non-Vegetarian", "Iron-Rich", "Low-Carb Option"],
  nutritionalInformation: {
    calories: "280",
    protein: "25g",
    carbs: "10g",
    fat: "12g"
  },
  ingredients: ["Chicken", "Spinach", "Onions", "Garlic", "Spices"],
  category: "dinner",
  flavorProfile: "Savory",
  nutritionalTags: ["Iron Rich", "Low Carb", "Non-Vegetarian"],
  tags: ["Dinner", "Healthy", "Spinach", "45 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 58,
  recipeTitle: "Aloo Gobi",
  recipeDescription: "A vegetarian curry made with potatoes and cauliflower, flavored with Indian spices.",
  imgUrl: "/Aloo Gobi.jpeg",
  imgL: "/Aloo GobiLH.jpeg",
  preparationDescription: `
    1. Heat oil and temper cumin seeds and green chilies.\n
    2. Add diced potatoes and cauliflower florets, then toss with turmeric, chili powder, and garam masala.\n
    3. Cook on low heat until tender.\n
    4. Garnish with coriander leaves and serve with chapati or rice.\n
  `,
  dietDetails: ["Vegetarian", "Low-Calorie", "Gluten-Free"],
  nutritionalInformation: {
    calories: "190",
    protein: "4g",
    carbs: "35g",
    fat: "5g"
  },
  ingredients: ["Potatoes", "Cauliflower", "Spices", "Coriander Leaves"],
  category: "dinner",
  flavorProfile: "Savory",
  nutritionalTags: ["Low Calorie", "Gluten Free", "Vegetarian"],
  tags: ["Dinner", "Low Calorie", "Vegan", "30 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 59,
  recipeTitle: "Fish Curry",
  recipeDescription: "A flavorful curry made with tender fish fillets cooked in a spiced coconut-based gravy.",
  imgUrl: "/Fish Curry.jpeg",
  imgL: "/Fish CurryH.jpeg",
  preparationDescription: `
    1. Marinate fish fillets with turmeric and salt.\n
    2. Sauté onions, garlic, and ginger, then add ground spices and coconut milk.\n
    3. Simmer the gravy, then gently add the marinated fish.\n
    4. Cook for 10 minutes and garnish with curry leaves.\n
    5. Serve with steamed rice.\n
  `,
  dietDetails: ["Non-Vegetarian", "High in Omega-3", "Low-Carb"],
  nutritionalInformation: {
    calories: "250",
    protein: "22g",
    carbs: "10g",
    fat: "15g"
  },
  ingredients: ["Fish", "Coconut Milk", "Onions", "Spices"],
  category: "dinner",
  flavorProfile: "Savory",
  nutritionalTags: ["High in Omega-3", "Low Carb", "Non-Vegetarian"],
  tags: ["Dinner", "Omega-3", "Seafood", "40 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 60,
  recipeTitle: "Bhindi Masala",
  recipeDescription: "A dry curry made with sautéed okra, onions, and a blend of spices.",
  imgUrl: "/Bhindi Masala.jpeg",
  imgL: "/Bhindi MasalaH.jpeg",
  preparationDescription: `
    1. Wash and dry okra, then slice into pieces.\n
    2. Sauté onions, green chilies, and garlic. Add sliced okra and cook on medium heat.\n
    3. Sprinkle turmeric, chili powder, and garam masala. Cook until tender.\n
    4. Serve with chapati or rice.\n
  `,
  dietDetails: ["Vegetarian", "Low-Calorie", "Fiber-Rich"],
  nutritionalInformation: {
    calories: "150",
    protein: "3g",
    carbs: "12g",
    fat: "8g"
  },
  ingredients: ["Okra", "Onions", "Garlic", "Spices"],
  category: "dinner",
  flavorProfile: "Savory",
  nutritionalTags: ["Low Carb", "Vegan", "Vegetarian"],
  tags: ["Dinner", "Vegan", "Indian", "30 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 61,
  recipeTitle: "Dal Tadka",
  recipeDescription: "A classic Indian lentil dish tempered with aromatic spices and ghee.",
  imgUrl: "/Dal Tadka.jpeg",
  imgL: "/Dal TadkaH.jpeg",
  preparationDescription: `
    1. Pressure cook yellow lentils (toor dal) with turmeric and water until soft.\n
    2. Heat ghee and sauté garlic, cumin seeds, and dry red chilies.\n
    3. Add chopped tomatoes and green chilies. Cook until soft.\n
    4. Mix the tempering with cooked dal and simmer for 5 minutes.\n
    5. Serve with steamed rice or roti.\n
  `,
  dietDetails: ["Vegetarian", "Protein-Rich", "Gluten-Free"],
  nutritionalInformation: {
    calories: "210",
    protein: "10g",
    carbs: "30g",
    fat: "6g"
  },
  ingredients: ["Toor Dal", "Tomatoes", "Garlic", "Ghee", "Spices"],
  category: "dinner",
  flavorProfile: "Savory",
    nutritionalTags: ["High Protein", "Vegetarian", "Gluten-Free"],
    tags: ["Dinner", "Indian", "30 minutes"],
    videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 62,
  recipeTitle: "Vegetable Pulao",
  recipeDescription: "A fragrant rice dish loaded with vegetables and mild spices.",
  imgUrl: "/Vegetable Pulao.jpeg",
  imgL: "/Vegetable PulaoH.jpeg",
  preparationDescription: `
    1. Wash and soak basmati rice for 30 minutes.\n
    2. Heat oil and sauté whole spices like cinnamon and cardamom.\n
    3. Add mixed vegetables (carrots, peas, beans) and stir with rice.\n
    4. Cook with water or broth until rice is tender.\n
    5. Serve with raita or curry.\n
  `,
  dietDetails: ["Vegetarian", "Gluten-Free", "Fiber-Rich"],
  nutritionalInformation: {
    calories: "240",
    protein: "6g",
    carbs: "45g",
    fat: "5g"
  },
  ingredients: ["Basmati Rice", "Carrots", "Peas", "Beans", "Spices"],
  category: "dinner",
    flavorProfile: "Savory",
    nutritionalTags: ["Gluten-Free", "Vegetarian", "High Fiber"],
    tags: ["Dinner", "Vegetarian", "Indian", "30 minutes"],
    videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
}
,
{
  id: 63,
  recipeTitle: "Chicken Tikka Masala",
  recipeDescription: "A flavorful chicken curry with smoky grilled chicken pieces in a spicy tomato sauce.",
  imgUrl: "/Chicken Tikka Masala.jpeg",
  imgL: "/Chicken Tikka MasalaH.jpeg",
  preparationDescription: `
    1. Marinate chicken with yogurt, spices, and lemon juice for 2 hours.\n
    2. Grill or sauté chicken until slightly charred.\n
    3. Prepare the curry base with butter, onions, tomatoes, and spices.\n
    4. Add cream and grilled chicken, simmer for 15 minutes.\n
    5. Serve with rice or naan.\n
  `,
  dietDetails: ["Non-Vegetarian", "Rich in Protein", "Gluten-Free"],
  nutritionalInformation: {
    calories: "430",
    protein: "25g",
    carbs: "10g",
    fat: "30g"
  },
  ingredients: ["Chicken", "Yogurt", "Tomatoes", "Cream", "Spices"],
  category: "dinner",
  flavorProfile: "Savory",
  nutritionalTags: ["high Protein", "Non-Vegetarian", "Gluten Free"],
  tags: ["Dinner", "Non-Vegetarian", "Indian", "30 minutes"],
  videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
}
,
{
  id: 64,
  recipeTitle: "Egg Curry",
  recipeDescription: "Boiled eggs simmered in a flavorful tomato-onion gravy with Indian spices.",
  imgUrl: "/Egg Curry.jpeg",
  imgL: "/Egg CurryH.jpeg",
  preparationDescription: `
    1. Boil eggs and set aside.\n
    2. Sauté onions, garlic, and ginger, then add chopped tomatoes and cook until soft.\n
    3. Add spices like garam masala, turmeric, and chili powder.\n
    4. Stir in boiled eggs and simmer for 10 minutes.\n
    5. Serve with roti or rice.\n
  `,
  dietDetails: ["Non-Vegetarian", "Protein-Rich", "Low-Carb"],
  nutritionalInformation: {
    calories: "220",
    protein: "12g",
    carbs: "8g",
    fat: "16g"
  },
  ingredients: ["Eggs", "Tomatoes", "Onions", "Garlic", "Spices"],
  category: "dinner",
  flavorProfile: "Savory",
    nutritionalTags: ["Low Carb", "high Protein", "Non-Vegetarian"],
    tags: ["Dinner", "Non-Vegetarian", "Indian", "30 minutes"],
    videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 65,
  recipeTitle: "Baingan Bharta",
  recipeDescription: "Smoked and mashed eggplant cooked with onions, tomatoes, and spices.",
  imgUrl: "/Baingan Bharta.jpeg",
  imgL: "/Baingan BhartaH.jpeg",
  preparationDescription: `
    1. Roast eggplants over an open flame until charred and soft. Peel and mash.\n
    2. Heat oil and sauté onions, garlic, and ginger. Add tomatoes and cook until soft.\n
    3. Stir in mashed eggplant and spices. Cook for 10 minutes.\n
    4. Garnish with coriander leaves and serve with roti or paratha.\n
  `,
  dietDetails: ["Vegetarian", "Low-Calorie", "Gluten-Free"],
  nutritionalInformation: {
    calories: "150",
    protein: "3g",
    carbs: "15g",
    fat: "8g"
  },
  ingredients: ["Eggplant", "Onions", "Tomatoes", "Garlic", "Spices"],
  category: "dinner",
  flavorProfile: "Savory",
    nutritionalTags: ["Low Calorie", "Vegetarian", "Gluten Free"],
    tags: ["Dinner", "Vegetarian", "Indian", "30 minutes"],
    videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 66,
  recipeTitle: "Rajma Masala",
  recipeDescription: "A hearty curry made with kidney beans simmered in a spiced tomato-onion gravy.",
  imgUrl: "/Rajma Masala.jpeg",
  imgL: "/Rajma MasalaH.jpeg",
  preparationDescription: `
    1. Soak kidney beans overnight and pressure cook until tender.\n
    2. Heat oil and sauté onions, ginger, and garlic. Add tomatoes and spices.\n
    3. Mix in the cooked kidney beans and simmer for 20 minutes.\n
    4. Garnish with coriander leaves and serve with steamed rice.\n
  `,
  dietDetails: ["Vegetarian", "High-Protein", "Gluten-Free"],
  nutritionalInformation: {
    calories: "320",
    protein: "14g",
    carbs: "40g",
    fat: "10g"
  },
  ingredients: ["Kidney Beans", "Tomatoes", "Onions", "Garlic", "Spices"],
  category: "dinner",
  flavorProfile: "Savory",
    nutritionalTags: ["High Protein", "Vegetarian", "Gluten Free"],
    tags: ["Dinner", "Vegetarian", "Indian", "30 minutes"],
    videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
},
{
  id: 67,
  recipeTitle: "Kachori with Sabzi",
  recipeDescription: "A traditional North Indian dish of crispy deep-fried kachoris served with spicy aloo sabzi.",
  imgUrl: "/Kachori with Sabzi.jpeg",
  imgL: "/Kachori with SabziH.jpeg",
  preparationDescription: `
    **For the Kachori:**\n
    1. Prepare a dough by mixing all-purpose flour, salt, and oil. Knead with water until smooth. Cover and rest for 30 minutes.\n
    2. Prepare the filling with roasted gram flour, crushed spices (fennel, cumin, coriander), asafoetida, and salt.\n
    3. Divide the dough into small balls, flatten them, and fill with the spiced mixture.\n
    4. Seal the edges and roll gently into discs. Deep fry on medium heat until golden and crispy.\n\n
    **For the Aloo Sabzi:**\n
    1. Heat oil in a pan and temper with mustard seeds, cumin seeds, and curry leaves.\n
    2. Add finely chopped onions and sauté until golden.\n
    3. Stir in tomatoes, turmeric, red chili powder, and garam masala. Cook until the oil separates.\n
    4. Add boiled and mashed potatoes, mix well, and simmer with water for 10 minutes.\n
    5. Garnish with coriander leaves and serve hot with the kachoris.\n
  `,
  dietDetails: ["Vegetarian", "Deep-Fried", "Spicy"],
  nutritionalInformation: {
    calories: "400",
    protein: "8g",
    carbs: "50g",
    fat: "15g"
  },
  ingredients: [
    "All-Purpose Flour",
    "Gram Flour",
    "Spices (Fennel, Cumin, Coriander)",
    "Potatoes",
    "Onions",
    "Tomatoes",
    "Oil"
  ],
  category: "dinner",
  flavorProfile: "Savory",
    nutritionalTags: ["Deep Fried", "Vegetarian", "Spicy"],
    tags: ["Dinner", "Vegetarian", "Indian", "30 minutes"],
    videoUrl: "https://www.youtube.com/watch?v=0GVEIZYU3oFwEQvJ"
}
    
  ];
  