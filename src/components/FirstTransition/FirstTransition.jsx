import React, { useState, useEffect } from "react";
import styles from "./FirstTransition.module.scss";

export const FirstTransition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'écouteur d'événements
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calcul de l'opacité (transition entre les valeurs startFade et endFade)
  const startFadeIn = 400; // Début de l'effet d'apparition
  const endFadeIn = 400; // Fin de l'effet d'apparition (opacité maximale)
  const startFadeOut = -100; // Début de l'effet de disparition
  const endFadeOut = 1000; // Fin de l'effet de disparition (opacité minimale)

  let opacity = 0;

  if (scrollY >= startFadeIn && scrollY <= endFadeIn) {
    opacity = (scrollY - startFadeIn) / (endFadeIn - startFadeIn);
  } else if (scrollY > endFadeIn && scrollY <= startFadeOut) {
    opacity = 3;
  } else if (scrollY > startFadeOut && scrollY <= endFadeOut) {
    opacity = 3 - (scrollY - startFadeOut) / (endFadeOut - startFadeOut);
  }

  return (
    <section className={styles.firstTransition}>
      <p
        className={styles.sentence1}
        style={{ opacity, transition: "opacity 6s" }}
      >
        An award-Winning Digital Agency
      </p>
      <div className={styles.line}></div>
      <p
        className={styles.sentence2}
        style={{ opacity, transition: "opacity 6s" }}
      >
        We create <br /> impactful websites <br />
        that elevate <br /> bold brands
      </p>
    </section>
  );
};
