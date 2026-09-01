export interface Licitacao{
    numeroProcesso: string;
    numeroLicitacao:number;
    dataLicitacao: Date;
    objeto: string;
    tabela: number;
    detalhe: string;
    modalidade: string;
    status: string;
    covid19: boolean;
    srp: number;
    valorEstimado: number;
    valorEstimadoPncp: number;
    valorHomologado: number;
    cod_licitacao_contrato_situacao_certame_lcs: number;
    des_nome_arquivo_mid: string;
}