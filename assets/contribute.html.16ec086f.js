import{_ as l,a as c,b as d}from"./license_header.a2f60810.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as p,a as e,b as t,d as n,w as i,e as s,r}from"./app.50b07c45.js";const m={},b=e("h1",{id:"contributor-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributor-guide","aria-hidden":"true"},"#"),t(" Contributor Guide")],-1),g=s('<p>BitSail community welcomes contributions from anyone!</p><h2 id="how-to-get-involved" tabindex="-1"><a class="header-anchor" href="#how-to-get-involved" aria-hidden="true">#</a> How To Get Involved</h2><ul><li>If you meet any issue when using BitSail, submit a GitHub issue to report.</li><li>If you want a new feature, submit a GitHub issue to request the feature.</li><li>Ask any question on the Slack channel, or help to answer other user&#39;s question.</li><li>Claim an issue to fix bug or develop new features.</li><li>Improve documentation, code comments, typos and test coverages.</li><li>Start a discussion on mailing list if you have a large feature to bring in.</li></ul><h2 id="open-a-github-issue" tabindex="-1"><a class="header-anchor" href="#open-a-github-issue" aria-hidden="true">#</a> Open a GitHub Issue</h2>',4),_=e("li",null,"Search for known issues to check whether there have been an existing topic",-1),f=e("li",null,"If Yes, you can participate in the discussion",-1),v={href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"environment-setup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#environment-setup","aria-hidden":"true"},"#"),t(" Environment Setup")],-1),y=e("h2",{id:"code-style",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#code-style","aria-hidden":"true"},"#"),t(" Code Style")],-1),w={href:"https://google.github.io/styleguide/javaguide.html",target:"_blank",rel:"noopener noreferrer"},x=s('<h2 id="ide-setup" tabindex="-1"><a class="header-anchor" href="#ide-setup" aria-hidden="true">#</a> IDE Setup</h2><p>We are using Intellij as an example for this set up.</p><h3 id="checkstyle" tabindex="-1"><a class="header-anchor" href="#checkstyle" aria-hidden="true">#</a> CheckStyle</h3><p>Install the checkstyle plugin on your IDE.</p><p><img src="'+c+'" alt="" loading="lazy"></p>',5),I={href:"https://github.com/bytedance/bitsail/blob/master/tools/maven/checkstyle.xml",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,[e("img",{src:l,alt:"",loading:"lazy"})],-1),q=e("p",null,[t("After importing, run command "),e("code",null,"mvn checkstyle:check"),t(" to see if checkstyle satisfied.")],-1),C=e("h3",{id:"install-lombok",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-lombok","aria-hidden":"true"},"#"),t(" Install lombok")],-1),E={href:"https://projectlombok.org/",target:"_blank",rel:"noopener noreferrer"},A=e("h3",{id:"add-license-header",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#add-license-header","aria-hidden":"true"},"#"),t(" Add License Header")],-1),B={href:"https://www.apache.org/legal/src-headers#headers",target:"_blank",rel:"noopener noreferrer"},G=s('<p><img src="'+d+'" alt="" loading="lazy"></p><h2 id="developing-tips" tabindex="-1"><a class="header-anchor" href="#developing-tips" aria-hidden="true">#</a> Developing Tips</h2><h3 id="maven-dependency-enforcement" tabindex="-1"><a class="header-anchor" href="#maven-dependency-enforcement" aria-hidden="true">#</a> Maven Dependency Enforcement</h3><p>We check the overlapping packages during the build process. When you see a conflict error during the build process, please exclude the conflicting packages from the pom file.</p><h2 id="submit-a-pull-request" tabindex="-1"><a class="header-anchor" href="#submit-a-pull-request" aria-hidden="true">#</a> Submit a Pull Request</h2>',5),D={href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",target:"_blank",rel:"noopener noreferrer"},L={href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"},W=e("em",null,[e("strong",null,"BitSail")],-1),H=e("li",null,"Checkout a new branch in your fork repo",-1),N=e("li",null,"Patch you code, including necessary test cases & coding-style check",-1),P=e("li",null,"Commit changes to the branch and push to the fork repo",-1),R=e("li",null,[t("Create a pull request to the "),e("em",null,[e("strong",null,"BitSail")]),t(" repo")],-1),j=e("h2",{id:"ask-for-a-code-review",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ask-for-a-code-review","aria-hidden":"true"},"#"),t(" Ask for a code review")],-1),T=e("p",null,"After you have your pull request ready, with all the items from the pull request checklist being completed. Tag a committer to review you pull request.",-1),V=e("h2",{id:"how-to-contribute-documents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-contribute-documents","aria-hidden":"true"},"#"),t(" How to contribute documents")],-1),z=e("p",null,[t("BitSail's documents are saved in the "),e("code",null,"website"),t(" directory of the project, including Chinese and English versions.")],-1),J={href:"https://bytedance.github.io/bitsail/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://vuepress-theme-hope.github.io/v2/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},O=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># install yarn</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span>

<span class="token comment"># search version</span>
<span class="token function">yarn</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Generate test homepage locally</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># install vuepress</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next

<span class="token comment"># generate homepage</span>
<span class="token function">yarn</span> docs:dev

<span class="token comment"># visit http://localhost:8080/bitsail/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function Y(K,Q){const o=r("RouterLink"),a=r("ExternalLinkIcon");return u(),p("div",null,[b,e("p",null,[t("English | "),n(o,{to:"/zh/contribute/contribute.html"},{default:i(()=>[t("简体中文")]),_:1})]),g,e("ul",null,[_,f,e("li",null,[t("If Not, create a new issue by yourself according to the doc "),e("a",v,[t("Create a New Issue"),n(a)])])]),k,e("p",null,[t("Link to "),n(o,{to:"/en/documents/docs/start/env_setup.html"},{default:i(()=>[t("environment setup")]),_:1})]),y,e("p",null,[t("We generally follow the "),e("a",w,[t("Google Java Style Guide"),n(a)])]),x,e("p",null,[t("We define check style in "),e("a",I,[t("tools/maven/checkstyle.xml"),n(a)]),t(". When developing in IDE, you can import this checkstyle configuration file.")]),S,q,C,e("p",null,[t("We use project "),e("a",E,[t("lombok"),n(a)]),t(". So please install this plugin as well.")]),A,e("p",null,[t("All the source files are required to add License header. Please add "),e("a",B,[t("Apache License header"),n(a)]),t(" to your IDE Copyright settings. After this step, IDE will add license to new source files automatically.")]),G,e("p",null,[t("If it is the first time to submit a pull request, you can read this doc "),e("a",D,[t("About Pull Request"),n(a)])]),e("ul",null,[e("li",null,[e("a",L,[t("Fork "),W,t(" Repo"),n(a)])]),H,N,P,R]),j,T,V,z,e("p",null,[t("When any document update is merged into master branch, a GitHub action is triggered to generate "),e("a",J,[t("BitSail's homepage"),n(a)]),t(". So one need to test the website in local before creating a PR.")]),e("p",null,[t("The BitSail homepage is built through the "),e("a",F,[t("VuePress"),n(a)]),t(" framework. After the markdown document is modified, you can try generating a test homepage through the following steps:")]),e("ol",null,[e("li",null,[t("Install "),e("a",M,[t("yarn"),n(a)]),t(" (A JS package manager)")])]),O])}const $=h(m,[["render",Y],["__file","contribute.html.vue"]]);export{$ as default};
