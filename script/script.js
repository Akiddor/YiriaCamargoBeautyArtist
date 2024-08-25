function toggleNewTreatment(treatmentId) {
    var content = document.getElementById(treatmentId);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

