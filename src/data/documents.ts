import data from '../../content/documents.json';
export type ProjectDocument = {id:string; title:string; due:string; status:'Upcoming'|'In Progress'|'Published'; file:string|null; note:string};
export const documents = data as ProjectDocument[];
