function sendMail(contactForm) {
    emailjs.send("service_4vbdhwr", "template_pxecv3f", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.summary.value
    }, "user_SymNMEJn92ZzIBFoCXRIY")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}