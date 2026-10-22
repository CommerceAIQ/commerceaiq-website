import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const load=name=>JSON.parse(readFileSync(path.join(root,'content',`${name}.json`),'utf8'));
function requireValue(condition,message){if(!condition)throw new Error(`Content error: ${message}`);}
const project=load('project');
requireValue(project.team.length>0,'project.json: team cannot be empty');
for(const member of project.team)for(const key of ['name','department','role'])requireValue(typeof member[key]==='string'&&member[key].trim(),`project.json: each member needs ${key}`);
const documents=load('documents');const ids=new Set();
for(const doc of documents){
  for(const key of ['id','title','due','note'])requireValue(typeof doc[key]==='string',`documents.json: ${key} must be text`);
  requireValue(!ids.has(doc.id),`documents.json: duplicate id ${doc.id}`);ids.add(doc.id);
  requireValue(['Upcoming','In Progress','Published'].includes(doc.status),`documents.json: invalid status for ${doc.title}`);
  requireValue(doc.file===null||typeof doc.file==='string',`documents.json: file must be null or a path`);
  if(doc.file!==null){requireValue(/^\/documents\/[a-zA-Z0-9_./-]+$/.test(doc.file)&&!doc.file.includes('..'),`documents.json: invalid file path for ${doc.title}`);}
  if(doc.status==='Published')requireValue(doc.file&&existsSync(path.join(root,'public',doc.file)),`documents.json: Published report ${doc.title} requires an existing file`);
}
for(const name of ['objectives','capabilities'])requireValue(load(name).every(row=>Array.isArray(row)&&row.length>=2&&row.every(value=>typeof value==='string')),`${name}.json: each row must contain text values`);
const anchors=['overview','problem','system','research','approach','team','documents','timeline','project-info'];
for(const [label,target] of load('navigation').links)requireValue(typeof label==='string'&&anchors.includes(target),`navigation.json: unknown anchor ${target}`);
const seo=load('seo');requireValue(new URL(seo.siteUrl).protocol==='https:','seo.json: siteUrl must use HTTPS');
for(const name of ['site-text','chart'])load(name);
console.log('Content files validated.');
