import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss']
})
export class InquiryComponent implements OnInit {

  constructor() { }

  checked:boolean =  false;
  ngOnInit(): void {
  }

  onInquiryToggle(){
    this.checked = !this.checked;
  }

  setStyles2(){
    if(!this.checked)
    {
      return {
        transform: 'translateX(80%)',
        opacity: 0
      }
    }
    return {
      transform: 'translateX(0)',
        opacity: 1
    }
  }

  setStyles1(){
    if(!this.checked)
    {
      return {
        transform: 'translateX(-80%)',
        opacity: 0
      }
    }
    return {
      transform: 'translateX(0)',
        opacity: 1
    }
  }

  setStyles3(){
    if(!this.checked)
    {
      return {
        transform: 'translateY(-20%)',
        opacity: 0,
        width: 0
      }
    }
    return {
      transform: 'translateY(0)',
        opacity: 1,
        width:'100%'
    }
  }

}
