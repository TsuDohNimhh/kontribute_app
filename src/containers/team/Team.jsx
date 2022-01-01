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
                <Member imgUrl={jesse} text="Jesse" details="Hello this is jesse, im interested in this and that"/>
                <Member imgUrl={christian} text="Christian" details="Hello this is christian im interestid in a few bits"/>
            </div>
        </div>
    )
}

export default Team;