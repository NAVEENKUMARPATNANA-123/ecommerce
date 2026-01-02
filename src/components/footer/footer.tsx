import { FormEvent, useState } from "react";
import './footer.css'
function Footer(): React.JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
  const res = await fetch("http://localhost:3000/api/submit/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }
      setStatus("✅ Message sent successfully!");

    setTimeout(() => {
      setStatus(" ");
    }, 5000);

      setName("");
      setEmail("");
      setMessage("");
    } 
    catch (error) {
      setStatus("❌ Failed to send message. Try again.");
    }
  };





  return (
    <footer className="footer">
      <div className="footer-container">

        
    <div className="footer-left">
      <h3>📍 Our Address</h3>
      <p>Foodie Hub  <br /> Kundalahalli <br /> Banglore, India </p>

      <iframe title="map" src="https://www.google.com/maps?q=Bengaluru+Karnataka+India&output=embed"
        width="100%" height="200" style={{ border: 0, borderRadius: "8px" }} ></iframe>
        </div>

        
        <div className="footer-right">
          <form className="contact-form" onSubmit={handleSubmit}>
    <input type="text"placeholder="Your Name"value={name} onChange={e => setName(e.target.value)} required />

    <input type="email" placeholder="Your Email" value={email}  onChange={e => setEmail(e.target.value)} required />
    {/* <input type="text" placeholder="Your Message"   value={message} onChange={e => setMessage(e.target.value)} required/> */}
    <textarea placeholder="Your Message"   value={message} onChange={e => setMessage(e.target.value)} required ></textarea>

    <button type="submit">Send Message</button>

    {status && <p className="status">{status}</p>}
  </form>

</div>

</div>

      <div className="footer-bottom">
        © 2026 Foodie Hub | All Rights Reserved 🍽️
      </div>
    </footer>
  );
}

export default Footer;
