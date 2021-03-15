
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
      { id: 2, pergunta: 'Qual o seu comportamento relação aos seus investimentos?',
        alternativas: [
          'Preservar meu dinheiro sem correr riscos',
          'Ganhar dinheiro, assumindo riscos moderados',
          'Ganhar mais dinheiro, assumindo riscos agressivos'
        ]
      },
      { id: 3, pergunta: 'Qual o seu comportamento relação aos seus investimentos?',
        alternativas: [
          'Preservar meu dinheiro sem correr riscos',
          'Ganhar dinheiro, assumindo riscos moderados',
          'Ganhar mais dinheiro, assumindo riscos agressivos'
        ]
      },

    ];

    let termos = [
      {id: 1, termo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', titulo: 'TERMO'}
    ]
    return {perguntas, termos};
  }
}
