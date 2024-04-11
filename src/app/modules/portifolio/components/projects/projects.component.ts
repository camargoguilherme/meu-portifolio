import { Component, inject, signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Interface
import { IProject } from '../../interfaces/iproject.interface';

// Enum
import { EDialogPanelClass } from '../../enums/edialog-panel-class.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatTooltipModule, MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public projects = signal<IProject[]>([
    {
      image: 'default-project.png',
      detail: 'Descrição para botão do projeto Portifólio Angular',
      title: 'Portifólio Angular',
      description: `
      <p>
        Projeto desenvolvido em angular
      </p>
      `,
      width: '100px',
      height: '100px',
      links: [
        {
          name: 'GitHub',
          href: 'https://github.com/camargoguilherme/meu-portifolio-angular',
        },
      ]
    },

  ]);

  public openDialog(data: IProject) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }
}
