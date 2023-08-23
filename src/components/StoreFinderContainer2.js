import styles from "./StoreFinderContainer2.module.css";
const StoreFinderContainer2 = () => {
  return (
    <div className={styles.divfooterWrapper}>
      <div className={styles.divfooterContent}>
        <div className={styles.footer}>
          <div className={styles.divleftSection}>
            <div className={styles.link}>
              <div className={styles.icon}>
                <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
              </div>
              <div className={styles.findAStore}>Find a Store</div>
            </div>
            <div className={styles.divmkNewsletterSubs}>
              <div className={styles.plarge6}>
                <div className={styles.signUpForContainer}>
                  <p className={styles.signUpFor}>Sign Up for updates </p>
                  <p className={styles.signUpFor}>from Michael Kors and</p>
                  <p className={styles.signUpFor}>receive 10% off your first order.</p>
                </div>
              </div>
              <div className={styles.form}>
                <div className={styles.labelInput}>
                  <div className={styles.divplaceholder}>
                    <div className={styles.findAStore}>Enter Your Email</div>
                  </div>
                </div>
                <div className={styles.buttonSignUp}>
                  <div className={styles.signUp}>Sign Up</div>
                </div>
              </div>
            </div>
            <div className={styles.sectionList}>
              <div className={styles.itemLink}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector16.svg"
                />
              </div>
              <div className={styles.itemLink1}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector17.svg"
                />
              </div>
              <div className={styles.itemLink2}>
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector18.svg"
                />
              </div>
              <div className={styles.itemLink3}>
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/vector19.svg"
                />
              </div>
              <div className={styles.itemLink2}>
                <img
                  className={styles.vectorIcon5}
                  alt=""
                  src="/vector20.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.divrightSection} />
          <div className={styles.divmkFooterLinks}>
            <div className={styles.list}>
              <div className={styles.signUp}>Customer Service</div>
              <div className={styles.itemList}>
                <div className={styles.findAStore}>FAQ</div>
                <div className={styles.findAStore}>Track My Order</div>
                <div className={styles.findAStore}>{`Returns & Exchanges`}</div>
                <div className={styles.findAStore}>Shipping Terms</div>
                <div className={styles.findAStore}>Payment Policy</div>
                <div className={styles.findAStore}>Gift Cards</div>
                <div className={styles.findAStore}>Contact Us</div>
                <div className={styles.findAStore}>{`Warranty & Repair`}</div>
                <div className={styles.findAStore}>Virtual Shopping</div>
              </div>
            </div>
            <div className={styles.list1}>
              <div className={styles.signUp}>My Account</div>
              <div className={styles.itemList1}>
                <div className={styles.findAStore}>Create Account</div>
                <div className={styles.findAStore}>Accounts</div>
              </div>
            </div>
            <div className={styles.list2}>
              <div className={styles.signUp}>Company</div>
              <div className={styles.itemList2}>
                <div className={styles.findAStore}>About Us</div>
                <div className={styles.findAStore}>Careers</div>
                <div className={styles.findAStore}>Investor Relations</div>
                <div className={styles.findAStore}>Supply Chain Disclosure</div>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default StoreFinderContainer2;
