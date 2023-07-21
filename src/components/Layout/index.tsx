import { Sidebar } from "../Sidebar";
import { LayoutProps } from "./types";
import styles from "./styles.module.css";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </main>
  );
};
