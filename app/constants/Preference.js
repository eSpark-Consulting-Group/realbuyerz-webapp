export const AGENT_PREFERENCES = {
    updates: [
        {
            title: 'Email Notification',
            description: 'Allow to receive email notification',
            value: false
        },
        {
            title: 'NewsLetters',
            description: 'Allow to stay updated & receive newsletter',
            value: false
        },
        {
            title: 'Automated Reports',
            description: 'Allow to send us reports automatically incase of any issue',
            value: false
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
