import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderStatusService {
  private orderStatuses = [
    { label: '✅ Order Confirmed', color: 'bg-blue-100 text-blue-700' },
    { label: '📦 Preparing Your Course', color: 'bg-yellow-100 text-yellow-700' },
    { label: '🚀 Almost Ready', color: 'bg-orange-100 text-orange-700' },
    { label: '🎉 Enrolled Successfully!', color: 'bg-green-100 text-green-700' },
  ];

  getOrderStatus(): Observable<{ label: string; color: string }> {
    return new Observable((observer) => {
      let counter = 0;
      const intervalRef = setInterval(() => {
        if (counter === this.orderStatuses.length) {
          observer.complete();
          clearInterval(intervalRef);
          return;
        }
        observer.next(this.orderStatuses[counter]);
        counter++;
      }, 2000);

      return {
        unsubscribe() {
          clearInterval(intervalRef);
        }
      };
    });
  }
}
