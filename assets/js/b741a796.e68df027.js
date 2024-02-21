"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4642],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var p=r.createContext({}),o=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,p=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),u=o(a),c=i,g=u["".concat(p,".").concat(c)]||u[c]||k[c]||n;return a?r.createElement(g,l(l({ref:e},m),{},{components:a})):r.createElement(g,l({ref:e},m))}));function g(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,l=new Array(n);l[0]=c;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[u]="string"==typeof t?t:i,l[1]=s;for(var o=2;o<n;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},711:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>n,metadata:()=>s,toc:()=>o});var r=a(7462),i=(a(7294),a(3905));const n={title:"Testing Frameworks",sidebar_label:"Testing Frameworks"},l=void 0,s={unversionedId:"guides/software-lifecycle/continuous-testing/testing-frameworks",id:"guides/software-lifecycle/continuous-testing/testing-frameworks",title:"Testing Frameworks",description:"* Continuous Testing",source:"@site/docs/guides/software-lifecycle/continuous-testing/testing-frameworks.md",sourceDirName:"guides/software-lifecycle/continuous-testing",slug:"/guides/software-lifecycle/continuous-testing/testing-frameworks",permalink:"/slim/docs/guides/software-lifecycle/continuous-testing/testing-frameworks",draft:!1,editUrl:"https://github.com/nasa-ammos/slim/tree/main/docs/guides/software-lifecycle/continuous-testing/testing-frameworks.md",tags:[],version:"current",frontMatter:{title:"Testing Frameworks",sidebar_label:"Testing Frameworks"},sidebar:"guidesSidebar",previous:{title:"Continuous Testing",permalink:"/slim/docs/guides/software-lifecycle/continuous-testing/"},next:{title:"Metrics",permalink:"/slim/docs/guides/software-lifecycle/metrics/"}},p={},o=[],m={toc:o},u="wrapper";function k(t){let{components:e,...a}=t;return(0,i.kt)(u,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Continuous Testing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For Development APIs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For module testing (xUnit)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using (Java) ",(0,i.kt)("a",{parentName:"li",href:"https://junit.org/junit5/"},"JUnit")),(0,i.kt)("li",{parentName:"ul"},"Using (Python) ",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/unittest.html#module-unittest"},"PyUnit")),(0,i.kt)("li",{parentName:"ul"},"Using (C#) ",(0,i.kt)("a",{parentName:"li",href:"https://nunit.org/"},"NUnit")),(0,i.kt)("li",{parentName:"ul"},"Using (C/C++) ",(0,i.kt)("a",{parentName:"li",href:"http://cunit.sourceforge.net/"},"cUnit"),"/",(0,i.kt)("a",{parentName:"li",href:"https://freedesktop.org/wiki/Software/cppunit/"},"CppUnit")))),(0,i.kt)("li",{parentName:"ul"},"For mocking, stubbing and simulating test services",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using Java",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://site.mockito.org/"},"Mockito")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://easymock.org/"},"EasyMock")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"http://jmock.org/"},"JMock")))),(0,i.kt)("li",{parentName:"ul"},"Using Python",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://docs.pytest.org/"},"PyTest")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://docs.nose2.io/en/latest/"},"Nose2")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://mock.readthedocs.io/en/latest/"},"Mock")))),(0,i.kt)("li",{parentName:"ul"},"Using C#",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/moq/moq"},"Moq")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://nsubstitute.github.io/"},"NSubstitute")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://fakeiteasy.github.io/"},"FakeItEasy")))),(0,i.kt)("li",{parentName:"ul"},"Using C/C++",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ThrowTheSwitch/CMock"},"CMock")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/coolxv/cpp-stub"},"cpp-stub")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/googletest"},"googletest")))))))),(0,i.kt)("li",{parentName:"ul"},"For Code Analysis",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For static analysis",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using Java",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://checkstyle.sourceforge.io/"},"Checkstyle")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spotbugs/spotbugs"},"Spotbugs")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pmd/pmd"},"PMD")))),(0,i.kt)("li",{parentName:"ul"},"Using Python",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://pylint.pycqa.org/en/latest/"},"PyLint")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PyCQA/pyflakes"},"Pyflakes")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pmd/pmd"},"PMD")))),(0,i.kt)("li",{parentName:"ul"},"Using C#",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/StyleCop/StyleCop"},"StyleCop")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.mono-project.com/docs/tools+libraries/tools/gendarme/"},"Gendarme")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pmd/pmd"},"PMD")))),(0,i.kt)("li",{parentName:"ul"},"Using C/C++",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/danmar/cppcheck"},"CppCheck")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://clang-analyzer.llvm.org/"},"Clang Static Analyzer")," / ",(0,i.kt)("a",{parentName:"li",href:"https://clang.llvm.org/extra/clang-tidy/"},"tidy")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pmd/pmd"},"PMD")))))),(0,i.kt)("li",{parentName:"ul"},"For dynamic analysis",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For test coverage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using Java",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.jacoco.org/jacoco/"},"Jacoco")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cobertura/cobertura"},"Cobertura")))),(0,i.kt)("li",{parentName:"ul"},"Using Python",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nedbat/coveragepy"},"Coverage")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pytest-dev/pytest-cov"},"PyTest-cov")))),(0,i.kt)("li",{parentName:"ul"},"Using C#",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SteveGilham/altcover"},"AltCover")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"http://ncover.sourceforge.net/"},"NCover")))),(0,i.kt)("li",{parentName:"ul"},"Using C/C++",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linux-test-project/lcov"},"lcov")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenCppCoverage/OpenCppCoverage"},"OpenCppCoverage")))))),(0,i.kt)("li",{parentName:"ul"},"For complexity analysis and runtime performance",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using Java",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://jmeter.apache.org/"},"JMeter")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.ej-technologies.com/products/jprofiler/overview.html"},"JProfiler")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/javapathfinder/jpf-core"},"JPF")))),(0,i.kt)("li",{parentName:"ul"},"Using Python",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/plasma-umass/scalene"},"Scalene")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/trace.html"},"trace"),"/",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/inspect.html"},"inspect"),"/",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/pdb.html"},"pdb")))),(0,i.kt)("li",{parentName:"ul"},"Using C#",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/visualstudio/profiling/profiling-feature-tour?view=vs-2022#analyze-performance-legacy-tools"},"Performance Profiler")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.parasoft.com/products/parasoft-dottest/"},"Parasoft Dottest")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.red-gate.com/products/dotnet-development/ants-performance-profiler/"},"ANTS Profiler")))),(0,i.kt)("li",{parentName:"ul"},"Using C/C++",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://valgrind.org/"},"Valgrind")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/onlinedocs/gcc/Gcov.html"},"Gcov")))))))),(0,i.kt)("li",{parentName:"ul"},"For security",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://nasa.github.io/scrub/usage.html#supported-cots-tools-and-languages"},"Scrub/Coverity/CodeQL")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.sonarqube.org/"},"SonarQube")))))),(0,i.kt)("li",{parentName:"ul"},"For Web Applications",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For Service Endpoints (APIs)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For RESTful endpoints",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://jmeter.apache.org/"},"JMeter")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://rest-assured.io/"},"REST Assured (REST, RPC)")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.soapui.org/"},"SOAPUI")))),(0,i.kt)("li",{parentName:"ul"},"Using RPC/remote processing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/scripting/testing-rpc-ports-with-powershell-and-yes-its-as-much-fun-as-it-sounds/"},"Powershell")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/troubleshoot/windows-server/networking/portqry-command-line-port-scanner-v2#step-2-specialized-tests"},"PortQry Interactive")))))),(0,i.kt)("li",{parentName:"ul"},"For User Interfaces (UIs)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://robotframework.org/"},"Robot Framework")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium"},"Selenium variants ","[","Cucumber, etc.","]")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.cypress.io/"},"Cypress")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"Playwright")))))),(0,i.kt)("li",{parentName:"ul"},"For Performance testing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://jmeter.apache.org/"},"JMeter")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://robotframework.org/"},"Robot Framework")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://cucumber.io/tools/cucumber-open/"},"Cucumber Open")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://netflix.github.io/chaosmonkey/"},"Chaos Monkey")))),(0,i.kt)("li",{parentName:"ul"},"For Mobile",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using all platforms",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://appium.io/"},"Appium")))),(0,i.kt)("li",{parentName:"ul"},"Using Android",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"http://selendroid.io/"},"Selenium/Selendroid")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/training/testing/espresso"},"Espresso")))),(0,i.kt)("li",{parentName:"ul"},"Using iOS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"http://ios-driver.github.io/ios-driver/"},"Selenium/ios-driver")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/xctest"},"XCTest")))))),(0,i.kt)("li",{parentName:"ul"},"For Reporting",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For unified analyses (dynamic and static)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.sonarqube.org/"},"SonarQube")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://nasa.github.io/scrub/usage.html#supported-cots-tools-and-languages"},"Scrub/Unified")))),(0,i.kt)("li",{parentName:"ul"},"For status reporting",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.gurock.com/testrail/"},"Testrail API reporting")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.jenkins.io/"},"Jenkins")," with ",(0,i.kt)("a",{parentName:"li",href:"https://plugins.jenkins.io/code-coverage-api/"},"Code Coverage API Plugin")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://travis-ci.org/"},"Travis CI")," with ",(0,i.kt)("a",{parentName:"li",href:"https://docs.travis-ci.com/user/code-climate/"},"Code Climate")," or ",(0,i.kt)("a",{parentName:"li",href:"https://about.codecov.io/tool/travis-ci/"},"Codecov")))),(0,i.kt)("li",{parentName:"ul"},"For real-time validation and stability",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://www.jenkins.io/"},"Jenkins")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/features/actions"},"GitHub Actions")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-started/"},"Docker Container"))))))))))}k.isMDXComponent=!0}}]);