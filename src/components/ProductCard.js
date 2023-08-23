import { useMemo } from "react";
import styles from "./ProductCard.module.css";
const ProductCard = ({
  divproductImageContainer,
  itemMICHAELMichaelKors,
  cutoutStretchCrepeMiniDre,
  item22500,
  propPadding,
  propPadding1,
  propBoxSizing,
  propMarginTop,
  propMarginTop1,
  propPadding2,
}) => {
  const divproductTileRfk1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const linkStyle = useMemo(() => {
    return {
      padding: propPadding1,
      boxSizing: propBoxSizing,
    };
  }, [propPadding1, propBoxSizing]);

  const divquickviewContainerStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const listStyle = useMemo(() => {
    return {
      marginTop: propMarginTop1,
    };
  }, [propMarginTop1]);

  const itemLink1Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={styles.divproductTileRfk} style={divproductTileRfk1Style}>
      <div className={styles.divimagePanel}>
        <div className={styles.link} style={linkStyle}>
          <img
            className={styles.divproductImageContainerIcon}
            alt=""
            src={divproductImageContainer}
          />
          <div
            className={styles.divquickviewContainer}
            style={divquickviewContainerStyle}
          >
            <div className={styles.buttonQuickview}>
              <div className={styles.quickview}>QUICKVIEW</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.list} style={listStyle}>
        <div className={styles.itemMichael}>{itemMICHAELMichaelKors}</div>
        <div className={styles.itemLink} style={itemLink1Style}>
          <div className={styles.cutoutStretchCrepe}>
            {cutoutStretchCrepeMiniDre}
          </div>
        </div>
        <div className={styles.item22500}>{item22500}</div>
      </div>
    </div>
  );
};

export default ProductCard;
