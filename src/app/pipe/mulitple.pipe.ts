import { Pipe, PipeTransform } from '@angular/core';
//管道装饰器
@Pipe({
  name: 'mulitple'
})
export class MulitplePipe implements PipeTransform {
  //value输入的原始值 args参数 将转化的原始值返回回去，管道与angularJs得filter一样
  transform(value: number, args?: number): any {
    if(!args){
      args = 1;
    }
    return value * args;
  }

}
