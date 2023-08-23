import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./StoreFinderForm.module.css";
import { useEffect } from "react";
import NearbyListContainer from "./NearbyListContainer";
import NearbyStoreDetails from "./NearbyStoreDetails";
import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator';
import React, { useState } from 'react';
import detailsStyles from './NearbyStoreDetails.module.css'



var input = ''
var initial = true

const StoreFinderForm = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [apiData, setApiData] = useState([]);
  // const [apiProdData, setApiProdData] = useState([])
  const [postcodeValid, setPostcodeValid] = useState(null);
  const [prodID, setProdID] = useState(1)
  const [prodColour, setProdColour] =  useState()

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // setPostcodeValid(false);
  };
  


  const {postcodeValidator, postcodeValidatorExistsForCountry } = require('postcode-validator');

  const url = 'https://michael-kors-API-pod-4.azurewebsites.net/Store/GetNearestStoreByPostcode/NearestStores/';
  
  useEffect(() =>{
    setProdID(document.getElementById('idDisplay').textContent.split('#')[1])
  },[])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    input = document.getElementById('customerAddressInputControl').value.toUpperCase()
    if (postcodeValidator(input, 'UK') && postcodeValidatorExistsForCountry('UK')) {
      setPostcodeValid(true);
      fetchData(input);
  } else {
    setPostcodeValid(false);
    setApiData([])
  }
  };
//'http://localhost:5263/Store/GetNearestStoreByPostcode/NearestStores/W12%207GF?product1=10&product2=4&product3=5'
//
  const fetchData = (input) => {
    fetch(url.concat(input).concat('?product1=').concat(sessionStorage.getItem('smallID')).concat('&product2=').concat(sessionStorage.getItem('mediumID')).concat('&product3=').concat(sessionStorage.getItem('largeID')),{
      //.concat(props.id).concat('/')
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {setApiData(data)
      console.log(data)})
      .catch((error) => console.error('Error fetching data:', error));
  };


  return (
    <div className={styles.form}>
      <div className={styles.divsmall12} />
      <form onSubmit={handleSubmit}>
      <Form.Group className={styles.inputLabel} 
        id="customerAddressInput">
        <Form.Label>Check Store Availability:</Form.Label>
        <input
          className={styles.userInput}
          type="text"
          name="customer address"
          id="customerAddressInputControl"
          placeholder="Enter Postcode"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button
        type="submit"
        onClick={handleSubmit}
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        className={styles.buttonFindStores}
        variant="primary"
        name="FIND STORES"
        id="findstores"
      >
        FIND STORES
      </Button>
      </form>
      
      <div className={styles.presultmsg}>
        {postcodeValid === true && (
       <div className={styles.showingResults}>Showing results near '{input}'</div>
        )}
        {postcodeValid === false && (
      <div>Please enter a valid postcode</div>
        )}
        <div
          className={styles.placeholderShowingResults}
          id = 'showingResultsString'
        >
        {apiData.data?.map((apiDataObj, index) => {

        return (

          <NearbyStoreDetails storeName={apiDataObj.store.name} city={apiDataObj.store.location.town} distance={apiDataObj.distance} avail1={apiDataObj.availability[0]} avail2={apiDataObj.availability[1]} avail3={apiDataObj.availability[2]}/>
        );
        })}
        </div>
      </div>
    </div>
  );

};

export default StoreFinderForm;


// const StoreFinderForm = () => {
//   return (
//     <div className={styles.form}>
//       <div className={styles.divsmall12} />
//       <Form.Group className={styles.labelInput} 
//         id="customerAddressInput">
//         <Form.Label>Check Store Availability:</Form.Label>
//         <Form.Control
//           onKeyDown={onTyping}
//           type="text"
//           name="customer address"
//           id="customerAddressInputControl"
//           placeholder="city or postcode"
//         />
//       </Form.Group>
//       <Button
//         type="submit"
//         onClick={clickForm}
//         onSubmit={submitLocation}
//         className={styles.buttonFindStores}
//         variant="primary"
//         name="FIND STORES"
//         id="findstores"
//       >
//         Find Stores
//       </Button>
//       <div className={styles.presultmsg}>

//         <div
//           className={styles.placeholderShowingResults}
//           id = 'showingResultsString'
//         ></div>
//       </div>
//     </div>
//   );
// };

// function clickForm(){
//   console.log(document.getElementById("customerAddressInputControl").value)
//   document.getElementById("showingResultsString").textContent = 'Showing results near ' + document.getElementById("customerAddressInputControl").value
//   fetch('http://localhost:5263/api/Store/location_town/London')
//    .then(response => response.json())
//    .then(data => console.log(data))
// }


// function submitLocation(e){
//   console.log(document.getElementById("customerAddressInputControl").value)
//   document.getElementById("showingResultsString").textContent = 'Showing results near ' + document.getElementById("customerAddressInputControl").value
//   e.preventDefault()
// }
// function onTyping(e){
//   if (e.key == 'Enter'){
//     clickForm()
//   }
// }

// //  useEffect(() => {    
// //   const keyDownHandler = event => {
// //       console.log('User pressed: ', event.key);
// //       if (event.key === 'Enter') {
// //         event.preventDefault();
// //         submitLocation();}};
// //     document.addEventListener('keydown', keyDownHandler);
// //     return () => {      
// //       document.removeEventListener('keydown', keyDownHandler);
// //     };
// //   },[]);

// export default StoreFinderForm;





          {/* {apiData && (
            <div>
              <pre>{JSON.stringify(apiData, null, 2)}</pre>
            </div>
          )} */}


                    // <div

          //   style={{

          //     width: "15em",

          //     backgroundColor: "#35D841",

          //     padding: 102,

          //     borderRadius: 10,

          //     marginBlock: 100,

          //   }}

          // >

          //   <p style={{ fontSize: 50, color: 'black' }}>{apiDataObj.name}</p>

          //   <p style={{ fontSize: 50, color: 'black' }}>{apiDataObj.address.town}</p>

          // </div>