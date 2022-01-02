import React from 'react'
import './team.css';
import jesse from '../../assets/jesse.jpg';
import christian from '../../assets/christian.jpg';
import { Member } from '../../components';

const Team = () => {
    return (
        <div className="gpt3__team section__padding">
            <div className="gpt3__team-heading">
                <h1 className="gradient__text">Team Bonsai</h1>
                <p>About us</p>
            </div>
            <div className="team__members">
                <Member imgUrl={jesse} text="Jesse - Developer" details="Jesse is an aspiring full stack blockchain developer, with interests in research and smart contracts."/>
                <Member imgUrl={christian} text="Christian - Artist" details="Christian is an artist and animator, with interests in animation and NFT's."/>
            </div>
        </div>
    )
}

export default Team;