import {ImageResponse} from 'next/og';
export const alt='CommerceIQ — Intelligence for better commerce. TED University, SENG 491, Fall 2026.';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#F4F7F9',color:'#10263E',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:'70px',justifyContent:'space-between'}}><div style={{display:'flex',fontSize:34}}>CommerceIQ <span style={{color:'#087F70',marginLeft:20}}> / Research in progress</span></div><div style={{display:'flex',flexDirection:'column',fontSize:88,letterSpacing:-5,lineHeight:1.05}}><span>Intelligence for</span><span>better commerce.</span></div><div style={{fontSize:22,display:'flex'}}>TED UNIVERSITY / SOFTWARE ENGINEERING / SENG 491 / FALL 2026</div></div>,size)}

