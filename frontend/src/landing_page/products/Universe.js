import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

            
        <div className="col-4 p-3 mt-5">
          <img className="uniform-logo" src="media/images/zerodhaFundhouse.png" />
          <span className="text-12 text-light-grey">Our asset management venture<br></br> that is creating simple and transparent index <br></br>funds to help you save for your goals.</span>
         
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="uniform-logo" src="media/images/sensibullLogo.svg" />
          <span className="text-12 text-light-grey">Options trading platform that lets you<br></br> create strategies, analyze positions, and examine <br></br>data points like open interest, FII/DII, and more.</span>
          
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="uniform-logo" src="media/images/tijori.svg" />
          <span className="text-12 text-light-grey">Investment research platform<br></br> that offers detailed insights on stocks,<br></br> sectors, supply chains, and more.</span>
        </div>

        <div className="col-4 p-3 mt-5">
          <img className="uniform-logo" src="media/images/streakLogo.png" />
          <span className="text-12 text-light-grey">Systematic trading platform<br></br> that allows you to create and backtest<br></br> strategies without coding.</span>
          
        </div>

        <div className="col-4 p-3 mt-5">
          <img className="uniform-logo" src="media/images/smallcaseLogo.png" />
          <span className="text-12 text-light-grey">
            Thematic investment platform<br></br> that helps you invest in diversified<br></br> baskets of stocks on ETFs.
          </span>
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="uniform-logo" src="media/images/dittoLogo.png" />
          <span className="text-12 text-light-grey">
            Personalized advice on life<br></br> and health insurance. No spam<br></br> and no mis-selling.
          </span>
          
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mt-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
