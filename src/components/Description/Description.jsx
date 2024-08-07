import styles from "./Description.module.scss";
import React from "react";

export const Description = () => {
  const handleClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/myriam-caron-b466a9172/";
  };

  return (
    <section className={styles.description}>
      <div>
        <p className={styles.presentationTitle}>About.</p>
        <p className={styles.intro}>
          Hi, i'm Myriam " <br />
        </p>
        <p className={styles.presentation}>
          After a few years in the Marketing and Advertising industry <br />
          in Paris, France and a year of travel, I decided to put my languages{" "}
          <br />
          in Montreal for new challenges.Autodidacte in development, I spent{" "}
          <br />
          almost over year getting to know this industry and their complexities.{" "}
          <br />
          After a few years in the Marketing and Advertising industry <br />
          in Paris, France and a year of travel, I decided to put my languages{" "}
          <br />
          in Montreal for new challenges.Autodidacte in development, I spent{" "}
          <br />
          almost over year getting to know this industry and their complexities.{" "}
          <br />
          After a few years in the Marketing and Advertising industry <br />
          in Paris, France and a year of travel, I decided to put my languages{" "}
          <br />
          in Montreal for new challenges.Autodidacte in development, I spent{" "}
          <br />
          almost over year getting to know this industry and their complexities.
        </p>
        <button onClick={handleClick} className={styles.button}>
          More about me
        </button>
      </div>
      <div className={styles.portrait}>
        <img src="/src/assets/mymy.jpg" alt="Myriam Caron" />
      </div>
    </section>
  );
};
