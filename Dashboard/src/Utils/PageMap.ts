enum PageMap {
    INIT = 'INIT',
    INIT_PROJECT = 'INIT_PROJECT',

    // ONBOARDING
    WELCOME = 'WELCOME',

    //SSO
    PROJECT_SSO = 'PROJECT_SSO',

    HOME = 'HOME',
    HOME_NOT_OPERATIONAL_MONITORS = 'HOME_NOT_OPERATIONAL_MONITORS',
    HOME_ONGOING_SCHEDULED_MAINTENANCE_EVENTS = 'HOME_ONGOING_SCHEDULED_MAINTENANCE_EVENTS',

    INCIDENTS = 'INCIDENTS',
    UNRESOLVED_INCIDENTS = 'UNRESOLVED_INCIDENTS',
    INCIDENT_VIEW = 'INCIDENT_VIEW',
    INCIDENT_VIEW_DELETE = 'INCIDENT_VIEW_DELETE',
    INCIDENT_VIEW_STATE_TIMELINE = 'INCIDENT_VIEW_STATE_TIMELINE',
    INCIDENT_INTERNAL_NOTE = 'INCIDENT_INTERNAL_NOTE',
    INCIDENT_PUBLIC_NOTE = 'INCIDENT_PUBLIC_NOTE',
    INCIDENT_VIEW_CUSTOM_FIELDS = 'INCIDENT_VIEW_CUSTOM_FIELDS',

    SCHEDULED_MAINTENANCE_EVENTS = 'SCHEDULED_MAINTENANCE_EVENTS',
    ONGOING_SCHEDULED_MAINTENANCE_EVENTS = 'ONGOING_SCHEDULED_MAINTENANCE_EVENTS',
    SCHEDULED_MAINTENANCE_VIEW = 'SCHEDULED_MAINTENANCE_VIEW',
    SCHEDULED_MAINTENANCE_VIEW_DELETE = 'SCHEDULED_MAINTENANCE_VIEW_DELETE',
    SCHEDULED_MAINTENANCE_VIEW_STATE_TIMELINE = 'SCHEDULED_MAINTENANCE_VIEW_STATE_TIMELINE',
    SCHEDULED_MAINTENANCE_INTERNAL_NOTE = 'SCHEDULED_MAINTENANCE_INTERNAL_NOTE',
    SCHEDULED_MAINTENANCE_PUBLIC_NOTE = 'SCHEDULED_MAINTENANCE_PUBLIC_NOTE',
    SCHEDULED_MAINTENANCE_VIEW_CUSTOM_FIELDS = 'SCHEDULED_MAINTENANCE_VIEW_CUSTOM_FIELDS',

    MONITORS = 'MONITORS',
    MONITORS_INOPERATIONAL = 'MONITORS_INOPERATIONAL',
    MONITOR_VIEW = 'MONITOR_VIEW',
    MONITOR_VIEW_DELETE = 'MONITOR_VIEW_DELETE',
    MONITOR_VIEW_STATUS_TIMELINE = 'MONITOR_VIEW_STATUS_TIMELINE',
    MONITOR_VIEW_INCIDENTS = 'MONITOR_VIEW_INCIDENTS',
    MONITOR_VIEW_CUSTOM_FIELDS = 'MONITOR_VIEW_CUSTOM_FIELDS',

    STATUS_PAGES = 'STATUS_PAGES',
    STATUS_PAGE_VIEW = 'STATUS_PAGE_VIEW',
    STATUS_PAGE_VIEW_BRANDING = 'STATUS_PAGE_VIEW_BRADNING',
    STATUS_PAGE_VIEW_HEADER_STYLE = 'STATUS_PAGE_VIEW_HEADER_STYLE',
    STATUS_PAGE_VIEW_FOOTER_STYLE = 'STATUS_PAGE_VIEW_FOOTER_STYLE',
    STATUS_PAGE_VIEW_NAVBAR_STYLE = 'STATUS_PAGE_VIEW_NAVBAR_STYLE',
    STATUS_PAGE_VIEW_DELETE = 'STATUS_PAGE_VIEW_DELETE',
    STATUS_PAGE_VIEW_DOMAINS = 'STATUS_PAGE_VIEW_DOMAINS',
    STATUS_PAGE_VIEW_EMBEDDED = 'STATUS_PAGE_VIEW_EMBEDDED',
    STATUS_PAGE_VIEW_ANNOUNCEMENTS = 'STATUS_PAGE_VIEW_ANNOUNCEMENTS',
    STATUS_PAGE_VIEW_EMAIL_SUBSCRIBERS = 'STATUS_PAGE_VIEW_EMAIL_SUBSCRIBERS',
    STATUS_PAGE_VIEW_SMS_SUBSCRIBERS = 'STATUS_PAGE_VIEW_SMS_SUBSCRIBERS',
    STATUS_PAGE_VIEW_WEBHOOK_SUBSCRIBERS = 'STATUS_PAGE_VIEW_WEBHOOK_SUBSCRIBERS',
    STATUS_PAGE_VIEW_RESOURCES = 'STATUS_PAGE_VIEW_RESOURCES',
    STATUS_PAGE_VIEW_ADVANCED_OPTIONS = 'STATUS_PAGE_VIEW_ADVANCED_OPTIONS',
    STATUS_PAGE_VIEW_CUSTOM_HTML_CSS = 'STATUS_PAGE_VIEW_CUSTOM_HTML_CSS',
    STATUS_PAGE_VIEW_GROUPS = 'STATUS_PAGE_VIEW_GROUPS',
    STATUS_PAGE_VIEW_SUBSCRIBER_SETTINGS = 'STATUS_PAGE_VIEW_SUBSCRIBER_SETTINGS',
    STATUS_PAGE_VIEW_PRIVATE_USERS = 'STATUS_PAGE_VIEW_PRIVATE_USERS',
    STATUS_PAGE_VIEW_CUSTOM_FIELDS = 'STATUS_PAGE_VIEW_CUSTOM_FIELDS',
    STATUS_PAGE_VIEW_SSO = 'STATUS_PAGE_VIEW_SSO',

    LOGS = 'LOGS',
    ON_CALL_DUTY = 'ON_CALL_DUTY',
    AUTOMATION_SCRIPTS = 'AUTOMATION_SCRIPTS',
    REPORTS = 'REPORTS',
    ERROR_TRACKER = 'ERROR_TRACKER',

    // Settings Routes
    SETTINGS = 'SETTINGS',
    SETTINGS_DANGERZONE = 'SETTINGS_DANGERZONE',

    // API Keys.
    SETTINGS_APIKEYS = 'SETTINGS_APIKEYS',
    SETTINGS_APIKEY_VIEW = 'SETTINGS_APIKEY_VIEW',
    SETTINGS_CUSTOM_SMTP = 'SETTINGS_CUSTOM_SMTP',

    // Team
    SETTINGS_TEAMS = 'SETTINGS_TEAMS',
    SETTINGS_TEAM_VIEW = 'SETTINGS_TEAM_VIEW',

    // Resource settings.
    SETTINGS_INCIDENTS_STATE = 'SETTINGS_INCIDENTS_STATE',
    SETTINGS_INCIDENTS_SEVERITY = 'SETTINGS_INCIDENTS_SEVERITY',
    SETTINGS_INCIDENT_CUSTOM_FIELDS = 'SETTINGS_INCIDENT_CUSTOM_FIELDS',

    // Status Page
    SETTINGS_STATUS_PAGE_CUSTOM_FIELDS = 'SETTINGS_STATUS_PAGE_CUSTOM_FIELDS',

    // monitors
    SETTINGS_MONITORS_STATUS = 'SETTINGS_MONITORS_STATUS',
    SETTINGS_MONITOR_CUSTOM_FIELDS = 'SETTINGS_MONITOR_CUSTOM_FIELDS',

    // Scheduled Events
    SETTINGS_SCHEDULED_MAINTENANCE_STATE = 'SETTINGS_SCHEDULED_MAINTENANCE_STATE',
    SETTINGS_SCHEDULED_MAINTENANCE_CUSTOM_FIELDS = 'SETTINGS_SCHEDULED_MAINTENANCE_CUSTOM_FIELDS',

    // Labels.
    SETTINGS_LABELS = 'SETTINGS_LABELS',

    // SSO.
    SETTINGS_SSO = 'SETTINGS_SSO',

    // Domains

    SETTINGS_DOMAINS = 'SETTINGS_DOMAINS',

    // BILLING

    SETTINGS_BILLING = 'SETTINGS_BILLING',
    SETTINGS_BILLING_INVOICES = 'SETTINGS_BILLING_INVOICES',

    // Misc
    LOGOUT = 'LOGOUT',
    USER_PROFILE = 'USER_PROFILE',
    ACTIVE_INCIDENTS = 'ACTIVE_INCIDENTS',
    PROJECT_INVITATIONS = 'PROJECT_INVITATIONS',

    // WORKFLOW
    WORKFLOWS = 'WORKFLOWS',
    WORKFLOWS_LOGS = 'WORKFLOWS_LOGS',
    WORKFLOWS_VARIABLES = 'WORKFLOWS_VARIABLES',
    WORKFLOW_VIEW = 'WORKFLOW_VIEW',
    WORKFLOW_DELETE = 'WORKFLOW_DELETE',
    WORKFLOW_BUILDER = 'WORKFLOW_BUILDER',
    WORKFLOW_LOGS = 'WORKFLOW_LOGS',
    WORKFLOW_VARIABLES = 'WORKFLOW_VARIABLES',
}

export default PageMap;
