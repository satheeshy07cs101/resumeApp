export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly JAVA = new Tag('Java', 'blue');
    static readonly SPRINGBOOT = new Tag('SpringBoot', 'green');
    static readonly KAFKA = new Tag('Kafka', '#0dcaf0');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly ORACLE = new Tag('Oracle', '#3789b9');
    static readonly CSHARP = new Tag('C#', 'purple');
    static readonly MAVEN = new Tag('Maven', 'purple');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}