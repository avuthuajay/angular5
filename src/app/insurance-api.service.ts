import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from './insurance-advisor';
import { PolicyDetail } from './policy-detail';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {
  baseURL = 'http://localhost:3000/';
  lifeInsuranceURL = this.baseURL + 'lifeInsurance/';
  header = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http: HttpClient) { }
  findAllAdvisors(): Observable<InsuranceAdvisor[]> {
    const adviseURL = this.baseURL + 'advisors';
    return this.http.get<InsuranceAdvisor[]>(adviseURL);
  }

  findPolicy(): Observable<PolicyDetail[]> {

    return this, this.http.get<PolicyDetail[]>(this.lifeInsuranceURL);
  }
  addPolicy(policy: PolicyDetail): Observable<PolicyDetail> {
    return this.http.post<PolicyDetail>(this.lifeInsuranceURL, policy, { headers: this.header })
  }

  removePolicy(policy: PolicyDetail): Observable<PolicyDetail> {
    const deleteURL = this.lifeInsuranceURL+policy.id;
    return this.http.delete<PolicyDetail>(deleteURL, { headers: this.header });
  }

  updatePolicy(policy: PolicyDetail): Observable<PolicyDetail> {
    const updateURL = this.lifeInsuranceURL+policy.id;
    return this.http.put<PolicyDetail>(updateURL, policy, { headers: this.header });
  }

}
