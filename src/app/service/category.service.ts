import { Injectable } from '@angular/core';
import { Category } from '../interface/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080/api/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(baseUrl)
  }
}
