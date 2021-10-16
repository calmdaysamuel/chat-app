import { Injectable } from '@angular/core';
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';

const config: Config = {
  dictionaries: [adjectives, colors, animals],
  separator: '-',
};

@Injectable({
  providedIn: 'root',
})
export class AppService {
  username: string = '';
  constructor() {
    this.username = uniqueNamesGenerator(config);
    let words = this.username.split('-');
    this.username = '';
    for (let i in [0, 1, 2]) {
      this.username += words[i].charAt(0).toUpperCase() + words[i].substr(1);
    }
    console.log(this.username);
  }
}
