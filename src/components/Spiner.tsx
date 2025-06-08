import styles from "./styles.module.scss";

export default function Spiner() {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlay__spiner}></div>
    </div>
  );
}
