import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-epidodes-services"
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModelDTO } from "../models/podcast-transfer-model";

const DEFAULT_CONTENT = {"Content-Type": ContentType.JSON};

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) =>{

    const content: PodcastTransferModelDTO = await serviceListEpisodes();

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));
    res.end();
};

export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    const content: PodcastTransferModelDTO = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));
    res.end();
}