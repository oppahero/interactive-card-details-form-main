
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {


  return (
    <main className={styles.main} role='main'>

      <div className={styles.containerImages}>

        <div className={styles.backgroundImg}>

          <div className={styles.containerPadding}>

            <div className={styles.containerCards}>

              <div className={styles.containerCards__cardBack}>
                <span className={styles.containerCards__cardBack__cvc}>000</span>
              </div>

              <div className={styles.containerCards__cardFront}>
                <div className={styles.containerCards__cardFront__circles}></div>
                <p className={styles.containerCards__cardFront__numbers}>
                  0000   0000   0000   0000
                </p>
                <div className={styles.containerCards__cardFront__data}>
                  <p id='name'>Jane Appleseed</p>
                  <p id='date'>09/26</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className={styles.containerForm}>

        <form className={styles.form}>

          <div className={styles.formInput}>
            <label htmlFor="cardName">Cardholder name</label>
            <input type="text" name="cardName" id="cardName" placeholder='e.g. Jane Appleseed'  autoComplete='off' />
            {/* <span className='errorMessage'>Can´t be blank</span> */}
          </div>
          <div className={styles.formInput}>
            <label htmlFor="cardNumber">Card number</label>
            <input type="text" name="cardNumber" id="cardNumber" placeholder='e.g. 1234 5678 9123 0000' />
            {/* <span className='errorMessage'>Can´t be blank</span>
            <span className='errorMessage'>Wront format, numbers only</span> */}
          </div>
          <div className={styles.formInput}>
            <label  htmlFor="month">Exp. Date (MM/YY)  CVC</label>
            <div className={`${styles.inputGroup}  ${styles.inputGroup__gap12}`}>
              <div className={`row50 ${styles.inputGroup}  ${styles.inputGroup__gap9}`}>
                <div className={styles.formInput}>
                  <input type="text" maxLength={2} name="month" id="month" placeholder='MM' />
                  {/* <span className='errorMessage'>Can´t be blank</span> */}
                </div>
                <div className={styles.formInput}>
                  <input type="text" maxLength={2} name="year" id="year" placeholder='YY' />
                  {/* <span className='errorMessage'>Can´t be blank</span> */}
                </div>
              </div>
              <div className="row50">
                <div className={styles.formInput}>
                  <input type="text" maxLength={3} name="cvc" id="cvc" placeholder='e.g. 123' />
                  {/* <span className='errorMessage'>Can´t be blank</span> */}
                </div>
              </div>
            </div>
          </div>
          <button>Confirm</button>
        </form>
      </div>
    </main>
  )
}
