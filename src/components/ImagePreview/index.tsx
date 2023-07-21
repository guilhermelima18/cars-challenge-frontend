import { ImagePreviewProps } from "./types";
import styles from "./styles.module.css";

export const ImagePreview = ({ imageUrl, imageName }: ImagePreviewProps) => {
  return (
    <div className={styles.content}>
      <img src={imageUrl} alt={imageName} />
    </div>
  );
};
