"use client";
import React from "react";
import styles from "./Stays.module.sass";
import Main from "./Main";
import Adventure from "../../components/Adventure";
import Travel from "../../components/Travel";
import Work from "./Work";
import Live from "../../components/Live";
import Catalog from "./Catalog";
import Planning from "../../components/Planning";
import Browse from "../../components/Browse";
import Places from "../../components/Places";
import Hosts from "../../components/Hosts";
import View from "./View";
import Categories from "../../components/Categories";

// data
import { browse1 } from "../../mocks/browse";
import { categories1 } from "../../mocks/categories";

const Stays = () => {
  return (
    <>
      <Main />
      <Adventure />
      <Travel />
      <Work />
      <Live title="Live anywhere" />
      <Catalog />
      <Planning title="Travel to make memories all around the world" />
      <Browse
        classSection="section"
        classTitle="h2"
        title="Browse by property type"
        info="Let’s go on an adventure"
        items={browse1}
      />
      <Places title="Explore nearby" info="10,789 beautiful places to go" />
      <Hosts />
      <View />
      <Categories
        classSection="section"
        title="Browse by category"
        info="Let’s go on an adventure"
        items={categories1}
      />
    </>
  );
};

export default Stays;
