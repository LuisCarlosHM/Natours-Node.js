
# Natours

Natours is a full-featured tour booking application, developed as part of the _"Node.js, Express, MongoDB & More: The Complete Bootcamp"_ course by Jonas Schmedtmann. This project demonstrates modern web development practices using Node.js, Express, and MongoDB.

## Getting Started### Prerequisites

Before running the application, ensure you have the following installed:

-**Node.js**: JavaScript runtime environment.
-**npm**: Node Package Manager, typically installed with Node.js.
-**MongoDB**: For database storage, either locally or via a cloud service like MongoDB Atlas.

### Installation1.**Clone the repository**:
   git clone https://github.com/your-username/natours.git
   cd natours
Install dependencies:


npm install
Configuration
Before starting the application, you need to configure environment variables:

Create a config.env file in the root directory of the project.

Add the following content to your config.env file, replacing placeholders with your actual configuration:


NODE_ENV=development
PORT=your_port_number
PASSWORD=your_password
DATABASE=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=your_jwt_expiry_time

EMAIL_USERNAME=your_email_username
EMAIL_PASSWORD=your_email_password
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
Running the Application
To start the application, use the following commands:

Development Mode (with debugging enabled):

npm run debug

Production Mode:

npm start




markdown
Copiar código
### Tips:-**Preview Before Committing**: GitHub allows you to preview your Markdown file before committing changes. Use this to ensure everything looks correct.
-**Markdown Guide**: If you’re unsure about Markdown syntax, refer to the [GitHub Markdown Guide](https://guides.github.com/features/mastering-markdown/) for more information. 

Pasting the above content directly into your `README.md` file on GitHub should maintain the formatt
