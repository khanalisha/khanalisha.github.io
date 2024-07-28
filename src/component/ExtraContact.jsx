// import React from "react";
// import styled from "styled-components";
// import { Reveal } from "./common/Reveal";
// import { Container } from "./common/Container";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faGithub,
//   faLinkedin,
//   faLinkedinIn,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

// export const Contact = () => {
//   return (
//     <SECTION id="contact">
//       <Container>
//         <Reveal
//           hidden={{
//             opacity: 0,
//             y: 150,
//           }}
//           visible={{ opacity: 1, y: 0 }}
//         >
//           <h2>Have an awesome project ideas? let's Discuss</h2>
//         </Reveal>
//         <Reveal
//           hidden={{
//             opacity: 0,
//             y: -150,
//           }}
//           visible={{ opacity: 1, y: 0 }}
//         >
//           <div className="email-box">
//             <input type="email" placeholder="name@email.com" />
//             <a
//               href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=8282alishakhan@gmail.com"
//               id="contact-email"
//               target="_blank"
//               className="resume"
//             >
//               <FontAwesomeIcon icon={faEnvelope} className="icon-email" />
//             </a>
//           </div>
//         </Reveal>

//         <hr />

//         <div className="all-links">
//           <div className="div-1">
//             <Reveal
//               hidden={{
//                 opacity: 0,
//                 y: -150,
//               }}
//               visible={{ opacity: 1, y: 0 }}
//             >
//               <div className="git-div social">
//                 <a
//                   href="https://github.com/khanalisha"
//                   id="contact-github"
//                   target="_blank"
//                 >
//                   <FontAwesomeIcon icon={faGithub} className="Git" />
//                 </a>
//               </div>
//             </Reveal>
//             <Reveal
//               hidden={{
//                 opacity: 0,
//                 y: -150,
//               }}
//               visible={{ opacity: 1, y: 0 }}
//             >
//               <div className="linkdin-div social">
//                 <a
//                   href="https://www.linkedin.com/in/alisha-khan-9a561a257"
//                   id="contact-linkedin"
//                   target="_blank"
//                 >
//                   <FontAwesomeIcon icon={faLinkedinIn} className="linkdin" />
//                 </a>
//               </div>
//             </Reveal>

//             <Reveal
//               hidden={{
//                 opacity: 0,
//                 y: -150,
//               }}
//               visible={{ opacity: 1, y: 0 }}
//             >
//               <div className="phone-div social">
//                 <div id="contact-phone">
//                   {/* <FontAwesomeIcon icon={faPhoneVolume} className="phone" /> */}
//                   <FontAwesomeIcon icon={faTwitter} className="phone" />
//                 </div>
//               </div>
//             </Reveal>

//             <Reveal
//               hidden={{
//                 opacity: 0,
//                 y: -150,
//               }}
//               visible={{ opacity: 1, y: 0 }}
//             >
//               <div className="facebook-div social">
//                 <a href="" id="contact-facebook" target="_blank">
//                   <FontAwesomeIcon icon={faFacebookF} className="facebook" />
//                 </a>
//               </div>
//             </Reveal>
//           </div>

//           {/* !*****! */}
//           <Reveal
//             hidden={{
//               opacity: 0,
//               y: -150,
//             }}
//             visible={{ opacity: 1, y: 0 }}
//           >
//             <div id="contact-phone" style={{ display: "none" }}>
//               6201984754
//             </div>
//           </Reveal>
//           <a
//             href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=8282alishakhan@gmail.com"
//             id="contact-email"
//             target="_blank"
//             className="resume"
//             style={{ display: "none" }}
//           >
//             8282alishakhan@gmail.com
//           </a>

//           {/* !*****! */}

//           <div className="div-2">
//             <p className="copy-right">
//               © 2023 Alisha khan
//               <a href="#home" style={{ marginLeft: "10px" }}>
//                 Coding Stella
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* <hr className="small" /> */}
//       </Container>
//     </SECTION>
//   );
// };

// const SECTION = styled.section`
//   min-height: 80vh;
//   padding-block: 6rem 0.5rem;
//   display: flex;
//   align-items: flex-end;
//   > div {
//   }
//   .all-links {
//     display: flex;
//     justify-content: space-between;
//     padding: 1rem;
//   }
//   .div-1 {
//     display: flex;
//     gap: 2rem;
//   }
//   .div-2 {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 2rem;
//     cursor: pointer;
//   }

//   .social {
//     border: 1px solid gray;
//     border-radius: 50% 50% 50% 50%;
//     background-color: var(--gray);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 45px;
//     height: 45px;
//     cursor: pointer;
//   }
//   .Git {
//     width: 25px;
//     height: 25px;
//     color: var(--background);
//   }
//   .facebook {
//     color: var(--background);
//     width: 25px;
//     height: 25px;
//   }
//   .linkdin {
//     width: 25px;
//     height: 25px;
//     color: var(--background);
//   }

//   .phone {
//     width: 25px;
//     height: 25px;
//     background-color: var(--gray);
//     color: var(--background);
//   }

//   h2 {
//     text-align: center;
//     max-width: 500px;
//     margin-inline: auto;
//     margin-bottom: 2rem;
//     padding-bottom: 2rem;
//   }

//   .email-box {
//     border: 3px solid gray;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: min(25rem, 100%);
//     margin-inline: auto;

//     border-radius: 50px;
//     padding: 0.25rem 0.25rem 0.25rem 0.75rem;
//     margin-bottom: 8rem;

//     input {
//       color: inherit;
//       padding: 0.25rem;
//       border: none;
//       font-size: 1.25rem;
//       &:active,
//       &:focus {
//         border: none;
//         outline: none;
//       }
//     }
//   }

//   .icon-email {
//     width: 50px;
//     height: 30px;
//   }
//   #contact-email {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .small {
//     width: 30%;
//     margin-inline: auto;
//   }

//   @media screen and (max-width: 950px) {
//     min-height: 80vh;
//     /* border: 2px solid green; */
//     padding-block: 6rem 0.5rem;
//     display: flex;
//     align-items: flex-end;
//     > div {
//     }

//     .all-links {
//       display: flex;
//       justify-content: space-between;
//       padding: 1rem;
//     }
//     .div-1 {
//       display: flex;
//       gap: 2rem;
//     }
//     .div-2 {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       gap: 2rem;
//       cursor: pointer;
//     }

//     .social {
//       border: 1px solid gray;
//       border-radius: 50% 50% 50% 50%;
//       background-color: var(--gray);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       width: 45px;
//       height: 45px;
//       cursor: pointer;
//     }
//     .Git {
//       width: 25px;
//       height: 25px;
//       color: var(--background);
//     }
//     .facebook {
//       color: var(--background);
//       width: 25px;
//       height: 25px;
//     }
//     .linkdin {
//       width: 25px;
//       height: 25px;
//       color: var(--background);
//     }

//     .phone {
//       width: 25px;
//       height: 25px;
//       background-color: var(--gray);
//       color: var(--background);
//     }

//     h2 {
//       text-align: center;
//       max-width: 500px;
//       margin-inline: auto;
//       margin-bottom: 2rem;
//       padding-bottom: 2rem;
//     }

//     .email-box {
//       border: 3px solid gray;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       width: min(25rem, 100%);
//       margin-inline: auto;
//       /* height: 45px; */
//       border-radius: 50px;
//       padding: 0.25rem 0.25rem 0.25rem 0.75rem;
//       margin-bottom: 8rem;
//       /* margin-left: 30rem;
//     margin-top: 5rem; */
//       input {
//         /* margin-left: 0.5rem; */
//         color: inherit;
//         padding: 0.25rem;
//         border: none;
//         font-size: 1.25rem;
//         &:active,
//         &:focus {
//           border: none;
//           outline: none;
//         }
//       }
//     }

//     .icon-email {
//       width: 50px;
//       height: 30px;
//     }
//     #contact-email {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }

//     .small {
//       width: 30%;
//       margin-inline: auto;
//     }
//   }

//   /* Medium Screen */
//   @media screen and (max-width: 750px) {
//     min-height: 50vh;

//     .all-links {
//       display: flex;
//       gap: 4rem;
//       padding: 1rem;
//     }
//     .email-box {
//       border: 3px solid gray;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       width: min(25rem, 100%);
//       margin-inline: auto;
//       /* height: 45px; */
//       border-radius: 50px;
//       padding: 0.25rem 0.25rem 0.25rem 0.75rem;
//       margin-bottom: 8rem;
//       /* margin-left: 30rem;
//     margin-top: 5rem; */
//       input {
//         /* margin-left: 0.5rem; */
//         color: inherit;
//         padding: 0.25rem;
//         border: none;
//         font-size: 1.25rem;
//         &:active,
//         &:focus {
//           border: none;
//           outline: none;
//         }
//       }
//     }
//     .icon-email {
//       width: 50px;
//       height: 30px;
//     }
//     #contact-email {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//   }
//   // for Mobile screen
//   @media screen and (max-width: 500px) {
//     min-height: 50vh;
//     .div-1 {
//       display: flex;
//       gap: 3rem;
//     }
//     .div-2 {
//       display: none;
//     }
//     .email-box {
//       border: 3px solid gray;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       width: min(25rem, 100%);
//       margin-inline: auto;
//       /* height: 45px; */
//       border-radius: 50px;
//       padding: 0.25rem 0.25rem 0.25rem 0.75rem;
//       margin-bottom: 8rem;
//       /* margin-left: 30rem;
//     margin-top: 5rem; */
//       input {
//         /* margin-left: 0.5rem; */
//         color: inherit;
//         padding: 0.25rem;
//         border: none;
//         font-size: 1.25rem;
//         &:active,
//         &:focus {
//           border: none;
//           outline: none;
//         }
//       }
//     }
//     .icon-email {
//       width: 50px;
//       height: 30px;
//     }
//     #contact-email {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//   }

//   // screen size 412

//   @media screen and (max-width: 412px) {
//     min-height: 50vh;
//     .div-1 {
//       display: flex;
//       gap: 3rem;
//     }
//     .div-2 {
//       display: none;
//     }
//     .email-box {
//       border: 3px solid gray;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       width: min(25rem, 100%);
//       margin-inline: auto;
//       border-radius: 50px;
//       padding: 0.25rem 0.25rem 0.25rem 0.75rem;
//       margin-bottom: 8rem;
//     }
//     .icon-email {
//       width: 50px;
//       height: 30px;
//     }
//     .email-box #contact-email {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       margin-left: auto; /* Add this line to center it horizontally */
//       margin-right: auto; /* Add this line to center it horizontally */
//     }
//     .email-box input {
//       color: inherit;
//       padding: 0.25rem;
//       border: none;
//       width: 220px;
//       font-size: 1.25rem;
//       &:active,
//       &:focus {
//         border: none;
//         outline: none;
//       }
//     }
//   }

//   @media screen and (max-width: 382px) {
//     .email-box input {
//       color: inherit;
//       padding: 0.25rem;
//       border: none;
//       width: 225px;
//       font-size: 1.25rem;
//       &:active,
//       &:focus {
//         border: none;
//         outline: none;
//       }
//     }
//   }

//   @media screen and (max-width: 320px) {
//     .email-box input {
//       color: inherit;
//       padding: 0.25rem;
//       border: none;
//       width: 170px;
//       font-size: 1.25rem;
//       &:active,
//       &:focus {
//         border: none;
//         outline: none;
//       }
//     }

//     .div-1 {
//       display: flex;
//       gap: 1.5rem;
//     }
//   }
// `;
