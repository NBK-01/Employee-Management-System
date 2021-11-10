INSERT INTO department (name)
VALUES ("Front-End"),
        ("DevOps"),
        ("Marketing"),
        ("Finance");


INSERT INTO role (title,salary,department_id)
VALUES ("Marketing Team Lead", 135000, 1),
        ("DevOps Engineer", 170000, 2),
        ("Accountant", 85000, 5),
        ("Senior Back-End Engineer", 200000, 3),
        ("Front-End Engineer", 75000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("George","Costanza", 1, 1),
        ("Jerry","Seinfeld", 2, null),
        ("Elaine","Benes", 3, null),
        ("Cosma","Kramer", 3, 3);