
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
'use strict';

var n,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function v(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return h(n,f,i,t,null)}function h(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function p(n){return n.children}function d(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!g.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(g);}function g(){for(var n;g.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=o.__v+1,t=$(f,o,i,l.__n,void 0!==f.ownerSVGElement,null!=o.__h?[r]:null,u,null==r?_(o):r,o.__h),j(u,o),t!=r&&w(o)));});}function m(n,l,u,i,t,o,r,c,s,v){var y,d,w,k,g,m,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=r?r[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(k=u.__k[y]=null==(k=l[y])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?h(null,k,null,null,k):Array.isArray(k)?h(p,{children:k},null,null,null):null!=k.__e||null!=k.__c?h(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(w=A[y])||w&&k.key==w.key&&k.type===w.type)A[y]=void 0;else for(d=0;d<P;d++){if((w=A[d])&&k.key==w.key&&k.type===w.type){A[d]=void 0;break}w=null;}g=$(n,k,w=w||f,t,o,r,c,s,v),(d=k.ref)&&w.ref!=d&&(b||(b=[]),w.ref&&b.push(w.ref,null,k),b.push(d,k.__c||g,k)),null!=g?(null==m&&(m=g),s=x(n,k,w,A,r,g,s),v||"option"!=u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&w.__e==s&&s.parentNode!=n&&(s=_(w));}if(u.__e=m,null!=r&&"function"!=typeof u.type)for(y=r.length;y--;)null!=r[y]&&a(r[y]);for(y=P;y--;)null!=A[y]&&L(A[y],A[y]);if(b)for(y=0;y<b.length;y++)I(b[y],b[++y],b[++y]);}function x(n,l,u,i,t,o,r){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),f=null;else {for(e=r,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==o)break n;n.insertBefore(o,r),f=r;}return void 0!==f?f:o.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px";}function C(n,l,u,i,t){var o,r,f;if(t&&"className"==l&&(l="class"),"style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l]);}else "o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),(r=l.toLowerCase())in n&&(l=r),l=l.slice(2),n.l||(n.l={}),n.l[l+o]=u,f=o?N:z,u?i||n.addEventListener(l,f,o):n.removeEventListener(l,f,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&"download"!==l&&"href"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function z(l){this.l[l.type+!1](n.event?n.event(l):l);}function N(l){this.l[l.type+!0](n.event?n.event(l):l);}function T(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&T(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)));}function $(l,u,i,t,o,r,f,e,c){var a,v,h,y,_,w,k,g,b,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new d(g,x),v.constructor=P,v.render=M),b&&b.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(g,v.__s))),y=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),T(u,e,l);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,_,w);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=H(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),n.__e(l,u,i);}return u.__e}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function H(n,l,u,i,t,o,r,c){var s,a,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,c=!1;}if(null===l.type)p===d||c&&n.data===d||(n.data=d);else {if(null!=o&&(o=e.slice.call(n.childNodes)),v=(p=u.props||f).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}A(n,d,p,t,c),h?l.__k=[]:(s=l.props.children,m(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,o,r,f,c)),c||("value"in d&&void 0!==(s=d.value)&&(s!==n.value||"progress"===l.type&&!s)&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1));}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&a(o);}function M(n,l,u){return this.constructor(n,u)}function O(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=v(p,null,[l]),c=[],$(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),j(c,l);}n={__e:function(n,l){for(var u,i,t,o=l.__h;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return l.__h=o,u.__E=u}catch(l){n=l;}throw n},__v:0},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,o=f,r=0;

function bankAccountDetails(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Bank account details"
        }
      },
      body: [{
        type: "Row",
        content: [{
          type: "Column",
          content: {
            label: {
              en: "Business bank provider"
            },
            value: {
              en: details.bankAccount.bankName
            }
          }
        }, {
          type: "Column",
          content: {
            label: {
              en: "Bank account number"
            },
            value: {
              en: details.bankAccount.bankAccountNumber
            }
          }
        }]
      }]
    }
  };
}

function companyDetails(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Company details"
        }
      },
      body: [{
        type: "Row",
        content: [{
          type: "Column",
          content: {
            label: {
              en: "Business name"
            },
            value: {
              en: details.companyName
            }
          }
        }, {
          type: "Column",
          content: {
            label: {
              en: "Organization number"
            },
            value: {
              en: details.organizationNumber
            }
          }
        }]
      }, {
        type: "Row",
        content: [{
          type: "Column",
          content: {
            label: {
              en: "Business trading name"
            },
            value: {
              en: details.commercialInformation.tradingName
            }
          }
        }, {
          type: "Column",
          content: {
            label: {
              en: "Business trading address"
            },
            value: {
              en: details.postalAddress.streetAddress
            }
          }
        }]
      }, {
        type: "Row",
        content: [{
          type: "Column",
          content: {
            label: {
              en: "Post code"
            },
            value: {
              en: details.postalAddress.postalCode
            }
          }
        }, {
          type: "Column",
          content: {
            label: {
              en: "City"
            },
            value: {
              en: details.postalAddress.city
            }
          }
        }]
      }]
    }
  };
}

function companyManagementAndSignatoryRules(details) {
  const signatories = details.personRoles.filter(({
    isSignatory
  }) => isSignatory);
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Company managment and signatory rules"
        },
        subtitle: {
          en: "List of required signatures by signatory / signatories of the Customer"
        }
      },
      body: [{
        type: "Table",
        content: {
          header: [{
            en: "Name & role of signatory"
          }, {
            en: "Email address"
          }, {
            en: "Date of birth (DD/MM/YYYY)"
          }],
          body: [...signatories.map((owner, i) => {
            return [{
              en: `${owner.name} - ${owner.title}`
            }, {
              en: owner.email
            }, {
              en: owner.birthDate
            }];
          })]
        }
      }]
    }
  };
}

function pepDetails(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Politically exposed persons"
        },
        subtitle: {
          en: "Declaration if any immediate or affiliated persons of the company are considered to be a politically exposed persons (PEP):"
        }
      },
      body: [{
        type: "Row",
        content: [{
          type: "Column",
          content: {
            label: {
              en: "Are you, any manager or owner considered to be PEP?"
            },
            value: {
              en: details.declaration.isPEP ? "Yes" : "No"
            }
          }
        }, {
          type: "Column",
          content: {
            label: {
              en: "Are you or any owner affiliated with a known PEP?"
            },
            value: {
              en: details.declaration.isAffiliatedPEP ? "Yes" : "No"
            }
          }
        }]
      }]
    }
  };
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function pricingDetails(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Pricing"
        }
      },
      body: [{
        type: "Table",
        content: {
          header: [{
            en: "Product name"
          }, {
            en: "Description"
          }, {
            en: "Price"
          }],
          body: [...details.pricing.map((entry, i) => {
            return [{
              en: entry.product
            }, {
              en: entry.description
            }, {
              en: numberWithCommas(entry.price)
            }];
          })]
        }
      }]
    }
  };
}

function purposeOfPaymentDetails(details) {
  const averageTransactionValueOptions = {
    "l-100": "Less than 100",
    "101-300": "101 - 300",
    "301-600": "301 - 600",
    "601-1000": "601 - 1000",
    "1001-2000": "1001 - 2000",
    "g-2000": "More than 2000"
  };
  const annualturnoverOptions = {
    "0-50.000": "0 - 50.000",
    "50.001-500.000": "50.001 - 500.000",
    "500.001-1.000.000": "500.001 - 1.000.000",
    "1.000.001-5.000.000": "1.000.001 - 5.000.000",
    "g-5.000.000": "More than 5.000.000"
  };
  const giftCardPercentage = details.commercialInformation.giftcards ? [{
    type: "Column",
    content: {
      label: {
        en: "What % of total revenue is gift cards?"
      },
      value: {
        en: details.commercialInformation.giftcardsPercentage + "%"
      }
    }
  }] : [];
  const subscriptionsPercentage = details.commercialInformation.subscriptions ? [{
    type: "Column",
    content: {
      label: {
        en: "What % of total revenue is subscriptions?"
      },
      value: {
        en: details.commercialInformation.subscriptionsPercentage + "%"
      }
    }
  }] : [];
  const internationalTaxes = details.commercialInformation.internationalSales ? [{
    type: "Column",
    content: {
      label: {
        en: "Do you pay taxes internationally?"
      },
      value: {
        en: details.commercialInformation.internationalTax ? "Yes" : "No"
      }
    }
  }] : [];
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Purpose of payment details"
        }
      },
      body: [{
        type: "Row",
        content: [{
          type: "Column",
          content: {
            label: {
              en: "Do you offer gift cards to your customers?"
            },
            value: {
              en: details.commercialInformation.giftcards ? "Yes" : "No"
            }
          }
        }, ...giftCardPercentage]
      }, {
        type: "Row",
        content: [{
          type: "Column",
          content: {
            label: {
              en: "Do you offer subscriptions to your customers?"
            },
            value: {
              en: details.commercialInformation.subscriptions ? "Yes" : "No"
            }
          }
        }, ...subscriptionsPercentage]
      }, {
        type: "Row",
        content: [{
          type: "Column",
          content: {
            label: {
              en: "Average transaction value"
            },
            value: {
              en: averageTransactionValueOptions[details.commercialInformation.averageTransactionValue] + " NOK"
            }
          }
        }, {
          type: "Column",
          content: {
            label: {
              en: "Projected 12 month sales"
            },
            value: {
              en: annualturnoverOptions[details.commercialInformation.annualturnover] + " NOK"
            }
          }
        }, {
          type: "Column",
          content: {
            label: {
              en: "Your most expensive product"
            },
            value: {
              en: Number(details.commercialInformation.mostExpensiveProduct).toLocaleString() + " NOK"
            }
          }
        }]
      }, {
        type: "Row",
        content: [{
          type: "Column",
          content: {
            label: {
              en: "Will you sell internationally?"
            },
            value: {
              en: details.commercialInformation.internationalSales ? "Yes" : "No"
            }
          }
        }, ...internationalTaxes]
      }]
    }
  };
}

function requiredDocumentationAndAttachments(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Required documentation and attachments"
        }
      },
      body: !details.attachments?.length ? [{
        type: "Row",
        content: [{
          type: "Column",
          content: {
            label: {
              en: "No attachments added."
            },
            value: {
              en: " "
            }
          }
        }]
      }] : details.attachments.map((attachment, i) => {
        return {
          type: "Row",
          content: [{
            type: "Column",
            content: {
              label: {
                en: `Attachment ${i + 1}`
              },
              value: {
                en: attachment
              }
            }
          }]
        };
      })
    }
  };
}

function termsOfServiceDetails(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Terms of service"
        },
        subtitle: {
          en: "I have read and agreed to the following Supplier terms as listed below"
        }
      },
      body: [{
        type: "Table",
        content: {
          header: [{
            en: "Terms of service"
          }, {
            en: "Description"
          }],
          body: [...details.terms.map((term, i) => {
            return [{
              en: term.name
            }, {
              en: term.url
            }];
          })]
        }
      }]
    }
  };
}

function ultimateBeneficialOwnershipDetails(details) {
  return {
    type: "Section",
    content: {
      header: {
        title: {
          en: "Ultimate benefical ownership details"
        },
        subtitle: {
          en: "Complete list of all known ultimate beneficial owners of the company that owns 25% shares or more."
        }
      },
      body: [{
        type: "Table",
        content: {
          header: [{
            en: "Name of ultimate owner"
          }, {
            en: "Ownership stake in %"
          }, {
            en: "Date of birth (DD/MM/YYYY)"
          }],
          body: [...details.shareholders.map((owner, i) => {
            return [{
              en: owner.name
            }, {
              en: owner.stakes + "%"
            }, {
              en: owner.birthDate
            }];
          })]
        }
      }, {
        type: "Row",
        content: [{
          type: "Column",
          content: {
            label: {
              en: "Are there other factors influencing control of the company?"
            },
            value: {
              en: details.declaration.influencingFactors ? "Yes" : "No"
            }
          }
        } // {
        // 	type: "Column",
        // 	content: {
        // 		label: {
        // 			en: "Description",
        // 		},
        // 		value: {
        // 			en: "Herein lie the factors, all factors that influence the direction of the compoany.",
        // 		},
        // 	},
        // },
        ]
      }, {
        type: "Row",
        content: [{
          type: "Column",
          content: {
            label: {
              en: "I have confirmed that the company ownership is correct and up to date."
            },
            value: {
              en: details.declaration.ownershipChanged ? "Tenant confirmed" : "Pending confirmation"
            }
          }
        }]
      }]
    }
  };
}

const customDescription = `Please confirm that the following information is accurate. Dintero
pre-fills some information from a variety of public sources, but it
is your responsibility to verify the information in this sign-up
form is true and timely. Please update any details where necessary.
In order to meet regulatory requirements and to provide you with the
best service possible, we need the following information to know the
intent and nature of your business. Should have any questions,
please let us know please via onboarding@dintero.com.
`;
function generateContractPdfPayload(details) {
  const introDescription = details?.companyProfile?.description || customDescription;
  const logo = details?.companyProfile?.logo;
  return [{
    type: "Logo",
    content: logo
  }, {
    type: "Paragraph",
    content: {
      en: introDescription
    }
  }, companyDetails(details), bankAccountDetails(details), purposeOfPaymentDetails(details), ...(details.shareholders?.length > 0 ? [ultimateBeneficialOwnershipDetails(details)] : []), companyManagementAndSignatoryRules(details), requiredDocumentationAndAttachments(details), pepDetails(details), ...(details?.pricing?.length > 0 ? [pricingDetails(details)] : []), ...(details?.terms?.length > 0 ? [termsOfServiceDetails(details)] : [])];
}

const SummaryDetail = ({
  label = "Key",
  value = "Value",
  noBorder = false
}) => {
  return v("div", {
    className: `py-3.5 flex flex-col relative`
  }, v("span", {
    className: "opacity-70 p-0 text-lg leading-none mb-0.5"
  }, label), v("span", {
    className: "text-lg font-medium"
  }, value));
};

const SectionTable = ({
  data
}) => {
  return v("div", {
    className: "mb-6"
  }, v("table", {
    className: "w-full text-left"
  }, v("thead", {
    className: "border-b border-gray-400"
  }, v("tr", null, data.header.map(({
    en
  }, index) => v("th", {
    className: "py-2 font-normal opacity-60 text-xl",
    key: index
  }, en)))), v("tbody", null, data.body.map((row, index) => v("tr", {
    key: index
  }, row.map(({
    en
  }, index) => v("td", {
    key: index,
    className: "py-3 border-b text-xl"
  }, en)))))));
};

const SectionWrapper = ({
  label = "Step 1",
  title = "Company details",
  subtitle,
  children
}) => {
  return v("div", {
    className: "border-t-[3px] border-primary pt-8 pb-4"
  }, v("div", {
    className: "col-span-4"
  }, v("h2", {
    className: "mb-0.5 text-2xl font-semibold"
  }, title), subtitle && v("p", {
    className: "leading-relaxed opacity-70 text-xl"
  }, subtitle)), v("div", {
    className: "mt-3"
  }, children));
};

const Section = ({
  data
}) => {
  if (!data?.content) return null;
  const {
    header,
    body
  } = data.content;
  return v(SectionWrapper, {
    label: "Step 1",
    title: header.title.en,
    subtitle: header.subtitle?.en
  }, body && body.map((row, index) => {
    // console.log("Row: ", row.content);
    if (row.type == "Table") return v(SectionTable, {
      key: index,
      data: row.content
    });
    return v("div", {
      key: index,
      className: `
                grid
                ${row.content?.length == 2 && "grid-cols-2"}
                ${row.content?.length == 3 && "grid-cols-3"}
            `
    }, row.content && row.content.map((column, index) => {
      return v(SummaryDetail, {
        key: index,
        label: column.content.label.en,
        value: column.content.value.en
      });
    }));
  }));
};

function ContractPDF({
  contract
}) {
  const data = generateContractPdfPayload(contract);
  const themeColorSet = contract?.companyProfile?.color?.length && contract.companyProfile.color != "373737";
  return v("div", {
    id: "pdfPreview"
  }, v("style", null,
  /*css*/
  `
						#pdfPreview h1, 
						#pdfPreview h2, 
						#pdfPreview h3, 
						#pdfPreview h4, 
						#pdfPreview h5, 
						#pdfPreview h6 {
							font-family: "Roboto Flex", sans-serif;
						}

						#pdfPreview {
							font-family: system-ui;
							font-size: 1rem;
							font-weight: 350;
							line-height: 1.45;
							color: #000;
						}

						${themeColorSet &&
  /*css*/
  `
								#pdfPreview .border-primary {
									border-color: #${contract.companyProfile.color};
								}
							`}
					`), v("div", {
    className: "p-8 text-left"
  }, v("header", {
    className: "App-header"
  }, data[0].content ? v("img", {
    src: data[0].content,
    alt: "",
    className: "h-12"
  }) : v("svg", {
    className: "h-8",
    viewBox: "0 0 103 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, v("path", {
    d: "M61.4617 9.83481V11.9734H74.2184C74.5756 6.73496 71.2253 3.81435 67.0979 3.81435C62.9705 3.81435 59.9775 6.77179 59.9775 10.8685C59.9775 15.002 63.0773 17.9951 67.3177 17.9951C70.7748 17.9951 73.375 15.8565 74.087 13.3987H71.3272C70.6508 14.5748 69.2599 15.5717 67.3005 15.5717C64.5579 15.5717 62.5249 13.5411 62.5249 10.8685C62.5249 8.23148 64.4892 6.2353 67.0857 6.2353C69.6822 6.2353 71.6513 8.22534 71.6513 10.8685L72.6482 9.83481H61.4617ZM25.1229 2.85063H27.9748V0H25.118L25.1229 2.85063ZM19.5591 17.6378H31.1741V15.2869H19.5591V17.6378ZM25.474 6.52135V17.6378H27.9674V7.37703C27.9674 5.31087 27.0086 4.17406 24.7251 4.17406H19.5591V6.52258H25.474V6.52135ZM81.5942 4.17406H75.8941V6.52135H79.1008L79.1364 17.6378H81.631L81.5942 10.1565C81.5942 7.87546 83.1275 6.52258 85.2637 6.52258H87.5091V4.17406H85.7277C83.2331 4.17406 82.0214 5.06534 81.345 6.7411L80.989 7.63116L81.5942 7.73796V4.17406ZM47.1423 4.17406H50.7025V0.962488H53.1959V4.17406H58.7535V6.52135H53.1959V15.2869H58.7535V17.6378H54.2995C52.0186 17.6378 50.7 16.1413 50.7 14.0776V6.52135H47.1423V4.17406ZM75.8929 17.6378H87.5078V15.2869H75.8929V17.6378ZM17.6366 8.79866C17.6366 3.70754 13.8603 0 8.65748 0H0V17.6403H8.65748C13.8591 17.6403 17.6366 13.9328 17.6366 8.80112V8.79866ZM40.4712 3.81312C38.2614 3.81312 36.5168 5.16355 35.8748 6.73373V4.17406H33.3851V17.6378H35.8785V10.7961C35.8785 8.62311 36.6629 6.30651 39.7628 6.30651C42.3286 6.30651 43.6471 7.80303 43.6471 10.9716V17.6354H46.1417V10.5149C46.1417 5.67058 43.3967 3.81926 40.4748 3.81926L40.4712 3.81312ZM95.8425 18C99.9392 18 102.963 15.007 102.963 10.909C102.963 6.81108 99.9355 3.81926 95.8425 3.81926C91.7089 3.81926 88.7159 6.8123 88.7159 10.909C88.7159 15.0057 91.7089 18 95.8425 18ZM95.8425 15.5766C93.2423 15.5766 91.2817 13.5816 91.2817 10.9115C91.2817 8.2413 93.2459 6.24635 95.8425 6.24635C98.439 6.24635 100.403 8.24008 100.403 10.9115C100.403 13.5829 98.439 15.5766 95.8425 15.5766ZM2.63457 15.1445V2.49952H8.33461C12.1833 2.49952 14.9259 5.17215 14.9259 8.88337C14.9259 12.5173 12.1833 15.1555 8.33461 15.1555H2.63457V15.1445Z",
    fill: "#0000FF"
  })), v("div", {
    className: "mt-5 text-base opacity-80"
  }, data[1].content.en.split("\n\n").map((section, index) => v("p", {
    key: index,
    className: "mb-3 leading-loose"
  }, section)))), v("main", {
    className: "mt-6"
  }, data?.length > 2 && [...data.slice(2, data.length)].map((section, index) => v(Section, {
    key: index,
    data: section
  })))));
}

function QuickrPdf(containerId, contract) {
  O(v(ContractPDF, {
    contract: contract
  }), document.querySelector(containerId));
}

module.exports = QuickrPdf;
