export const dirs = {
    ProductsDir: '/images'
}
export const products = [
    {
        id: 1,
        ProductName: 'Mortal Kombat vs DC - PlayStation 3 (PS3)',
        PromotionType: 'Sale',
        Price: 20,
        SalePercentage: 20,
        IsAvailable: true,
        Category: 'Games',
        ShipsFrom: 'Nubian Fortune',
        SoldBy: 'Nubian Fortune',
        Quantity: 5,
        ShippingFee: 5,
        IsReturnable: true,
        ProductImages: [
            '/1.webp',
            '/1.webp',
            '/1.webp',
            '/1.webp',
            '/1.webp'
        ]
    },
    {
        id: 2,
        ProductName: 'Batman Arkham Asylum - PlayStation 3 (PS3)',
        PromotionType: 'New',
        Price: 10,
        SalePercentage: 0,
        IsAvailable: false,
        Category: 'Games',
        ShipsFrom: 'Nubian Fortune',
        SoldBy: 'Nubian Fortune',
        Quantity: 0,
        ShippingFee: 0,
        IsReturnable: false,
        ProductImages: [
            '/2.webp',
            '/2.webp',
            '/2.webp',
            '/2.webp',
            '/2.webp'
        ]
    },
    {
        id: 3,
        ProductName: 'Grand Theft Auto IV | GTA4 - PlayStation 3 (PS3)',
        PromotionType: undefined,
        Price: 14.99,
        SalePercentage: 0,
        IsAvailable: true,
        Category: 'Games',
        ShipsFrom: 'Nubian Fortune',
        SoldBy: 'Nubian Fortune',
        Quantity: 5,
        ShippingFee: 5,
        IsReturnable: true,
        ProductImages: [
            '/3.webp',
            '/3.webp',
            '/3.webp',
            '/3.webp',
            '/3.webp'
        ]
    },
    {
        id: 4,
        ProductName: 'Grand Theft Auto V | GTA5 - PlayStation 5 (PS5)',
        PromotionType: 'Hot',
        Price: 29.99,
        SalePercentage: 30,
        IsAvailable: true,
        Category: 'Games',
        ShipsFrom: 'Nubian Fortune',
        SoldBy: 'Nubian Fortune',
        Quantity: 5,
        ShippingFee: 5,
        IsReturnable: true,
        ProductImages: [
            '/4.webp',
            '/4.webp',
            '/4.webp',
            '/4.webp',
            '/4.webp'
        ]
    },
    {
        id: 5,
        ProductName: 'Flix Flox Jeans',
        PromotionType: undefined,
        Price: 100,
        SalePercentage: 0,
        IsAvailable: true,
        Category: 'Clothing',
        ShipsFrom: 'Nubian Fortune',
        SoldBy: 'Nubian Fortune',
        Quantity: 5,
        ShippingFee: 5,
        IsReturnable: true,
        ProductImages: [
            '/5.webp',
            '/5.webp',
            '/5.webp',
            '/5.webp',
            '/5.webp'
        ]
    },
    {
        id: 6,
        ProductName: 'Fancy Salwar Suits',
        PromotionType: 'Hot',
        Price: 100,
        SalePercentage: 40,
        IsAvailable: true,
        Category: 'Clothing',
        ShipsFrom: 'Nubian Fortune',
        SoldBy: 'Nubian Fortune',
        Quantity: 5,
        ShippingFee: 5,
        IsReturnable: true,
        ProductImages: [
            '/6.webp',
            '/6.webp',
            '/6.webp',
            '/6.webp',
            '/6.webp'
        ]
    },
    {
        id: 7,
        ProductName: 'Printed Straight Kurta',
        PromotionType: 'Sale',
        Price: 100,
        SalePercentage: 35,
        IsAvailable: true,
        Category: 'Personal Care',
        ShipsFrom: 'Nubian Fortune',
        SoldBy: 'Nubian Fortune',
        Quantity: 5,
        ShippingFee: 5,
        IsReturnable: true,
        ProductImages: [
            '/7.webp',
            '/7.webp',
            '/7.webp',
            '/7.webp',
            '/7.webp'
        ]
    },
    {
        id: 8,
        ProductName: 'Collot Full Dress',
        PromotionType: 'Sale',
        Price: 100,
        SalePercentage: 10,
        IsAvailable: true,
        Category: 'Personal Care',
        ShipsFrom: 'Nubian Fortune',
        SoldBy: 'Nubian Fortune',
        Quantity: 5,
        ShippingFee: 5,
        IsReturnable: true,
        ProductImages: [
            '/8.webp',
            '/8.webp',
            '/8.webp',
            '/8.webp',
            '/8.webp'
        ]
    }
];

// Registering Service Worker for PWA
export async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('/sw.js');
            console.log('Service Worker registered with scope:', registration.scope);
        }
        catch (error) {
            console.error('Service Worker not registered: ', error);
            throw error;
        }
    }
}
