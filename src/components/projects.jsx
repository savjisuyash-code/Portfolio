import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Projects</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/covicare.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/ganekasar/covid-contact-tracing">Covi-Trace</a></h3>
											<span>Mobile App</span>
											<ul>
												<li>Flutter</li>
												<li>Firebase</li>
												<li>Google Nearby Connections API</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/recruitment.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/ganekasar/recruitment-platform">Online Examination Platform</a></h3>
											<span>Website</span>
											<ul>
												<li>NodeJS</li>
												<li>ExpressJS</li>
												<li>MongoDB</li>
												<li>Bootstrap</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/yelpcamp.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/savjisuyash-code/YelpCamp">The Camper's Collection</a></h3>
											<span>Website</span>
											<ul>
												<li>NodeJS</li>
												<li>ExpressJS</li>
												<li>MongoDB</li>
												<li>Bootstrap</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://github.com/savjisuyash-code" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
