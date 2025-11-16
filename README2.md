# MERN Application Deployment Guide

## Project Overview

This MERN stack application demonstrates best practices for production deployment, continuous integration, and monitoring. The project includes:

* React frontend optimized for production
* Express.js backend with secure, production-ready configuration
* MongoDB Atlas setup with proper user permissions and connection pooling
* CI/CD pipeline with automated builds, tests, and continuous deployment
* Monitoring, error tracking, and performance logging

---

## Prerequisites

Before deployment, ensure you have:

* Node.js (v20 recommended)
* npm (latest version)
* GitHub repository connected to your project
* Accounts on chosen hosting platforms:

  * **Backend:** Render 
  * **Frontend:** Netlify 
* MongoDB Atlas account for production database

---

## Application Preparation

### React Frontend

1. **Optimize for production**:

cd client/CrowdFunding

npm install

npm run build

```

2. **Implement code splitting** using React lazy and Suspense for better performance.

3. **Configure environment variables** in `.env`:

```
REACT_APP_API_URL=https://your-backend-api.com

REACT_APP_SENTRY_DSN=https://your_sentry_dsn
```

---

### Express Backend

1. **Install dependencies** and prepare for production:

cd server
npm install
```

2. **Configure environment variables** in `.env`:

```
MONGO_URI=your_mongodb_connection_string
SENTRY_DSN=your_sentry_dsn
NODE_ENV=production
PORT=5000
```

3. **Security and logging**:

   * Use `helmet` for secure HTTP headers
   * Use `morgan` for request logging
   * Implement proper error handling middleware

4. **MongoDB Atlas setup**:

   * Create a production cluster
   * Configure database users with restricted permissions
   * Enable connection pooling for performance

---

## Backend Deployment Instructions

1. Create a new project/application on your cloud platform (Render).
2. Set **environment variables** from your `.env` file in the cloud platform dashboard.
3. Enable **continuous deployment from GitHub** (link your repository).
4. Configure **HTTPS with SSL/TLS** if not automatically handled.
5. Deploy the backend. Test the health endpoint:

```
GET https://your-backend-api.com/api/health
```

6. Set up **server monitoring** using PM2, platform metrics, or Sentry.

---

## Frontend Deployment Instructions

1. Choose a static hosting platform ( Netlify).
2. Connect your GitHub repository for **automatic deployment on push**.
3. Configure **environment variables** on the platform dashboard:

```
REACT_APP_API_URL=https://your-backend-api.com

REACT_APP_SENTRY_DSN=https://your_sentry_dsn
```

4. Configure **HTTPS** and optional **custom domain**.
5. Implement caching strategies for static assets (default platform settings are sufficient for most apps).

---

## CI/CD Pipeline Setup

1. **Platform:** GitHub Actions
2. **Workflow Steps**:

   * Checkout code
   * Install dependencies (server and client)
   * Run server and client tests
   * Lint code for quality checks
   * Build React app
   * Deploy backend and frontend on successful build
   * Implement **staging** and **production** environments
   * Rollback strategies in case of failed deployments

**Example workflow triggers**:

* `push` or `pull_request` on `main` or `staging` branches

---

## Monitoring and Maintenance

### Health and Uptime

* Health check endpoint: `/api/health`
* Uptime monitoring via **UptimeRobot **

### Error Tracking

* Sentry integrated on both **server** and **client**
* Alerts configured for runtime errors

### Performance Monitoring

* Server CPU/memory monitoring via PM2 or platform dashboards
* API latency logging via middleware
* Frontend performance via Web Vitals or Lighthouse

### Maintenance Plan

* Monthly dependency updates and security patches
* Automated database backups via MongoDB Atlas 
* Documented deployment and rollback procedures

---

## Environment Variables

### Backend (`server/.env`)

```
MONGO_URI=your_mongodb_connection_string
SENTRY_DSN=your_sentry_dsn
NODE_ENV=production
PORT=5000
```

### Frontend (`client/CrowdFunding/.env`)

```
REACT_APP_API_URL=https://your-backend-api.com
REACT_APP_SENTRY_DSN=https://your_sentry_dsn
```

---

## Screenshots

### CI/CD Pipeline

<img width="639" height="812" alt="Screenshot 2025-11-17 000720" src="https://github.com/user-attachments/assets/cd8548b3-abd9-4db7-b96e-fa920de5e60d" />




## Deployed URLs

* **Frontend:** [https://studentcrowdfunding.netlify.app/](https://studentcrowdfunding.netlify.app/)
* **Backend API:** [https://deployment-and-devops-essentials-shann404.onrender.com/](https://deployment-and-devops-essentials-shann404.onrender.com/)

---



## Notes

* HTTPS enabled on both frontend and backend
* CI/CD ensures automated builds and deployment for staging and production
* Monitoring ensures uptime, error tracking, and performance metrics
* Rollback procedures are documented for failed deployments


