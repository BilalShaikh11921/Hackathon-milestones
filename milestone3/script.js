// get html form 
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// prevent the page from being reloaded
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // get input values from html
    var name = document.getElementById("name").value;
    var email = document.getElementById("number").value;
    var number = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // generate resume content
    var resumeHtml = "\n    <h2>Dynamic Resume</h2>\n    <h3>Personal Information</h3>\n    <p><b>Name: </b>".concat(name, "</p>\n    <p><b>Email: </b>").concat(email, "</p>\n    <p><b>Number: </b>").concat(number, "</p>\n    \n    <h3>Education</h3>\n    <p><b>Education: </b>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p><b>Experience: </b>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p><b>Skills: </b>").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.log("resume elements are missing");
    }
});
