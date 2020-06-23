import React from "react"
import { FaGraduationCap, FaStar } from "react-icons/fa"
import { FiTarget } from "react-icons/fi"

import "../styles/section.scss"
import ResumeForm from "./resume-form"

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

const AboutSection = () => (
  <section className="section about-section">
<<<<<<< HEAD
    <h1 className="section__headline" data-sal="slide-up" data-sal-duration="3000"
    data-sal-delay="300"
    data-sal-easing="ease">
=======
    <h1 className="section__headline" data-sal="slide-up" 
        data-sal-duration="3000"
        data-sal-delay="300"
        data-sal-easing="ease">
>>>>>>> fdeaac5dab8bf8ed3cf021e09bcbc875d83b8067
      Quis et laboris id sit excepteur quis sit
    </h1>
    <div className="about-section__content">
      <section className="about-section__perks">
        {perks.map(perk => {
          return (
            <div key={perk.name} className="about-section__perks__perk perk">
              <div className="perk__icon-wrapper">{perk.icon}</div>
              <div className="perk__content">
                <h2 className="perk__title">{perk.name}</h2>
                <p className="perk__description">{perk.description}</p>
              </div>
            </div>
          )
        })}
      </section>
      <ResumeForm />
    </div>
  </section>
)

export default AboutSection
