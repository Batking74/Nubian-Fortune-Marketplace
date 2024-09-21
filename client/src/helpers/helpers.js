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
