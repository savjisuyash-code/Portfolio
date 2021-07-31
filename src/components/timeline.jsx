import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Academic History</span>
                <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Walchand College Of Engineering, Sangli <span>2018 - 2022(Expected)</span></h2>
                        <h3>Current CPI : 9.5 / 10</h3>
                        <p>I am currently pursing <strong>BTECH</strong> in <strong>Computer Science & Engineering</strong> major. Over the period, I have covered the CS fundamentals courses like, 
                            <ul>
                              <li>Data Structures & Algorithms</li>
                              <li>Database Management Systems & SQL</li>
                              <li>Operating System</li>
                              <li>Computer Networks</li>
                              <li>Object Oriented Programming</li>
                            </ul>
                            and have good understanding of them. I have also been part of various college societies and events.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Taywade Jr. College, Nagpur <span>2016 - 2018</span></h2>
                        <h3>HSC Board : 90.46 %  &emsp; | &emsp;   JEE (Mains) : 111 / 360  &emsp;  | &emsp;   MHT-CET : 154 / 200</h3>
                        <p>I have completed my Higher Secondary Education in Science with PCM along with Electronics.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Vidya Mandir Highschool, Nagpur <span>2010 - 2016</span></h2>
                        <h3>SSC Board : 96.20 %</h3>
                        <p></p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
