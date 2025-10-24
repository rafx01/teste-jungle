export const mockTasks = [
  {
    title: "Implementar autenticação",
    description:
      "Criar sistema completo de autenticação com JWT, incluindo login, registro, recuperação de senha e refresh tokens. Deve incluir validações e tratamento de erros adequados.",
    priority: "urgent" as const,
    dueDate: "2024-10-25",
    users: ["user1", "user2"],
  },
  {
    title: "Corrigir bug no formulário",
    description:
      "O formulário de cadastro está apresentando erro ao validar CPF. Investigar e corrigir a validação.",
    priority: "high" as const,
    dueDate: "2024-10-26",
    users: ["user3"],
  },
  {
    title: "Atualizar documentação",
    description:
      "Revisar e atualizar toda a documentação do projeto no README, incluindo instruções de instalação e exemplos de uso.",
    priority: "low" as const,
    dueDate: "2024-10-30",
    users: ["user4", "user5"],
  },
  {
    title: "Otimizar queries do banco",
    description:
      "As queries estão demorando muito. Adicionar índices e otimizar as consultas mais pesadas do sistema.",
    priority: "urgent" as const,
    dueDate: "2024-10-25",
    users: ["user2", "user6"],
  },
  {
    title: "Criar testes unitários",
    description:
      "Implementar testes unitários para os principais módulos da aplicação usando Jest e Testing Library.",
    priority: "medium" as const,
    dueDate: "2024-10-28",
    users: ["user1", "user3", "user4"],
  },
  {
    title: "Design do dashboard",
    description:
      "Criar mockups e protótipos do novo dashboard no Figma, com foco em UX e visualização de dados.",
    priority: "high" as const,
    dueDate: "2024-10-27",
    users: ["user7"],
  },
  {
    title: "Integração com API de pagamento",
    description:
      "Integrar o sistema com a API do Stripe para processar pagamentos de forma segura e eficiente.",
    priority: "urgent" as const,
    dueDate: "2024-10-26",
    users: ["user2", "user5"],
  },
  {
    title: "Refatorar componentes React",
    description:
      "Refatorar componentes antigos para usar hooks modernos e melhorar a performance geral.",
    priority: "medium" as const,
    dueDate: "2024-10-29",
    users: ["user1"],
  },
  {
    title: "Configurar CI/CD",
    description:
      "Configurar pipeline de CI/CD no GitHub Actions com testes automáticos e deploy para produção.",
    priority: "high" as const,
    dueDate: "2024-10-27",
    users: ["user6", "user8"],
  },
  {
    title: "Revisar código do PR #123",
    description:
      "Fazer code review do pull request que implementa o novo sistema de notificações.",
    priority: "medium" as const,
    dueDate: "2024-10-26",
    users: ["user3"],
  },
  {
    title: "Atualizar dependências",
    description:
      "Atualizar todas as dependências do projeto para as versões mais recentes e testar compatibilidade.",
    priority: "low" as const,
    dueDate: "2024-11-01",
    users: ["user4"],
  },
  {
    title: "Implementar dark mode",
    description:
      "Adicionar suporte a tema escuro em toda a aplicação com persistência da preferência do usuário.",
    priority: "medium" as const,
    dueDate: "2024-10-29",
    users: ["user7", "user1"],
  },
  {
    title: "Criar página de relatórios",
    description:
      "Desenvolver página com gráficos e estatísticas usando Chart.js para visualização de dados da aplicação.",
    priority: "high" as const,
    dueDate: "2024-10-28",
    users: ["user2", "user7"],
  },
  {
    title: "Migrar para TypeScript",
    description:
      "Converter arquivos JavaScript para TypeScript gradualmente, começando pelos arquivos principais.",
    priority: "low" as const,
    dueDate: "2024-11-05",
    users: ["user1", "user3", "user4"],
  },
  {
    title: "Corrigir responsividade mobile",
    description:
      "Ajustar layout para dispositivos móveis, principalmente no menu lateral e tabelas.",
    priority: "urgent" as const,
    dueDate: "2024-10-25",
    users: ["user7"],
  },
  {
    title: "Implementar cache Redis",
    description:
      "Adicionar camada de cache com Redis para melhorar performance de consultas frequentes.",
    priority: "high" as const,
    dueDate: "2024-10-27",
    users: ["user6", "user2"],
  },
  {
    title: "Criar sistema de permissões",
    description:
      "Implementar RBAC (Role-Based Access Control) para gerenciar permissões de usuários no sistema.",
    priority: "urgent" as const,
    dueDate: "2024-10-26",
    users: ["user2", "user5", "user6"],
  },
  {
    title: "Adicionar logs estruturados",
    description:
      "Implementar sistema de logs estruturados com Winston para melhor observabilidade da aplicação.",
    priority: "medium" as const,
    dueDate: "2024-10-30",
    users: ["user6"],
  },
  {
    title: "Otimizar bundle size",
    description:
      "Analisar e reduzir o tamanho do bundle JavaScript usando code splitting e lazy loading.",
    priority: "medium" as const,
    dueDate: "2024-10-29",
    users: ["user1"],
  },
  {
    title: "Configurar monitoramento",
    description:
      "Integrar Sentry para monitoramento de erros e New Relic para métricas de performance.",
    priority: "high" as const,
    dueDate: "2024-10-28",
    users: ["user6", "user8"],
  },
  {
    title: "Criar componente de upload",
    description:
      "Desenvolver componente reutilizável para upload de arquivos com preview e validação.",
    priority: "medium" as const,
    dueDate: "2024-10-29",
    users: ["user1", "user7"],
  },
  {
    title: "Implementar WebSockets",
    description:
      "Adicionar comunicação em tempo real usando WebSockets para notificações e atualizações.",
    priority: "high" as const,
    dueDate: "2024-10-27",
    users: ["user2", "user6"],
  },
  {
    title: "Revisar segurança",
    description:
      "Fazer auditoria de segurança completa, verificar vulnerabilidades e aplicar correções necessárias.",
    priority: "urgent" as const,
    dueDate: "2024-10-25",
    users: ["user6", "user8", "user5"],
  },
  {
    title: "Criar storybook",
    description:
      "Configurar Storybook para documentação visual de componentes e facilitar desenvolvimento.",
    priority: "low" as const,
    dueDate: "2024-11-02",
    users: ["user7", "user1"],
  },
  {
    title: "Implementar busca avançada",
    description:
      "Adicionar funcionalidade de busca com filtros, ordenação e paginação usando Elasticsearch.",
    priority: "high" as const,
    dueDate: "2024-10-28",
    users: ["user2", "user6"],
  },
  {
    title: "Corrigir memory leak",
    description:
      "Investigar e corrigir vazamento de memória identificado no módulo de processamento de imagens.",
    priority: "urgent" as const,
    dueDate: "2024-10-26",
    users: ["user2", "user6"],
  },
  {
    title: "Adicionar animações",
    description:
      "Implementar animações suaves usando Framer Motion para melhorar UX em transições.",
    priority: "low" as const,
    dueDate: "2024-11-01",
    users: ["user7"],
  },
  {
    title: "Criar API GraphQL",
    description:
      "Desenvolver API GraphQL como alternativa à REST, implementando queries e mutations principais.",
    priority: "medium" as const,
    dueDate: "2024-10-30",
    users: ["user2", "user5"],
  },
  {
    title: "Implementar SSR",
    description:
      "Configurar Server-Side Rendering com Next.js para melhorar SEO e performance inicial.",
    priority: "high" as const,
    dueDate: "2024-10-27",
    users: ["user1", "user2"],
  },
  {
    title: "Adicionar i18n",
    description:
      "Implementar internacionalização com suporte a múltiplos idiomas (PT, EN, ES) usando react-i18next.",
    priority: "medium" as const,
    dueDate: "2024-10-29",
    users: ["user1", "user4"],
  },
  {
    title: "Criar backup automático",
    description:
      "Implementar sistema de backup automático do banco de dados com rotação e armazenamento seguro.",
    priority: "high" as const,
    dueDate: "2024-10-28",
    users: ["user6", "user8"],
  },
  {
    title: "Otimizar imagens",
    description:
      "Implementar pipeline de otimização automática de imagens com compressão e lazy loading.",
    priority: "low" as const,
    dueDate: "2024-11-03",
    users: ["user1"],
  },
  {
    title: "Adicionar rate limiting",
    description:
      "Implementar rate limiting na API para prevenir abuso e garantir disponibilidade do serviço.",
    priority: "urgent" as const,
    dueDate: "2024-10-26",
    users: ["user6", "user2"],
  },
  {
    title: "Criar módulo de chat",
    description:
      "Desenvolver sistema de chat em tempo real com histórico, anexos e indicador de digitação.",
    priority: "high" as const,
    dueDate: "2024-10-28",
    users: ["user2", "user5", "user7"],
  },
  {
    title: "Implementar PWA",
    description:
      "Transformar aplicação em Progressive Web App com suporte offline e instalação.",
    priority: "medium" as const,
    dueDate: "2024-10-30",
    users: ["user1"],
  },
  {
    title: "Adicionar analytics",
    description:
      "Integrar Google Analytics 4 e configurar eventos personalizados para tracking de uso.",
    priority: "low" as const,
    dueDate: "2024-11-01",
    users: ["user4"],
  },
  {
    title: "Criar módulo de email",
    description:
      "Implementar sistema de envio de emails transacionais com templates usando SendGrid.",
    priority: "high" as const,
    dueDate: "2024-10-27",
    users: ["user2", "user5"],
  },
  {
    title: "Implementar Two-Factor Auth",
    description:
      "Adicionar autenticação de dois fatores usando TOTP para aumentar segurança das contas.",
    priority: "urgent" as const,
    dueDate: "2024-10-26",
    users: ["user2", "user5", "user6"],
  },
  {
    title: "Otimizar consultas N+1",
    description:
      "Identificar e resolver problemas de N+1 queries no ORM para melhorar performance do banco.",
    priority: "high" as const,
    dueDate: "2024-10-27",
    users: ["user2", "user6"],
  },
  {
    title: "Criar sistema de tags",
    description:
      "Implementar sistema de tags para categorização e filtros avançados de conteúdo.",
    priority: "medium" as const,
    dueDate: "2024-10-29",
    users: ["user2", "user4"],
  },
];
