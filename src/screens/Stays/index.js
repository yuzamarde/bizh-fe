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
      <Work />
      <Catalog />
      <Planning title="Travel to make memories all around the world" />
      {/* <Places title="Explore nearby" info="10,789 beautiful places to go" /> */}
      {/* <View /> */}

    </>
  );
};

export default Stays;
