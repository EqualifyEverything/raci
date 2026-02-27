export const people = [
    { id: 'blake', name: 'Blake' },
    { id: 'gemma', name: 'Jemma' },
    { id: 'stefin', name: 'Stefin' },
    { id: 'trey', name: 'Trey' },
    { id: 'new_support_hire', name: 'New Support Hire' },
    { id: 'amanda', name: 'Amanda' },
    { id: 'helen', name: 'Helen' },
    { id: 'chris', name: 'Chris' },
    { id: 'brother_j', name: 'Brother J' },
    { id: 'ck', name: 'CK' },
    { id: 'michelle', name: 'Michelle' },
    { id: 'michael', name: 'Michael' },
    { id: 'lucy', name: 'Lucy' },
    { id: 'asya', name: 'Asya' },
    { id: 'jason', name: 'Jason' },
    { id: 'dylan', name: 'Dylan' }
];

export const projects = [
    { id: 'dase', name: 'DASE' },
    { id: 'equalify', name: 'Equalify' },
    { id: 'ai_leaders', name: 'AI Leaders' },
    { id: 'open_source_fund', name: 'Open Source Fund' }
];

export const areas = [
    {
        id: 'dase_team_management',
        label: 'Team Management',
        project: 'dase',
        objective: 'Overarchingly manage the areas in this RACI chart.',
        meetingRegularity: 'Monthly (1st Mondays)',
        informedRegularity: 'On updates',
        r: ['blake'],
        a: ['gemma'],
        c: ['trey', 'chris', 'stefin'],
        i: ['new_support_hire', 'amanda', 'helen', 'brother_j', 'ck', 'michelle', 'michael', 'lucy', 'asya', 'dylan']
    },
    {
        id: 'support',
        label: 'Support',
        project: 'equalify',
        objective: 'Provide timely and effective assistance to Equalify users and maintain high satisfaction through comprehensive support services.',
        meetingRegularity: 'Monthly (1st Fridays)',
        informedRegularity: 'On updates',
        r: ['new_support_hire'],
        a: ['amanda'],
        c: ['chris', 'ck', 'trey', 'dylan', 'blake'],
        i: ['gemma']
    },
    {
        id: 'hub_development',
        label: 'Hub',
        project: 'equalify',
        objective: 'Develop, maintain, and innovate the core Equalify Hub platform to serve as the central accessibility management system.',
        meetingRegularity: 'Monthly (2nd Tuesdays)',
        informedRegularity: 'On updates',
        r: ['chris'],
        a: ['blake'],
        c: ['trey', 'amanda', 'ck', 'new_support_hire'],
        i: ['gemma']
    },
    {
        id: 'reflow_development',
        label: 'Reflow',
        project: 'equalify',
        objective: 'Direct the architecture, development, and cross-project integration of the Reflow design system for UI consistency.',
        meetingRegularity: 'Monthly (3rd Wednesdays)',
        informedRegularity: 'On updates',
        r: ['dylan'],
        a: ['blake'],
        c: ['gemma'],
        i: ['chris', 'trey', 'ck', 'amanda', 'new_support_hire']
    },
    {
        id: 'dashboard_development',
        label: 'Dashboard Development',
        project: 'equalify',
        objective: 'Design and implement interactive, data-driven dashboards for visualizing complex accessibility metrics and trends.',
        meetingRegularity: 'Monthly (1st Thursdays)',
        informedRegularity: 'On updates',
        r: ['trey'],
        a: ['blake'],
        c: ['chris'],
        i: ['ck', 'new_support_hire', 'gemma', 'amanda']
    },
    {
        id: 'equalify_wp_plugin',
        label: 'Dashboard WP Plugin',
        project: 'equalify',
        objective: 'Maintain and update the Equalify Dashboard WordPress Plugin.',
        meetingRegularity: 'Monthly (1st Thursdays)',
        informedRegularity: 'On updates',
        r: ['trey'],
        a: ['blake'],
        c: ['chris'],
        i: ['ck', 'new_support_hire', 'gemma', 'amanda']
    },
    {
        id: 'accessibility',
        label: 'Accessibility',
        project: 'equalify',
        objective: 'Enforce and validate rigorous accessibility standards across all Equalify products to ensure an inclusive user experience.',
        meetingRegularity: 'Monthly (1st Tuesdays)',
        informedRegularity: 'On updates',
        r: ['ck'],
        a: ['chris'],
        c: ['brother_j', 'trey'],
        i: ['blake', 'gemma']
    },
    {
        id: 'equalify_release',
        label: 'Release',
        project: 'equalify',
        objective: 'Manage the full lifecycle of software releases, ensuring stability, performance, and seamless deployment of new features.',
        meetingRegularity: 'Monthly (3rd Thursdays)',
        informedRegularity: 'On updates',
        r: ['amanda'],
        a: ['trey'],
        c: ['blake', 'chris', 'ck', 'new_support_hire'],
        i: ['gemma']
    },
    {
        id: 'user_testing_extension',
        label: 'User Testing Extension',
        project: 'equalify',
        objective: 'Develop and maintain specialized tools for gathering and analyzing direct user feedback on accessibility barriers.',
        meetingRegularity: 'Monthly (2nd Fridays)',
        informedRegularity: 'On updates',
        r: ['ck'],
        a: ['chris'],
        c: ['brother_j', 'trey'],
        i: ['blake', 'gemma', 'amanda', 'new_support_hire']
    },
    {
        id: 'operations',
        label: 'Operations',
        project: 'open_source_fund',
        objective: 'Streamline administrative workflows, internal communications, and operational efficiency for the Open Source Fund.',
        meetingRegularity: 'Monthly (3rd Tuesday)',
        informedRegularity: 'On updates',
        r: ['michelle'],
        a: ['blake'],
        c: ['stefin'],
        i: ['gemma']
    },
    {
        id: 'board_creation',
        label: 'Management',
        project: 'open_source_fund',
        objective: 'Oversee strategic governance, stakeholder relations, and high-level fundraising initiatives for the fund.',
        meetingRegularity: 'Monthly (2nd Wednesdays)',
        informedRegularity: 'On updates',
        r: ['blake'],
        a: ['jason'],
        c: ['stefin', 'gemma'],
        i: ['michelle']
    },
    {
        id: 'admissions',
        label: 'Student Services',
        project: 'ai_leaders',
        objective: 'Execute targeted recruitment, streamline the enrollment process, and provide comprehensive support to students throughout the AI Leaders program.',
        meetingRegularity: 'Monthly (1st Wednesdays)',
        informedRegularity: 'On updates',
        r: ['asya'],
        a: ['stefin'],
        c: ['blake'],
        i: ['gemma', 'jason']
    },
    {
        id: 'ail_management',
        label: 'Management',
        project: 'ai_leaders',
        objective: 'Provide strategic direction and administrative oversight for the AI Leaders program and its constituent representation.',
        meetingRegularity: 'Monthly (2nd Thursdays)',
        informedRegularity: 'On updates',
        r: ['stefin'],
        a: ['blake'],
        c: ['gemma'],
        i: ['jason']
    },
    {
        id: 'ail_platform_buildout',
        label: 'Platform Buildout',
        project: 'ai_leaders',
        objective: 'Direct the initial buildout, support, and transition of the AI Leaders platform to another engineering team on May 14.',
        meetingRegularity: 'Weekly (Tuesdays)',
        informedRegularity: 'On updates',
        r: ['chris'],
        a: ['blake'],
        c: ['stefin', 'gemma'],
        i: ['jason']
    }
];

export const roleDefinitions = {
    R: {
        title: 'Responsible',
        description: 'The person who performs the work or completes the task.',
        color: '#d50032'
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

export const sops = [
    {
        id: 'sop_dase_management',
        title: 'Procedure and Management',
        project: 'dase',
        area: 'dase_team_management',
        responsible: 'blake',
        accountable: 'gemma',
        effectiveDate: '2026-02-27',
        reviewCadence: 'Monthly (1st Mondays)',
        reportRegularity: 'On Updates',
        content: `
<h3>1) Overview</h3>
<p>This SOP overarchingly details how to manage the areas in this RACI chart. <mark><strong>The SOP's primary focus is to empower individual ownership and streamline communication to maximize the performance of team projects.</strong></mark> Each responsible party can create an SOP with those accountable for their RACI area. SOPs are agreements laying out clear objectives and communication strategies that the Responsible and Accountable parties agree to.</p>
<h3>2) Communication Procedures</h3>
<ol>
    <li>Responsible and Accountable parties <strong>collaborate continuously</strong> on the development of the area.</li>
    <li>Those accountable <strong>support</strong> the presentation and <strong>validate</strong> area progress.</li>
    <li>The Responsible person <strong>presents</strong> updates and <strong>solicits</strong> feedback from those who need to be consulted during the regular update meeting.</li>
    <li>Those informed <strong>receive update reports</strong> from the responsible person within the agreed regularity, stipulated in the SOP.</li>
</ol>
<h3>3) Success and Failure Verification</h3>
<p><strong>Success:</strong> Team operations remain strictly within the communication procedures outlined in this document.</p>
<p><strong>Failure:</strong> Procedures are circumnavigated, leading to operational inefficiency.</p>
<p><strong>Failure Examples:</strong> Additional meetings or communication required by parties who are neither Responsible nor Accountable for the specific area.</p>
<h3>4) Remediation</h3>
<p>In the event of failure, the team is expected to work down this sequential list:</p>
<ol>
    <li>Address the system that created the bug causing the failure.</li>
    <li>Increase consultation meeting regularity for the impacted area.</li>
    <li>Update RACI items to ensure clarity and alignment with operational needs. Updating the RACI is the final end of the remediation process and should be prevented at all costs.</li>
</ol>
<h3>5) Procedure Flow Diagram</h3>
<pre class="mermaid">
graph TD
    Start((Operational Start)) --> Process[Continuous Collaboration<br/>R & A Parties]
    Process --> Prep[Accountable Support &<br/>Validate Progress]
    Prep --> Presentation[Responsible Presents & Solicits<br/>Consulted Feedback at Meeting]
    Presentation --> Informed[Informed Receive Regular Update Reports]
    Informed --> SuccessCheck{Procedures Followed?}
    
    SuccessCheck -- Yes --> Success([Success: Efficient Operations])
    SuccessCheck -- No --> Failure([Failure: Procedures Circumnavigated])
    
    Failure --> Remediation1[1. Address System Bug<br/>Causing Failure]
    Remediation1 --> Remediation2[2. Increase Consultation<br/>Meeting Regularity]
    Remediation2 --> Remediation3[3. Update RACI Items<br/>Final End - Prevent if possible]
    
    Success --> Start
    Remediation3 --> Start
</pre>
        `
    },
    {
        id: 'sop_ospo_transition',
        title: 'Transition to Open Source Program Office',
        project: 'open_source_fund',
        area: 'operations',
        responsible: 'michelle',
        accountable: 'blake',
        effectiveDate: '2026-02-27',
        reviewCadence: 'Quarterly',
        reportRegularity: 'On Updates',
        content: `
<h3>1) Overview</h3>
<p>This SOP outlines the procedure for transitioning the Open Source Fund's current operations into a formal Open Source Program Office (OSPO).</p>
<h3>2) Key Phases</h3>
<ul>
    <li><strong>Assessment:</strong> Evaluate current open source activities, policies, and resources.</li>
    <li><strong>Planning:</strong> Define the OSPO's mission, structure, and operational framework.</li>
    <li><strong>Implementation:</strong> Establish tools, workflows, and training programs.</li>
    <li><strong>Review:</strong> Continuously monitor and iterate on the OSPO's performance.</li>
</ul>
        `
    }
];
