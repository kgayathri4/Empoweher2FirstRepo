# Schema Design Fundamentals – Simple Explanation

## What is Schema Design?

Schema design is the process of **planning how data will be stored in a database** before creating tables and writing backend code.

A **database schema** is the structure of the database. It defines:

* Tables
* Columns
* Data types
* Relationships between tables
* Rules (constraints)

Think of a schema like a **blueprint** for a database.

---

## Why Schema Design Is Required Before Writing Backend Code

Backend code works on top of the database. If the database structure is wrong, backend code will:

* Become complicated
* Break easily
* Be hard to change later

Good schema design helps:

* Write clean and simple queries
* Avoid bugs
* Build scalable applications

---

## How Poor Schema Design Causes Problems

### Data Consistency

* Same data may be stored in many places
* Updating one value may not update others

### Maintenance Problems

* Small changes require big code changes
* Debugging becomes difficult

### Scalability Issues

* Performance becomes slow when data grows
* Queries become inefficient

Example: Storing order details inside the users table causes repeated data and confusion.

---

## What Are Validations in Schema Design?

Validations are **rules applied to table columns** to ensure correct data.

Common validations:

* **NOT NULL** → value must be present
* **UNIQUE** → no duplicate values (example: email)
* **DEFAULT** → automatic value if none is given
* **PRIMARY KEY** → uniquely identifies each record

Databases enforce validations to:

* Protect data correctness
* Reduce errors
* Maintain data integrity

---

## Difference Between Database Schema and Database Table

* **Database schema**: Overall design of the database
* **Database table**: Stores data for one entity

Example:

* Schema: E-commerce database
* Tables: users, products, orders

---

## Why One Table Should Represent Only One Entity

Each table should store data for **only one real-world object**.

Example:

* Users table → user details
* Orders table → order details

This avoids data duplication and makes updates easy.

---

## Why Redundant or Derived Data Should Be Avoided

Redundant data means storing the same data multiple times.

Problems:

* Data mismatch after updates
* Wasted storage
* Higher chance of errors

Derived data (like total price) should be calculated instead of stored.

---

## Importance of Choosing Correct Data Types

Choosing correct data types ensures:

* Less storage usage
* Faster queries
* Accurate data

Examples:

* Use INTEGER for age
* Use TEXT for names
* Use TIMESTAMP for dates

Wrong data types can cause errors and poor performance.

---

## Conclusion

Good schema design is the foundation of a reliable database. It ensures data accuracy, easy maintenance, and scalable applications.
