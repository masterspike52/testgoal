// Replace 'https://www.tiktok.com/@username' with the TikTok profile URL you want to scrape
const TIKTOK_PROFILE_URL = 'https://www.tiktok.com/@madaldmikael';

function scrapeTikTokData() {
    fetch(TIKTOK_PROFILE_URL)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Extract the number of gifts and followers (you may need to inspect the TikTok website structure)
            const giftCount = parseInt(doc.querySelector('.count-5e5d9c22').textContent);
            const followerCount = parseInt(doc.querySelector('.count-8a1a3030').textContent);

            // Simulated progress (replace with actual logic)
            let currentGifts = 0;
            let currentFollows = 0;

            // Update the progress bar and percentage
            const giftPercentage = (currentGifts / giftCount) * 100;
            const followPercentage = (currentFollows / followerCount) * 100;

            const overallPercentage = (giftPercentage + followPercentage) / 2;

            const progressBar = document.getElementById("progress");
            progressBar.style.width = `${overallPercentage}%`;
            progressBar.textContent = `${Math.round(overallPercentage)}%`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the scraping function and update progress every X seconds (adjust this based on your needs)
scrapeTikTokData();
setInterval(scrapeTikTokData, 3000); // Update every 3 seconds
