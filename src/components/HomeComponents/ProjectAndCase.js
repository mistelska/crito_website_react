import React from 'react'
import BusinessProject from '../../assets/images/business.png'
import GlassesProject from '../../assets/images/glasses.png'
import BookProject from '../../assets/images/book.png'
import LaptopProject from '../../assets/images/computer.png'
import ProjectAndCaseBox from './ProjectAndCaseBox'
import ButtonBlack from '../../assets/BtnFunctions/ButtonBlack'

const ProjectAndCase = () => {
  return (
    <section className="project-and-case">
        <div className="container">

            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let&rsquo;s Looks Our Global Projects</h2>
            </div>

            <div className="project-and-cases">
                <ProjectAndCaseBox 
                    img={BusinessProject}
                    imgdescription='Man holding a business newspaper'
                    title='Grow your business'
                />
                    <ProjectAndCaseBox 
                    img={GlassesProject}
                    imgdescription='Glasses, pen and a computer on a table'
                    title='Why your client needs a responsive website'
                />
                    <ProjectAndCaseBox 
                    img={BookProject}
                    imgdescription='Office supplies on a desk'
                    title='Educate your employees to get better results'
                />
                    <ProjectAndCaseBox 
                    img={LaptopProject}
                    imgdescription='Laptop on a desk with a diagram on the screen'
                    title='Business Insights is a important piece of your business'
                />
            </div>

            <div className="center-content">
                <ButtonBlack text="All Recent Projects"/>
            </div>

        </div>
    </section>
  )
}

export default ProjectAndCase