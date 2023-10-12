import { Component, Input } from "@angular/core";

@Component({
  selector: "events-thumbnail",
  template: ` <div class="well hoverwell thumbnail">
    <h2>{{ event.name }}</h2>
    <div>Date: {{ event.date }}</div>
    <div>Time: {{ event.time }}</div>
    <div>Price: \${{ event.price }}</div>
    <div>
      <span>Location: {{ event.location.address }}</span>
      <span>&nbsp;</span>
      <span class="pad-left">{{ event.location.city }}, {{ event.location.country }}</span>
    </div>
    <!-- <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button> -->
  </div>`,
  styles: [
    `
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
  //     this.eventClick.emit(this.event.name);
  //   }
}
