import {Component, OnInit} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {ItemsService} from '../shared/services/items.service';
import {Item} from '../_models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = true;
  // items$: Observable<Item[]>;
  items: Item[];
  allCategories: string[];
  categories: string[] = [];

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    // this.items$ = this.itemsService.getAll().pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   share(),
    //   tap(_ => this.loading = false)
    // );
    return this.itemsService.getAll().subscribe(
      data => {
        this.items = data;
        this.allCategories = this.getAllCategories();
      },
      err => {
        console.error(err);
      },
      () => {
        this.loading = false;

      }
    );
  }

  getAllCategories() {
    return this.items.reduce(
      (acc: string[], item: Item) =>
        item.categories.length ?
          [...new Set([...acc, ...item.categories])] :
          acc,
      []
    );
  }


  drop(event: CdkDragDrop<Item[]>) {
    console.log(this.categories);
    const index = this.items.indexOf(event.item.data);
    this.items[index].status = event.container.id;
    this.itemsService.updateOne(this.items[index]).subscribe();
    this.items = [...this.items];   //  TODO
  }

}
