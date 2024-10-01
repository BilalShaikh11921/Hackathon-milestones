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
    var resumeHtml = "\n    <h2>Editable Resume</h2>\n    <h3>Personal Information</h3>\n    <p><b>Name: </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Number: </b><span contenteditable=\"true\">").concat(number, "</span></p>\n    \n    <h3>Education</h3>\n    <p><b>Education: </b><span contenteditable=\"true\">").concat(education, "</span></p>\n\n    <h3>Experience</h3>\n    <p><b>Experience: </b><span contenteditable=\"true\">").concat(experience, "</span></p>\n\n    <h3>Skills</h3>\n    <p><b>Skills: </b><span contenteditable=\"true\">").concat(skills, "</span></p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.log("resume elements are missing");
    }
});
