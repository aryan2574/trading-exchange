# Trading exchange project

## Overview

This project implements a basic **trading exchange** using Node.js and TypeScript, designed to simulate the functionalities of a trading exchange. The project includes a low-latency matching engine written in C++ integrated into the Node.js backend. The primary features include placing buy/sell orders, retrieving market depth, and managing user balances.

---

## Features

### Order Management

- Place buy or sell orders.
- Match orders based on price and time priority (FIFO matching).
- Retrieve market depth, including bids and asks.

### User Management

- Check user balances for USD and the custom token (TICKER).

### Security

- JWT-based authentication for secure API access.

---

## Technologies Used

### Backend

- **Node.js**: Core runtime environment for the backend.
- **TypeScript**: Strongly typed JavaScript for building robust applications.
- **Express**: Web framework for API development.

### Database

- **In-Memory Data Structures**: Used for faster order matching and depth management.
- Extendable to databases like PostgreSQL, MongoDB, or Redis if needed.

### Integration

- **C++**: Low-latency matching engine integrated with Node.js via native modules (using `node-addon-api`).

### Middleware

- **JWT Authentication**: For secure API endpoint access.

### DevOps and Utilities

- **Docker**: Containerization for consistent environment setup.
- **ESLint**: Code linting to maintain code quality.
- **Prettier**: Code formatting for consistency.

---

## Project Structure

├── **src**
│ ├── **api** - API routes and controllers
│ ├── **config** - Configuration files
│ ├── **middleware** - Middleware functions
│ ├── **models** - Data models
│ ├── **services** - Business logic
│ ├── **utils** - Utility functions
│ ├── **index.ts** - Entry point
├── **native** - C++ matching engine
│ ├── **src** - Source files
├── **types** - TypeScript type definitions
├── **Dockerfile** - Docker configuration
├── **.eslintrc.json** - ESLint configuration
├── **.prettierrc.json** - Prettier configuration
├── **package.json** - Node.js dependencies
├── **tsconfig.json** - TypeScript configuration

---

## API Endpoints

### 1. **Order Routes**

- **POST /order**: Place a buy/sell order.
  - Request Body:
    ```json
    {
      "side": "buy", // or "sell"
      "price": 100,
      "quantity": 10,
      "userId": "123"
    }
    ```
  - Response:
    ```json
    {
      "filledQuantity": 5 // Quantity filled by matching orders
    }
    ```
- **GET /order/depth**: Retrieve market depth.
  - Response:
    ```json
    {
      "depth": {
        "100": { "type": "bid", "quantity": 10 },
        "101": { "type": "ask", "quantity": 5 }
      }
    }
    ```

### 2. **Balance Routes**

- **GET /balance/:userId**: Retrieve user balances.
  - Response:
    ```json
    {
      "balances": {
        "USD": 1000,
        "TICKER": 5
      }
    }
    ```

---

## Running the Project

### Prerequisites

- **Node.js** (>=16.x)
- **TypeScript**
- **Docker** (optional for containerization)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd trading-exchange
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Access the API at `http://localhost:3000`.

### Running Tests

- Run API tests:
  ```bash
  npm test
  ```
- Run ESLint checks:
  ```bash
    npm run lint
  ```
- Run Prettier checks:
  ```bash
  npm run format
  ```

---

## Testing the application

1. **Place Orders**: Use the `/order` endpoint to place buy/sell orders.
2. **Retrieve Market Depth**: Use the `/order/depth` endpoint to view the current market depth.
3. **Check Balances**: Use the `/balance/:userId` endpoint to check user balances.

---

## Future Improvements

- **WebSocket Support**: Real-time order updates using WebSockets.
- **Order Cancellation**: Implement order cancellation functionality.
- **Database Integration**: Use databases for persistent data storage.
- **Rate Limiting**: Prevent abuse of the API by implementing rate limiting.
- **Logging**: Add logging for better debugging and monitoring.

---
