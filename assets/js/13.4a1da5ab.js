(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{337:function(t,a,v){"use strict";v.r(a);var r=v(4),_=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"jvm-本文章以jdk8为基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm-本文章以jdk8为基础"}},[t._v("#")]),t._v(" JVM(本文章以jdk8为基础)")]),t._v(" "),a("h3",{attrs:{id:"jdk-jre-jvm关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk-jre-jvm关系"}},[t._v("#")]),t._v(" JDK，JRE，JVM关系")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("项目")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("JDK(Java Development Kit)")])]),t._v(" "),a("td",[t._v("是Sun微系统针对Java开发人员发布的"),a("strong",[t._v("免费软件开发工具包")]),t._v("（"),a("a",{attrs:{href:"https://baike.baidu.com/item/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E5%8C%85/10418833?fromtitle=SDK&fromid=7815680&fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("SDK"),a("OutboundLink")],1),t._v("，Software development kit）作为Java语言的SDK，普通用户并不需要安装JDK来运行Java程序，而只需要安装JRE（Java Runtime Environment）。而程序开发者必须安装JDK来编译、调试程序。"),a("strong",[t._v("JDK包含")]),t._v("了一批用于"),a("strong",[t._v("Java开发的组件")]),t._v("(eg:javac,java,jar,javadoc等),还包括"),a("strong",[t._v("完整的JRE（Java Runtime Environment）")]),t._v("，Java运行环境，也被称为private runtime。包括了用于"),a("strong",[t._v("产品环境的各种库类")]),t._v("，如基础类库rt.jar，以及给"),a("strong",[t._v("开发人员使用的补充库")]),t._v("，如国际化与本地化的类库、IDL库等等")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("JRE(Java Runtime Environment)")])]),t._v(" "),a("td",[t._v("是"),a("strong",[t._v("一个软件")]),t._v("，由Sun微系统所研发，JRE可以让电脑系统运行Java应用程序（Java Application）,"),a("strong",[t._v("JRE的内部有一个Java虚拟机（Java Virtual Machine，JVM）以及一些标准的类别函数库（Class Library）")])])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("JVM(Java Virtual Machine)")])]),t._v(" "),a("td",[t._v("一种能够"),a("strong",[t._v("运行Java bytecode的虚拟机")]),t._v("，以"),a("strong",[t._v("堆栈结构")]),t._v("机器来进行实做。最早由Sun微系统所研发并实现第一个实现版本，是Java平台的一部分，能够运行以Java语言写作的软件程序,java虚拟机有自己完善的硬体架构，如处理器、堆栈、寄存器等，还具有相应的指令系统。JVM屏蔽了与具体操作系统平台相关的信息，使得Java程序只需生成在Java虚拟机上运行的目标代码（字节码），就可以在多种平台上不加修改地运行。通过对中央处理器（CPU）所执行的软件实现，实现能执行编译过的Java程序码（Applet与应用程序）,作为一种编程语言的虚拟机，实际上不只是专用于Java语言，只要生成的编译文件符合JVM对加载编译文件格式要求，"),a("strong",[t._v("任何语言都可以由JVM编译运行")])])])])]),t._v(" "),a("p",[a("strong",[t._v("三者的关系图示")]),t._v(":")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/01.backend/011.Java/01114/1.png",alt:"JDKJREJVM关系图"}})]),t._v(" "),a("h3",{attrs:{id:"jvm的指令集-java编译器-架构模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm的指令集-java编译器-架构模型"}},[t._v("#")]),t._v(" JVM的指令集（java编译器）架构模型")]),t._v(" "),a("p",[t._v("主流的两种架构特点比较")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("分类")]),t._v(" "),a("th",[t._v("特点")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("基于栈的指令集架构")]),t._v(" "),a("td",[t._v("设计和实现更简单，适用于资源受限的系统；避开了寄存器的分配难题：使用零地址指令方式分配；指令流中的指令大部分是零地址指令，其执行过程依赖于操作栈。指令集更小，编译器容易实现。不需要硬件支持，可移植性更好，更好实现跨平台；")])]),t._v(" "),a("tr",[a("td",[t._v("基于寄存器的指令集架构")]),t._v(" "),a("td",[t._v("典型的应用是X86的二进制指令集：比如传统的pc以及andriod的Davlik虚拟机；指令集架构则完全依赖于硬件，可移植性差；性能优秀和执行更高效；花费更少的指令去完成一项操作。在大部分情况下，基于寄存器架构的指令集往往都以一地址指令、二地址指令和三地址指令为主，而基于栈式架构的指令集确是以零地址指令为主")])])])]),t._v(" "),a("p",[t._v("所以JVM的指令集（java编译器）架构模型是"),a("strong",[t._v("基于栈的指令集架构")])]),t._v(" "),a("h3",{attrs:{id:"jvm的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm的生命周期"}},[t._v("#")]),t._v(" JVM的生命周期")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("流程")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("jvm启动")])]),t._v(" "),a("td",[t._v("通过引导类加载器("),a("strong",[t._v("bootstrap class\tloader")]),t._v(")创建一个初始类("),a("strong",[t._v("inital class")]),t._v("),初始化类根据不同的虚拟机(eg: Classic VM,Exact VM,HotSport,JRockit,j9)类型来决定其实现")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("jvm执行")])]),t._v(" "),a("td",[t._v("执行java程序,程序开始虚拟机执行,程序结束虚拟机结束执行,java程序在jvm中相当于虚拟机到的一个进程")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("jvm退出")])]),t._v(" "),a("td",[t._v("包含正常退出,异常退出,可调用java api主动退出eg:Runtime类或者exit方法,halt方法")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("通俗三个流程概述")])]),t._v(" "),a("td",[a("strong",[t._v("启动")]),t._v("：任何class文件的main函数都可认为是jvm示例的起点。"),a("br"),a("strong",[t._v("运行")]),t._v("：以main函数为起点，后续的线程都由它启动，包括守护线程和用户线程。main方法启动的线程是用户线程，守护线程是JVM自己使用的线程如GC线程。"),a("br"),a("strong",[t._v("退出&异常退出")]),t._v("：用户线程完全退出了，jvm示例结束生命周期。")])])])]),t._v(" "),a("h3",{attrs:{id:"java代码简单执行流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java代码简单执行流程"}},[t._v("#")]),t._v(" Java代码简单执行流程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/01.backend/011.Java/01114/2.png",alt:"Java代码简单执行流程"}})]),t._v(" "),a("h3",{attrs:{id:"jvm结构体系图-记住这个图-以此展开拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm结构体系图-记住这个图-以此展开拓展"}},[t._v("#")]),t._v(" JVM结构体系图(记住这个图，以此展开拓展)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/01.backend/011.Java/01114/3.png",alt:"JVM结构体系图"}})])])}),[],!1,null,null,null);a.default=_.exports}}]);