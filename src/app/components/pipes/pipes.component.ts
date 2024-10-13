import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  // public filterText: string = 'Angular rocks'; 
  // textToShowAsResult = 'Text to be highlighted: Angular 13 Rocks!!!'; 
   
  // getHighlighterClass(): string { 
  //   return "'highlighter'"; 
 
}
