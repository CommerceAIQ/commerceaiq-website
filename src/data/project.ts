import data from '../../content/project.json';
export const project = {...data, team: [...data.team].sort((a,b) => a.name.localeCompare(b.name, 'tr'))};
export { default as objectives } from '../../content/objectives.json';
export { default as capabilities } from '../../content/capabilities.json';
