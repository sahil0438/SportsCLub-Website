document.addEventListener("DOMContentLoaded", function() {
    const eventDetails = document.getElementById("event-details");
    
    // Sample event data
    const events = [
        { name: "Annual Marathon", date: "March 15, 2025" },
        { name: "Basketball Tournament", date: "April 10, 2025" },
        { name: "Swimming Championship", date: "May 5, 2025" }
    ];
    
    eventDetails.innerHTML = "";
    events.forEach(event => {
        const eventItem = document.createElement("p");
        eventItem.textContent = `${event.name} - ${event.date}`;
        eventDetails.appendChild(eventItem);
    });
});
