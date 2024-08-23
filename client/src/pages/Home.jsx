import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const Home = () => {
  const {user} = useAuth();
    return (
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
              <h4>Hii, {user ? `${user.username}`: ``}</h4><br/>
                {/* <p>We are the World Best Learning Platform</p> */}
                <h1>Welcome to E-Learning</h1>
                <p>
                LearnTube is a leading online learning platform, 
                offering a wide range of courses designed to help you achieve your personal and professional goals. 
                Whether you want to learn a new skill, advance your career, 
                or simply expand your knowledge, we have the right course for you.
                </p>
                <div className="btn btn-group">
                  <a href="/contact">
                    <button className="btn">connect now</button>
                  </a>
                  <a href="/courses">
                    <button className="btn secondary-btn">learn more</button>
                  </a>
                </div>
              </div>
  
              {/* hero images  */}
              <div className="hero-image">
                <img src="/images/home.png" alt="coding together" width="400" height="500"
                />
              </div>
            </div>
          </section>
        </main>
       
       
        {/* 2nd section  */}
      
      
      <Analytics />
       
       
       {/* 3rd section  */}
       
       
       
       <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient 
              Learning Platform? Contact us today for a free Demo Class and
              lets discuss how LearnTube can help your Carrier thrive in
              the digital Days.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/courses">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
        </section>
    </>
)};