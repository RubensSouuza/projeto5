export class Produto{
    id: number;
    nome: string;
    categoria: string;
    descricao: string;
    icone: string;
    imagem: string;
    
    constructor(id ?: number, nome ?: string, categoria ?: string, descricao ?: string, icone ?: string, imagem ?: string){
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.descricao = descricao;
        this.icone = icone;
        this.imagem = imagem;
    }
}
