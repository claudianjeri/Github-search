import { Component, OnInit } from '@angular/core';
import{ ServiceService} from '../service.service';
import {User } from '../user';
import { Repository} from '../repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any;
 repos:any;
 username:string;

  constructor(private serviceservice: ServiceService) { }
  Search(){
        this.serviceservice.updateProfile(this.username);

    this.serviceservice.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });

    this.serviceservice.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
    
  
 

  ngOnInit() {
  }

}

