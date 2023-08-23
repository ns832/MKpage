import styles from "./StoreFinderContainer.module.css";
const StoreFinderContainer = () => {
  return (
    <div className={styles.divfooterWrapper}>
      <div className={styles.divfooterContent}>
        <div className={styles.footer}>
          <div className={styles.divleftSection}>
            <div className={styles.link}>
              <div className={styles.icon}>
                <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
              </div>
              <div className={styles.findAStore}>Find a Store</div>
            </div>
            <div className={styles.divmkNewsletterSubs}>
              <div className={styles.plarge6}>
                <div className={styles.signUpForContainer}>
                  <p className={styles.signUpFor}>Sign Up for updates </p>
                  <p className={styles.signUpFor}>from Michael Kors and</p>
                  <p className={styles.signUpFor}>receive 10% off your first order.</p>
                  {/* <p className={styles.signUpFor}> order.     </p> */}
                </div>
              </div>
              <div className={styles.form}>
                <div className={styles.labelInput}>
                  <div className={styles.divplaceholder} />
                </div>
                <div className={styles.buttonSignUp}>
                  <div className={styles.signUp}>Sign Up</div>
                </div>
              </div>
            </div>
            <div className={styles.divmkFooterLinks}>
              <div className={styles.list}>
                <div className={styles.itemLink}>Customer Service</div>
                <div className={styles.itemList}>
                  <div className={styles.itemLink1}>FAQ</div>
                  <div className={styles.itemLink1}>Track My Order</div>
                  <div
                    className={styles.itemLink1}
                  >{`Returns & Exchanges`}</div>
                  <div className={styles.itemLink1}>Shipping Terms</div>
                  <div className={styles.itemLink1}>Payment Policy</div>
                  <div className={styles.itemLink1}>Gift Cards</div>
                  <div className={styles.itemLink1}>Contact Us</div>
                  <div className={styles.itemLink1}>{`Warranty & Repair`}</div>
                  <div className={styles.itemLink1}>Virtual Shopping</div>
                </div>
              </div>
              <div className={styles.list1}>
                <div className={styles.itemLink}>Company</div>
                <div className={styles.itemList1}>
                  <div className={styles.itemLink1}>About Us</div>
                  <div className={styles.itemLink1}>Careers</div>
                  <div className={styles.itemLink1}>Investor Relations</div>
                  <div className={styles.itemLink1}>
                    Supply Chain Disclosure
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.list2}>
              <div className={styles.itemLink}>My Account</div>
              <div className={styles.itemList2}>
                <div className={styles.itemLink1}>Create Account</div>
                <div className={styles.itemLink1}>Accounts</div>
              </div>
            </div>
          </div>
          <div className={styles.sectionList}>
            <div className={styles.itemLink18}>
              <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
            </div>
            <div className={styles.itemLink19}>
              <img className={styles.vectorIcon2} alt="" src="/vector5.svg" />
            </div>
            <div className={styles.itemLink20}>
              <img className={styles.vectorIcon3} alt="" src="/vector6.svg" />
            </div>
            <div className={styles.itemLink21}>
              <img className={styles.vectorIcon4} alt="" src="/vector7.svg" />
            </div>
            <div className={styles.itemLink20}>
              <img className={styles.vectorIcon5} alt="" src="/vector8.svg" />
            </div>
          </div>
          <div className={styles.divrightSection} />
        </div>
        <div className={styles.divlarge12}>
          <div className={styles.section}>
            <div className={styles.div}>©</div>
            <div className={styles.div1}>2023</div>
            <div className={styles.michaelKors}> Michael Kors</div>
            <div className={styles.linkPrivacy}>Privacy Policy</div>
            <div className={styles.linkTerms}>{`Terms & Conditions`}</div>
            <div className={styles.linkCookiesad}>Cookies/Ad Choices</div>
          </div>
        </div>
      </div>
      <div className={styles.enterYourEmail}>Enter Your Email</div>
    </div>
  );
};

export default StoreFinderContainer;
