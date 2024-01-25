"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4173],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),k=r,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||n;return a?i.createElement(d,o(o({ref:t},u),{},{components:a})):i.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5067:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=a(7462),r=(a(7294),a(3905));const n={},o="Python Starter Kit",l={unversionedId:"guides/software-lifecycle/application-starter-kits/python-starter-kit/README",id:"guides/software-lifecycle/application-starter-kits/python-starter-kit/README",title:"Python Starter Kit",description:"A deployment-ready Python 3 application template for quick, standards-based project setup.",source:"@site/docs/guides/software-lifecycle/application-starter-kits/python-starter-kit/README.md",sourceDirName:"guides/software-lifecycle/application-starter-kits/python-starter-kit",slug:"/guides/software-lifecycle/application-starter-kits/python-starter-kit/",permalink:"/slim/docs/guides/software-lifecycle/application-starter-kits/python-starter-kit/",draft:!1,editUrl:"https://github.com/nasa-ammos/slim/tree/main/docs/guides/software-lifecycle/application-starter-kits/python-starter-kit/README.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Application Starter Kits",permalink:"/slim/docs/category/application-starter-kits"},next:{title:"Software Metrics",permalink:"/slim/docs/category/software-metrics"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"Additional Files",id:"additional-files",level:2},{value:"Frequently Asked Questions (FAQ)",id:"frequently-asked-questions-faq",level:2},{value:"Credits",id:"credits",level:2},{value:"Feedback and Contributions",id:"feedback-and-contributions",level:2}],u={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-starter-kit"},"Python Starter Kit"),(0,r.kt)("pre",{align:"center"},"A deployment-ready Python 3 application template for quick, standards-based project setup."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Background"),": The Python Starter Kit serves as a comprehensive template for Python 3 applications to streamline development processes. It exemplifies an integrated approach to build, release and publish using GitHub's CI/CD automation. By leveraging modern Python tooling, the kit simplifies the process of compiling, tagging, releasing and publishing to the Python Package Index (PyPi). It adheres to PEP 517/518 standards with TOML-based configurations to ensure a modern, declarative programming approach."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use Cases"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Streamlining Python project setup and configuration."),(0,r.kt)("li",{parentName:"ul"},"Facilitating the build and release process of Python packages to PyPi."),(0,r.kt)("li",{parentName:"ul"},"Update build and release tooling to modern standards using PEP ",(0,r.kt)("a",{parentName:"li",href:"https://peps.python.org/pep-0517/"},"517"),"/",(0,r.kt)("a",{parentName:"li",href:"https://peps.python.org/pep-0518/"},"518")," compliant tooling with declarative ",(0,r.kt)("a",{parentName:"li",href:"https://toml.io/en/"},"TOML-based")," configurations in a ",(0,r.kt)("inlineCode",{parentName:"li"},"pyproject.toml")," file.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub account with repository creation rights."),(0,r.kt)("li",{parentName:"ul"},"Familiarity with Python, Docker and GitHub Actions."),(0,r.kt)("li",{parentName:"ul"},"Access to PyPi for package publishing.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/NASA-AMMOS/slim-starterkit-python"},"SLIM Starterkit Python"))),(0,r.kt)("p",null,'Click the link above to access the starter kit and begin setting up your project using Python best practices. Select GitHub\'s "Use this template" feature to leverage the template repository. '),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Team Consensus"),": Discuss and agree on continuous integration best practices with your development team. Establish a workflow for building, publishing and releasing software.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a Repository"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/generate"},"repository template")," for a quick start."),(0,r.kt)("li",{parentName:"ul"},"Alternatively, ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python"},"clone and manually edit our starter kit"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Setup Account Credentials"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Register to create accounts on ",(0,r.kt)("a",{parentName:"li",href:"https://test.pypi.org/account/register/"},"Test PyPi")," and ",(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/account/register/"},"PyPi"),". You'll use one account for testing and one for deployments of your artifact."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/help/#apitoken"},"Generate API tokens")," on PyPI for your accounts. Name your tokens ",(0,r.kt)("inlineCode",{parentName:"li"},"PYPI_API_TOKEN")," and copy their value for the next step below."),(0,r.kt)("li",{parentName:"ul"},"Configure these tokens in your repository's ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets?tool=webui#creating-encrypted-secrets-for-a-repository"},"GitHub Secrets"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Choose a Unique Python 3 Module Name"),": Ensure it's distinct from ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/search/?q="},"existing PyPi modules"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Move Code into Place"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rename ",(0,r.kt)("inlineCode",{parentName:"li"},"slim_sample_project")," to your module name."),(0,r.kt)("li",{parentName:"ul"},"For existing projects, integrate your Python 3 code into the new project structure underneath the module-name directory.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Shortcut"),(0,r.kt)("br",{parentName:"p"}),"\n","Lines requiring code updates are commented with the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFY"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Documentation requiring updates are marked with the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Apply Project Settings"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"pyproject.toml")," to update build system dependencies",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/blob/main/pyproject.toml#L12"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"a"},"write_to")," variable")," to point to the directory containing your Python 3 code."))),(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"setup.cfg")," to specify build system configurations",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/blob/main/setup.cfg#L4"},"Edit the metadata keywords")," to set appropriate ",(0,r.kt)("a",{parentName:"li",href:"https://setuptools.pypa.io/en/latest/references/keywords.html"},"keyword values")," to apply to your project.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," to match your unique module name. "),(0,r.kt)("li",{parentName:"ol"},"Modify ",(0,r.kt)("inlineCode",{parentName:"li"},"console_scripts")," to point at your entry-point:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If your ",(0,r.kt)("a",{parentName:"li",href:"https://setuptools.pypa.io/en/latest/userguide/entry_point.html#entry-points"},"module launches from a command-line"),", define an executable inside your module: ",(0,r.kt)("inlineCode",{parentName:"li"},"executable-name = my_package.module:function"),"."),(0,r.kt)("li",{parentName:"ol"},"Set the value as empty if there is no entry-point."))),(0,r.kt)("li",{parentName:"ol"},"Update URLs for your project.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"NASA-AMMOS/slim-starterkit-python")," with the ",(0,r.kt)("strong",{parentName:"li"},"project/repo_name")," for your cloned project (or refactoring on an existing repo)."))),(0,r.kt)("li",{parentName:"ol"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"author_email"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"description")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"keywords")," to reflect your project details"))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Build Locally"),": The application will build, install and deploy from a local command line when all configurations are properly set."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/tree/main#required-local-tooling"},"Install local tooling and requirements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/tree/main#local-build-testing"},"Clean and build")," and clean again after module builds successfully",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Information"),(0,r.kt)("br",{parentName:"p"}),"\n","To validate deployment, we publish the module to the Test PyPi sandbox ",(0,r.kt)("em",{parentName:"p"},"by default"),". To publish on the official PyPi, a ",(0,r.kt)("em",{parentName:"p"},"minor configuration change is required"),". ",(0,r.kt)("strong",{parentName:"p"},"All previous steps must be complete and the application must build successfully.")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Build on GitHub"),":\nA release kicks off a build and release process in GitHub Actions. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Test publication on Test PyPi",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Update the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/blob/main/slim_sample_project/version.py"},"version number in the ",(0,r.kt)("inlineCode",{parentName:"a"},"version.py")," file"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/tree/main#automated-build-kickoff"},"Kick off a build by releasing your product using the same version.")),(0,r.kt)("li",{parentName:"ol"},"When the product builds successfully, proceed to the next section, ",(0,r.kt)("strong",{parentName:"li"},"Release to PyPi"),". ",(0,r.kt)("em",{parentName:"li"},"Otherwise, revisit earlier steps and check for errors or other invalid settings.")))),(0,r.kt)("li",{parentName:"ul"},"Release to PyPi (simple configuration changes point at the release server)",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"PYPI_API_TOKEN")," to point at PyPi in ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets?tool=webui#creating-encrypted-secrets-for-a-repository"},"GitHub Secrets")," in your newly created repository ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"In the repository, select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," tab and navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"Security"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Secrets and variables")," ",(0,r.kt)("strong",{parentName:"li"},"--\x3e")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Actions"),". "),(0,r.kt)("li",{parentName:"ol"},"Recalling the PyPi token previously saved in ",(0,r.kt)("strong",{parentName:"li"},"Setup Account Credentials")," (step 3 above): Edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"PYPI_API_TOKEN")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"Repository secrets")," to the saved PyPi token value for PyPi. (In other words, replace the test token with the regular, non-test PyPi token.)"))),(0,r.kt)("li",{parentName:"ol"},"Change the ",(0,r.kt)("inlineCode",{parentName:"li"},"python-publish.yml")," configuration to remove Test PyPi coordinates",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Remove '",(0,r.kt)("inlineCode",{parentName:"li"},"--repository testpypi"),"' from the one-line publish command to read: ",(0,r.kt)("inlineCode",{parentName:"li"},"twine upload --verbose dist/*.whl dist/*.zip")," "))),(0,r.kt)("li",{parentName:"ol"},"Update the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/blob/main/slim_sample_project/version.py"},"version number in the ",(0,r.kt)("inlineCode",{parentName:"a"},"version.py")," file"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/tree/main#automated-build-kickoff"},"Kick off a build by tagging and releasing your product using the same version number."))))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"additional-files"},"Additional Files"),(0,r.kt)("p",null,"This starter kit produces several deliverables deployed for distribution:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GitHub"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/releases/latest"},"Release report with automatic changelog summaries based on commit history.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/tags"},"Tagged build versions corresponding to release versions.")),(0,r.kt)("li",{parentName:"ul"},"Source distribution:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/tags/"},"Tarball")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-starterkit-python/tags/"},"ZIP")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PyPi"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://test.pypi.org/project/slim-sample-project/"},"Fully documented site with project links")," "),(0,r.kt)("li",{parentName:"ul"},"Completely built Python 3 distributions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://test.pypi.org/project/slim-sample-project/#files"},"Compressed ZIP source code with release hashes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://test.pypi.org/project/slim-sample-project/#files"},"Python wheel"))))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"frequently-asked-questions-faq"},"Frequently Asked Questions (FAQ)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Q: What tooling is necessary to use the starter kit?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A: ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python 3 version 3.9 or greater")," must be installed with a working ",(0,r.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/installation/"},"package manager (",(0,r.kt)("inlineCode",{parentName:"a"},"pip"),")"),". As well, you'll need the latest versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"setuptools"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"twine")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wheel"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"python3 --version  # must report Python >3.9.x\npip3 install --upgrade pip\npip3 install --upgrade build setuptools setuptools_scm twine wheel\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Q: How do I choose a unique module name for PyPi?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A: Research existing modules on PyPi and select a name that is not already in use. Consider using a creative and/or descriptive name relevant to your project."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"credits"},"Credits"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Authorship"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jpl-jengelke"},"John Engelke"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Acknowledgements"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inspiration and practices from modern Python tooling and GitHub CI/CD workflows.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"feedback-and-contributions"},"Feedback and Contributions"),(0,r.kt)("p",null,"We welcome feedback and contributions to improve this guide. Please see our ",(0,r.kt)("a",{parentName:"p",href:"https://nasa-ammos.github.io/slim/docs/contribute/contributing/"},"contribution guidelines"),"."))}c.isMDXComponent=!0}}]);