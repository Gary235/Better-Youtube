import IThumbnailsKey from "./thumbnails-key";

export default interface ISnippet {
  publishedAt: string;
  title: string;
  thumbnails: {
    default: IThumbnailsKey;
    standard: IThumbnailsKey;
    medium: IThumbnailsKey;
    high: IThumbnailsKey;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
}
