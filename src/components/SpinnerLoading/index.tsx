import { Spinner } from "react-bootstrap";

import styles from "./styles.module.css";

export const SpinnerLoading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </div>
  );
};
