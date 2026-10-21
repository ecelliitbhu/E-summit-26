import React from "react";

const Ticket = () => {
  return (
    <div>
      <style jsx>{`
        :root {
          --ticket-color: #ebebeb;
          /* --body-color: #6d6d6d; */
          --body-color: #f0ba96;
          --background-text-color: #f0ba96;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          min-width: 100%;
          min-height: 100vh;
        }

        .body {
          background: black;
          background: -moz-radial-gradient(
            circle,
            rgba(240, 186, 150, 1) 69%,
            rgba(245, 175, 128, 1) 100%
          );
          background: -webkit-radial-gradient(
            circle,
            rgba(240, 186, 150, 1) 69%,
            rgba(245, 175, 128, 1) 100%
          );
          background: radial-gradient(
            circle,
            rgba(240, 186, 150, 1) 69%,
            rgba(245, 175, 128, 1) 100%
          );
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f0ba96", endColorstr="#f5af80", GradientType=1);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(0.7); /*to fit in the preview*/
        }

        .ticket-container {
          display: flex;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          position: absolute;
          background: white;
          border-radius: 1rem;
          border-width: 0.1rem;
          border-color: white;
          /*   top: 200px */
        }

        .ticket-container.behind {
          animation: move-ticket 0.8s ease-in forwards;
          background: white;
        }

        .ticket-divider {
          height: 250px;
          border-left: 4px dotted black;
        }

        .ticket-background,
        .ticket-text {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ticket {
          background-color: black;
          border-radius: 1rem;
          position: relative;
        }

        .ticket.bigger {
          width: 500px;
          height: 250px;
        }

        .ticket.smaller {
          width: 150px;
          height: 250px;
        }

        .ticket-content {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .ticket-text {
          justify-content: space-between;
        }

        .ticket-background h1 {
          font-size: 130px;
          text-transform: uppercase;
          color: black;
          -webkit-transform: scaleY(1.3);
          transform: scaleY(1.3);
        }

        .ticket-text h2 {
          text-transform: uppercase;
          font-size: 34px;
          font-weight: 200;
        }

        .left {
          width: 220px;
          transform: rotate(-90deg);
        }

        .right {
          width: 200px;
          transform: rotate(-90deg);
          text-align: end;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding-bottom: 20px;
        }

        .decoration-divider {
          position: relative;
          width: 50px;
          height: 5px;
          background-color: black;
        }

        .smaller .ticket-content {
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .small-left {
          width: 100px;
          transform: rotate(-90deg);
          display: flex;
          flex-direction: column;
        }

        .small-left h2 {
          font-size: 15px;
          text-transform: uppercase;
          text-align: center;
        }

        .barcode {
          height: 2em;
          width: 0;
          margin: 1.2em 0 0 0.8em;
          box-shadow:
            1px 0 0 1px black,
            5px 0 0 1px black,
            10px 0 0 1px black,
            11px 0 0 1px black,
            15px 0 0 1px black,
            18px 0 0 1px black,
            22px 0 0 1px black,
            23px 0 0 1px black,
            26px 0 0 1px black,
            30px 0 0 1px black,
            35px 0 0 1px black,
            37px 0 0 1px black,
            41px 0 0 1px black,
            44px 0 0 1px black,
            47px 0 0 1px black,
            51px 0 0 1px black,
            56px 0 0 1px black,
            59px 0 0 1px black,
            64px 0 0 1px black,
            68px 0 0 1px black,
            72px 0 0 1px black,
            74px 0 0 1px black,
            77px 0 0 1px black,
            81px 0 0 1px black;
        }

        .small-right {
          width: 100px;
          transform: rotate(-90deg);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .small-right h1 {
          text-transform: uppercase;
          font-weight: 100;
          font-size: 20px;
          line-height: 40px;
          -webkit-transform: scaleY(1.6);
          transform: scaleY(1.6);
          //color: white;
        }

        .ticket-background {
          color: grey;
        }

        .small-right {
          color: grey;
          padding-right: 20px;
        }

        @keyframes move-ticket {
          0% {
            transform: rotate(0deg);
            transform-origin: left;
          }
          100% {
            transform: rotate(15deg);
            transform-origin: left;
          }
        }

        // nrjfnerklgnklsergklerjgkltrjgklrgjrklgl54kgtl4

        @media screen and (max-width: 1023px) {
          .ticket-background h1 {
            font-size: 30px;
          }

          .ticket-container {
            //border: 1px solid red;
            width: 300px;
            height: 108px;
            position: relative;
          }

          .outercontainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .ticket-divider {
            height: 100px;
            border-left: 4px dotted black;
          }

          .ticket-background,
          .ticket-text {
            position: absolute;
            width: 100%;
            height: 75%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .ticket {
            background-color: black;
            position: relative;
          }

          .ticket.bigger {
            width: 300px;
            height: 104px;
          }

          .ticket.smaller {
            width: 80px;
            height: 100px;
          }

          .ticket-content {
            display: flex;
            position: relative;
            width: 100%;
            height: 100%;
          }

          .ticket-text {
            justify-content: space-between;
          }

          .ticket-background h1 {
            font-size: 50px;
            text-transform: uppercase;
            color: var(--background);
            -webkit-transform: scaleY(1.3);
            transform: scaleY(1.3);
          }

          .ticket-text h2 {
            text-transform: uppercase;
            font-size: 10px;
            font-weight: 200;
          }

          .left {
            width: 100px;
            transform: rotate(-90deg);
            margin-left: 20px;
            margin-bottom: -30px;
          }

          .right {
            width: 200px;
            transform: rotate(-90deg);
            text-align: end;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding-bottom: 20px;
            margin-left: 70px;
          }

          .decoration-divider {
            position: relative;
            width: 50px;
            height: 3px;
            background-color: black;
          }

          .smaller .ticket-content {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }

          .small-left {
            width: 80px;
            transform: rotate(-90deg);
            display: flex;
            flex-direction: column;
            margin-top: 30px;
          }

          .small-left h2 {
            font-size: 10px;
            text-transform: uppercase;
            text-align: center;
          }

          .barcode {
            height: 1em;
            width: 0;
            margin: 1.2em 0 0 0.8em;
            box-shadow:
              1px 0 0 1px black,
              5px 0 0 1px black,
              10px 0 0 1px black,
              11px 0 0 1px black,
              15px 0 0 1px black,
              18px 0 0 1px black,
              22px 0 0 1px black,
              23px 0 0 1px black,
              26px 0 0 1px black,
              30px 0 0 1px black,
              35px 0 0 1px black,
              37px 0 0 1px black,
              41px 0 0 1px black,
              44px 0 0 1px black,
              47px 0 0 1px black,
              51px 0 0 1px black,
              56px 0 0 1px black,
              59px 0 0 0px black,
              64px 0 0 0px black,
              68px 0 0 0px black,
              72px 0 0 0px black,
              74px 0 0 0px black,
              77px 0 0 0px black,
              81px 0 0 0px black;
          }

          .small-right {
            display: flex;
            width: 40px;
            height: 80px;
            transform: rotate(-90deg);
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column;
            display: none;
          }

          .small-right h1 {
            font-weight: 100;
            font-size: 10px;
            line-height: 0px;
          }
        }

        @media screen and (max-width: 367px) {
          .ticket-background h1 {
            font-size: 30px;
          }

          .ticket-container {
            //border: 1px solid red;
            width: 200px;
            height: 104px;
            position: relative;
          }
        }
        @media screen and (max-width: 288px) {
          .ticket-background h1 {
            font-size: 30px;
          }

          .ticket-container {
            overflow: clip;
            width: 160px;
            height: 104px;
            position: relative;
          }
        }
      `}</style>
      <div className="outercontainer">
        <div className="ticket-container behind">
          <div className="ticket bigger">
            <div className="ticket-content">
              <div className="ticket-background">{/*<h1>Ticket</h1>*/}</div>
              <div className="ticket-text">
                <div className="left">
                  <div className="decoration-divider"></div>
                  <h2 className={"text-black"}>E-SUMMIT</h2>
                  <h2>IIT</h2>
                  <h2>BHU</h2>
                  <div className="decoration-divider"></div>
                </div>
                <div className="right">
                  <div className="decoration-divider"></div>
                  <h2>DATE</h2>
                  <h2>29 JAN-</h2>
                  <h2>31 JAN</h2>
                  <h2>2027</h2>
                  <div className="decoration-divider"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ticket-divider"></div>
          <div className="ticket smaller">
            <div className="ticket-content">
              <div className="small-right">
                <h1 className={"font-bold"}>Dawn</h1>
                <h1>of the</h1>
                <h1>Defiant</h1>
              </div>
              <div className="small-left">
                <h2>E-Cell</h2>
                <h2>IIT</h2>
                <h2>BHU</h2>
                <div className="barcode"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="ticket-container">
          <div className="ticket bigger">
            <div className="ticket-content">
              <div className="ticket-background">{/*<h1></h1>*/}</div>
              <div className="ticket-text">
                <div className="left">
                  <div className="decoration-divider font-bold"></div>
                  <h2>ESUMMIT</h2>
                  <h2>IIT</h2>
                  <h2>BHU</h2>

                  <div className="decoration-divider"></div>
                </div>
                <div className="right">
                  <div className="decoration-divider"></div>
                  <h2>DATE</h2>
                  <h2>29 JAN-</h2>
                  <h2>31 JAN</h2>
                  <h2>2027</h2>
                  <div className="decoration-divider"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ticket-divider"></div>
          <div className="ticket smaller">
            <div className="ticket-content">
              <div className="small-right">
                <h1>Dawn</h1>
                <h1>of the</h1>
                <h1>Defiant</h1>
              </div>
              <div className="small-left">
                <h2>E-Cell</h2>
                <h2>IIT</h2>
                <h2>BHU</h2>
                <div className="barcode"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
