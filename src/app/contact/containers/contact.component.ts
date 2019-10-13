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
    bot: '',
    name: '',
    phone: null,
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
  }

  submitForm() {
    const body = new HttpParams()
      .set('form-name', 'contact-form')
      .append('name', this.contact.name)
      .append('email', this.contact.email)
      .append('phone', this.contact.phone)
      .append('subject', this.contact.subject)
      .append('message', this.contact.message);

    let headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');

    this.http.post('/', body.toString(), {headers: headers})
      .subscribe(
      res => {
        console.log('success');
      }
    );
  }

}
