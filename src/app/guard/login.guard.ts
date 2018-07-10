import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute,
  Params, NavigationStart, NavigationEnd,
} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    public router: Router,
    private routerInfo : ActivatedRoute
  ){

  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean>|Promise<boolean>|boolean {

    // let loggedIn:boolean = Math.random() <0.5;
    //
    // if(!loggedIn){
    //   console.log("LoginGuard:用户未登录"+new Date());
    // }
    //
    // return loggedIn;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) { // 当导航成功结束时执行
        console.log('NavigationEnd:', event);
      }
    });

    return true;

  }

}

