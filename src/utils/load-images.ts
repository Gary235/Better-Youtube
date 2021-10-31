const loadImages = async (promises, videoIds) => {
  console.log({ promises });

  const channelsInfo = await Promise.all(promises);
  channelsInfo.forEach((channelInfo: any, i) => {
    const channel = channelInfo.data.items[0];

    const el: any = document.querySelector(
      `#channel-photo-${channel.id}-${videoIds[i]}`
    );
    console.log({ el, channelInfo });
    channel && (el.src = channel.snippet.thumbnails.medium.url);
  });
};

export default loadImages;
