(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{345:function(e,n,a){"use strict";a.r(n);var t=a(4),s=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"_1-maven官网-官方文档是学习工具的最好参考书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-maven官网-官方文档是学习工具的最好参考书"}},[e._v("#")]),e._v(" 1:Maven官网(官方文档是学习工具的最好参考书)")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://maven.apache.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven官网"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://www.runoob.com/maven/maven-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("菜鸟教程-maven教程"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"_2-maven官网定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-maven官网定义"}},[e._v("#")]),e._v(" 2:maven官网定义")]),e._v(" "),n("p",[e._v("官方解释：Apache Maven is a software project management and comprehension tool.\nBased on the concept of a project object model (POM),Maven can manage a project's build,\nreporting and documentation from a central piece of information\n(Apache "),n("strong",[e._v("Maven")]),e._v("是一个"),n("strong",[e._v("软件项目管理和理解工具")]),e._v("\n。基于项目对象模型（POM）的概念，Maven可以从一个中心信息管理项目的构建，报告和文档)")]),e._v(" "),n("p",[e._v("我目前所用到的Maven的主要作用就是：")]),e._v(" "),n("ul",[n("li",[e._v("添加第三方jar包;")]),e._v(" "),n("li",[e._v("jar包之间的依赖关系;")]),e._v(" "),n("li",[e._v("获取第三方jar包；")]),e._v(" "),n("li",[e._v("将整个项目拆分成多个工程模块;")]),e._v(" "),n("li",[e._v("部署，测试报告;")])]),e._v(" "),n("p",[e._v("但是maven是一个强大工具(\n远远不止我提到的这几个基础的功能,其中就包含项目的构建，报告和文档,官方解释地址:"),n("a",{attrs:{href:"https://maven.apache.org/maven-features.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://maven.apache.org/maven-features.html"),n("OutboundLink")],1),e._v("）")]),e._v(" "),n("h2",{attrs:{id:"_3-maven下载地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-maven下载地址"}},[e._v("#")]),e._v(" 3:Maven下载地址")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://maven.apache.org/download.cgi"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"_4-maven安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-maven安装"}},[e._v("#")]),e._v(" 4:maven安装")]),e._v(" "),n("h3",{attrs:{id:"_4-1-解压部署maven核心程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-解压部署maven核心程序"}},[e._v("#")]),e._v(" "),n("strong",[e._v("4.1:解压部署Maven核心程序")])]),e._v(" "),n("ol",[n("li",[n("p",[e._v("检查JAVA_HOME环境变量\n首先确保你的JDK已经正确安装;")])]),e._v(" "),n("li",[n("p",[e._v("解压Maven的核心程序\n将apache-maven-3.5.3-bin.zip(在项目中以上传元安装包)解压到一个非中文无空格的目录下。例如：D:\n\\DevInstall\\apache-maven-3.5.3")])]),e._v(" "),n("li",[n("p",[e._v("配置环境变量\nM2_HOME D:\\DevInstall\\apache-maven-3.5.3\npath D:\\DevInstall\\apache-maven-3.5.3\\bin")])]),e._v(" "),n("li",[n("p",[e._v('查看Maven版本信息验证安装是否正确\nC:\\Windows\\System32>mvn -v\nApache Maven 3.5.3 (3383c37e1f9e9b3bc3df5050c29c8aff9f295297; 2018-02-25T03:49:05+08:00)\nMaven home: D:\\Maven\\apache-maven-3.5.3\\bin..\nJava version: 1.8.0_131, vendor: Oracle Corporation\nJava home: D:\\Program Files\\Java\\jdk1.8.0_131\\jre\nDefault locale: zh_CN, platform encoding: GBK\nOS name: "windows 10", version: "10.0", arch: "amd64", family: "windows"')])])]),e._v(" "),n("h3",{attrs:{id:"_4-2-修改本地仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-修改本地仓库"}},[e._v("#")]),e._v(" 4.2:修改本地仓库")]),e._v(" "),n("ol",[n("li",[e._v("默认本地仓库位置：~.m2\\repository,~表示当前用户的家目录，例如：C:\\Users[你当前登录系统的用户名]")]),e._v(" "),n("li",[e._v("指定本地仓库位置的配置信息文件：apache-maven-3.5.3\\conf\\settings.xml")]),e._v(" "),n("li",[e._v("在根标签settings下添加如下内容：<localRepository>[本地仓库路径，也就是RepMaven.zip的解压目录]")])]),e._v(" "),n("h2",{attrs:{id:"_5-官网五分钟教程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-官网五分钟教程"}},[e._v("#")]),e._v(" 5:官网五分钟教程")]),e._v(" "),n("h3",{attrs:{id:"_5-1-保证安装好maven-参考本文4-maven安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-保证安装好maven-参考本文4-maven安装"}},[e._v("#")]),e._v(" 5.1:保证安装好Maven(参考本文4:maven安装)")]),e._v(" "),n("h3",{attrs:{id:"_5-2-首先你要知道maven的一个项目结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-首先你要知道maven的一个项目结构"}},[e._v("#")]),e._v(" 5.2:首先你要知道Maven的一个项目结构")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("my-app\n|-- pom.xml project's Project Object Model, or POM. 项目对象模型文件\n|-- src\n    |-- main\n        |-- java\tApplication/Library sources 应用程序/库源\n        |-- resources   Application/Library resources 应用程序/库资源\n        |-- filters   Resource filter files 资源过滤文件\n        |-- webapp   Web application sources Web应用程序源\n    |-- test\n        |--java Test sources 测试来源\n        |--resources Test sources 测试资源\n        |--filters Test resource filter files 测试资源过滤器文件\n    |--it Integration Tests (primarily for plugins) 集成测试（主要用于插件）\n    |--assembly Assembly descriptors 程序装配集成描述\n    |--site Site\nLICENSE.txt\tProject's license 项目许可证\nNOTICE.txt\tNotices and attributions required by libraries that the project depends on 项目依赖的库和其他注意的问题\nREADME.txt 项目提要\n")])])]),n("h3",{attrs:{id:"_5-3-在建成你的项目之后-一定记住拷贝一份官方的pom-xml放到其指定的位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-在建成你的项目之后-一定记住拷贝一份官方的pom-xml放到其指定的位置"}},[e._v("#")]),e._v(" 5.3:在建成你的项目之后,一定记住拷贝一份官方的pom.xml放到其指定的位置")]),e._v(" "),n("p",[e._v("eg:pom.xml")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n     xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n     <modelVersion>4.0.0</modelVersion>\n\n     <groupId>com.mycompany.app</groupId>\n     <artifactId>my-app</artifactId>\n     <version>1.0-SNAPSHOT</version>\n\n     <properties>\n       <maven.compiler.source>1.7</maven.compiler.source>\n       <maven.compiler.target>1.7</maven.compiler.target>\n     </properties>\n\n     <dependencies>\n       <dependency>\n         <groupId>junit</groupId>\n         <artifactId>junit</artifactId>\n         <version>4.12</version>\n         <scope>test</scope>\n       </dependency>\n     </dependencies>\n   </project>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br")])]),n("p",[e._v("该项目的POM目录下打开命令行窗口执行一段shell脚本:\n"),n("code",[e._v("mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false")]),e._v("\n第一次运行可能会花销一些时间下载很多maven依赖的包")]),e._v(" "),n("h3",{attrs:{id:"_5-4-pom文件的关键元素解释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-pom文件的关键元素解释"}},[e._v("#")]),e._v(" 5.4.POM文件的关键元素解释:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    <project> This is the top-level element in all Maven pom.xml files. \n    (maven项目中最高级别的的pom.xml文件元素节点)\n\n    <modelVersion> This element indicates what version of the object model this POM \n    is using.The version of the model itself changes very infrequently but it is mandatory\n    in order to ensure stability of use if and when the Maven developers deem it necessary\n    to change the model.(工程对象模型的版本号,不经常改变但是开发者可以根据需要改变,存在就是为了确保项目的稳定性)\n\n    <groupId> This element indicates the unique identifier of the organization or group\n    that created the project.The groupId is one of the key identifiers of a project and\n    is typically based on the fully qualified domain name of your organization.For example\n    org.apache.maven.plugins is the designated groupId for all Maven plugins.\n    (创建项目的组织或者组的唯一标识符,一般都是用组织的全限定域名)\n\n    <artifactId> This element indicates the unique base name of the primary artifact being\n    generated by this project.The primary artifact for a project is typically a JAR file.\n    Secondary artifacts like source bundles also use the artifactId as part of their final name.\n    A typical artifact produced by Maven would have the form <artifactId>-<version>.<extension> \n    (for example, myapp-1.0.jar).\n    (由项目生成的唯一主要工件的基本名称(模块名称),主要比如我们打包的时候的生成的包名)\n\n    <packaging> This element indicates the package type to be used by this artifact \n    (e.g. JAR, WAR, EAR, etc.).This not only means if the artifact produced is JAR, WAR,\n    or EAR but can also indicate a specific lifecycle to use as part of the build process.\n    (The lifecycle is a topic we will deal with further on in the guide. For now, just keep\n    in mind that the indicated packaging of a project can play a part in customizing the build\n    lifecycle.) The default value for the packaging element is JAR so you do not have to specify\n    this for most projects.(就是我们打包的类型,eg: jar包,war包.ear包,默认是jarb包)\n\n    <version> This element indicates the version of the artifact generated by the project.\n    Maven goes a long way to help you with version management and you will often see the SNAPSHOT\n    designator in a version,which indicates that a project is in a state of development. We will\n    discuss the use of snapshots and how they work further on in this guide.\n    (由项目生成的工件版本号,有很多版本:eg SNAPSHOT)\n\n    <name> This element indicates the display name used for the project. This is often used\n    in Maven's generated documentation.(项目的显示名称)\n\n    <url> This element indicates where the project's site can be found. This is often used in Maven's\n    generated documentation.(项目的站点位置地址)\n\n    <description> This element provides a basic description of your project. This is often used in Maven's\n    generated documentation.(项目的接本基本描述)\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br"),n("span",{staticClass:"line-number"},[e._v("35")]),n("br"),n("span",{staticClass:"line-number"},[e._v("36")]),n("br"),n("span",{staticClass:"line-number"},[e._v("37")]),n("br"),n("span",{staticClass:"line-number"},[e._v("38")]),n("br"),n("span",{staticClass:"line-number"},[e._v("39")]),n("br"),n("span",{staticClass:"line-number"},[e._v("40")]),n("br"),n("span",{staticClass:"line-number"},[e._v("41")]),n("br"),n("span",{staticClass:"line-number"},[e._v("42")]),n("br"),n("span",{staticClass:"line-number"},[e._v("43")]),n("br")])]),n("p",[e._v("更多POM.xml元素解释描述文档参考地址:"),n("a",{attrs:{href:"https://maven.apache.org/ref/3.6.0/maven-model/maven.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://maven.apache.org/ref/3.6.0/maven-model/maven.html"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"_6-maven常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-maven常用命令"}},[e._v("#")]),e._v(" 6:maven常用命令")]),e._v(" "),n("h3",{attrs:{id:"_6-1-maven的常用命令-注意-运行maven命令时一定要进入pom-xml文件所在的目录-演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-maven的常用命令-注意-运行maven命令时一定要进入pom-xml文件所在的目录-演示"}},[e._v("#")]),e._v(" 6.1:Maven的常用命令(*注意：运行Maven命令时一定要进入pom.xml文件所在的目录)演示:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    mvn compile\t编译\n    编译的内容命令行展示窗口展示内容\n    [WARNING]\n    [WARNING] Some problems were encountered while building the effective settings\n    [WARNING] Unrecognised tag: 'mirrors' (position: START_TAG seen ...</mirror>\\n--\x3e\\n\\t \\n<mirrors>... @160:14)    \n    @ D:\\Maven\\apache-maven-3.5.3\\bin\\..\\conf\\settings.xml, line 160, column 14\n    [WARNING]\n    [INFO] Scanning for projects...\n    [INFO]\n    [INFO] --------------------------< maven_3:maven_3 >---------------------------\n    [INFO] Building maven_3 1.0-SNAPSHOT\n    [INFO] --------------------------------[ jar ]---------------------------------\n    Downloading from central: https://repo.maven.apache.org/maven2/junit/junit/4.0/junit-4.0.pom\n    Downloaded from central: https://repo.maven.apache.org/maven2/junit/junit/4.0/junit-4.0.pom (210 B at 129 B/s)\n    [INFO]\n    [INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ maven_3 ---\n    [WARNING] Using platform encoding (GBK actually) to copy filtered resources, i.e. build is platform dependent!\n    [INFO] Copying 1 resource\n    [INFO]\n    [INFO] --- maven-compiler-plugin:3.1:compile (default-compile) @ maven_3 ---\n    [INFO] Changes detected - recompiling the module!\n    [WARNING] File encoding has not been set, using platform encoding GBK, i.e. build is platform dependent!\n    [INFO] Compiling 1 source file to D:\\ArnoldSu\\Maven-learnning\\maven_3_maven项目与常用命令\\target\\classes\n    [INFO] ------------------------------------------------------------------------\n    [INFO] BUILD SUCCESS\n    [INFO] ------------------------------------------------------------------------\n    [INFO] Total time: 7.092 s\n    [INFO] Finished at: 2019-02-01T10:37:11+08:00\n    [INFO] ------------------------------------------------------------------------\n\n    mvn clean\t清理\n    [WARNING]\n    [WARNING] Some problems were encountered while building the effective settings\n    [WARNING] Unrecognised tag: 'mirrors' (position: START_TAG seen ...</mirror>\\n--\x3e\\n\\t \\n<mirrors>... @160:14)      \n    @ D:\\Maven\\apache-maven-3.5.3\\bin\\..\\conf\\settings.xml, line 160, column 14\n    [WARNING]\n    [INFO] Scanning for projects...\n    [INFO]\n    [INFO] --------------------------< maven_3:maven_3 >---------------------------\n    [INFO] Building maven_3 1.0-SNAPSHOT\n    [INFO] --------------------------------[ jar ]---------------------------------\n    [INFO]\n    [INFO] --- maven-clean-plugin:2.5:clean (default-clean) @ maven_3 ---\n    [INFO] Deleting D:\\ArnoldSu\\Maven-learnning\\maven_3_maven项目与常用命令\\target\n    [INFO] ------------------------------------------------------------------------\n    [INFO] BUILD SUCCESS\n    [INFO] ------------------------------------------------------------------------\n    [INFO] Total time: 0.572 s\n    [INFO] Finished at: 2019-02-01T11:55:52+08:00\n    [INFO] ------------------------------------------------------------------------\n\n    mvn test\t测试\n    [WARNING]\n    [WARNING] Some problems were encountered while building the effective settings\n    [WARNING] Unrecognised tag: 'mirrors' (position: START_TAG seen ...</mirror>\\n--\x3e\\n\\t \\n<mirrors>... @160:14)      \n    @ D:\\Maven\\apache-maven-3.5.3\\bin\\..\\conf\\settings.xml, line 160, column 14\n    [WARNING]\n    [INFO] Scanning for projects...\n    [INFO]\n    [INFO] --------------------------< maven_3:maven_3 >---------------------------\n    [INFO] Building maven_3 1.0-SNAPSHOT\n    [INFO] --------------------------------[ jar ]---------------------------------\n    [INFO]\n    [INFO] --- maven-clean-plugin:2.5:clean (default-clean) @ maven_3 ---\n    [INFO] Deleting D:\\ArnoldSu\\Maven-learnning\\maven_3_maven项目与常用命令\\target\n    [INFO] ------------------------------------------------------------------------\n    [INFO] BUILD SUCCESS\n    [INFO] ------------------------------------------------------------------------\n    [INFO] Total time: 0.572 s\n    [INFO] Finished at: 2019-02-01T11:55:52+08:00\n    [INFO] ------------------------------------------------------------------------\n\n    mvn package\t打包\n    打包的内容命令行展示窗口展示内容\n    [WARNING]\n    [WARNING] Some problems were encountered while building the effective settings\n    [WARNING] Unrecognised tag: 'mirrors' (position: START_TAG seen ...</mirror>\\n--\x3e\\n\\t\\n<mirrors>...         \n    @160:14)  @ D:\\Maven\\apache-maven-3.5.3\\bin\\..\\conf\\settings.xml, line 160, column 14\n    [WARNING]\n    [INFO] Scanning for projects...\n    [INFO]\n    [INFO] --------------------------< maven_3:maven_3 >---------------------------\n    [INFO] Building maven_3 1.0-SNAPSHOT\n    [INFO] --------------------------------[ jar ]---------------------------------\n    [INFO]\n    [INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ maven_3 ---\n    [WARNING] Using platform encoding (GBK actually) to copy filtered resources, i.e. build is platform dependent!\n    [INFO] Copying 1 resource\n    [INFO]\n    [INFO] --- maven-compiler-plugin:3.1:compile (default-compile) @ maven_3 ---\n    [INFO] Nothing to compile - all classes are up to date\n    [INFO]\n    [INFO] --- maven-resources-plugin:2.6:testResources (default-testResources) @ maven_3 ---\n    [WARNING] Using platform encoding (GBK actually) to copy filtered resources, i.e. build is platform dependent!\n    [INFO] skip non existing resourceDirectory D:\\ArnoldSu\\Maven-learnning\\maven_3_maven项目与常用命令\\src\\test\\resources\n    [INFO]\n    [INFO] --- maven-compiler-plugin:3.1:testCompile (default-testCompile) @ maven_3 ---\n    [INFO] Nothing to compile - all classes are up to date\n    [INFO]\n    [INFO] --- maven-surefire-plugin:2.12.4:test (default-test) @ maven_3 ---\n    [INFO] Surefire report directory: D:\\ArnoldSu\\Maven-learnning\\maven_3_maven项目与常用命令\\target\\surefire-reports\n\n    -------------------------------------------------------\n     T E S T S\n    -------------------------------------------------------\n    Running com.boommob.www.HelloWorldTest\n    Hello litingwei!Hello litingwei!\n    Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.176 sec\n    Results :\n\n    Tests run: 1, Failures: 0, Errors: 0, Skipped: 0\n\n    [INFO]\n    [INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ maven_3 ---\n    [INFO] ------------------------------------------------------------------------\n    [INFO] BUILD SUCCESS\n    [INFO] ------------------------------------------------------------------------\n    [INFO] Total time: 4.588 s\n    [INFO] Finished at: 2019-02-01T10:57:07+08:00\n    [INFO] ------------------------------------------------------------------------\n")])])]),n("h3",{attrs:{id:"_6-2-在执行完相应的maven命令之后会在该项目的路径下生成target文件夹"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-在执行完相应的maven命令之后会在该项目的路径下生成target文件夹"}},[e._v("#")]),e._v(" 6.2:在执行完相应的maven命令之后会在该项目的路径下生成target文件夹:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(" target\n     |-- classes 编译之后的类文件\n     |-- maven-archeiver maven打包时候生成的得一个工程对象模型属性文件里面记载的是该项目的POM.xml的一些相关属性\n     |-- maven-status maven状态,一些maven编译的插件信息\n     |-- surefire-reports maven打包生成的一个报告,测试报告\n     |-- test-classes 编译之后的测试类文件\n")])])]),n("h2",{attrs:{id:"_7-maven依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-maven依赖"}},[e._v("#")]),e._v(" 7:maven依赖")]),e._v(" "),n("h3",{attrs:{id:"_7-1-首先项目pom-xml添加本文步骤6-maven常用命令中的的依赖-这是我们本地库的一个模块依赖-如果直接在命令行直接执行-mvn-compile-的话会报错-此处需要先在本文步骤6上执行mvn-install-将模块安装到本地-在结合maven依赖进行编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-首先项目pom-xml添加本文步骤6-maven常用命令中的的依赖-这是我们本地库的一个模块依赖-如果直接在命令行直接执行-mvn-compile-的话会报错-此处需要先在本文步骤6上执行mvn-install-将模块安装到本地-在结合maven依赖进行编译"}},[e._v("#")]),e._v(" 7.1:首先项目POM.xml添加本文步骤6:maven常用命令中的的依赖,这是我们本地库的一个模块依赖,如果直接在命令行直接执行:mvn compile 的话会报错, 此处需要先在本文步骤6上执行mvn install,将模块安装到本地,在结合maven依赖进行编译.")]),e._v(" "),n("h3",{attrs:{id:"_7-2-pom-xml元素解释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-pom-xml元素解释"}},[e._v("#")]),e._v(" 7.2:POM.xml元素解释")]),e._v(" "),n("p",[e._v("dependencies:(Many) This element describes all of the dependencies associated with a project.\nThese dependencies are used to construct a classpath for your project during the build process.\nThey are automatically downloaded from the repositories defined in this project.See the dependency mechanism for more\ninformation.\n(\n此元素描述与项目关联的所有依赖项。这些依赖项用于在构建过程中为项目构造类路径。它们会自动从此项目中定义的存储库下载,参考依赖机制:"),n("a",{attrs:{href:"https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html"),n("OutboundLink")],1),e._v(");")]),e._v(" "),n("h3",{attrs:{id:"_7-3-dependency-mechanism-依赖机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-dependency-mechanism-依赖机制"}},[e._v("#")]),e._v(" 7.3:Dependency Mechanism(依赖机制)")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Transitive Dependencies(传递依赖)")]),e._v("\nDependency mediation(依赖调解),多个版本依赖项nearest definition\n("),n("strong",[e._v("最近定义原则:表示所使用的版本将是依赖关系树中与项目最接近的版本")]),e._v("。例如，如果A，B和C\n的依赖关系定义为A - > B - > C - > D 2.0和A - > E - > D 1.0，则构建A时将使用D 1.0,\n因为A的路径到D到E更短.您可以在A中向D 2.0明确添加依赖项以强制使用D 2.0);")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Dependency management(依赖管理)")]),e._v("\n,在3.1的示例中，依赖项直接添加到A，即使它不是由A直接使用。相反，A可以在其dependencyManagement部分中包含D作为依赖项,并直接控制在何时使用D的哪个版本;")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Dependency scope(依赖范围)")]),e._v("，Dependency scope(排除依赖项)\n,如果项目X依赖于项目Y，项目Y依赖于项目Z，则项目X的所有者可以使用exclusion元素将项目Z明确地排除为依赖项;")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Optional dependencies(可选择的依赖项)")]),e._v("\n,如果项目Y依赖于项目Z，项目Y的所有者可以使用optional元素，将项目Z标记为可选依赖项。当项目X依赖于项目Y时，X将仅依赖于Y而不依赖于Y的可选依赖项Z.项目X的所有者可以在它的选项中明确地添加对Z的依赖性;")])])]),e._v(" "),n("p",[e._v("Maven提供"),n("strong",[e._v("dependency:analyze")]),e._v("插件,可以帮助最佳实现依赖机制.")]),e._v(" "),n("h3",{attrs:{id:"_7-4-dependency-scope-依赖范围"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-dependency-scope-依赖范围"}},[e._v("#")]),e._v(" 7.4:Dependency scope(依赖范围)")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("项目")]),e._v(" "),n("th",[e._v("说明")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[e._v("compile")])]),e._v(" "),n("td",[n("strong",[e._v("默认范围")]),e._v(",编译依赖项在项目的所有类路径中都可用,这些依赖项将"),n("strong",[e._v("传播到其他依赖项目")])])]),e._v(" "),n("tr",[n("td",[n("strong",[e._v("provided")])]),e._v(" "),n("td",[e._v("和"),n("strong",[e._v("compile很相似")]),e._v(",但是表示您希望JDK或容器在运行时提供依赖项。例如，在为Java Enterprise Edition构建Web应用程序时，您可以将Servlet API和相关Java EE API的依赖关系设置")])]),e._v(" "),n("tr",[n("td",[n("strong",[e._v("runtime")])]),e._v(" "),n("td",[e._v("此范围表示编译不需要依赖项，但是用于执行。它位于运行时和测试类路径中，但不是编译类路径。 可执行不需要编译的依赖")])]),e._v(" "),n("tr",[n("td",[n("strong",[e._v("test")])]),e._v(" "),n("td",[e._v("测试编译和执行的依赖,"),n("strong",[e._v("依赖不传递")])])]),e._v(" "),n("tr",[n("td",[n("strong",[e._v("system")])]),e._v(" "),n("td",[e._v("和provided很相似只是您必须提供明确包含它的JAR。可以使用但是不能在库中找到")])]),e._v(" "),n("tr",[n("td",[n("strong",[e._v("import")])]),e._v(" "),n("td",[e._v("import,仅在POM.xml中引入<dependencyManagement >元素才支持此作用域。并且一旦标"),n("strong",[e._v("注为import,就不参与传递依赖")])])])])]),e._v(" "),n("p",[e._v("每个依赖范围（import除外）以不同方式影响传递依赖性，如下表所示。如果依赖项设置为左列中的作用域，则该依赖项与顶行中作用域的传递依赖性将导致主项目中的依赖项，并在交集处列出作用域。如果未列出范围，则表示将省略依赖关系。\n"),n("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/031.maven/img.png",alt:"依赖作用域"}})]),e._v(" "),n("h3",{attrs:{id:"_7-5-dependency-management-依赖管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-dependency-management-依赖管理"}},[e._v("#")]),e._v(" 7.5:Dependency Management(依赖管理)")]),e._v(" "),n("p",[e._v("集中依赖信息管理,官方图示来说明其机制:两个扩展同一父级的POM\n项目A共同依赖group-a,但是第一个依赖排除对grouo-c的依赖,依赖于artifact-a模块,第二个依赖是group-a下的artifact-b")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/031.maven/img1.png",alt:"项目A"}})]),e._v(" "),n("p",[e._v("项目B,第一个依赖grouo-c下的artifact-b,第二个依赖是group-a下的artifact-b\n"),n("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/031.maven/img2.png",alt:"项目B"}})]),e._v(" "),n("p",[e._v("用依赖管理<dependencyManagemen>放在其父级项目POM.xml")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/031.maven/img3.png",alt:"父项目"}})]),e._v(" "),n("p",[e._v("两个子项目的配置就会简单很多")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/031.maven/img4.png",alt:"简化之后的配置"}})]),e._v(" "),n("p",[e._v("注意:其中子项目用Dependency Management之后需要指明 < type > 的类型,因为Dependency Management\n只针对{groupId, artifactId, type, classifier}为最小单位进行依赖管理")]),e._v(" "),n("p",[e._v("还有个重要的特性就是模块版本控制上面,并且依赖管理的依赖级别是:dependency management transitive\ndependencies除了继承依赖传递,还可以通过 <import>来导入依赖,在较大的项目中比较实用,并且讲究谁先申明谁且本身pom并未申明版本号,就引用第一个申明的版本号作为当前的版本号.")]),e._v(" "),n("h3",{attrs:{id:"_7-6-system-dependencies-系统依赖-已经弃用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-6-system-dependencies-系统依赖-已经弃用"}},[e._v("#")]),e._v(" 7.6:System Dependencies(系统依赖,已经弃用)")]),e._v(" "),n("p",[e._v("本文的maven记录在github地址:"),n("a",{attrs:{href:"https://github.com/ArnoldShu/Maven-learnning",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/ArnoldShu/Maven-learnning"),n("OutboundLink")],1),n("br"),e._v("\n本文的maven记录在gitee地址:"),n("a",{attrs:{href:"https://gitee.com/ArnoldSu/Maven-learnning",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gitee.com/ArnoldSu/Maven-learnning"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=s.exports}}]);