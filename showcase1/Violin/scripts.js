document.addEventListener("DOMContentLoaded", function () {
    const videoItems = document.querySelectorAll(".video-item");

    videoItems.forEach((item) => {
        const iframe = item.querySelector("iframe");
        const container = item.querySelector(".iframe-container");

        if (iframe) {
            const width = iframe.width;
            const height = iframe.height;

            if (height > width) {
                // Vertical video
                item.classList.add("vertical");
                container.style.paddingTop = `${(height / width) * 100}%`;
            } else {
                // Horizontal video
                container.style.paddingTop = "56.25%"; // Default 16:9
            }
        }
    });
});