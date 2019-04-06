function Rockets(){
    this.platform = [];
    /*
    [
        {
            type: 'tools',
            rockets: [rocket,rocket]
        },
        {
            type: 'search',
            rockets: [rocket,rocket]
        }
    ]
    */
}
/**
 * @description create empty cantainer
 * @param {string} rocketType 
 */
Rockets.createRocketsContainer = function(rocketType){
    return {
        type: rocketType,
        rockets:[]
    };
}
/**
 * @param {string} name 
 * @param {string} address 
 */
Rockets.createRocket = function(name,address){
    return {
        name: name,
        address: address
    };
}
Rockets.createContainerName = function(name){
    if(typeWrongOrEmpty(name,'string')){
        return undefined;
    }
    return name; // non-empty string
}
Rockets.prototype.addRocketsContainer = function(rocketType){
    /* check type */
    var t = Rockets.createContainerName(rocketType);
    /* check existence */
    var i = 0;
    var len = this.platform.length;
    for(;i !== len;i++){
        if(t && this.platform[i].type === t){
            l('rockets container exists already!');
            return;
        }
    }

    /* add if not find */
    this.platform.push(Rockets.createRocketsContainer(t));
    l('added rockets container: '+t);
};
/**
 * @param {string} type
 * @param {object} object /(rocket object)+/g
 */
Rockets.prototype.addRocketsWithType = function(type,rocket){
    /* check type */
    var t = Rockets.createContainerName(type);
    /* find the type */
    var i = 0;
    var len = this.platform.length;
    for(;i !== len;i++){
        if(t && this.platform[i].type === t){
            /* insert rocket into the target(container) type */
            this.platform[i].rockets.push(rocket);
            return;
        }
    }
    l('no this type, add container type first');
}
/**
 * @param {array} containerArray 
 */
Rockets.prototype.addAllContainers = function(containerArray){
    var i = 0;
    var len = containerArray.length;
    for(;i !== len;i++){
        this.addRocketsContainer(containerArray[i]);
    }
};
Rockets.prototype.addAllRocketsWithType = function(type,allRockets){
    var i = 0;
    var len;
    
    len =  allRockets.length;

    for(;i !== len;i++){
        this.addRocketsWithType(type,allRockets[i]);
    }
}