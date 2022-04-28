const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
        const { potions } = this;
        for (const potion of potions) {
            console.log(potion);
            if (potion.name === newPotion.name) {
                return `'Error! Potion ${potion.name} is already in your inventory!'`;
            }
        }
        potions.push(newPotion);
        return potions;
    },
    /*removePotion(potionName) {
        const { potions } = this;
        for (let i = 0; i < potions.length; i += 1) {
            const potion = potions[i];
            if (potionName === potion.name) {
                potions.splice(i, 1);
            }
        }
    },
    updatePotionName(oldName, newName) {
        for (const potion of this.potions) {
            if (oldName === potion.name) {
                { potion.name = newName };
            }
        }
    },
    // Change code above this line*/
};

console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.removePotion("Speed potion"));
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
console.table(atTheOldToad.getPotions());