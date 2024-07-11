import { Component, OnInit } from '@angular/core';
import { ImagegetService } from '../imageget.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

interface Cloth {
  id: number;
  name: string;
  color: string;
  colorCode: string;
  templateUrl: string;
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  clothes: Cloth[] = [];

  constructor(private imagegetservice: ImagegetService){}

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages(): void {
    this.imagegetservice.getImage().subscribe(
      (data: Cloth[]) => {
        this.clothes = data;
      },
      (error) => {
        console.error('Error fetching images:', error);
      }
    );
  }

}
