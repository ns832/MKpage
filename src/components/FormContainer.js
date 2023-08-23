import styles from "./FormContainer.module.css";
import { useState, useEffect } from "react";






const FormContainer = () => {
  const [apiProdData, setApiProdData] = useState()
  const [prodID, setProdID] = useState()

  const prodURL = 'https://michael-kors-API-pod-4.azurewebsites.net/Item/GetSingle?id='
  useEffect(() =>{
    console.log('AAAAAAAAAA')
    console.log(document.getElementById('idDisplay').textContent.split('#')[1])
    setProdID(document.getElementById('idDisplay').textContent.split('#')[1])
    console.log(prodID)
    //fetchProdData()
  },[])
  useEffect(() =>{
    fetchProdData()
  },[prodID])
  function fetchProdData(){
    console.log("HII")
    console.log(prodID)
    if(prodID){
    fetch(prodURL.concat(prodID),{
      method: 'GET',
      mode: 'cors',
    })
      .then((response => response.json()))
      .then((data => {
        console.log(data)
        setApiProdData(data)
        console.log('hello')
      }))
      .catch((error => console.error('Error fetching data: ', error)))
    }
    
  }
  return (
    <div className={styles.divproductSection}>
      <div className={styles.divproductImagePanel}>
        <img
          className={styles.mr381gj3gz0001IsIcon}
          alt=""
          src={apiProdData?.data[0].image}
        />
      </div>
      <div className={styles.list}>
        <div className={styles.itemStretch}>
          {apiProdData?.data[0].name}
        </div>
        <div className={styles.item}>
          <div className={styles.styleMf381oh3gz}>Style # {apiProdData?.data[0].product_id}</div>
        </div>
        <div className={styles.item1}>
          <div className={styles.spanh2dAff76c1f}>
            <div className={styles.styleMf381oh3gz}>Color: {apiProdData?.data[0].colour}</div>
          </div>
          <div className={styles.spanh2d83bdbb6d}>
            <div className={styles.quantity1}>Quantity: 1</div>
          </div>
        </div>
        {/* <div className={styles.item30500}>{apiProdData?.data[0].colour}</div> */}
        <div className={styles.spanstockstatus}>
          <div className={styles.pseudo}>
            <div className={styles.a}>A</div>
          </div>
          <div className={styles.limitedAvailability}>Limited availability</div>
        </div>
        <div className={styles.spanstockstatus1}>
          <div className={styles.pseudo1}>
            <div className={styles.a}>A</div>
          </div>
          <div className={styles.limitedAvailability}>OUT OF stock</div>
        </div>
        <div className={styles.spanstockstatus2}>
          <div className={styles.pseudo2}>
            <div className={styles.a}>A</div>
          </div>
          <div className={styles.limitedAvailability}>in stock</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
