import "./Contacts.css";

function Contacts() {
  return (
    <section id="contact" className="contact">

      <h1>Contact Me</h1>

      <input type="text" placeholder="Name"/>
      <input type="email" placeholder="Email"/>
      <textarea placeholder="Message"></textarea>

      <button>
        Send
      </button>

    </section>
  );
}

export default Contacts;