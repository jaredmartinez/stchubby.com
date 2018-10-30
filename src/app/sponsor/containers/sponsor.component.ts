import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sponsor',
  templateUrl: 'sponsor.component.html',
  styleUrls: ['sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  sponsorLevels = [
    { title: 'Bronze', price: '$100', signSize: '24” x 15” Sign', text1: 'Sign placed on various tee boxes throughout the course', text2: 'Company mention on the St. Chubby Website.' },
    { title: 'Silver', price: '$250', signSize: '24” x 30” Sign', text1: 'Sign placed at various premium golf course locations', text2: 'Company mention on the St. Chubby Website.' },
    { title: 'Gold', price: '$350', signSize: '2\' x 6\' Banner', text1: 'Banner placed at various premium golf course locations', text2: 'Company mention on the St. Chubby Website.' },
    { title: 'Platinum', price: '$450', signSize: '4\' x 8\' Banner', text1: 'Banner placed at entrance or registration table', text2: 'Company logo on the St. Chubby Website' },
    { title: 'Diamond', price: '$2000', signSize: '4\' x 8\' Banner', text1: 'Banner placed at dinner location & 2 team registration included', text2: 'Company logo on the St. Chubby Website' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
