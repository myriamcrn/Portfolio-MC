import styles from "./PopUpWork.module.scss";

export const PopUpWork = ({ setIsOpen, isOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <section className={styles.popup} onClick={handleClick}></section>
      )}
    </>
  );
};
