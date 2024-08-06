import { useEffect } from "react";
import styles from "./PopUpBurger.module.scss";
import { X } from "lucide-react";

export const PopUpBurger = ({ burgerMenu, setBurgerMenu }) => {
  const handleBurger = () => {
    setBurgerMenu(!burgerMenu);
  };

  useEffect(() => {
    if (burgerMenu) {
      // Désactiver le scroll
      document.body.style.overflow = "hidden";
    } else {
      // Activer le scroll
      document.body.style.overflow = "auto";
    }

    // Nettoyage pour réactiver le scroll si le composant est démonté
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [burgerMenu]);

  // const openBurger = () => setBurgerMenu(true);
  const closeBurger = () => setBurgerMenu(false);

  return (
    <>
      {burgerMenu && (
        <section className={styles.popUpBurger} onClick={closeBurger}>
          <X onClick={closeBurger} className={styles.close} />
          <ul className={styles.sections}>
            <a className={styles.section}>Home.</a>
            <a className={styles.section}>About.</a>
            <a className={styles.section}>Skills.</a>
            <a className={styles.section}>Work.</a>
            <a className={styles.section}>Contact.</a>
          </ul>
        </section>
      )}
    </>
  );
};
