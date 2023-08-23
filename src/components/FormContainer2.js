import { useState, useCallback, useEffect } from "react";
import NearbyListContainer from "./NearbyListContainer";
import PortalPopup from "./PortalPopup";
import styles from "./FormContainer2.module.css";
const FormContainer2 = () => {
  const [isCollectInStorePageOpen, setCollectInStorePageOpen] = useState(false);
  const [itemData, setItemData] = useState(null)
  const [noOfVariants, setNoOfVariants] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [selectedID, setSelectedID] = useState(1)
  const [selectedColour, setSelectedColour] = useState()
  const [SelectedSize, setSelectedSize] = useState(0)
  const [selectedSizeExists, setSelectedSizeExists] = useState(true)
   const [quantity, setQuantity] = useState(1);

  // const itemUrl = 'http://localhost:5263/Item/GetSingle?id='
  const itemUrl = "https://michael-kors-API-pod-4.azurewebsites.net/Item/GetProdbyProdCode/"
  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get('id')
  const openCollectInStorePage = useCallback(() => {
    setCollectInStorePageOpen(true);
  }, []);

  const closeCollectInStorePage = useCallback(() => {
    setCollectInStorePageOpen(false);
  }, []);

  // make changes to quantity (lines 186 onwards )
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 5) {
      alert("Quantity not available. Please choose a quantity of 5 or fewer.");
      setQuantity(1);
    } else {
      setQuantity(newQuantity);
    }
  };



  const handleAddToBag = () => {
    alert("Item added to bag"); 
  };



  const fetchItemData = (input) => {
    fetch(itemUrl.concat(input),{
      method: 'GET',
      mode: 'cors',
    })
      .then((response => response.json()))
      .then((data => {
        setItemData(data)
        console.log(data)
        setNoOfVariants(data.data.length)
        setSelectedID(data.data[0].item.product_id)
        setSelectedSize(data.data[0].item.size)
        setIdsForAllSizes(data, 0)
      }))
      .catch((error => console.error('Error fetching data: ', error)))
  };

  useEffect(() => {
  fetchItemData(id)
  }, []) 
  function setIdsForAllSizes(data, index){
      let colour = data.data[index].item.colour
      let sameColourItems = []
      for (let item of data.data){
        if (item.item.colour == colour){
          sameColourItems.push(item.item)
        }
      }

      sessionStorage.setItem('smallID', '-1')
      sessionStorage.setItem('mediumID', '-1')
      sessionStorage.setItem('largeID', '-1')
      for (let item of sameColourItems){
        // item.size before on both size change later if need be 
        switch (item.size){
          case 0:
            sessionStorage.setItem('smallID', item.product_id)
            break
          case 1:
            sessionStorage.setItem('mediumID', item.product_id)
            break
          case 2:
            sessionStorage.setItem('largeID', item.product_id)
            break
        }
      }
  }
  function selectColour(colour){
    setSelectedColour(colour)
    let newItem = null
    let i = 0
    for (let item of itemData.data){
      if (item.item.colour == colour){
        newItem = item
        setSelectedID(newItem.item.product_id)
        setSelectedVariant(i)
      }
      i++
    }
  }
  function selectSize(size){
    document.getElementById('smallBox').className = styles.item1
    document.getElementById('mediumBox').className = styles.item2
    document.getElementById('largeBox').className = styles.item3
    document.getElementById('smallBoxText').className = styles.labelUs
    document.getElementById('mediumBoxText').className = styles.labelUs
    document.getElementById('largeBoxText').className = styles.labelUs

    let sizeNo = 0

    switch (size){
      case 'small':
        setSelectedSize(0)
        document.getElementById('smallBox').className = styles.item1Dark
        document.getElementById('smallBoxText').className = styles.labelUs2
        sizeNo = 0
        break
      case 'medium':
        setSelectedSize(1)
        document.getElementById('mediumBox').className = styles.item2Dark
        document.getElementById('mediumBoxText').className = styles.labelUs2
        sizeNo = 1
        break
      case 'large':
        setSelectedSize(2)
        document.getElementById('largeBox').className = styles.item3Dark
        document.getElementById('largeBoxText').className = styles.labelUs2
        sizeNo = 2
        break
    }
    setSelectedSizeExists(false)
    let i = 0
    if(itemData){
      for (let item of itemData.data){
        if (item.item.size === sizeNo){
          setSelectedID(i)
          setSelectedSizeExists(true)
        }
        i++
    }
  }
}
  return (
    <>
      <div className={styles.section}>
        <div className={styles.divcss1khcx5v}>
          {/* <div className={styles.nav}> */}
            <div className={styles.divinner}>
              <img
                className={styles.buttonStretchCrepeBelted}
                alt=""
                src={itemData?.data[selectedVariant].item.image}
              />
              {/* <img
                className={styles.buttonStretchCrepeBelted1}
                alt=""
                src="/button--stretch-crepe-belted-mini-dress-alternate-image-2@2x.png"
              /> */}
              <div className={styles.button}>
                <div className={styles.image}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector9.svg"
                  />
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.image}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector10.svg"
                  />
                </div>
              </div>
            </div>
          {/* </div> */}
          <div className={styles.section1}>
            <div className={styles.divgalleryImages}>
              <img
                className={styles.linkStretchCrepeBeltedMi}
                alt=""
                src={itemData?.data[selectedVariant].item.image}
              />
              {/* <img
                className={styles.linkStretchCrepeBeltedMi}
                alt=""
                src="/link--stretch-crepe-belted-mini-dress2--figure--mf381oh3gz0001-2@2x.png"
              /> */}
            </div>
          </div>
        </div>
        <div className={styles.divcommerceAreaWrapper}>
          <div className={styles.list}>
            <div className={styles.itemMichael}>MICHAEL Michael Kors</div>
            <div className={styles.itemHeading1}>
              <div className={styles.stretchCrepeBelted}>
                {itemData?.data[selectedVariant].item.name}
              </div>
            </div>
            <div className={styles.item}>
              <div id='idDisplay' className={styles.styleMf381oh3gz}>Style#{itemData?.data[selectedVariant].item.product_id}</div>
            </div>
          </div>
          <div className={styles.div}>{"£".concat(itemData?.data[selectedVariant].item.price)}</div>
          <div className={styles.divcolorContainer}>
            <div className={styles.color}>COLOR</div>
            <div className={styles.black}>{itemData?.data[selectedVariant].item.colour}</div>
            {/* TODO make this a buton and add as many as there are colour options */}
            {/* <div className={styles.itemListItem}> */}
              {/* <img className={styles.labelIcon} alt="" src="/label@2x.png" /> */}
            {/* </div> */}
          </div>
          <div className={styles.divsizeContainer}>
            <div className={styles.divsizeSectionLabels}>
              <div className={styles.sizeForSize}>SIZE</div>
              <div className={styles.link}>
                <div className={styles.sizeGuide}>Size Guide</div>
              </div>
            </div>
            <div className={styles.list1}>
              <div id='smallBox' className={styles.item1Dark} onClick={() => selectSize('small')}
              onMouseOver={() => selectSize('small')}
              >
                <div id='smallBoxText' className={styles.labelUs2}>Small</div>
              </div>
              <div id='mediumBox' className={styles.item2} onClick={() => selectSize('medium')}
               onMouseOver={() => selectSize('medium')}>
                <div id='mediumBoxText'className={styles.labelUs}>Medium</div>
              </div>
              <div id='largeBox' className={styles.item3}  onClick={() => selectSize('small')}
              onMouseOver={() => selectSize('large')}>
                <div id='largeBoxText' className={styles.labelUs} >Large</div>
              </div>
            </div>
          </div>
          <div className={styles.divpdpQuantityContainer}>
            <div className={styles.sizeForQuantity}>QUANTITY</div>
            <div className={styles.divselectControl}>
              <div className={styles.divselectValue}>
              <input 
              type="number"
              className={styles.option1}
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
                {/* <div className={styles.option1}>1</div> */}
              </div>
              <div className={styles.icon}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector11.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.klarnaPlacement}>
            <div className={styles.divlogo}>
              <div className={styles.logoBlacksvg}>
                <img
                  className={styles.logoBlacksvgIcon}
                  alt=""
                  src="/logo-blacksvg.svg"
                />
              </div>
            </div>
            <div className={styles.divtext}>
              <div className={styles.p}>
                <div className={styles.make3PaymentsContainer}>
                  <span>{`Make 3 payments of £`.concat((itemData?.data[selectedVariant].item.price / 3).toFixed(2))}</span>
                  <span className={styles.learnMore}>Learn more</span>
                </div>
                <div
                  className={styles.small18}
                >{`18+, T&C apply, Credit subject to status.`}</div>
              </div>
            </div>
          </div>
          <div className={styles.divpdpButtonContainer}>
            <div className={styles.buttonAddToBag}>
              <div onClick={handleAddToBag} className={styles.linkAdd}>add to bag</div>
            </div>
            <div
              className={styles.buttonCollectInStore}
              onClick={openCollectInStorePage}
            >
              <div className={styles.collectInStore}>COLLECT IN STORE</div>
            </div>
          </div>
          <div className={styles.divdesignDetails}>
          <div style={{ fontWeight: 600, textTransform: "uppercase" }}>Design</div>
             {itemData?.data[selectedVariant].item.description}
          </div>

          {/* <div className={styles.divdesignDetails}>
            <div className={styles.divdesignSection}>
              <div className={styles.size}>DESIGN</div>
              <div className={styles.pdesign}>
                <div className={styles.elevatingTheClassicContainer}>
                  <p className={styles.elevatingTheClassic}>
                    Elevating the classic LBD, this mini dress is cut from
                  </p>
                  <p className={styles.elevatingTheClassic}>
                    crepe with enough stretch to smooth over your curves.
                  </p>
                  <p className={styles.elevatingTheClassic}>
                    Fans of the brand will notice the iconic Empire logo on
                  </p>
                  <p className={styles.elevatingTheClassic}>
                    the straps and belt. Match the hardware to your
                  </p>
                  <p className={styles.elevatingTheClassic}>
                    accessories to heighten the effect.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.divdetailSection}>
              <div className={styles.size}>DETAILS</div>
              <div className={styles.divdetail}>
                <div className={styles.dressStretchContainer}>
                  <p className={styles.elevatingTheClassic}>• Dress</p>
                  <p className={styles.elevatingTheClassic}>• Stretch crepe</p>
                  <p className={styles.elevatingTheClassic}>
                    • 92% polyester/8% elastane
                  </p>
                  <p className={styles.elevatingTheClassic}>
                    • Lining: 100% polyester
                  </p>
                  <p className={styles.elevatingTheClassic}>• Zip fastening</p>
                  <p className={styles.elevatingTheClassic}>• Dry clean</p>
                  <p className={styles.elevatingTheClassic}>• Imported</p>
                  <p className={styles.elevatingTheClassic}>
                    • Model is 5’9”/175 cm wearing US size 2
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divmf381oh3gz}>
            <div className={styles.icon1}>
              <img className={styles.vectorIcon3} alt="" src="/vector12.svg" />
            </div>
            <div className={styles.linkAdd1}>Add to favorites</div>
          </div>*/}
        </div>
      </div>
      {isCollectInStorePageOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCollectInStorePage}
        >
          <NearbyListContainer onClose={closeCollectInStorePage} id = {selectedID} />
        </PortalPopup>
      )}
    </>
  );
};


export default FormContainer2;
