// Importing Modules/Packages
import TrendingProductsComponent from "../components/Homepage/TrendingProductsComponent";
import ClientReviewsComponent from "../components/Homepage/ClientReviewsComponent";
import UpdateNewsComponent from "../components/Homepage/UpdateNewsComponent";
import HomeComponent from "../components/Homepage/HomeComponent";
import React from "react";

export default function HomePage() {
    return (
        <React.Fragment>
            <HomeComponent />
            <TrendingProductsComponent />
            <ClientReviewsComponent />
            <UpdateNewsComponent />
        </React.Fragment>
    );
}