import { Messages } from './messages';

const isNumber = function isNumber(value) 
{
   return typeof value === 'number' && isFinite(value);
}

export default class Validator {

  constructor(settings) {
    this.messages = {};
    for (var key of Object.keys(Messages)) {
      this.messages[key] = Messages[key];
    }
    // this way the default messages will be overwritten
    for (var key of Object.keys(settings)) {
      this[key] = settings[key];
    }
  }

  validate(value) {
    if (this.required && !value) return this.response(value, this.messages.requiredIsEmpty);
    if (!this.type) return this.response(value);

    if (this.type === 'number') {
      var number = value - 0;
      if (!number && isNaN(number)) {
        return { value, error: this.messages.numberInvalid };
      } else if (isNumber(this.max) && isNumber(this.min) && (number > this.max || number < this.min)) {
        return this.response(value, this.messages.numberNotBetween)
      } else if (isNumber(this.max) && (number > this.max)) {
        return this.response(value, this.messages.numberNotAboveMin)
      } else if (isNumber(this.min) && (number < this.min)) {
        return this.response(value, this.messages.numberNotBelowMax)
      } else {
        return this.response(value)
      }
    }
  }

  response(value, error) {
    if (error) return { value, value, error };
    if (this.type === 'number')
      return { value, formattedValue: parseInt(value, 10), error: '' };
    return { value, formattedValue: value, error: ''};
  }

}