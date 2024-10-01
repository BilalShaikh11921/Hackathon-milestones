// get html form 
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

// prevent the page from being reloaded
form.addEventListener("submit",function(event:Event){
    event.preventDefault();

    // get input values from html
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("number") as HTMLInputElement).value;
    const number = (document.getElementById("email") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    
    // generate resume content
    const resumeHtml = `
    <h2>Dynamic Resume</h2>
    <h3>Personal Information</h3>
    <p><b>Name: </b>${name}</p>
    <p><b>Email: </b>${email}</p>
    <p><b>Number: </b>${number}</p>
    
    <h3>Education</h3>
    <p><b>Education: </b>${education}</p>

    <h3>Experience</h3>
    <p><b>Experience: </b>${experience}</p>

    <h3>Skills</h3>
    <p><b>Skills: </b>${skills}</p>
    `
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else{
        console.log("resume elements are missing");
        
    }
});