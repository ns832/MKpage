import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import FormContainer from "./FormContainer";
import StoreFinderForm from "./StoreFinderForm";
import styles from "./NearbyListContainer.module.css";
const NearbyListContainer = ({ onClose }, props) => {
  return (
    <div className={styles.nearbyListContainer}>
      <div className={styles.listParent}>
        {/* <div className={styles.list} id='nearbyStoresList'> */}
          <div className={styles.item}>
          
          </div>
        {/* </div> */}
        <div className={styles.divclickCollectSection}>
          <FormContainer />
          <StoreFinderForm product_id = {props.id}/>
          <div className={styles.heading6}>COLLECT IN STORE</div>
        </div>
        <div className={styles.pclickCollectSubtitle}>
          <div className={styles.purchaseNowCollectContainer}>
            <p className={styles.purchaseNowCollect}>
              Purchase now, collect in store later! 
              Orders are usually ready within three hours of purchase.
            </p>
            {/* <p className={styles.purchaseNowCollect}>
              ready within three hours of purchase.
            </p> */}
          </div>
        </div>
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector.svg"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default NearbyListContainer;
