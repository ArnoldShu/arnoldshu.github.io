(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{353:function(_,v,t){"use strict";t.r(v);var r=t(4),a=Object(r.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"设计模式的七大原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计模式的七大原则"}},[_._v("#")]),_._v(" 设计模式的七大原则")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("原则名称")]),_._v(" "),v("th",[_._v("原则说明")]),_._v(" "),v("th",[_._v("原则之间关系")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[_._v("开闭原则（Open Closed Principle，OCP）")])]),_._v(" "),v("td",[_._v("对扩展开放，对修改关闭")]),_._v(" "),v("td",[_._v("开闭原则是编程中最基础、最重要的设计原则。")])]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("单一职责原则（Single Responsibility Principle， SRP）")])]),_._v(" "),v("td",[_._v("一个类只负责一个功能领域中的相应职责")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("里氏代换原则（Liskov Substitution Principle，LSP）")])]),_._v(" "),v("td",[_._v("任何基类可以出现的地方，子类一定可以出现")]),_._v(" "),v("td",[_._v("里氏代换原则是对开闭原则的"),v("strong",[_._v("补充")])])]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("依赖倒转原则（Dependence Inversion Principle，DIP）")])]),_._v(" "),v("td",[_._v("针对接口编程，依赖于抽象而不依赖于具体")]),_._v(" "),v("td",[_._v("依赖倒转原则是开闭原则的"),v("strong",[_._v("基础")])])]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("接口隔离原则（Interface Segregation Principle，ISP）")])]),_._v(" "),v("td",[_._v("类之间的依赖关系应该建立在最小的接口上，使用多个隔离的接口，比使用单个接口要好")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("迪米特法则(Law of Demeter，LOD)，又称最少知道原则（Principle of Least Knowledge，PLK）")])]),_._v(" "),v("td",[_._v("一个实体应当尽量少地与其他实体之间发生相互作用")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("合成/聚合复用原则（Composite/Aggregate Reuse Principle，CARP）")])]),_._v(" "),v("td",[_._v("尽量使用合成/聚合的方式，而不是使用继承。")]),_._v(" "),v("td")])])]),_._v(" "),v("h2",{attrs:{id:"开闭原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则"}},[_._v("#")]),_._v(" 开闭原则")]),_._v(" "),v("h3",{attrs:{id:"开闭原则定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则定义"}},[_._v("#")]),_._v(" 开闭原则定义")]),_._v(" "),v("p",[_._v("一个软件实体如类、模块和函数应该"),v("strong",[_._v("对扩展开放，对修改关闭")]),_._v('。模块应尽量在不修改原（是"原"，指原来的代码）代码的情况下进行扩展。')]),_._v(" "),v("h3",{attrs:{id:"开闭原则的意义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则的意义"}},[_._v("#")]),_._v(" 开闭原则的意义")]),_._v(" "),v("p",[_._v("在软件的生命周期内，因为变化、升级和维护等原因需要对软件原有代码进行修改时，可能会给旧代码中引入错误，也可能会使我们不得不对整个功能进行重构，并且需要原有代码经过重新测试。当软件需要变化时，尽量通过扩展软件实体的行为来实现变化，而不是通过修改已有的代码来实现变化。")]),_._v(" "),v("h3",{attrs:{id:"如何实现开闭原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何实现开闭原则"}},[_._v("#")]),_._v(" 如何实现开闭原则")]),_._v(" "),v("p",[_._v("实现原则"),v("strong",[_._v("关键点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("抽象化")]),_._v("（基于抽象类或者接口）。")]),_._v(" "),v("li",[v("strong",[_._v("拓展而尽量不修改")]),_._v("。")])]),_._v(" "),v("p",[v("strong",[_._v("关注点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("通过接口或者抽象类约束扩展")]),_._v("，对扩展进行边界限定，不允许出现在接口或抽象类中不存在的public方法，也就是扩展必须添加具体实现而不是改变具体的方法。")]),_._v(" "),v("li",[v("strong",[_._v("参数类型、引用对象尽量使用接口或者抽象类，而不是实现类")]),_._v("，这样就能尽量保证抽象层是稳定的。")]),_._v(" "),v("li",[_._v("一般抽象模块设计完成(例如接口的方法已经敲定)，不允许修改接口或者抽象方法的定义。")])]),_._v(" "),v("h2",{attrs:{id:"单一职责原则原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单一职责原则原则"}},[_._v("#")]),_._v(" 单一职责原则原则")]),_._v(" "),v("h3",{attrs:{id:"单一职责原则定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单一职责原则定义"}},[_._v("#")]),_._v(" 单一职责原则定义")]),_._v(" "),v("p",[_._v("一个类或则模块应该只有一个改变的理由，即一个类应该只有一个职责。")]),_._v(" "),v("h3",{attrs:{id:"单一职责原则意义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单一职责原则意义"}},[_._v("#")]),_._v(" 单一职责原则意义")]),_._v(" "),v("p",[_._v("在软件系统中，一个类(一个模块、或者一个方法)承担的职责越多，那么其被复用的可能性就会越低。一个类承(一个模块、或者一个方法)担的职责过多，就相当于将这些职责耦合在一起，当其中一个职责变化时，可能会影响其他职责的运作，因此要将这些职责进行分离，将不同的职责封装在不同的类中，即将不同的变化原因封装在不同的类中，如果多个职责总是同时发生改变则可将它们封装在同一类中。")]),_._v(" "),v("p",[_._v("不过说实话，其实有的时候很难去衡量一个类的职责，主要是很难确定职责的粒度。这一点不仅仅体现在一个类或者一个模块中，也体现在采用微服务的分布式系统中。")]),_._v(" "),v("h3",{attrs:{id:"如何实现单一职责原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何实现单一职责原则"}},[_._v("#")]),_._v(" 如何实现单一职责原则")]),_._v(" "),v("p",[_._v("实现原则"),v("strong",[_._v("关键点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("高内聚（High Cohesion）")]),_._v(" 意味着一个类应该只包含与其单一职责相关的方法和属性，确保类内部的各个部分紧密相关。")]),_._v(" "),v("li",[v("strong",[_._v("低耦合（Low Coupling）")]),_._v(" 不同的类之间应该尽可能独立，一个类的变化不应该导致其他类的变化。这有助于提高系统的灵活性和可维护性。\n"),v("strong",[_._v("关注点")]),_._v("：")]),_._v(" "),v("li",[_._v("当一个类的职责过多时，可以考虑将其拆分成多个类，每个类专注于一个职责。这有助于减少代码的复杂性，并提高代码的可测试性和可扩展性。")])]),_._v(" "),v("h2",{attrs:{id:"里氏代换原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#里氏代换原则"}},[_._v("#")]),_._v(" 里氏代换原则")]),_._v(" "),v("h3",{attrs:{id:"里氏代换原则定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#里氏代换原则定义"}},[_._v("#")]),_._v(" 里氏代换原则定义")]),_._v(" "),v("p",[_._v("子类型必须能够替换其基类型，而程序的行为不会受到影响。也可以简单理解为任何基类可以出现的地方，子类一定可以出现。")]),_._v(" "),v("h3",{attrs:{id:"里氏代换原则的意义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#里氏代换原则的意义"}},[_._v("#")]),_._v(" 里氏代换原则的意义")]),_._v(" "),v("p",[_._v("只有当衍生类可以替换掉基类，软件单位的功能不受到影响时，基类才能真正被复用，而衍生类也能够在基类的基础上增加新的行为。里氏代换原则是对"),v("strong",[_._v("开闭原则的补充")]),_._v('。实现"开闭"原则的关键步骤就是抽象化。而基类与子类的继承关系就是抽象化的具体实现，所以'),v("strong",[_._v("里氏代换原则是对实现抽象化的具体步骤的规范")]),_._v("。")]),_._v(" "),v("h3",{attrs:{id:"如何实现里氏代换原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何实现里氏代换原则"}},[_._v("#")]),_._v(" 如何实现里氏代换原则")]),_._v(" "),v("p",[_._v("实现原则"),v("strong",[_._v("关键点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("子类必须保持对基类的透明性")]),_._v("： 即使用基类的地方，应该能够无缝地替换为子类，而不引起错误。")]),_._v(" "),v("li",[v("strong",[_._v("子类应该扩展而不是覆盖基类的行为")]),_._v("： 子类应该继承并扩展基类的行为，而不是覆盖或修改它们。这样可以确保在替换子类时，基类的行为不会受到破坏。")]),_._v(" "),v("li",[v("strong",[_._v("子类不应该引入新的异常")]),_._v("： 子类的行为不应该导致基类在原有使用场景中无法处理的异常情况。")])]),_._v(" "),v("p",[v("strong",[_._v("关注点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("继承包含这样一层含义：父类中凡是已经实现好的方法，实际上是在设定规范和契约，虽然它不强制要求所有子类都必须遵循这种契约，但是如果子类对这些已经实现的方法任意修改，就会对这个继承体系造成破坏。")]),_._v(" "),v("li",[_._v("继承在给程序设计带来方便的同时，也带来了弊端。比如使用继承给程序带来侵入性，程序可移植性降低，增加对对象间的耦合性。如果一个类被其他的类所继承，则当此类需要修改时，必须考虑到所有的子类，并且父类修改后，所有涉及到子类的功能都有可能产生故障。")])]),_._v(" "),v("h2",{attrs:{id:"依赖倒转原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#依赖倒转原则"}},[_._v("#")]),_._v(" 依赖倒转原则")]),_._v(" "),v("h3",{attrs:{id:"依赖倒转原则定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#依赖倒转原则定义"}},[_._v("#")]),_._v(" 依赖倒转原则定义")]),_._v(" "),v("p",[_._v("高层模块不应该依赖于底层模块，而是应该依赖于抽象。抽象不应该依赖于细节，细节应该依赖于抽象。程序要依赖于抽象接口，不要依赖于具体实现。简单的说就是要求对抽象进行编程，不要对实现进行编程，这样就降低了客户与实现模块间的耦合。")]),_._v(" "),v("h3",{attrs:{id:"依赖倒转原则的意义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#依赖倒转原则的意义"}},[_._v("#")]),_._v(" 依赖倒转原则的意义")]),_._v(" "),v("p",[_._v("依赖倒转原则要求我们在程序代码中传递参数时或在关联关系中，尽量引用层次高的抽象层类，即使用接口和抽象类进行变量类型声明、参数类型声明、方法返回类型声明，以及数据类型的转换等，而不要用具体类来做这些事情。")]),_._v(" "),v("h3",{attrs:{id:"如何实现依赖倒转原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何实现依赖倒转原则"}},[_._v("#")]),_._v(" 如何实现依赖倒转原则")]),_._v(" "),v("p",[_._v("实现原则"),v("strong",[_._v("关键点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("高层模块定义抽象接口，低层模块实现接口： 高层模块不关心低层模块的具体实现细节，而是通过抽象接口进行通信。")]),_._v(" "),v("li",[_._v("抽象不应该依赖于细节： 抽象接口应该是稳定的，不应该因为底层模块的变化而改变。")]),_._v(" "),v("li",[_._v("细节应该依赖于抽象： 底层模块应该按照抽象定义的接口来实现，确保符合高层模块的期望。。")])]),_._v(" "),v("p",[v("strong",[_._v("关注点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("每个具体的类都应该有其接口或者基类，或者两者都具备。")]),_._v(" "),v("li",[_._v("类中的引用对象应该是接口或者基类。")]),_._v(" "),v("li",[_._v("任何具体类都不应该派生出子类。")]),_._v(" "),v("li",[_._v("尽量不要覆写基类中的方法。")]),_._v(" "),v("li",[_._v("结合里氏代换原则使用。")])]),_._v(" "),v("h2",{attrs:{id:"接口隔离原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#接口隔离原则"}},[_._v("#")]),_._v(" 接口隔离原则")]),_._v(" "),v("h3",{attrs:{id:"接口隔离原则定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#接口隔离原则定义"}},[_._v("#")]),_._v(" 接口隔离原则定义")]),_._v(" "),v("p",[_._v("一个类不应该被强迫依赖于它不使用的接口。客户端不应该依赖它不需要的接口类，类之间的依赖关系应该建立在最小的接口上。一句话，就是实现接口的类中，有多余的方法时，需要将接口进行拆分。")]),_._v(" "),v("h3",{attrs:{id:"接口隔离原则的意义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#接口隔离原则的意义"}},[_._v("#")]),_._v(" 接口隔离原则的意义")]),_._v(" "),v("p",[_._v("在软件的生命周期内，因为变化、升级和维护等原因需要对软件原有代码进行修改时，可能会给旧代码中引入错误，也可能会使我们不得不对整个功能进行重构，并且需要原有代码经过重新测试。当软件需要变化时，尽量通过扩展软件实体的行为来实现变化，而不是通过修改已有的代码来实现变化。")]),_._v(" "),v("h3",{attrs:{id:"如何实现接口隔离原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何实现接口隔离原则"}},[_._v("#")]),_._v(" 如何实现接口隔离原则")]),_._v(" "),v("p",[_._v("实现原则"),v("strong",[_._v("关键点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("建立小而专门的接口： 接口应该精简，包含类需要的最小方法集。这样可以确保每个类只需实现其自身所需的接口。")]),_._v(" "),v("li",[_._v("避免庞大臃肿的接口： 不应该设计一个大而全的接口，其中包含许多方法，因为这样会导致实现这个接口的类需要实现许多无用的方法。")]),_._v(" "),v("li",[_._v("接口应该具有高内聚性： 接口中的方法应该紧密相关，而不是杂乱无章地聚集在一起。")])]),_._v(" "),v("p",[v("strong",[_._v("关注点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("使用接口隔离原则前首先需要满足单一职责原则。")]),_._v(" "),v("li",[_._v("接口需要高内聚，也就是提高接口、类、模块的处理能力，少对外发布public的方法。")]),_._v(" "),v("li",[_._v("定制服务，只提供访问者需要的方法。")]),_._v(" "),v("li",[_._v('接口设计是有限度的，接口的设计粒度越小，系统越灵活，但是值得注意不能过小，否则变成"字节码编程"。')])]),_._v(" "),v("h2",{attrs:{id:"迪米特法则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迪米特法则"}},[_._v("#")]),_._v(" 迪米特法则")]),_._v(" "),v("h3",{attrs:{id:"迪米特法则定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迪米特法则定义"}},[_._v("#")]),_._v(" 迪米特法则定义")]),_._v(" "),v("p",[_._v("一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立，降低类之间的耦合。由于每个类尽量减少对其他类的依赖，因此，很容易使得系统的功能模块独立，相互之间不存在（或很少有）依赖关系。迪米特法则则不希望类之间建立直接的关系。如果真的有需要建立联系，也希望能通过它的友元类（中间类或者跳转类）来转达。")]),_._v(" "),v("h3",{attrs:{id:"迪米特法则的意义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迪米特法则的意义"}},[_._v("#")]),_._v(" 迪米特法则的意义")]),_._v(" "),v("p",[_._v("迪米特法则的核心观念就是类间解耦，也就降低类之间的耦合，只有类处于弱耦合状态，类的复用率才会提高。所谓降低类间耦合，实际上就是尽量减少对象之间的交互，如果两个对象之间不必彼此直接通信，那么这两个对象就不应当发生任何直接的相互作用，如果其中的一个对象需要调用另一个对象的某一个方法的话，可以通过第三者转发这个调用。简言之，就是通过引入一个合理的第三者来降低现有对象之间的耦合度。但是这样会引发一个问题，有可能产生大量的中间类或者跳转类，导致系统的复杂性提高，可维护性降低。")]),_._v(" "),v("h3",{attrs:{id:"如何实现迪米特法则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何实现迪米特法则"}},[_._v("#")]),_._v(" 如何实现迪米特法则")]),_._v(" "),v("p",[_._v("实现原则"),v("strong",[_._v("关键点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("一个对象应该对其他对象有最少的了解。")]),_._v(" "),v("li",[_._v("不与陌生对象发生直接的相互作用，而是通过中介对象进行间接交流。")]),_._v(" "),v("li",[_._v("只与朋友交流，不与陌生人交流。")])]),_._v(" "),v("p",[v("strong",[_._v("关注点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("减少对其他类的依赖： 一个类不应该直接依赖于其他不相关的类，而是通过引入中介类或者委托给其他类来实现功能。")]),_._v(" "),v("li",[_._v("只与朋友交流： 只与直接的朋友发生交互，不与陌生类直接通信。这有助于减少对系统的依赖，提高系统的灵活性。")])]),_._v(" "),v("h2",{attrs:{id:"合成复用原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#合成复用原则"}},[_._v("#")]),_._v(" 合成复用原则")]),_._v(" "),v("h3",{attrs:{id:"合成复用原则定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#合成复用原则定义"}},[_._v("#")]),_._v(" 合成复用原则定义")]),_._v(" "),v("p",[_._v("尽量使用对象合成/聚合，而不是通过继承来达到代码的复用。")]),_._v(" "),v("h3",{attrs:{id:"合成复用原则的意义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#合成复用原则的意义"}},[_._v("#")]),_._v(" 合成复用原则的意义")]),_._v(" "),v("p",[_._v("合成/聚合复用原则就是在一个新的对象里面使用一些已有的对象，使之成为新对象的一部分；新的对象通过向内部持有的这些对象的委派达到复用已有功能的目的，而不是通过继承来获得已有的功能。"),v("br"),_._v(" "),v("strong",[_._v("聚合(Aggregate)的概念:")]),v("br"),_._v("\n聚合用来表示“"),v("strong",[_._v("拥有”关系或者整体与部分的关系")]),_._v("： 代表部分的对象有可能会被多个代表整体的对象所共享，而且不一定会随着某个代表整体的对象被销毁或破坏而被销毁或破坏，部分的生命周期可以超越整体。例如，班级和学生，当班级删除后，学生还能存在，学生可以被培训机构引用。"),v("br"),_._v(" "),v("strong",[_._v("合成(Composite)的概念:")]),v("br"),_._v("\n合成用来表示一种强得多的“拥有”关系： 在一个合成关系里，部分和整体的生命周期是一样的。一个合成的新对象完全拥有对其组成部分的支配权，包括它们的创建和湮灭等。使用程序语言的术语来说，合成的新对象对组成部分的内存分配、内存释放有绝对的责任。例如，一个人由头、四肢和各种器官组成，人与这些具有相同的生命周期，人死了，这些器官也就挂了。房子和房间的关系，当房子没了，房间也不可能独立存在。")]),_._v(" "),v("h3",{attrs:{id:"如何实现合成复用原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何实现合成复用原则"}},[_._v("#")]),_._v(" 如何实现合成复用原则")]),_._v(" "),v("p",[_._v("实现原则"),v("strong",[_._v("关键点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("通过组合建立对象关系： 将一个类的实例作为另一个类的成员变量，通过组合建立对象之间的关系，而不是通过继承。")]),_._v(" "),v("li",[_._v("避免使用过多继承： 避免使用多层次的继承，因为过多的继承关系可能导致系统复杂性的增加，而且容易引发设计上的问题。")]),_._v(" "),v("li",[_._v("通过接口进行复用： 通过定义接口，类可以通过实现接口来实现复用，而不是通过继承来获得父类的行为。")])]),_._v(" "),v("p",[v("strong",[_._v("关注点")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("找出应用中可能需要变化之处，把它们独立出来，不要和那些不需要变化的代码混在一起。")]),_._v(" "),v("li",[_._v("针对接口编程，而不是针对实现编程。")]),_._v(" "),v("li",[_._v("为了交互对象之间的松耦合设计而努力。")])]),_._v(" "),v("p",[_._v("参考链接:"),v("br"),_._v(" "),v("a",{attrs:{href:"https://www.runoob.com/design-pattern/design-pattern-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("菜鸟教程|设计模式"),v("OutboundLink")],1),v("br"),_._v(" "),v("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1650116",target:"_blank",rel:"noopener noreferrer"}},[_._v("设计模式概念和七大原则"),v("OutboundLink")],1),v("br"),_._v(" "),v("a",{attrs:{href:"https://it-blog-cn.com/blogs/design_mode/seven_principle.html#%E4%B8%83%E3%80%81%E5%90%88%E6%88%90%E5%A4%8D%E7%94%A8%E5%8E%9F%E5%88%99",target:"_blank",rel:"noopener noreferrer"}},[_._v("设计模式--七大原则"),v("OutboundLink")],1),v("br")])])}),[],!1,null,null,null);v.default=a.exports}}]);