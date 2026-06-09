const videos = {

    RJTCAL1DRro: [
        { time: 0, title: "Introduction" },
        { time: 60, title: "Overview" },
        { time: 180, title: "Features" },
        { time: 300, title: "Summary" }
    ],

    jj_aUFX8SV8: [
        { time: 0, title: "Opening" },
        { time: 120, title: "Main Topic" },
        { time: 240, title: "Examples" }
    ],

    xmmxkmVSiq0: [
        { time: 0, title: "Introduction" },
        { time: 90, title: "Concepts" },
        { time: 200, title: "Demo" },
        { time: 320, title: "Conclusion" }
    ]
};

const player =
document.getElementById("youtubePlayer");

const chapterList =
document.getElementById("chapterList");

function formatTime(seconds){

    const mins =
    Math.floor(seconds / 60);

    const secs =
    seconds % 60;

    return `${mins}:${secs
        .toString()
        .padStart(2,"0")}`;
}

function loadChapters(videoId){

    chapterList.innerHTML = "";

    videos[videoId].forEach(chapter => {

        const chapterCard =
        document.createElement("div");

        chapterCard.classList.add("chapter-card");

        chapterCard.innerHTML = `
            <span class="time">
                ${formatTime(chapter.time)}
            </span>

            <span class="title">
                ${chapter.title}
            </span>
        `;

        chapterCard.addEventListener("click", () => {

            player.src =
            `https://www.youtube.com/embed/${videoId}?start=${chapter.time}`;
        });

        chapterList.appendChild(chapterCard);
    });
}

document
.querySelectorAll(".video-thumb")
.forEach(video => {

    video.addEventListener("click", () => {

        document
        .querySelectorAll(".video-thumb")
        .forEach(v =>
            v.classList.remove("active-video")
        );

        video.classList.add("active-video");

        const videoId =
        video.dataset.video;

        player.src =
        `https://www.youtube.com/embed/${videoId}`;

        loadChapters(videoId);
    });
});

loadChapters("RJTCAL1DRro");

document
.getElementById("generateBtn")
.addEventListener("click", () => {

    const url =
    document.getElementById("videoUrl").value;

    const generated =
    document.getElementById("generatedChapters");

    generated.innerHTML = "";

    const fakeChapters = [

        "00:00 Introduction",
        "02:00 Main Topic",
        "04:00 Deep Dive",
        "06:00 Examples",
        "08:00 Summary"
    ];

    fakeChapters.forEach(chapter => {

        const div =
        document.createElement("div");

        div.classList.add("generated-card");

        div.innerText = chapter;

        generated.appendChild(div);
    });
});