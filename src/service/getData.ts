export const getData = async (mbti: string) =>
  await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&q=${mbti}&key=AIzaSyAd8UZBoX49bbMBbn57wzLY-Ao7jZf7tdU`,
  ).then(
    async (res) =>
      (await res.json()) as { items: { id: { videoId: string }; snippet: { title: string; thumbnails: { default: { url: string } } } }[] },
  );
