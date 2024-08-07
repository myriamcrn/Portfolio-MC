import React, { useState, useEffect } from "react";
import styles from "./FirstTransition.module.scss";

export const FirstTransition = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolling(true);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100); // 100ms après avoir arrêté de défiler, on considère que le défilement est terminé
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'écouteur d'événements
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  // Calcul de l'opacité (transition entre les valeurs startFade et endFade)
  const fadeInStart = 200; // Début de l'effet d'apparition
  const fadeInEnd = 600; // Fin de l'effet d'apparition (opacité maximale)
  const fadeOutStart = 800; // Début de l'effet de disparition
  const fadeOutEnd = 1200; // Fin de l'effet de disparition (opacité minimale)

  let opacity = 0;

  if (scrollY >= fadeInStart && scrollY <= fadeInEnd) {
    opacity = (scrollY - fadeInStart) / (fadeInEnd - fadeInStart);
  } else if (scrollY > fadeInEnd && scrollY <= fadeOutStart) {
    opacity = 1;
  } else if (scrollY > fadeOutStart && scrollY <= fadeOutEnd) {
    opacity = 1 - (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart);
  }

  return (
    <section className={styles.firstTransition}>
      <p
        className={styles.sentence1}
        style={{
          opacity,
          transition: "opacity 0.5s ease-out",
        }}
      >
        An award-Winning Digital Agency
      </p>
      <div className={styles.line}></div>
      <p
        className={styles.sentence2}
        style={{
          opacity,
          transition: "opacity 0.5s ease-out",
        }}
      >
        We create <br /> impactful websites <br />
        that elevate <br /> bold brands
      </p>
    </section>
  );
};
