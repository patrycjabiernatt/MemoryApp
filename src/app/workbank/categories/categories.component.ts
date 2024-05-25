import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgIcon, NgForOf, NgIf, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories = ['Kategoria1'];
  showNewCategoryInput = false;
  newCategoryName = '';

  addCategory() {
    this.categories.push(this.newCategoryName);
    this.newCategoryName = '';
    this.showNewCategoryInput = false;
  }

  removeCategory(index: number) {
    this.categories.splice(index, 1);
  }
}
