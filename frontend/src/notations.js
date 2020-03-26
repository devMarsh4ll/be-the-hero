
/*Sempre que colocarmos uma variável, função ou qualquer JS dentro do html,
Usamos as chaves*/
/**
 * COMPONENTES:
 * é uma função que retorna um HTML
 * PROPRIEDADES:
 * propriedade children: Propriedade criada de forma automatica
 * Retorna todo o conteudo dentro de uma tag, seja ele texto ou HTML
 * Destruturação usar entre chaves, só o que você precisa
 * Ver exemplo abaixo!
 * 
 * 
 * ESTADO/IMUTABILIDADE
 * Uma informação que vai ser mantida pelo componente.
 * Imagine que o componente precise armazenar algum tipo de informação
 * por exemplo (input do usuário,api externa, listagem de usuário)
 * e precisamos alterar ou interagir com essa informação
 * No React não usamos variáveis convencionais, usamos o conceito de Estado
 * 
 * Por uma questão de performance, não podemos manipular um valor de estado
 * de uma forma direta, por causa do conceito de imutabilidade, nesse caso, 
 * fazemos a sobreposição.o React tem uma funcionalidade chamada useState
 * que retorna um array com o valor originar da variável, e uma função que
 * altera o valor dela. 
 */
//App é função principal que vai ser aplicada!
/**
 * Exemplo componente
 * COMPONENTES SEMPRE TEM A PRIMEIRA LETRA MAIÚSCULA!
 */
    function Header(){
        return (
            <header>
                <h1>Hello World</h1>
            </header>
        );
    };
/**
 * Podemos usar esse componente header em outras funções, lembrando que:
 * Se for feito em um arquivo separado, essa função deverá ser importada!
 * 
 * Exemplo:
 */
    function App(){
        return (
        <Header />
        );
    };
/** Exemplo Propriedade
 * Vamos supor que queremos aproveitar um atributo que esteja dentro
 * da tag
 */

function App(){
    return (
   
      <Header message="Hello World"></Header>
         
    );
};

/**
 * Podemos usar essa propriedade "message" dessa forma: */
function Header (props) {
    return (
        <header>
            {props.message}
        </header>
    )
}
/**
 * Tambem existe uma propriedade criada de forma automatica no react
 * Por exemplo:
 */

function App(){
    return (
      <Header>
          Hello World!
      </Header>
    );
};
/**
 * Existe a propriedade chamada "children", que retorna todo conteudo
 * seja ele texto, tag.
 * Se quisemos pegar o "Hello World" dentro da tag, fazemos assim:
 */

function Header (props) {
    return (
        <header>
            {props.children}
        </header>
    )
}
/**
 * podemos desestruturar também , para pegar só o children.
 */
function Header ({children}) {
    return (
        <header>
            {children}
        </header>
    )
}

/**
 * Exemplo de estado/imutabilidade!
 */

function App() {
    const [counter,setCounter] = useState(0);
    // Array [valor, funçãodeAtualização]
    //useState retorna um array = [valororiginal, função que altera o valor]
    function increment() {
      setCounter(counter + 1);
    };
  
    return (
      <div>
        <Header>Contador: {counter}</Header>
        <button onClick={increment}> Incrementar</button>    
     </div>
    );
  }
  