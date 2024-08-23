import{useState} from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


const defaultContactFormData = {
  username:"",
  email: "",
  message:"",
};
  
  export const Contact = () => {
    const [contact, setContact] = useState({defaultContactFormData});

      const [userData, setUserData] = useState(true);
    
      const { user, API } = useAuth();
    
      if (userData && user) {
        setContact({
          username: user.username,
          email: user.email,
          message: "",
        });
    
        setUserData(false);
      }
    
      const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        setContact({
          ...contact,
          [name]: value,
        });
        // setContact((prev) => ({
        //     ...prev,
        //     [name]: value,
        // }));
      };
    
      // handle form on submit
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`${API}/api/form/contact`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
          });
    
          if (response.ok) {
            setContact(defaultContactFormData);
            const data = await response.json();
            console.log(data);
            toast.success("Message send successfully");
          }else{
            toast.error("Message not send");
          }
        } catch (error) {
          console.log(error);
        }
      };
      return (
        <>
          <section className="section-contact">
            <div className="contact-content container">
              <h1 className="main-heading">Contact us</h1>
            </div>

            {/* contact page main  */}

            <div className="container grid grid-two-cols">
              <div className="contact-img">
                <img src="/images/support.png" alt="we are always ready to help" />
              </div>
    
              {/* contact form content actual  */}
              <section className="section-form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" id="username" autoComplete="off" value={contact.username} onChange={handleInput} required />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" autoComplete="off" value={contact.email} onChange={handleInput} required />
                  </div>
    
                  <div>
                    <label htmlFor="message">message</label>
                    <textarea name="message" id="message" autoComplete="off" value={contact.message} onChange={handleInput} required cols="30" rows="6"></textarea>
                  </div>
                  <div>
                    <button type="submit">submit</button>
                  </div>
                </form>
              </section>
            </div>
        <section className="mb-8">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.53788645923!2d85.73805123197226!3d20.300864868626256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1716739179350!5m2!1sen!2sin" 
          width="100%" 
          height="200" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </section>
        </section>
        </>
    );
};