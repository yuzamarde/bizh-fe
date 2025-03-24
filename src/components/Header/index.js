"use client";

import React, { useState } from "react";
import cn from "classnames";
import Link from "next/link"; // Ganti react-router-dom
import Image from "../Image";
import styles from "./Header.module.sass";
import Dropdown from "./Dropdown";
import Language from "./Language";
import Notification from "./Notification";
import User from "./User";
import Icon from "../Icon";
import Modal from "../Modal";
import Login from "../Login";

const travelers = [
  { title: "Stays", url: "/", icon: "comment" },
  { title: "Flights", url: "/flights", icon: "email" },
  { title: "Things to do", url: "/things-to-do", icon: "home" },
  { title: "Cars", url: "/cars", icon: "email" },
];

const languages = [
  { title: "English", country: "United States", url: "/" },
  { title: "Vietnamese", country: "Vietnamese", url: "/" },
  { title: "Français", country: "Belgique", url: "/" },
  { title: "Français", country: "Canada", url: "/" },
];

const items = [
  {
    menu: [
      { title: "Messages", icon: "comment", url: "/messages" },
      { title: "Bookings", icon: "home", url: "/bookings" },
      { title: "Wishlists", icon: "email", url: "/wishlists" },
    ],
  },
  {
    menu: [
      { title: "List your property", icon: "building", url: "/list-your-property" },
      { title: "Host an experience", icon: "flag", url: "/your-trips" },
    ],
  },
];

const Header = ({ separatorHeader, wide, notAuthorized }) => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className={cn(
          styles.header,
          { [styles.headerBorder]: separatorHeader },
          { [styles.wide]: wide }
        )}
      >
        <div className={cn(styles.center, styles.container)}>
          <Link href="/" className={styles.logo}>
            <Image
              className={styles.pic}
              src="/images/logo-dark.svg"
              srcDark="/images/logo-light.svg"
              alt="Fleet"
              width={150}
              height={50}
            />
          </Link>

          <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
            <Dropdown className={styles.drowdown} items={travelers} setValue={setVisibleNav} />

            <Link href="/support" className={styles.link}>
              Support
            </Link>

            <Language className={styles.language} items={languages} />

            <Link
              href="/list-your-property"
              className={cn("button-stroke button-small", styles.button__small, styles.button__stroke)}
            >
              List your property
            </Link>
          </div>

          <Notification className={styles.notification} />

          {notAuthorized ? (
            <button className={styles.login} onClick={() => setVisible(true)}>
              <Icon name="user" size="24" />
            </button>
          ) : (
            <User className={styles.user} items={items} />
          )}

          <button
            className={cn(styles.burger, { [styles.active]: visibleNav })}
            onClick={() => setVisibleNav(!visibleNav)}
          />
        </div>
      </div>

      <Modal visible={visible} onClose={() => setVisible(false)}>
        <Login />
      </Modal>
    </>
  );
};

export default Header;
