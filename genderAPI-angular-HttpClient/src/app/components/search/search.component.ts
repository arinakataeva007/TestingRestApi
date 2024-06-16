import { Component, EventEmitter, Output } from '@angular/core';
import { GenderInfo } from '../../models/gender.model';
import { GetInfoAboutGenderService } from '../../services/get-info-about-gender.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-search',
    standalone: true,
    imports: [
      FormsModule,
      ReactiveFormsModule
    ],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss'
})
export class SearchComponent {
    constructor(
        private getInfoMethod: GetInfoAboutGenderService,
    ){}

    @Output() searchEvent =  new EventEmitter<any>();

    public genderInfo!: GenderInfo;
    protected searchForm: FormGroup = new FormGroup({
        name: new FormControl('')
    })

    getInfo(){
      this.getInfoMethod
          .getInfoAboutName(this.searchForm.get('name')?.value)
          .subscribe((data: GenderInfo)=> 
            {
              this.genderInfo = data;
              this.searchEvent.emit(this.genderInfo);
            });
    }

}
