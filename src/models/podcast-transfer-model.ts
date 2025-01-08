import { PodcastModel } from "./podcast-model";

export interface PodcastTransferModelDTO {
    statusCode: number;
    body: PodcastModel[];
}