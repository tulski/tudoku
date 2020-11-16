import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['../home.component.scss']
})
export class CategoriesFilterComponent {
  formControl = new FormControl();
  filteredCategories: Observable<string[]>;

  @Input() allCategories;
  @Input() categories;
  @Output() categoriesChange = new EventEmitter();
  @ViewChild('formInput') formInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredCategories = this.formControl.valueChanges.pipe(
      startWith(null),
      map((input: string | null) =>
        input ?
          this._filter(input) :
          this.allCategories.filter(category => !this.categories.includes(category))
      )
    );
  }

  remove(category: string): void {
    const index = this.categories.indexOf(category);
    if (index >= 0) {
      this.categories.splice(index, 1);
      this.categoriesChange.emit(this.categories);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.categoriesChange.emit(this.categories);
    this.formInput.nativeElement.value = '';
    this.formControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCategories.filter(category => category.toLowerCase().indexOf(filterValue) === 0);
  }

}
