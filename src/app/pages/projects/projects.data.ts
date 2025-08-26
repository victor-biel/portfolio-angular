export interface Project {
  title: string;
  description: string;
  image: string;
  url?: string;
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
    image: './aliviamente_logo_colorida.svg',
    technologies: 'PHP, JavaScript, MySQL, HTML, CSS, Bootstrap',
    details: 'O projeto consiste em uma plataforma de apoio psicológico online gratuita, criada para facilitar o acesso a consultas com psicólogos e psiquiatras voluntários, promovendo saúde mental de forma acessível e humanizada. A aplicação está disponível em web e mobile, oferecendo uma interface intuitiva, acolhedora e centrada no utilizador, que permite solicitar consultas, realizar videochamadas e acompanhar o histórico de atendimentos de forma simples e organizada. O sistema foi estruturado em três perfis principais: Administrador, responsável pela gestão de contas, aprovação de profissionais e controle de solicitações de consultas; Paciente, que pode agendar consultas, acompanhar seu histórico e interagir com seu psicólogo ou psiquiatra; e Psicólogo/Psiquiatra, que visualiza solicitações de pacientes, aprova atendimentos e acompanha os pacientes sob seu cuidado. O desenvolvimento envolveu o uso de PHP com JWT para autenticação segura, HTML, CSS, Bootstrap e JavaScript para o front-end web, Kotlin para a aplicação mobile e MySQL para gerenciamento de dados, garantindo funcionalidade, usabilidade e segurança. Além da funcionalidade principal de consultas, a plataforma visa fomentar a sensibilização sobre saúde mental e, futuramente, contará com fóruns de interação entre usuários, promovendo um espaço de apoio, troca e bem-estar. O projeto representa não apenas um desafio técnico, mas também um impacto social, unindo tecnologia e ajuda humanitária para democratizar o acesso a cuidados psicológicos e contribuir para uma sociedade mais saudável.',
    colSpan: 2,
    rowSpan: 2,
    color: "blue-500"
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3XnHeErt6C_YEBk_2s1lmpAFZAH41XmZUg&s',
    details: 'Detailed information about project 2',
    colSpan: 1,
    rowSpan: 1,
    color: "blue-800"
  },
  {
    title: 'Project 3',
    description: 'Description for project 3',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3XnHeErt6C_YEBk_2s1lmpAFZAH41XmZUg&s',
    details: 'Detailed information about project 3',
    colSpan: 1,
    rowSpan: 1,
    color: "blue-500"
  }
]