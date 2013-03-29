/*
 *Jlite.Collection.js 
 *Author yanqizheng
 *Javascript 常用集合对象的封装
 *History
 *2013/03/22 Add HashTable Class
 */

function HashTable(){
	this.count=0;
	this.items={};
}
 
HashTable.prototype.add=function(key,value){
	if(this.count==0)this.first=value;
	this.items[key]=value;
	this.count++;
	this.last=value;
}

HashTable.prototype.clear=function(){
	this.items={};
	this.count=0;
}

HashTable.prototype.each=function(fn){
	var index=0;
	for(var key in this.items){
		if(this.items[key]!=undefined){
			fn.call(this.items[key],this.items[key],index);
			index++;
		}
	}
}

HashTable.prototype.map=function(fn){
	var result=new Array();
	var index=0;
	for(var key in this.items){
		if(this.items[key]!=undefined){
			result.push(fn.call(this.items[key],this.items[key],index));
			index++;
		}
	}
	return result;
}


HashTable.prototype.has=function(key){
	if(this.items[key])return true;
	else return false;
}

HashTable.prototype.find=function(key){
	return this.items[key];
}

HashTable.prototype.remove=function(key){
	if(this.has(key)){
		delete this.items[key];
		this.count--;
	}
}