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
    {title: 'Bronze', price: '$100', sign: '24” x 15” Sign', detail: 'Sign placed on various course tee boxes', details: [
     '24” x 15” Sign placed on various course tee boxes'
     ]},
    {title: 'Silver', price: '$250', sign: '24” x 30” Sign', detail: 'Sign placed at various premium golf course locations', details: [
    '24” x 30” Sign placed at various premium golf course locations'
    ]},
    {title: 'Gold', price: '$350', sign: '2’ x 6’ Banner', detail: 'Banner placed at various premium locations', details: [
    '2’ x 6’ Banner placed at various premium areas'
    ]},
    {title: 'Platinum', price: '$450', sign: '4’ x 8’ Banner', detail: 'Banner placed at various premium locations', details: [
    '4’ x 8’ Banner placed at various premium areas'
    ]},
    {title: 'Ruby', price: '$1,000', sign: '4’ x 8’ Banner', detail: 'Banner placed at entrance', details: [
    '4’ x 8’ Banner placed at various premium areas',
    'Lunch Table Sign'
    ]},
    {title: 'Diamond', price: '$2,000', sign: '4’ x 8’ Banner', detail: 'Banner placed at entrance', details: [
    '4’ x 8’ Banner placed at various premium areas',
    'Scorecard listing',
    'Lunch Table Sign'
    ]},
    {title: 'Hope Diamond', price: '$5,000', sign: '4’ x 8’ Banner', detail: 'Banner placed at dinner location', details: [
    '4’ x 8’ Banner placed at Registration / Auction / Lunch area',
    'Team of 4 registration included',
    'Scorecard listing',
    'Lunch Table Sign'
    ]},
  ]

}
