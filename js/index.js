/* define instance data */

var Mothership = new Rockets();

var i = 0;
var len;
/* define all container types */
var containerNames = [
    'search',
    'tools',
    'fonts',
    'inspiring',
    'entertaining',
    'community',
    'manual',
    'store',
    'news',
    'article'
];
if((containerNames.length!==0) && (containerNames instanceof Array)){
    Mothership.addAllContainers(containerNames);
}

/* add mutiple rockets */
// must be those
var rockets = [
    Rockets.createRocket('google','https://www.google.com'),
    Rockets.createRocket('bing','https://www.bing.com'),
    Rockets.createRocket('baidu','https://www.baidu.com')
];
Mothership.addAllRocketsWithType('search',rockets);

// // add container only
// Mothership.addRocketsContainer('to be continued');
rockets = [
    Rockets.createRocket('Regex101','https://www.regex101.com/'),
    Rockets.createRocket('Color','http://www.ficml.org/jemimap/style/color/wheel.html'),
    Rockets.createRocket('Pomodoro','https://aresun.github.io/Pomodoro/'),
    Rockets.createRocket('Translator','https://cn.bing.com/translator')
];
Mothership.addAllRocketsWithType('tools',rockets);

rockets = [
    Rockets.createRocket('google fonts','https://fonts.google.com/')
];
Mothership.addAllRocketsWithType('fonts',rockets);

rockets = [
    Rockets.createRocket('Huaban','https://www.huaban.com/'),
    Rockets.createRocket('Art Station','https://www.artstation.com/')
];
Mothership.addAllRocketsWithType('inspiring',rockets);

rockets = [
    Rockets.createRocket('haibao','http://www.haibao.com/'),
    Rockets.createRocket('instructables','https://www.instructables.com/'),
    Rockets.createRocket('NatGeo','https://www.nationalgeographic.com/'),
    Rockets.createRocket('wallpapper','http://www.wallpaperbetter.com/nature-and-landscape-wallpaper/1643'),
    Rockets.createRocket('syfy','https://www.syfy.com/')
];
Mothership.addAllRocketsWithType('entertaining',rockets);

rockets = [
    Rockets.createRocket('Github@Aresun','https://github.com/aresun?tab=repositories')
];
Mothership.addAllRocketsWithType('community',rockets);

rockets = [
    Rockets.createRocket('MDN','https://developer.mozilla.org/zh-CN/'),
    Rockets.createRocket('devdocs','https://devdocs.io/'),
    Rockets.createRocket('w3c cn','http://www.w3school.com.cn/'),
    Rockets.createRocket('w3c','https://www.w3schools.com/'),
    Rockets.createRocket('webpack','https://webpack.docschina.org/'),
    Rockets.createRocket('material-ui','https://material-ui.com/'),
    Rockets.createRocket('github markdown','https://guides.github.com/features/mastering-markdown/'),
    Rockets.createRocket('github emoji','https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md')
    
];
Mothership.addAllRocketsWithType('manual',rockets);

rockets = [
    Rockets.createRocket('taobao','https://www.taobao.com/'),
    Rockets.createRocket('amazon','https://www.amazon.cn/')
];
Mothership.addAllRocketsWithType('store',rockets);

rockets = [
    Rockets.createRocket('verycd','http://www.verycd.com/')
];
Mothership.addAllRocketsWithType('news',rockets);

rockets = [
    Rockets.createRocket('react','http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html'),
];
Mothership.addAllRocketsWithType('article',rockets);

// initial
function showAllcontainers(){
    var platformDom = document.getElementById('platform');
    var i = 0;
    var len = Mothership.platform.length;
    var containerDom,text;
    for(;i !== len;i++){
        containerDom = document.createElement('span');
        text = document.createTextNode(Mothership.platform[i].type);
        containerDom.appendChild(text);
        containerDom.setAttribute('class','container');
        platformDom.appendChild(containerDom);        
    }
}
showAllcontainers();

// event
function handleClickContainer(e){
    var target = e.target;
    var className;
    if(target.nodeName.toLowerCase()==='span'){
        className = target.getAttribute('class');
        l('click span: '+className);

        if(className.indexOf('selected') === -1){ // no .selected
            index = className.indexOf('selected');
            clickEmptyArea();
            target.setAttribute('class','container selected');
            showRockets(target.textContent);
        }
        e.stopPropagation(); // prevent body.click
    }
}
function clickEmptyArea(e){
    l('remove selected');
    var containerTitleList = document.getElementById('platform').children;
    var i = 0;
    var len = containerTitleList.length;
    for(;i !== len;i++){
        containerTitleList[i].setAttribute('class','container');
    }
    l('remove rockets');
    document.getElementById('rocketsList').innerHTML = '';
}
function showRockets(containerType){
    var i =0;
    var len = Mothership.platform.length;
    var targetRockets;
    var readyFragments = document.createDocumentFragment();
    var aDom;
    for(;i!==len;i++){
        if(Mothership.platform[i].type === containerType){
            targetRockets = Mothership.platform[i].rockets;
            break;
        }
    }
    if(targetRockets){
        i = 0;
        len = targetRockets.length;
        for(;i !== len;i++){
            aDom = document.createElement('a');
            aDom.textContent = targetRockets[i].name;
            aDom.href = targetRockets[i].address;
            aDom.target = '_blank';
            readyFragments.appendChild(aDom);
        }
        document.getElementById('rocketsList').appendChild(readyFragments);
    }
}

document.body.addEventListener('click',clickEmptyArea,false);
document.getElementById('platform').addEventListener('click',handleClickContainer,false);
// l(Mothership);