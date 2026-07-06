import { useState } from "react";
import "./Contacts.css";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add actual form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>Feel free to reach out to me through any of these channels:</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:ypalak268@gmail.com">ypalak268@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💻</span>
                <div>
                  <h3>GitHub</h3>
                  <a href="https://github.com/palak320" target="_blank" rel="noopener noreferrer">
                    github.com/palak320
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;