import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AssetTraceability } from '../models/asset-traceability.model';

@Injectable({
  providedIn: 'root'
})
export class AssetTraceabilityService {
  private assetDashBoard = 'http://localhost:8081/assets';

  constructor(private http: HttpClient) {}

  getAssets(): Observable<any[]> {
    return this.http.get<any[]>(this.assetDashBoard);
  }
}
