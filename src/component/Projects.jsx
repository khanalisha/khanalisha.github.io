import React from "react";
import styled from "styled-components";

export const Projects = () => {
  return (
    <SECTION id="projects">
      <div className="header">
        <h2>Some of my work</h2>
      </div>
      <div className="main-project-card">
        <div className="project-card">
          <img src="" alt="" />
          <h4 className="project-title">SwiftPay (online finance app)</h4>
          <p className="project-description">
            Swiftpay is a dynamic and user-friendly finance website that
            revolutionizes the way you manage your financial transactions. With
            Swiftpay, you can seamlessly handle subscriptions, send and receive
            money from your contacts, and witness real-time transaction updates
            right on your user interface.
          </p>

          <a
            href="https://github.com/AyushmaanRajput/warlike-current-5989"
            target="_blank"
            className="project-github-link"
          >
            GitHub
          </a>
          <a
            href="https://warlike-current-5989-gamma.vercel.app/"
            target="_blank"
            class="project-deployed-link"
          >
            Live website
          </a>
        </div>

        <div className="project-card">
          <img src="" alt="" />
          <h4 className="project-title">SwiftPay (online finance app)</h4>
          <p className="project-description">
            Swiftpay is a dynamic and user-friendly finance website that
            revolutionizes the way you manage your financial transactions. With
            Swiftpay, you can seamlessly handle subscriptions, send and receive
            money from your contacts, and witness real-time transaction updates
            right on your user interface.
          </p>

          <a
            href="https://github.com/AyushmaanRajput/warlike-current-5989"
            target="_blank"
            className="project-github-link"
          >
            GitHub
          </a>
          <a
            href="https://warlike-current-5989-gamma.vercel.app/"
            target="_blank"
            class="project-deployed-link"
          >
            Live website
          </a>
        </div>

        <div className="project-card">
          <img src="" alt="" />
          <h4 className="project-title">SwiftPay (online finance app)</h4>
          <p className="project-description">
            Swiftpay is a dynamic and user-friendly finance website that
            revolutionizes the way you manage your financial transactions. With
            Swiftpay, you can seamlessly handle subscriptions, send and receive
            money from your contacts, and witness real-time transaction updates
            right on your user interface.
          </p>

          <a
            href="https://github.com/AyushmaanRajput/warlike-current-5989"
            target="_blank"
            className="project-github-link"
          >
            GitHub
          </a>
          <a
            href="https://warlike-current-5989-gamma.vercel.app/"
            target="_blank"
            class="project-deployed-link"
          >
            Live website
          </a>
        </div>

        <div className="project-card">
          <img src="" alt="" />
          <h4 className="project-title">SwiftPay (online finance app)</h4>
          <p className="project-description">
            Swiftpay is a dynamic and user-friendly finance website that
            revolutionizes the way you manage your financial transactions. With
            Swiftpay, you can seamlessly handle subscriptions, send and receive
            money from your contacts, and witness real-time transaction updates
            right on your user interface.
          </p>

          <a
            href="https://github.com/AyushmaanRajput/warlike-current-5989"
            target="_blank"
            className="project-github-link"
          >
            GitHub
          </a>
          <a
            href="https://warlike-current-5989-gamma.vercel.app/"
            target="_blank"
            class="project-deployed-link"
          >
            Live website
          </a>
        </div>
      </div>
    </SECTION>
  );
};
const SECTION = styled.section`
  min-height: 80vh;
  background-color: var(--gray);
  padding-block: 3rem;
  border: 2px solid yellow;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }
  .main-project-card {
    display: flex;
  }
`;
