# Project Plan: Business Management Suite (My-Bus)

---

## Information Gathered

After a thorough review of the project requirements, the following key points have been identified:

*   **Core Application:** A web-based software suite for an electrical contracting business, deployable on a shared server (e.g., Namecheap).
*   **Technology:** Must be built using free tools where possible, with offline capabilities (as a Progressive Web App - PWA).
*   **User Experience:** The UI must be user-friendly, customizable, and responsive. Global settings for theming (colors, fonts) and company branding (name, title) are required.
*   **Development Process:** We will follow a structured, iterative process. A plan will be maintained and updated with completed items struck through. Development will focus on the front-end GUI first, followed by backend integration.
*   **Core Modules:**
    1.  **Employee Management:** User accounts, roles (`top admin`, `Company Admin`, `Manager`, etc.), profiles, document uploads, and time/location tracking (Clock in/out with GPS).
    2.  **Customer Management (CRM):** Storing customer information, job details, interaction history, and account status.
    3.  **Contracts:** Generating, sending for e-signature, and storing contracts associated with customers.
    4.  **Document Management:** A central repository for files, with associations to employees or customers.
    5.  **Communications:** Real-time, in-app text messaging and Push-to-Talk (PTT) functionality.
    6.  **Scheduling:** A dispatch board to assign employees to jobs and visualize schedules.
    7.  **Training & Safety:** Tracking employee training, certifications, and equipment compliance checks with alerts.
    8.  **Billing:** Generating invoices and creating reports compatible with accounting software like QuickBooks.
*   **Technical Requirements:** Secure authentication (JWT/OAuth), real-time updates (WebSockets), data encryption, and cross-platform support are key.

## Proposed Technology Stack

*   **Backend:** **PHP/Laravel Framework.**
*   **Frontend:** **React.js (with Vite).**
*   **Database:** **MySQL/MariaDB.**
*   **Real-time Communication:** **WebSockets** (via Soketi or Pusher).
*   **Styling:** **Tailwind CSS.**

## Plan: Phased Development

**Phase 1: Project Setup & Core Infrastructure (Foundation)**
- [X] Create the project structure with Laravel for the backend and React for the frontend.
- [X] Configure the database connection (MySQL).
- [X] Implement a basic PWA shell (manifest file, service worker) for offline capability.
- [X] Create a global configuration system for company name, title, and theme colors/fonts.
- [X] Design the initial database schema (Users, Roles, Permissions).
- [X] Create a `README.md` with initial project setup instructions.
- [X] Create `PROJECT_PLAN.md` (this file).

**Phase 2: User & Employee Management**
- [ ] Build the backend authentication system (Login/Logout) using JWT (Laravel Sanctum).
- [ ] Implement a role-based access control (RBAC) system for the defined user roles.
- [ ] Create a seeder to automatically generate the "Master Admin" account.
- [ ] Develop the frontend login page and main application layout.
- [ ] Create the "Employee Management" section UI for admins to add, view, and edit employee profiles.
- [ ] Build API endpoints for all employee CRUD (Create, Read, Update, Delete) operations.

**Phase 3: Time & Location Tracking**
- [ ] Add database fields for clock-in/out times and status.
- [ ] Implement the "Clock In / Clock Out" functionality on the backend.
- [ ] Create the UI for employees to clock in/out from their devices.
- [ ] Integrate the Geolocation API to capture GPS coordinates upon clock-in/out.
- [ ] Develop a view for managers/admins to see who is currently clocked in and their last known location.

**Phase 4: Customer Management (CRM)**
- [ ] Design and create database tables for Customers and associated data (notes, jobs, etc.).
- [ ] Build API endpoints for customer CRUD operations.
- [ ] Develop the "Customer Management" UI for creating, viewing, and updating customer records.
- [ ] Implement a view to show a customer's interaction history.

**Phase 5: Scheduling & Dispatch**
- [ ] Design database tables for Jobs, Schedules, and Assignments.
- [ ] Build API endpoints to create jobs and assign them to employees for specific time slots.
- [ ] Develop the "Scheduling" UI, featuring a calendar or timeline view to display assignments.
- [ ] Implement functionality to query and filter the schedule (e.g., "who is working on what?").

**Phase 6: Communications Suite**
- [ ] Configure WebSockets (Soketi/Pusher) with Laravel and React.
- [ ] Build the real-time messaging backend.
- [ ] Create a chat interface for one-on-one and group text messaging between users.
- [ ] (Advanced) Investigate and implement WebRTC for a basic PTT (Push-to-Talk) feature.

**Phase 7: Document & Contract Management**
- [ ] Set up a secure file storage system.
- [ ] Build API endpoints for uploading and managing documents.
- [ ] Create a "Documents" section UI.
- [ ] Implement logic to associate documents with employees or customers.
- [ ] Integrate a library for PDF generation/viewing for contracts.
- [ ] Develop the workflow for sending contracts and capturing a digital signature (or uploading a signed copy).

**Phase 8: Billing & Reporting**
- [ ] Design database tables for Invoices and Line Items.
- [ ] Build API endpoints for creating and managing invoices.
- [ ] Develop a UI for generating invoices from job data.
- [ ] Create a reporting engine to export data in a CSV format compatible with QuickBooks.

**Phase 9: Training & Safety**
- [ ] Design database tables for Training records and Equipment checks.
- [ ] Build API endpoints to manage these records.
- [ ] Create a UI for tracking employee training and equipment compliance.
- [ ] Implement a notification system to alert users about upcoming expirations or required checks.

**Phase 10: Finalization & Deployment**
- [ ] Conduct final testing on a staging environment that mirrors the Namecheap server.
- [ ] Write comprehensive deployment instructions for a shared server.
- [ ] Finalize all documentation (README, Database Schema, API documentation).
