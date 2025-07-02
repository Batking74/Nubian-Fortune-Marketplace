// Importing Modules/Packages
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const PORT = process.env.PORT || 7000;
const express = require('express');
const { join } = require('path');
const cors = require('cors');
const app = express();

// Database
const products = [
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

// Starts All Servers
async function startApplicationServers() {
    try {
        // Middleware
        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());
        app.use(cors({ origin: ['https://nubian-fortune-marketplace.onrender.com', 'http://localhost:3000'] }))
        // Serve static files from the client/dist directory
        app.use(express.static(join(__dirname, '../client/dist')));

        // REST API Routes
        app.get('*', (req, res) => {
            res.sendFile(join(__dirname, '../client/dist/index.html'));
        });
        app.post('/Checkout', async (req, res) => {
            if (req.body.cartItems.length == 0) return res.status(400).json({ Message: 'Your cart is empty!' });
            const session = await stripe.checkout.sessions.create({
                // Type of payment my app accepts
                payment_method_types: ['card'],
                // Items the user wants to purchase 
                line_items: req.body.cartItems.map(({ ProductID, Quantity }) => {
                    const { ProductName, Price, SalePercentage } = products[ProductID - 1];
                    return {
                        price_data: {
                            currency: 'USD',
                            product_data: { name: ProductName },
                            unit_amount: Math.round((Price - (Price * (SalePercentage / 100))).toFixed(2) * 100)
                        },
                        quantity: Quantity
                    }
                }),
                // There are two modes onetime payment and subscription
                mode: 'payment',
                // Where will I send the user on success
                success_url: 'http://localhost:3000/Order-Confirmed',
                // Where will I send the user on failure
                cancel_url: req.body.OriginPage
            });
            res.json({ url: session.url })
        });

        // Starting Server
        app.listen(PORT, () => console.log('Listening on Port: ', PORT));
    }
    catch (error) {
        console.error('Error Occurred Starting Apollo Server ', error);
        throw error
    }
}

startApplicationServers();