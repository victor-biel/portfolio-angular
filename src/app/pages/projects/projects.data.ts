export interface Project {
  title: string;
  description: string;
  image: string[];
  url?:string[];
  technologies?: string;
  details?: string;
  colSpan?: number;
  rowSpan?: number;
  color?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Aliviamente',
    description: 'Plataforma gratuita de apoio psicológico online, permitindo o agendamento de consultas com psicólogos e psiquiatras voluntários via videochamada. Disponível em web e mobile, oferece uma interface intuitiva e acolhedora, autenticação segura com JWT e gestão eficiente de consultas e utilizadores, promovendo acesso facilitado à saúde mental.',
    image: ['./aliviamente_logo_colorida.svg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3XnHeErt6C_YEBk_2s1lmpAFZAH41XmZUg&s'],
    url: ['https://github.com/victor-biel/portfolio-angular', 'https://github.com/victor-biel/portfolio-angular/issues'],
    technologies: '<b>Tecnologias:</b><br><li><b>Backend:</b> PHP com JWT (autenticação segura);</li><li><b>Frontend Web:</b> HTML, CSS, JavaScript e Bootstrap;</li><li><b>Mobile:</b> Kotlin;</li><li><b>Base de Dados:</b> MySQL.</li>',
    details: '<b>Descrição geral</b><br>Plataforma gratuita de apoio psicológico online, criada para facilitar o acesso a consultas com psicólogos e psiquiatras voluntários, promovendo saúde mental de forma acessível e humanizada.<br><b>Funcionalidades principais</b><br><li>Agendamento de consultas e realização de videochamadas</li><li>Acompanhamento do histórico de atendimentos</li><li>Interface web e mobile intuitiva e acolhedora</li><li>Perfis distintos para <b>Administrador</b>, <b>Paciente</b> e <b>Psicólogo/Psiquiatra</b></li></ul><b>Impacto</b><br><ul><li>Visa sensibilizar sobre saúde mental e, futuramente, contará com <b>fóruns de interação entre utilizadores</b></li><li>Promove apoio, troca e bem-estar</li><li>Democratiza o acesso a cuidados psicológicos, contribuindo para uma sociedade mais saudável</li>',
    colSpan: 2,
    rowSpan: 2,
    color: "blue-500"
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3XnHeErt6C_YEBk_2s1lmpAFZAH41XmZUg&s'],
    details: 'Detailed information about project 2',
    colSpan: 1,
    rowSpan: 1,
    color: "blue-800"
  },
  {
    title: 'Project 3',
    description: 'Description for project 3',
    image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3XnHeErt6C_YEBk_2s1lmpAFZAH41XmZUg&s'],
    details: 'Detailed information about project 3',
    colSpan: 1,
    rowSpan: 1,
    color: "blue-500"
  }
]
