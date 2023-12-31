import { Component, Input } from "@angular/core";

@Component({
  selector: "events-thumbnail",
  template: ` <div class="well hoverwell thumbnail">
    <h2>{{ event?.name }}</h2>
    <div>Date: {{ event?.date }}</div>
    <!-- <div
      [ngClass]="{
        green: event?.time === '8:00 am',
        getStartTimeClass: event?.time === '8:00 am'
      }"
      [ngSwitch]="event?.time"
    > -->
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
      <!-- <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time"> -->
      Time: {{ event?.time }}
      <span *ngSwitchCase="'8:00 am'">Early Start</span>
      <span *ngSwitchCase="'10:00 am'">Late Start</span>
      <span *ngSwitchDefault>Normal Start</span>
    </div>

    <div>Price: \${{ event?.price }}</div>
    <div [hidden]="!event?.location">
      <span>Location: {{ event?.location?.address }}</span>
      <span>&nbsp;</span>
      <span class="pad-left"
        >{{ event?.location?.city }}, {{ event?.location?.country }}</span
      >
    </div>
    <div *ngIf="event?.onlineUrl">OnlineUrl: {{ event?.onlineUrl }}</div>
    <!-- <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button> -->
  </div>`,
  styles: [
    `
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 8px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventsThumbnailComponent {
  @Input() event: any;
  //   @Output() eventClick = new EventEmitter()

  //   handleClickMe = () => {
  //     this.eventClick.emit(this.event?.name);
  //   }

  // getStartTimeClass() {
  //   if (this.event && this.event.time == "8:00 am") return "green bold";
  //   return "";
  // }
  getStartTimeClass() {
    if (this.event && this.event.time == "8:00 am") return ["green", "bold"];
    return [];
  }
  // getStartTimeClass() {
  //   const isEarlyStart = this.event && this.event.time == "8:00 am";
  //   return { green: isEarlyStart, bold: isEarlyStart };
  // }
}
