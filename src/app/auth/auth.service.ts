import {Injectable , EventEmitter } from '@angular/core'
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'

// import { Subject } from 'rxjs/Subject';

//装饰器,依赖注入,服务中定义方法，
@Injectable()
export class AuthService {

  public eventEmit: any;
  itemIndex:number = 12;//
  changeInService:string = "服务里面的change数据"
  change:EventEmitter<number>;//在服务中发射



    constructor (
        private router: Router
    ){
          // 定义发射事件
          this.eventEmit = new EventEmitter();
          this.change = new EventEmitter();
    }

    public redirectUrl: string

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      
        const url: string = state.url
        
        return this.checkLogin(url)
    }

    checkLogin(url: string): boolean {
        if (this.isLoggedIn()) return true;

        this.redirectUrl = url;
        this.router.navigate(['/user/login']);
        return false;
    }

    isLoggedIn (){
        const user = this.get('user')
        return (user && user.id);
    }


    private keyname: string = 'COINDATAUSER'

    get (key?: string){//判断用户是否登录，登录后可拿到本次用户token
        const itemString = window.sessionStorage.getItem(this.keyname)
        if (!itemString) return null;
        const itemObj = JSON.parse(itemString)
        if (!key|| !itemObj) return itemObj;
        return itemObj[key]? itemObj[key]: itemObj
    }
  
    set (itemObj: any){//登录后调用，将返回的信息token放入session中
        const parse = itemObj =>{
            if (!itemObj) return JSON.stringify({})
            if (typeof itemObj === 'object') return JSON.stringify(itemObj)
            return JSON.stringify({data: itemObj})
        }
  
        return window.sessionStorage.setItem(this.keyname, parse(itemObj))
    }
  
    clear (){//退出登录
        
         window.sessionStorage.setItem(this.keyname, null);
         
         console.log(this.router)
         if(this.router.url=="/home"){
            location.reload();
         }else{
            this.router.navigate(['/home']);
         }
    }

}
