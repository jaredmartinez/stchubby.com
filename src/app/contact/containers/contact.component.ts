import {Component, OnInit} from "@angular/core";
import {BasePageComponent} from "../../shared/base-page/base-page.component";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Component({
  selector: 'contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent extends BasePageComponent implements OnInit {

  contact = {
    'form-name': 'contact',
    'bot': '',
    'name': '',
    'phone': null,
    'email': '',
    'subject': '',
    'message': ''
  };

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
  }

  submitForm() {
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('bot-field', this.contact.bot)
      .append('name', this.contact.name)
      .append('email', this.contact.email)
      .append('phone', this.contact.phone)
      .append('subject', this.contact.subject)
      .append('message', this.contact.message);

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('/', this.contact, {headers: headers})
      .subscribe(
      res => {
        console.log('success');
      }
    );
  }

}
