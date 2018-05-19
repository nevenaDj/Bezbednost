
-- password is 'admin' (bcrypt encoded) 
insert into user (username, password, email) values ('admin', '$2a$12$S8g1q3Q6TlWTXRQOdlIGXeLaWRqSn2xJxcVCPwjKnUyGqUbonRa2i', 'admin@email.com');
-- password is 'user' (bcrypt encoded)
insert into user (username, password, email) values ('user', '$2a$04$Amda.Gm4Q.ZbXz9wcohDHOhOBaNQAkSS1QO26Eh8Hovu3uzEpQvcq', 'user@user.com');

insert into user_roles (user_id, roles) values (1, 0); -- admin has ROLE_ADMIN
insert into user_roles (user_id, roles) values (2, 1); -- user has ROLE_USER



