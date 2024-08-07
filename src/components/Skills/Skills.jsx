import styles from "./Skills.module.scss";

export const Skills = () => {
  return (
    <section className={styles.skills}>
      <p className={styles.framework}>COMPÉTENCES.</p>

      <div className={styles.technos}>
        <img
          className={styles.techno}
          src="/src/assets/html.png"
          alt="html logo"
        />

        <img
          className={styles.techno}
          src="/src/assets/css.png"
          alt="css logo"
        />
        <img
          className={styles.techno}
          src="/src/assets/javascript.png"
          alt="javascript logo"
        />
        <img
          className={styles.techno}
          src="/src/assets/react.png"
          alt="react logo"
        />
        <img
          className={styles.techno}
          src="/src/assets/sass.png"
          alt="sass logo"
        />
        <img
          className={styles.techno}
          src="/src/assets/tailwind.png"
          alt="tailwind logo"
        />
        <img
          className={styles.techno}
          src="/src/assets/github.png"
          alt="githut logo"
        />
      </div>
    </section>
  );
};
