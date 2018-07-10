import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "../product/product.component";
export class UnSaveGuard implements CanDeactivate<ProductComponent> {
  canDeactivate() {
    return window.confirm("你还没有保存.确定要离开么?");
  }
}
