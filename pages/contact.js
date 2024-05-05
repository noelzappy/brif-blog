import Layout from "@/components/Layout";
import Markdown from "@/components/ReactMarkdown";
import { Email, Loader, Phone, Send } from "@/utils/Icons";
import { useState } from "react";

const Contact = ({}) => {
  const title = "Contact Us";
  const description = "Contact Us";

  // Handler Form Submit
  const [submitted, setSubmitted] = useState("");
  const [loading, setLoading] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("/submit-form", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        _subject: "New Contact Form Submission",
        // email: email_address.value,
        // name: full_name.value,
        // message: message.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setSubmitted("success");
        e.target.reset();
      })
      .catch((error) => {
        setLoading(false);
        setSubmitted("error");
      });
  };

  return (
    <Layout metaTitle={title} description={description}>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="section-title">
                <h1 className="h3 mb-0 title">Contact us</h1>
              </div>
              <div className="row gy-5 gx-lg-5">
                <div className="col-lg-6 order-1 order-lg-0">
                  <form
                    className="row gy-4"
                    method="POST"
                    onSubmit={formHandler}
                  >
                    <div className="col-md-12">
                      <input
                        type="hidden"
                        name="_subject"
                        value="New Contact Form Submission"
                      />
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        id="email_address"
                        name="email_address"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name here"
                        id="full_name"
                        name="full_name"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        placeholder="Ask question or just say Hi"
                        rows="4"
                        id="message"
                        name="message"
                        required
                      ></textarea>
                    </div>
                    {submitted == "success" && (
                      <div className="col-12">
                        <p className="mb-0 form-success">
                          <Markdown
                            content={
                              "Thank you for contacting us. We'll get back to you soon."
                            }
                            inline={true}
                          />
                        </p>
                      </div>
                    )}
                    {submitted == "error" && (
                      <div className="col-12">
                        <p className="mb-0 form-error">
                          <Markdown
                            content={
                              "An error occurred while submitting the form. Please try again later."
                            }
                            inline={true}
                          />
                        </p>
                      </div>
                    )}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-light bg-white"
                        aria-label="Send Message"
                      >
                        {!loading ? (
                          <>
                            Send <Send className="ms-2" />
                          </>
                        ) : (
                          <>
                            Sending <Loader className="ms-2" size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6 order-0 order-lg-1">
                  <div className="ps-0 ps-lg-4">
                    <div className="mb-4 mb-lg-5">
                      <p className="h4 mb-3">{"We'd love to hear from you."}</p>
                      <Markdown content="We'll answer every question you might have. Look forward to hearing from you" />
                    </div>
                    <p className="mb-3">
                      {/* prettier-ignore */}
                      <Email className="d-inline-block me-3 text-dark" />
                      <a className="text-link" href={`mailto:info@thebrif.com`}>
                        info@thebrif.com
                      </a>
                    </p>
                    <p className="mb-0">
                      <Phone className="d-inline-block me-3 text-dark" />
                      <a
                        className="text-link active"
                        href={`tel:+233200450877`}
                      >
                        +233 20 045 0877
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

// Export Props
export const getStaticProps = () => {
  return {
    props: {},
  };
};
