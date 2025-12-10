FOBOH Pricing Application

This repository contains the frontend and backend of the FOBOH Pricing application. The app allows calculation of product prices, creation of pricing profiles, and product management. It includes tests for both frontend and backend.

Project Structure

frontend/ # React frontend
├─ src/
│ ├─ components/ # React components (PricingForm, ProductList, etc.)
│ ├─ utils/ # Utility functions (e.g., calculatePrice)
│ ├─ tests/ # Vitest + React Testing Library tests
│ └─ setupTests.js # Vitest setup file
├─ package.json
└─ vite.config.js

backend/ # Express backend
├─ controllers/ # API controllers (priceProfileController, productController)
├─ data/ # Sample products data
├─ tests/ # Jest + Supertest tests
├─ app.js # Express app entry point
└─ package.json

Setup Instructions-

**Backend**--

Navigate to the backend folder:
cd backend

Install dependencies:
npm install

Start the backend server:
npm start

Run backend tests:
npm test

**Frontend**--

Navigate to the frontend folder:
cd frontend

Install dependencies:
npm install

Start the frontend development server:
npm run dev

Run frontend tests:
npx vitest

**Usage**

Backend APIs

products – Retrieve products with optional query filters (search, category, subCategory, segment, brand)
priceProfiles – Create and fetch pricing profiles


**Frontend Components**

PricingForm – Apply price adjustments
ProductList – View and select products
calculatePrice – Compute new product prices (never below 0)


**Testing**

Frontend: Vitest + React Testing Library

Test files: frontend/src/tests/
Run npx vitest to execute all tests

Backend: Jest + Supertest

Test files: backend/tests/
Run npm test to execute all tests

Notes

Requires Node.js v18+

Backend uses an in-memory store for products and pricing profiles

Frontend tests include UI and utility function validations

Backend tests include API route validations
