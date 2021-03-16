
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemQuestionsService implements InMemoryDbService {
  createDb() {
    let perguntas =
    [
      { id: 1, pergunta: 'Qual o seu comportamento relação aos seus investimentos?',
        alternativas: [
          'Preservar meu dinheiro sem correr riscos',
          'Ganhar dinheiro, assumindo riscos moderados',
          'Ganhar mais dinheiro, assumindo riscos agressivos'
        ]
      },
      { id: 2, pergunta: 'Por quanto tempo você deseja manter os seus investimentos?',
        alternativas: [
          'Até 1 ano',
          'De 1 a 3 anos',
          'Mais de 3 anos'
        ]
      },
      { id: 3, pergunta: 'Quantos % desses investimentos você pode precisar em 1 ano?',
        alternativas: [
          'Acima de 75%',
          'De 26 a 74%',
          'Até 25%'
        ]
      },

    ];

    let termos = [
      {id: 1, termo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', titulo: 'TERMO'}
    ]
    return {perguntas, termos};
  }
}
