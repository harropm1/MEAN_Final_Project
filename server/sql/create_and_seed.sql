drop database HCA;
create database HCA;
use HCA;

create table users (
	ID		 	int(10) NOT NULL AUTO_INCREMENT, 
	USERNAME 	varchar(50) NOT NULL, 
	EMAIL 		varchar(50) NOT NULL, 
    PASSWORD	varchar(50) NOT NULL, 
	ISADMIN 	varchar(1) NOT NULL DEFAULT 0,
	createdAt   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UNIQUE		UQ_USER_1 (USERNAME),
	PRIMARY KEY(ID)
);

INSERT INTO users (ID, USERNAME, EMAIL, PASSWORD, ISADMIN) VALUES (1, 'Michelle', 'michelle@mail.com', 'password', '1');
INSERT INTO users (ID, USERNAME, EMAIL, PASSWORD, ISADMIN) VALUES (2, 'Megan', 'megan@mail.com', 'password', '0');
INSERT INTO users (ID, USERNAME, EMAIL, PASSWORD, ISADMIN) VALUES (3, 'Peggy', 'peggy@mail.com', 'password', '0');
INSERT INTO users (ID, USERNAME, EMAIL, PASSWORD, ISADMIN) VALUES (4, 'Bob', 'bob@mail.com', 'password', '1');
INSERT INTO users (ID, USERNAME, EMAIL, PASSWORD, ISADMIN) VALUES (5, 'Jenny', 'jenny@mail.com', 'password', '0');
INSERT INTO users (ID, USERNAME, EMAIL, PASSWORD, ISADMIN) VALUES (6, 'Kenzi', 'kenzi@mail.com', 'password', '0');

#SELECT * FROM users;
#SELECT * FROM users WHERE ISADMIN = '0';
#SELECT * FROM users WHERE USERNAME = 'Megan' AND PASSWORD = "password";

#SELECT ID FROM users WHERE USERNAME = "Jenny";
#SELECT USERNAME, EMAIL FROM users WHERE ID = 1;

#INSERT INTO users (ID, USERNAME, EMAIL, PASSWORD, ISADMIN  ) VALUES (7, 'David', 'david@mail.com', 'password', '0');
#SELECT * FROM users;

#UPDATE users SET EMAIL = 'michelle2@mail.com' WHERE ID = 1;
#SELECT * FROM users;

#DELETE FROM users WHERE ID = 7;
#SELECT * FROM users;