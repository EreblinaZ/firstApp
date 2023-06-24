import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceComma'
})
export class ReplaceCommaPipe implements PipeTransform {
  transform(value: any): any {
    return value.toString().replace(/,/g, '');
  }
}
