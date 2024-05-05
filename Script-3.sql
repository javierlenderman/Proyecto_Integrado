create table weapons(
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

create table armor(
image longblob not null,
name varchar(30) not null,
rarity ENUM('Rare','Legendary','Exotic') not null,
class ENUM('Titan','Hunter','Warlock'),
description varchar(150) not null,
slot ENUM('Helmet','Gauntlet','Chest','Leg','Class') not null,
obtention varchar(30) default('World'),
id int auto_increment primary key
);

create table users(
name varchar(30),
user_password varchar(60),
class ENUM('Titan','Hunter','Warlock'),
id int auto_increment primary key
);

create table perk(
image longblob not null,
name varchar(30) not null,
description varchar(150) not null,
trait_type varchar(30),
id int auto_increment primary key
);


insert into weapons (image,name,rarity,weapon_type,description,damage_type,slot,ammunition,obtention)
values(Load_file('C:\\ProgramData\\MySQL\\MySQL Server 8.3\\Uploads\\Necrochasm.jpg'),'Necrochasm','Exotic','Auto Rifle','Is your Light bright enough to stand in full gaze of the Hive\'s abyss?','Kinetic','Kinetic','Primary','"Crota\'s End" Raid');


insert into perk (image,name,description,trait_type) 
values(Load_file('C:\\ProgramData\\MySQL\\MySQL Server 8.3\\Uploads\\Smallbore.png'),'Smallbore','Dual strength barrel.\x0a • Increases range\x0a • Increases stability','Barrel');

insert into armor (image,name,rarity,class,description,slot,obtention) 
values(Load_file('C:\\ProgramData\\MySQL\\MySQL Server 8.3\\Uploads\\Helm of Agony.jpg'),'Helm of Agony','Legendary','Titan','Acolytes of Nezarec: Briar - I','Helmet','"Root of Nightmares" Raid');