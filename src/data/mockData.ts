export interface Teacher {
  id: string;
  name: string;
  role: string;
  classGroup: string;
  bio: string;
  image: string;
  color: string;
}

export interface IntegrationStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  icon: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  period: 'morning' | 'afternoon';
  tag: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  relation: string;
  avatar: string;
  rating: number;
}

export interface ResourceArticle {
  slug: string;
  title: string;
  category: 'Parent Tips' | 'Announcement' | 'News';
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Enrollment' | 'Safety' | 'Daily Life';
}

export const LOGO_URL = "https://framerusercontent.com/images/BsOwKQP69VIsyDEu06DsMzIIk.png";
export const HERO_GIRL_BG_URL = "https://framerusercontent.com/images/aquq9Ufez5bjJzg7OHuQpe16Io.webp";
export const HERO_BUILDING_URL = "https://framerusercontent.com/images/u1Xcq7eYxYuQnEkPtS5gUAmOVfs.webp";

export const FRAMER_IMAGES = {
  heroGirl: HERO_GIRL_BG_URL,
  classroomPlay: "https://framerusercontent.com/images/qkCedO4GdxtBTuZ68rv8KNK81O0.webp",
  openSpace: "https://framerusercontent.com/images/djRuM1odN1kypf5UtZ4WK82gfao.webp",
  woodenFurnishings: "https://framerusercontent.com/images/gFv5C8HS2oGmUvhOM4d0yPpRjl0.webp",
  childFriendship: "https://framerusercontent.com/images/IgGO3ZFRss2g6tKsL21DWQekKo.webp",
  outdoorPlayground: "https://framerusercontent.com/images/aNR7ylhhElOeQ5qIpfxHFZpfE.webp",
  teacherReading: "https://framerusercontent.com/images/9Va7ElaUGuaboBDlGdloTSSv8.webp",
  toddlerExploration: "https://framerusercontent.com/images/LzrDiSMwN1mHCfrsCssEf3KTR4A.webp",
  building: "https://framerusercontent.com/images/u1Xcq7eYxYuQnEkPtS5gUAmOVfs.webp",
};

export const TEACHERS_DATA: Teacher[] = [
  {
    id: 'laura-nguyen',
    name: 'Ms. Laura Nguyen',
    role: 'School Principal',
    classGroup: 'School Principal',
    bio: 'My greatest mission is to build a place where every child feels deeply loved and every parent feels completely at peace. We are building a warm extension of your family.',
    image: '/images/kids/kid_photo_41.webp',
    color: '#0D3B66',
  },
  {
    id: 'emily-chen',
    name: 'Ms. Emily Chen',
    role: 'Lead Teacher',
    classGroup: 'Sunflower Class (3 - 4 years old)',
    bio: 'Every child is a unique universe. There is no greater joy than seeing a child’s eyes light up when they master a new skill.',
    image: '/images/kids/Teacher1.webp',
    color: '#F95738',
  },
  {
    id: 'jessica-miller',
    name: 'Ms. Jessica Miller',
    role: 'Lead Caregiver',
    classGroup: 'Little Sprouts Class (12 - 24 months)',
    bio: 'The first years are the most crucial. My goal is to provide a safe, warm, and loving environment where our littlest ones feel secure.',
    image: '/images/kids/Teacher2.webp',
    color: '#EE964B',
  },
  {
    id: 'sarah-jenkins',
    name: 'Ms. Sarah Jenkins',
    role: 'Lead Educator',
    classGroup: 'Rainbow Class (4 - 5 years)',
    bio: 'At this age, children are full of big questions and bright ideas. I love guiding them to express their thoughts confidently.',
    image: FRAMER_IMAGES.toddlerExploration,
    color: '#F4D35E',
  },
  {
    id: 'olivia-bennett',
    name: 'Ms. Olivia Bennett',
    role: 'Infant Specialist',
    classGroup: 'Cuddle Bugs Class (6 - 12 months)',
    bio: 'In these earliest months, babies learn through touch, sound, and a sense of safety. My promise is gentle, attentive care.',
    image: FRAMER_IMAGES.openSpace,
    color: '#FAF0CA',
  },
  {
    id: 'rachel-adams',
    name: 'Ms. Rachel Adams',
    role: 'Outdoor Discovery Guide',
    classGroup: 'All Age Groups',
    bio: 'The outdoors is the greatest classroom. I guide children to observe little bugs, feel leaf textures, and run freely.',
    image: FRAMER_IMAGES.outdoorPlayground,
    color: '#0D3B66',
  },
];

export const INTEGRATION_STEPS: IntegrationStep[] = [
  {
    step: 1,
    title: 'Tour & Experience',
    subtitle: 'Explore, Play & Connect',
    description: 'Parents and child visit, get familiar with the space, sunlit classrooms, green gardens, and warm teachers.',
    bullets: [
      'Walk through our sunlit classrooms and green spaces.',
      'Let your child gently interact with teachers and toys.',
      'Chat with our Principal to share your expectations.'
    ],
    icon: 'Sparkles',
    image: FRAMER_IMAGES.building
  },
  {
    step: 2,
    title: 'Listening to Habits',
    subtitle: 'Share, Detail & Sync',
    description: 'Teachers note your child’s preferences, daily routines, sleeping habits, and unique personality.',
    bullets: [
      'Tell us about your child’s personality and needs.',
      'We record specific eating, sleeping, and play routines.',
      'Ensure a consistent transition from home to school.'
    ],
    icon: 'HeartHandshake',
    image: FRAMER_IMAGES.teacherReading
  },
  {
    step: 3,
    title: 'Integration Week',
    subtitle: 'Accompany, Adapt, Bond',
    description: 'The child begins with half-days while parents stay nearby for the first 1–2 days to build trust.',
    bullets: [
      'Stay by your child’s side during the first few days.',
      'Start with half-days to build comfort and trust.',
      'Watch your child connect with new friends and teachers.'
    ],
    icon: 'Compass',
    image: FRAMER_IMAGES.toddlerExploration
  },
  {
    step: 4,
    title: 'Confident & Shining',
    subtitle: 'Routine, Independence & Thrive',
    description: 'Your child officially joins the full daily rhythm and becomes an independent, joyful learner.',
    bullets: [
      'Your child officially joins the full daily rhythm.',
      'Watch them happily manage meals and nap time.',
      'Enjoy peace of mind as your child grows with joy every day.'
    ],
    icon: 'Sun',
    image: FRAMER_IMAGES.outdoorPlayground
  }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  { time: '07:30', title: 'Morning Circle', description: 'Greetings, singing, and boosting energy for the day.', period: 'morning', tag: 'Social' },
  { time: '08:30', title: 'Exploration Time', description: 'Free play, sensory activities, arts and crafts, or mini science projects.', period: 'morning', tag: 'Learning' },
  { time: '10:00', title: "Nature O'clock", description: 'Outdoor play, gardening, movement activities, and nature exploration.', period: 'morning', tag: 'Outdoors' },
  { time: '11:00', title: 'Yummy Lunch', description: 'Practicing self-feeding, table manners, and healthy eating habits.', period: 'morning', tag: 'Nutrition' },
  { time: '12:00', title: 'Sweet Dreams', description: 'Quiet space with soothing instrumental music for restful, deep sleep.', period: 'morning', tag: 'Rest' },
  { time: '14:00', title: 'Snack & Social Skills', description: 'Storytelling, role-playing, and learning to share after afternoon snack.', period: 'afternoon', tag: 'Social' },
  { time: '15:30', title: 'Wind Down & Review', description: 'Gentle activities, singing goodbye songs, and reflecting on happy moments.', period: 'afternoon', tag: 'Reflection' },
  { time: '16:00', title: 'See You Tomorrow', description: 'Parents arrive for pick-up. Teachers share detailed daily updates.', period: 'afternoon', tag: 'Dismissal' }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    quote: "On the first day I dropped her off, I was so worried I couldn't sleep. But within just one week, Léa was excitedly asking to go to school every morning. The teachers at Anth are truly caring and so good with kids.",
    author: 'Ms. Sophie Laurent',
    relation: 'Mom of Léa, age 3',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: '2',
    quote: "Anth doesn't just teach kids academics — it teaches them how to live, share, and express feelings. That's what truly matters to us as parents.",
    author: 'Ms. Clara Dubois',
    relation: 'Mom of Lucas, age 3.5',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: '3',
    quote: "What impressed me the most is that every afternoon at pickup, the teacher tells us in detail what our daughter ate, what she played, whether she was happy or upset. It feels like she's being looked after by family.",
    author: 'Mr. Thomas Müller',
    relation: 'Dad of Emma, age 2.5',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5
  }
];

export const ARTICLES_DATA: ResourceArticle[] = [
  {
    slug: 'what-is-play-based-learning-—-and-why-it-matters-more-than-flashcards',
    title: 'What Is Play-Based Learning — And Why It Matters More Than Flashcards',
    category: 'Parent Tips',
    date: 'Sunday, May 10, 2026',
    readTime: '5 min read',
    excerpt: 'Discover why exploration, cause-and-effect sensory play, and guided curiosity build stronger executive function than early flashcard drilling.',
    image: FRAMER_IMAGES.toddlerExploration,
    content: [
      "It's a question many parents ask when they first learn about play-based learning programs. And it's a completely fair one — especially in a culture that tends to equate learning with sitting still and studying.",
      "The short answer: yes, they're playing. And that play is doing more for your child's brain development than almost anything else could at this age.",
      "Play-based learning is an educational approach grounded in decades of child development research. It recognizes that for children under 6, play is not the opposite of learning — it is the primary mechanism through which learning happens.",
      "In a play-based environment, children learn through exploration, discovery, and interaction rather than instruction and memorization. A child building a block tower is learning physics. A child playing house is learning social negotiation. A child mixing colors at the painting table is learning cause and effect."
    ]
  },
  {
    slug: 'back-to-school-2026-how-to-prepare-your-child-for-preschool',
    title: 'Back-to-School 2026: How to Prepare Your Child for Preschool',
    category: 'Announcement',
    date: 'Tuesday, March 31, 2026',
    readTime: '4 min read',
    excerpt: 'Simple, practical tips to transition your toddler gently into a school schedule without tears or bedtime struggles.',
    image: FRAMER_IMAGES.building,
    content: [
      "Whether this is your child's very first year of preschool or they're returning after a summer away, the weeks leading up to the start of school matter.",
      "Start introducing the idea of school into everyday conversation — casually, positively, without pressure. 'After summer, you're going to go to a special place where you get to paint and play with new friends.'",
      "Summer schedules tend to drift — later bedtimes, longer naps, irregular meals. Start shifting gently back toward the school-year routine two weeks out."
    ]
  },
  {
    slug: 'how-to-build-a-morning-routine-your-toddler-will-actually-love',
    title: 'How to Build a Morning Routine Your Toddler Will Actually Love',
    category: 'Parent Tips',
    date: 'Sunday, May 10, 2026',
    readTime: '6 min read',
    excerpt: 'Turn morning chaos into a fun, predictable rhythm using visual charts, buffer times, and empowering choices.',
    image: FRAMER_IMAGES.classroomPlay,
    content: [
      "For toddlers and preschoolers, the morning sets the emotional tone for the entire day. A rushed, chaotic start creates anxiety that follows your child into the classroom.",
      "Give choices within the structure. 'Do you want to put on your shirt or your pants first?' Your child feels in control, while the routine still moves forward.",
      "Build in buffer time. The single biggest cause of morning stress is running late. Build 15 extra minutes into your schedule."
    ]
  },
  {
    slug: 'why-your-child-cries-on-the-first-day-of-preschool-—-and-what-you-can-do-to-help',
    title: 'Why Your Child Cries on the First Day of Preschool — And What You Can Do to Help',
    category: 'Parent Tips',
    date: 'Tuesday, April 28, 2026',
    readTime: '5 min read',
    excerpt: 'Understand the neurobiology of separation anxiety in early childhood and learn the 5 proven goodbye rituals.',
    image: FRAMER_IMAGES.teacherReading,
    content: [
      "When your child clings to your leg and cries at the preschool door, it can feel like something is going wrong. But here's the truth: that reaction is actually a sign of healthy attachment.",
      "Keep the goodbye short and warm. A long, drawn-out goodbye sends the signal that something is wrong. A confident, loving 'I'll be back after snack time — I love you!' gives your child a clear anchor.",
      "Create a goodbye ritual. A special handshake, a forehead kiss, or a wave from the window gives your child something to hold onto."
    ]
  },
  {
    slug: 'the-complete-preschool-checklist',
    title: 'The Complete Preschool Checklist',
    category: 'News',
    date: 'Tuesday, April 28, 2026',
    readTime: '3 min read',
    excerpt: 'What to pack, what to leave at home, and how to label supplies for a smooth first week.',
    image: FRAMER_IMAGES.woodenFurnishings,
    content: [
      "A clearly labeled backpack — small enough for your child to carry themselves.",
      "A change of clothes — accidents happen, spills happen, paint happens. Pack a full outfit in a zip-lock bag.",
      "A water bottle — labeled with your child's name. Straw or flip-top lids work best.",
      "Leave toys, tablets, and outside snacks at home. We provide organic meals and sensory materials."
    ]
  },
  {
    slug: '5-life-skills-kids-only-learn-at-preschool',
    title: '5 Life Skills Kids Only Learn at Preschool',
    category: 'Parent Tips',
    date: 'Saturday, March 21, 2026',
    readTime: '5 min read',
    excerpt: 'From micro-negotiations over crayons to peer modeling during lunch — skills built in a supportive group society.',
    image: FRAMER_IMAGES.childFriendship,
    content: [
      "The unique dynamic of a classroom — 8 children, one table, one set of paintbrushes — creates learning opportunities that no one-on-one environment can replicate.",
      "1. Navigating conflict without an adult stepping in immediately.",
      "2. Being part of a group and waiting for turns during circle time.",
      "3. Making friends from scratch by asking 'Can I play?'.",
      "4. Independence in self-feeding, hand washing, and shoe putting-on.",
      "5. Managing big emotions in a safe, supported peer environment."
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What age groups do you accept?',
    answer: 'We welcome children from 6 months to 5 years old. Our classrooms are thoughtfully divided into four distinct developmental age groups: Cuddle Bugs (6-12 mos), Little Sprouts (12-24 mos), Sunflower Class (3-4 yrs), and Rainbow Class (4-5 yrs).'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'What are your operating hours?',
    answer: 'We are open Monday through Friday from 7:00 AM to 5:00 PM. Full-day and half-day options are available.'
  },
  {
    id: 'faq-3',
    category: 'Daily Life',
    question: 'How do you handle meals and food allergies?',
    answer: 'We maintain a strictly nut-free facility. All meals and snacks are prepared daily by our in-house culinary staff using fresh, organic, seasonal ingredients. Documented allergies are displayed prominently in the kitchen and classrooms.'
  },
  {
    id: 'faq-4',
    category: 'Daily Life',
    question: 'How will I know how my child is doing during the day?',
    answer: 'Through our dedicated parent communication app, teachers post real-time photos and updates on meals, naps, and activities.'
  },
  {
    id: 'faq-5',
    category: 'Safety',
    question: 'What is the teacher-to-child ratio in your classrooms?',
    answer: 'We maintain an optimal 1:8 teacher ratio for toddlers, and even lower ratios (1:3 or 1:4) for infants, ensuring every child receives individualized attention.'
  },
  {
    id: 'faq-6',
    category: 'Enrollment',
    question: 'Do you offer a trial day or school tour?',
    answer: 'Yes! We encourage all prospective parents to book a free 30-minute interactive tour. During your tour, you will meet Principal Laura, explore our sunlit classrooms, and observe live learning activities.'
  },
  {
    id: 'faq-7',
    category: 'Daily Life',
    question: 'What should my child bring each day?',
    answer: 'A small labeled backpack, one full change of clothes in a zip-lock bag, a labeled water bottle, and diapers/wipes if applicable.'
  }
];
