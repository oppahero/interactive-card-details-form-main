"use client";

import styles from "./page.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormSchema = Yup.object({
  cardName: Yup.string()
    .required("Can´t be blank"),
  cardNumber: Yup.string()
    .matches(/^[0-9]+$/, "Wront format, numbers only")
    .required("Can´t be blank")
    .min(16, "Min. 16 characters")
    .max(16, "Max. 16 characters"),
  month: Yup.string()
    .required("Can´t be blank")
    .matches(/^[0-9]+$/, "Numbers only"),
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

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
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
    },
  });

  return (
    <main className={styles.main} role="main">
      <div className={styles.containerImages}>
        <div className={styles.backgroundImg}>
          <div className={styles.containerPadding}>
            <div className={styles.containerCards}>
              <div className={styles.containerCards__cardBack}>
                <span className={styles.containerCards__cardBack__cvc}>
                  000
                </span>
              </div>
              <div className={styles.containerCards__cardFront}>
                <div
                  className={styles.containerCards__cardFront__circles}
                ></div>
                <p className={styles.containerCards__cardFront__numbers}>
                  0000 0000 0000 0000
                </p>
                <div className={styles.containerCards__cardFront__data}>
                  <p id="name">Jane Appleseed</p>
                  <p id="date">09/26</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerForm}>
        <form className={styles.form} noValidate onSubmit={handleSubmit}>
          <div className={styles.formInput}>
            <label htmlFor="cardName">Cardholder name</label>
            <input
              type="text"
              id="cardName"
              placeholder="e.g. Jane Appleseed"
              autoComplete="off"
              {...getFieldProps("cardName")}
              className={`${touched.cardName && errors.cardName && "error_input"}`}
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
              placeholder="e.g. 1234 5678 9123 0000"
              {...getFieldProps("cardNumber")}
              className={`${touched.cardNumber && errors.cardNumber && "error_input"}`}
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
                    {...getFieldProps("month")}
                    className={`${touched.month && errors.month && "error_input"}`}
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
                    {...getFieldProps("year")}
                    className={`${touched.year && errors.year && "error_input"}`}
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
                    {...getFieldProps("cvc")}
                    className={`${touched.cvc && errors.cvc && "error_input"}`}
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
      </div>
    </main>
  );
}
