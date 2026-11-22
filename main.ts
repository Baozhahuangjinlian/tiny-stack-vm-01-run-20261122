import fs from'node:fs';
const I='/input',O='/output';
function run(p,g){
 const s=new Int32Array(256),c=new Int32Array(64),y=new Int32Array(256),o=[];
 const T=x=>[o,x],J=()=>((p[q+1]|p[q+2]<<8)<<16>>16);
 let n=0,m=0,q=0,k=0,t=0;const L=p.length;
 for(;;){
  if(t>=1000000)return T(10);
  if(q<0||q>=L)return T(9);
  const a=p[q];let b,d,v;
  switch(a){
   case 0:return T(0);
   case 1:
    if(q+1>=L)return T(9);
    if(n>=256)return T(3);
    s[n++]=(p[q+1]<<24)>>24;q+=2;break;
   case 2:
    if(q+4>=L)return T(9);
    if(n>=256)return T(3);
    s[n++]=p[q+1]|p[q+2]<<8|p[q+3]<<16|p[q+4]<<24;q+=5;break;
   case 3:if(n<1)return T(2);n--;q++;break;
   case 4:
    if(n<1)return T(2);
    if(n>=256)return T(3);
    s[n]=s[n-1];n++;q++;break;
   case 5:
    if(n<2)return T(2);
    b=s[n-1];s[n-1]=s[n-2];s[n-2]=b;q++;break;
   case 6:
    if(n<2)return T(2);
    if(n>=256)return T(3);
    s[n]=s[n-2];n++;q++;break;
   case 7:
    if(n<3)return T(2);
    b=s[n-3];s[n-3]=s[n-2];s[n-2]=s[n-1];s[n-1]=b;q++;break;
   case 0x10:
    if(n<2)return T(2);
    b=s[--n];s[n-1]=(s[n-1]+b)|0;q++;break;
   case 0x11:
    if(n<2)return T(2);
    b=s[--n];s[n-1]=(s[n-1]-b)|0;q++;break;
   case 0x12:
    if(n<2)return T(2);
    b=s[--n];s[n-1]=Math.imul(s[n-1],b);q++;break;
   case 0x13:
    if(n<2)return T(2);
    b=s[--n];v=s[n-1];
    if(b==0)return T(4);
    s[n-1]=(v/b)|0;q++;break;
   case 0x14:
    if(n<2)return T(2);
    b=s[--n];v=s[n-1];
    if(b==0)return T(4);
    s[n-1]=(v%b)|0;q++;break;
   case 0x15:
    if(n<2)return T(2);
    b=s[--n];v=s[n-1];
    if(b==0)return T(4);
    s[n-1]=((v>>>0)/(b>>>0))|0;q++;break;
   case 0x16:
    if(n<2)return T(2);
    b=s[--n];v=s[n-1];
    if(b==0)return T(4);
    s[n-1]=((v>>>0)%(b>>>0))|0;q++;break;
   case 0x17:if(n<1)return T(2);s[n-1]=(-s[n-1])|0;q++;break;
   case 0x18:
    if(n<2)return T(2);
    b=s[--n];s[n-1]=s[n-1]&b;q++;break;
   case 0x19:
    if(n<2)return T(2);
    b=s[--n];s[n-1]=s[n-1]|b;q++;break;
   case 0x1a:
    if(n<2)return T(2);
    b=s[--n];s[n-1]=s[n-1]^b;q++;break;
   case 0x1b:if(n<1)return T(2);s[n-1]=~s[n-1];q++;break;
   case 0x1c:
    if(n<2)return T(2);
    b=s[--n];s[n-1]=s[n-1]<<(b&31);q++;break;
   case 0x1d:
    if(n<2)return T(2);
    b=s[--n];s[n-1]=s[n-1]>>(b&31);q++;break;
   case 0x1e:
    if(n<2)return T(2);
    b=s[--n];s[n-1]=s[n-1]>>>(b&31);q++;break;
   case 0x20:
    if(n<2)return T(2);
    b=s[--n];s[n-1]=s[n-1]==b?1:0;q++;break;
   case 0x21:
    if(n<2)return T(2);
    b=s[--n];s[n-1]=s[n-1]<b?1:0;q++;break;
   case 0x22:
    if(n<2)return T(2);
    b=s[--n];s[n-1]=(s[n-1]>>>0)<(b>>>0)?1:0;q++;break;
   case 0x30:
    if(q+2>=L)return T(9);
    q=q+3+J();break;
   case 0x31:
    if(q+2>=L)return T(9);
    if(n<1)return T(2);
    v=s[--n];
    q=v==0?q+3+J():q+3;break;
   case 0x32:
    if(q+2>=L)return T(9);
    if(n<1)return T(2);
    v=s[--n];
    q=v!=0?q+3+J():q+3;break;
   case 0x33:
    if(q+2>=L)return T(9);
    if(m>=64)return T(7);
    c[m++]=q+3;q=p[q+1]|p[q+2]<<8;break;
   case 0x34:if(m==0)return T(8);q=c[--m];break;
   case 0x40:
    if(n<1)return T(2);
    v=s[n-1];
    if(v<0||v>255)return T(6);
    s[n-1]=y[v];q++;break;
   case 0x41:
    if(n<2)return T(2);
    v=s[n-1];b=s[n-2];
    if(v<0||v>255)return T(6);
    y[v]=b;n-=2;q++;break;
   case 0x50:
    if(n<1)return T(2);
    v=s[--n];d=String(v);
    if(o.length+d.length>65536)return T(11);
    for(const ch of d)o.push(ch.charCodeAt(0));
    q++;break;
   case 0x51:
    if(n<1)return T(2);
    v=s[--n];
    if(o.length>=65536)return T(11);
    o.push(v&255);q++;break;
   case 0x52:
    if(n>=256)return T(3);
    s[n++]=k<g.length?g[k++]:-1;q++;break;
   case 0x53:if(n<1)return T(2);v=s[--n];return T(v&255);
   default:return T(5);
  }
  t++;
 }
}
for(const id of fs.readdirSync(I).sort()){
 const d=I+'/'+id;
 const r=run(fs.readFileSync(d+'/program.bin'),fs.readFileSync(d+'/input.bin'));
 const e=O+'/'+id;
 fs.mkdirSync(e,{recursive:true});
 fs.writeFileSync(e+'/stdout.bin',Buffer.from(r[0]));
 fs.writeFileSync(e+'/exit.txt',''+r[1]);
}
