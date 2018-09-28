// import { Pipe, PipeTransform ,Injectable} from '@angular/core';
// @Pipe({
//   name: 'OrderBy'
// })

// @Injectable()
// export class OrderBy {
//   /*
//     转化成小写
//    */
// static _orderByComparator(a:any, b:any):number{
//     console.log(a,b)
    
//     if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
     
//       if(a.toLowerCase() < b.toLowerCase()) return -1;
//       if(a.toLowerCase() > b.toLowerCase()) return 1;
//     }
//     else{
//       //转化后比较
//       if(parseFloat(a) < parseFloat(b)) return -1;
//       if(parseFloat(a) > parseFloat(b)) return 1;
//     }
    
//     return 0; //相同
//   }
 
//   transform(input:any, [config = '+']): any{
        
//     if(!Array.isArray(input)) return input;
 
//     if(!Array.isArray(config) || (Array.isArray(config) && config.length == 1)){
//       var propertyToCheck:string = !Array.isArray(config) ? config : config[0];
//       var desc = propertyToCheck.substr(0, 1) == '-';
            
//        //基本数组
//        if(!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+'){
//          return !desc ? input.sort() : input.sort().reverse();
//        }
//        else {
//          var property:string = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
//            ? propertyToCheck.substr(1)
//            : propertyToCheck;
 
//           return input.sort(function(a:any,b:any){
//             return !desc ?  OrderBy._orderByComparator(a[property], b[property])
//                  : -OrderBy._orderByComparator(a[property], b[property]);
//           });
//         }
//       }
//       else {
//         //通过key排序
//         return input.sort(function(a:any,b:any){
//           for(var i:number = 0; i < config.length; i++){
//             var desc = config[i].substr(0, 1) == '-';
//             var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
//               ? config[i].substr(1)
//               : config[i];
 
//             var comparison = !desc ?
//                  OrderBy._orderByComparator(a[property], b[property])
//                 : -OrderBy._orderByComparator(a[property], b[property]);
                    
//             //直到比完了，才返回0
//             if(comparison != 0) return comparison;
//           }
 
//         return 0; 
//       });
//     }
//   }
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'OrderBy',
  pure: false
})
export class OrderPipe implements PipeTransform {

  /**
   * Check if a value is a string
   *
   * @param value
   */
  static isString(value: any) {
    return typeof value === 'string' || value instanceof String;
  }

  /**
   * Sorts values ignoring the case
   *
   * @param a
   * @param b
   */
  static caseInsensitiveSort(a: any, b: any) {
    if (OrderPipe.isString(a) && OrderPipe.isString(b)) {
      return a.localeCompare(b);
    }
    return OrderPipe.defaultCompare(a, b);
  }

  /**
   * Default compare method
   *
   * @param a
   * @param b
   */
  static defaultCompare(a: any, b: any) {
    if (a === b) {
      return 0;
    }
    if (a == null) {
      return 1;
    }
    if (b == null) {
      return -1;
    }
    return a > b ? 1 : -1;
  }

  /**
   * Parse expression, split into items
   * @param expression
   * @returns {string[]}
   */
  static parseExpression(expression: string): string[] {
    expression = expression.replace(/\[(\w+)\]/g, '.$1');
    expression = expression.replace(/^\./, '');
    return expression.split('.');
  }

  /**
   * Get value by expression
   *
   * @param object
   * @param expression
   * @returns {any}
   */
  static getValue(object: any, expression: string[]) {
    for (let i = 0, n = expression.length; i < n; ++i) {
      const k = expression[i];
      if (!(k in object)) {
        return;
      }
      object = object[k];
    }

    return object;
  }

  /**
   * Set value by expression
   *
   * @param object
   * @param value
   * @param expression
   */
  static setValue(object: any, value: any, expression: string[]) {
    let i;
    for (i = 0; i < expression.length - 1; i++) {
      object = object[expression[i]];
    }

    object[expression[i]] = value;
  }

  transform(value: any | any[], expression?: any, reverse?: boolean, isCaseInsensitive: boolean = false, comparator?: Function): any {
    if (!value) {
      return value;
    }

    if (Array.isArray(expression)) {
      return this.multiExpressionTransform(value, expression, reverse, isCaseInsensitive, comparator);
    }

    if (Array.isArray(value)) {
      return this.sortArray(value.slice(), expression, reverse, isCaseInsensitive, comparator);
    }

    if (typeof value === 'object') {
      return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
    }

    return value;
  }

  /**
   * Sort array
   *
   * @param value
   * @param expression
   * @param reverse
   * @param isCaseInsensitive
   * @param comparator
   * @returns {any[]}
   */
  private sortArray(value: any[], expression?: any, reverse?: boolean, isCaseInsensitive?: boolean, comparator?: Function): any[] {
    const isDeepLink = expression && expression.indexOf('.') !== -1;

    if (isDeepLink) {
      expression = OrderPipe.parseExpression(expression);
    }

    let compareFn: Function;

    if (comparator && typeof comparator === 'function') {
      compareFn = comparator;
    } else {
      compareFn = isCaseInsensitive ? OrderPipe.caseInsensitiveSort : OrderPipe.defaultCompare;
    }

    let array: any[] = value.sort((a: any, b: any): number => {
      if (!expression) {
        return compareFn(a, b);
      }

      if (!isDeepLink) {
        if (a && b) {
          return compareFn(a[expression], b[expression]);
        }
        return compareFn(a, b);
      }

      return compareFn(OrderPipe.getValue(a, expression), OrderPipe.getValue(b, expression));
    });

    if (reverse) {
      return array.reverse();
    }

    return array;
  }

  /**
   * Transform Object
   *
   * @param value
   * @param expression
   * @param reverse
   * @param isCaseInsensitive
   * @param comparator
   * @returns {any[]}
   */
  private transformObject(value: any | any[], expression?: any, reverse?: boolean, isCaseInsensitive?: boolean, comparator?: Function): any {

    let parsedExpression = OrderPipe.parseExpression(expression);
    let lastPredicate = parsedExpression.pop();
    let oldValue = OrderPipe.getValue(value, parsedExpression);

    if (!Array.isArray(oldValue)) {
      parsedExpression.push(lastPredicate);
      lastPredicate = null;
      oldValue = OrderPipe.getValue(value, parsedExpression);
    }

    if (!oldValue) {
      return value;
    }

    OrderPipe.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
    return value;
  }

  /**
   * Apply multiple expressions
   *
   * @param value
   * @param {any[]} expressions
   * @param {boolean} reverse
   * @param {boolean} isCaseInsensitive
   * @param {Function} comparator
   * @returns {any}
   */
  private multiExpressionTransform(value: any, expressions: any[], reverse: boolean, isCaseInsensitive: boolean = false, comparator?: Function): any {
    return expressions.reverse().reduce((result: any, expression: any) => {
      return this.transform(result, expression, reverse, isCaseInsensitive, comparator);
    }, value);
  }
}
