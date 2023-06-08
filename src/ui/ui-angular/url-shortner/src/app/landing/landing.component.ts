import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {
  public longURL: string='';
  public shortURL: string='';

  constructor(private http: HttpClient) { }

  convertToShortURL() {
    // Call your API here to convert the long URL to a short URL
    // Replace 'your-api-url' with the actual API endpoint
    this.http.post<any>('your-api-url', { longURL: this.longURL })
      .pipe(
        tap(data => {
          this.shortURL = data.shortURL;
        })
      )
      .subscribe({
        error: error => {
          console.error('Error:', error);
        }
      });
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.shortURL)
      .then(() => {
        alert('Copied to clipboard: ' + this.shortURL);
      })
      .catch(error => {
        console.error('Error copying to clipboard:', error);
      });
  }
}
