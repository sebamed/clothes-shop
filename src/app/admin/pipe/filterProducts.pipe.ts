import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;

        searchText = searchText.toLowerCase();

        return items.filter(it => {
            return it.title.toString().toLowerCase().includes(searchText);
        });
    }
}