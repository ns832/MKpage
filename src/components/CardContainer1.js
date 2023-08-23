import SaleFavoritesContainer from "./SaleFavoritesContainer";
import styles from "./CardContainer1.module.css";
import { useState } from "react";
const CardContainer1 = (props) => {
  return (
    <div className={styles.divpageLevelMkwpdev}>
      <div className={styles.sectionRegion}>
        <div className={styles.divcss1tukwb9}>
          <div className={styles.pseudo} />
          <div className={styles.pseudo1} />
        </div>
      </div>
      <div className={styles.saleFavourites}>FAVOURITES</div>
        {/* <div className={styles.sectionRegionSectionS}> */}
          <div className={styles.divswiperWrapper}>
            <SaleFavoritesContainer
              productImageSize={props.image1}
              productName={props.name1}
              salePrice={'£' + props.price1}
              propID={props.id1}
              propStateChanger={props.stateChanger}
              propCursor="pointer"
              propPadding="var(--padding-0) 11.8800048828125px var(--padding-0) var(--padding-0)"
            />
            <SaleFavoritesContainer
              productImageSize={props.image2}
              productName={props.name2}
              salePrice={'£' + props.price2}
              propID={props.id2}
              propStateChanger={props.stateChanger}
              propCursor="pointer"
              propPadding="var(--padding-0) 11.8800048828125px var(--padding-0) var(--padding-0)"
            />
            <SaleFavoritesContainer
              productImageSize={props.image3}
              productName={props.name3}
              salePrice={'£' + props.price3}
              propStateChanger={props.stateChanger}
              propID={props.id3}
              propCursor="pointer"
              propPadding="var(--padding-0) 11.8800048828125px var(--padding-0) var(--padding-0)"
            />
            
            <SaleFavoritesContainer
              productImageSize={props.image4}
              productName={props.name4}
              // discountPrice="Was £120.00"
              salePrice={'£'.concat(props.price4)}
              propStateChanger={props.stateChanger}
              propID={props.id4}
              propPadding="var(--padding-0) 14.220001220703125px var(--padding-0) var(--padding-0)"
              propPadding1="var(--padding-12xs) var(--padding-135xl) var(--padding-0) var(--padding-0)"
              propJustifyContent="space-between"
              propFlex="unset"
              propPadding2="var(--padding-12xs) var(--padding-138xl) var(--padding-0) var(--padding-0)"
              propJustifyContent1="space-between"
              propFlex1="unset"
              propCursor="pointer"
            />
          </div>
          <div className={styles.buttonNextSlide}> 
            <div className={styles.image}>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            </div>
          </div>
        {/* </div> */}
    </div>
  );
};

export default CardContainer1;

{/* <div className={styles.divproductTileRfk}>
            <img
              className={styles.divimagePanelIcon}
              alt=""
              src="/divimagepanel1@2x.png"
            />
            <div className={styles.list}>
              <div className={styles.itemMichael}>MICHAEL Michael Kors</div>
              <div className={styles.itemLink}>
                <div className={styles.trishaLargePebbled}>
                  Trisha Large Pebbled Leather Hobo Shoulder Bag
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.divlistprice}>
                  <div className={styles.was39500}>Was £395.00</div>
                </div>
                <div className={styles.divsaleprice}>
                  <div className={styles.was39500}>Now £118.00</div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className={styles.divproductTileRfk1}>
            <img
              className={styles.divimagePanelIcon}
              alt=""
              src="/divimagepanel2@2x.png"
            />
            <div className={styles.list1}>
              <div className={styles.itemMichael1}>MICHAEL Michael Kors</div>
              <div className={styles.itemLink1}>
                <div className={styles.trishaLargePebbled}>
                  Dover Small Leather Crossbody Bag
                </div>
              </div>
              <div className={styles.item1}>
                <div className={styles.divlistprice1}>
                  <div className={styles.was39500}>Was £245.00</div>
                </div>
                <div className={styles.divsaleprice1}>
                  <div className={styles.was39500}>Now £73.00 - £98.00</div>
                </div>
              </div>
              {/* <div className={styles.itemLink2}>+ more colors</div> 
              </div>
            </div> */}