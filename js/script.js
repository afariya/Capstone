
// Check the URL for the resume PDF parameter
const urlParams = new URLSearchParams(window.location.search);
const pdfUrl = urlParams.get('pdf');

// Function to highlight the active resume link
function highlightActiveLink() {
    if (pdfUrl) {
        // Remove active class from all links
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to the corresponding link
        if (pdfUrl.includes('resume-english.pdf')) {
            document.getElementById('resumeEnglish').classList.add('active');
        } else if (pdfUrl.includes('resume-kiswahili.pdf')) {
            document.getElementById('resumeKiswahili').classList.add('active');
        } else if (pdfUrl.includes('resume-indigenous.pdf')) {
            document.getElementById('resumeIndigenous').classList.add('active');
        }
    }
}

// Call the function on page load
window.onload = highlightActiveLink;