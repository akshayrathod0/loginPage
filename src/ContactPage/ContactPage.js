import "./../ContactPage/ContactPage.css";
function ContactPage(){
    return(
        <div className="main_container">
            <div className="sub_container">
                <h1>Contact Us</h1>
                <input type="text" name="Name" placeholder="Name"/> <br/>
                <input type="email" name="Email" placeholder="Email" /> <br/>
                <input type="number" name="Phone" minLength={10} placeholder="Phone" /> <br/>
                <input type="textfield" name="Message" placeholder="Leave Message" /> <br/>
                <button name="Submit">Submit</button>
            </div>
        </div>
    )
}
export default ContactPage;