import React from 'react'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube,AiFillInstagram} from 'react-icons/ai';
import vg from "../assets/2.webp";
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>TechyPedia</h1>
        <p>Solutions to all your problems</p>
      </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
    <div>
      <p>
        We are your one and only solution to tech problems you face everyday.We are leading tech company whose aim is to increase the problem solving ability in children.
      </p>
    </div>
    </div>
    <div className="home3" id='about'>
      <div>
        <h1>Who are we?</h1>
        <p>If you’re dealing with IT support that doesn’t meet your needs the way you want it to, or are operating without any support at all, your business can’t reach its full potential. Contact us for a FREE IT consultation, and we’ll show you a better way to ensure your technology is providing your business with maximum value. Our technicians managing your IT, you can enjoy the benefits of advanced, productivity-boosting business technology without increasing your stress or resource requirements.</p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div>
             <AiFillGoogleCircle/>
             <p>Google</p>
          </div>

          <div>
             <AiFillAmazonCircle/>
             <p>Amazon</p>
          </div>

          <div>
             <AiFillYoutube/>
             <p>Youtube</p>
          </div>

          <div>
             <AiFillInstagram/>
             <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
};
export default Home;