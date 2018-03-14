import { Component, OnInit } from '@angular/core';
import { CheckUserLoginService } from '../checkuserlogin.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    moduleId: module.id.toString(),
    selector: 'checkuserlogin',
    templateUrl: 'checkuserlogin.component.html',
    styleUrls: ['./checkuserlogin.component.css']
})

export class CheckUserLoginComponent implements OnInit{
     isUserLogin:boolean;
    constructor(private route: ActivatedRoute,
        private router: Router,private checkUserLoginService:CheckUserLoginService) { }

    ngOnInit() {
       this.isUserLogin=this.checkUserLoginService.getUserStatus();
       console.log(this.isUserLogin);
       if ( !this.isUserLogin){
            this.router.navigate(['/login']);
       }
       
    }
    logout(){
        this.checkUserLoginService.setUserStaus(false);
         this.router.navigate(['/logout']);

    }
    
}