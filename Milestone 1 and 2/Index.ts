function generateResume(): void {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;

    const resumePreview = document.getElementById("resumePreview") as HTMLDivElement;
    
    // Clear previous content
    resumePreview.innerHTML = '';

    // Generate resume content
    const resumeHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Summary</h4>
        <p>${summary}</p>
    `;
    
    // Update the preview
    resumePreview.innerHTML = resumeHTML;
}

export {};
