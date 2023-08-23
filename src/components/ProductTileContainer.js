import { useMemo } from "react";
import styles from "./ProductTileContainer.module.css";
const ProductTileContainer = ({
  productImageDimensions,
  dressName,
  priceText,
  propPadding,
}) => {
  const itemLink2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.divproductTileRfk}>
      <div className={styles.divimagePanel}>
        <div className={styles.link}>
          <img
            className={styles.divproductImageContainerIcon}
            alt=""
            src={productImageDimensions}
          />
          <div className={styles.divquickviewContainer}>
            <div className={styles.buttonQuickview}>
              <div className={styles.quickview}>QUICKVIEW</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.itemMichael}>MICHAEL Michael Kors</div>
        <div className={styles.itemLink} style={itemLink2Style}>
          <div className={styles.statusPrintStretch}>{dressName}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.divlistprice}>
            <div className={styles.was23500}>Was £235.00</div>
          </div>
          <div className={styles.divsaleprice}>
            <div className={styles.was23500}>{priceText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTileContainer;
