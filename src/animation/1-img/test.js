(function () {
  (function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
      {name:"test_atlas_", frames: [[0,0,1908,1008],[0,1010,1908,1008],[0,2020,1908,1008],[0,3030,1908,1008]]}
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



    (lib.girl = function() {
      this.spriteSheet = ss["test_atlas_"];
      this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.icon1_1 = function() {
      this.spriteSheet = ss["test_atlas_"];
      this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.icon2_2 = function() {
      this.spriteSheet = ss["test_atlas_"];
      this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.man = function() {
      this.spriteSheet = ss["test_atlas_"];
      this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
// helper functions:

    function mc_symbol_clone() {
      var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
      clone.gotoAndStop(this.currentFrame);
      clone.paused = this.paused;
      clone.framerate = this.framerate;
      return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
      var prototype = cjs.extend(symbol, cjs.MovieClip);
      prototype.clone = mc_symbol_clone;
      prototype.nominalBounds = nominalBounds;
      prototype.frameBounds = frameBounds;
      return prototype;
    }


    (lib.Символ5 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.icon1_1();
      this.instance.parent = this;
      this.instance.setTransform(-38,47);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-38,47,1908,1008), null);


    (lib.Символ4 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.icon2_2();
      this.instance.parent = this;
      this.instance.setTransform(-30,48);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-30,48,1908,1008), null);


    (lib.Символ3 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.man();
      this.instance.parent = this;
      this.instance.setTransform(23,27);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(23,27,1908,1008), null);


    (lib.Символ2 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.girl();
      this.instance.parent = this;
      this.instance.setTransform(-6,6,0.145,0.145);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-6,6,275.8,145.7), null);


// stage content:
    (lib.test = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // timeline functions:
      this.frame_28 = function() {
        this.stop();
      }

      // actions tween:
      this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

      // Слой 6
      this.instance = new lib.Символ5();
      this.instance.parent = this;
      this.instance.setTransform(389.2,811.9,0.154,0.154,0,0,0,387.9,811.7);
      this.instance._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({regX:916,regY:551,scaleX:0.47,scaleY:0.47,x:639,y:688.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:807.6,y:605.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:976.3,y:522.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:946.8,y:536.7},0).wait(1).to({scaleX:1,scaleY:1,x:917.2,y:551.2},0).wait(2).to({x:917.3},0).wait(3));

      // Слой 4
      this.instance_1 = new lib.Символ4();
      this.instance_1.parent = this;
      this.instance_1.setTransform(545.2,821.9,0.095,0.095,0,0,0,543.5,821.1);
      this.instance_1._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).wait(1).to({regX:924,regY:552,scaleX:0.43,scaleY:0.43,x:708.5,y:706.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:835.8,y:616.4},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:963,y:526.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:944.4,y:539.7},0).wait(1).to({scaleX:1,scaleY:1,x:925.6,y:552.9},0).wait(7));

      // Слой 1
      this.instance_2 = new lib.Символ2();
      this.instance_2.parent = this;
      this.instance_2.setTransform(347.1,503.8,0.999,0.999,-24.6,0,0,49.8,72.8);
      this.instance_2._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1).to({regX:131.9,regY:78.8,scaleX:2.18,scaleY:2.18,rotation:-19.8,x:519.8,y:455.6},0).wait(1).to({scaleX:3.37,scaleY:3.37,rotation:-14.8,x:618.6,y:452.7},0).wait(1).to({scaleX:4.55,scaleY:4.55,rotation:-9.9,x:718.6,y:466.8},0).wait(1).to({scaleX:5.74,scaleY:5.74,rotation:-4.9,x:817.4,y:497.8},0).wait(1).to({scaleX:6.92,scaleY:6.92,rotation:0,x:912.9,y:545.7},0).wait(1).to({scaleX:7.26,scaleY:7.26,x:940.6,y:547.7},0).wait(1).to({scaleX:7.59,scaleY:7.59,x:968.2,y:549.8},0).wait(1).to({scaleX:7.25,scaleY:7.25,x:940.2,y:547.7},0).wait(1).to({scaleX:6.91,scaleY:6.91,x:912.1,y:545.6},0).wait(16));

      // Слой 3
      this.instance_3 = new lib.Символ3();
      this.instance_3.parent = this;
      this.instance_3.setTransform(633.1,566,0.33,0.33,18.8,0,0,629.1,565);
      this.instance_3._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).wait(1).to({regX:977,regY:531,scaleX:0.41,scaleY:0.41,rotation:16.9,x:773.6,y:594},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:14.8,x:802,y:593.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:12.6,x:830.3,y:590.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:10.5,x:858.7,y:585.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:8.4,x:887,y:578.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:6.3,x:915,y:569.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:4.2,x:942.6,y:558.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:2.1,x:969.8,y:545.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:0,x:996.5,y:530.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-0.1,x:988.7,y:530.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.2,x:980.8,y:531},0).wait(12));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
// library properties:
    lib.properties = {
      width: 1008,
      height: 1008,
      fps: 24,
      color: "#FFFFFF",
      opacity: 0.00,
      webfonts: {},
      manifest: [
        {src:"../../img/test_atlas_.png", id:"test_atlas_"}
      ],
      preloads: []
    };


  })(lib = lib||{}, images = images||{}, createjs = window.createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
  var lib, images, createjs, ss, AdobeAn;
  var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
  function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
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
    exportRoot = new lib.test();
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
