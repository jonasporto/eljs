function Element(){}


Element.prototype.div = function(inner,attrs){
    div = document.createElement('div');
    if(typeof inner !== 'object'){
        div.innerHTML = inner;
    }else{
        div.appendChild(inner);
    }
    Object.keys(attrs).forEach(function(key){
	    div.setAttribute(key,attrs[key]);
	 });
    return div;
}

Element.prototype.h1 = function(inner,attrs){
    h1 = document.createElement('h1');
	if(typeof inner !== 'object'){
        h1.innerHTML = inner; 
	}else{
        h1.appendChild(inner);
    }
    Object.keys(attrs).forEach(function(key){
	    h1.setAttribute(key,attrs[key]);
	});
    return h1;
}


Element.prototype.br = function(){
    this.br =  document.createElement('br');
    
}

Element.prototype.hr = function(){
    return document.createElement('hr');
}

Element.prototype.fieldset = function(){
    return document.createElement('fieldset');
    
}

Element.prototype.legend = function(){
    return document.createElement('legend');
    
}



// usage c = new Element();
//c.div('some text',{'class':'header'});

