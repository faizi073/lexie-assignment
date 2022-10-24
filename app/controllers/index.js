import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {

    @tracked currentPage = 0;
    @tracked disablePreviousButton = true;
    @tracked productItems = [];

    async init() {
        super.init(...arguments);
        await this.productList(this.currentPage);
    }




    @action
    async productList() {
        this.productItems = await fetch(`https://picsum.photos/v2/list?page=${this.currentPage}&limit=25`).then((response) => {
            return response.json();
        }).then((responseJson) => {
            return responseJson;
        });
    }

    @action
    async nextPage() {
        this.currentPage++;
        await this.productList();
        this.disablePreviousButton=false;
    }


    @action
    async previousPage() {
        if (this.currentPage > 0){
            this.currentPage--;
            this.disablePreviousButton=false;
        }
        else
            this.disablePreviousButton = true;
            
        await this.productList();
    }


}

