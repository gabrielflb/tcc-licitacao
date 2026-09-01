import { Component } from '@angular/core';
import { Licitacao } from '../model/Licitacao';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-components-grid-licitacoes',
  imports: [NgClass],
  standalone: true,
  templateUrl: './components-grid-licitacoes.html'
})
export class ComponentsGridLicitacoes {
    licitacoes: Licitacao[] = [
    {
      numeroProcesso:'14727/2024',
      numeroLicitacao: 90021,
      status: 'Em Andamento',
      valorEstimado: 0.0,
      valorEstimadoPncp: 0.0,
      valorHomologado: 430043.70,
      dataLicitacao: new Date('2025-05-22'),
      cod_licitacao_contrato_situacao_certame_lcs: 0,
      covid19: false,
      objeto: 'Registro de preços para contratação de empresa especializada para aquisição de aparelhos eletrodomésticos, para atendimento às demandas das Unidades Escolares, da Rede Municipal de Ensino, de Santo Antônio de Jesus-BA.',
      des_nome_arquivo_mid: '84bd28b7-3ae3-449e-8eb0-53c69c42d025.pdf',
      tabela:2,
      detalhe:'133324',
      modalidade: 'Pregão Eletrônico',
      srp: 1
    },
    {
      numeroProcesso:'14727/2024',
      numeroLicitacao: 90021,
      status: 'Em Andamento',
      valorEstimado: 0.0,
      valorEstimadoPncp: 0.0,
      valorHomologado: 430043.70,
      dataLicitacao: new Date('2025-05-22'),
      cod_licitacao_contrato_situacao_certame_lcs: 0,
      covid19: false,
      objeto: 'Registro de preços para contratação de empresa especializada para aquisição de aparelhos eletrodomésticos, para atendimento às demandas das Unidades Escolares, da Rede Municipal de Ensino, de Santo Antônio de Jesus-BA.',
      des_nome_arquivo_mid: '84bd28b7-3ae3-449e-8eb0-53c69c42d025.pdf',
      tabela:2,
      detalhe:'133324',
      modalidade: 'Pregão Eletrônico',
      srp: 1
    },
    {
      numeroProcesso:'14727/2024',
      numeroLicitacao: 90021,
      status: 'Em Andamento',
      valorEstimado: 0.0,
      valorEstimadoPncp: 0.0,
      valorHomologado: 430043.70,
      dataLicitacao: new Date('2025-05-22'),
      cod_licitacao_contrato_situacao_certame_lcs: 0,
      covid19: false,
      objeto: 'Registro de preços para contratação de empresa especializada para aquisição de aparelhos eletrodomésticos, para atendimento às demandas das Unidades Escolares, da Rede Municipal de Ensino, de Santo Antônio de Jesus-BA.',
      des_nome_arquivo_mid: '84bd28b7-3ae3-449e-8eb0-53c69c42d025.pdf',
      tabela:2,
      detalhe:'133324',
      modalidade: 'Pregão Eletrônico',
      srp: 1
    }
  ];

    ngOnInit(){

    }
  
    getPrioridadeClasses(status: string): string {
    switch (status) {
      case 'Em Andamento':
        return 'text-red-600 border-red-500 bg-red-200';
      case 'Finalizado':
        return 'text-yellow-600 border-yellow-500 bg-yellow-200';
      case 'BAIXA':
        return 'text-blue-600 border-blue-500 bg-blue-200';
      default:
        return 'text-gray-600 border-gray-500 bg-gray-200';
    }
  }
}
