function updateUTCTime() {
    let now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById("utc-time").textContent = utcTime;
}

updateUTCTime();
setInterval(updateUTCTime, 1000); 