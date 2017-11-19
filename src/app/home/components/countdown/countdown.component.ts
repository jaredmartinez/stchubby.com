import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'countdown',
  templateUrl: 'countdown.component.html',
  styleUrls: ['countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Input() tournamentDate: Date = new Date();

  days;
  hours;
  minutes;
  seconds;

  constructor() { }

  ngOnInit() {
    let countDownDate = this.tournamentDate.getTime();

    setInterval(() => {
      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now an the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);

  }

}
