import {APIClient, APIMapping} from '../../http';

export class RespondController extends APIClient {
    constructor() {
        super(APIMapping.emailService);
    }

    /**
     * Prepares reply draft_email entity.
     * @param emailEntityId
     *      The id of a entity (schema email)
     * @param replyEmailBody
     *      Body of reply email.
     */
    async replyMail(emailEntityId: string, replyEmailBody: string) {
        return this.replyMailCall(emailEntityId, replyEmailBody, false);
    }

    /**
     * Prepares reply draft_email entity.
     * @param emailEntityId
     *      The id of a entity (schema email)
     * @param replyEmailBody
     *      Body of reply email.
     */
    async replyAllMail(emailEntityId: string, replyEmailBody: string) {
        return this.replyMailCall(emailEntityId, replyEmailBody, true);
    }

    private async replyMailCall(emailEntityId: string, replyEmailBody: string, replyAll: boolean) {
        return this.invokeApiWithErrorHandling(`/emails/reply`, 'POST', {
            emailEntityId,
            replyEmailBody,
            replyAll,
        }, {
            headers: {
                'x-ff-version': 2,
            }
        });
    }

    /**
     * Prepares forward draft_email entity.
     * @param emailEntityId
     *      The id of a entity (schema email)
     */
    async forwardMail(emailEntityId: string) {
        return this.invokeApiWithErrorHandling(`/emails/forward/${emailEntityId}`, 'POST', undefined, {
            headers: {
                'x-ff-version': 2,
            }
        });
    }
}
