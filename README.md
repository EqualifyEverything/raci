# UIC: Roles & Responsibilities

Welcome to the **UIC Roles & Responsibilities** repository. This project serves as an interactive RACI (Responsible, Accountable, Consulted, and Informed) matrix, providing clear governance and ownership for the various work areas within the UIC Accessibility Engineering Team.

## 🎯 Purpose

In a fast-growing engineering team, clarity is key. This document—and the accompanying interactive tool—aims to:
- **Define Ownership**: Clearly identify who is responsible and accountable for specific domains.
- **Streamline Communication**: Ensure the right people are consulted and informed at the right stages.
- **Enhance Efficiency**: Reduce ambiguity in decision-making and task execution.

---

## 🏗 The RACI Framework

We use the RACI model to categorize participation by various roles in completing tasks or deliverables:

| Symbol | Role | Description |
| :---: | :--- | :--- |
| **R** | **Responsible** | The person who performs the work to complete the task. |
| **A** | **Accountable** | The person who is ultimately answerable for the correct and thorough completion of the task. |
| **C** | **Consulted** | Those whose opinions are sought, typically subject-matter experts. |
| **I** | **Informed** | Those who are kept up-to-date on progress or completion. |

---

## 📂 Core Work Areas

Our team's responsibilities are divided into several key pillars:

- **Fundraising**: Securing the resources necessary for our mission.
- **Support**: Assisting users and maintaining high satisfaction.
- **Training**: Empowering the community through knowledge sharing.
- **Feature Buildout**: Architecting and developing new capabilities.
- **Fixes**: Ensuring stability and addressing technical debt.
- **Roadmap**: Strategic planning and future vision.
- **Accessibility**: Our core mission—ensuring technology works for everyone.
- **Budget**: Managing financial resources and sustainability.

---

## 🚀 Interactive Tool

While this README provides the overview, we have built a **Live Responsibility Matrix** that allows you to:
- **Filter by Team Member**: See exactly what your R/A/C/I assignments are.
- **Toggle Views**: Switch between a card-based "Grid View" and a comprehensive "Table View".
- **Dynamic Updates**: As our team grows, this tool evolves.

### Accessing the Tool
The interactive document is deployed at: **[Equalify RACI Matrix](https://equalifyeverything.github.io/raci/)**

### 👥 Team Directory (Quick Links)
Click a name below to see their specific roles and responsibilities in the interactive matrix:

| Team Member | Direct View |
| :--- | :--- |
| **New Support Hire** | [View Roles](https://equalifyeverything.github.io/raci/?person=new_support_hire) |
| **Blake** | [View Roles](https://equalifyeverything.github.io/raci/?person=blake) |
| **Brother J** | [View Roles](https://equalifyeverything.github.io/raci/?person=brother_j) |
| **Chris** | [View Roles](https://equalifyeverything.github.io/raci/?person=chris) |
| **CK** | [View Roles](https://equalifyeverything.github.io/raci/?person=ck) |
| **Jemma** | [View Roles](https://equalifyeverything.github.io/raci/?person=gemma) |
| **Helen** | [View Roles](https://equalifyeverything.github.io/raci/?person=helen) |
| **Michelle** | [View Roles](https://equalifyeverything.github.io/raci/?person=michelle) |
| **Stefin** | [View Roles](https://equalifyeverything.github.io/raci/?person=stefin) |
| **Trey** | [View Roles](https://equalifyeverything.github.io/raci/?person=trey) |

---

## 🛠 Developer Guide

If you are a developer looking to update the matrix or contribute to the tool:

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or higher recommended)
- `npm` (usually bundled with Node.js)

### Local Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/EqualifyEverything/raci.git
   cd raci
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run in development mode:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to see your changes in real-time.

### Deployment
This project is configured for automated deployment to GitHub Pages via GitHub Actions. Any merge to the `main` branch will trigger a redeploy of the interactive document.

---

## 🤝 Contributing

To update roles or people, modify the `src/data.js` file. The UI will automatically reflect these changes.

---

> [!TIP]
> **UIC** is dedicated to making the web accessible to everyone. Every role defined here supports that mission.
