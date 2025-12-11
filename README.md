
## Overview

FOBOH Pricing is a full-stack application to manage products and pricing profiles. Users can create, update, and delete price profiles and see the adjusted product prices in real time.


## ✅ Project Requirements Checklist

### Frontend
- [x] Responsive UI for managing product pricing
- [x] Display list of products with key details (title, SKU, category, price, brand)
- [x] Search products by title or SKU
- [x] Filter products by:
  - [x] Category
  - [x] Sub-category
  - [x] Segment
  - [x] Brand
- [x] Pricing form to create pricing profiles
- [x] Apply selected price adjustments (Fixed/Dynamic, Increase/Decrease, value)
- [x] Display updated prices in UI
- [x] Built with React + Vite
- [x] Unit tests using **Vitest + React Testing Library**

### Backend
- [x] API endpoints:
  - [x] GET `/products` (supports search + filtering)
  - [x] POST `/pricing-profile` (create new pricing profiles)
  - [x] GET `/pricing-profile` (list pricing profiles)
- [x] Central `calculatePrice` utility
- [x] Support Fixed/Dynamic price adjustments
- [x] Store updated products under each pricing profile
- [x] In-memory product data
- [x] Unit tests with **Jest + Supertest**

### Testing
- [x] Unit tests for `calculatePrice` logic
- [x] Test product search and filtering
- [x] Test pricing profile creation
- [x] Mock product data for backend tests
- [x] All test suites pass
- [x] Instructions for running tests included

### Documentation
- [x] Clear README with:
  - [x] Project overview
  - [x] Setup & installation
  - [x] Frontend & backend commands
  - [x] Directory structure
  - [x] API endpoints
  - [x] Testing instructions
  - [x] Notes/assumptions

### Frontend

- React 19
- Vite
- Vitest & Testing Library for testing

### Backend

- Node.js
- Express.js
- Jest for testing

## Installation

## Backend
- cd backend
- npm install
- npm run dev        # Run backend server
- npm test           # Run backend tests

## Frontend
- npm install
- npm run dev        # Run frontend
- npx vitest         # Run frontend tests

Features

-CRUD operations for price profiles
-Apply Fixed or Dynamic adjustments to product prices
-Search and filter products
-Fully tested backend and frontend

Notes

-All tests are included and passing
-Calculate price logic is implemented in both frontend and backend
-Ensure Node.js and npm are installed before running the project
