import {HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';


const TOKEN_HEADER_KEY = 'x-api-key';
const TOKEN_HEADER_VALUE = 'live_vh3Z8ka3pB3H6DegryAkeV6ANWJ1VC0U9jpCoPvgusX5vDt3BQqkjyNpyO4ntmTS'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let keyReq = req;
    if (TOKEN_HEADER_VALUE != null) {
      keyReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, TOKEN_HEADER_VALUE)});
    }
    return next.handle(keyReq);
  }
}

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
