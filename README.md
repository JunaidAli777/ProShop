
# ProShop

ProShop is a full-featured e-commerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project includes various functionalities such as user authentication, product management, and a shopping cart system.

## Features

- User authentication with JWT
- Admin dashboard for managing products, users, and orders
- Product listing and searching
- Product details with reviews and ratings
- Shopping cart management
- Order processing and payment integration with **PayPal**
- Responsive design for mobile and desktop

## Technologies Used

- **Frontend**: React.js, Redux Toolkit, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: PayPal
- **Styling**: Bootstrap, custom CSS

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/JunaidAli777/ProShop.git
   cd ProShop
   \`\`\`

2. **Install dependencies for both the backend and frontend:**

   \`\`\`bash
   # Install backend and frontend dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install
   \`\`\`

3. **Set up environment variables:**

   Create a \`.env\` file in the root directory and add the following:

   \`\`\`plaintext
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PAYPAL_CLIENT_ID=your_paypal_client_id
   \`\`\`

4. **Run the application:**

   \`\`\`bash
   # Run both backend and frontend servers
   npm run dev
   \`\`\`

   The application will start with the backend server running on \`http://localhost:5000\` and the frontend on \`http://localhost:3000\`.

## Usage

- **User Registration and Login:**
  - Register as a new user or log in with existing credentials.
  - Admin users have additional permissions to manage the platform.

- **Product Management:**
  - View all products or search for specific items.
  - Admin users can add, edit, or delete products.

- **Shopping Cart:**
  - Add products to the cart and manage quantities.
  - Proceed to checkout to place an order.

- **Order Management:**
  - View order history and details.
  - Admin users can view all orders and mark them as delivered.

## Testing Payments

For testing payments, you can use the PayPal sandbox environment. You'll need a PayPal sandbox account and a sandbox client ID. You can create these on the [PayPal Developer](https://developer.paypal.com/) site.

In the \`.env\` file, set \`PAYPAL_CLIENT_ID\` to your sandbox client ID.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact

Junaid Ali - [syedjunaidali.ali@gmail.com]
