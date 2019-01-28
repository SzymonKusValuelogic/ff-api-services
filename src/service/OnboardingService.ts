import {APIClient, APIMapping} from '../http';
import {AxiosResponse} from 'axios';

export class OnboardingService extends APIClient {
    constructor() {
        super(APIMapping.onboardingService);
    }

    /**
     * Onboards the current user and triggers all the necessary steps
     * @returns {Promise<AxiosResponse>}
     */
    onboardCurrentUser(): Promise<AxiosResponse> {
        return this.invokeApi('/customer', 'POST');
    }

    setupAccount(bundleName: string): Promise<AxiosResponse> {
        const queryParams: any = {
            bundleName: bundleName
        };

        return this.invokeApi('/customer/setup', 'POST', undefined, {queryParams});
    }

    createNewSubscription(numberOfUsers: string) {
        const queryParams: any = {
            numberOfUsers: numberOfUsers
        };
        return this.invokeApi('/buypage/generateUrl', 'POST', undefined, {queryParams});
    }

    getQualificationQuestions() {
        return this.invokeApi('/qualifications', 'GET');
    }

    answerQuestion(questionId: number, answer: any) {
        return this.invokeApi('/qualifications/answer/' + questionId, 'POST', {answer});
    }

}

export default new OnboardingService();