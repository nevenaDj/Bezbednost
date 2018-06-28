
-- password is 'admin' (bcrypt encoded) 
insert into user (username, password, email, enabled) values ('admin', '$2a$12$S8g1q3Q6TlWTXRQOdlIGXeLaWRqSn2xJxcVCPwjKnUyGqUbonRa2i', 'admin@email.com', false);
-- password is 'user' (bcrypt encoded)
insert into user (username, password, email, enabled) values ('user', '$2a$04$Amda.Gm4Q.ZbXz9wcohDHOhOBaNQAkSS1QO26Eh8Hovu3uzEpQvcq', 'user@user.com', false);

insert into privilege (name) value ('READ_PRIVILEGE');
insert into privilege (name) value ('WRITE_PRIVILEGE');

insert into role (name) value ('ROLE_ADMIN');
insert into role (name) value ('ROLE_USER');

insert into roles_privileges (role_id, privilege_id) values (1,1);
insert into roles_privileges (role_id, privilege_id) values (1,2);
insert into roles_privileges (role_id, privilege_id) values (2,1);

insert into users_roles (user_id, role_id) values (1, 1); -- admin has ROLE_ADMIN
insert into users_roles (user_id, role_id) values (2, 2); -- user has ROLE_USER

insert into alarm (id, name, description, seconds,number, prival, version, timestamp, hostname, appname , procid, msgid, sd, msg, can_delete) 
values (1000,'status40..', 'status 40..', 60, 3, 0, 0, '','','Server','','','status=\"40', '', false); 
insert into alarm (id, name, description, seconds,number, prival, version, timestamp, hostname, appname , procid, msgid, sd, msg, can_delete) 
values (1001,'status50..', 'status 50..', 60, 3, 0, 0, '','','Server','','','status=\"50', '', false); 
insert into alarm (id, name, description, seconds,number, prival, version, timestamp, hostname, appname , procid, msgid, sd, msg, can_delete) 
values (1002,'Login in application', 'Invalid login', 300, 5, 0, 0, '','','Firewall','','','UserID', 'Invalid username or password', false); 
insert into alarm (id, name, description, seconds,number, prival, version, timestamp, hostname, appname , procid, msgid, sd, msg, can_delete) 
values (1003,'Registration in application', 'Invalid registration', 300, 5, 0, 0, '','','Firewall','','','UserID', 'Username already exists', false);
insert into alarm (id, name, description, seconds,number, prival, version, timestamp, hostname, appname , procid, msgid, sd, msg, can_delete) 
values (1004,'Firewall error', 'Drop action in firewall', 60, 2, 0, 0, '','','Firewall','','','', 'DROP', false);
insert into alarm (id, name, description, seconds,number, prival, version, timestamp, hostname, appname , procid, msgid, sd, msg, can_delete) 
values (1005,'Firewall lost', 'Info-events-losst action in firewall', 60, 1, 0, 0, '','','Firewall','','','', 'INFO-EVENTS-LOST', false);
insert into alarm (id, name, description, seconds,number, prival, version, timestamp, hostname, appname , procid, msgid, sd, msg, can_delete) 
values (1006,'Message error', 'Message field is error', 60, 3, 0, 0, '','','','','','', 'error', false);
insert into alarm (id, name, description, seconds,number, prival, version, timestamp, hostname, appname , procid, msgid, sd, msg, can_delete) 
values (1007,'Stuctured data error', 'Sd contains the word error', 60, 3, 0, 0, '','','','','','error', '', false);



