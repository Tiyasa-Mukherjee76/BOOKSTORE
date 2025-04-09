# BOOKSTORE

---

```markdown
# 📚 Bookstore API

A RESTful backend API for managing an online bookstore, built with **Java** and **Spring Boot**. This API supports book listings, user management, and order processing.

---

## 🚀 Features

- 📖 **Books**
  - List all books
  - Get book by ID
  - Add new books
  - Update existing books
  - Delete books

- 👤 **Users**
  - Register a new user
  - Get user details
  - Update user info
  - Delete user account

- 🛒 **Orders**
  - Place a new order
  - View order history
  - Cancel an order

---

## 🛠️ Tech Stack

- Java 17+
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL / PostgreSQL
- Maven
- Swagger UI (OpenAPI)
- Docker (optional deployment)

---

## 📁 Project Structure

```
bookstore-api/
├── src/
│   ├── main/
│   │   ├── java/com/bookstore/
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   ├── repository/
│   │   │   ├── model/
│   │   │   └── BookstoreApiApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── data.sql (optional)
├── pom.xml
└── README.md
```

---

## 🧪 API Endpoints

Access Swagger UI at: `http://localhost:8080/swagger-ui/`

### 📘 Book Endpoints
| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | `/api/books`     | Get all books       |
| GET    | `/api/books/{id}`| Get book by ID      |
| POST   | `/api/books`     | Add new book        |
| PUT    | `/api/books/{id}`| Update book         |
| DELETE | `/api/books/{id}`| Delete book         |

### 👤 User Endpoints
| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| POST   | `/api/users`     | Register user       |
| GET    | `/api/users/{id}`| Get user info       |
| PUT    | `/api/users/{id}`| Update user         |
| DELETE | `/api/users/{id}`| Delete user         |

### 🛒 Order Endpoints
| Method | Endpoint             | Description        |
|--------|----------------------|--------------------|
| POST   | `/api/orders`        | Place new order    |
| GET    | `/api/orders/user/{userId}` | View user orders |
| DELETE | `/api/orders/{id}`   | Cancel order       |

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites
- Java 17+
- Maven
- MySQL or PostgreSQL
- (Optional) Docker & Docker Compose

### 🧰 Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bookstore-api.git
   cd bookstore-api
   ```

2. **Configure database in `src/main/resources/application.properties`:**
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/bookstore
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```

3. **Build and run:**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. **Open Swagger UI:**
   ```
   http://localhost:8080/swagger-ui/
   ```

---

## 🐳 Docker Deployment (Optional)

### 📦 Dockerfile

```dockerfile
FROM openjdk:17
EXPOSE 8080
ADD target/bookstore-api.jar bookstore-api.jar
ENTRYPOINT ["java", "-jar", "bookstore-api.jar"]
```

### 🧩 docker-compose.yml

```yaml
version: '3.8'

services:
  db:
    image: mysql:8
    container_name: mysql-db
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: bookstore
    ports:
      - "3306:3306"

  app:
    build: .
    depends_on:
      - db
    ports:
      - "8080:8080"
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://db:3306/bookstore
      SPRING_DATASOURCE_USERNAME: root
      SPRING_DATASOURCE_PASSWORD: root
```

### 🔃 Run with Docker

```bash
docker-compose up --build
```

---

## 🧾 Sample Database Schema

```sql
CREATE TABLE books (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  price DOUBLE,
  stock INT
);

CREATE TABLE users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE orders (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT,
  order_date TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Tiyasa Mukherjee**

Feel free to connect or contribute! 🚀
```

---

