import styles from "./Work.module.scss";

export const Work = ({ setIsOpen, isOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section id={styles.work}>
      <div onClick={handleClick} className={styles.container1}></div>
      <div onClick={handleClick} className={styles.container1}></div>
      <div className={styles.work2}>
        <div onClick={handleClick} className={styles.container2}></div>
        <div onClick={handleClick} className={styles.container3}></div>
      </div>
    </section>
  );
};
