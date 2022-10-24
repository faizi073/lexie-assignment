import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Ember from 'ember';

const { set } = Ember;

export default class ItemController extends Controller {
    @tracked price = 0;
    @tracked disabledCart = true;
    @service shoppingCart;

    setupController(controller) {
        set(controller, 'isEdit', false);
    }


    @action
    calculatePrice() {
        let width = this.get('width');
        let height = this.get('height');
        if (width > 0 && height > 0) {
            this.price = width * height;
            this.disabledCart = false;
        } else
            this.disabledCart = true;
    }

    @action
    addToCart() {
        console.log(this.model);
        this.shoppingCart.addToCart(
            { id: this.model.id, name: this.model.author, image: this.model.download_url, price: this.price }
        );
        this.price = 0;
        this.set('width', 0);
        this.set('height', 0);
        this.disabledCart = true;

    }

    @action
    valueChange(){
        debugger;
    }
}
