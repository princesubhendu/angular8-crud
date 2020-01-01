import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Material} from "./material.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "./api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
   baseUrl: string = 'https://node-api3.azurewebsites.net/api/material/';
  //baseUrl: string = 'http://127.0.0.1:3000/api/material/';

  
  getMaterials() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getMaterialById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createMaterial(material: Material): Observable<ApiResponse> {
    console.log(material);
    return this.http.post<ApiResponse>(this.baseUrl, material);
  }

  updateMaterial(material: Material): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + material.id, material);
  }

  deleteMaterial(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}