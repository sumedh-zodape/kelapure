export interface ProductData {
  id: string;
  image: string;
  subImages?: string[];  // Array of sub-images for the product
  title: string;
  description: string;
  ingredients?: string;
  traditionalFlavors?: string;
  greatWithIndianMeals?: string;
  oilFreePreparation?: string;
  freshnessFriendlyPackaging?: string;
  fullOfFlavorAroma?: string;
  coarseGround?: string;
  versatileIngredient?: string;
  uses?: string;
  benefits?: string;
  nutritionalValue?: string;
  weight?: string;
  price?: string;
  subPrice?: string;
  isFastingFriendly?: boolean;
  nutritionalBenefits?: string;
  versatileUse?: string;
}

export const arrayOfData: ProductData[] = [
  {
    id: "1",
    image: "/Sattu_Flours.png",
    subImages: [
      "/Sattu_Flours.png",
      "/Sattu_Flours.png"
    ],
    title: "Sattu Flours",
    price: "65",
    subPrice: "₹180",
    weight: "200 g",
    description: "Sattu is a traditional Indian flour made by grinding roasted pulses and cereals, primarily chickpeas (chana). It's a popular summer drink and ingredient in various dishes, particularly in India. Sattu is known for its protein, fiber, and nutrient content, making it a healthy and versatile food source.",
    ingredients: "Sattu is primarily made from roasted chickpeas, but can also include other pulses like lentils, and cereals like wheat, barley, or sorghum. Preparation: The flour is made by roasting the chickpeas or other ingredients and then grinding them into a fine powder. Popular Uses: Sattu is a key ingredient in the popular summer drink, Sattu ka sharbat, which is a refreshing and nutritious beverage. It can also be used in various dishes like parathas (flatbreads), porridges, and even in desserts. Health Benefits: Sattu is a good source of protein, fiber, and essential nutrients. It aids digestion, provides energy, and can help with weight management due to its high satiety. Nutritional Value: Sattu is a valuable source of protein, especially for vegetarians and vegans. It also contains fiber, which promotes healthy digestion and helps with gut health."
  },
  {
    id: "2",
    image: "/Shengadana_Chutney.png",
    subImages: [
      "/Shengadana_Chutney.png",
      "/Shengadana_Chutney.png"
    ],
    title: "Shengdana Chutney",
    price: "50",
    subPrice: "₹150",
    weight: "100 g",
    description: "It is the powerhouse of vegetarian protein packed with antioxidants. They have a low glycemic index, making them a great food option for people with diabetes and PCOS. They are great for pregnant women due to their high folate contentIt is proven that regular consumption of peanuts will help decrease the chance of heart-related ailments. Peanuts are made up of heart-healthy nutrients. They have antioxidant resveratrol, a healthy dose of unsaturated fats, magnesium, and copper, which contribute to keeping your heart healthy.",
    traditionalFlavors: "Crafted with a simple, time-tested blend of roasted groundnuts, cumin seeds, chilli powder, and iodized salt, this shengdana chutney delivers the classic flavors that are deeply rooted in Indian kitchens and taste traditions",
    greatWithIndianMeals: "This versatile peanut chutney complements a variety of dishes — from hot parathas and crispy dosas to soft idlis and comforting steamed rice with ghee. It's a reliable and easy way to enhance everyday meals with a familiar, homemade-style taste.",
    oilFreePreparation: "Prepared the traditional way, this shenga chutney uses the natural oils released from roasted peanuts during grinding, so you get a rich texture and taste, all without any added oil.",
    freshnessFriendlyPackaging: "This mudda peanut chutney is packed in a secure and convenient pouch that helps retain its flavor and aroma over time. Whether at home, in lunch boxes, or on the go, it stays ready to use whenever you need it",
    fullOfFlavorAroma: "Sprinkle it over your meals or enjoy it on the side — this groundnut chutney adds a spicy, nutty, and aromatic layer of taste that blends beautifully with various Indian foods."
  },
  {
    id: "3",
    image: "/Suji_Satvik_I.png",
    subImages: [
      "/Suji_Satvik_I.png",
      "/Suji_Satvik_I.png"
    ],
    title: "Suji",
    price: "80",
    subPrice: "₹100",
    weight: "200 g",
    description: "KELAPURE Satvik Food Soji is made from assorted wheat grain. It's a coarse-ground grain that is commonly used in Indian cooking, especially in dishes like upma and halwa. Sooji is also known as Dalia.",
    coarseGround: "Sooji is made by milling durum wheat into coarse granules, unlike the fine flour (maida) made from",
    versatileIngredient: "Sooji is made by milling durum wheat into coarse granules, unlike the fine flour (maida) made from"
  },
  {
    id: "4",
    image: "/Upavas_Flours.png",
    subImages: [
      "/Upavas_Flours.png",
      "/Upavas_Flours.png"
    ],
    title: "Upavas Flour",
    price: "65",
    subPrice: "₹240",
    weight: "200 g",
    description: "Kelapure Upwas Bhajani Pith is a special flour mix used during fasting periods, especially during religious festivals. It's made with a combination of ingredients that are allowed during upwas (fast) times, like sago (sabudana), amaranth (rajgira), and other suitable grains and flours. This flour is versatile and can be used to make various fasting-friendly dishes such as thalipeeth (pancakes) and bhajani chakli.",
    ingredients: "Upwas Bhajani Pith typically includes flours and grains like water chestnut flour (singhare ka atta), amaranth flour (rajgira), barnyard millet flour (sama rice), and sago pearls (sabudana).",
    isFastingFriendly: true,
    nutritionalBenefits: "Upwas Bhajani Pith can be a good source of nutrients, especially when compared to standard flours.",
    versatileUse: "You can make a dough or batter with the flour and use it to create a variety of dishes like thalipeeth (pancakes), bhajani chakli (a type of snack), and other fasting-friendly treats"
  },
  {
    id: "5",
    image: "/Sabudana_FLours.png",
    subImages: [
      "/Sabudana_FLours.png",
      "/Sabudana_FLours.png"
    ],
    title: "Sabudana Flour",
    price: "40",
    subPrice: "₹110",
    weight: "200 g",
    description: "Sabudana atta, also known as sago flour or tapioca flour, is a flour made from ground tapioca pearls, a type of starch extracted from the cassava plant. It's a popular ingredient in Indian cooking, especially during fasting times, due to its ease of digestion and high carbohydrate content. Sabudana atta is naturally gluten-free and is used to make various dishes like rotis, pancakes, and snacks.",
    uses: "Primarily used in Indian cuisine, especially for fasting and for creating various dishes.",
    benefits: "Easy to digest, provides energy, gluten-free, and can be used in baking and as a thickening agent.",
    nutritionalValue: "High in carbohydrates, low in protein and fiber, and suitable for those trying to gain weight."
  },
  {
    id: "6",
    image: "/Singhada_Flours.png",
    subImages: [
      "/Singhada_Flours.png",
      "/Singhada_Flours.png"
    ],
    title: "Shingada Flour",
    price: "95",
    subPrice: "220",
    weight: "100 g",
    description: "Kelapure Satvik Food Singhara atta, also known as water chestnut flour, is a gluten-free flour made by grinding assorted dried water chestnuts. It's a popular choice in India, especially during fasting periods, due to its savory flavor and nutritional benefits. Singhara atta is rich in potassium and low in sodium, and is considered a good source of carbohydrates and energy-boosting nutrients like iron, calcium, zinc, and phosphorus.",
    uses: "• Cooking: You can use it to make various dishes, including parathas, pakoras, halwa, and more. • Fasting: It's a common ingredient in Navratri fasting recipes. • Gluten-free alternatives: It's a great alternative to regular wheat flour for those who follow a gluten-free diet.",
    benefits: "• Nutritious: Singhara atta provides a good source of carbohydrates, potassium, iron, calcium, zinc, phosphorus, and other nutrients. • Good for digestion: It's known to aid digestion and promote gastrointestinal health. • Low in sodium and high in potassium: This helps with maintaining electrolyte balance and supports heart health. • Antioxidant properties: Singhara atta is rich in antioxidants like ferulic acid, which can help protect the body against damage from free radicals. • Good for fasting: It's a popular choice during fasting periods in India as it provides energy and keeps you satisfied while adhering to religious dietary restrictions. • Versatile in cooking: Singhara atta can be used in various dishes like pancakes, puris, and chapattis."
  },
  {
    id: "7",
    image: "/package.png",
    subImages: [
      "/subImage1.png",
      "/subImage2.png"
    ],
    title: "Sattu Sip",
    price: "30",
    subPrice: "300",
    weight: "60 g",
    description: "In the summer heat in India where temperature can get real hot, Superfood Sattu Sip has a miraculous cooling effect on the body. Sattu is a flour prepared by mixing chana dal with any wheat grains, roasted and ground as per the individual taste. It takes just about 2 minutes to prepare. Simple superfood Sattu Sip description is that it's a beverage made with Sattu flour, Nutmeg, saffron, cardamom, milk and suger. All you need is to have is KELAPURE Satvik Food Sattu Sip pack and a glass of cold water to prepare tasty, healthy and nutritious sattu drink. The delicious drink is liked by all age groups and is very easy to digest. Sattu Sip so easy to prepare that it can be presented to unannounced guests in matter of couple of minutes. This website also has a Sattu Sip preparation video to assist its large clientele."
  },
  {
    id: "8",
    image: "/Rajgira_Flours.png",
    subImages: [
      "/Rajgira_Flours.png",
      "/Rajgira_Flours.png"
    ],
    title: "Rajgira Flour",
    price: "65",
    subPrice: "190",
    weight: "200 g",
    description: "KELAPURE Satvik Food Rajgira Atta is obtained from Rajgira/Ramadana (amaranth seeds). It is an ideal source of proteins for vegetarians and is mostly consumed during a fast. This flour in gluten-free. This flour is used for making dessert like halwa, ladoo and also used for making dosa, cheela, poori, and chapatti. Amaranth (rajgira) is derived from the Greek word meaning 'everlasting'. Indeed, amaranth has been a continuous, strong presence in diets across the world since thousands of years. There is evidence of amaranth being used in UP in India and, later on, by the Aztecs in the 15th and 16th centuries in South America. Amaranth boasts a super healthy nutrition profile packed with protein, manganese, and amino acids."
  },
  {
    id: "9",
    image: "/Rajgira_Satvik_I.png",
    subImages: [
      "/Rajgira_Satvik_I.png",
      "/Rajgira_Satvik_I.png"
    ],
    title: "Rajgira Lahi",
    price: "30",
    subPrice: "170",
    weight: "60 g",
    description: "KELAPURE Satvik Food presents this rajgira Lahi which would make many nostalgic. Prepared following the traditional methods the Rajgira Lahi from Kelapure is very tasty and crunchy. With high health benefits, the Rajgira Lahi is loved by many fitness enthusiasts. One can mix the Rajgira Lahi with other savoury or add spices to them to prepare a healthy, tasty, and crunchy snack! Amaranth puff refers to popped amaranth seeds, which are tiny, nutrient-dense grains that puff up when heated similarly to popcorn. Amaranth is a gluten-free pseudo-cereal that's high in protein, fiber, and various vitamins and minerals."
  },
  {
    id: "10",
    image: "/package.png",
    subImages: [
      "/subImage1.png",
      "/subImage2.png"
    ],
    title: "Pachak Saunf",
    price: "100",
    subPrice: "120",
    weight: "100 g",
    description: "PACHAK SAUNF IS AN CLASSIC BLEND OF AROMATIC AND FLAVOURED FENNELS SEEDS(SAUNF). MIX WITH LIQUORICE (JESHTHMAD) AND OTHER FLAVOURING SUBSTANCES.IT IS APPRECIATED AND CELEBRATED BY ALL OUR CONSUMERS .PACHAK SAUNF OF KELAPURE SATVIK FOOD CAN BE ENJOYED BY EACH ONE IN OUR FAMILY. FENNEL SEEDS HAVE NUMEROUS HEALTH BENEFITS AND IMPROVES IMMUNITY"
  },
  {
    id: "11",
    image: "/Javas_Chutney.png",
    subImages: [
      "/Javas_Chutney.png",
      "/Javas_Chutney.png"
    ],
    title: "Javas Chutney",
    price: "50",
    subPrice: "160",
    weight: "100 g",
    description: "Jawas chutney is a traditional Maharashtrian condiment made with flaxseeds (Jawas) and other flavorful ingredients. This chutney is a perfect blend of tanginess, spiciness, and nuttiness, which goes well with many dishes such as vada pav, sandwiches, parathas, etc. The chutney is made with the finest quality of flaxseeds and other ingredients to ensure a rich and authentic taste. It is a must-try for those who want to experience the true flavors of Maharashtrian cuisine. Discover the secret to flavorful and nutritious meals.Don't miss out on the opportunity to elevate your meals with this delectable Jawas Chutney. order जवस चटणी and experience the best of taste and health in every bite.Made from assorted flax seeds, garlic, chilly powder, etc. Can be used with Roti, Bhakari, Chapati or Khakara."
  },
  {
    id: "12",
    image: "/Lehsun_Chutney.png",
    subImages: [
      "/Lehsun_Chutney.png",
      "/Lehsun_Chutney.png"
    ],
    title: "Lehsun Chutney",
    price: "65",
    subPrice: "140",
    weight: "100 g",
    description: "Garlic dry coconut chutney is a staple accompaniment to meals in Maharashtra as well as in other regions of India. This spicy, zingy chutney packs a punch and adds a lot of flavor to all your dishes. Traditionally, lasun chatni is often consumed with bhakri, but it goes perfectly with various preparations. Indulge in the bold flavors of our लसूण चटणी (Garlic Chutney) from Kelapure. Buy लसूण चटणी for an authentic taste of India's culinary delights!लसूण चटणी is here to add a burst of flavor to your meals and snacks. Made with the finest garlic cloves, handpicked spices, and a secret blend of ingredients, our Lasun Chutney is the perfect balance of heat, spice, and zest."
  },
  {
    id: "13",
    image: "/package.png",
    subImages: [
      "/subImage1.png",
      "/subImage2.png"
    ],
    title: "Moringa Powder",
    price: "300",
    subPrice: "350",
    weight: "100 g",
    description: "The Moringa tree (scientifically known as Moringa Oleifera Lam.), also called the Drumstick tree, is home to the most nutritious leaves, according to Ayurveda - the Moringa Oleifera leaf.With the powder you get from these Drumstick leaves (known as Sahjan in Hindi), every scoop contains.A boost of Vitamin A, B, C & D. With a boosted immune system.Minerals like zinc, calcium & iron.That contribute to a healthy gut & healthy bones.Natural Antioxidants.To keep your energy levels upWith Kapiva Organic Moringa Powder, you get only organic Moringa without the nasties - No Preservatives, 100% Ayurvedic & Vegan.So be it having moringa powder for drinking or a sweet, healthy Moringa Laddoo, turn your entire day around and get More With Organic Moringa Powder from Kelapure Satvik Food."
  },
  {
    id: "14",
    image: "/Bharda.png",
    subImages: [
      "/Bharda.png",
      "/Bharda.png"
    ],
    title: "Bharda",
    price: "75",   
    subPrice: "120",
    weight: "200 g",
    description: "Bharda is a coarsely ground mix of dals. When availability of vegetables is an issue because of extreme heat, stocking some bharda can ensure a delicious meal on the table always because this mixture can bulk up any stir fry vegetable dish, and make it tastier.In the arid land of Marathwada and Vidharba, two of the most dry regions of Maharashtra, a common pantry staple is bharda.This coarsely ground mix of dals is a homely cousin of the ubiquitous chickpea flour or besan, which is more common in the other parts of India.Deriving its name from bharad(Marathi: crushing coarsely), this mixture finds itself in many everyday recipes.Traditionally, bharda was made using only chana dal(split chickpeas).As this dal is difficult to digest, it has evolved to accommodate other dals like moong(mung beans) and masoor(red lentils).The outcome is a beautiful colourful mix that you can keep in a jar and use as you like."
  },
  {
    id: "15",
    image: "/package.png",
    subImages: [
      "/subImage1.png",
      "/subImage2.png"
    ],
    title: "Beetroot Powder",
    price: "220",
    subPrice: "260",
    weight: "100 g",
    description: "• Our delicious Organic Beetroot Powder is low in calories and packed with vitamins, minerals and plant compounds that are essential for your wellbeing.Our Organic Beetroot Powder is made by dehydrating ripe and fully mature beets to have maximum nutrients.Rich in fibre, vitamins, minerals, antioxidants and nitratesHelps improve circulatory functions, keeps blood pressure in check, fights inflammation, improves digestive health, increase insulin sensitivity, and relieve symptoms of diabetic neuropathy.This powder is great for juices, smoothies, curries and soups. Can be used as natural colouring agent in any Indian recipes to enhance its visual presence.It's rich in iron, vitamins, and minerals that promote hair growth, strengthen follicles, and improve scalp health. Beetroot powder can also be used as a natural hair dye and as a component in hair masks to nourish and condition the hair."
  },
  {
    id: "16",
    image: "/package.png",
    subImages: [
      "/subImage1.png",
      "/subImage2.png"
    ],
    title: "Curry Leaves Powder",
    price: "180",
    subPrice: "220",
    weight: "50 g",
    description: "Do you remember the irresistible smell of the crunchy curry leaves sizzling in hot oil — a comforting reminder of meals made with love? Curry Leaf Powder brings back that nostalgic essence of Traditional Indian kitchens, packed into a fragrant, flavorful blend that elevates your everyday dishes. Made from fresh, handpicked organic curry leaves, carefully dried and ground, this powder captures the authentic taste and aroma of home-cooked food.Its dark green hue, slightly nutty flavor, and natural aroma make it a must-have addition to your pantry. Why Choose Our Curry Leaf Powder? Traditionally Prepared to preserve natural flavor and nutrition.No added preservatives, artificial flavoring, or color — just nature's goodness. Versatile Use: Mix it with hot rice and ghee for a quick meal, sprinkle on idlis/dosas, or add to gravies for an extra burst of flavor. Let every spoonful of KELAPURE Curry Leaf Powder take you back to your roots — to the traditional, nourishing meals made by hands that cared.",
    ingredients: "Spice: Curry leaf powder is a key ingredient in many South Indian dishes, including curries, dals, and soups, adding a distinct flavor and aroma. Tadka: It can be used in tadka (a type of tempering) for dals, raitas, and other dishes. Marinades: Curry leaves can be added to marinades for chicken, fish, or other meats to add flavor and tenderness. Rice: A tsp of curry leaf powder can be added to rice to improve digestion and nutrient absorption. Hair and Skin Care:"
  },
  {
    id: "17",
    image: "/Til_Chutney.png",
    subImages: [
      "/Til_Chutney.png",
      "/Til_Chutney.png"
    ],
    title: "Til Chutney",
    price: "50",
    subPrice: "₹150",
    weight: "100 g",
    description: "Maharashtrian Sesame Taste maker – called Til-Chutney in Marathi. Kelapure Til Chutney is an all time super favourite of all our valuable customers. Spicy, aromatic and nutty Kelapure Til Chutney powder is mainly made with roasted sesame seeds. It's nice to have this chutney on hand all the time, and not just to enjoy with a traditional Maharashtrian meal.One may love sprinkling it on a slice of butter-slathered fresh bread… or with Idli, Dosa, Utthappam, Puris…. But hey, let's do some fusion stuff…. sprinkle it on Tacos and Pita Pocket sandwiches too …. you get the idea. Heck, One may sometimes reach into the jar and pop a small spoonful into the mouth, just by itself! Yumm!",
    ingredients: "Health Benefits of Sesame Seeds: Sesame seeds are yet another marvel of nature! Don't underestimate the power of this tiny seed – it packs an abundance of nutrients that support both physical and mental well-being. Its multidimensional impact on health and wellness continues to be investigated via modern scientific methods. The results, not surprisingly, align very well with ancient Ayurvedic descriptions of the health benefits of sesame seeds and sesame oil.So…. what exactly are some of the benefits of sesame seeds/oil? Sesame seeds are believed to support cardiovascular health, lower blood pressure and blood sugar, ease osteoarthritic discomfort such as knee pain, etc. All these effects seem to be related to the presence of a substance called Sesamin, a lignan known to possess antioxidant and anti-inflammatory properties.Sesame seeds are also rich in protein, good fats, and numerous micronutrients. Besides being rich in calcium, they also contain iron, copper, zinc, selenium and Vitamin B6. All of these are vital in producing thyroid hormones – this is why sesame seeds are believed to support thyroid health as well. Kelapure Til Chutney Popularity Meter: A pantry staple in many a Maharashtrian household, golden brown Kelapure Til chutney gives off a rich and inviting aroma. The nutty texture of the crushed sesame seeds serves as the perfect vehicle for the spicy heat of chilli peppers, delicately balanced with a hint of sweetness from sugar. Enjoy it with hot chapatis, Bhakri, Dhirda, Thalipeeth,…. or even just with steaming hot rice and Ghee — oh, the Kelapure Til Chutney elevates everything!"
  }
];
