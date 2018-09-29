
drop table users

create table Users(user_id varchar(36),
firstName varchar(20),
lastName varchar(20),
password varchar(20),
email varchar(20),
registrationDate varchar(40),
role varchar(1),
primary key(user_id));


insert into 
          Users(user_id,firstName,lastName,email,password,registrationDate,role) 
          values (UUID(),'a','b','c','d','f','U')
          
select * from Users;

select firstName,lastName,user_id from Users where password= 'pass@123' and email='abc@abc.com'


