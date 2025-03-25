import React from "react";
import cn from "classnames";
import styles from "./StaysProduct.module.sass";

// data
import Product from "@/components/Product";
import Description from "../Description";
import Footer from "@/components/Footer";
import CommentsProduct from "@/components/CommentsProduct";
import { catalogList } from "@/mocks/catalog";



export default function StaysProduct({ params }) {
    const { slug } = params;

    // Gabungkan semua item dari semua group
    const allItems = catalogList.flatMap((group) => group.items);

    // Cari berdasarkan slug
    const item = allItems.find((x) => x.slug === slug);

    if (!item) return notFound();

    // breadcrumbs berdasarkan data item
    const breadcrumbs = [
        { title: "Home", url: "/" },
        { title: "Stays", url: "/" },
        { title: item.province || "Indonesia", url: "/stays-category" },
        { title: item.location },
    ];
    return (
        <>
            <Product
                classSection="section-mb64"
                urlHome="/stays-category"
                title={item.title}
                breadcrumbs={breadcrumbs}
                options={item.options}
                gallery={item.gallery}
                rating={item.rating}
                reviews={item.reviews}
                avatar={item.avatar}
                type="stays"
            />
            <Description
                classSection="section"
                title={item.title}
                name={item.name}
                avatar={item.avatar}
                description={item.description}
                availableService={item.availableService}
                priceOld={item.priceOld}
                priceActual={item.priceActual}
                discount={item.discount}
                fee={item.fee}
                reviews={item.reviews}
            />
            <CommentsProduct
                className={cn("section", styles.comment)}
                parametersUser={item.parametersUser}
                info={item.description}
                socials={item.socials}
                comments={item.comments}
                name={item.name}
                avatar={item.avatar}
                rating={item.rating}
                reviews={item.reviews}
                buttonText="Contact"
            />
            <Footer />
        </>
    );
};
