import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./NearbyStoreDetails.module.css";
import { render } from "@testing-library/react";
import React from "react";
import AvailabilityIcon from "./AvailabilityIcon";
import iconStyles from "./AvailabilityIcon.module.css"



const NearbyStoreDetails = (props) => {
  const handleAddToBag = () => {
    alert("Item added to bag"); 
  };

    return (
             <div className={styles.divstoreDetails}>
              <div className={styles.theInfo}>
                <div className={styles.michaelKorsBluewater}>
                    {props.storeName}
                  </div>
                  <div className={styles.london}>{props.city}</div>
                  <div className={styles.ken}>{props.town}</div>
                  <div className={styles.milesAway}>{props.distance} miles away</div>
                  <div className={styles.buttonObjectObject}>
                    <div className={styles.seeStoreDetails}>See store details</div>
                  </div>
                  {/* <div className="styles" */}
                  <Button
                    onClick={handleAddToBag}
                    className={styles.buttonAddToBagCollect}
                    variant="outline-primary"
                    name="ADD to bag"
                    id="add2bag"
                  >
                  ADD TO BAG & COLLECT
                </Button>
  

                <div className={styles.sizes}>
                    <AvailabilityIcon style1={iconStyles.small} style2={iconStyles.s} sizeName={'S'} availability={props.avail1}/>
                    <AvailabilityIcon style1={iconStyles.medium} style2={iconStyles.m} sizeName={'M'} availability={props.avail2}/>
                    <AvailabilityIcon style1={iconStyles.large} style2={iconStyles.l} sizeName={'L'} availability={props.avail3}/>
                  </div>
                  
                  <hr className={styles.horizontalLine}></hr>
              </div> 
              </div>
    )
}

export default NearbyStoreDetails;






// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
// import FormContainer from "./FormContainer";
// import StoreFinderForm from "./StoreFinderForm";
// import styles from "./NearbyStoreDetails.module.css";
// const NearbyStoreDetails = ({ onClose }) => {
//   return (
//              <div className={styles.divstoreDetails}>
//               <div className={styles.michaelKorsBluewater}>
//                 Michael Kors Bluewater
//               </div>
//               <div className={styles.london}>London</div>
//               <div className={styles.ken}>Ken</div>
//               <div className={styles.milesAway}>17.8 miles away</div>
//               <div className={styles.buttonObjectObject}>
//                 <div className={styles.seeStoreDetails}>See store details</div>
//               </div>
//               <Button
//                 className={styles.buttonAddToBagCollect}
//                 variant="outline-primary"
//                 name="ADD to bag"
//                 id="add2bag"
//               >{`ADD TO BAG & COLLECT`}</Button>
//               <Button className={styles.small}>
//                 <div className={styles.smallChild} />
//                 <div className={styles.s}>S</div>
//               </Button>
//               <Button className={styles.meduim}>
//                 <div className={styles.meduimChild} />
//                 <div className={styles.m}>M</div>
//               </Button>
//               <Button className={styles.large}>
//                 <div className={styles.largeChild} />
//                 <div className={styles.l}>L</div>
//               </Button>
//             </div>
//   )
// }

// export default NearbyStoreDetails;



{/* <Button className={styles.small}>
//                 <div className={styles.smallChild} />
//                 <div className={styles.s}>S</div>
//               </Button>
//               <Button className={styles.meduim}>
//                 <div className={styles.meduimChild} />
//                 <div className={styles.m}>M</div>
//               </Button>
//               <Button className={styles.large}>
//                 <div className={styles.largeChild} />
//                 <div className={styles.l}>L</div>
//               </Button> */}




