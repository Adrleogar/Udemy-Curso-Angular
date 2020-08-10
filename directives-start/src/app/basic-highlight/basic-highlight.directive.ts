import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighLight]'
})
export class BasicHighlightDirective implements  OnInit{
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.borderStyle = 'dotted solid double';
    this.elementRef.nativeElement.style.color = 'blue';
    this.elementRef.nativeElement.style.borderColor = 'pink';
    this.elementRef.nativeElement.style.textAlign = 'center';


  }
}
