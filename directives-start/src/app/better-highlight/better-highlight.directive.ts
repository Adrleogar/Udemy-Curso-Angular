import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') HighlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string ;


  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {

    this.backgroundColor = this.defaultColor;
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.HighlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
