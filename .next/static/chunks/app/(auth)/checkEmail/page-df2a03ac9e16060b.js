(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9812,3246],{44919:function(e,t,n){Promise.resolve().then(n.bind(n,4634))},4634:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return CheckEmailModalPage}});var l=n(57437),a=n(24033),s=n(74625),r=n(61396),o=n.n(r),i=n(66243);function CheckEmailModalComponent(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{children:"이메일을 확인해주세요."}),(0,l.jsxs)("div",{className:"mx-[95px] mt-10 text-center",children:["입력한 정보로 인증 메일을 보내드렸습니다.",(0,l.jsx)("br",{}),"이메일을 받지 못하셨다구요?",(0,l.jsx)("br",{}),"그렇다면"," ",(0,l.jsx)(o(),{href:"/",className:"".concat("text-secondary-main font-semibold underline"),children:"이메일 재전송"}),"을 클릭해주세요."]})]})}function CheckEmailModalPage(){let e=(0,a.useRouter)();return(0,l.jsx)(s.Z,{isOpen:!0,onClose:()=>e.replace("/"),children:(0,l.jsx)("div",{className:"px-[84px] py-[72px]",children:(0,l.jsx)(CheckEmailModalComponent,{})})})}},74625:function(e,t,n){"use strict";n.d(t,{Z:function(){return WhModal}});var l=n(57437),a=n(2265),s=n(54887),r=n(66687),o=n(46431);function WhModal(e){let{isOpen:t,onClose:n,hideCloseButton:i=!1,isDismissible:c=!0,className:d="",children:u}=e,[h,x]=(0,a.useState)(null),m=(0,a.useRef)(null);return((0,a.useEffect)(()=>{x(document.getElementById("modal-root"))},[]),h)?(0,s.createPortal)((0,l.jsx)(r.Z,{in:t,timeout:300,nodeRef:m,mountOnEnter:!0,unmountOnExit:!0,classNames:"modal-transition",className:"absolute top-0 left-0 w-dvw h-dvh",children:(0,l.jsxs)("div",{ref:m,children:[(0,l.jsx)("div",{role:"presentation",className:"w-full h-full bg-[#000000] opacity-20 z-40",onClick:c?n:void 0}),(0,l.jsx)("div",{className:"modal-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nutral-white-01 z-50 w-fit rounded shadow-modal",children:(0,l.jsxs)("div",{className:"w-[680px] ".concat(d),children:[!i&&(0,l.jsx)("button",{type:"button","aria-label":"닫기 버튼",onClick:n,children:(0,l.jsx)(o.Tw,{width:24,height:24,stroke:"#333333",className:"absolute top-5 right-5"})}),u]})})]})}),h):null}},66243:function(e,t,n){"use strict";n.d(t,{Z:function(){return WhModalHeader}});var l=n(57437);function WhModalHeader(e){let{children:t}=e;return(0,l.jsx)("div",{className:"text-headline-04 text-nutral-black-01 text-center pb-6 border-b border-nutral-white-03",children:(0,l.jsx)("h4",{children:t})})}},61396:function(e,t,n){e.exports=n(68326)}},function(e){e.O(0,[4362,8326,6431,2971,2472,1744],function(){return e(e.s=44919)}),_N_E=e.O()}]);