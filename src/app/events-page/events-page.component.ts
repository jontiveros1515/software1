import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit{
  eventView: any;
  
  ngOnInit() {
    this.eventView = this.events[0];
  }

  events: any[] = [
    {
      id: 1,
      name: 'Event 1',
      dateCreated: 'August 21',
      sourceHost: 'Red',
      targetHost: 'Blue',
      connections: '',
      description: 'this is going to be a sample description of what happened during the event'
    },
    {
      id: 2,
      name: 'Event 2',
      dateCreated: 'August 21',
      sourceHost: 'Blue',
      targetHost: 'Red',
      connections: '',
      description: 'this is going to be a sample description of what happened during the event'
    },
    {
      id: 3,
      name: 'Event 3',
      dateCreated: 'August 21',
      sourceHost: 'Red',
      targetHost: 'Blue',
      connections: '',
      description: 'this is going to be a sample description of what happened during the event'
    },
    {
      id: 4,
      name: 'Event 4',
      dateCreated: 'August 21',
      sourceHost: 'Red',
      targetHost: 'Blue',
      connections: '',
      description: 'this is going to be a sample description of what happened during the event'
    },
    {
      id: 5,
      name: 'Event 5',
      dateCreated: 'Chicago',
      sourceHost: 'Red',
      targetHost: 'Blue',
      connections: true,
      description: 'this is going to be a sample description of what happened during the event'
    },
  ]



  eventButton(event: any){
    this.eventView = event;
  }

}
