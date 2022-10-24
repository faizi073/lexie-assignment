import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


class Item {
    @tracked count;

    id;
    name;
    image;
    price;

    constructor(item) {
        this.id = item.id;
        this.count = item.count;
        this.name = item.name;
        this.image = item.image;
        this.price = item.price;
    }
}
export default class ShoppingCartService extends Service {
    @tracked itemList = [];

    addToCart(item) {
        debugger;
        const existingItem = this.itemList.find(({ id }) => {
            return id === item.id;
        });

        if (existingItem) {
            existingItem.count += 1;
        } else {
            this.itemList = [...this.itemList, new Item({
                ...item,
                count: 1,
            })];
        }

    }
}

