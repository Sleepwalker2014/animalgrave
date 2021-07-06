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
    const dateString = new Date(Date.parse(this.selectedDate)).getDate();

    this.speakers = this.getSpeakers().filter(object => {
      console.log(object.born);
      console.log(dateString);
      return object.born == dateString;
    });
  }

  getSpeakers() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });

    return this.speakers;
  }
}
