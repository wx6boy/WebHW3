export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export const enum ItemNamesEnum {
    agedBrie = 'Aged Brie',
    backstagePasses = 'Backstage passes to a TAFKAL80ETC concert',
    sulfuras = 'Sulfuras, Hand of Ragnaros',
    conjured = 'Conjured',
}
