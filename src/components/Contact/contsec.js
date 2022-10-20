
export default function ContSec(){
    return(
        <>
        <div className="contact">
            <h1>
                Contact Us
                <br />
                <div>
                <iframe title="office-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751349614747!2d76.65758911500572!3d30.516086481713202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1665320976987!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </h1>
            <div>
                <input placeholder="Name"></input>
                <input placeholder="Email"></input>
                <input placeholder="Phone"></input>
                <textarea placeholder="Message.." rows={"3"}></textarea>
                <button>Send Message</button>
            </div>
        </div>
        </>
    )
}