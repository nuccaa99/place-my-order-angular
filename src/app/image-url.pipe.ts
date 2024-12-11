import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
})
export class ImageUrlPipe implements PipeTransform {
  transform(value: string): string {
    console.log(value.replace('node_modules/place-my-order-assets', './assets'))
    return value.replace('node_modules/place-my-order-assets', './assets');
    
  }
}
