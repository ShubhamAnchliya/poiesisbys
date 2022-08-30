import React from "react";
import Header from "./include/Header";
import Footer from "./include/Footer";
import ContactUsTop from "./include/ContactUsTop";
import ContactUsRegi from "./include/ContactUsRegi";

function ContactUs() {
    return(
        <>

            {/* header navbar */}
            <Header />

            {/* contactus top */}
            <ContactUsTop />


            {/* ContactUs Registration */}
            <ContactUsRegi />


            {/* Footer */}
            <Footer />

        </>

    );
};

export default ContactUs;