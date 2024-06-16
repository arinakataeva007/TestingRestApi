import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { GenderInfo } from '../../models/gender.model';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    SearchComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
    constructor(){}
    showInfo(genderInfo: GenderInfo){
        console.log("Hello",genderInfo);
    }

}
