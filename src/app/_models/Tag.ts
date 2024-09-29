export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly JAVA = new Tag('Java', 'blue');
    static readonly SPRINGBOOT = new Tag('SpringBoot', 'green');
    static readonly KAFKA = new Tag('Kafka', '#0dcaf0');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly ORACLE = new Tag('Oracle', '#3789b9');
    static readonly GCP = new Tag('GCP', 'purple');
    static readonly MAVEN = new Tag('Maven', '#748000');
    static readonly PCF = new Tag('PCF', '#54708b');
    static readonly HIBERNATE = new Tag('Hibernate', '#212529');
    static readonly DATASTORE = new Tag('Datastore', 'orange');
    static readonly JBOSS = new Tag('Jboss', '#dee2e6');
    static readonly TOMCAT = new Tag('Tomcat', 'orange');
    static readonly JSF = new Tag('JSF', 'orange');
    static readonly WEBLOGIC = new Tag('Weblogic', '#49505785');
    static readonly GLASSFISH = new Tag('Glassfish', '#54708b99');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}