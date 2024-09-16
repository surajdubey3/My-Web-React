import React from 'react'
import vg from "../assets/6.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai";

const Home = () => {
  return (
    
    <>
      <div className="home" id="home">Home
          <main>
              <h1>TechyStar</h1>
              <p>Solution to all your problems</p>
           </main>
       </div>

      <div className="home2">
      <img src ={vg} alt="Graphics" />

      <div>
        <p>I am confident that my passion for problem-solving and commitment to clean
        , efficient coding practices align perfectly with your team's mission to deliver 
        innovative software solutions .</p>
      </div>
     
      </div>

      <div className='home3' id="about">
      <div>
        <h1>Who we are?</h1>
        <p>Hii I am Suraj Dubey , I am passionate about problem solving and continuous learning new technologies . My goal is to contribute 
        to innovative projects that make a real-world impact and grow as a software engineer. I am excited about the opportunity to work with talented
        professionals and take on new challenges in the tech industry.</p>

      </div>

      </div>


      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>

            <div style={{
              animationDelay:"0.3s",
            }}>

              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{
              animationDelay:"0.5s",
            }}>

              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{
              animationDelay:"0.7s",
            }}>

              <AiFillYoutube/>
              <p>Youtube</p>
            </div>

            <div style={{
              animationDelay:"1s",
            }}>

              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>

  
    </>
  );
}

export default Home;