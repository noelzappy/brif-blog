import BootstrapIcon from "@/components/BootstrapIcon";
import menu from "@/config/menus.json";
import siteConfig from "@/config/site.config.json";
import { ArrowUpRight } from "@/utils/Icons";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const { socialLinks } = siteConfig;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const onSubmit = async (e) => {
    if (!email || !name) return toast.error("Please fill all the fields.");

    toast.loading("Subscribing...", {
      id: "subscribe",
      position: "bottom-right",
    });

    e.preventDefault();
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name }),
    });

    if (res.status === 200) {
      setEmail("");
      setName("");
      toast.success("Thank you for subscribing!", {
        id: "subscribe",
      });
    } else {
      toast.error("Something went wrong! Please try again.", {
        id: "subscribe",
      });
    }
  };

  return (
    <footer className="bg-white">
      <div className="line-bg">
        <div className="newsletter-block border-bottom">
          <div className="container">
            <div className="row gy-5 align-items-center justify-content-center text-center text-md-start">
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-10">
                <div className="pe-0 pe-xl-4">
                  <h2 className="mb-3 lh-sm">
                    Subscribe to our monthly newsletter
                  </h2>
                  <p className="mb-0">
                    Stay up-to-date about latest tech and new world. Unsubscribe
                    at anytime!
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="ps-0 ps-xl-4">
                  <div id="mc_embed_signup">
                    <div>
                      <div id="mc_embed_signup_scroll" className="input-group">
                        <input
                          type="text"
                          className="form-control w-100"
                          placeholder="Your Name"
                          aria-label="Name"
                          autoComplete="new-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <input
                          type="email"
                          className="form-control w-100 required email"
                          placeholder="Your Email"
                          aria-label="Subscription"
                          autoComplete="new-email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className="input-group-append w-100">
                          <button
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="input-group-text w-100 mb-0"
                            aria-label="Subscription Button"
                            onClick={onSubmit}
                          >
                            Subscribe
                            <ArrowUpRight className="ms-auto" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-4 order-2 order-lg-1 text-center text-lg-start">
              <p className="mb-0 copyright-text">
                © {new Date().getFullYear()} BrifHQ. All rights reserved.
              </p>
            </div>
            <div className="col-lg-4 text-center order-1">
              <ul className="list-unstyled">
                {menu.footerMenu.map((menu, key) => (
                  <li key={key} className="d-inline-block mx-3">
                    <Link href={menu.link} className="text-link">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 order-0 order-lg-2">
              <ul className="list-unstyled social-links d-flex align-items-center justify-content-center justify-content-lg-end">
                <li className="me-2 fw-medium">Follow Us:</li>
                {socialLinks.map((data, key) => (
                  <li key={key} className="ms-1">
                    <a
                      className="is-hoverable"
                      href={data.link}
                      title={data.name}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BootstrapIcon icon={data.icon} size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
