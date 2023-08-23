import ProductCard from "./ProductCard";
import styles from "./ShoppersAlsoViewedContainer.module.css";
const ShoppersAlsoViewedContainer = () => {
  return (
    <div className={styles.section}>
      <div className={styles.shoppersAlsoViewed}>Shoppers Also Viewed</div>
      <div className={styles.divswiperContainer}>
        <div className={styles.divswiperWrapper}>
          <div className={styles.divproductTileRfk}>
            <div className={styles.divimagePanel}>
              <div className={styles.link}>
                <img
                  className={styles.divproductImageContainerIcon}
                  alt=""
                  src="/divproductimagecontainer4@2x.png"
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
              <div className={styles.itemLink}>
                <div className={styles.ribbedStretchKnit}>
                  Ribbed Stretch Knit Tank Dress
                </div>
              </div>
              <div className={styles.item22000}>£220.00</div>
              <div className={styles.itemLink1}>+ more colors</div>
            </div>
          </div>
          <ProductCard
            divproductImageContainer="/divproductimagecontainer5@2x.png"
            itemMICHAELMichaelKors="MICHAEL Michael Kors"
            cutoutStretchCrepeMiniDre="Stretch Crepe Belted Mini Skirt"
            item22500="£275.00"
            propPadding="var(--padding-0) var(--padding-0) 50.010009765625px"
            propPadding1="var(--padding-0) var(--padding-0) 0.010009765625px"
            propBoxSizing="border-box"
            propMarginTop="-0.01px"
            propMarginTop1="-0.01px"
            propPadding2="var(--padding-0) 6.19000244140625px var(--padding-0) var(--padding-0)"
          />
          <ProductCard
            divproductImageContainer="/divproductimagecontainer6@2x.png"
            itemMICHAELMichaelKors="MICHAEL Michael Kors"
            cutoutStretchCrepeMiniDre="Matte Jersey Cutout Midi Dress"
            item22500="£295.00"
            propPadding="var(--padding-0) var(--padding-0) 50.010009765625px"
            propPadding1="var(--padding-0) var(--padding-0) 0.010009765625px"
            propBoxSizing="border-box"
            propMarginTop="-0.01px"
            propMarginTop1="-0.01px"
            propPadding2="var(--padding-0) 5.529998779296875px var(--padding-0) var(--padding-0)"
          />
          <ProductCard
            divproductImageContainer="/divproductimagecontainer7@2x.png"
            itemMICHAELMichaelKors="Michael Kors"
            cutoutStretchCrepeMiniDre="Large Logo Woven Dust Bag"
            item22500="£10.00"
            propPadding="var(--padding-0) var(--padding-0) 50.010009765625px"
            propPadding1="var(--padding-0) var(--padding-0) 0.010009765625px"
            propBoxSizing="border-box"
            propMarginTop="-0.01px"
            propMarginTop1="-0.01px"
            propPadding2="var(--padding-0) 7.589996337890625px var(--padding-0) var(--padding-0)"
          />
        </div>
        <div className={styles.buttonNextSlide}>
          <div className={styles.image}>
            <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppersAlsoViewedContainer;
