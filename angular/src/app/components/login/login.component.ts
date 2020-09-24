import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  // const modal = document.getElementById('id01');
  
  constructor() {

   }

  ngOnInit(): void {
    // window.onclick = function (event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
      }
    }

 // Get the modal
var modal = document.getElementById('id01');
console.log("modal:"+document.getElementById('id01'));
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







