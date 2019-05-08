import { CanActivate } from '@angular/router';

export class PermissionGuard implements CanActivate {
  canActivate():
    | boolean
    | import ('@angular/router').UrlTree
    | import ('rxjs').Observable<boolean | import ('@angular/router').UrlTree>
    | Promise<boolean | import ('@angular/router').UrlTree> {
    const hasPromission: boolean = Math.random() < 0.5;
    if (!hasPromission) {
      console.log('用户无权访问此股票详情');
    }
    return hasPromission;
  }
}
