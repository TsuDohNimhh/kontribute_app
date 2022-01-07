import React from 'react'
import Feature from '../../components/feature/Feature';
import './team.css';

const featuresData = [
  {
    title: 'Jesse - Developer',
    text: 'Jesse is an aspiring full stack blockchain developer, with interests in development research and smart contracts.',
  },
  {
    title: 'Christian - Artist',
    text: "Christian is an artist and animator, with interests in animation and NFT's",
  },
];

const Team = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Team Bonsai</h1>
      <p>About us</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Team;