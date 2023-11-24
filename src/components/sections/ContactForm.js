import { Formik } from 'formik';

const ContactForm = () => {
  
  const formData = {
    "formspreeURL": "https://formspree.io/f/your_api_key"
  }
  
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Contact Form</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="contact_form">
          <Formik
            initialValues = {{ email: '', name: '', message: '' }}
            validate = { values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit = {( values, { setSubmitting, resetForm } ) => {
                const form = document.getElementById("contactForm");
                const status = document.getElementById("contactFormStatus");
                const data = new FormData();

                data.append('name', values.name);
                data.append('email', values.email);
                data.append('message', values.message);

                fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    console.log(response);
                    if (response.ok) {
                        resetForm();
                        status.innerHTML = "Thanks for your submission!";
                        status.style.display = 'block';
                        form.style.display = 'none';

                        setTimeout(function(){
                          status.style.display = 'none';
                          form.style.display = 'block';
                        }, 4000);
                    } else {
                        response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                            } else {
                                status.innerHTML = "Oops! There was a problem submitting your form"
                            }
                        })
                    }
                }).catch(error => {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                });

                setSubmitting(false);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit} id="contactForm" action={formData.formspreeURL}>
              <div className="row">
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input 
                        type="text" 
                        placeholder="Full Name"
                        name="name" 
                        required="required" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name} 
                    />
                  </div>
                </div>
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input 
                        type="email" 
                        placeholder="Email Address"
                        name="email"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} 
                    />
                  </div>
                </div>
                <div className="col col-d-12 col-t-12 col-m-12">
                  <div className="group-val">
                    <textarea 
                        placeholder="Your Message"
                        name="message" 
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message} 
                    />
                  </div>
                </div>
              </div>
              <div className="align-left">
                <button type="submit" className="button">
                  <span className="text">Send Message</span>
                  <span className="arrow" />
                </button>
              </div>
            </form>
            )}
            </Formik>

            <div className="alert-success" id="contactFormStatus" />
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactForm;
