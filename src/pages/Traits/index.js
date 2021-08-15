import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Traits = () => {
  const location = useLocation();
  const { botero } = location.state;

  return (
    <React.Fragment>
      <Link to="/gallery" className="link"><button className="btn3">Back</button></Link>
      <article className="infocard">
        <img src={botero[0].image} alt="NFTinfo" className="nftimg" />
        <div className="info"><h1>Description:</h1><h3>{botero[1].description}</h3></div>
      </article>
    </React.Fragment>
  );
}

export default Traits;
