import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  imageSlider: string = 'assets/client/img/slider/slide1.jpg';
  textSliderConstant: string[] = ["<h3>MEGA SALE -30%</h3>" +
  "<p>Winter collection for women's. <br>We all have choices for you. Check it out!</p>" +
  '<p class="fr-slider-more-wrap">' +
      '<a class="fr-slider-more btn btn-primary" href="#">View collection</a>' +
  '</p>', 
	"<h3>NEW COLLECTION</h3>" +
  "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Aliquam consequuntur dolorem doloribus fuga harum</p>" +
  '<p class="fr-slider-more-wrap">' +
      '<a class="fr-slider-more btn btn-primary" href="#">Shopping now</a>' +
  '</p> '    ,

  "<h3>SUMMER TRENDS</h3>" +
  "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Aliquam consequuntur dolorem doloribus fuga harum</p>" +
  '<p class="fr-slider-more-wrap">' +
  '<a class="fr-slider-more btn btn-primary" href="#">Start shopping</a>' +
 '</p>']

 openActive1: String = 'active';
 openActive2: String = '';
 openActive3: String = '';
  textSlider: string = this.textSliderConstant[0];
  changeSlider(index: number) {
    switch (index) {
      case 0:
        this.imageSlider = 'assets/client/img/slider/slide1.jpg';
        this.textSlider = this.textSliderConstant[0];
        this.openActive1 = 'active';
        this.openActive2 = '';
        this.openActive3 = '';
        break;
      case 1:
        this.imageSlider = 'assets/client/img/slider/slide2.jpg';
        this.textSlider = this.textSliderConstant[1];
        this.openActive1 = '';
        this.openActive2 = 'active';
        this.openActive3 = '';
        break;
      case 2:
        this.imageSlider = 'assets/client/img/slider/slide3.jpg';
        this.textSlider = this.textSliderConstant[2];
        this.openActive1 = '';
        this.openActive2 = '';
        this.openActive3 = 'active';
        break;
    }
  }
}
