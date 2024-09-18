// Importing Modules/Packages
import TrendingProductsComponent from "../components/Homepage/TrendingProductsComponent";
import ClientReviewsComponent from "../components/Homepage/ClientReviewsComponent";
import UpdateNewsComponent from "../components/Homepage/UpdateNewsComponent";
import ContactComponent from "../components/Homepage/ContactComponent";
import HomeComponent from "../components/Homepage/HomeComponent";
import React from "react";

export default function HomePage() {
    return (
        <React.Fragment>
            <HomeComponent />
            <TrendingProductsComponent />
            <ClientReviewsComponent />
            <UpdateNewsComponent />
            <ContactComponent />
            <div className="end-text">
                <p>Copyright c @2024. All Rights Reserved. Designed By Saidul Islam.</p>
            </div>
        </React.Fragment>
    );
}