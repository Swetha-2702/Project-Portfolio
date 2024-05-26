
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Fade, Zoom } from "react-awesome-reveal";
import "./Contact.css";

const Validate = Yup.object({
  username: Yup.string()
    .max(15, "should be less than 15 characters")
    .min(3, "should be more than 3 characters")
    .required("Required"),
  useremail: Yup.string().email("Invalid emai provided").required("Required"),
  message: Yup.string()
    .max(100, "should be less than 100 characters")
    .min(10, "should be more than 10 characters")
    .required("Required"),
});

const Contact = () => {
  
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-container">
          <Fade duration={500} direction="up">
            <Zoom>
              <Fade direction="500" cascade>
                <div className="contact-title">
                  <h3>Contact Us</h3>
                  <p>Get in Touch </p>
                </div>
                <div className="contact-form">
                  <Formik
                    initialValues={{
                      user_name: "",
                      user_email: "",
                      message: "",
                    }}
                    validationSchema={Validate}
                    onSubmit={(values, { resetForm }) => {
                      resetForm({ values: "" });
                    }}
                  >
                    <Form className="form">
                      <Field
                        name="username"
                        placeholder="Your name"
                        type="text"
                        className="form-input"
                      />
                      <br />
                      <br />
                      <Field
                        name="useremail"
                        placeholder="Your email"
                        type="email"
                        className="form-input"
                      />
                      <br />
                      <br />
                      <Field
                        name="message"
                        placeholder="Enter your message here..."
                        as="textarea"
                        className="form-input"
                      />
                      <br />
                      <br />
                      <div className="send-btn">
                        <button type="submit">Send</button>
                      </div>
                    </Form>
                  </Formik>
                </div>
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                />
              </Fade>
            </Zoom>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Contact;
