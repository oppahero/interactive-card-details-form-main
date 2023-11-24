"use client";

import styles from "./page.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import Image from 'next/image'
import * as Yup from "yup";

const FormSchema = Yup.object({
  cardName: Yup.string()
    .required("Can´t be blank"),
  cardNumber: Yup.string()
    .matches(/^[0-9\s]*$/, "Wront format, numbers only")
    .required("Can´t be blank")
    .min(19, "Min. 16 characters")
    .max(19, "Max. 16 characters"),
  month: Yup.string()
    .required("Can´t be blank")
    .matches(/^[0-9]+$/, "Numbers only")
    .test(
      'month-range', 'Between 1-12', (value) => {
        return parseInt(value) >= 1 && parseInt(value) <= 12
      }),
  year: Yup.string()
    .required("Can´t be blank")
    .matches(/^[0-9]+$/, "Numbers only")
    .min(2, "Min. 2 characters"),
  cvc: Yup.string()
    .required("Can´t be blank")
    .matches(/^[0-9]+$/, "Numbers only")
    .min(3, "Min. 3 characters")
});

export default function Home() {

  const [cardValues, setCardValues] = useState({
    cardName: "ane Appleseed",
    cardNumber: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  });

  const [submit, setSubmit] = useState(false)

  const { handleSubmit, errors, touched, getFieldProps, values } = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log(values);
      setSubmit(true)
    },
  });

  const formatCardNumber = (cardNumber: string) => {
    let inputValue = cardNumber.replace(/\s/g, "");
    let format: any;

    if (inputValue !== "")
      format = inputValue.match(/.{1,4}/g)?.join(" ")

    return format
  }

  function handleChange(evt: React.SyntheticEvent) {
    let { name, value } = evt.target as HTMLInputElement;

    if (name === 'cardNumber') {
      value = formatCardNumber(value)
      values.cardNumber = value
    }

    const newValues = {
      ...cardValues,
      [name]: value,
    };
    setCardValues(newValues);
  }

  return (
    <main className={styles.main} role="main">
      <div className={styles.containerImages}>
        <div className={styles.backgroundImg}>
          <div className={styles.containerPadding}>
            <div className={styles.containerCards}>
              <div className={styles.containerCards__cardBack}>
                <span className={styles.containerCards__cardBack__cvc}>
                  {cardValues.cvc}
                </span>
              </div>
              <div className={styles.containerCards__cardFront}>
                <div
                  className={styles.containerCards__cardFront__circles}
                ></div>
                <p className={styles.containerCards__cardFront__numbers}>
                  {cardValues.cardNumber}
                </p>
                <div className={styles.containerCards__cardFront__data}>
                  <p id="name">{cardValues.cardName}</p>
                  <p id="date">{cardValues.month}/{cardValues.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerForm}>
        {submit
          ? <div className={styles.containerMessage}>
            <Image
              className={styles.iconComplete}
              src="/images/icon-complete.svg"
              alt="Icon complete"
              width={82}
              height={82}
            />
            <h2>THANK YOU!</h2>
            <p>We&apos;ve added your card details!</p>
            <button>Continue</button>
          </div>
          : <form className={styles.form} noValidate onSubmit={handleSubmit}>
            <div className={styles.formInput}>
              <label htmlFor="cardName">Cardholder name</label>
              <input
                type="text"
                id="cardName"
                placeholder="e.g. Jane Appleseed"
                autoComplete="off"
                onKeyUp={handleChange}
                {...getFieldProps("cardName")}
                className={`${touched.cardName && errors.cardName}`}
              />
              {touched.cardName && errors.cardName && (
                <span className="errorMessage">{errors.cardName}</span>
              )}
            </div>
            <div className={styles.formInput}>
              <label htmlFor="cardNumber">Card number</label>
              <input
                type="text"
                id="cardNumber"
                inputMode="numeric"
                maxLength={19}
                placeholder="e.g. 1234 5678 9123 0000"
                onKeyUp={handleChange}
                {...getFieldProps("cardNumber")}
                className={`${touched.cardNumber && errors.cardNumber}`}
              />
              {touched.cardNumber && errors.cardNumber && (
                <span className="errorMessage">{errors.cardNumber}</span>
              )}
            </div>
            <div className={styles.formInput}>
              <label htmlFor="month">Exp. Date (MM/YY) CVC</label>
              <div
                className={`${styles.inputGroup}  ${styles.inputGroup__gap12}`}
              >
                <div className={`row50 ${styles.inputGroup}  ${styles.inputGroup__gap9}`} >
                  <div className={styles.formInput}>
                    <input
                      type="text"
                      maxLength={2}
                      id="month"
                      placeholder="MM"
                      onKeyUp={handleChange}
                      {...getFieldProps("month")}
                      className={`${touched.month && errors.month}`}
                    />
                    {touched.month && errors.month && (
                      <span className="errorMessage">{errors.month}</span>
                    )}
                  </div>
                  <div className={styles.formInput}>
                    <input
                      type="text"
                      maxLength={2}
                      id="year"
                      placeholder="YY"
                      onKeyUp={handleChange}
                      {...getFieldProps("year")}
                      className={`${touched.year && errors.year}`}
                    />
                    {touched.year && errors.year && (
                      <span className="errorMessage">{errors.year}</span>
                    )}
                  </div>
                </div>
                <div className="row50">
                  <div className={styles.formInput}>
                    <input
                      type="text"
                      maxLength={3}
                      id="cvc"
                      placeholder="e.g. 123"
                      onKeyUp={handleChange}
                      {...getFieldProps("cvc")}
                      className={`${touched.cvc && errors.cvc}`}
                    />
                    {touched.cvc && errors.cvc && (
                      <span className="errorMessage">{errors.cvc}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button type="submit">Confirm</button>
          </form>
        }
      </div>
    </main>
  );
}
