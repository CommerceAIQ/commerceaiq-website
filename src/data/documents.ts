export type ProjectDocument = {id:string; title:string; due:string; status:'Upcoming'|'In Progress'|'Published'; file:string|null; note:string};
export const documents: ProjectDocument[] = [
  {id:'01',title:'Project Proposal',due:'23 Oct 2026',status:'In Progress',file:null,note:'Project identity, team, academic supervision and project description.'},
  {id:'02',title:'Project Specifications',due:'20 Nov 2026',status:'Upcoming',file:null,note:'Requirements, constraints, professional responsibilities and literature review.'},
  {id:'03',title:'Analysis Report',due:'04 Dec 2026',status:'Upcoming',file:null,note:'System models, use cases, requirements analysis and interface concepts.'},
  {id:'04',title:'Multidisciplinary Delivery',due:'18 Dec 2026',status:'Upcoming',file:null,note:'Evidence connecting software engineering with inventory planning and operations.'},
  {id:'05',title:'High-Level Design Report',due:'To be confirmed',status:'Upcoming',file:null,note:'Syllabus lists Friday of week 14; its schedule lists 30 Dec. Confirm with the coordinator.'},
  {id:'06',title:'Final Presentation & Demo',due:'To be announced',status:'Upcoming',file:null,note:'Presentation, initial product demonstration, video and poster.'},
];
