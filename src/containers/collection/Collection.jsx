import React from 'react';
import Article from '../../components/pic/Pic';
import { pic1, pic2, pic3, pic4, pic5, pic6 } from './imports';
import './collection.css';

const Collection = () => (
  <div className="gpt3__blog section__padding" id="nft">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">The Bonsai Warriors NFT collection</h1>
      <p>The Bonsai Warriors is a NFT collection of characters from across the world of Bonsai. Each NFT carries the right to access the Bonsai Warrior Story and take part in deciding the story and what will happen as it continues in the kontribute dapp.</p>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={pic3} name="Eager Warrior"/>
        <Article imgUrl={pic2} name="Demon General"/>
        <Article imgUrl={pic1} name="Brash Woman"/>
        <Article imgUrl={pic4} name="Fierce Knight"/>
        <Article imgUrl={pic5} name="Lady Rosette"/>
        <Article imgUrl={pic6} name="Spear Lady"/>
      </div>
    </div>
  </div>
);

export default Collection;