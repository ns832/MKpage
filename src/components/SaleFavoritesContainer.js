import { useMemo } from "react";
import styles from "./SaleFavoritesContainer.module.css";
import { useState } from "react";
const SaleFavoritesContainer = ({
  productImageSize,
  productName,
  discountPrice,
  salePrice,
  propPadding,
  propPadding1,
  propJustifyContent,
  propFlex,
  propPadding2,
  propJustifyContent1,
  propFlex1,
  propCursor,
  propStateChanger,
  propID
}) => {
  const itemLinkStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const divlistPriceStyle = useMemo(() => {
    return {
      padding: propPadding1,
      justifyContent: propJustifyContent,
    };
  }, [propPadding1, propJustifyContent]);

  const was39000Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const divsalePriceStyle = useMemo(() => {
    return {
      padding: propPadding2,
      justifyContent: propJustifyContent1,
    };
  }, [propPadding2, propJustifyContent1]);

  const now11700Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);
  const divproductTileRfkStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);
  
  return (
    <div 
      className={styles.divproductTileRfk} 
      onClick = {() =>
        propStateChanger(propID)
      }
    >
      <img className={styles.divimagePanelIcon} alt="" src={productImageSize} />
      <div className={styles.list}>
        <div className={styles.itemMichael}>MICHAEL Michael Kors</div>
        <div className={styles.itemLink} style={itemLinkStyle}>
          <div className={styles.harrisonLargeLeather}>{productName}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.divlistprice} style={divlistPriceStyle}>
            <div className={styles.was39000} style={was39000Style}>
              {discountPrice}
            </div>
          </div>
          <div className={styles.divsaleprice} style={divsalePriceStyle}>
            <div className={styles.was39000} style={now11700Style}>
              {salePrice}
            </div>
          </div>
        </div>
        {/* <div className={styles.itemLink1}>+ more colors</div> */}
      </div>
    </div>
  );
};

export default SaleFavoritesContainer;
