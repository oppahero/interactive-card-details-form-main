
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {


  return (
    <main className={styles.main} role='main'>

      <div className={styles.containerImages}>

        <div className={styles.backgroundImg}>

          <div className={styles.containerPadding}>

            <div className={styles.containerCards}>

              <Image
                className={styles.containerCards__cardBack}
                src="/images/bg-card-back.png"
                alt="Back of the card"
                width={286}
                height={158}
                priority
              />

              <div className={styles.containerCards__cardFront}>
                {/* <div className={styles.containerCards__cardFront__content}> */}
                  <div className={styles.containerCards__cardFront__circles}>
                    <Image
                        src="/images/card-logo.svg"
                        alt="Card logo"
                        width={58}
                        height={32}
                        priority
                    />
                  </div>
                  <p className={styles.containerCards__cardFront__numbers}>
                    9591648963891011
                  </p>
                  <div className={styles.containerCards__cardFront__data}>
                    <p id='name'>FELICIA LEIRE</p>
                    <p id='date'>09/26</p>
                  </div>
                {/* </div> */}
              </div>
              
            </div>
           
          </div>

        </div>
        
      </div>

      <div className={styles.containerForm}>

        <form className={styles.form}>

          <div className={styles.formInput}>
            <label htmlFor="name">Cardholder name</label>
            <input type="text" name="name" id="name" placeholder='e.g. Jane Appleseed' />
            {/* <span className='errorMessage'>Can´t be blank</span> */}
          </div>
          <div className={styles.formInput}>
            <label htmlFor="card-number">Card number</label>
            <input type="text" name="card-number" id="card-number" placeholder='e.g. 1234 5678 9123 0000' />
            {/* <span className='errorMessage'>Can´t be blank</span>
            <span className='errorMessage'>Wront format, numbers only</span> */}
          </div>
          <div className={styles.formInput}>
            <label htmlFor="card-number">Exp. Date (MM/YY)  CVC</label>
            <div className={`${styles.inputGroup}  ${styles.inputGroup__gap12}`}>
              <div className={`row50 ${styles.inputGroup}  ${styles.inputGroup__gap9}`}>
                <div className={styles.formInput}>
                  <input type="text" name="month" id="month" placeholder='MM' />
                  {/* <span className='errorMessage'>Can´t be blank</span> */}
                </div>
                <div className={styles.formInput}>
                  <input type="text" name="year" id="year" placeholder='YY' />
                  {/* <span className='errorMessage'>Can´t be blank</span> */}
                </div>
              </div>
              <div className="row50">
                <div className={styles.formInput}>
                  <input type="text" name="cvc" id="cvc" placeholder='e.g. 123' />
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
