(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),o=n(8),i=n.n(o),s=(n(17),n(11)),u=n(3),l=n(4),p=n(2),b=n.p+"static/media/logo.c2821b38.svg";var j=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{src:b,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"})})},d=c.a.createContext(),f=Object(r.memo)((function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,o=e.onCardDelete,i=Object(r.useContext)(d),s=i._id===t.owner._id,u="element__button-remove ".concat(s&&"element__button-remove_active"),l=t.likes.some((function(e){return e._id===i._id})),p="element__button-like ".concat(l&&"element__button-like_active");return Object(a.jsxs)("article",{className:"element",children:[Object(a.jsx)("img",{className:"element__image",src:t.link,alt:t.name,onClick:function(){return n(t)}}),Object(a.jsx)("h2",{className:"element__title",children:t.name}),Object(a.jsxs)("div",{className:"element__likes",children:[Object(a.jsx)("button",{type:"button",className:p,onClick:function(){return c(t)}}),Object(a.jsx)("span",{className:"element__likes-count",children:t.likes.length})]}),Object(a.jsx)("button",{type:"button",className:u,onClick:function(){return o(t)}})]})})),m=Object(r.memo)((function(e){var t=e.onEditAvatar,n=e.onEditProfile,c=e.onAddPlace,o=e.cards,i=e.onCardClick,s=e.onCardLike,u=e.onCardDelete,l=Object(r.useContext)(d);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("button",{className:"profile__avatar",onClick:t,style:{backgroundImage:"url(".concat(l.avatar,")")}}),Object(a.jsxs)("div",{className:"profile__profile-info",children:[Object(a.jsx)("h1",{className:"profile__title",children:l.name}),Object(a.jsx)("button",{type:"button",className:"profile__button-edit",onClick:n}),Object(a.jsx)("p",{className:"profile__subtitle",children:l.about})]}),Object(a.jsx)("button",{type:"button",className:"profile__button-add",onClick:c})]}),Object(a.jsx)("section",{className:"elements",children:o.map((function(e){return Object(a.jsx)(f,{card:e,onCardClick:i,onCardLike:s,onCardDelete:u},e._id)}))})]})}));var O=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("div",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},h=Object(r.memo)((function(e){var t=e.card,n=e.onClose,r=e.popupRef;return Object(a.jsx)("div",{className:"popup popup_image ".concat(Object.keys(t).length&&"popup_opened"),ref:r,children:Object(a.jsxs)("form",{className:"popup__container popup__container_image",name:"popup__image",noValidate:!0,children:[Object(a.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(a.jsx)("h2",{className:"popup__title popup__title_popup-image",children:t.name}),Object(a.jsx)("button",{type:"button",className:"popup__btn-close",onClick:n})]})})})),_=Object(r.memo)((function(e){var t=e.onChange,n=e.avatarRef,r=e.error;return Object(a.jsxs)("label",{className:"popup__field",children:[Object(a.jsx)("input",{type:"url",className:"popup__input popup__input_link",id:"link-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u0434\u043b\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430",ref:n,onChange:t}),Object(a.jsx)("span",{className:"popup__error popup__error_visible",id:"link-input-error",children:Object.keys(r).length&&r.link.required?"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.":Object.keys(r).length&&r.link.http&&"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL."})]})})),v=Object(r.memo)((function(e){var t=e.inputName,n=e.inputAbout,r=e.onChange,c=e.error;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("label",{className:"popup__field",children:[Object(a.jsx)("input",{type:"text",className:"popup__input popup__input_name",id:"name-input",placeholder:"\u0418\u043c\u044f",name:"name",minLength:"2",maxLength:"40",value:t||"",onChange:r}),Object(a.jsx)("span",{className:"popup__error popup__error_visible",id:"name-input-error",children:Object.keys(c).length&&c.name.required?"\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e":Object.keys(c).length&&c.name.minLength&&"\u0422\u0435\u043a\u0441\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 2 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),Object(a.jsxs)("label",{className:"popup__field",children:[Object(a.jsx)("input",{type:"text",className:"popup__input popup__input_work",id:"work-input",placeholder:"\u0420\u0430\u0431\u043e\u0442\u0430",name:"about",minLength:"2",maxLength:"200",value:n||"",onChange:r}),Object(a.jsx)("span",{className:"popup__error popup__error_visible",id:"work-input-error",children:Object.keys(c).length&&c.about.required?"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.":Object.keys(c).length&&c.about.minLength&&"\u0422\u0435\u043a\u0441\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 2 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]})]})})),g=Object(r.memo)((function(e){var t=e.onChange,n=e.error,r=e.placeRef,c=e.linkRef;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("label",{className:"popup__field",children:[Object(a.jsx)("input",{type:"text",className:"popup__input popup__input_place",id:"title-input",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",onChange:t,ref:r}),Object(a.jsx)("span",{className:"popup__error popup__error_visible",id:"title-input-error",children:Object.keys(n).length&&n.name.required?"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.":Object.keys(n).length&&n.name.minLength&&"\u0422\u0435\u043a\u0441\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 2 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),Object(a.jsxs)("label",{className:"popup__field",children:[Object(a.jsx)("input",{type:"url",className:"popup__input popup__input_link",id:"link-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:t,ref:c}),Object(a.jsx)("span",{className:"popup__error popup__error_visible",id:"link-input-error",children:Object.keys(n).length&&n.link.required?"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.":Object.keys(n).length&&n.link.http&&"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL."})]})]})})),x=Object(r.memo)((function(e){var t=e.name,n=e.title,r=e.btnName,c=e.isOpen,o=e.onClose,i=e.onSubmit,s=e.children,u=e.isLoading,l=e.isInvalid,p=e.popupRef;return Object(a.jsx)("div",{className:"popup popup__form_".concat(t," ").concat(c?"popup_opened":""),ref:p,children:Object(a.jsxs)("form",{className:"popup__form",name:"popup__form_".concat(t),noValidate:!0,onSubmit:i,children:[Object(a.jsx)("h2",{className:"popup__title",children:n}),s,Object(a.jsx)("button",{type:"submit",className:"popup__btn-submit ".concat(l?"popup__btn-submit_disabled":""),disabled:l,children:u?Object(a.jsx)("div",{className:"spinner"}):r}),Object(a.jsx)("button",{type:"button",className:"popup__btn-close",onClick:o})]})})})),k=c.a.createContext(),C=c.a.memo((function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,o=e.isLoading,i=e.onValidation,s=e.popupRef,b=Object(r.useContext)(k).isEditProfilePopupOpen,j=Object(r.useContext)(d),f=Object(r.useState)(""),m=Object(p.a)(f,2),O=m[0],h=m[1],_=Object(r.useState)(""),g=Object(p.a)(_,2),C=g[0],N=g[1],S=Object(r.useState)({name:"",about:""}),y=Object(p.a)(S,2),L=y[0],R=y[1],E=Object(r.useState)({}),P=Object(p.a)(E,2),U=P[0],D=P[1],A=Object(r.useState)(!0),T=Object(p.a)(A,2),I=T[0],q=T[1];return Object(r.useEffect)((function(){b?(h(j.name),N(j.about),R({name:j.name,about:j.about})):(h(""),N(""))}),[b,j]),Object(r.useEffect)((function(){var e=i(L),t=e.allErrors,n=e.isInvalid;D((function(){return t})),q(n)}),[L,i]),Object(a.jsx)(x,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",btnName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:O,about:C})},isLoading:o,isInvalid:I,popupRef:s,children:Object(a.jsx)(v,{inputName:O,inputAbout:C,onChange:function(e){var t=e.target,n=t.name,a=t.value;R((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},n,a))})),"name"===e.target.name?h(e.target.value):N(e.target.value)},error:U})})})),N=Object(r.memo)((function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,o=e.isLoading,i=e.onValidation,s=e.popupRef,b=Object(r.useContext)(k).isEditAvatarPopupOpen,j=Object(r.useRef)(),d=Object(r.useState)({link:""}),f=Object(p.a)(d,2),m=f[0],O=f[1],h=Object(r.useState)({}),v=Object(p.a)(h,2),g=v[0],C=v[1],N=Object(r.useState)(!0),S=Object(p.a)(N,2),y=S[0],L=S[1];return Object(r.useEffect)((function(){b&&(j.current.value="")}),[b]),Object(r.useEffect)((function(){var e=i(m),t=e.allErrors,n=e.isInvalid;C((function(){return t})),L(n)}),[m,i]),Object(a.jsx)(x,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",btnName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({link:j.current.value}),j.current.value="",O({link:""})},isLoading:o,isInvalid:y,popupRef:s,children:Object(a.jsx)(_,{avatarRef:j,onChange:function(e){var t=e.target,n=t.name,a=t.value;O((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},n,a))})),j.current.value=e.target.value},error:g})})})),S=c.a.memo((function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,o=e.isLoading,i=e.onValidation,s=e.popupRef,b=Object(r.useContext)(k).isAddPlacePopupOpen,j=Object(r.useRef)(),d=Object(r.useRef)(),f=Object(r.useState)(""),m=Object(p.a)(f,2),O=m[0],h=m[1],_=Object(r.useState)(""),v=Object(p.a)(_,2),C=v[0],N=v[1],S=Object(r.useState)({name:"",link:""}),y=Object(p.a)(S,2),L=y[0],R=y[1],E=Object(r.useState)({}),P=Object(p.a)(E,2),U=P[0],D=P[1],A=Object(r.useState)(!0),T=Object(p.a)(A,2),I=T[0],q=T[1];return Object(r.useEffect)((function(){b&&(j.current.value="",d.current.value="",R({name:"",link:""}))}),[b]),Object(r.useEffect)((function(){var e=i(L),t=e.allErrors,n=e.isInvalid;D((function(){return t})),q(n)}),[L,i]),Object(a.jsx)(x,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",btnName:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:O,link:C})},isLoading:o,isInvalid:I,popupRef:s,children:Object(a.jsx)(g,{onChange:function(e){var t=e.target,n=t.name,a=t.value;R((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},n,a))})),"name"===e.target.name?h(e.target.value):N(e.target.value)},error:U,placeRef:j,linkRef:d})})})),y=c.a.memo((function(e){var t=e.isOpen,n=e.onClose,r=e.onDelCard,c=e.card,o=e.isLoading,i=e.popupRef;return Object(a.jsx)(x,{name:"confirm-delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",btnName:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r(c)},isLoading:o,popupRef:i})}));var L=function(e){var t=e.isLoadingOpen;return Object(a.jsx)("div",{className:"block-action block-action_active",children:t&&Object(a.jsx)("div",{className:"spinner"})})};var R=function(e){var t=e.isOpen,n=e.onClose,c=t.is,o=t.textError;return Object(r.useEffect)((function(){c&&setTimeout((function(){n()}),8e3)}),[c]),Object(a.jsx)("div",{className:"error-server ".concat(c&&"error-server_active"),children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c: ".concat(o,". \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u043e\u0437\u0436\u0435")})},E=n(9),P=n(10),U=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(E.a)(this,e),this._baseUrl=n,this._headers=a,console.log(document.querySelector(".error-server")),this._errorServer=document.querySelector(".error-server")}return Object(P.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"saveCardToServer",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:n,link:a})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCardToServer",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id),{headers:this._headers,method:"DELETE"})}},{key:"changeLikeCardStatus",value:function(e,t){var n=this,a=t?"DELETE":"PUT";return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{headers:this._headers,method:a}).then((function(e){return n._getResponseData(e)}))}},{key:"saveAvatarToServer",value:function(e){var t=this,n=e.link;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:n})}).then((function(e){return t._getResponseData(e)}))}},{key:"getUserInfoFromServer",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"saveUserInfoToServer",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:n,about:a})}).then((function(e){return t._getResponseData(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"4b2550a1-9754-487b-87bb-c51dfc845f43","Content-Type":"application/json"}}),D={name:{required:function(e){return""===e},minLength:function(e){return e.length<2}},about:{required:function(e){return""===e},minLength:function(e){return e.length<2}},link:{required:function(e){return""===e},http:function(e){return A(e)}},avatar:{required:function(e){return""===e},http:function(e){return A(e)}}};function A(e){return!/(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i.test(e)}var T=function(){var e=Object(r.useState)({}),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),i=Object(p.a)(o,2),b=i[0],f=i[1],_=Object(r.useState)(!1),v=Object(p.a)(_,2),g=v[0],x=v[1],E=Object(r.useState)(!1),P=Object(p.a)(E,2),A=P[0],T=P[1],I=Object(r.useState)(!1),q=Object(p.a)(I,2),w=q[0],F=q[1],V=Object(r.useState)({is:!1,textError:""}),J=Object(p.a)(V,2),z=J[0],B=J[1],H=Object(r.useState)({}),M=Object(p.a)(H,2),K=M[0],$=M[1],G=Object(r.useState)({}),Q=Object(p.a)(G,2),W=Q[0],X=Q[1],Y=Object(r.useState)(!1),Z=Object(p.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(r.useState)(!1),ae=Object(p.a)(ne,2),re=ae[0],ce=ae[1],oe=Object(r.useState)([]),ie=Object(p.a)(oe,2),se=ie[0],ue=ie[1],le=Object(r.useRef)(),pe=Object(r.useRef)(),be=Object(r.useRef)(),je=Object(r.useRef)(),de=Object(r.useRef)();function fe(e){var t=Object.keys(e).map((function(t){var n=e[t];if(!D[t])return{};var a=Object.entries(D[t]).map((function(e){var t=Object(p.a)(e,2),a=t[0],r=t[1];return Object(l.a)({},a,r(n))})).reduce((function(e,t){return Object(u.a)(Object(u.a)({},e),t)}),{});return Object(l.a)({},t,a)})).reduce((function(e,t){return Object(u.a)(Object(u.a)({},e),t)}),{}),n=!1;for(var a in t)for(var r in t[a])if(t[a][r]){n=!0;break}return{allErrors:t,isInvalid:n}}function me(){f(!1),x(!1),T(!1),F(!1),X({})}Object(r.useEffect)((function(){ce(!0),Promise.all([U.getUserInfoFromServer(),U.getInitialCards()]).then((function(e){var t=Object(p.a)(e,2),n=t[0],a=t[1];c(n),ue(a),ce(!1)})).catch((function(e){B({is:!0,textError:e.message?e.message:"\u041e\u0448\u0438\u0431\u043a\u0430"})}))}),[]);var Oe={isEditProfilePopupOpen:g,isEditAvatarPopupOpen:b,isAddPlacePopupOpen:A};return Object(a.jsx)(k.Provider,{value:Oe,children:Object(a.jsx)(d.Provider,{value:n,children:Object(a.jsxs)("div",{className:"page",onKeyUp:function(e){"Escape"===e.key&&me()},onClick:function(e){e.target!==le.current&&e.target!==pe.current&&e.target!==be.current&&e.target!==je.current&&e.target!==de.current||me()},children:[Object(a.jsx)(j,{}),Object(a.jsx)(m,{onEditProfile:function(){x(!0)},onEditAvatar:function(){f(!0)},onAddPlace:function(){T(!0)},onCardClick:function(e){X(e)},cards:se,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));U.changeLikeCardStatus(e,t).then((function(t){var n=se.map((function(n){return n._id===e._id?t:n}));ue(n)})).catch((function(e){B({is:!0,textError:e.message?e.message:"\u041e\u0448\u0438\u0431\u043a\u0430"})}))},onCardDelete:function(e){F(!0),$(e)},isLoading:ee}),Object(a.jsx)(O,{}),Object(a.jsx)(N,{isOpen:b,onClose:me,onUpdateAvatar:function(e){te(!0),U.saveAvatarToServer(e).then((function(e){c(e)})).catch((function(e){B({is:!0,textError:e.message?e.message:"\u041e\u0448\u0438\u0431\u043a\u0430"})})).finally((function(){te(!1),me()}))},isLoading:ee,onValidation:fe,popupRef:pe}),Object(a.jsx)(C,{isOpen:g,onClose:me,onUpdateUser:function(e){te(!0),U.saveUserInfoToServer(e).then((function(e){c(e)})).catch((function(e){B({is:!0,textError:e.message?e.message:"\u041e\u0448\u0438\u0431\u043a\u0430"})})).finally((function(){te(!1),me()}))},isLoading:ee,onValidation:fe,popupRef:le}),Object(a.jsx)(S,{isOpen:A,onClose:me,onAddPlace:function(e){te(!0),U.saveCardToServer(e).then((function(e){ue([e].concat(Object(s.a)(se)))})).catch((function(e){B({is:!0,textError:e.message?e.message:"\u041e\u0448\u0438\u0431\u043a\u0430"})})).finally((function(){te(!1),me()}))},isLoading:ee,onValidation:fe,popupRef:be}),Object(a.jsx)(y,{isOpen:w,onClose:me,onDelCard:function(e){te(!0),U.deleteCardToServer(e).then((function(){var t=se.filter((function(t){return t._id!==e._id&&t}));ue(t)})).catch((function(e){B({is:!0,textError:e.message?e.message:"\u041e\u0448\u0438\u0431\u043a\u0430"})})).finally((function(){te(!1),me()}))},card:K,isLoading:ee,popupRef:je}),Object(a.jsx)(h,{card:W,onClose:me,popupRef:de}),Object(a.jsx)(R,{isOpen:z,onClose:function(){var e=Object(u.a)(Object(u.a)({},z),{},{is:!1});B(e)}}),(re||ee)&&Object(a.jsx)(L,{isLoadingOpen:re})]})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),I()}},[[18,1,2]]]);
//# sourceMappingURL=main.757b6fc4.chunk.js.map