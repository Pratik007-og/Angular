import { Component } from '@angular/core';
import { User } from "./user";
import { EnrollmentService } from "./enrollment.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  errorMsg="";
  topics=["Angular","React","Html"];
  topicHasError=true;
  submitted=false;
  userModel = new User('Pratik','pp@gmail.com',9937022320,'default','Morning',true);

  constructor(private _enrollment:EnrollmentService){}

  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
  onSubmit(){
    this._enrollment.enroll(this.userModel)
        .subscribe(
          data => console.log('Successful'),
          error => this.errorMsg=error.statusText
        )
    this.submitted=true;
  }
}
