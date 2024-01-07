import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWords500]'
})
export class Words500Directive {

  private wordCount: number = 0;
  private maxWords: number = 50;
  private borderColor: string = 'initial';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input', ['$event']) onInput(event: Event): void {
    const inputValue: string = (event.target as HTMLInputElement).value;
    this.wordCount = this.countWords(inputValue);

    if (this.wordCount > this.maxWords) {
      const truncatedValue: string = this.truncateWords(inputValue, this.maxWords);
      (event.target as HTMLInputElement).value = truncatedValue;
      this.wordCount = this.maxWords;
    }

    this.updateBorderColor();
  }

  private countWords(text: string): number {
    const words = text.split(/\s+/);
    return words.length;
  }

  private truncateWords(text: string, maxWords: number): string {
    const words = text.split(/\s+/).slice(0, maxWords);
    return words.join(' ');
  }



  private updateBorderColor(): void {
    if (this.wordCount >= this.maxWords) {
      this.borderColor = 'red';
    } else {
      this.borderColor = 'black';
    }

    console.log('Border color:', this.borderColor);

    this.renderer.setStyle(this.el.nativeElement, 'border-color', this.borderColor);
  }

}
