import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightPipe',
  standalone: true
})
export class HighlightPipePipe implements PipeTransform {
  transform(value:string ,args:string[]):
  string{
    let title = args[0];
    if(!title){
      return value;
    }
    const regex = new RegExp(title,'gi');
    const match = value.match(regex);

    if(!match){
      return value;
    }
    return value.replace(regex,`<mark>${match[0]}</mark>`);
  }

//   transform(text: string, term,cssClass: string = 'highlighter'): string {
//     console.log(text);
//     console.log(term);
//   if(typeof text!== String ||!term)
//     return text
  
//   const pattern = term 
//             .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&') 
//             .split(' ') 
//             .filter((t) => t.length > 0) 
//             .join('|'); 
//             const regex = new RegExp(pattern, 'gi'); 

//             let result = term 
//             ? text.replace( 
//                 regex, 
//                 (match) => `<span class=${cssClass}">${match}</span>` 
//             ) 
//             : text; 
 
//         return result; 
// }
}
