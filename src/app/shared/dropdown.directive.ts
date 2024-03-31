import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.isOpen = (target.className == 'navbar-toggler-icon')
      ? !this.isOpen
      : false;
  }
  constructor() {}
}