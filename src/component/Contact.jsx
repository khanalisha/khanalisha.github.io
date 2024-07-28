import styled from "styled-components";
import { Container } from "./common/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretRight, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <Container>
      <SECTION id="contact">
        <div className="contact-body">
          <h1>
            Contact <span>Me</span>
          </h1>
          <p className="p-1">Lest's Work Together</p>
          <div className="contact-A">
            <p>
              <span>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ width: "25px", height: "25px" }}
                />
              </span>
              8282khanalisha@gmail.com
            </p>
          </div>
          <div className="all-links">
            <div className="div-1">
              <div className="git-div social">
                <a
                  href="https://github.com/khanalisha"
                  id="contact-github"
                  target="_blank"
                >
                  {" "}
                  <FontAwesomeIcon icon={faGithub} className="Git" />
                </a>{" "}
              </div>
              {/*  */}
              <div className="phone-div social">
                <div id="contact-phone">
                  {/* <FontAwesomeIcon icon={faPhoneVolume} className="phone" /> */}
                  <FontAwesomeIcon icon={faTwitter} className="phone" />
                </div>
              </div>
              {/*  */}
              <div className="facebook-div social">
                <a href="" id="contact-facebook" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} className="facebook" />
                </a>{" "}
              </div>

              {/*  */}
              <div className="phone-div social">
                <div id="contact-phone">
                  {" "}
                  <FontAwesomeIcon icon={faPhoneVolume} className="phone" />
                </div>
              </div>
              {/*  */}
              <div className="linkdin-div social">
                <a
                  href="https://www.linkedin.com/in/alisha-khan-9a561a257"
                  id="contact-linkedin"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="linkdin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SECTION>
    </Container>
  );
};

const SECTION = styled.div`
  height: 50vh;
  .contact-body {
    padding-top: 7%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  span {
    color: var(--primary);
  }

  .p-1 {
    margin-right: 4.6rem;
    padding-bottom: 1rem;
    font-weight: 600;
    font-size: medium;
    line-height: 1px;
  }

  .contact-A p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social {
    border: 3px solid var(--primary);
    border-radius: 50% 50% 50% 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    cursor: pointer;
  }

  .Git {
    width: 25px;
    height: 25px;
    color: var(--primary);
  }

  .phone {
    width: 20px;
    height: 20px;

    color: var(--primary);
  }

  .all-links {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  .div-1 {
    display: flex;
    gap: 1rem;
  }

  .linkdin {
    width: 25px;
    height: 25px;
    color: var(--primary);
  }
  .facebook {
    color: var(--primary);
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 642px) {
    .contact-body {
      padding-top: 12%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .p-1 {
      margin-right: 2rem;
      padding-bottom: 1rem;
      font-weight: 600;
      font-size: medium;
      line-height: 1px;
    }

    .social {
      border: 3px solid var(--primary);
      border-radius: 50% 50% 50% 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
    /*  */
    .Git {
      width: 18px;
      height: 18px;
      color: var(--primary);
    }

    .phone {
      width: 15px;
      height: 15px;

      color: var(--primary);
    }

    .all-links {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
    }
    .div-1 {
      display: flex;
      gap: 1rem;
    }

    .linkdin {
      width: 15px;
      height: 15px;
      color: var(--primary);
    }
    .facebook {
      color: var(--primary);
      width: 15px;
      height: 15px;
    }
  }

  @media screen and (max-width: 320px) {
    .contact-body {
      padding-top: 12%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .p-1 {
      margin-right: 2rem;
      padding-bottom: 1rem;
      font-weight: 600;
      font-size: medium;
      line-height: 1px;
    }

    .social {
      border: 3px solid var(--primary);
      border-radius: 50% 50% 50% 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      cursor: pointer;
    }

    .Git {
      width: 18px;
      height: 18px;
      color: var(--primary);
    }

    .phone {
      width: 15px;
      height: 15px;

      color: var(--primary);
    }

    .all-links {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
    }
    .div-1 {
      display: flex;
      gap: 1rem;
    }

    .linkdin {
      width: 15px;
      height: 15px;
      color: var(--primary);
    }
    .facebook {
      color: var(--primary);
      width: 15px;
      height: 15px;
    }
  }
`;
