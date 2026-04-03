export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  tags?: string[]
  badge?: string
  dietary?: string[]
}

export const menuItems: MenuItem[] = [
  // BRUNCH
  {
    id: 'b1',
    name: 'Build-Your-Own Brunch',
    description: 'Choose your base, protein, and two sides. House-made sourdough, fresh eggs your way, and seasonal accompaniments.',
    price: 22,
    category: 'Brunch',
    badge: 'Customer Favourite',
    dietary: ['Vegetarian Option'],
  },
  {
    id: 'b2',
    name: 'Big Basket Breakfast',
    description: 'Poached free-range eggs, streaky bacon, roasted tomato, sautéed mushrooms, house-made baked beans, and toasted sourdough.',
    price: 26,
    category: 'Brunch',
    badge: 'Popular',
  },
  {
    id: 'b3',
    name: 'Eggs Benedict',
    description: 'House-made hollandaise, wilted spinach, and prosciutto on toasted brioche. Finished with crispy capers and fresh chives.',
    price: 23,
    category: 'Brunch',
    dietary: ['Can be Gluten Free'],
  },
  {
    id: 'b4',
    name: 'Avocado & Feta Toast',
    description: 'Whipped feta, smashed avocado, dukkah, pickled red onion, and soft-boiled egg on toasted sourdough.',
    price: 20,
    category: 'Brunch',
    dietary: ['Vegetarian'],
  },
  {
    id: 'b5',
    name: 'Smoked Salmon & Scrambled Eggs',
    description: 'Slow-scrambled free-range eggs, cold-smoked salmon, crème fraîche, capers, and fresh dill on toasted rye.',
    price: 24,
    category: 'Brunch',
    badge: 'Must Try',
    dietary: ['Gluten Free Option'],
  },

  // FUSION SPECIALS
  {
    id: 'f1',
    name: 'Miso Salmon Bowl',
    description: 'Atlantic salmon fillet glazed with white miso, served over steamed jasmine rice, pickled cucumber, edamame, and sesame slaw.',
    price: 28,
    category: 'Fusion Specials',
    badge: 'Chef\'s Favourite',
    dietary: ['Gluten Free', 'Dairy Free'],
  },
  {
    id: 'f2',
    name: 'Teriyaki Chicken Brunch Plate',
    description: 'House teriyaki chicken thigh, soft-boiled egg, pickled daikon, steamed rice, and roasted nori. A comforting fusion of Japanese flavour and brunch warmth.',
    price: 26,
    category: 'Fusion Specials',
    badge: 'Popular',
    dietary: ['Dairy Free'],
  },
  {
    id: 'f3',
    name: 'Korean-Spiced Beef Hash',
    description: 'Slow-cooked beef short rib, crispy potato hash, gochujang aioli, kimchi slaw, and two poached eggs.',
    price: 27,
    category: 'Fusion Specials',
    badge: 'Must Try',
  },
  {
    id: 'f4',
    name: 'Truffle Edamame Toast',
    description: 'Smashed edamame with yuzu zest and truffle oil on toasted sourdough, topped with shaved parmesan and microgreens.',
    price: 19,
    category: 'Fusion Specials',
    dietary: ['Vegetarian'],
  },

  // SUSHI
  {
    id: 's1',
    name: 'Salmon Nigiri (2 pcs)',
    description: 'Hand-pressed sushi rice topped with fresh Atlantic salmon. Served with pickled ginger, wasabi, and soy.',
    price: 12,
    category: 'Sushi',
    badge: 'Popular',
    dietary: ['Gluten Free', 'Dairy Free'],
  },
  {
    id: 's2',
    name: 'Avocado & Cucumber Roll (6 pcs)',
    description: 'Classic maki roll with creamy avocado, crisp cucumber, and seasoned sushi rice. Light, fresh, and satisfying.',
    price: 13,
    category: 'Sushi',
    dietary: ['Vegetarian', 'Gluten Free'],
  },
  {
    id: 's3',
    name: 'Spicy Tuna Roll (6 pcs)',
    description: 'Fresh tuna with sriracha mayo, cucumber, and spring onion. A Blind Basket favourite — bold flavour in every bite.',
    price: 16,
    category: 'Sushi',
    badge: 'Customer Favourite',
  },
  {
    id: 's4',
    name: 'Prawn Tempura Roll (6 pcs)',
    description: 'Crispy tempura prawns, avocado, cucumber, and Japanese mayo. Topped with sesame and eel sauce.',
    price: 17,
    category: 'Sushi',
    badge: 'Must Try',
  },
  {
    id: 's5',
    name: 'Sashimi Selection (9 pcs)',
    description: 'Chef\'s choice of the day\'s freshest fish — salmon, tuna, and snapper — served with traditional accompaniments.',
    price: 24,
    category: 'Sushi',
    dietary: ['Gluten Free', 'Dairy Free'],
  },

  // COFFEE
  {
    id: 'c1',
    name: 'Flat White',
    description: 'Our house-roasted single origin espresso with velvety microfoam milk. Finished with delicate latte art.',
    price: 6,
    category: 'Coffee',
    badge: 'Signature',
  },
  {
    id: 'c2',
    name: 'Long Black',
    description: 'Double-shot espresso over hot water. Clean, bold, and beautifully aromatic.',
    price: 5.5,
    category: 'Coffee',
    dietary: ['Dairy Free', 'Vegan'],
  },
  {
    id: 'c3',
    name: 'Oat Milk Latte',
    description: 'Smooth espresso with steamed oat milk. Naturally sweet and wonderfully creamy.',
    price: 7,
    category: 'Coffee',
    dietary: ['Dairy Free', 'Vegan'],
  },
  {
    id: 'c4',
    name: 'Matcha Latte',
    description: 'Ceremonial grade matcha whisked with steamed milk. Earthy, smooth, and gently energising.',
    price: 7.5,
    category: 'Coffee',
    badge: 'Popular',
    dietary: ['Vegetarian'],
  },
  {
    id: 'c5',
    name: 'Piccolo',
    description: 'A concentrated shot of espresso with a small amount of textured milk. Intense and balanced.',
    price: 5.5,
    category: 'Coffee',
  },

  // SMOOTHIES & DRINKS
  {
    id: 'd1',
    name: 'Super Brown Smoothie',
    description: 'Peanut butter, banana, cacao, oat milk, honey, and a shot of espresso. Thick, indulgent, and deeply satisfying.',
    price: 12,
    category: 'Smoothies & Drinks',
    badge: 'Customer Favourite',
    dietary: ['Vegetarian'],
  },
  {
    id: 'd2',
    name: 'Tropical Green Smoothie',
    description: 'Mango, pineapple, spinach, coconut water, and lime. Refreshing, thick, and naturally sweet.',
    price: 11,
    category: 'Smoothies & Drinks',
    dietary: ['Vegan', 'Gluten Free'],
  },
  {
    id: 'd3',
    name: 'Berry Bliss Smoothie',
    description: 'Mixed berries, banana, Greek yogurt, honey, and almond milk. Rich in antioxidants and beautifully thick.',
    price: 11,
    category: 'Smoothies & Drinks',
    dietary: ['Vegetarian'],
  },
  {
    id: 'd4',
    name: 'Fresh Orange Juice',
    description: 'Cold-pressed from hand-selected Valencia oranges. Pure, bright, and vibrant.',
    price: 8,
    category: 'Smoothies & Drinks',
    dietary: ['Vegan', 'Gluten Free'],
  },
  {
    id: 'd5',
    name: 'Iced Jasmine Tea',
    description: 'Chilled jasmine green tea with honey syrup and fresh mint. Delicate and calming.',
    price: 7,
    category: 'Smoothies & Drinks',
    dietary: ['Vegan', 'Gluten Free'],
  },

  // KIDS & FAMILY
  {
    id: 'k1',
    name: 'Little Ones Breakfast',
    description: 'Scrambled eggs, toast fingers, and a small juice. Simple, nourishing, and made with care.',
    price: 13,
    category: 'Kids & Family',
    dietary: ['Vegetarian'],
  },
  {
    id: 'k2',
    name: 'Mini Pancake Stack',
    description: 'Fluffy buttermilk pancakes with maple syrup and fresh berries. A weekend favourite for little ones.',
    price: 14,
    category: 'Kids & Family',
    dietary: ['Vegetarian'],
  },
  {
    id: 'k3',
    name: 'Kids Sushi Plate',
    description: 'Four pieces of cucumber and avocado maki with a side of edamame. Gently introduced flavours children love.',
    price: 12,
    category: 'Kids & Family',
    dietary: ['Vegetarian', 'Dairy Free'],
  },
  {
    id: 'k4',
    name: 'Babycino',
    description: 'Warm frothed milk with a dusting of cacao. The perfect little treat.',
    price: 2.5,
    category: 'Kids & Family',
    dietary: ['Vegetarian'],
  },
]

export const menuCategories = ['Brunch', 'Fusion Specials', 'Sushi', 'Coffee', 'Smoothies & Drinks', 'Kids & Family']

export const menuHighlights = [
  {
    id: 'h1',
    name: 'Miso Salmon Bowl',
    description: 'Atlantic salmon glazed with white miso, over jasmine rice, pickled cucumber, and sesame slaw. Clean, elegant, and deeply nourishing.',
    badge: 'Chef\'s Favourite',
    icon: '🍣',
  },
  {
    id: 'h2',
    name: 'Sushi Selection',
    description: 'Fresh-made daily. From salmon nigiri to spicy tuna rolls — crafted with care, served with precision.',
    badge: 'Customer Favourite',
    icon: '🎋',
  },
  {
    id: 'h3',
    name: 'Build-Your-Own Brunch',
    description: 'Your perfect plate, exactly how you want it. Choose your base, protein, and sides from our seasonal selection.',
    badge: 'Popular',
    icon: '🍳',
  },
  {
    id: 'h4',
    name: 'Flat White & Latte Art',
    description: 'House-roasted single origin espresso with silky microfoam. Every cup finished with delicate hand-poured art.',
    badge: 'Signature',
    icon: '☕',
  },
  {
    id: 'h5',
    name: 'Super Brown Smoothie',
    description: 'Peanut butter, banana, cacao, oat milk, honey, and espresso. Thick, indulgent, and incredibly satisfying.',
    badge: 'Must Try',
    icon: '🥤',
  },
  {
    id: 'h6',
    name: 'Fusion Brunch Favourites',
    description: 'Asian-inspired twists on brunch classics. Korean beef hash, teriyaki chicken, yuzu edamame toast, and more.',
    badge: 'Popular',
    icon: '🌿',
  },
]
