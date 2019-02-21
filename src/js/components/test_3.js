function secondAnimation() {
  (function() {
    (function(lib, img, cjs, ss, an) {

      var p; // shortcut to reference prototypes
      lib.webFontTxtInst = {};
      var loadedTypekitCount = 0;
      var loadedGoogleCount = 0;
      var gFontsUpdateCacheList = [];
      var tFontsUpdateCacheList = [];
      lib.ssMetadata = [
        {name:'test_3_atlas_', frames: [[0,0,1908,902],[0,904,1908,902],[0,1808,1908,902]]}
      ];


      lib.updateListCache = function(cacheList) {
        for(var i = 0; i < cacheList.length; i++) {
          if(cacheList[i].cacheCanvas)
            cacheList[i].updateCache();
        }
      };

      lib.addElementsToCache = function(textInst, cacheList) {
        var cur = textInst;
        while(cur !== null && cur !== exportRoot) {
          if(cacheList.indexOf(cur) !== -1)
            break;
          cur = cur.parent;
        }
        if(cur !== exportRoot) {
          var cur2 = textInst;
          var index = cacheList.indexOf(cur);
          while(cur2 !== null && cur2 !== cur) {
            cacheList.splice(index, 0, cur2);
            cur2 = cur2.parent;
            index++;
          }
        }
        else {
          cur = textInst;
          while(cur !== null && cur !== exportRoot) {
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
        if(loadedGoogleCount === totalGoogleCount) {
          lib.updateListCache(gFontsUpdateCacheList);
        }
      };

      lib.tfontAvailable = function(family, totalTypekitCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for(var f = 0; f < txtInst.length; ++f)
          lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

        loadedTypekitCount++;
        if(loadedTypekitCount === totalTypekitCount) {
          lib.updateListCache(tFontsUpdateCacheList);
        }
      };
      // symbols:



      (lib.g_d = function() {
        this.spriteSheet = ss['test_3_atlas_'];
        this.gotoAndStop(0);
      }).prototype = p = new cjs.Sprite();



      (lib.g_m = function() {
        this.spriteSheet = ss['test_3_atlas_'];
        this.gotoAndStop(1);
      }).prototype = p = new cjs.Sprite();



      (lib.g_u = function() {
        this.spriteSheet = ss['test_3_atlas_'];
        this.gotoAndStop(2);
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


      (lib.Символ3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.g_u();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      }).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,1908,902), null);


      (lib.Символ2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.g_m();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      }).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,1908,902), null);


      (lib.Символ1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.g_d();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

      }).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,1908,902), null);


      // stage content:
      (lib.test3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // up
        this.instance = new lib.Символ3();
        this.instance.parent = this;
        this.instance.setTransform(246,451,1,1,0,0,0,954,451);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:450.7},0).wait(1).to({y:450.3},0).wait(1).to({y:449.9},0).wait(1).to({y:449.6},0).wait(1).to({y:449.2},0).wait(1).to({y:448.8},0).wait(1).to({y:448.5},0).wait(1).to({y:448.1},0).wait(1).to({y:447.7},0).wait(1).to({y:447.3},0).wait(1).to({y:447},0).wait(1).to({y:446.6},0).wait(1).to({y:446.2},0).wait(1).to({y:445.9},0).wait(1).to({y:445.5},0).wait(1).to({y:445.1},0).wait(1).to({y:444.8},0).wait(1).to({y:444.4},0).wait(1).to({y:444},0).wait(1).to({y:443.6},0).wait(1).to({y:443.3},0).wait(1).to({y:442.9},0).wait(1).to({y:442.5},0).wait(1).to({y:442.2},0).wait(1).to({y:441.8},0).wait(1).to({y:441.4},0).wait(1).to({y:441},0).wait(1).to({y:440.7},0).wait(1).to({y:440.3},0).wait(1).to({y:439.9},0).wait(1).to({y:439.6},0).wait(1).to({y:439.2},0).wait(1).to({y:438.8},0).wait(1).to({y:438.5},0).wait(1).to({y:438.1},0).wait(1).to({y:437.7},0).wait(1).to({y:437.3},0).wait(1).to({y:437},0).wait(1).to({y:436.6},0).wait(1).to({y:436.2},0).wait(1).to({y:435.9},0).wait(1).to({y:435.5},0).wait(1).to({y:435.1},0).wait(1).to({y:434.8},0).wait(1).to({y:434.4},0).wait(1).to({y:434},0).wait(1).to({y:433.6},0).wait(1).to({y:433.3},0).wait(1).to({y:432.9},0).wait(1).to({y:432.5},0).wait(1).to({y:432.2},0).wait(1).to({y:431.8},0).wait(1).to({y:431.4},0).wait(1).to({y:431},0).wait(1).to({y:431.4},0).wait(1).to({y:431.7},0).wait(1).to({y:432},0).wait(1).to({y:432.4},0).wait(1).to({y:432.7},0).wait(1).to({y:433},0).wait(1).to({y:433.3},0).wait(1).to({y:433.7},0).wait(1).to({y:434},0).wait(1).to({y:434.3},0).wait(1).to({y:434.7},0).wait(1).to({y:435},0).wait(1).to({y:435.3},0).wait(1).to({y:435.6},0).wait(1).to({y:436},0).wait(1).to({y:436.3},0).wait(1).to({y:436.6},0).wait(1).to({y:437},0).wait(1).to({y:437.3},0).wait(1).to({y:437.6},0).wait(1).to({y:437.9},0).wait(1).to({y:438.3},0).wait(1).to({y:438.6},0).wait(1).to({y:438.9},0).wait(1).to({y:439.2},0).wait(1).to({y:439.6},0).wait(1).to({y:439.9},0).wait(1).to({y:440.2},0).wait(1).to({y:440.6},0).wait(1).to({y:440.9},0).wait(1).to({y:441.2},0).wait(1).to({y:441.5},0).wait(1).to({y:441.9},0).wait(1).to({y:442.2},0).wait(1).to({y:442.5},0).wait(1).to({y:442.9},0).wait(1).to({y:443.2},0).wait(1).to({y:443.5},0).wait(1).to({y:443.8},0).wait(1).to({y:444.2},0).wait(1).to({y:444.5},0).wait(1).to({y:444.8},0).wait(1).to({y:445.1},0).wait(1).to({y:445.5},0).wait(1).to({y:445.8},0).wait(1).to({y:446.1},0).wait(1).to({y:446.5},0).wait(1).to({y:446.8},0).wait(1).to({y:447.1},0).wait(1).to({y:447.4},0).wait(1).to({y:447.8},0).wait(1).to({y:448.1},0).wait(1).to({y:448.4},0).wait(1).to({y:448.8},0).wait(1).to({y:449.1},0).wait(1).to({y:449.4},0).wait(1).to({y:449.7},0).wait(1).to({y:450.1},0).wait(1).to({y:450.4},0).wait(1).to({y:450.7},0).wait(1).to({y:451},0).wait(3));

        // midle
        this.instance_1 = new lib.Символ2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(246,451,1,1,0,0,0,954,451);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:451.4},0).wait(1).to({y:451.7},0).wait(1).to({y:452.1},0).wait(1).to({y:452.5},0).wait(1).to({y:452.9},0).wait(1).to({y:453.2},0).wait(1).to({y:453.6},0).wait(1).to({y:454},0).wait(1).to({y:454.3},0).wait(1).to({y:454.7},0).wait(1).to({y:455.1},0).wait(1).to({y:455.4},0).wait(1).to({y:455.8},0).wait(1).to({y:456.2},0).wait(1).to({y:456.6},0).wait(1).to({y:456.9},0).wait(1).to({y:457.3},0).wait(1).to({y:457.7},0).wait(1).to({y:458},0).wait(1).to({y:458.4},0).wait(1).to({y:458.8},0).wait(1).to({y:459.1},0).wait(1).to({y:459.5},0).wait(1).to({y:459.9},0).wait(1).to({y:460.3},0).wait(1).to({y:460.6},0).wait(1).to({y:461},0).wait(1).to({y:461.4},0).wait(1).to({y:461.7},0).wait(1).to({y:462.1},0).wait(1).to({y:462.5},0).wait(1).to({y:462.9},0).wait(1).to({y:463.2},0).wait(1).to({y:463.6},0).wait(1).to({y:464},0).wait(1).to({y:464.3},0).wait(1).to({y:464.7},0).wait(1).to({y:465.1},0).wait(1).to({y:465.4},0).wait(1).to({y:465.8},0).wait(1).to({y:466.2},0).wait(1).to({y:466.6},0).wait(1).to({y:466.9},0).wait(1).to({y:467.3},0).wait(1).to({y:467.7},0).wait(1).to({y:468},0).wait(1).to({y:468.4},0).wait(1).to({y:468.8},0).wait(1).to({y:469.1},0).wait(1).to({y:469.5},0).wait(1).to({y:469.9},0).wait(1).to({y:470.3},0).wait(1).to({y:470.6},0).wait(1).to({y:471},0).wait(1).to({y:470.7},0).wait(1).to({y:470.3},0).wait(1).to({y:470},0).wait(1).to({y:469.7},0).wait(1).to({y:469.4},0).wait(1).to({y:469},0).wait(1).to({y:468.7},0).wait(1).to({y:468.4},0).wait(1).to({y:468},0).wait(1).to({y:467.7},0).wait(1).to({y:467.4},0).wait(1).to({y:467.1},0).wait(1).to({y:466.7},0).wait(1).to({y:466.4},0).wait(1).to({y:466.1},0).wait(1).to({y:465.8},0).wait(1).to({y:465.4},0).wait(1).to({y:465.1},0).wait(1).to({y:464.8},0).wait(1).to({y:464.4},0).wait(1).to({y:464.1},0).wait(1).to({y:463.8},0).wait(1).to({y:463.5},0).wait(1).to({y:463.1},0).wait(1).to({y:462.8},0).wait(1).to({y:462.5},0).wait(1).to({y:462.1},0).wait(1).to({y:461.8},0).wait(1).to({y:461.5},0).wait(1).to({y:461.2},0).wait(1).to({y:460.8},0).wait(1).to({y:460.5},0).wait(1).to({y:460.2},0).wait(1).to({y:459.9},0).wait(1).to({y:459.5},0).wait(1).to({y:459.2},0).wait(1).to({y:458.9},0).wait(1).to({y:458.5},0).wait(1).to({y:458.2},0).wait(1).to({y:457.9},0).wait(1).to({y:457.6},0).wait(1).to({y:457.2},0).wait(1).to({y:456.9},0).wait(1).to({y:456.6},0).wait(1).to({y:456.2},0).wait(1).to({y:455.9},0).wait(1).to({y:455.6},0).wait(1).to({y:455.3},0).wait(1).to({y:454.9},0).wait(1).to({y:454.6},0).wait(1).to({y:454.3},0).wait(1).to({y:454},0).wait(1).to({y:453.6},0).wait(1).to({y:453.3},0).wait(1).to({y:453},0).wait(1).to({y:452.6},0).wait(1).to({y:452.3},0).wait(1).to({y:452},0).wait(1).to({y:451.7},0).wait(1).to({y:451.3},0).wait(1).to({y:451},0).wait(3));

        // down
        this.instance_2 = new lib.Символ1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(246,451,1,1,0,0,0,954,451);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:452.1},0).wait(1).to({y:453.2},0).wait(1).to({y:454.3},0).wait(1).to({y:455.4},0).wait(1).to({y:456.6},0).wait(1).to({y:457.7},0).wait(1).to({y:458.8},0).wait(1).to({y:459.9},0).wait(1).to({y:461},0).wait(1).to({y:462.1},0).wait(1).to({y:463.2},0).wait(1).to({y:464.3},0).wait(1).to({y:465.4},0).wait(1).to({y:466.6},0).wait(1).to({y:467.7},0).wait(1).to({y:468.8},0).wait(1).to({y:469.9},0).wait(1).to({y:471},0).wait(1).to({y:472.1},0).wait(1).to({y:473.2},0).wait(1).to({y:474.3},0).wait(1).to({y:475.4},0).wait(1).to({y:476.6},0).wait(1).to({y:477.7},0).wait(1).to({y:478.8},0).wait(1).to({y:479.9},0).wait(1).to({y:481},0).wait(1).to({y:482.1},0).wait(1).to({y:483.2},0).wait(1).to({y:484.3},0).wait(1).to({y:485.4},0).wait(1).to({y:486.6},0).wait(1).to({y:487.7},0).wait(1).to({y:488.8},0).wait(1).to({y:489.9},0).wait(1).to({y:491},0).wait(1).to({y:492.1},0).wait(1).to({y:493.2},0).wait(1).to({y:494.3},0).wait(1).to({y:495.4},0).wait(1).to({y:496.6},0).wait(1).to({y:497.7},0).wait(1).to({y:498.8},0).wait(1).to({y:499.9},0).wait(1).to({y:501},0).wait(1).to({y:502.1},0).wait(1).to({y:503.2},0).wait(1).to({y:504.3},0).wait(1).to({y:505.4},0).wait(1).to({y:506.6},0).wait(1).to({y:507.7},0).wait(1).to({y:508.8},0).wait(1).to({y:509.9},0).wait(1).to({y:511},0).wait(1).to({y:510},0).wait(1).to({y:509},0).wait(1).to({y:508.1},0).wait(1).to({y:507.1},0).wait(1).to({y:506.1},0).wait(1).to({y:505.1},0).wait(1).to({y:504.1},0).wait(1).to({y:503.1},0).wait(1).to({y:502.1},0).wait(1).to({y:501.2},0).wait(1).to({y:500.2},0).wait(1).to({y:499.2},0).wait(1).to({y:498.2},0).wait(1).to({y:497.2},0).wait(1).to({y:496.2},0).wait(1).to({y:495.3},0).wait(1).to({y:494.3},0).wait(1).to({y:493.3},0).wait(1).to({y:492.3},0).wait(1).to({y:491.3},0).wait(1).to({y:490.3},0).wait(1).to({y:489.4},0).wait(1).to({y:488.4},0).wait(1).to({y:487.4},0).wait(1).to({y:486.4},0).wait(1).to({y:485.4},0).wait(1).to({y:484.4},0).wait(1).to({y:483.5},0).wait(1).to({y:482.5},0).wait(1).to({y:481.5},0).wait(1).to({y:480.5},0).wait(1).to({y:479.5},0).wait(1).to({y:478.5},0).wait(1).to({y:477.6},0).wait(1).to({y:476.6},0).wait(1).to({y:475.6},0).wait(1).to({y:474.6},0).wait(1).to({y:473.6},0).wait(1).to({y:472.6},0).wait(1).to({y:471.7},0).wait(1).to({y:470.7},0).wait(1).to({y:469.7},0).wait(1).to({y:468.7},0).wait(1).to({y:467.7},0).wait(1).to({y:466.7},0).wait(1).to({y:465.8},0).wait(1).to({y:464.8},0).wait(1).to({y:463.8},0).wait(1).to({y:462.8},0).wait(1).to({y:461.8},0).wait(1).to({y:460.8},0).wait(1).to({y:459.9},0).wait(1).to({y:458.9},0).wait(1).to({y:457.9},0).wait(1).to({y:456.9},0).wait(1).to({y:455.9},0).wait(1).to({y:454.9},0).wait(1).to({y:454},0).wait(1).to({y:453},0).wait(1).to({y:452},0).wait(1).to({y:451},0).wait(3));

      }).prototype = p = new cjs.MovieClip();
      p.nominalBounds = new cjs.Rectangle(-108,475,1908,902);
      // library properties:
      lib.properties = {
        width: 1200,
        height: 950,
        fps: 24,
        color: '#FFFFFF',
        opacity: 0.00,
        webfonts: {},
        manifest: [
          {src:'/img/test_3_atlas_.png', id:'test_3_atlas_'}
        ],
        preloads: []
      };




    })(lib = lib||{}, images = images||{}, createjs = window.createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
    var lib, images, createjs, ss, AdobeAn;
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
      canvas = document.getElementById('canvas1');
      anim_container = document.getElementById('animation_container1');
      dom_overlay_container = document.getElementById('dom_overlay_container1');
      images = images||{};
      ss = ss||{};
      var loader = new createjs.LoadQueue(false);
      loader.addEventListener('fileload', handleFileLoad);
      loader.addEventListener('complete', handleComplete);
      loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt) {
      if (evt.item.type === 'image') { images[evt.item.id] = evt.result; }
    }
    function handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
      var queue = evt.target;
      var ssMetadata = lib.ssMetadata;
      for(var i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {'images': [queue.getResult(ssMetadata[i].name)], 'frames': ssMetadata[i].frames} );
      }
      exportRoot = new lib.test3();
      stage = new createjs.Stage(canvas);
      stage.addChild(exportRoot);
      //Registers the "tick" event listener.
      fnStartAnimation = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener('tick', stage);
      };
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
            if((respDim==='width'&&lastW===iw) || (respDim==='height'&&lastH===ih)) {
              sRatio = lastS;
            }
            else if(!isScale) {
              if(iw<w || ih<h)
                sRatio = Math.min(xRatio, yRatio);
            }
            else if(scaleType===1) {
              sRatio = Math.min(xRatio, yRatio);
            }
            else if(scaleType===2) {
              sRatio = Math.max(xRatio, yRatio);
            }
          }
          canvas.width = w*pRatio*sRatio;
          canvas.height = h*pRatio*sRatio;
          canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w*sRatio+'px';
          canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
          stage.scaleX = pRatio*sRatio;
          stage.scaleY = pRatio*sRatio;
          lastW = iw; lastH = ih; lastS = sRatio;
        }
      }
      makeResponsive(true,'both',false,1);
      fnStartAnimation();
    }
    init();
  })();
}

module.exports = secondAnimation;
