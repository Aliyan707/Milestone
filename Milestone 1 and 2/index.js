"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var summary = document.getElementById("summary").value;
    var resumePreview = document.getElementById("resumePreview");
   
    resumePreview.innerHTML = '';
    
    var resumeHTML = "\n        <h3>".concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h4>Summary</h4>\n        <p>").concat(summary, "</p>\n    ");
   
    resumePreview.innerHTML = resumeHTML;
}
