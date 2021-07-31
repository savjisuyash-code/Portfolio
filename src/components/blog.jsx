import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Competitive Programming</span>
					<h2 className="colorlib-heading">Profiles</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://www.codechef.com/users/savjisuyash" className="blog-img"><img src="images/codechef.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>

					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="https://codeforces.com/profile/savji_suyash" className="blog-img"><img src="images/codeforces.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://leetcode.com/savjisuyash/" className="blog-img"><img src="images/leetcode.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://auth.geeksforgeeks.org/user/savjisuyash/practice/" className="blog-img"><img src="images/gfg.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://www.hackerrank.com/savjisuyash" className="blog-img"><img src="images/hackerrank.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://www.hackerearth.com/@suyash237" className="blog-img"><img src="images/hackerearth.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="https://www.stopstalk.com/user/profile/SavjiStalks" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
