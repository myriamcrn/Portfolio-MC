import { Linkedin, GithubIcon } from "lucide-react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <section>
      <div className={styles.footer}>
        <p className={styles.main}>Let's work together</p>

        <p className={styles.second}>Not for now ? Let's get in touch</p>

        <div className={styles.icons}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/myriam-caron-b466a9172/"
          >
            <Linkedin size={32} color="black" strokeWidth={1} />
          </a>
          <a target="_blank" href="https://github.com/myriamcrn">
            <GithubIcon size={32} color="black" strokeWidth={1} />
          </a>
        </div>
      </div>
    </section>
  );
};
