import styles from "../compo/banner.module.css";
const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.title1}>Louis </span>
        <span className={styles.title2}>Coffee Shop</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shop!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.btn} onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
