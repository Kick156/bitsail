import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as l,a as e,b as t,d as n,w as i,e as c,r}from"./app.e33b7269.js";const d={},u=e("h1",{id:"bitsail-conversion-flink",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bitsail-conversion-flink","aria-hidden":"true"},"#"),t(" bitsail-conversion-flink")],-1),h=e("hr",null,null,-1),m=c('<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2><p>When <em><strong>BitSail</strong></em> transmits data to a specified data source, it needs to convert the intermediate format (<code>bitsail rows</code>) used in the transmission process into a data type acceptable to the data source. This module provides convenient tools for converting.</p><ul><li>In this context, <code>bitsail rows</code> means <code>com.bytedance.bitsail.common.column.Column</code> data wrapped by <code>org.apache.flink.types.Row</code>。</li></ul><p>Specific supported data types are as follows:</p>',4),p=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Function"),e("th",null,"Link")])],-1),_=e("td",null,[e("code",null,"bitsail-conversion-flink-hive")],-1),f=e("td",null,[t("Provides a way to convert "),e("code",null,"Row"),t(" to hive "),e("code",null,"Writable")],-1);function v(b,k){const o=r("RouterLink");return s(),l("div",null,[u,h,e("p",null,[t("Parent document: "),n(o,{to:"/en/documents/components/"},{default:i(()=>[t("bitsail-components")]),_:1})]),m,e("table",null,[p,e("tbody",null,[e("tr",null,[_,f,e("td",null,[n(o,{to:"/en/documents/components/conversion/hive-convert.html"},{default:i(()=>[t("link")]),_:1})])])])])])}const y=a(d,[["render",v],["__file","introduction.html.vue"]]);export{y as default};