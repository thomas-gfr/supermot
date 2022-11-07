import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { IPayments } from 'src/app/shared/entity/payments.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsApiService {
    constructor(
        private request: HttpClient
    ) { }

    public getPaymentsList(params?: object): Observable<IPayments[]> {

        environment.httpOptions.params = new HttpParams();
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (value !== null && value !== undefined) environment.httpOptions.params = environment.httpOptions.params.append(key, value);
            }
        }

        return this.request.get<IPayments[]>(environment.BASE_API + '/payments', environment.httpOptions).pipe(retry({ count: 1, delay: 1000 }));
    }

    public getPaymentById(id: number): Observable<IPayments> {
        environment.httpOptions.params = new HttpParams();
        return this.request.get<IPayments>(environment.BASE_API + '/payments/' + id, environment.httpOptions);
    }

    public createPayment(payment: IPayments): Observable<IPayments> {
        environment.httpOptions.params = new HttpParams();
        return this.request.post<IPayments>(environment.BASE_API + '/payments', payment, environment.httpOptions);
    }

    public updatePayment(payment: IPayments): Observable<IPayments> {
        environment.httpOptions.params = new HttpParams();
        return this.request.put<IPayments>(environment.BASE_API + '/payments/' + payment.id, payment, environment.httpOptions);
    }

    public deletePayment(id: number): Observable<IPayments> {
        environment.httpOptions.params = new HttpParams();
        return this.request.delete<IPayments>(environment.BASE_API + '/payments/' + id, environment.httpOptions);
    }

}
