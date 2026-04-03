export interface Review {
  id: string
  name: string
  location?: string
  rating: number
  text: string
  highlight?: string
  date?: string
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Sarah M.',
    location: 'Auckland',
    rating: 5,
    text: 'Honestly one of my favourite brunch spots in the city. The atmosphere is calm and beautifully put together — the kind of place you want to linger in. The miso salmon bowl was outstanding, and the flat white was perfect. Service was warm and genuinely friendly. I\'ve been back three times already.',
    highlight: 'One of my favourite brunch spots in the city.',
    date: 'March 2025',
  },
  {
    id: 'r2',
    name: 'James K.',
    location: 'Mt Eden',
    rating: 5,
    text: 'Blind Basket is a hidden gem. I walked past it for months before finally going in, and now I\'m annoyed at myself for waiting so long. The fusion menu is genuinely creative — not gimmicky, just well-thought-out. The sushi was fresh and excellent. The kind of place that makes your morning feel like a treat.',
    highlight: 'A hidden gem I wish I\'d discovered sooner.',
    date: 'February 2025',
  },
  {
    id: 'r3',
    name: 'Priya & Anand',
    location: 'Ponsonby',
    rating: 5,
    text: 'We came for a brunch date and left absolutely delighted. The café has a beautiful, unhurried feeling to it — no rush, no noise, just good food and great coffee. The teriyaki chicken brunch plate was something special. Latte art on our flat whites was gorgeous. We\'ll be regulars.',
    highlight: 'A beautiful, unhurried feeling — no rush, just great food.',
    date: 'January 2025',
  },
  {
    id: 'r4',
    name: 'Rachel T.',
    location: 'Remuera',
    rating: 5,
    text: 'Brought the whole family — kids included — and everyone was happy. There\'s something for everyone on the menu, which is rare. My children loved the mini sushi plate and the babycinos. The adults had the build-your-own brunch and the smoothies. The café was clean, calm, and the staff were wonderful with the kids. Highly recommend.',
    highlight: 'Something for everyone — brilliant for families.',
    date: 'December 2024',
  },
  {
    id: 'r5',
    name: 'Oliver N.',
    location: 'Newmarket',
    rating: 5,
    text: 'The food here is genuinely fresh and well-made. I\'ve tried a lot of Auckland brunch spots and the fusion angle here is done with real intention. The spicy tuna roll for brunch sounds unusual but it works beautifully. Great coffee. Friendly, knowledgeable staff. Already booked to come back.',
    highlight: 'Fusion done with real intention — it genuinely works.',
    date: 'November 2024',
  },
  {
    id: 'r6',
    name: 'Emma & Sophie',
    location: 'Grey Lynn',
    rating: 5,
    text: 'We\'ve made this our regular Sunday morning spot. The Super Brown Smoothie is life-changing — thick, rich, and genuinely fills you up. The atmosphere is exactly what you want on a slow morning. Cosy but refined. The staff remember our orders now, which says everything.',
    highlight: 'Our regular Sunday morning spot.',
    date: 'October 2024',
  },
  {
    id: 'r7',
    name: 'Michael C.',
    location: 'Epsom',
    rating: 5,
    text: 'The coffee is seriously impressive for a neighbourhood café. The flat white had that perfectly calibrated balance — not too strong, not too milky — and the latte art was beautiful. The miso salmon bowl and the atmosphere made this a genuinely lovely lunch. One of the best I\'ve had in Auckland.',
    highlight: 'Seriously impressive coffee and a genuinely lovely atmosphere.',
    date: 'September 2024',
  },
  {
    id: 'r8',
    name: 'Lily W.',
    location: 'Parnell',
    rating: 5,
    text: 'I was recommended this place by a friend and I\'m so glad I went. Everything felt considered — the space, the menu, the service. The Korean-spiced beef hash was bold and extraordinary. The café feels like it was designed by someone who really loves good food and wants you to experience it properly.',
    highlight: 'Everything felt considered — the space, menu, and service.',
    date: 'August 2024',
  },
]
