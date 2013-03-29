/*
 *JLite.Core.js JLite框架基本核心功能实现
 *History:
 *2013/03/28	add extend method
 */
 
var JLite=function(){
	
} 

JLite.version="0.0.1";
JLite.inherit=function(newClass,baseClass){
	
	newClass.prototype.base=baseClass;
	
	for(var item in baseClass.prototype){
		newClass.prototype[item]=baseClass.prototype[item];
	}
}

JLite.extend=function(extClass,features){
	if(features&&typeof features=="object"){
		for(var item in features){
			extClass.prototype[item]=features[item];
		}
	}
}

JLite.extendStatic=function(extClass,features){
	if(features&&typeof features=="object"){
		for(var item in features){
			extClass[item]=features[item];
		}
	}
}

//(function(g){console.log(g)})(window);
 