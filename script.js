function createCard(title, c_img, cname, views, months, timestamp, t_img) {
    const card = document.createElement('div');
    card.className = 'card';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'thumbnail';

    const image = document.createElement('img');
    image.src = t_img;
    image.alt = 'thumbnail';
    image.style.height = "220px"

    const timestampElement = document.createElement('span');
    timestampElement.className = 'timestamp';
    timestampElement.textContent = timestamp;

    imgDiv.appendChild(image);
    imgDiv.appendChild(timestampElement);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'video-about';

    const channel_img = document.createElement('img');
    channel_img.src = c_img;
    channel_img.alt = 'channel_img';
    channel_img.className = 'C-img';

    const titleElement = document.createElement('span');
    titleElement.className = 'title';
    titleElement.textContent = title;

    const channelElement = document.createElement('span');
    channelElement.className = 'Cname';
    channelElement.textContent = cname;

    const viewsElement = document.createElement('span');
    viewsElement.className = 'views-time';
    viewsElement.textContent = (`${formatViews(views)} • ${months} months`);

    const threedots = document.createElement('img');
    threedots.className = "threedots"
    threedots.src = "assets/icons/3dot-icon.svg";
    threedots.alt = 'threedots';

    contentDiv.appendChild(channel_img);
    contentDiv.appendChild(titleElement);
    contentDiv.appendChild(channelElement);
    contentDiv.appendChild(viewsElement);
    contentDiv.appendChild(threedots);

    card.appendChild(imgDiv);
    card.appendChild(contentDiv);

    document.getElementById('card').appendChild(card);
}

function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M views ';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K views ';
    } else {
        return views + ' views ';
    }
}

// createCard("This is Video 1 ", "assets/img/c-1.png", "CodeWithHarry", 345000, 5, "22:21", "assets/img/t-4.png");

const titles = [
    "This is Video # 01 on Youtube",
    "This is Video # 02 on Youtube",
    "This is Video # 03 on Youtube",
    "This is Video # 04 on Youtube",
    "This is Video # 05 on Youtube",
    "This is Video # 06 on Youtube",
    "This is Video # 07 on Youtube",
    "This is Video # 08 on Youtube",
    "This is Video # 09 on Youtube",
    "This is Video # 10 on Youtube",
];

const Ch_names = [
    "Web Dev Simplified",
    "CodeWithHarry",
    "Tech Dastak",
    "CodeWithHarry",
    "Tech Dastak",
    "Traversy Media",
    "Tech Dastak",
    "MHN Creators",
    "Traversy Media",
    "Apna College",
];

for (let i = 0; i < titles.length; i++) {
    const randomViews = Math.floor(Math.random() * 10000000);
    const randommonths = Math.floor(Math.random() * 11 + 1);
    const randomTimestamp = `${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
    createCard(`${titles[i]}`, `assets/img/c-${i+1}.png`, `${Ch_names[i]}`, randomViews, randommonths, randomTimestamp, `assets/img/t-${i+1}.png`);
}
for (let i = 0; i < titles.length; i++) {
    const randomViews = Math.floor(Math.random() * 10000000);
    const randommonths = Math.floor(Math.random() * 11 + 1);
    const randomTimestamp = `${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
    createCard(`${titles[i]}`, `assets/img/c-${i+1}.png`, `${Ch_names[i]}`, randomViews, randommonths, randomTimestamp, `assets/img/t-${i+1}.png`);
}