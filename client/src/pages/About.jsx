import {NavLink}  from "react-router-dom";
import {Analytics} from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const {user} = useAuth();
    return (
        <>
          <main>
            <section className="section-hero">
              <div className="container grid grid-two-cols">
                <div className="hero-content">
                  <h5>Welcome, {user ? `${user.username}`: ``}</h5>
                  <h1>Why Choose Us?</h1>
                  <p>
                  LearnTube is a leading online learning platform, 
                  Offers a wide range of subjects, catering to diverse learning needs.
                  Features courses taught by industry professionals and experienced educators.
                  Provides high-quality education at competitive prices, often with free trials.
                  Enables learning at your own pace, with lifetime access to course materials.
                  Fosters a supportive learning community with forums and peer interactions.
                  </p>
                  <div className="btn btn-group">
                  <NavLink to="/contact">
                      <button className="btn">connect now</button>
                  </NavLink>
                    <a href="/courses">
                      <button className="btn secondary-btn">learn more</button>
                    </a>
                  </div>
                </div>
                <div className="hero-image">
                <img src="/images/about.png" alt="coding together" width="400" height="500"
                />
              </div>
                </div>
                </section>
            </main>
            <Analytics/>
       </>
    )
};