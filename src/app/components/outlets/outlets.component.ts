import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.css']
})
export class OutletsComponent implements OnInit {
  shops:any;

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.apiservice.apiCallShops().subscribe((response: any) => {
      this.shops = response;
    });
  }

}
