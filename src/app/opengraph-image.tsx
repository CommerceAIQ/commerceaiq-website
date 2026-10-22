import seo from '../../content/seo.json';
import copy from '../../content/site-text.json';
import {ImageResponse} from 'next/og';
export const alt=seo.imageAlt;
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#F4F7F9',color:'#10263E',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:'70px',justifyContent:'space-between'}}><div style={{display:'flex',fontSize:34}}>{copy.social.commerceiq}<span style={{color:'#087F70',marginLeft:20}}> {copy.social.research_in_progress}</span></div><div style={{display:'flex',flexDirection:'column',fontSize:88,letterSpacing:-5,lineHeight:1.05}}><span>{copy.social.intelligence_for}</span><span>{copy.social.better_commerce}</span></div><div style={{fontSize:22,display:'flex'}}>{copy.social.ted_university_software_engineering_seng_491}</div></div>,size)}

