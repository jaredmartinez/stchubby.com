import {Component, OnInit} from '@angular/core';
import {AppConstants} from "../../app.constants";

@Component({
  selector: 'sponsor',
  templateUrl: 'sponsor.component.html',
  styleUrls: ['sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  sponsorDate: Date = AppConstants.DUE_DATE;

  sponsorDetails = [
    {title: 'Bronze', price: '$100', sign: '24” x 15” Sign', detail: 'Sign placed on various course tee boxes', details [
     '24” x 15” Sign',
     'Sign placed on various course tee boxes'
     ]},
    {title: 'Silver', price: '$250', sign: '24” x 30” Sign', detail: 'Sign placed at various premium golf course locations', details: [
    '24” x 30” Sign',
    'Sign placed at various premium golf course locations'
    ]},
    {title: 'Gold', price: '$350', sign: '2’ x 6’ Banner', detail: 'Banner placed at various premium locations', details: [
    '2’ x 6’ Banner',
    'Placed at various premium areas'
    ]},
    {title: 'Platinum', price: '$450', sign: '4’ x 8’ Banner', detail: 'Banner placed at various premium locations', details: [
    '4’ x 8’ Banner',
    'Placed at various premium areas'
    ]},
    {title: 'Ruby', price: '$1,000', sign: '4’ x 8’ Banner', detail: 'Banner placed at entrance', details: [
    '4’ x 8’ Banner',
    'Placed at various premium areas'
    ]},
    {title: 'Diamond', price: '$2,000', sign: '4’ x 8’ Banner', detail: 'Banner placed at entrance', details: [
    '4’ x 8’ Banner',
    'Lunch Table Sign'
    ]},
    {title: 'Hope Diamond', price: '$5,000', sign: '4’ x 8’ Banner', detail: 'Banner placed at dinner location', details: [
    '4’ x 8’ Banner',
    'Sign placed at various premium golf course locations'
    ]},
  ]

}
