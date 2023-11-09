import React from 'react'
import MeetOurTeamKristine from '../../assets/images/profile1.png'
import MeetOurTeamMark from '../../assets/images/profile2.png'
import MeetOurTeamKimberly from '../../assets/images/profile3.png'
import MeetOurTeamJustin from '../../assets/images/profile4.png'
import MeetOurTeamBox from './MeetOurTeamBox'

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
                <MeetOurTeamBox 
                    image={MeetOurTeamKristine}
                    imagedescription='Picture of Kristine Palmer'
                    name='Kristine Palmer'
                    title='Chef Operation Officer'
                />
                  <MeetOurTeamBox 
                    image={MeetOurTeamMark}
                    imagedescription='Picture of Mark Aburi'
                    name='Mark Aburi'
                    title='Senior Consultant'
                />
                  <MeetOurTeamBox 
                    image={MeetOurTeamKimberly}
                    imagedescription='Picture of Kimberly Hansen'
                    name='Kimberly Hansen'
                    title='Senior Consultant'
                />
                  <MeetOurTeamBox 
                    image={MeetOurTeamJustin}
                    imagedescription='Picture of Justin Willoman'
                    name='Justin Willoman'
                    title='Senior Tech Consultant'
                />
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