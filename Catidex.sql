create database catidex
create table client(
	client_id	serial 		primary key,
	Ho			varchar(50) not null,
	Ten			varchar(10) not null,
	SDT 		varchar(15)	not null,
	Email		varchar(50) not null
);
alter table client alter column Sdt type varchar(15)

create table Course(
	KH_id	serial		primary key,
	tenKh	varchar(50) not null
);

insert into client(Ho, Ten, SDT, Email) Values
('Nguyễn Văn', 'A', '0123456789', 'A123@gmail.com'),
('Nguyễn Văn', 'B', '0234567891', 'B234@gmail.com');

select * from client;
select * from course;

delete from client