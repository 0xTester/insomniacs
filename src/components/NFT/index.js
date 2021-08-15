import React from 'react';
import { Link } from 'react-router-dom';

const NFT = ({ description, image }) => {
  return (
    <article className="nft">
      <Link to={{
        pathname: "/traits",
        state: {
          botero: [{ image }, { description }],
        },
      }} className="link" >
        <img src={image} alt="NFT object" className="nftimage" />
        <h2>{description}</h2>
      </Link>
    </article>
  );
}

export default NFT
