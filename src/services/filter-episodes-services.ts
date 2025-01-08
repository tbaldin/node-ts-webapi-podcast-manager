import { PodcastTransferModelDTO } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
 ): Promise<PodcastTransferModelDTO> => {
    //Define a interface de retorno
    let responseFormat: PodcastTransferModelDTO = {
        statusCode: 0,
        body: []
    };

        //buscando os dados de fato
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //Verifico se tem conteúdo
    responseFormat.statusCode = 
    data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
/*    if(data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;        
    } else {
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }*/

    responseFormat.body = data
    return responseFormat;
}