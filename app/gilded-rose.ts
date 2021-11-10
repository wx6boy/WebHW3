import { Item, ItemNamesEnum } from './Item'



export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() : Array<Item> {
        for (let item of this.items) {
            switch (item.name) {
                case ItemNamesEnum.sulfuras:
                    break;
                case ItemNamesEnum.conjured:    
                    item.sellIn -= 1;
                    if ( item.sellIn < 0 && item.quality > 1) {
                        item.quality -= 2;
                    }
                    else if ( item.quality > 0 ) {
                        item.quality -= 1;
                    }
                    break
                case ItemNamesEnum.agedBrie:
                    item.sellIn -= 1;
                    if ( item.sellIn < 0 && item.quality < 49 ) {
                        item.quality += 2;
                    } 
                    else if ( item.quality < 50 ) {
                        item.quality += 1;
                    }
                    break;
                case ItemNamesEnum.backstagePasses:
                    item.sellIn -= 1;
                    if ( item.quality  >= 50 ) {
                        break;
                    }
                    if ( item.sellIn < 0 ) {
                        item.quality = 0;
                        break;
                    }
                    if ( item.sellIn < 5 ) {
                        item.quality = Math.min(item.quality + 3, 50);
                        break;
                    }
                    if ( item.sellIn < 10 ) {
                        item.quality = Math.min(item.quality + 2, 50);
						break;
                    }
                    item.quality += 1;
					break; 
                default: 
                    item.sellIn -= 1;
                    if (item.sellIn < 0 && item.quality > 1) {
                        item.quality -= 2;
                    }
                    else if ( item.quality > 0 ) {
                        item.quality -= 1;
                    }
                    break
            }
        }
    
        return this.items;
    }
}
