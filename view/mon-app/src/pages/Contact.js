import React from 'react';
import logo from '../images/logo.png';
import '../componant/styles/contact.css';
export default function Contact() {
  return (
    <div className='yellocard'>
<div class="containerContactUs">
		<div class="contact-box">
			<div class="right">
				<h2>Contact Us</h2>
				<textarea placeholder="Message" class="field"></textarea>
				<button class="btn">Send</button>
			</div><div class="left">
               <div className="info-wrap w-100 p-lg-5 p-4 img">

                    <img src={logo} id='logoContact' />
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span> ENSI
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone:</span>
                          <a href="tel://123456789">+21650554984</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span>
                          <a href="mailto:info@yoursite.com">
                            aymen.maskhi@ensi-uma.tn
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                     <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                      </div>
                      </div>
                      </div>

            </div>
			
		</div>
	</div></div>
  );
}