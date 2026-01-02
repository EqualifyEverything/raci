export const people = [
    { id: 'blake', name: 'Blake' },
    { id: 'gemma', name: 'Jemma' },
    { id: 'stefin', name: 'Stefin' },
    { id: 'trey', name: 'Trey' },
    { id: 'amanda', name: 'Amanda' },
    { id: 'helen', name: 'Helen' },
    { id: 'chris', name: 'Chris' },
    { id: 'brother_j', name: 'Brother J' },
    { id: 'ck', name: 'CK' },
    { id: 'michelle', name: 'Michelle' },
    { id: 'michael', name: 'Michael' },
];

export const areas = [
    {
        id: 'fundraising',
        label: 'Fundraising',
        r: ['blake'],
        a: ['gemma'],
        c: ['stefin', 'trey', 'amanda'],
        i: ['chris', 'brother_j', 'ck', 'helen', 'michelle']
    },
    {
        id: 'support',
        label: 'Support',
        r: ['michael'],
        a: ['helen'],
        c: ['trey', 'gemma', 'blake', 'amanda'],
        i: ['chris', 'stefin', 'brother_j', 'ck', 'michelle']
    },
    {
        id: 'training',
        label: 'Training',
        r: ['amanda'],
        a: ['blake'],
        c: ['trey', 'gemma', 'helen'],
        i: ['chris', 'brother_j', 'ck', 'stefin', 'michelle']
    },
    {
        id: 'feature_buildout',
        label: 'Feature Buildout',
        r: ['trey'],
        a: ['blake'],
        c: ['chris', 'stefin', 'gemma', 'ck', 'amanda'],
        i: ['helen', 'brother_j', 'michelle']
    },
    {
        id: 'fixes',
        label: 'Fixes',
        r: ['trey'],
        a: ['blake'],
        c: ['michael', 'chris', 'ck', 'amanda', 'helen'],
        i: ['gemma', 'stefin', 'brother_j', 'michelle']
    },
    {
        id: 'project_management',
        label: 'Project Management',
        r: ['stefin'],
        a: ['blake'],
        c: ['gemma', 'trey', 'amanda'],
        i: ['chris', 'brother_j', 'ck', 'helen', 'michelle']
    },
    {
        id: 'accessibility',
        label: 'Accessibility',
        r: ['ck'],
        a: ['blake'],
        c: ['helen', 'brother_j', 'trey'],
        i: ['chris', 'gemma', 'stefin', 'amanda', 'michelle']
    },
    {
        id: 'budget',
        label: 'Budget',
        r: ['blake'],
        a: ['gemma'],
        c: ['stefin', 'trey', 'amanda'],
        i: ['chris', 'brother_j', 'ck', 'helen', 'michelle']
    },
    {
        id: 'release',
        label: 'Release',
        r: ['amanda'],
        a: ['blake'],
        c: ['gemma', 'trey', 'helen', 'stefin'],
        i: ['chris', 'brother_j', 'ck', 'michelle', 'michael']
    },
    {
        id: 'community',
        label: 'Community',
        r: ['stefin'],
        a: ['blake'],
        c: ['gemma', 'trey', 'amanda'],
        i: ['chris', 'brother_j', 'ck', 'helen', 'michelle']
    },
    {
        id: 'milestones',
        label: 'Milestones',
        r: ['blake'],
        a: ['gemma'],
        c: ['stefin', 'trey', 'amanda'],
        i: ['chris', 'brother_j', 'ck', 'helen', 'michelle']
    }
];

export const roleDefinitions = {
    R: {
        title: 'Responsible',
        description: 'The person who performs the work or completes the task.',
        color: '#10b981'
    },
    A: {
        title: 'Accountable',
        description: 'The person who is ultimately answerable for the correct and thorough completion of the task.',
        color: '#f59e0b'
    },
    C: {
        title: 'Consulted',
        description: 'Those whose opinions are sought, typically subject-matter experts.',
        color: '#3b82f6'
    },
    I: {
        title: 'Informed',
        description: 'Those who are kept up-to-date on progress or completion.',
        color: '#6b7280'
    }
};
