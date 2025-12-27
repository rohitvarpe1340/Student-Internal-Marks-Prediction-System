CREATE DATABASE student_ml;
USE student_ml;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(100),
  email VARCHAR(100),
  contact VARCHAR(15),
  study_hours INT,
  attendance_marks INT,
  assignment_marks INT,
  predicted_marks FLOAT,
  prediction_time DATETIME
);

