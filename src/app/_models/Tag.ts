export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly JAVA = new Tag('Java', 'blue');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly NODEJS = new Tag('NodeJs', 'brown');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly REACT = new Tag('React', 'green');
    static readonly CSHARP = new Tag('C#', 'purple');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}