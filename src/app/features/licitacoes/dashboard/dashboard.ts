import { Component } from '@angular/core';
import { ComponentsGridLicitacoes } from '../../../components-grid-licitacoes/components-grid-licitacoes';
import { Sidebar } from '../../../components/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
 imports: [ComponentsGridLicitacoes, Sidebar],
  templateUrl: './dashboard.html'
})
export class Dashboard {}
