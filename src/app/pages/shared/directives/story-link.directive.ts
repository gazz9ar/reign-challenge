import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[storyLink]'
})
export class StoryLinkDirective {

  @Output() clickOutside:EventEmitter<Event> = new EventEmitter<Event>();
  constructor(private _eref: ElementRef) { }
	
  @HostListener('window:click')
  private onClickBody(e:Event) {
    if (!this.isClickInElement(e)) {
        this.clickOutside.emit(e);
    }
  }

  private isClickInElement(e:any):boolean {
    return this._eref.nativeElement.contains(e.target);
  }
}
