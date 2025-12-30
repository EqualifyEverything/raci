export const people = [
    { id: 'blake', name: 'Blake' },
    { id: 'gemma', name: 'Gemma' },
    { id: 'stefan', name: 'Stefan' },
    { id: 'trey', name: 'Trey' },
    { id: 'amanda', name: 'Amanda' },
    { id: 'helen', name: 'Helen' },
    { id: 'chris', name: 'Chris' },
    { id: 'brother_j', name: 'Brother J' },
    { id: 'ck', name: 'CK' },
];

export const areas = [
    {
        id: 'budget',
        label: 'Budget',
        r: ['blake'],
        a: ['gemma'],
        c: ['stefan', 'trey', 'amanda', 'helen'],
        i: ['chris', 'brother_j', 'ck']
    },
    {
        id: 'support',
        label: 'Support',
        r: ['amanda'],
        a: ['blake'],
        c: ['helen', 'trey', 'gemma'],
        i: ['chris']
    },
    {
        id: 'training',
        label: 'Training',
        r: ['amanda'],
        a: ['blake'],
        c: ['trey', 'gemma'],
        i: ['chris', 'brother_j', 'ck']
    },
    {
        id: 'feature_buildout',
        label: 'Feature Buildout',
        r: ['trey'],
        a: ['blake'],
        c: ['chris', 'stefan', 'amanda', 'gemma'],
        i: []
    },
    {
        id: 'fixes',
        label: 'Fixes',
        r: ['trey'],
        a: ['blake'],
        c: ['trey', 'amanda'],
        i: ['chris']
    },
    {
        id: 'roadmap',
        label: 'Roadmap',
        r: ['stefan'],
        a: ['blake'],
        c: ['gemma', 'trey', 'amanda'],
        i: ['chris', 'brother_j', 'ck']
    },
    {
        id: 'accessibility',
        label: 'Accessibility',
        r: ['ck'],
        a: ['blake'],
        c: ['amanda', 'helen'],
        i: ['chris']
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
