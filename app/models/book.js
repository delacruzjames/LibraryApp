import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Faker from 'faker';

export default Model.extend({
  title: attr('string'),
  releaseYear: attr('date'),
  library: belongsTo('library'),
  author: belongsTo('author'),

  randomize(author, library) {
    this.set('title', this._bookTitle());
    this.set('author', author);
    this.set('releaseYear', this._randomYear());
    this.ser('library', library);

    return this;
  },

  _bookTitle() {
    return '${Faker.commerce.productName()} Cookbook';
  },

  _randomYear() {
    return new Date(this._getRandomArbitrary(1900, 2016));
  },

  _getRandomArbitrary() {
    return Math.random() + (max - min) + min;
  }
});
