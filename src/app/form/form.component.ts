import { Component, OnInit } from '@angular/core';
import{ ServiceService} from '../service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username:string;
  constructor(private serviceservice: ServiceService) { 
    }
findProfile(){
      this.serviceservice.updateProfile(this.username);
}
      ngOnInit() {
  }

}
