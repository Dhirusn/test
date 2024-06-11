import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { IToken } from '../../models/entity';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

    constructor(
        private route: ActivatedRoute,
        private router: Router, private auth: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var token = localStorage.getItem('token') as any;
        const tokenInfo = JSON.parse(token) as IToken;
        const helper = new JwtHelperService();
        if (req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone({
                setHeaders: {
                    'Cache-Control': 'no-cache',
                    Pragma: 'no-cache',
                    Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
                }
            }));
        }
        if (tokenInfo && tokenInfo.accessToken) {
            if (!helper.isTokenExpired(tokenInfo.accessToken)) {
                req = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${tokenInfo.accessToken}`,
                        'Cache-Control': 'no-cache',
                        Pragma: 'no-cache',
                        Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
                    }
                });

                return next.handle(req).pipe(catchError((err) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            localStorage.removeItem('token');
                            this.router.navigate(['/login']);
                        }
                    }
                    throw err;
                }));
            } else {
                return of();
            }
        }

        localStorage.removeItem('token');
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigate(['/login'], { queryParams: { returnUrl } });
        return of();
    }
}