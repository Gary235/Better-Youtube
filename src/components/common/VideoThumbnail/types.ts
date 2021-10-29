import ISnippet from "@/types/snippet";
import IStatistics from "@/types/statistics";

export default interface IVideoThumbnailProps {
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}
