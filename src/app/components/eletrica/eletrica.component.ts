import { Component } from '@angular/core';

@Component({
  selector: 'app-eletrica',
  templateUrl: './eletrica.component.html',
  styleUrl: './eletrica.component.css'
})
export class EletricaComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Isso faz a página subir ao topo suavemente
  }
}
