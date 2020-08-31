import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
// importing service classes
import  { UserService } from '../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  showsuccessmessage : boolean;
  servererrormessages: string;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showsuccessmessage=true;
        setTimeout(() => this.showsuccessmessage= false,4000);
      },
      err => {
        if(err.status == 422){
          this.servererrormessages = err.error.join('<br>');
          
        }
        else{
          this.servererrormessages = 'something went wrong';
        }
      }
    )
  }

}
