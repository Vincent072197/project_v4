create database `EXAMPLE`;

use `EXAMPLE`;

drop table if exists `DEPT`;

create table `DEPT` (
  `DEPTNO` int NOT null comment '部門編號(主鍵)',
  `DNAME` varchar(14) comment '部門名稱',
  `LOC` varchar(13) comment '所在地',
  primary key (`DEPTNO`)
) comment = '部門資料';

insert into
  `DEPT`(`DEPTNO`,`DNAME`,`LOC`)
values
  (10,'ACCOUNTING','NEW YORK'),
  (20,'RESEARCH','DALLAS'),
  (30,'SALES','CHICAGO'),
  (40,'OPERATIONS','BOSTON');

drop table if exists `EMP`;

create table `EMP` (
  `EMPNO` int NOT NULL comment '員工編號(主鍵)',
  `ENAME` varchar(11) comment '姓名',
  `JOB` varchar(9) comment '職稱',
  `MGR` int comment '主管員工編號(外來鍵)',
  `HIREDATE` datetime comment '到職日',
  `SAL` decimal(7,2) comment '薪資',
  `COMM` decimal(7,2) comment '獎金',
  `DEPTNO` int NOT NULL comment '部門編號(外來鍵)',
  primary key (`EMPNO`)
) comment = '員工資料';

insert into
  `EMP`(`EMPNO`,`ENAME`,`JOB`,`MGR`,`HIREDATE`,`SAL`,`COMM`,`DEPTNO`)
values
  (7369,'SMITH','CLERK',7902,'1980-12-17 00:00:00',800.00,null,20),
  (7499,'ALLEN','SALESMAN',7698,'1981-02-20 00:00:00',1600.00,300.00,30),
  (7521,'WARD','SALESMAN',7698,'1981-02-22 00:00:00',1250.00,500.00,30),
  (7566,'JONES','MANAGER',7839,'1981-04-02 00:00:00',2975.00,null,20),
  (7654,'MARTIN','SALESMAN',7698,'1981-09-28 00:00:00',1250.00,1400.00,30),
  (7698,'BLAKE','MANAGER',7839,'1981-05-01 00:00:00',2850.00,null,30),
  (7782,'CLARK','MANAGER',7839,'1981-06-09 00:00:00',2450.00,null,10),
  (7788,'SCOTT','ANALYST',7566,'1982-12-09 00:00:00',3000.00,null,20),
  (7839,'KING','PRESIDENT',null,'1981-11-17 00:00:00',5000.00,null,10),
  (7844,'TURNER','SALESMAN',7698,'1981-09-08 00:00:00',1500.00,0.00,30),
  (7876,'ADAMS','CLERK',7788,'1983-01-12 00:00:00',1100.00,null,20),
  (7900,'JAMES','CLERK',7698,'1981-12-03 00:00:00',950.00,null,30),
  (7902,'FORD','ANALYST',7566,'1981-12-03 00:00:00',3000.00,null,20),
  (7934,'MILLER','CLERK',7782,'1982-01-23 00:00:00',1300.00,null,10);

drop table if exists `SAL_LEVEL`;

create table `SAL_LEVEL` (
  `LEVEL` enum('A','B','C','D') not null comment '等級',
  `SAL_MIN` decimal(6,2) not null comment '最低薪水',
  `SAL_MAX` decimal(6,2) not null comment '最高薪水',
  primary key (`LEVEL`)
) comment = '薪資等級';

insert into
  `SAL_LEVEL`(`LEVEL`,`SAL_MIN`,`SAL_MAX`)
values
  ('A',3001.00,9999.00),
  ('B',2001.00,3000.00),
  ('C',1001.00,2000.00),
  ('D',0.00,1000.00);

