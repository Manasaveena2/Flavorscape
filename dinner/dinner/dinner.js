let dinnerList=[
    {
        id: 1,
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
        category: "dinner"
      },
      {
        id: 2,
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
        category: "dinner"
      },
      {
        id: 3,
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
        category: "dinner"
      },
      {
        id: 4,
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
        category: "dinner"
      },
      {
        id: 5,
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
        category: "dinner"
      },
      {
        id: 6,
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
        category: "dinner"
      },
      {
        id: 7,
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
        category: "dinner"
      }
      ,
      {
        id: 8,
        recipeTitle: "Chicken Tikka Masala",
        recipeDescription: "A flavorful chicken curry with smoky grilled chicken pieces in a spicy tomato sauce.",
        imgUrl: "/Chicken TikkaMasala.jpeg",
        imgL: "/Chicken TikkaMasalaH.jpeg",
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
        category: "dinner"
      }
      ,
      {
        id: 9,
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
        category: "dinner"
      },
      {
        id: 10,
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
        category: "dinner"
      },
      {
        id: 11,
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
        category: "dinner"
      },
      {
        id: 12,
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
        category: "dinner"
      }
      
      
      
      
      
      
]