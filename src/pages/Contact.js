function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Message Sent Successfully!");
  };

  return (
    <div>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="First Name"
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="text"
          placeholder="Contact Number"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>
    </div>
  );
}

export default Contact;