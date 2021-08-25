export class APIService {
    constructor(private readonly serviceName: string) {
        this.serviceName = serviceName;
    }

    get name() {
        return this.serviceName;
    }
}

export class LambdaAPIService extends APIService {
    constructor(serviceName: string, private readonly forceUrl: string | undefined = undefined) {
        super(serviceName);
        this.forceUrl = forceUrl;
    }

    get url() {
        return this.forceUrl;
    }
}

export class S3APIService extends APIService {
    constructor(serviceName: string, private readonly forceUrl: string | undefined = undefined) {
        super(serviceName);
        this.forceUrl = forceUrl;
    }

    get url() {
        return this.forceUrl;
    }
}

const APIMapping = {
    aclGroupService: new APIService('acl-group-service'),
    adminTokenService: new APIService('admin-token-service'),
    agentRecommendationService: new APIService('agent-recommendation-service'),
    appointmentBookingService: new APIService('appointment-booking-service'),
    behaviourService: new APIService('behaviour-service'),
    caasManamgentService: new APIService('caas-management-service'),
    cognitoClientService: new APIService('cognito-client-service'),
    commissionCalculationService: new APIService('commission-calculation-service'),
    companyService: new APIService('company-service'),
    componentService: new APIService('component-ui-service'),
    contactService: new APIService('contact-service'),
    customerLegitimationArchiveService: new APIService('customer-legitimation-archive-service'),
    dynamicLayoutService: new APIService('dynamic-layout-service'),
    emailService: new APIService('email-service'),
    entitlementService: new LambdaAPIService('entitlement-lambda'),
    interactiveExposeV2LambdaService: new LambdaAPIService('iex2-expose-lambda'),
    interactiveExposeV2S3Service: new S3APIService('iex2-expose'),
    // entitlementService: new LambdaAPIService('entitlement-lambda', 'http://localhost:3001/offline'), // for local offline usage
    entityExportService: new APIService('entity-export-service'),
    entityService: new APIService('entity-service'),
    entityShareService: new APIService('entity-share-service'),
    excelExporterService: new APIService('excel-exporter-service'),
    flowfactExporterInternalService: new APIService('flowfact-exporter-internal-service'),
    flywheelService: new APIService('flywheel-service'),
    formService: new APIService('form-service'),
    fullTextSearchService: new APIService('full-text-search-service'),
    funnelService: new APIService('funnel-service'),
    gdprService: new APIService('gdpr-service'),
    geoInformationService: new APIService('geo-information-service'),
    geolocationService: new APIService('geolocation-service'),
    importPreparationService: new APIService('import-preparation-service'),
    importerFlowFactTransferService: new APIService('importer-flowfact-transfer-service'),
    inquiryService: new APIService('inquiry-service'),
    interactiveExposeDeliveryService: new APIService('interactive-expose-delivery-service'),
    interactiveExposeService: new APIService('interactive-expose-service'),
    interactiveExposeStatisticsService: new APIService('interactive-expose-statistics-service'),
    matchmakingService: new APIService('matchmaking-service'),
    nylasService: new APIService('nylas-service'),
    nylasContactSyncService: new APIService('nylas-contact-sync-service'),
    multimediaService: new APIService('multimedia-service'),
    office365AuthenticationService: new APIService('office365-authentication-service'),
    openimmoPublishService: new APIService('openimmo-publish-service'),
    portalManagementService: new APIService('portal-management-service'),
    presetService: new APIService('preset-service'),
    propertyMarketingPhaseService: new APIService('property-marketing-phase-service'),
    relogService: new APIService('relog-service'),
    sampleDataService: new APIService('sampledata-service'),
    schemaService: new APIService('schema-service'),
    searchService: new APIService('search-service'),
    slackIntegrationService: new APIService('slack-integration-service'),
    teamsIntegrationService: new APIService('teams-integration-service'),
    spregnetterService: new APIService('sprengnetter-service'),
    taggingService: new APIService('tagging-service'),
    tagService: new APIService('tag-service'),
    templateService: new APIService('template-service'),
    proofOfActivityService: new APIService('proof-of-activity-service'),
    trialLicenseServive: new APIService('trial-license-service'),
    userService: new APIService('user-service'),
    viewDefinitionService: new APIService('view-definition-service'),
    historyModuleService: new APIService('history-module-service'),
    onboardingService: new APIService('onboarding-service'),
    csvToEntityImporterService: new APIService('csv-to-entity-importer-service'),
    omniChannelService: new APIService('omnichannel-service'),
    clientNotificationService: new APIService('client-notification-service'),
    is24PublishService: new APIService('is24-publish-service'),
    is24LeadService: new APIService('is24-lead-service'),
    is24EntitlementService: new APIService('is24-entitlement-service'),
    filterDefinitionService: new APIService('filter-definition-service'),
    contractService: new APIService('contract-service'),
    softLinksEntityService: new APIService('softlinks-entity-service'),
    openimmoFtpAccessService: new APIService('openimmo-ftp-access-service'),
    openimmoImporterService: new APIService('openimmo-importer-service'),
    workflowService: new APIService('workflow-service'),
    is24ImportService: new APIService('is24-import-service'),
    documentGeneratorService: new APIService('document-generator-service'),
    documentTemplateService: new APIService('document-template-service'),
    lambdaProxyService: new APIService('lambda'),
    placeholderService: new APIService('placeholder-service'),
    smsIngestionService: new APIService('sms-ingestion-service'),
    smsService: new APIService('sms-service'),
    supportService: new APIService('support-service'),
    everSignService: new APIService('eversign-service'),
    mailchimpService: new APIService('mailchimp-sync-integration-service'),
    releaseNotesService: new APIService('release-notes-service'),
    userLogout: new APIService('user-logout-service'),
    entityFieldCalculationService: new APIService('entity-field-calculation-service'),
    alternativeCompanyDataService: new APIService('alternative-company-data-service'),
};

export default APIMapping;
