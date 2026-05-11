export type MenuCategory = 'signature' | 'spesial';
export type MenuSize = 'regular' | 'large' | 'family';
export type MenuBadge = 'bestseller' | 'spicy' | 'cheesy';

export interface MenuItem {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: string;
    category: MenuCategory;
    size: MenuSize;
    image: string;
    badges: MenuBadge[];
}

export const PORTION_LABEL: Record<MenuSize, string> = {
    regular: '6 pcs',
    large: '8 pcs',
    family: '16 pcs',
};

export const SAUCE_OPTIONS = [
    { name: 'Mentai', emoji: '🍶' },
    { name: 'Tartar', emoji: '🌊' },
    { name: 'Volcano', emoji: '🌋' },
    { name: 'Mentai Mix Tartar', emoji: '🌋🍶' },
    { name: 'Mentai Mix Volcano', emoji: '🌋🌊' },
    { name: 'Cheese', emoji: '🧀' },
    { name: 'Mushroom', emoji: '🍄' },
    { name: 'Bolognese', emoji: '🍝' },
];

export const SAUCE_COUNT_LABEL = `${SAUCE_OPTIONS.length} pilihan saus`;

export const BADGE_STYLES: Record<
    MenuBadge,
    { label: string; bg: string; text: string }
> = {
    bestseller: {
        label: '⭐ Terlaris',
        bg: '#FEF3C7',
        text: '#92400E',
    },
    spicy: {
        label: '🌶️ Pedas',
        bg: '#FEE2E2',
        text: '#991B1B',
    },
    cheesy: {
        label: '🧀 Cheesy',
        bg: '#FED7AA',
        text: '#9A3412',
    },
};

export const menuItems: MenuItem[] = [
    // === Mentai Signature - Original ===
    {
        id: 1,
        name: 'Regular Original',
        slug: 'regular-original',
        description: 'Mentai original dengan saus mentai klasik yang otentik',
        price: 'Rp 23.000',
        category: 'signature',
        size: 'regular',
        image: '/menu/regular-original.jpeg',
        badges: ['bestseller'],
    },
    {
        id: 2,
        name: 'Large Original',
        slug: 'large-original',
        description: 'Porsi besar mentai original dengan cita rasa autentik',
        price: 'Rp 28.000',
        category: 'signature',
        size: 'large',
        image: '/menu/large-original.jpeg',
        badges: [],
    },
    {
        id: 3,
        name: 'Family Original',
        slug: 'family-original',
        description: 'Porsi keluarga mentai original untuk dinikmati bersama',
        price: 'Rp 55.000',
        category: 'signature',
        size: 'family',
        image: '/menu/family-original.jpeg',
        badges: [],
    },
    // === Mentai Signature - Cheezy ===
    {
        id: 4,
        name: 'Regular Cheezy',
        slug: 'regular-cheezy',
        description: 'Mentai dengan topping keju leleh yang creamy dan gurih',
        price: 'Rp 25.000',
        category: 'signature',
        size: 'regular',
        image: '/menu/regular-cheezy.JPG',
        badges: ['cheesy'],
    },
    {
        id: 5,
        name: 'Large Cheezy',
        slug: 'large-cheezy',
        description: 'Porsi besar mentai dengan topping keju leleh yang melimpah',
        price: 'Rp 30.000',
        category: 'signature',
        size: 'large',
        image: '/menu/large-cheezy.JPG',
        badges: ['cheesy'],
    },
    {
        id: 6,
        name: 'Family Cheezy',
        slug: 'family-cheezy',
        description: 'Porsi keluarga mentai cheezy untuk berbagi bersama',
        price: 'Rp 60.000',
        category: 'signature',
        size: 'family',
        image: '/menu/family-cheezy.JPG',
        badges: ['cheesy'],
    },
    // === Mentai Signature - Mozza ===
    {
        id: 7,
        name: 'Regular Mozza',
        slug: 'regular-mozza',
        description: 'Mentai dengan taburan keju mozzarella yang meleleh sempurna',
        price: 'Rp 30.000',
        category: 'signature',
        size: 'regular',
        image: '/menu/regular-mozza.jpeg',
        badges: ['cheesy'],
    },
    {
        id: 8,
        name: 'Large Mozza',
        slug: 'large-mozza',
        description: 'Porsi besar mentai mozza dengan keju stretchy yang menggoda',
        price: 'Rp 33.000',
        category: 'signature',
        size: 'large',
        image: '/menu/large-mozza.jpeg',
        badges: ['bestseller', 'cheesy'],
    },
    {
        id: 9,
        name: 'Family Mozza',
        slug: 'family-mozza',
        description: 'Porsi keluarga mentai mozza untuk momen spesial bersama',
        price: 'Rp 65.000',
        category: 'signature',
        size: 'family',
        image: '/menu/family-mozza.JPG',
        badges: ['cheesy'],
    },
    // === Mentai Spesial - Mix ===
    {
        id: 10,
        name: 'Regular Mix',
        slug: 'regular-mix',
        description: 'Kombinasi mentai dengan berbagai topping pilihan',
        price: 'Rp 28.000',
        category: 'spesial',
        size: 'regular',
        image: '/menu/regular-mix.JPG',
        badges: [],
    },
    {
        id: 11,
        name: 'Large Mix',
        slug: 'large-mix',
        description: 'Porsi besar mentai mix dengan topping lengkap',
        price: 'Rp 33.000',
        category: 'spesial',
        size: 'large',
        image: '/menu/large-mix.JPG',
        badges: [],
    },
    {
        id: 12,
        name: 'Family Mix',
        slug: 'family-mix',
        description: 'Porsi keluarga mentai mix untuk berbagi bersama',
        price: 'Rp 65.000',
        category: 'spesial',
        size: 'family',
        image: '/menu/family-mix.JPG',
        badges: [],
    },
    // === Mentai Spesial - Boncabe ===
    {
        id: 13,
        name: 'Regular Boncabe',
        slug: 'regular-boncabe',
        description: 'Mentai dengan taburan boncabe pedas yang menggugah selera',
        price: 'Rp 25.000',
        category: 'spesial',
        size: 'regular',
        image: '/menu/regular-boncabe.JPG',
        badges: ['bestseller', 'spicy'],
    },
    {
        id: 14,
        name: 'Large Boncabe',
        slug: 'large-boncabe',
        description: 'Porsi besar mentai boncabe untuk pecinta pedas',
        price: 'Rp 30.000',
        category: 'spesial',
        size: 'large',
        image: '/menu/large-boncabe.JPG',
        badges: ['spicy'],
    },
    {
        id: 15,
        name: 'Family Boncabe',
        slug: 'family-boncabe',
        description: 'Porsi keluarga mentai boncabe dengan sensasi pedas nikmat',
        price: 'Rp 60.000',
        category: 'spesial',
        size: 'family',
        image: '/menu/family-boncabe.JPG',
        badges: ['spicy'],
    },
];

export const featuredMenuSlugs = ['regular-original', 'large-mozza', 'regular-boncabe'];

export const featuredMenu = featuredMenuSlugs
    .map((slug) => menuItems.find((item) => item.slug === slug)!)
    .filter(Boolean);

export const WHATSAPP_URL = 'https://wa.me/6282143638897';
