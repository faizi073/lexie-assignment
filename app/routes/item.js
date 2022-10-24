import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  async model(params) {
    const {
      item_id
    } = params;
    let product = await this.findProduct(item_id);
    return product;
  }

  async findProduct(item_id) {
      let product  = await fetch(`https://picsum.photos/id/${item_id}/info`).then((response) => {
          return response.json();
      }).then((responseJson) => {
          return responseJson;
      });
      
      return product;
  }


}
