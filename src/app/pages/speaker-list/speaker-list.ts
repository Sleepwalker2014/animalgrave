import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import {forEach} from '@angular-devkit/schematics';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  speakers: any[] = [];
  selectedDate: any;

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  onChangeDate(value) {
    this.selectedDate = value;

    this.speakers = this.getSpeakers().filter(object => {
      console.log(new Date(object.born).getTime());
console.log(new Date(new Date(this.selectedDate)));
      return object.born == value;
    });
  }

  getSpeakers() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });

    return this.speakers;
  }
}
