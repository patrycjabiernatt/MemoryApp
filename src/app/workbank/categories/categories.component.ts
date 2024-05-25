import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgIcon, NgForOf, NgIf],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories = ['Kategoria1'];
}
