import {
  Component,
  OnInit
} from '@angular/core';
import * as Chartist from 'chartist';
// import * as CanvasJS from '../../canvasjs.min';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// progress bar
color = 'primary';
mode = 'indeterminate';
value = 50;
bufferValue = 100;
loading = true;
 // progress bar
  bookings: any;

  // bookings data
  checkinDate: any;
  checkoutDate: any;
    // bookings data
    public today = moment();
 m :any;
 t :any;
 w :any;
 th :any;
 f :any;
 s :any;
 su :any; 
 jan :any = [];
 feb  :any = [];
 mar :any= [];
 apr :any= [];
 may :any= [];
 jun :any= [];
 jul :any= [];
 aug :any= [];
 sep :any= [];
 oct :any= [];
 nov :any= [];
 dec :any= [];
 dayilySales_array: any = [];
 counter = 0;
 monthArray: any [];
  constructor(private http: HttpClient, private router: Router) {}
  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });
    seq2 = 0;
  };
  ngOnInit() {
    this.loading = true;
    console.log(this.today);
    this.http.get('https://doyenowebapp2.azurewebsites.net/api/bookings').
    subscribe(data => {
      this.bookings = data;
      // this.loading = false;
      for ( const booking of this.bookings ) {
        const bookingDataArray: any = booking.BookingData;
        console.log(booking);

        this.checkinDate = bookingDataArray.checkin;
        this.checkoutDate = bookingDataArray.checkout;
        this.dailySales(booking);
        this.totalSales(booking);
      }
      this.loading = false;
    }, error => {
      console.log(error);
    });

    // this.graph()
  }
  dailySales(booking: any){
    console.log(booking.BookingDate);
    // let booking_day = moment(booking.BookingDate).format("YYYY-MM-DD ");
    // let today = moment(booking.BookingDate).format("YYYY-MM-DD ");
    let booking_day = moment(booking.BookingDate);
    let today = moment(this.today);
    console.log(today.diff(booking_day, "days"));
    let diff = today.diff(booking_day, "days");
    if(diff === 0){
      console.log("success");
    }else {
      let day = moment(this.today).format('dd');
      if(day === 'Mon'){
        this.m = 0;
      }else if(day === 'Tue'){
        this.t = 0;
      } else if(day === 'Wed'){
        this.w = 0;
      } else if(day === 'Thu'){
        this.th = 0;
      } else if(day === 'Fri'){
        this.f = 0; 
      } else if(day === 'Sat'){
        this.s = 0;
      } else if(day === 'Sun'){
        this.su = 0;
      }
     
    }

  }
  totalSales(booking: any){
    let booking_day = moment(booking.BookingDate);
    let current_year = this.today.format('YYYY');
    if(booking_day.format('YYYY') === current_year){
      if(booking_day.format('MM') === '01'){
        this.jan.push(booking_day);
      } else if(booking_day.format('MM') === '02'){
        this.feb.push(booking_day);
      } else if(booking_day.format('MM') === '03'){
        this.mar.push(booking_day);
      } else if(booking_day.format('MM') === '04'){
        this.apr.push(booking_day);
      } else if(booking_day.format('MM') === '05'){
        this.may.push(booking_day);
      } else if(booking_day.format('MM') === '06'){
        this.jun.push(booking_day);
      } else if(booking_day.format('MM') === '07'){
        this.jul.push(booking_day);
      } else if(booking_day.format('MM') === '08'){
        this.aug.push(booking_day);
      } else if(booking_day.format('MM') === '09'){
        this.sep.push(booking_day);
      } else if(booking_day.format('MM') === '10'){
        this.oct.push(booking_day);
      } else if(booking_day.format('MM') === '11'){
        this.nov.push(booking_day);
      } else if(booking_day.format('MM') === '12'){
        this.dec.push(booking_day);
      }
      this.monthArray = [
        this.jan.length,
        this.feb.length,
        this.mar.length,
        this.apr.length,
        this.may.length,
        this.jun.length,
        this.jul.length,
        this.aug.length,
        this.sep.length,
        this.oct.length,
        this.nov.length,
        this.dec.length
      ]
    } else {
      this.jan = 0;
      this.feb = 0; 
      this.mar = 0;
      this.apr = 0;
      this.may = 0; 
      this.jun = 0;
      this.jul = 0;
      this.aug = 0;
      this.sep = 0;
      this.oct = 0;
      this.nov = 0; 
      this.dec = 0; 
    }
    this.graph()

  }
  graph(){
    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
    const dataDailySalesChart: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
        [this.m,this.t,this.w,this.th,this.f,this.s,this.su]
        // [50, 17, 7, 17, 23, 18, 38]
      ]
    };
    const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
    }
    const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
    this.startAnimationForLineChart(dailySalesChart);
    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
    const dataCompletedTasksChart: any = {
      labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
      series: [
        [230, 750, 450, 300, 280, 240, 200, 190]
      ]
    };
    const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
    const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
    // start animation for the Completed Tasks Chart - Line Chart
    this.startAnimationForLineChart(completedTasksChart);
    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
    const datawebsiteViewsChart = {
      labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      series: [
        // [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
        this.monthArray

      ]
    };
    const optionswebsiteViewsChart = {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 100,
      chartPadding: {
        top: 0,
        right: 5,
        bottom: 0,
        left: 0
      }
    };
    const responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    const websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

    // start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(websiteViewsChart);
  } 
  toBookings(){
    this.router.navigate(['adminLayout/bookings']);
  }

}
