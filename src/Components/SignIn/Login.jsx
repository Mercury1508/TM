import React from 'react'

import './Login.css'

import { Col, Row, Container } from "react-bootstrap";
// import Iframe from 'react-iframe'
function Login(){
    return(
		<div className="logindiv">
		   <Container>
		     <Row className="row">
			<Col className="col">
			<div className="loginMain">
        <h1 className="loginH1">TeamMaker</h1>
            <div class="containerLogin">
	        <div class="screenLogin">
		    <div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email" />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password" />
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">
				<h5>Log in via</h5>
				<div class="social-icons">
					<a href="/" className="social-login__icon fab fa-google"> </a>
					<a href="/" className="social-login__icon fab fa-facebook"> </a>
				</div>
                <h4><a href="/" className="accMessage">Don't have an account?</a></h4>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	    </div>
        </div>
        </div>
			</Col>
		</Row>
	</Container>
      </div> 

    );
}

export default Login