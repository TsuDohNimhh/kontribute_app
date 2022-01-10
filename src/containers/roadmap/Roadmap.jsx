import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCheck, FaRegClock } from 'react-icons/fa';
import './roadmap.css'

const Roadmap = () => {
    return (
      <>
      <div className="roadmap__heading">
        <h1 className="gradient__text">Roadmap</h1>
      </div>
      <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: 'var(--gradient-bar)', color: '#fff' }}
        date="January 2022"
        iconStyle={{ background: 'rgb(50,205,50)', color: '#fff' }}
        icon={<FaCheck />}
      >
        <h3>Kontribute.app Landing Page</h3>
        <p>
          Kontribute.app is the landing page that shares information about our Internet Computer dapp.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: 'var(--gradient-bar)', color: '#fff' }}
        date="January 2022"
        iconStyle={{ background: 'rgb(50,205,50)', color: '#fff' }}
        icon={<FaCheck />}
      >
        <h3>Social Media</h3>
        <p>
          We've succesfully set up our Twitter & Discord for our community!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: 'var(--gradient-bar)', color: '#fff' }}
        date="January-Febuary 2022"
        iconStyle={{ background: 'var(--gradient-text)', color: '#fff' }}
        icon={<FaRegClock />}
      >
        <h3>Kontribute IC Dapp Testnet</h3>
        <p>
          Kontribute is our Internet Computer dapp that integrates Bonsai Warrior NFT's. The testnet will allow the community to vote on changes and the evolution of a fun lore story set in the "World of Bonsai".
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: 'var(--gradient-bar)', color: '#fff' }}
        date="Febuary 2022"
        iconStyle={{ background: 'var(--gradient-text)', color: '#fff' }}
        icon={<FaRegClock />}
      >
        <h3>Kontribute Token Whitepaper</h3>
        <p>
          The Kontribute token will be awarded to our users for purchasing Bonsai Warriors and voting/interacting with the Kontribute IC dapp. More announcements to come on the token. We are currently exploring token standards.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: 'var(--gradient-bar)', color: '#fff' }}
        date="Febuary - March 2022"
        iconStyle={{ background: 'var(--gradient-text)', color: '#fff' }}
        icon={<FaRegClock />}
      >
        <h3>Bonsai Warriors NFT's</h3>
        <p>
          Bonsai Warriors will be fully minted and available to the public for purchase. We are exploring Internet Computer NFT standards. The NFT's will hold a use case in the Kontribute IC dapp - earn more rewards and other extra perks!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: 'var(--gradient-bar)', color: '#fff' }}
        date="Q2 2022"
        iconStyle={{ background: 'var(--gradient-text)', color: '#fff' }}
        icon={<FaRegClock />}
      >
        <h3>Kontribute Token</h3>
        <p>
          After successful creation of the whitepaper and testing. The Kontribute Token will hit mainnet.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: 'var(--gradient-bar)', color: '#fff' }}
        date="Q2 2022"
        iconStyle={{ background: 'var(--gradient-text)', color: '#fff' }}
        icon={<FaRegClock />}
      >
        <h3>Kontribute IC Dapp</h3>
        <p>
          After testing and community feedback the full Kontribute dapp will hit the internet computer mainnet.
        </p>
      </VerticalTimelineElement>
      </VerticalTimeline>
      </>
    )
}

export default Roadmap
