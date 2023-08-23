import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./AvailabilityIcon.module.css";
import { render } from "@testing-library/react";
import React from "react";
const AvailabilityIcon = (props) => {
  let colour;
  switch (props.availability){
    case 'Out of Stock':
      colour = <div className={styles.lowAvail}/>
      break
    case 'Limited Availability':
      colour = <div className={styles.mediumAvail}/>
      break
    case 'In Stock':
      colour = <div className={styles.highAvail}/>
      break
    default:
      colour = <div className={styles.lowAvail}/>
  }
    return (
      <div className={props.style1}>
        {colour}
        <div className={props.style2}>{props.sizeName}
        </div>
        
      </div>
    )
}

export default AvailabilityIcon;






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








