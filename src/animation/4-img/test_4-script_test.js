(function () {
  (function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
      {name:"test 4_script test_atlas_", frames: [[0,1002,1000,1000],[1002,0,1000,1000],[0,0,1000,1000]]}
    ];



    lib.updateListCache = function (cacheList) {
      for(var i = 0; i < cacheList.length; i++) {
        if(cacheList[i].cacheCanvas)
          cacheList[i].updateCache();
      }
    };

    lib.addElementsToCache = function (textInst, cacheList) {
      var cur = textInst;
      while(cur != null && cur != exportRoot) {
        if(cacheList.indexOf(cur) != -1)
          break;
        cur = cur.parent;
      }
      if(cur != exportRoot) {
        var cur2 = textInst;
        var index = cacheList.indexOf(cur);
        while(cur2 != null && cur2 != cur) {
          cacheList.splice(index, 0, cur2);
          cur2 = cur2.parent;
          index++;
        }
      }
      else {
        cur = textInst;
        while(cur != null && cur != exportRoot) {
          cacheList.push(cur);
          cur = cur.parent;
        }
      }
    };

    lib.gfontAvailable = function(family, totalGoogleCount) {
      lib.properties.webfonts[family] = true;
      var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
      for(var f = 0; f < txtInst.length; ++f)
        lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

      loadedGoogleCount++;
      if(loadedGoogleCount == totalGoogleCount) {
        lib.updateListCache(gFontsUpdateCacheList);
      }
    };

    lib.tfontAvailable = function(family, totalTypekitCount) {
      lib.properties.webfonts[family] = true;
      var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
      for(var f = 0; f < txtInst.length; ++f)
        lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

      loadedTypekitCount++;
      if(loadedTypekitCount == totalTypekitCount) {
        lib.updateListCache(tFontsUpdateCacheList);
      }
    };
// symbols:



    (lib.gigl = function() {
      this.spriteSheet = ss["test 4_script test_atlas_"];
      this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.hello = function() {
      this.spriteSheet = ss["test 4_script test_atlas_"];
      this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.m = function() {
      this.spriteSheet = ss["test 4_script test_atlas_"];
      this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.Анимация4 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.hello();
      this.instance.parent = this;
      this.instance.setTransform(-500,-500);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-500,-500,1000,1000);


    (lib.Анимация3 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.m();
      this.instance.parent = this;
      this.instance.setTransform(-500,-500);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-500,-500,1000,1000);


    (lib.Анимация2 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.gigl();
      this.instance.parent = this;
      this.instance.setTransform(-500,-500);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-500,-500,1000,1000);


    (lib.Анимация1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#F53E4F").s().p("AgwAxQgUgVAAgcQAAgbAUgVQAVgUAbAAQAdAAATAUQAVAVAAAbQAAAcgVAVQgTAUgdAAQgbAAgVgUg");

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-6.9,-6.9,13.8,13.8);


// stage content:
    (lib.test4scripttest = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // timeline functions:
      this.frame_76 = function() {
        this.gotoAndPlay(32);
      }

      // actions tween:
      this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(1));

      // Слой 4
      this.instance = new lib.Анимация1("synched",0);
      this.instance.parent = this;
      this.instance.setTransform(387.3,359.2,0.29,0.29);
      this.instance._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.57,scaleY:1.57,x:387.5,y:359.4},3).wait(1).to({regX:0,regY:0,scaleX:1.16,scaleY:1.16,x:387.2,y:359.2},0).wait(1).to({scaleX:1,scaleY:1,x:387.3},0).wait(62));

      // girl
      this.instance_1 = new lib.Анимация2("synched",0);
      this.instance_1.parent = this;
      this.instance_1.setTransform(388,312,0.223,0.223,0,0,0,37.9,-37.9);
      this.instance_1._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regX:38.1,scaleX:1.23,scaleY:1.23,x:388.2,y:312.1},4).to({regX:38,regY:-38,scaleX:1,scaleY:1,x:388,y:312},2).wait(67));

      // m
      this.instance_2 = new lib.Анимация3("synched",0);
      this.instance_2.parent = this;
      this.instance_2.setTransform(374.1,297.9,0.326,0.326,-12.5,0,0,24.1,-52.1);
      this.instance_2._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({regY:-51.9,scaleX:1.16,scaleY:1.16,rotation:4.7,y:298},4).to({regX:24,regY:-52.1,scaleX:1,scaleY:1,rotation:0,x:374,y:297.9},3).wait(53));

      // hello
      this.instance_3 = new lib.Анимация4("synched",0);
      this.instance_3.parent = this;
      this.instance_3.setTransform(414.2,304,0.576,0.576,15,0,0,108.2,-66);
      this.instance_3._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({scaleX:1.13,scaleY:1.13,rotation:-7.2,x:458.2,y:284},4).to({regX:108.1,scaleX:1,scaleY:1,rotation:0,x:458.1},3).wait(1).to({regX:0,regY:0,x:350,y:349.9},0).wait(1).to({rotation:-0.1,y:349.8},0).wait(1).to({x:350.1,y:349.7},0).wait(1).to({rotation:-0.2,y:349.6},0).wait(1).to({y:349.4},0).wait(1).to({rotation:-0.3,x:350.2,y:349.3},0).wait(1).to({y:349.2},0).wait(1).to({rotation:-0.4,y:349.1},0).wait(1).to({y:349},0).wait(1).to({rotation:-0.5,x:350.3,y:348.8},0).wait(1).to({regX:108.1,regY:-66,x:457.7,y:281.6},0).wait(1).to({regX:0,regY:0,x:350.2,y:348.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:108.1,regY:-66,x:457.7,y:281.6},0).wait(1).to({regX:0,regY:0,x:350.2,y:348.8},0).wait(1).to({rotation:-0.4,x:350.1,y:349},0).wait(1).to({y:349.1},0).wait(1).to({rotation:-0.3,x:350,y:349.3},0).wait(1).to({rotation:-0.2,x:349.9,y:349.5},0).wait(1).to({y:349.6},0).wait(1).to({rotation:-0.1,x:349.8,y:349.8},0).wait(1).to({x:349.7,y:350},0).wait(1).to({rotation:0,y:350.1},0).wait(1).to({rotation:0.1,x:349.6,y:350.3},0).wait(1).to({y:350.5},0).wait(1).to({rotation:0.2,x:349.5,y:350.6},0).wait(1).to({rotation:0.3,x:349.4,y:350.8},0).wait(1).to({y:351},0).wait(1).to({rotation:0.4,x:349.3,y:351.1},0).wait(1).to({rotation:0.5,x:349.2,y:351.3},0).wait(1).to({y:351.5},0).wait(1).to({rotation:0.6,x:349.1,y:351.7},0).wait(1).to({rotation:0.7,x:349,y:351.8},0).wait(1).to({y:352},0).wait(1).to({regX:108.1,regY:-66,rotation:0.8,x:457.9,y:287.7},0).wait(1).to({regX:0,regY:0,rotation:0.7,x:349,y:352},0).wait(1).to({rotation:0.6,x:349.1,y:351.7},0).wait(1).to({rotation:0.5,x:349.2,y:351.5},0).wait(1).to({x:349.4,y:351.2},0).wait(1).to({rotation:0.4,x:349.5,y:351},0).wait(1).to({rotation:0.3,x:349.6,y:350.7},0).wait(1).to({rotation:0.2,x:349.7,y:350.5},0).wait(1).to({rotation:0.1,x:349.8,y:350.2},0).wait(1).to({regX:108.1,regY:-66,rotation:0,x:458.1,y:284},0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
// library properties:
    lib.properties = {
      width: 700,
      height: 500,
      fps: 24,
      color: "#FFFFFF",
      opacity: 0.00,
      webfonts: {},
      manifest: [
        {src:"../../img/test_4_script test_atlas_.png", id:"test 4_script test_atlas_"}
      ],
      preloads: []
    };




  })(lib = lib||{}, images = images||{}, createjs = window.createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
  var lib, images, createjs, ss, AdobeAn;
  var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
  function init() {
    canvas = document.getElementById("canvas3");
    anim_container = document.getElementById("animation_container3");
    dom_overlay_container = document.getElementById("dom_overlay_container3");
    images = images||{};
    ss = ss||{};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
  }
  function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
  }
  function handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.test4scripttest();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
      var lastW, lastH, lastS=1;
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      function resizeCanvas() {
        var w = lib.properties.width, h = lib.properties.height;
        var iw = window.innerWidth, ih=window.innerHeight;
        var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
        if(isResp) {
          if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
            sRatio = lastS;
          }
          else if(!isScale) {
            if(iw<w || ih<h)
              sRatio = Math.min(xRatio, yRatio);
          }
          else if(scaleType==1) {
            sRatio = Math.min(xRatio, yRatio);
          }
          else if(scaleType==2) {
            sRatio = Math.max(xRatio, yRatio);
          }
        }
        canvas.width = w*pRatio*sRatio;
        canvas.height = h*pRatio*sRatio;
        canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
        canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
        stage.scaleX = pRatio*sRatio;
        stage.scaleY = pRatio*sRatio;
        lastW = iw; lastH = ih; lastS = sRatio;
      }
    }
    makeResponsive(true,'both',false,1);
    fnStartAnimation();
  }
  window.addEventListener("load", init);
})();
