import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  chartDataURL = "assets/data.json";

  constructor(private http: HttpClient) { }

  getChartData() {
    return this.http.get(this.chartDataURL, { responseType: 'json' })
  }


}
