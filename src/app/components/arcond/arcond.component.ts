import { Component } from '@angular/core';

@Component({
  selector: 'app-arcond',
  templateUrl: './arcond.component.html',
  styleUrl: './arcond.component.css'
})
export class ArcondComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Isso faz a página subir ao topo suavemente
  }
}
