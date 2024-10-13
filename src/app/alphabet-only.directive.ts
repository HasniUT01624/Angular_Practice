import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphabetOnly]',
  standalone: true
})
export class AlphabetOnlyDirective {

  constructor(private el:ElementRef){ }
@HostListener('keydown',['$event'])
onkeyDown(event:KeyboardEvent){
  const key =event.key;
  const regex = /^[a-z A-Z]*$/;

  if(!regex.test(key)){event.preventDefault()

  }
}

}
