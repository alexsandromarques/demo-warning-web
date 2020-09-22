import { Tag } from '../tag/tag';

export class Gasto {
    id: number;
    nome: string;
    descricao: string;
    dataHora: string;
    valor: string;
    tags: Tag[];
}