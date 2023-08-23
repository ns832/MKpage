import { useMemo } from "react";
import styles from "./CardContainer.module.css";
const CardContainer = ({
  productImageDimensions,
  productName,
  propCursor,
  propPadding,
  onDivproductTileRfkContainer5Click,
  propID,
  propHandler,
  productPrice,
}) => {
  const divproductTileRfkStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const listItemLinkStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);
  console.log(productPrice)
  return (
    <div
      className={styles.divproductTileRfk}
      style={divproductTileRfkStyle}
      onClick={() => propHandler(propID)}
      // onClick={() => console.log(productName)}
      // onClick={propHandler(propID)}
    >
      <img
        className={styles.divimagePanelIcon}
        alt={"image of ".concat(productName)}
        src={productImageDimensions}
      />
      <div className={styles.itemMichael}>MICHAEL Michael Kors</div>
      <div className={styles.listItemLink} style={listItemLinkStyle}>
        <div className={styles.parkerMediumLeather}>{productName}</div>
      </div>
      <div className={styles.divsaleprice}>
            <div className={styles.was39000}>
            {'£' + productPrice}
            </div>
          </div>
    </div>
    
  );
};

export default CardContainer;
