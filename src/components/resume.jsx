import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <div className="style-2">
            <section id="resume" className="resume" data-section="resume">
                <div className="container">

                <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">Experience</span>
                    <h2 className="colorlib-heading animate-box">Position of Responsibilty</h2>
                </div>
                </div>

        <div className="section-title">
          <h2>WCE ACSES</h2>
        </div>

        <div>
            <div className="resume-item">
              <h4>President</h4>
              <h5>June 2020 - Present</h5>
              <ul>
                <li>Leader of the departmental society which is responsible to
                conduct national-level events, workshops, club services, webinars, social
                IT awareness campaigns</li>
            </ul>
            </div>
            <div className="resume-item">
              <h4>Assistant Program Director</h4>
              <h5>Sept 2019 - June 2020</h5>
              <ul>
                <li>Organized various sessions/Project competitions on tech/non-tech topics that benefitted students to enhance their knowledge.</li>
                <li>Organized <em>OS bootcamp</em> - an Operating Systems learning series attended by 100+ students</li>
            </ul>
            </div>
            <div className="resume-item">
              <h4>Co-ordinator</h4>
              <h5>Jan 2019 - Sept 2019</h5>
              <ul>
                  <li>Organized C Programming Workshop & General Interest Meet</li>
              </ul>
            </div>
        </div>
        <br /><br /><br />

        <div className="section-title">
          <h2>Art Circle</h2>
        </div>
        <div>
        <div className="resume-item">
          <h4>Assistant Drama Head</h4>
          <h5>Aug 2019 - Jan 2020</h5>
          <ul>
              <li>One of the hobbies! Worked as Asst. Drama head at <strong>WCE Art Circle</strong></li>
          </ul>
        </div>
    </div>
    <br /><br /><br />

          <div className="section-title">
          <h2>PrepBytes</h2>
        </div>

       

        <div>
            <div className="resume-item">
              <h4>Campus Business Manager</h4>
              <h5>April 2020 - Sept 2020</h5>
              <ul>
                  <li>Campus ambassador of one of the fastest-growing tech startup. </li>
              </ul>
            </div>
        </div>
    </div>

        
    </section>

      </div>
    )
  }
}
