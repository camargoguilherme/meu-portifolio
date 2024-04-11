import { Component, signal } from '@angular/core';

// Interface
import { IExperience } from '../../interfaces/iexperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public experiences = signal<IExperience[]>([
    {
      role: 'Desenvolvedor FullStack - FrontEnd Angular & React | Back-End C# & NodeJS',
      period: 'Freelancer | 09/2023 – atualmente',
      details: `
      <p>
        Atuo como freelancer desenvolvendo sistemas web, com foco no desenvolvimento
        front- end utilizando Angular e React, e no desenvolvimento de APIs
        utilizando C#(.Net e.Net Core) e NodeJS(Express, NestJS).
      </p>
      <p>
        Sou responsável pela organização de tarefas, utilizando Jira, Trello e Azure Boards.
      </p>
      <p>
        Sou responsável pelo versionamento de código utilizando GIT e implementação
        contínua / integração contínua(CI / CD) utilizando plataformas como GitLab,
        GitHub e Azure DevOps
      </p>`
    },
    {
      role: 'Desenvolvedor Mobile Flutter | Back-End C#/NodeJS | Front-End Angular',
      period: 'Tria Software | 03/2022 – 12/2023 (Realizando atividades como PJ/ Freelancer)',
      details: `
      <p>
        Trabalhei como prestador de serviços na Tria Software, atuando como
        desenvolvedor full stack.
      </p>
      <p>
        Desenvolvi aplicativos móveis utilizando Flutter e React Native, além de
        APIs utilizando C# (.Net e .Net Core) e NodeJS (Express, NestJS), e
        aplicações front-end com Angular +10 e ReactJS.
      </p>
      <p>
        Fui responsável pela organização de tarefas, utilizando Jira e Azure Boards.
      </p>
      <p>
        Fui responsável pelo versionamento de código utilizando GIT e implementação
        contínua/integração contínua (CI/CD) utilizando plataformas como GitLab,
        GitHub e Azure DevOps.
      </p>
      <p>
        Fui responsável pela criação de diagramas de infraestrutura em AWS e
        Microsoft Azure.
      </p>
      `
    },
    {
      role: 'Desenvolvedor Mobile | Analista de Sistemas Pleno',
      period: 'Tata Consultancy Services | 02/2019 – 12/2022',
      details: `
      <p>
        Atuei como desenvolvedor Full Stack em projetos que abrangiam tanto o
        desenvolvimento de backend quanto de frontend. Minhas responsabilidades eram
        equilibradas entre ambas as áreas, permitindo-me desenvolver uma ampla gama
        de habilidades.
      </p>
      <p>
        No processo de configuração de ambiente na Azure, enfrentei desafios
        significativos devido à diversidade de tecnologias e requisitos de build em
        cada projeto.
      </p>
      <p>
        Para projetos de backend, como aqueles desenvolvidos em NodeJS, NestJS ou
        Next, o processo de build resultava em arquivos .js, otimizados para serem
        executados em um ambiente NodeJS utilizando ferramentas como PM2.
      </p>
      <p>
        Em projetos de frontend, como aplicações web ou móveis desenvolvidas com
        Flutter ou React Native, o processo de build gerava arquivos .html, .js e
        .css para aplicações web, e .apk, .aab (para Android) e .ipa (para iOS) para
        aplicativos móveis.
      </p>
      <p>
        Além disso, para alguns projetos, era necessário criar imagens Docker com
        configurações específicas para rodar tanto o backend quanto o frontend em
        containers, adicionando uma camada adicional de complexidade ao processo de
        configuração de ambiente na Azure.
      </p>
      <p>
        Cada projeto apresentou desafios únicos em termos de configuração de
        ambiente, exigindo atenção detalhada e adaptação às necessidades específicas
        de cada um
      </p>
      `
    }
  ])
}
