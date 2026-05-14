const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3310,
    user: 'root',
    password: '1234',
    database: 'pi',
});

const imagesDir = path.join(__dirname, 'src', 'images');

const weapons = [
    {
        imagePath: path.join(imagesDir, 'Necrochasm.jpg'),
        name: 'Necrochasm',
        rarity: 'Exotic',
        weapon_type: 'Auto Rifle',
        description: "Is your Light bright enough to stand in full gaze of the Hive's abyss?",
        damage_type: 'Kinetic',
        slot: 'Kinetic',
        ammunition: 'Primary',
        archetype: 'Rapid-Fire Frame',
        obtention: '"Crota\'s End" Raid'
    },
    {
        imagePath: path.join(imagesDir, 'Touch of Malice.jpg'),
        name: 'Touch of Malice',
        rarity: 'Exotic',
        weapon_type: 'Scout Rifle',
        description: 'Let them feel every lash, every curse, every touch of malice that they have sown.',
        damage_type: 'Kinetic',
        slot: 'Kinetic',
        ammunition: 'Primary',
        archetype: 'Aggressive Frame',
        obtention: '"King\'s Fall" Raid'
    },
];

const insertQuery = `INSERT INTO weapons (image, name, rarity, weapon_type, description, damage_type, slot, ammunition, archetype, obtention) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

let completed = 0;
weapons.forEach((w) => {
    const imageBuffer = fs.readFileSync(w.imagePath);
    const values = [imageBuffer, w.name, w.rarity, w.weapon_type, w.description, w.damage_type, w.slot, w.ammunition, w.archetype, w.obtention];
    connection.query(insertQuery, values, (err) => {
        if (err) {
            console.error(`Error inserting ${w.name}:`, err.message);
        } else {
            console.log(`Inserted: ${w.name}`);
        }
        completed++;
        if (completed === weapons.length) {
            connection.end();
            console.log('Done.');
        }
    });
});
