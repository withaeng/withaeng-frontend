"use strict";exports.id=2251,exports.ids=[2251],exports.modules={42251:(e,t,s)=>{s.d(t,{Z:()=>WhCard});var a=s(30784),l=s(52451),n=s.n(l),i=s(15615),c=s(84692);function dateFormat(e,t){return i.Z.dateFormat(e,t)}function WhCard({status:e,profileImageUrl:t,nickname:s,title:l,tags:i,startTripDate:r,endTripDate:o,accompanyCnt:d,accompaniedCnt:x,thumbnailImageUrl:m}){return(0,a.jsxs)("div",{className:function(e){let t="w-[305px] flex flex-col gap-1 p-2 rounded-md bg-nutral-white-01 hover:shadow-modal cursor-pointer hover:opacity-90 transition";return"accompanied"===e?`${t} opacity-60`:t}(e),children:[(0,a.jsxs)("section",{className:"relative w-full h-[152px]",children:[a.jsx(n(),{className:"object-cover rounded w-full h-full",src:m,width:298,height:152,alt:"동행 썸네일 이미지"}),a.jsx("span",{className:`absolute top-0 left-0 inline-block py-1 px-2 ${"joining"===e?"bg-secondary-main":"joined"===e?"bg-caption-success":"bg-nutral-black-05"} text-nutral-white-01 text-caption-01 rounded-ss`,children:"joining"===e?"모집 중":"joined"===e?"모집 완료":"동행 완료"})]}),(0,a.jsxs)("section",{className:"flex justify-between text-nutral-black-05 text-caption-01",children:[(0,a.jsxs)("div",{className:"flex gap-2 items-center h-8 text-subtitle-02",children:[a.jsx(n(),{className:"inline object-cover rounded-full h-full",src:t,width:32,height:32,alt:"프로필 이미지"}),a.jsx("span",{children:s})]}),(0,a.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,a.jsxs)("span",{className:"flex gap-1 items-center",children:[a.jsx(c.UD,{}),dateFormat(r,"MM.DD"),"~",dateFormat(o,"MM.DD")]}),(0,a.jsxs)("span",{className:"flex gap-1 items-center",children:[a.jsx(c.lx,{}),d,"/",x]})]})]}),a.jsx("section",{className:"mt-1 max-w-full overflow-hidden text-ellipsis whitespace-nowrap",children:a.jsx("span",{className:"text-subtitle-02 text-nutral-black-03",children:l})}),null!==i&&a.jsx("section",{className:"mt-2 flex gap-3 pb-2",children:i.map(e=>a.jsx("span",{className:"text-caption-01 text-primary-main",children:e},e))})]})}},15615:(e,t,s)=>{s.d(t,{Z:()=>c});var a=s(83689),l=s.n(a),n=s(63546),i=s.n(n);l().extend(i());let c={dateFormat:(e,t="YYYY.MM.DD")=>l()(e).format(t)}}};