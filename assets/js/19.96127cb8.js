(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{342:function(t,r,e){"use strict";e.r(r);var a=e(4),n=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"java监控与调优"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java监控与调优"}},[t._v("#")]),t._v(" JAVA监控与调优")]),t._v(" "),r("h3",{attrs:{id:"基于jdk命令行工具的监控"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于jdk命令行工具的监控"}},[t._v("#")]),t._v(" 基于JDK命令行工具的监控")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("指令")]),t._v(" "),r("th",[t._v("option")]),t._v(" "),r("th",[t._v("指令说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("jps")]),t._v(" "),r("td",[t._v("-q 显示LVMID(local virtual mache id)本地虚拟机唯一id,不显示主类名称;"),r("br"),t._v("-l  输出应用程序主类的全类名或进程中执行的是jar包，则输出jar完整路径;"),r("br"),t._v(" -m 输出虚拟机进程启动时传递给主类main()的参数;"),r("br"),t._v("-v 列出虚拟机进程启动时的JVM参数;")]),t._v(" "),r("td",[t._v("java process status,显示指定系统内的HotSpot虚拟机进程（查看虚拟机进程信息），用于查询正在运行的虚拟机进程")])]),t._v(" "),r("tr",[r("td",[t._v("jstat")]),t._v(" "),r("td",[t._v("可参考:"),r("a",{attrs:{href:"https://blog.csdn.net/q13554515812/article/details/89712423",target:"_blank",rel:"noopener noreferrer"}},[t._v("jstat命令详解"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("JVM Statistics Monitoring Tool 监视虚拟机各种运行状态信息的命令行工具")])]),t._v(" "),r("tr",[r("td",[t._v("jinfo")]),t._v(" "),r("td",[t._v("可参考:"),r("a",{attrs:{href:"https://blog.csdn.net/weixin_33815613/article/details/92464222",target:"_blank",rel:"noopener noreferrer"}},[t._v("jinfo命令详解"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("Configuration Info For Java 查看虚拟机配置参数信息，也可用于调整虚拟机的配置参数")])]),t._v(" "),r("tr",[r("td",[t._v("jmap")]),t._v(" "),r("td",[t._v("可参考:"),r("a",{attrs:{href:"https://www.cnblogs.com/kongzhongqijing/articles/3621163.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("jmap命令使用"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("JVM Memory Map,可以获取dump文件（堆转储快照文件,二进制文件），还可以获取目标Java进程的内存相关信息，包括Java堆各区域的使用情况，堆中对象的统计信息，类加载信息")])]),t._v(" "),r("tr",[r("td",[t._v("jhat")]),t._v(" "),r("td",[t._v("可参考:"),r("a",{attrs:{href:"https://www.cnblogs.com/baihuitestsoftware/articles/6406271.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("jhat命令使用"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("JVM Heap Analysis Tool Sun JDK提供的Jhat命令与jmap命令搭配使用，用于分析jmap生成的heap dump文件（堆转储快照），jhat内置了一个微型的HTTP/HTML服务器，生成dump文件的分析结果后，用户可以在浏览器中查看分析结果（分析虚拟机转储快照信息，jhat在JDK9,10已经被删除，官方建议Visual代替）")])]),t._v(" "),r("tr",[r("td",[t._v("jstack")]),t._v(" "),r("td",[t._v("可参考:"),r("a",{attrs:{href:"https://www.jianshu.com/p/8d5782bc596e",target:"_blank",rel:"noopener noreferrer"}},[t._v("jstack命令解析"),r("OutboundLink")],1),t._v(" "),r("br"),r("a",{attrs:{href:"https://www.cnblogs.com/xingzc/p/5778010.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("jstack命令详解"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("JVM Stack Trace 用于生成虚拟机指定进程的线程快照（虚拟机堆栈跟踪），线程快照就是当前虚拟机内指定进程的每一条线程正在执行的方法堆栈的集合，官方文档:"),r("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/11/tools/jstack.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("stack官方文档"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("jcmd")]),t._v(" "),r("td",[t._v("可参考:"),r("a",{attrs:{href:"https://www.cnblogs.com/duanxz/p/6115722.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("jcmd介绍"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("1.7之后新增的多功能工具，可以用来实现除了jstat之外的所有命令的功能，官方文档："),r("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/11/tools/jcmd.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("jcmd官方文档"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("jstatd")]),t._v(" "),r("td",[t._v("可参考:"),r("a",{attrs:{href:"https://www.cnblogs.com/duanxz/p/5497811.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("jstatd命令"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("是一个RMI服务端程序，建立本地计算机与远程监控工具的通信")])])])]),t._v(" "),r("h3",{attrs:{id:"基于gui工具的监控"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于gui工具的监控"}},[t._v("#")]),t._v(" 基于GUI工具的监控")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("工具")]),t._v(" "),r("th",[t._v("介绍")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("jconsole")]),t._v(" "),r("td",[t._v("JDK自带的java监控和管理控制台,官方文档地址："),r("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/technotes/guides/management/jconsole.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("jconsole"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("其他文档参考："),r("a",{attrs:{href:"https://blog.csdn.net/qq_31156277/article/details/80035430",target:"_blank",rel:"noopener noreferrer"}},[t._v("JConsole 可视化工具介绍"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("VisualVM")]),t._v(" "),r("td",[t._v("是一个功能强大的多合一故障诊断和性能监控的可视化工具，它集成了JDK的命令行工具，并且可以独立安装，下载地址："),r("a",{attrs:{href:"https://visualvm.github.io/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("visualVM"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("实践参考链接地址:"),r("br"),r("a",{attrs:{href:"https://www.cnblogs.com/wade-xu/p/4369094.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("性能分析神器VisualVM"),r("OutboundLink")],1),r("br"),r("a",{attrs:{href:"https://www.cnblogs.com/baby123/p/11551626.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VisualVM使用"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("eclipse MAT")]),t._v(" "),r("td",[t._v("Memory Analyzer Tool 是一款功能强大的java堆内存分析工具，是由eclipse开发的插件，也可以单独使用，下载地址:"),r("a",{attrs:{href:"https://www.eclipse.org/mat/downloads.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAT官方下载"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("实践参考链接地址:"),r("br"),r("a",{attrs:{href:"https://www.cnblogs.com/renpei/p/13826481.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eclipse MAT 安装及使用"),r("OutboundLink")],1),r("br"),r("a",{attrs:{href:"https://blog.csdn.net/zhanshenzhi2008/article/details/89070049",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAT分析工具"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Jprofiler")]),t._v(" "),r("td",[t._v("性能强大的java性能诊断工具，但是收费，官方下载地址："),r("br"),r("a",{attrs:{href:"https://www.ej-technologies.com/products/jprofiler/overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jprofiler官方下载"),r("OutboundLink")],1),r("br"),t._v("实践参考链接地址:"),r("br"),r("a",{attrs:{href:"https://blog.csdn.net/vicky_pyh/article/details/88797514",target:"_blank",rel:"noopener noreferrer"}},[t._v("jprofiler安装使用"),r("OutboundLink")],1),r("br"),r("a",{attrs:{href:"https://www.jianshu.com/p/784c60d94989",target:"_blank",rel:"noopener noreferrer"}},[t._v("JProfiler性能分析工具详解"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Arthas")]),t._v(" "),r("td",[t._v("阿里巴巴开源的性能分析神器，支持在线排查问题，命令行交互模式,官方下载地址："),r("a",{attrs:{href:"https://arthas.aliyun.com/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Arthas官方下载"),r("OutboundLink")],1)])])])]),t._v(" "),r("h3",{attrs:{id:"其他优秀文章地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他优秀文章地址"}},[t._v("#")]),t._v(" 其他优秀文章地址")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/ding-dang/p/13129619.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/ding-dang/p/13129619.html"),r("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=n.exports}}]);