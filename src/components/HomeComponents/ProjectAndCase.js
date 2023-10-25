import React from 'react'
import BusinessProject from '../../assets/images/business.png'
import GlassesProject from '../../assets/images/glasses.png'
import BookProject from '../../assets/images/book.png'
import LaptopProject from '../../assets/images/computer.png'

const ProjectAndCase = () => {
  return (
    <section className="project-and-case">
        <div className="container">

            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let´s Looks Our Global Projects</h2>
            </div>

            <div className="project-and-cases">

                <a className="project" href="#">
                    <img src={BusinessProject} alt="Man holding a business newspaper"/>
                    <h3>Grow your business</h3>
                    <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                </a>

                <a className="project" href="#">
                    <img src={GlassesProject} alt="Glasses, pen and a computer on a table"/>
                    <h3>Why your client needs a responsive website</h3>
                    <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                </a>

                <a className="project" href="#">
                    <img src={BookProject} alt="Office supplies on a desk"/>
                    <h3>Educate your employees to get better results</h3>
                    <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                </a>

                <a className="project" href="#">
                    <img src={LaptopProject} alt="Laptop on a desk with a diagram on the screen"/>
                    <h3>Business Insights is a important piece of your business</h3>
                    <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                </a>

            </div>

            <div className="center-content">
                <a className="buttons-black" href="projects.html">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>

        </div>
    </section>
  )
}

export default ProjectAndCase