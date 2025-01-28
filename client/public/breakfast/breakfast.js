let breakfastList=[
    {
        id: 1,
        recipeTitle: "Pancakes",
        recipeDescription: "Fluffy and golden breakfast pancakes served with syrup and fresh fruits.",
        imgUrl: "/pancakes.jpeg",
        imgL:"/pancakesH.jpeg",
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
        ingredients: ["Flour", "Milk", "Eggs", "Butter", "Sugar", "Baking Powder"]
      },
      {
        id: 2,
        recipeTitle: "French Toast",
        recipeDescription: "Golden-brown toast soaked in egg mixture, served with syrup.",
        imgUrl:"/french toast.jpeg",
        imgL:"/french toastH",
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
        ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Butter"]
      },
      {
        id: 3,
        recipeTitle: "Oats Upma",
        recipeDescription: "A savory and healthy Indian breakfast dish made with oats and vegetables.",
        imgUrl: "/oats upma.jpeg",
        imgL:"oats upmaH",
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
        ingredients: ["Oats", "Carrots", "Onions", "Mustard Seeds", "Spices"]
      },
      {
        id: 4,
        recipeTitle: "Scrambled Eggs",
        recipeDescription: "Creamy and fluffy scrambled eggs made with a touch of butter.",
        imgUrl: "/Scrambled Eggs.jpeg",
        imgL:"Scrambled EggsH.jpeg",
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
        ingredients: ["Eggs", "Butter", "Salt", "Pepper"]
      },
      {
        id: 5,
        recipeTitle: "Idli",
        recipeDescription: "Steamed rice cakes, a staple South Indian breakfast.",
        imgUrl: "/Idli.jpeg",
        imgL:"/IdliH.jpeg",
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
        ingredients: ["Rice", "Urad Dal", "Salt"]
      },
      {
        id: 6,
        recipeTitle: "Dosa",
        recipeDescription: "A crispy and thin South Indian rice and lentil crepe.",
        imgUrl: "/Dosa.jpeg",
        imgL:"/Dosa1.jpeg",
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
        ingredients: ["Rice", "Urad Dal", "Salt", "Oil"]
      },
      {
        id: 7,
        recipeTitle: "Avocado Toast",
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
        ingredients: ["Bread", "Avocado", "Salt", "Pepper"]
      },
      {
        id: 8,
        recipeTitle: "Paratha",
        recipeDescription: "Flaky Indian flatbread stuffed with potatoes or paneer.",
        imgUrl: "/Paratha.jpeg",
        imgL:"/ParathaH.jpeg",
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
        ingredients: ["Wheat Flour", "Potatoes", "Spices", "Ghee"]
    },
    {
        id: 9,
        recipeTitle: "Poha",
        recipeDescription: "A light and flavorful Indian dish made with flattened rice and spices.",
        imgUrl: "/poha1.jpeg",
        imgL:"/Poha.jpeg",
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
        ingredients: ["Flattened Rice (Poha)", "Onions", "Mustard Seeds", "Curry Leaves", "Turmeric"]
      },
      {
        id: 10,
        recipeTitle: "Smoothie Bowl",
        recipeDescription: "A nutrient-packed breakfast made with blended fruits and toppings.",
        imgUrl: "/Smoothie Bowl.jpeg",
        imgL:"smoothie bowlH.jpeg",
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
        ingredients: ["Bananas", "Berries", "Yogurt", "Granola", "Nuts"]
      },
      {
        id: 11,
        recipeTitle: "Banana Bread",
        recipeDescription: "Moist and sweet bread made with ripe bananas.",
        imgUrl: "/Banana Bread.jpeg",
        imgL:"/Banana BreadH",
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
        ingredients: ["Bananas", "Flour", "Sugar", "Eggs", "Butter", "Baking Powder"]
      },
      {
        id: 12,
        recipeTitle: "Masala Omelette",
        recipeDescription: "A spicy Indian-style omelette with onions, chilies, and spices.",
        imgUrl: "/Masala Omelette.jpeg",
        imgL:"masala omeletteH.jpeg",
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
        ingredients: ["Eggs", "Onions", "Tomatoes", "Green Chilies", "Spices"]
      },
      {
        id: 13,
        recipeTitle: "Bagel with Cream Cheese",
        recipeDescription: "A classic breakfast featuring a toasted bagel with cream cheese.",
        imgUrl: "/Bagel cream.jpeg",
        imgL:"Bagel with Cream Cheese.jpeg",
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
        ingredients: ["Bagel", "Cream Cheese"]
      },
      {
        id: 14,
        recipeTitle: "Veggie Sandwich",
        recipeDescription: "A healthy sandwich packed with fresh vegetables and hummus.",
        imgUrl: "/Sandwich.jpeg",
        imgL:"Veggie Sandwich.jpeg",
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
        ingredients: ["Bread", "Hummus", "Cucumbers", "Tomatoes", "Lettuce", "Avocado"]
      },
      {
        id: 15,
        recipeTitle: "Uttapam",
        recipeDescription: "Thick Indian pancakes topped with veggies and spices.",
        imgUrl: "/Uttapam.jpeg",
        imgL:"uttapamH.jpeg",
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
        ingredients: ["Dosa Batter", "Onions", "Tomatoes", "Green Chilies", "Oil"]
      }
,
{
    id: 16,
    recipeTitle: "Porridge",
    recipeDescription: "Warm and comforting oats porridge sweetened with honey.",
    imgUrl: "/Porridge.jpeg",
    imgL:"PorridgeH.jpeg",
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
    ingredients: ["Oats", "Milk", "Honey", "Fruits", "Nuts"]
  },
  {
    id: 17,
    recipeTitle: "Fruit Salad",
    recipeDescription: "A refreshing mix of seasonal fruits, perfect for a healthy breakfast.",
    imgUrl: "/Fruit Salad.jpeg",
    imgL:"Fruit SaladH.jpeg",
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
    ingredients: ["Apples", "Bananas", "Berries", "Honey", "Lemon"]
  },
  {
    id: 18,
    recipeTitle: "Chia Pudding",
    recipeDescription: "A creamy and nutrient-dense pudding made with chia seeds.",
    imgUrl: "/Chia Pudding.jpeg",
    imgL:"Chia PuddingH.jpeg",
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
    ingredients: ["Chia Seeds", "Milk", "Honey", "Fruits"]
  },
  {
    id: 19,
    recipeTitle: "Cornflakes with Milk",
    recipeDescription: "A quick breakfast made with crunchy cornflakes and milk.",
    imgUrl: "/Cornflakes with Milk.jpeg",
    imgL:"Cornflakes with MilkH.jpeg",
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
    ingredients: ["Cornflakes", "Milk", "Fruits (optional)", "Nuts (optional)"]
  },
  {
    id: 20,
    recipeTitle: "English Muffin with Egg",
    recipeDescription: "A hearty breakfast sandwich with egg and cheese.",
    imgUrl: "/English Muffin Breakfast.jpeg",
    imgL:"English Muffins.jpeg",
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
    ingredients: ["English Muffin", "Egg", "Cheese", "Lettuce"]
  }
          
      

]