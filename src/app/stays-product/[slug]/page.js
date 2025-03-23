import React from "react";
import cn from "classnames";
import styles from "./StaysProduct.module.sass";

// data
import { browse1 } from "../../../mocks/browse";
import { browse2 } from "../../../mocks/browse";
import Product from "@/components/Product";
import Description from "../Description";
import Page from "@/components/Page";

const breadcrumbs = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Stays",
        url: "/",
    },
    {
        title: "New Zealand",
        url: "/stays-category",
    },
    {
        title: "South Island",
    },
];

const gallery = [
    "/images/content/photo-1.1.jpg",
    "/images/content/photo-1.2.jpg",
    "/images/content/photo-1.3.jpg",
    "/images/content/photo-1.4.jpg",
];

const options = [
    {
        title: "Superhost",
        icon: "home",
    },
    {
        title: "Queenstown, Otago, New Zealand",
        icon: "flag",
    },
];

const parametersUser = [
    {
        title: "Superhost",
        icon: "home",
    },
    {
        title: "256 reviews",
        icon: "star-outline",
    },
];

const socials = [
    {
        title: "twitter",
        url: "https://twitter.com/ui8",
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/ui8net/",
    },
    {
        title: "facebook",
        url: "https://www.facebook.com/ui8.net/",
    },
];

const StaysProduct = () => {
    return (
        <>
            <Page />
            <Product
                classSection="section-mb64"
                urlHome="/stays-category"
                title="Spectacular views of Queenstown"
                breadcrumbs={breadcrumbs}
                options={options}
                gallery={gallery}
                type="stays"
            />
            <Description classSection="section" />

        </>
    );
};

export default StaysProduct;
