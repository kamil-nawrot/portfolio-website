import React from "react"
import { FaGraduationCap, FaStar } from "react-icons/fa"
import { FiTarget } from "react-icons/fi"

import * as Scroll from "react-scroll"

import "../../styles/section.scss"
import "./about-section.scss"

import ResumeForm from "../ResumeForm"
import Technologies from "../Technologies"

const perks = [
  {
    name: "Solid Background",
    description:
      "Aute irure excepteur laboris exercitation laborum tempor proident qui in. Mollit occaecat esse cillum eiusmod ut nostrud excepteur velit non deserunt anim. Cillum exercitation irure in deserunt. Esse reprehenderit consequat laborum et et excepteur cillum ut culpa pariatur enim quis.",
    icon: <FaGraduationCap />,
  },
  {
    name: "Attention to Detail",
    description:
      "Cupidatat aliquip in aliqua ipsum in non anim laborum enim. Sit esse reprehenderit commodo irure non in ipsum dolor do. Eu aliquip deserunt reprehenderit nisi qui ut consectetur fugiat do sint Lorem cillum.",
    icon: <FiTarget />,
  },
  {
    name: "Real Passion",
    description:
      "Elit consectetur ea ut ad fugiat nisi laborum anim tempor veniam officia occaecat aliqua velit. Tempor amet ex cupidatat commodo consectetur ex adipisicing. Voluptate qui anim et non in proident.",
    icon: <FaStar />,
  },
]

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
