import { Component } from '@angular/core';

@Component({
  selector: 'app-automacao',
  templateUrl: './automacao.component.html',
  styleUrl: './automacao.component.css'
})
export class AutomacaoComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Isso faz a página subir ao topo suavemente
  }
}
