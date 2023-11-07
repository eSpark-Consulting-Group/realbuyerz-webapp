export const AGENT_PREFERENCES = {
    updates: [
        {
            title: 'Email Notification',
            description: 'Allow to receive email notification',
        },
        {
            title: 'NewsLetters',
            description: 'Allow to stay updated & receive newsletter',
        },
        {
            title: 'Automated Reports',
            description: 'Allow to send us reports automatically incase of any issue',
        },
    ],
    heading: {
        preference: 'Preferences',
    },
    propertySize: [
        {
            label: 'Currency',
            placeholder: 'PKR',
            name: 'currency',
        },
        {
            label: 'Area Unit',
            placeholder: 'Sq.Ft',
            name: 'areaUnit',
        },
    ],
};

export const PROPERTY_AREASIZE_AND_REPORT = {
    report: {
        emailNotification: false,
        newsLetter: false,
        automatedReports: false,
        currency: '',
        areaUnit: '',
    },
};
