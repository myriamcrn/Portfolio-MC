import { Linkedin, GithubIcon } from "lucide-react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <section>
      <div id={styles.Footer}>
        <p className={styles.finalTitle}>
          Let's work together. Let's work together. Let's work together. Let's
          work together.Let's work together.Let's work together.Let's work
          together.Let's work together.Let's work together.
        </p>
      </div>

      <div className={styles.icons}>
        <Linkedin size={32} color="#ffffff" strokeWidth={1} />
        <GithubIcon size={32} color="#ffffff" strokeWidth={1} />
      </div>
    </section>
  );
};
