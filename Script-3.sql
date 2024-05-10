create database pi;

create table pi.weapons(
image longblob not null,
name varchar(30) not null,
rarity ENUM('Rare','Legendary','Exotic') not null,
weapon_type ENUM('Auto Rifle','Combat Bow','Fusion Rifle','Glaive','Grenade Launcher','Hand Cannon','Linear Fusion Rifle','Machine Gun','Pulse Rifle','Rocket Launcher','Scout Rifle','Shotgun','Sidearm','Sniper Rifle','Submachine Gun','Sword','Trace Rifle') not null,
description varchar(150) not null,
damage_type ENUM('Solar','Arc','Void','Stasis','Strand','Kinetic') not null,
slot ENUM('Kinetic','Energy','Power') not null,
ammunition ENUM('Primary','Special','Heavy') not null,
archetype varchar(30) not null,
obtention varchar(30) default('World'),
id int auto_increment primary key
);

create table pi.armor(
image longblob not null,
name varchar(30) not null,
rarity ENUM('Rare','Legendary','Exotic') not null,
class ENUM('Titan','Hunter','Warlock'),
description varchar(150) not null,
slot ENUM('Helmet','Gauntlet','Chest','Leg','Class') not null,
obtention varchar(30) default('World'),
id int auto_increment primary key
);

create table pi.users(
gmail varchar(60) unique,
name varchar(30),
user_password varchar(60),
class ENUM('Titan','Hunter','Warlock'),
id int auto_increment primary key
);

create table pi.perk(
image longblob not null,
name varchar(30) not null,
description varchar(150) not null,
trait_type varchar(30),
id int auto_increment primary key
);