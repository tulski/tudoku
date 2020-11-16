import {Pipe, PipeTransform} from '@angular/core';
import {Item} from '../../_models/item';

@Pipe({
  name: 'item'
})
export class ItemPipe implements PipeTransform {

  transform(items: Item[], status: string): Item[] {
    return items.filter(item => item.status === status);
  }
}
