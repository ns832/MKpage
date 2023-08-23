import ProductCard from "./ProductCard";
import ProductTileContainer from "./ProductTileContainer";
import styles from "./ContainerSection.module.css";
const ContainerSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.weThinkYou}>We Think You Will Love</div>
      <div className={styles.divswiperContainer}>
        <div className={styles.divswiperWrapper}>
          <ProductCard
            divproductImageContainer="/divproductimagecontainer@2x.png"
            itemMICHAELMichaelKors="MICHAEL Michael Kors"
            cutoutStretchCrepeMiniDre="Cutout Stretch Crepe Mini Dress"
            item22500="£225.00"
          />
          <ProductTileContainer
            productImageDimensions="/divproductimagecontainer1@2x.png"
            dressName="Status Print Stretch Twill Mini Dress"
            priceText="Now £94.00"
          />
          <ProductCard
            divproductImageContainer="/divproductimagecontainer2@2x.png"
            itemMICHAELMichaelKors="MICHAEL Michael Kors"
            cutoutStretchCrepeMiniDre="Stretch Crepe Belted Utility Dress"
            item22500="£305.00"
            propPadding="var(--padding-0) var(--padding-0) var(--padding-31xl)"
            propPadding1="unset"
            propBoxSizing="unset"
            propMarginTop="unset"
            propMarginTop1="unset"
            propPadding2="var(--padding-0) 6.220001220703125px var(--padding-0) var(--padding-0)"
          />
          <ProductTileContainer
            productImageDimensions="/divproductimagecontainer3@2x.png"
            dressName="Ribbed Stretch Viscose Dress"
            priceText="Now £70.00"
            propPadding="var(--padding-0) 6.3800048828125px var(--padding-0) var(--padding-0)"
          />
        </div>
        <div className={styles.buttonNextSlide}>
          <div className={styles.image}>
            <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerSection;
