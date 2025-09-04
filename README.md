# Inventory Management System

A simple **Inventory Management System** with a **React frontend** and **Spring Boot backend**.  
This system allows users to **add, update, and delete products** while maintaining current inventory.

---

## Features

- Add new products (Name, Category, Price, Quantity)
- View all products in a table
- Update product quantity
- Delete products
- Responsive frontend with React
- REST API backend with Spring Boot

---

## Folder Structure

inventory-project/
│
├─ inventory-frontend/ ← React application
└─ management-system/ ← Spring Boot application

## Prerequisites

- **Java JDK 17+**
- **Maven**
- **Node.js & npm**
- **Git**
- **MySQL** (or any relational database)
- IDEs like **VS Code** (frontend) and **IntelliJ / Eclipse** (backend)


## Backend Setup (Spring Boot)
1.Update application.properties for database connection:
#DataBAse Config
spring.datasource.url=jdbc:mysql://localhost:3306/inventory_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

2.Build and run backend:
mvn clean install
mvn spring-boot:run

#Frontend Setup (React)


