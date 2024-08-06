import styles from "./Header.module.scss";

export const Header = ({ burgerMenu, setBurgerMenu }) => {
  const handleBurger = () => {
    setBurgerMenu(!burgerMenu);
  };
  return (
    <section className={styles.header}>
      <h1 className={styles.title}>PORTFOLIO</h1>
      <div className={styles.menu}>
        <p className={styles.languages}> FR </p>
        <p className={styles.languages}>|</p>
        <p className={styles.languages}> EN </p>
        <div onClick={handleBurger} className={styles.BurgerMenu}>
          <div className={styles.topLine}></div>
          <div className={styles.middleLine}></div>
          <div className={styles.bottomLine}></div>
        </div>
      </div>
    </section>
  );
};
