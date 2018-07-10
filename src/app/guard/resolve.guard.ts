import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";

import {Observable} from "rxjs";
import {Product} from "../product/pro-detail/pro-detail.component";
import {Injectable} from "@angular/core";
//resolve定义数据范式，路由守卫
@Injectable()
class ResolveGuard  implements Resolve<Product>{

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
    let productId:number = route.params['id'];

    if(productId == 1) {
      return undefined;
    }else{
      this.router.navigate(['/home']);
      return undefined;
    }
  }
  constructor(private router: Router){

  }

}
