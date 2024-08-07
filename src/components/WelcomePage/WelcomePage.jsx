import styles from "./WelcomePage.module.scss";

export const WelcomePage = () => {
  return (
    <section className={styles.container2}>
      <p className={styles.infos}>
        <p className={styles.job}> Front End Developer</p>
        <p className={styles.name}>MYRIAM CARON</p>
      </p>
    </section>
  );
};
