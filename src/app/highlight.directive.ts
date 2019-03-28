import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  showMovies = {
    movie1: 'The Godfather',
    movie2: 'The Shawshank Redemption (1994)',
    movie3: 'Gone With the Wind (1939)',
    movie4: 'Casablanca (1942)',
    movie5: 'It\'s a Wonderful Life (1946)',
    movie6: 'Schindler\'s List (1993)',
    movie7: 'Star Wars'
  };

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red')
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }

}
