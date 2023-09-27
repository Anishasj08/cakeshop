import { Pipe, PipeTransform } from '@angular/core';
import { Icakeshop } from '../model/Interface';

@Pipe({
  name: 'filtercakes'
})
export class FiltercakesPipe implements PipeTransform {

  transform(value: Icakeshop[], searchbyname: string): Icakeshop[] {
    if(!value){
      return[]
    }else if
      (!searchbyname){
        return value
      }
      let output=value.filter(cakes=>{
             return cakes.name.toLowerCase().includes(searchbyname.toLowerCase())
      })
      return output
    }
  }


