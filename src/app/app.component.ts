import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _http: HttpClient) {}

  public result: any[];
  public filteredData: any[];

  public filterSearch(event) {
    const { value = '' } = event;
    this.filteredData = this.result.filter(cv => cv.email.includes(value));
  }

  ngOnInit() {
    this._http
      .get('https://reqres.in/api/users?page=2')
      .subscribe((val: any) => {
        this.result = val.data;
        this.filteredData = this.result;
      });
  }
}
