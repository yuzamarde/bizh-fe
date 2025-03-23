import React from "react";
import Page from "@/components/Page";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function StaysProduct() {
  return (
    <>
      <Page />
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Stays Product Detail</h1>
        <p>This is the detail page for a stay product.</p>
        <Image
          src="/images/content/catalog-pic-1.jpg"
          alt="Sample Stay"
          width={600}
          height={400}
        />
      </div>
      <Footer />
    </>
  );
}
