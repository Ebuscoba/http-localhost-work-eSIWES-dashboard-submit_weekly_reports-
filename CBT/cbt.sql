-- Create a table for subjects
CREATE TABLE subjects (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

-- Create a table for questions
CREATE TABLE questions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  subject_id INT,
  question_text TEXT NOT NULL,
  FOREIGN KEY (subject_id) REFERENCES subjects(id)
);

-- Create a table for answers
CREATE TABLE answers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  question_id INT,
  answer_text TEXT NOT NULL,
  is_correct BOOLEAN,
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

-- Insert subjects
INSERT INTO subjects (name) VALUES
  ('English'),
  ('Mathematics'),
  ('Physics'),
  ('Chemistry'),
  ('Agricultural Science'),
  ('Geography'),
  ('Civic Education'),
  ('Government'),
  ('Economics'),
  ('Commerce'),
  ('History'),
  ('Literature-in-English'),
  ('CRS/IRS'),
  ('ICT'),
  ('French'),
  ('Further Mathematics'),
  ('Home Economics'),
  ('Biology'),
  ('Yoruba'),
  ('Visual Arts'),
  ('Music'),
  ('Fine Art'),
  ('Technical Drawing'),
  ('Islamic Studies'),
  ('Christian Religious Studies'),
  ('Basic Science'),
  ('Basic Technology'),
  ('Social Studies');

-- Insert questions and answers for English
INSERT INTO questions (subject_id, question_text) VALUES
  (1, 'Who wrote the play "Romeo and Juliet"?'),
  (1, 'Identify the protagonist in the novel "To Kill a Mockingbird."'),
  (1, 'What is the main theme of the poem "The Road Not Taken"?'),
  (1, 'Define the term "irony" in literature.');

INSERT INTO answers (question_id, answer_text, is_correct) VALUES
  (1, 'William Shakespeare', TRUE),
  (1, 'Jane Austen', FALSE),
  (1, 'Mark Twain', FALSE),
  (1, 'Charles Dickens', FALSE);

-- Insert questions and answers for Mathematics
INSERT INTO questions (subject_id, question_text) VALUES
  (2, 'Solve the equation for x: 2x - 7 = 15.'),
  (2, 'Find the volume of a cylinder with radius 4 units and height 10 units.'),
  (2, 'Factorize the quadratic expression x^2 - 5x + 6.'),
  (2, 'Simplify the expression: 3/5 + 1/2.');

INSERT INTO answers (question_id, answer_text, is_correct) VALUES
  (2, 'x = 11', FALSE),
  (2, 'x = 7', TRUE),
  (2, 'x = 4', FALSE),
  (2, 'x = -4', FALSE);

-- Insert questions and answers for Physics
INSERT INTO questions (subject_id, question_text) VALUES
  (3, 'State the first law of thermodynamics.'),
  (3, 'Define the term "velocity" in physics.'),
  (3, 'Explain the concept of wave-particle duality.'),
  (3, 'What is the SI unit of electric charge?');

INSERT INTO answers (question_id, answer_text, is_correct) VALUES
  (3, 'Energy cannot be created or destroyed, only transformed from one form to another.', TRUE),
  (3, 'Energy is conserved in an isolated system.', FALSE),
  (3, 'Energy is always increasing in a closed system.', FALSE),
  (3, 'Energy is only conserved in mechanical systems.', FALSE);

-- Insert questions and answers for Chemistry
INSERT INTO questions (subject_id, question_text) VALUES
  (4, 'What is the chemical formula for hydrochloric acid?'),
  (4, 'Explain the concept of a chemical bond.'),
  (4, 'Balance the chemical equation: C4H10 + O2 -> CO2 + H2O.'),
  (4, 'Define the term "mole" in chemistry.');

INSERT INTO answers (question_id, answer_text, is_correct) VALUES
  (4, 'HCl', TRUE),
  (4, 'H2SO4', FALSE),
  (4, 'CH3COOH', FALSE),
  (4, 'HF', FALSE);

-- Continue adding questions and answers for other subjects...
