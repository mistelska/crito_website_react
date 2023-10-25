import React from 'react'
import MeetOurTeamKristine from '../../assets/images/profile1.png'
import MeetOurTeamMark from '../../assets/images/profile2.png'
import MeetOurTeamKimberly from '../../assets/images/profile3.png'
import MeetOurTeamJustin from '../../assets/images/profile4.png'

const MeetOurTeam = () => {
  return (
    <section className="meet-our-team">
        <div className="container">

            <div className="caption-btn">

                <div>
                    <h4>Meet Our Team</h4>
                    <h2>Experience Team Members</h2>
                </div>

                <div className="button">
                    <a className="buttons-transparent" href="#">Brows Team<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>

            </div>

            <div className="all-pics-and-info">

                <div className="pic-and-info">
                    <img src={MeetOurTeamKristine} alt="Picture of Kristine Palmer"/>
                    <h3>Kristine Palmer</h3>
                    <p>Chef Operation Officer</p>
                </div>

                <div className="pic-and-info">
                    
                    <img src={MeetOurTeamMark} alt="Picture of Mark Aburi"/>
                    <h3>Mark Aburi</h3>
                    <p>Senior Consultant</p>
                </div>

                <div className="pic-and-info">
                    <img src={MeetOurTeamKimberly} alt="Picutre of Kimberly Hansen"/>
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                </div>

                <div className="pic-and-info">
                    <img src={MeetOurTeamJustin} alt="Picture of Justin Willoman"/>
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                </div>

            </div>

            <div className="dots">
                <a className="dot-upp" href="#"></a>
                <a className="dot-dark" href="#"></a>
                <a className="dot-upp" href="#"></a>
                <a className="dot-upp" href="#"></a>
                <a className="dot-upp" href="#"></a>
            </div>

        </div>
    </section>
  )
}

export default MeetOurTeam