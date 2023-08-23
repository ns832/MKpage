import styles from "./MainHeader.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
const MainHeader = () => {

  const navigate = useNavigate()
  
  const clickHead = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className={styles.header}>
      <div className={styles.banner}>
        <div className={styles.bannerMessageContent}>
          SALE : FINAL REDUCTIONS | PLUS, NEW STYLES ADDED*
          {/* <div className={styles.link}>
            <div className={styles.sale}>SALE</div>
          </div>
          <div className={styles.finalReductions}>
            : FINAL REDUCTIONS | PLUS, NEW STYLES ADDED*
          </div> */}
        </div>
      </div>
      <div className={styles.divheaderhambergermenu}>
        <div className={styles.divmkNav}>
          <img
            className={styles.linkPictureLogoMkwebp}
            alt=""
            src="/heading-1--link--picture--logo-mkwebp@2x.png"
            onClick={() => clickHead()}
          />
          <div className={styles.navigationList}>
            <div className={styles.itemLinkNewMainnavkey}>
              <div className={styles.new}>new</div>
            </div>
            <div className={styles.itemLinkWomenMainnavk}>
              <div className={styles.new}>women</div>
            </div>
            <div className={styles.itemLinkMenMainnavkey}>
              <div className={styles.new}>men</div>
            </div>
            <div className={styles.itemLinkMichaelKorsCol}>
              <div className={styles.new}>mk collection</div>
            </div>
            <div className={styles.itemLinkHandbagsMainna}>
              <div className={styles.new}>handbags</div>
            </div>
            <div className={styles.itemLinkShoesMainnavk}>
              <div className={styles.new}>shoes</div>
            </div>
            <div className={styles.itemLinkWatchesMainnav}>
              <div className={styles.new}>watches</div>
            </div>
            <div className={styles.itemLinkAccessoriesMain}>
              <div className={styles.new}>accessories</div>
            </div>
            <div className={styles.itemLinkGiftsMainnavk}>
              <div className={styles.new}>gifts</div>
            </div>
            <div className={styles.itemLinkSaleMainnavke}>
              <div className={styles.new}>sale</div>
            </div>
          </div>
          <div className={styles.divutilityNav}>
            <div className={styles.divregionSelectWrap}>
              <div className={styles.listButton}>
                <img className={styles.svgIcon} alt="" src="/svg.svg" />
                <div className={styles.uk}>UK £</div>
              </div>
            </div>
            <div className={styles.divuserItems}>
              <div className={styles.list}>
                <div className={styles.itemLinkSearchIcon}>
                  <img className={styles.imageIcon} alt="" src="/image1.svg" />
                </div>
                <div className={styles.itemLink} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
