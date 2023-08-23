import MainHeader from "../components/MainHeader";
import FormContainer2 from "../components/FormContainer2";
import ContainerSection from "../components/ContainerSection";
import ShoppersAlsoViewedContainer from "../components/ShoppersAlsoViewedContainer";
import StoreFinderContainer2 from "../components/StoreFinderContainer2";
import styles from "./DressPage.module.css";
import { useEffect } from "react";



const DressPage = () => {
  useEffect(() =>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className={styles.dressPage}>
      <div className={styles.divmkPdpPage}>
        <MainHeader />
        <div className={styles.section}>
          {/* <div className={styles.list}> */}
            {/* <div className={styles.item}>
              <div className={styles.linkHome}>home</div>
              <div className={styles.linkHome}>/</div>
            </div>
            <div className={styles.itemStretch}>
              stretch crepe belted mini dress
            </div> */}
          {/* </div> */}
          <FormContainer2 />
          <ContainerSection />
          <ShoppersAlsoViewedContainer />
        </div>
        <StoreFinderContainer2 />
      </div>
    </div>
  );
};

export default DressPage;
