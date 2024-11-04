

# User Management System

A simple user management application built with React, utilizing the Context API for state management. This app allows users to add, view, and delete entries from a user list.



## Features

- **Add New Users**: Input form to add a new user.
- **View User List**: Displays all users in a structured list.
- **Delete Users**: Option to delete a user from the list.
- **Context API**: State management handled through React's Context API for easy state sharing across components.

## Tech Stack

- **Frontend**: React, HTML, CSS
- **State Management**: Context API

## Project Structure

User-Management/ │ ├── public/ │ └── index.html │ ├── src/ │ ├── components/ │ │ ├── NewUser.js # Component to add new users │ │ ├── Users.js # Component to display user list │ │ ├── User.js # Component for each user item │ │ └── context/ │ │ └── UsersContext.js # Context API setup │ │ │ ├── App.js # Main app file │ └── index.js # ReactDOM rendering │ └── README.md # Project readme file

bash
Copy code

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-management.git
Navigate to the project folder:
bash
Copy code
cd user-management
Install dependencies:
bash
Copy code
npm install
Run the project:
bash
Copy code
npm start
Usage
Add User: Use the input field and "Add User" button to create a new user.
Delete User: Click the "Delete" button next to any user to remove them from the list.
## Screenshots
![Screenshot 2024-11-05 004327](https://github.com/user-attachments/assets/25ec98c6-b9dc-4855-a01a-4021b96b3e85)
![Screenshot 2024-11-05 004315](https://github.com/user-attachments/assets/4db2f0f7-69f1-4322-9348-0797d89bce5b)

 ## Contributing

1. Fork the project  
2. Create your feature branch:  
   ```bash
   git checkout -b feature-name
3. Commit your changes:
   ```bash
   git commit -m 'Add new feature'
4. Push to the branch:
 ```bash
 git push origin feature-name 

 5.  Open a pull request
