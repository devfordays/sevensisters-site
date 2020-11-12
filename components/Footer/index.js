import styles from './Footer.module.css';
const Footer = (props) =>{
  return(
    <footer id="main-footer">
				<div className="footer-content">
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center">
								<a className="footer-logo" href="/"><img src="images/logo.svg" style={{maxWidth:200, height:'auto'}} /></a>
								<p className="footer-copyright" style={{paddingTop:20}}>© 2020. All Rights Reserved.</p>
								<p className="footer-navigation">
									<a href="/">Take A Tour</a>
									<a href="/">Contact</a>
									<a href="/faq">FAQ</a>
									<a href="/privacy">Privacy</a>
									<a href="/terms-of-use">Terms</a>
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 text-center">
								<p className="footer-navigation" style={{color:'white'}}>
									<a href="https://www.facebook.com/"><img className="social-footer-icon" src="images/web/icons/social/fb.svg"/></a>
									<a href="https://instagram.com/"><img className="social-footer-icon" src="images/web/icons/social/instagram.svg"/></a>
									<a href="mailto:info@sevensisters.care"><img className="social-footer-icon" src="images/web/icons/social/email.svg"/></a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
  )
}

export default Footer;
