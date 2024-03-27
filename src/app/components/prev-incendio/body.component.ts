import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Isso faz a página subir ao topo suavemente
  }
}
