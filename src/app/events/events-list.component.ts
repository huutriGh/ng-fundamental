import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <!-- <div class="well">
        <div >Hello world</div>
      </div> -->

      <events-thumbnail [event]="event1"></events-thumbnail>
    </div>
  `,
  styles: [
    `
      .well div {
        color: red;
      }
    `,
  ],
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: "Angular Connect",
    date: "9/9/1996",
    time: "18:08 PM",
    price: "88.88$",
    image: "assets/angularconnect-shield.png",
    location: {
      address: "88 UB",
      city: "Uong Bi",
      country: "Viet Nam",
    },
  };

  //   handleEventClicked = (data: any) => {
  //     console.log('receive:', data);
  //   };
}
