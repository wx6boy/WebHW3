import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose'
import { Item } from '../app/Item';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('fixme');
    });
    
    it('Backstage 1', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 8, 8)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(10);
    });
    
    it('Backstage 2', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 13, 13)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(12);
    });
    
    it('Aged Brie 1', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 15)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(16);
    });
    
    it('Aged Brie 2', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 15)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(13);
    });

});
