import "./Contact.css"
function Contact(){
    return(
        <>
        <section id="contact" className="contact-section section">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required/>
                <input type="email" placeholder="Your Email" required/>
                <textarea placeholder="your message" rows="10" cols="10" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
        </>
        
    )

}
export default Contact