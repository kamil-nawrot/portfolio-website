import React from "react"
import { FaGraduationCap, FaStar } from "react-icons/fa"
import { FiTarget } from "react-icons/fi"

import * as Scroll from "react-scroll"

import "../../styles/section.scss"
import "./about-section.scss"

import ResumeForm from "../ResumeForm"
import Technologies from "../Technologies"

const AboutSection = (props) => {

  let ScrollHandler = Scroll.Element

  const iconComponents = {
    FaGraduationCap: <FaGraduationCap/>,
    FiTarget: <FiTarget/>,
    FaStar: <FaStar/>
  }

  return (
    <section id="about" className="section about-section">
      <ScrollHandler name="about-section" />
      <div>
        <h1 className="section__headline">
          {props.title}
        </h1>
      </div>
      <div className="about-section__content">
        <section className="about-section__perks">
          {props.perks.map(perk => {
            return (
              <div key={perk.name} className="about-section__perks__perk perk">
                <div
                  className="perk__icon-wrapper">{iconComponents[perk.icon]}</div>
                <div className="perk__content">
                  <h2 className="perk__title">{perk.name}</h2>
                  <p className="perk__description">{perk.description}</p>
                </div>
              </div>
            )
          })}
        </section>
        <ResumeForm resumeForm={props.resumeForm}/>
      </div>
      <Technologies />
    </section>
  )
}

export default AboutSection
