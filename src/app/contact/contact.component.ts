import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  template: `<h1>Contact Us</h1>
                <p>TekTutorialsHub </p>`
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
