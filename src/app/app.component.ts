import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ProductComponent } from "./components/product/product.component";
import { PipesComponent } from './components/pipes/pipes.component';
import { HighlightPipePipe } from './highlight-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { AlphabetOnlyDirective } from './alphabet-only.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductComponent,PipesComponent,HighlightPipePipe,FormsModule,AlphabetOnlyDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string ="";
  body = "Create a custom pipe called HighlightPipe that highlights all occurrences of a specific search term within a block of text. "
}
