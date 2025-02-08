function createCard(title, c_img, cname, views, timestamp, thumbnailImg) {
    // Create the main card container
    const card = document.createElement('div');
    card.className = 'card';

    // Create the thumbnail div
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.className = 'thumbnail';

    // Create and set thumbnail image
    const thumbnailImage = document.createElement('img');
    thumbnailImage.height = 220;
    thumbnailImage.src = thumbnailImg;
    thumbnailImage.alt = 'Thumbnail';

    // Create and set timestamp
    const timestampElement = document.createElement('span');
    timestampElement.className = 'timestamp';
    timestampElement.textContent = timestamp;

    // Append thumbnail image and timestamp to thumbnail div
    thumbnailDiv.appendChild(thumbnailImage);
    thumbnailDiv.appendChild(timestampElement);

    // Create the video-about section
    const videoAboutDiv = document.createElement('div');
    videoAboutDiv.className = 'video-about';

    // Create and set the channel image
    const channelImg = document.createElement('img');
    channelImg.className = 'C-img';
    channelImg.src = c_img;
    channelImg.alt = 'Channel Image';

    // Create and set the title
    const titleElement = document.createElement('span');
    titleElement.className = 'title';
    titleElement.textContent = title;

    // Create and set the channel name
    const cnameElement = document.createElement('span');
    cnameElement.className = 'Cname';
    cnameElement.textContent = cname;

    // Create and set views & time
    const viewsTimeElement = document.createElement('span');
    viewsTimeElement.className = 'views-time';
    viewsTimeElement.textContent = `${formatViews(views)} ${'5 months'}`;

    // Create the 3-dots icon
    const threeDotsIcon = document.createElement('img');
    threeDotsIcon.className = 'threedots';
    threeDotsIcon.src = 'assets/icons/3dot-icon.svg';
    threeDotsIcon.alt = '3 dots icon';

    // Append all elements to video-about div
    videoAboutDiv.appendChild(channelImg);
    videoAboutDiv.appendChild(titleElement);
    videoAboutDiv.appendChild(cnameElement);
    videoAboutDiv.appendChild(viewsTimeElement);
    videoAboutDiv.appendChild(threeDotsIcon);

    // Append thumbnail div and video-about div to the card
    card.appendChild(thumbnailDiv);
    card.appendChild(videoAboutDiv);

    // Append the card to the main-content container
    document.getElementById('card').appendChild(card);
}

// Function to format views in "K" or "M" format
function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M views •';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K views •';
    } else {
        return views + ' views •';
    }
}

// Example usage: dynamically create multiple video cards
const videoData = [
    { title: 'How to Learn JavaScript', c_img: 'assets/img/c-1.png', cname: 'CodeWithHarry', views: 100000, timestamp: '34:02', thumbnailImg: 'assets/img/t-4.png' },
    { title: 'HTML & CSS Basics', c_img: 'assets/img/c-2.png', cname: 'Web Dev Simplified', views: 500000, timestamp: '12:31', thumbnailImg: 'assets/img/t-5.png' },
    { title: 'CSS Flexbox Guide', c_img: 'assets/img/c-3.png', cname: 'Traversy Media', views: 200000, timestamp: '09:42', thumbnailImg: 'assets/img/t-6.png' },
    { title: 'How to Learn JavaScript', c_img: 'assets/img/c-4.png', cname: 'CodeWithHarry', views: 100000, timestamp: '34:02', thumbnailImg: 'assets/img/t-1.png' },
    { title: 'HTML & CSS Basics', c_img: 'assets/img/c-5.png', cname: 'Web Dev Simplified', views: 500000, timestamp: '12:31', thumbnailImg: 'assets/img/t-2.png' },
    { title: 'CSS Flexbox Guide', c_img: 'assets/img/c-6.png', cname: 'Traversy Media', views: 200000, timestamp: '09:42', thumbnailImg: 'assets/img/t-3.png' }
];

// Loop through video data and create cards dynamically
videoData.forEach(video => {
    createCard(video.title, video.c_img, video.cname, video.views, video.timestamp, video.thumbnailImg);
});



