import { Component, signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

// Interface
import { IKnowledge } from '../../interfaces/iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public knowledges = signal<IKnowledge[]>([
    {
      image: 'angular.svg',
      detail: 'Ícone de conhecimento de angular',
      description: 'Angular'
    },
    {
      image: 'aws.svg',
      detail: 'Ícone de conhecimento de aws',
      description: 'AWS',
    },
    {
      image: 'css-3.svg',
      detail: 'Ícone de conhecimento de css3',
      description: 'CSS 3',
    },
    {
      image: 'html-5.svg',
      detail: 'Ícone de conhecimento de html5',
      description: 'HTML 5',
    },
    {
      image: 'javascript.svg',
      detail: 'Ícone de conhecimento de javascript',
      description: 'Javascript',
    },
    {
      image: 'linux.svg',
      detail: 'Ícone de conhecimento de linux',
      description: 'Linux',
    },
    {
      image: 'python.svg',
      detail: 'Ícone de conhecimento de python',
      description: 'Python',
    },
  ]);
}

