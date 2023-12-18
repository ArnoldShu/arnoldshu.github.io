(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{339:function(v,_,t){"use strict";t.r(_);var r=t(4),a=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"运行时数据区-runtime-data-area"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运行时数据区-runtime-data-area"}},[v._v("#")]),v._v(" 运行时数据区(Runtime Data Area)")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/01.backend/011.Java/01114/6.png",alt:"运行时数据区"}}),v._v("\n上图浅白颜色区为每个"),_("strong",[v._v("线程独有(本地方法栈,虚拟机栈,程序计数器)")]),v._v(",线程之间"),_("strong",[v._v("共享方法区,堆,以及非堆区")])]),v._v(" "),_("h3",{attrs:{id:"程序计数器-pc寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器-pc寄存器"}},[v._v("#")]),v._v(" 程序计数器（PC寄存器）")]),v._v(" "),_("p",[_("strong",[v._v("程序计数器")]),v._v("是一块儿很小的但是运行速度最快的内存空间。")]),v._v(" "),_("p",[v._v("jvm的程序计数器的作用：")]),v._v(" "),_("ul",[_("li",[v._v("用来存储指向下一条指令的地址,也就是即将执行的指令代码,由执行引擎读取下一条代码。")])]),v._v(" "),_("h3",{attrs:{id:"虚拟机栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机栈"}},[v._v("#")]),v._v(" 虚拟机栈")]),v._v(" "),_("p",[v._v("java虚拟机栈及java栈,每个线程创建时都会创建一个虚拟机栈,其内部保存一个个的"),_("strong",[v._v("栈帧")]),v._v(",对应着一次次的方法调用,为"),_("strong",[v._v("线程私有")]),v._v("的，栈的基本为单位"),_("strong",[v._v("栈帧")]),v._v("，栈中的数据以"),_("strong",[v._v("栈帧（Stack Frame）"),_("strong",[v._v("格式存储，JVM对栈进行")]),v._v("压栈")]),v._v("和"),_("strong",[v._v("出栈")]),v._v("操作。\n栈的生命周期：")]),v._v(" "),_("ul",[_("li",[v._v("和线程一致；")])]),v._v(" "),_("p",[v._v("栈的作用：")]),v._v(" "),_("ul",[_("li",[v._v("主管java程序的运行,它保存方法的局部变量,部分结果,并参与方法的调用和返回。")])]),v._v(" "),_("p",[v._v("栈的特点：")]),v._v(" "),_("ul",[_("li",[v._v("栈是一种快速有效的分配存储方式;jvm直接对java方法执行入栈,方法结束出栈,栈不存在垃圾回收机制,但是会出现oom问题。")])]),v._v(" "),_("p",[v._v("栈帧内部主要部分：")]),v._v(" "),_("ul",[_("li",[v._v("局部变量表（Local Variables）")]),v._v(" "),_("li",[v._v("操作数栈(Operand Stack)")]),v._v(" "),_("li",[v._v("动态链接(Dynamic Linking)")]),v._v(" "),_("li",[v._v("方法返回地址")]),v._v(" "),_("li",[v._v("其他附加信息")])]),v._v(" "),_("p",[v._v("栈帧细项说明：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("局部变量表（Local Variables）")]),v._v("：局部变量表也被称之为局"),_("strong",[v._v("部变量数组")]),v._v("或"),_("strong",[v._v("本地变量表")]),v._v("；定义为一个数字数组，主要用于"),_("strong",[v._v("存储方法参数")]),v._v("和"),_("strong",[v._v("定义在方法体内的局部变量")]),v._v(",这些数据类型包括各类基本数据类型、对象引用(reference），以及returnAddress类型。由于局部变量表是建立在线程的栈上，是线程的私有数据，因此"),_("strong",[v._v("不存在数据安全问题")]),v._v("；局部变量表所需的容量大小是在编译期确定下来的，并保存在方法的Code属性的maximum local variables数据项中（字节码查看）。在方法运行期间是不会改变局部变量表的大小的。方法嵌套调用的次数由栈的大小决定。一般来说，"),_("strong",[v._v("栈越大，方法嵌套调用次数越多")]),v._v("。对一个函数而言，它的参数和局部变量越多，使得局部变量表膨胀，它的栈帧就越大，以满足方法调用所需传递的信息增大的需求。进而函数调用就会占用更多的栈空间；"),_("strong",[v._v("局部变量表中的变量只在当前方法调用中有效")]),v._v("。在方法执行时，虚拟机通过使用"),_("strong",[v._v("局部变量表完成参数值到参数变量列表的传递")]),v._v("过程。当方法调用结束后，随着方法栈帧的销毁，局部变量表也会随之销毁。")]),v._v(" "),_("li",[_("strong",[v._v("操作数栈(Operand Stack)")]),v._v("：每一个独立的栈帧中除了包含局部变量表以外，还包含一个后进先出(Last-In-First-out）的操作数栈，也可以称之为"),_("strong",[v._v("表达式栈(Expression stack")]),v._v("；操作数栈，在方法执行过程中，根据字节码指令，往栈中写入数据或提取数据，即入栈和出栈操作。操作数栈主要用于"),_("strong",[v._v("保存计算过程的中间结果")]),v._v("，同时作为"),_("strong",[v._v("计算过程中变量临时的存储空间")]),v._v("。操作数栈是JVM执行引擎的一个工作区，当一个方法开始执行的时候，一个新的栈帧也会随之被创建出来，这时候栈帧里面的操作数栈是空的。（虽然是空的，但是是有大小的）每一个操作数栈都会拥有一个明确的栈深度用于存储数值，其所需的最大深度在编译期就已经定义好了，保存在"),_("strong",[v._v("方法的Code属性")]),v._v("中，为"),_("strong",[v._v("max_stack")]),v._v("的值。操作数栈中的数据可以是任何一个Java数据类型。32位的数据占用一个栈深度，64位的数据类型占用两个栈深度。虽然操作数栈是使用数组的方式来实现的，但是操作数栈只能用入栈和出栈的操作来完成一次数据访问，而不能使用索引的方式。")]),v._v(" "),_("li",[v._v("动态链接(Dynamic Linking)：动态链接主要就是"),_("strong",[v._v("指向运行时常量池的方法引用")]),v._v("；每一个栈帧内存都包含一个指向运行时常量池中该栈帧所属方法的引用，包含这个引用的目的就是为了支持当前方法的代码能够实现动态链接(Dynamic Linking)。比如invokedynamic 指令；在Java源文件被编译到字节码文件中时，所有的变量和方法引用都作为"),_("strong",[v._v("符号引用(Symbolic Reference )"),_("strong",[v._v("保存在")]),v._v("class文件的常量池")]),v._v("里。比如，描述一个方法调用其他方法时，就是通过常量池中指向方法的符号引用来表示的，那么"),_("strong",[v._v("动态链接的作用")]),v._v("就是为了将这些"),_("strong",[v._v("符号引用")]),v._v("转换为调用方法的"),_("strong",[v._v("直接引用")]),v._v("，参考："),_("a",{attrs:{href:"http://cnblogs.com/ding-dang/p/13051143.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("栈帧的内部结构--动态链接 (Dynamic Linking)"),_("OutboundLink")],1),v._v("。")]),v._v(" "),_("li",[v._v("方法返回地址：用来"),_("strong",[v._v("存放调用该方法的PC寄存器的值")]),v._v("。方法正常退出时，调用者的PC寄存器的值作为返回地址，即调用该方法的指令的下一条指令的地址。而通过异常退出的，返回地址是要通过异常表来确定，栈帧中一般不会保存这部分信息;本质上方法的退出就是当前栈帧出栈的过程。此时，需要恢复上层方法的局部变量表、操作数栈、将返回值压入调用者栈帧的操作数栈、设置PC寄存器值等，让调用者方法继续执行下去。正常完成出口和异常完成出口的"),_("strong",[v._v("区别")]),v._v("在于："),_("strong",[v._v("通过异常完成出口退出的不会给它的上层调用者产生任何的返回值")]),v._v("。")]),v._v(" "),_("li",[v._v("其他附加信息：栈帧中还允许携带与java虚拟机实现相关的一些附加信息。")])]),v._v(" "),_("p",[v._v("方法，虚拟机栈，栈帧关系示意：\n"),_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/01.backend/011.Java/01114/7.png",alt:"方法，虚拟机栈，栈帧关系示意"}})]),v._v(" "),_("p",[v._v("jvm调用main线程调用method1，在当前线程的虚拟机栈压栈method1,method1再调用method2压栈，依次类推，方法执行完毕jvm出栈,遵循的栈数据结构的特点："),_("strong",[v._v("后进先出")])]),v._v(" "),_("h3",{attrs:{id:"本地库接口-本地方法接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本地库接口-本地方法接口"}},[v._v("#")]),v._v(" 本地库接口（本地方法接口）")]),v._v(" "),_("p",[v._v("一个Native Method是一个Java程序调用非Java程序的接囗，只要有关键字"),_("strong",[v._v("native")]),v._v("就是一个本地方法")]),v._v(" "),_("h3",{attrs:{id:"本地方法栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本地方法栈"}},[v._v("#")]),v._v(" 本地方法栈")]),v._v(" "),_("p",[v._v("与 Java "),_("strong",[v._v("虚拟机栈")]),v._v("所发挥的作用是非常相似的,为虚拟机使用到的 Native 方法服务,Navtive 方法是 Java 通过 JNI 直接调用本地 C/C++ 库，可以认为是 Native 方法相当于 C/C++ 暴露给 Java 的一个接口，Java 通过调用这个接口从而调用到 C/C++ 方法。当线程调用 Java 方法时，虚拟机会创建一个栈帧并压入 Java 虚拟机栈。然而当它"),_("strong",[v._v("调用的是 native 方法时，虚拟机会保持 Java 虚拟机栈不变，也不会向 Java 虚拟机栈中压入新的栈帧")]),v._v("，虚拟机只是简单地动态连接并直接调用指定的 native 方法")]),v._v(" "),_("h4",{attrs:{id:"堆"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#堆"}},[v._v("#")]),v._v(" 堆")]),v._v(" "),_("p",[_("strong",[v._v("一个jvm实例")]),v._v("只存在"),_("strong",[v._v("一个堆内存")]),v._v(",堆是java内存管理的"),_("strong",[v._v("核心区域")]),v._v(",堆在jvm启动的时候就创建好了,大小也确定了,是jvm管理"),_("strong",[v._v("最大的一块内存区域")]),v._v(","),_("strong",[v._v("所有线程共享java堆")]),v._v(",里面还可划分线程私有的缓冲区(Thread Local Allocation Buffer , TLAB),"),_("strong",[v._v("堆是GC的重点区域")]),v._v("\n基于"),_("strong",[v._v("GC")]),v._v("的分带理论设计，可将堆空间细分为：")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("名称")]),v._v(" "),_("th",[v._v("说明(jdk 1.8)")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("young generation")]),v._v(" "),_("td",[v._v("新生代,年轻代,新生区会分为Eden区survivor区（s0,s1）")])]),v._v(" "),_("tr",[_("td",[v._v("tenure generation")]),v._v(" "),_("td",[v._v("老年区,老年代")])]),v._v(" "),_("tr",[_("td",[v._v("meta space")]),v._v(" "),_("td",[v._v("元空间")])])])]),v._v(" "),_("p",[v._v("堆空间"),_("strong",[v._v("常用参数")]),v._v("设置:")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("命令行")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("-Xms")]),v._v(" "),_("td",[v._v("堆空间的起始内存大小,等价于-XX:InitialHeapSize")])]),v._v(" "),_("tr",[_("td",[v._v("-Xmx")]),v._v(" "),_("td",[v._v("堆空间的最大内存,等价于-XX:MaxHeapSize")])]),v._v(" "),_("tr",[_("td",[v._v("-XX")]),v._v(" "),_("td",[v._v("NewRatio=2,表示新生代1,老年代2,新生代占整个堆的1/3,配置新生代与老年代在堆结构的占比")])]),v._v(" "),_("tr",[_("td",[v._v("-Xmn")]),v._v(" "),_("td",[v._v("设置新生代最大内存大小")])]),v._v(" "),_("tr",[_("td",[v._v("-XX")]),v._v(" "),_("td",[v._v("MaxTenuringThreshold=<N> 新生代对象晋升老年代阀值,默认15")])]),v._v(" "),_("tr",[_("td",[v._v("-XX:+PrintFlagsInitial")]),v._v(" "),_("td",[v._v("查看所有参数的默认初始值")])]),v._v(" "),_("tr",[_("td",[v._v("-XX:+PrintFlagsFinal")]),v._v(" "),_("td",[v._v("查看左右参数的最终值")])]),v._v(" "),_("tr",[_("td",[v._v("-XX:SurvivorRatio")]),v._v(" "),_("td",[v._v("设置新生代中Eden与s0s1区的的占比")])]),v._v(" "),_("tr",[_("td",[v._v("-XX:MaxTenuringThreshold")]),v._v(" "),_("td",[v._v("设置新生代垃圾的最大年龄")])]),v._v(" "),_("tr",[_("td",[v._v("-XX:+PrintGCDetails")]),v._v(" "),_("td",[v._v("输出详细的GC处理日志")])]),v._v(" "),_("tr",[_("td",[v._v("-XX:+PrintGC")]),v._v(" "),_("td",[v._v("打印GC简要日志")])]),v._v(" "),_("tr",[_("td",[v._v("-XX:HandlePromotionFailure")]),v._v(" "),_("td",[v._v("是否设置空间分配担保")])]),v._v(" "),_("tr",[_("td"),v._v(" "),_("td")])])]),v._v(" "),_("p",[v._v("官网查询参数详情地址:"),_("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html"),_("OutboundLink")],1)]),v._v(" "),_("p",[v._v("通常-Xms -Xmx设置一样,减少GC后重新分割计算堆区的大小,提高性能,"),_("strong",[v._v("默认堆空间-Xms物理内存/64,-Xmx物理内存/4")]),v._v("  。")]),v._v(" "),_("p",[v._v("针对新生代的幸存者区(s0(from区),s1(to区)):复制算法交换,谁空谁就是to区，垃圾回收频繁发生在新生代,较少发生在老年代,几乎不在永久区/元空间发生。")]),v._v(" "),_("p",[v._v("堆中常发生的Gc按照类型划分为"),_("strong",[v._v("部分收集(Partial GC)和整堆收集(Full GC)")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("收集类型")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("部分收集(Partial GC)")]),v._v(" "),_("td",[_("strong",[v._v("新生代收集(Minor GC/Young GC),老年代收集(Major GC/Old GC),只有CMS GC会有单独收集老年代的行为")])])]),v._v(" "),_("tr",[_("td",[v._v("混合收集(Mixed GC)")]),v._v(" "),_("td",[v._v("收集整个新生代以及部分老年代的垃圾收集(G1 GC)")])]),v._v(" "),_("tr",[_("td",[v._v("整堆收集(Full GC)")]),v._v(" "),_("td",[v._v("收集整个java堆和方法区的垃圾收集")])])])]),v._v(" "),_("p",[_("strong",[v._v("Minor GC/Young GC的触发条件:")]),v._v(" 年轻代空间不足,触发Minor GC,具体就是指的是年轻代的Eden区满了,Survivor区满了不会触发GC,每次触发Minor GC,都会顺带处理Survivor区,复制调配from-to区。")]),v._v(" "),_("p",[_("strong",[v._v("Minor GC的特点")]),v._v(":"),_("strong",[v._v("非常频繁切速度快,会引发STW(Stop the World)")]),v._v(",暂停用户线程,等待GC结束之后用户线程恢复运行。")]),v._v(" "),_("p",[_("strong",[v._v("Major GC/Old GC的触发条件:")]),v._v(" 对象从老年代消失则产生了Major GC/Old GC,老年代空间不足,则先触发Minor GC ,空间仍然不足则触发Major GC。")]),v._v(" "),_("p",[_("strong",[v._v("Major GC的特点:比Minor GC慢十倍以上,STW时间更长。")])]),v._v(" "),_("p",[_("strong",[v._v("Full GC的触发条件:")])]),v._v(" "),_("ul",[_("li",[v._v("显示调用System.gc,系统建议执行GC,但是不会必然执行;")]),v._v(" "),_("li",[v._v("老年代空间不足;")]),v._v(" "),_("li",[v._v("方法区空间不足Minor GC晋升老年代的对象大小大于老年代的可用内存大小")]),v._v(" "),_("li",[v._v("minor gc之后进入老年代的平均大小大于老年代的可用内存")]),v._v(" "),_("li",[v._v("minor gc时，向to区复制对象内存大于to区内存，直接向老年代转移，老年代内存任然不能装下该对象")])]),v._v(" "),_("h3",{attrs:{id:"方法区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法区"}},[v._v("#")]),v._v(" 方法区")]),v._v(" "),_("p",[v._v("方法区与堆一样，是被线程共享的区域,在方法区中，"),_("strong",[v._v("存储了每个类的信息（包括类的名称、方法信息、字段信息）、静态变量、常量以及编译器编译后的代码等")]),v._v(".在jvm启动时创建,与java堆区一样它也可以在实际物理内存中不连续,并且可固定大小也可以动态拓展,方法区的大小决定了jvm可以保存的程序得类的个数,超过方法区的最大容量也会报oom，方法区是JVM规范的一个概念定义，并不是一个具体的实现，每一个JVM的实现都可以有各自的实现"),_("strong",[v._v("虚拟机规范中所有的方法区在逻辑上是属于堆的一部分,在实际中如HotSpotJVM就独立于堆空间,所以我们可以把方法区看做是一块独立于堆空间的内存空间")]),v._v("，在Java官方的"),_("strong",[v._v("HotSpot")]),v._v(" 虚拟机中，Java8版本以后，是用"),_("strong",[v._v("元空间来实现的方法区")]),v._v("；在Java8之前的版本，则是用"),_("strong",[v._v("永久代实现的方法区")]),v._v("；"),_("strong",[v._v("虚拟机规范中所有的方法区在逻辑上是属于堆的一部分,在实际中如HotSpotJVM就独立于堆空间,所以我们可以把方法区看做是一块独立于堆空间的内存空间")]),v._v("，"),_("strong",[v._v("元空间")]),v._v("是使用本地内存（Native Memory）实现的，也就是说它的内存是不在虚拟机内的，所以可以理论上物理机器还有多个内存就可以分配，而不用再受限于JVM本身分配的内存")]),v._v(" "),_("p",[v._v("方法区空间"),_("strong",[v._v("常用参数")]),v._v("设置:")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("命令")]),v._v(" "),_("th",[v._v("说明(jdk1.8)")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("-XX:MetaspaceSize")]),v._v(" "),_("td",[v._v("元空间初始分配空间大小,默认值依赖于操作系统,windows下默认21M,超过初始值会发生Full GC,建议可适当根据情况调高初始空间大小")])]),v._v(" "),_("tr",[_("td",[v._v("-XX:MaxMetaspaceSize")]),v._v(" "),_("td",[v._v("设定元空间最大可分配空间,默认值依赖于操作系统,windows下默认-1,没有限制")])])])]),v._v(" "),_("p",[_("strong",[v._v("方法区的内部结构")]),v._v(":")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("项目")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[v._v("类型信息")])]),v._v(" "),_("td",[v._v("每个加载的类型(类class,接口interface,枚举enum,注解annotation),方法区存储以下类型信息:"),_("strong",[v._v("类型的完整有效名称(全名=包名+类名),父类完整有效名,类型修饰符,类型直接接口的有序列表")])])]),v._v(" "),_("tr",[_("td",[_("strong",[v._v("域信息(field)")])]),v._v(" "),_("td",[v._v("类型的所有域的相关信息以及域的声明顺序,域信息包括:"),_("strong",[v._v("域名称,域类型,域修饰符")])])]),v._v(" "),_("tr",[_("td",[_("strong",[v._v("方法信息")])]),v._v(" "),_("td",[v._v("类型的所有方法信息,包括:"),_("strong",[v._v("方法名称,返回类型,参数数量和类型,方法修饰符,方法的字节码,操作数栈,局部变量表大小,异常表")])])]),v._v(" "),_("tr",[_("td",[_("strong",[v._v("运行时常量池(Runtime Constant Pool)")])]),v._v(" "),_("td",[v._v("class文件中的常量池通过类加载器加载后生成运行时常量池")])])])]),v._v(" "),_("p",[_("strong",[v._v("方法区的GC")]),v._v(":常量池中的废弃的常量和不再使用的类型")])])}),[],!1,null,null,null);_.default=a.exports}}]);