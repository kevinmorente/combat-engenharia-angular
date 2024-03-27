import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Isso faz a página subir ao topo suavemente
  }
}
