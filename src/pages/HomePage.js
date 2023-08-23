import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CardContainer1 from "../components/CardContainer1";
import CardContainer from "../components/CardContainer";
import StoreFinderContainer from "../components/StoreFinderContainer";
import styles from "./HomePage.module.css";
import MainHeader from "../components/MainHeader";
const HomePage = () => {
  const navigate = useNavigate();
  const [itemData, setItemData] = useState(null)
  const [clickedID, setClickedID] = useState()
  const itemUrl = 'https://michael-kors-API-pod-4.azurewebsites.net/Item/GetAllProductsbyProdCode?amount='
  const onDivproductTileRfkContainer5Click = useCallback(() => {
    navigate("/dress-page?id=".concat(clickedID));
  }, [navigate]);
  const onClickFav= useCallback((value) =>{
    navigate("/dress-page?id=".concat(value));
  },[navigate])
  const fetchItemData = (input) => {
    fetch(itemUrl.concat(input),{
      method: 'GET',
      mode: 'cors',
    })
      .then((response => response.json()))
      .then((data => {
        setItemData(data)
        console.log(data)
      }))
      .catch((error => console.error('Error fetching data: ', error)))
  };
  useEffect(() => {
    fetchItemData('8')
  }, [])
  const handleChange = (value) => {
    if(value){
      onClickFav(value)
    }
    //(onDivproductTileRfkContainer5Click)
    //onDivproductTileRfkContainer5Click()
  }
  return (
    <div className={styles.homePage}>
      <div className={styles.divmkHomepage}>
        <MainHeader />
        <div className={styles.mainSection}>
          <div className={styles.section}>
            <div className={styles.region}>
              <div className={styles.divinnercontainer}>
                <div className={styles.saleFinale}>Sale Finale</div>
                <div className={styles.plusNewStyles}>
                  PLUS, NEW STYLES ADDED
                </div>
                <div className={styles.divwpcta}>
                  <div className={styles.linkNewToSale}>
                    <div className={styles.newToSale}>NEW TO SALE ▸</div>
                  </div>
                  <div className={styles.linkHandbags}>
                    <div className={styles.newToSale}>HANDBAGS ▸</div>
                  </div>
                  <div className={styles.linkClothing}>
                    <div className={styles.newToSale}>CLOTHING ▸</div>
                  </div>
                  <div className={styles.linkShoes}>
                    <div className={styles.newToSale}>SHOES ▸</div>
                  </div>
                  <div className={styles.linkAccessories}>
                    <div className={styles.newToSale}>ACCESSORIES ▸</div>
                  </div>
                  <div className={styles.linkViewAll}>
                    <div className={styles.newToSale}>VIEW ALL ▸</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className={styles.small}>
              <div className={styles.instoreOnlineContainer}>
                {`Instore & Online. `}
                <span
                  className={styles.termsConditions}
                >{`Terms & Conditions`}</span>
              </div>
            </div> */}
          </div>
          <CardContainer1 
            name1 = {itemData?.data[0].name}
            price1 = {itemData?.data[0].price}
            image1 = {itemData?.data[0].image}
            id1 = {itemData?.data[0].product_code}
            name2 = {itemData?.data[1].name}
            price2 = {itemData?.data[1].price}
            image2 = {itemData?.data[1].image}
            id2 = {itemData?.data[1].product_code}
            name3 = {itemData?.data[2].name}
            price3 = {itemData?.data[2].price}
            image3 = {itemData?.data[2].image}
            id3 = {itemData?.data[2].product_code}
            name4 = {itemData?.data[5].name}
            price4 = {itemData?.data[5].price}
            image4 = {itemData?.data[5].image}
            id4 = {itemData?.data[5].product_code}
            stateChanger = {handleChange}
          />
          <div className={styles.divpageLevelMkwpdev}>
            <div className={styles.sectionRegion}>
              <img
                className={styles.linkWalkThisWayPicture}
                alt=""
                src="/link--walk-this-way--picture--hp-promo-1jpg@2x.png"
              />
              <div className={styles.divtypecontainerTextbox}>
                <div className={styles.divinnercontainer1}>
                  <div className={styles.heading2}>WALK THIS WAY</div>
                  <div className={styles.ptypeCopyCaslonR20}>
                    <div className={styles.lendingInstantPolishContainer}>
                      <p className={styles.lendingInstantPolish}>
                        Lending instant polish to late-summer adventures,
                        tailored co-cords in true-blue were
                      </p>
                      <p className={styles.lendingInstantPolish}>
                        made to turn heads.
                      </p>
                    </div>
                  </div>
                  <div className={styles.linkShop}>SHOP NEW ARRIVALS ▸</div>
                  <div className={styles.linkShop1}>SHOP CLOTHING ▸</div>
                </div>
              </div>
            </div>
            <div className={styles.sectionRegion1}>
              <div className={styles.divcss79elbk}>
                <img
                  className={styles.linkBlackHandbagHpProm}
                  alt=""
                  src="/link--black-handbag--hp-promo-21jpg@2x.png"
                />
                <div className={styles.linkShop2}>SHOP HANDBAGS ▸</div>
              </div>
              <div className={styles.divcss79elbk}>
                <img
                  className={styles.linkBlackHandbagHpProm}
                  alt=""
                  src="/link--gold-shoes--hp-promo-22jpg@2x.png"
                />
                <div className={styles.linkShop2}>SHOP SHOES ▸</div>
              </div>
            </div>
            <div className={styles.sectionRegionSectionS}>
              <div className={styles.heading21}>TRENDING NOW</div>
              <div className={styles.divswiperContainer}>
                <div className={styles.divswiperWrapper}>
                  <CardContainer
                    productImageDimensions={itemData?.data[4].image}
                    productName={itemData?.data[4].name}
                    propCursor="pointer"
                    propPadding="var(--padding-0) 11.8800048828125px var(--padding-0) var(--padding-0)"
                    propID={itemData?.data[4].product_code}
                    propHandler={handleChange}
                    productPrice={itemData?.data[4].price}
                  />
                  <CardContainer
                    productImageDimensions={itemData?.data[3].image}
                    productName={itemData?.data[3].name}
                    propCursor="pointer"
                    propPadding="var(--padding-0) 11.8800048828125px var(--padding-0) var(--padding-0)"
                    propID={itemData?.data[3].product_code}
                    propHandler={handleChange}
                    productPrice={itemData?.data[3].price}
                  />
                  {/* <div className={styles.divproductTileRfk}>
                    <img
                      className={styles.divimagePanelIcon}
                      alt=""
                      src="/divimagepanel6@2x.png"
                    />
                    <div className={styles.listItemLink}>
                      <div className={styles.parkerMediumCrocodileContainer}>
                        <p className={styles.lendingInstantPolish}>
                          Parker Medium Crocodile Embossed Leather
                        </p>
                        <p className={styles.lendingInstantPolish}>
                          Shoulder Bag
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <CardContainer
                    productImageDimensions={itemData?.data[6].image}
                    productName={itemData?.data[6].name}
                    propCursor="pointer"
                    propPadding="var(--padding-0) 11.8800048828125px var(--padding-0) var(--padding-0)"
                    // onDivproductTileRfkContainer5Click={
                    //   () => {
                    //     setClickedID(itemData?.data[6].id)
                    //     //onDivproductTileRfkContainer5Click()}
                    // }}
                    propID={itemData?.data[6].product_code}
                    propHandler={handleChange}
                    productPrice={itemData?.data[5].price}
                  />
                  <CardContainer
                    productImageDimensions={itemData?.data[7].image}
                    productName={itemData?.data[7].name}
                    propCursor="pointer"
                    propPadding="var(--padding-0) 11.8800048828125px var(--padding-0) var(--padding-0)"
                    propID={itemData?.data[7].product_code}
                    propHandler={handleChange}
                    productPrice={itemData?.data[5].price}
                  />
                </div>
                <div className={styles.buttonNextSlide}>
                  <div className={styles.image}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sectionRegion2}>SHOP NEW ARRIVALS ▸</div>
            <div className={styles.sectionRegion3}>
              <div className={styles.divcss79elbk2}>
                <img
                  className={styles.linkMadeYouLookHpProm}
                  alt=""
                  src="/link--made-you-look--hp-promo-31jpg@2x.png"
                />
                <div className={styles.divinnercontainer2}>
                  <div className={styles.heading22}>MADE YOU LOOK</div>
                  <div className={styles.divtypeCopyCaslonR20}>
                    <div className={styles.stealTheLimelightContainer}>
                      <p className={styles.lendingInstantPolish}>
                        Steal the limelight in head-turning styles that
                      </p>
                      <p className={styles.lendingInstantPolish}>
                        epitomise sophistication.
                      </p>
                    </div>
                  </div>
                  {/* <div className={styles.linkShop4}>SHOP WOMEN’S ▸</div> */}
                </div>
              </div>
              {/* <div className={styles.divcss1nfnnje}>
                <div className={styles.divcss79elbk3}>
                  <img
                    className={styles.linkAllRoundersHpPromo}
                    alt=""
                    src="/link--all-rounders--hp-promo-32jpg@2x.png"
                  />
                  <div className={styles.divinnercontainer3}>
                    <div className={styles.heading23}>ALL ROUNDERS</div>
                    <div className={styles.divtypeCopyCaslonR201}>
                      <div className={styles.stealTheLimelightContainer}>
                        <p className={styles.lendingInstantPolish}>
                          Lean into all things simple this season;
                        </p>
                        <p className={styles.lendingInstantPolish}>
                          we’re talking sleek, elevated staples that
                        </p>
                        <p className={styles.lendingInstantPolish}>
                          stand up to any occasion.
                        </p>
                      </div>
                    </div>
                    <div className={styles.linkShop5}>SHOP MEN’S ▸</div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className={styles.sectionRegion4}>
              <div className={styles.divcss1fg83g9}>
                <div className={styles.pseudo} />
                <div className={styles.pseudo1}>
                  <div className={styles.michaelKorsCollection}>
                    MICHAEL KORS COLLECTION
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sectionRegion5}>
              <img
                className={styles.linkWalkThisWayPicture}
                alt=""
                src="/link--meet-your-match--hp-promo-4jpg@2x.png"
              />
              <div className={styles.divtypecontainerTextbox1}>
                <div className={styles.divinnercontainer4}>
                  <div className={styles.heading24}>MEET YOUR MATCH</div>
                  <div className={styles.ptypeCopyCaslonR201}>
                    <div className={styles.stealTheLimelightContainer}>
                      <p className={styles.lendingInstantPolish}>
                        A crisp, tailored suit over a lustrous charmeuse shirt
                        or flared lace pants with a bold
                      </p>
                      <p className={styles.lendingInstantPolish}>
                        leather belt-this season proves that opposites attract.
                      </p>
                    </div>
                  </div>
                  <div className={styles.linkShop6}>
                    SHOP FALL/WINTER 2023 COLLECTION
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <StoreFinderContainer />
          {/* <div className={styles.section1}>
            <div className={styles.newToSale}>
              SIGN UP TO RECEIVE 10% OFF YOUR FIRST ORDER ▸
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default HomePage;
