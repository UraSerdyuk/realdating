(function () {
  (function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
      {name:"test2_4 to check_atlas_", frames: [[1910,0,1908,1008],[0,1010,1908,1008],[0,0,1908,1008],[0,2020,1908,1008],[1910,1010,1908,1008],[1910,2020,1908,1008]]}
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



    (lib.futuranima_2 = function() {
      this.spriteSheet = ss["test2_4 to check_atlas_"];
      this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.girl1 = function() {
      this.spriteSheet = ss["test2_4 to check_atlas_"];
      this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.girl2 = function() {
      this.spriteSheet = ss["test2_4 to check_atlas_"];
      this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.iso_2_0009_Слой3 = function() {
      this.spriteSheet = ss["test2_4 to check_atlas_"];
      this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.man1 = function() {
      this.spriteSheet = ss["test2_4 to check_atlas_"];
      this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.man2 = function() {
      this.spriteSheet = ss["test2_4 to check_atlas_"];
      this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.Анимация21 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.iso_2_0009_Слой3();
      this.instance.parent = this;
      this.instance.setTransform(-954,-504);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-954,-504,1908,1008);


    (lib.Анимация20 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.futuranima_2();
      this.instance.parent = this;
      this.instance.setTransform(-954,-504);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-954,-504,1908,1008);


    (lib.Анимация9 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.man2();
      this.instance.parent = this;
      this.instance.setTransform(-954,-504);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-954,-504,1908,1008);


    (lib.Анимация8 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.girl2();
      this.instance.parent = this;
      this.instance.setTransform(-954,-504);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-954,-504,1908,1008);


    (lib.Анимация7 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.man1();
      this.instance.parent = this;
      this.instance.setTransform(-954,-504);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-954,-504,1908,1008);


    (lib.Анимация5 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.girl1();
      this.instance.parent = this;
      this.instance.setTransform(-954,-504);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-954,-504,1908,1008);


// stage content:
    (lib.test2_4tocheck = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // timeline functions:
      this.frame_64 = function() {
        this.stop();
      }

      // actions tween:
      this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

      // icon1
      this.instance = new lib.Анимация20("synched",0);
      this.instance.parent = this;
      this.instance.setTransform(709.1,328.5,0.317,0.317,42,0,0,-194.8,-25.4);
      this.instance._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({regY:-25.6,scaleX:1.08,scaleY:1.08,rotation:-8.4,x:709.2,y:328.4},2).to({scaleX:1,scaleY:1,rotation:0},2).wait(6));

      // icon2
      this.instance_1 = new lib.Анимация21("synched",0);
      this.instance_1.parent = this;
      this.instance_1.setTransform(765.6,508,0.246,0.246,19.2,0,0,-138.3,153.9);
      this.instance_1._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({_off:false},0).to({regY:154,scaleX:1.1,scaleY:1.1,rotation:-9,x:765.7},2).to({regX:-138.5,regY:153.8,scaleX:1,scaleY:1,rotation:0,x:765.5,y:507.8},2).wait(3));

      // dot4
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#F53E4F").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
      this.shape.setTransform(467.9,393.5);

      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#F53E4F").s().p("AgnApQgSgRAAgYQAAgXASgQQAQgSAXAAQAZAAAQASQARAQAAAXQAAAYgRARQgQARgZAAQgXAAgQgRg");
      this.shape_1.setTransform(467.9,393.5);

      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#F53E4F").s().p("Ag/A/QgagZAAgmQAAgkAagbQAbgaAkAAQAmAAAZAaQAbAbAAAkQAAAmgbAZQgZAbgmAAQgkAAgbgbg");
      this.shape_2.setTransform(467.9,393.5);

      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#F53E4F").s().p("AhKBLQgfgfAAgsQAAgrAfgfQAggfAqAAQAsAAAfAfQAfAfAAArQAAAsgfAfQgfAfgsAAQgqAAgggfg");
      this.shape_3.setTransform(467.9,393.5);

      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#F53E4F").s().p("AhVBWQgkgjAAgzQAAgyAkgjQAjgkAyAAQAzAAAjAkQAkAjAAAyQAAAzgkAjQgjAkgzAAQgyAAgjgkg");
      this.shape_4.setTransform(467.9,393.5);

      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#F53E4F").s().p("AhVBWQgkgkAAgyQAAgyAkgjQAjgkAyAAQAzAAAjAkQAkAjAAAyQAAAygkAkQgjAkgzAAQgyAAgjgkg");
      this.shape_5.setTransform(467.9,393.5);
      this.shape_5._off = true;

      this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},48).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).wait(1));
      this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(53).to({_off:false},0).wait(12));

      // mask3 (mask)
      var mask = new cjs.Shape();
      mask._off = true;
      var mask_graphics_50 = new cjs.Graphics().p("AHuX7QnGnGAAqCQAAqBHGnGQHGnGKCAAQKBAAHGHGQHGHGAAKBQAAKCnGHGQnGHGqBAAQqCAAnGnGgAIapoQm0G0AAJnQAAJoG0G0QGzGzJpAAQJoAAGzmzQG0m0AApoQAApnm0m0Qmzm0poAAQppAAmzG0g");

      this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_50,x:313.9,y:198.5}).wait(15));

      // cercle3
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#F53E4F").s().p("ApkgKITJgDIAAAbg");
      this.shape_6.setTransform(468,324.6,1,1,90,0,0,-20.4,0);

      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#F53E4F").s().p("AsxpxIZjAAQAAFqiaFIQiZFIkWDpg");
      this.shape_7.setTransform(406.8,324.6,1,1,90);

      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#F53E4F").s().p("Au+MYIEb5JIZjAAQAAHmkOGYQkMGZnDDEQk6CIlHAAQiPAAiRgag");
      this.shape_8.setTransform(387.7,310.4,1,1,90);

      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#F53E4F").s().p("AreK0QoBjVkVnfIWHsyIZjAAQgBIrlSG3QlRG5oZCPQjYA7jUAAQk6AAkxh/g");
      this.shape_9.setTransform(387.6,253.8,1,1,90);

      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#F53E4F").s().p("AsvNtQoDkpjMowQjLouDLovIYAIvIZjAAQAAJSl/HIQl+HIpKBnQiYAbiRAAQmlAAl/jdg");
      this.shape_10.setTransform(415.6,242.7,1,1,90);

      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#F53E4F").s().p("AulUJQn/lniRpZQiQpZEoolQEpomJIjWIIuYAIZjAAQAAJsmdHRQmdHRppBJQhpAMhlAAQnxAAmokpg");
      this.shape_11.setTransform(464.5,242.6,1,1,90);

      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#F53E4F").s().p("Av3T/Qn2mQhhp5Qhhp5FqoSQFqoSJwiQQJwiQItFBIsxWHIZjAAQAAJ+m3HYQm2HYp9AwQhEAGhCAAQorAAnAlmg");
      this.shape_12.setTransform(469.5,242.8,1,1,90);

      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#F53E4F").s().p("AyESEQnenfAAqlQAAqlHenfQHgneKkAAQKlAAHfHeQHfHfAAKlQAAKlnfHfQnfHfqlAAQqkAAngnfg");
      this.shape_13.setTransform(469.5,242.9,1,1,90);
      this.shape_13._off = true;

      var maskedShapeInstanceList = [this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

      for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }

      this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},50).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).wait(1));
      this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(57).to({_off:false},0).wait(8));

      // guy2
      this.instance_2 = new lib.Анимация9("synched",0);
      this.instance_2.parent = this;
      this.instance_2.setTransform(480.9,240.3,0.085,0.085,20.2,0,0,-423.1,-113.8);
      this.instance_2._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).to({regX:-422.9,regY:-113.7,scaleX:1.08,scaleY:1.08,rotation:-4.2,x:481.1},3).to({regX:-423,regY:-113.8,scaleX:1,scaleY:1,rotation:0,x:481,y:240.2},2).to({startPosition:0},12).to({startPosition:0},2).wait(1));

      // dot3
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#F53E4F").s().p("AggAgQgMgNAAgTQAAgSAMgOQAOgMASAAQATAAANAMQAOAOAAASQAAATgOANQgNAOgTAAQgSAAgOgOg");
      this.shape_14.setTransform(247.3,561.6);

      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#F53E4F").s().p("AhCBCQgbgbAAgnQAAgmAbgcQAcgbAmAAQAnAAAcAbQAbAcAAAmQAAAngbAbQgcAcgnAAQgmAAgcgcg");
      this.shape_15.setTransform(249.6,564);

      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f("#F53E4F").s().p("AhlBkQgpgpAAg7QAAg6ApgqQArgqA6AAQA7AAAqAqQAqAqAAA6QAAA7gqApQgqArg7AAQg6AAgrgrg");
      this.shape_16.setTransform(252,566.3);

      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f("#F53E4F").s().p("AhTBTQgigiAAgxQAAgvAigkQAjgiAwAAQAxAAAjAiQAiAkAAAvQAAAxgiAiQgjAjgxAAQgwAAgjgjg");
      this.shape_17.setTransform(252,566.3);

      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f("#F53E4F").s().p("AhBBBQgbgbAAgmQAAgmAbgbQAcgbAlAAQAnAAAbAbQAbAbAAAmQAAAmgbAbQgbAcgnAAQglAAgcgcg");
      this.shape_18.setTransform(252,566.3);
      this.shape_18._off = true;

      this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},38).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).wait(1));
      this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(42).to({_off:false},0).wait(23));

      // mask2 (mask)
      var mask_1 = new cjs.Shape();
      mask_1._off = true;
      mask_1.graphics.p("EgEMAm1QlrlrAAoCQAAoCFrlsQFrlrICAAQICAAFrFrQFsFsAAICQAAIClsFrQlrFsoCAAQoCAAlrlsgAjgMHQlZFZAAHoQAAHoFZFZQFYFZHoAAQHoAAFZlZQFZlZAAnoQAAnolZlZQlZlZnoAAQnoAAlYFZg");
      mask_1.setTransform(185,284.9);

      // cercle2
      this.shape_19 = new cjs.Shape();
      this.shape_19.graphics.f("#F53E4F").s().p("AlcgFIK5gCIAAAPg");
      this.shape_19.setTransform(250.9,512.5,1.814,1.814,90,0,0,-11.6,0);

      this.shape_20 = new cjs.Shape();
      this.shape_20.graphics.f("#F53E4F").s().p("AnQkQIOhAAQAAEtixD0g");
      this.shape_20.setTransform(202.8,512.4,1.814,1.814,90);

      this.shape_21 = new cjs.Shape();
      this.shape_21.graphics.f("#F53E4F").s().p("AnQm5IOhAAQAAEuixDzQiyD1kfBdg");
      this.shape_21.setTransform(172.1,512.4,1.814,1.814,90);

      this.shape_22 = new cjs.Shape();
      this.shape_22.graphics.f("#F53E4F").s().p("ApgGjIEgt0IOhAAQAAEuiyD0QixD0kfBeQiPAviQAAQiQAAiQgvg");
      this.shape_22.setTransform(167.9,486.4,1.814,1.814,90);

      this.shape_23 = new cjs.Shape();
      this.shape_23.graphics.f("#F53E4F").s().p("Al3GjQkgheixj0ILwoiIOhAAQAAEuixD0QiyD0kfBeQiQAviPAAQiPAAiQgvg");
      this.shape_23.setTransform(167.9,444.2,1.814,1.814,90);

      this.shape_24 = new cjs.Shape();
      this.shape_24.graphics.f("#F53E4F").s().p("AqRDBQkQkQAAmBIOhAAIOiAAQAAGBkREQQkQEQmBAAQmAAAkRkQg");
      this.shape_24.setTransform(168,428.1,1.814,1.814,90);

      this.shape_25 = new cjs.Shape();
      this.shape_25.graphics.f("#F53E4F").s().p("AmHLdQkkiIiSkhQiSkhBCk7QBCk8D2jRIJVLJIOiAAQAAFAjID+QjJD+k6BLQhvAbhsAAQjGAAi9hZg");
      this.shape_25.setTransform(232.5,428,1.814,1.814,90);

      this.shape_26 = new cjs.Shape();
      this.shape_26.graphics.f("#F53E4F").s().p("AnsMUQkji3hnlJQhnlHCKk9QCLk9E3iXQE4iWFLBZIjxOCIOiAAQAAFYjiEGQjiEGlUAzQhLALhHAAQkBAAjkiPg");
      this.shape_26.setTransform(252.4,427.9,1.814,1.814,90);

      this.shape_27 = new cjs.Shape();
      this.shape_27.graphics.f("#F53E4F").s().p("AgEAfQgJgBgIgIQgJgJAAgNQAAgMAJgJQAIgIAJgBIAEAAQANAAAKAJQAJAJAAAMQAAANgJAJQgKAKgNAAIgEgBg");
      this.shape_27.setTransform(366.2,458.6);

      var maskedShapeInstanceList = [this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27];

      for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
      }

      this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19}]},40).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).wait(1));

      // girl2
      this.instance_3 = new lib.Анимация8("synched",0);
      this.instance_3.parent = this;
      this.instance_3.setTransform(250.2,456,0.105,0.105,30,0,0,-653.6,101.8);
      this.instance_3._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({regX:-653.8,regY:102,scaleX:1.07,scaleY:1.07,rotation:-5.7,y:456.1},3).to({scaleX:1,scaleY:1,rotation:0,y:456},2).wait(25));

      // mask1 (mask)
      var mask_2 = new cjs.Shape();
      mask_2._off = true;
      mask_2.graphics.p("EAPfAyWQjijiAAlAQAAlADijiQDijiFAAAQFAAADiDiQDjDiAAFAQAAFAjjDiQjiDjlAAAQlAAAjijjgEAQEAh4QjRDSAAEqQAAEqDRDSQDTDSEqAAQEpAADSjSQDTjSAAkqQAAkqjTjSQjSjSkpAAQkqAAjTDSg");
      mask_2.setTransform(231,344.9);

      // cercle1
      this.shape_28 = new cjs.Shape();
      this.shape_28.graphics.f("#F53E4F").s().p("AkMgEIIZgBIAAALg");
      this.shape_28.setTransform(384.4,650.8,1.077,1.077,90,0,0,-9,0);

      this.shape_29 = new cjs.Shape();
      this.shape_29.graphics.f("#F53E4F").s().p("AlmjSILNAAQAADoiJC9g");
      this.shape_29.setTransform(362.3,650.8,1.077,1.077,90);

      this.shape_30 = new cjs.Shape();
      this.shape_30.graphics.f("#F53E4F").s().p("AlmlUILNAAQAADpiJC7QiJC9jdBIg");
      this.shape_30.setTransform(348.3,650.8,1.077,1.077,90);

      this.shape_31 = new cjs.Shape();
      this.shape_31.graphics.f("#F53E4F").s().p("AnUFDIDcqpILOAAQAADpiJC7QiJC9jdBIQhvAkhvAAQhvAAhugkg");
      this.shape_31.setTransform(346.3,638.9,1.077,1.077,90);

      this.shape_32 = new cjs.Shape();
      this.shape_32.graphics.f("#F53E4F").s().p("AkiFDQjdhIiJi9IJEmkILNAAQAADpiJC7QiJC9jeBIQhvAkhuAAQhvAAhvgkg");
      this.shape_32.setTransform(346.3,619.6,1.077,1.077,90);

      this.shape_33 = new cjs.Shape();
      this.shape_33.graphics.f("#F53E4F").s().p("An6CUQjTjRAAkpILNAAILOAAQAAEpjTDRQjSDTkpAAQkoAAjSjTg");
      this.shape_33.setTransform(346.4,612.2,1.077,1.077,90);

      this.shape_34 = new cjs.Shape();
      this.shape_34.graphics.f("#F53E4F").s().p("AkjFnQjhhlh0jaQh0jZArjzILBB8ILOAAQAAD3iYDCQiYDDjwA7QhaAWhWAAQiTAAiOg+g");
      this.shape_34.setTransform(353.1,612.2,1.077,1.077,90);

      this.shape_35 = new cjs.Shape();
      this.shape_35.graphics.f("#F53E4F").s().p("AgTASIgDgCQgFgIABgIQAAgLAHgIQAIgHALgBQALABAIAHQAJAIAAALQAAAIgGAIIgDACQgIAKgLgBQgLABgIgKg");
      this.shape_35.setTransform(397.9,539.1);

      this.shape_36 = new cjs.Shape();
      this.shape_36.graphics.f("#F53E4F").s().p("AgTASIgDgCQgFgIABgIQAAgLAHgIQAIgHALAAQALAAAIAHQAJAIAAALQAAAIgGAIIgDACQgIAKgLgBQgLABgIgKg");
      this.shape_36.setTransform(397.9,539.1);

      var maskedShapeInstanceList = [this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36];

      for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
        maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
      }

      this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28}]},31).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).wait(1));

      // dot2
      this.shape_37 = new cjs.Shape();
      this.shape_37.graphics.f("#F53E4F").s().p("AgNAOQgGgGAAgIQAAgIAGgFQAGgGAHAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
      this.shape_37.setTransform(384.9,687.8);

      this.shape_38 = new cjs.Shape();
      this.shape_38.graphics.f("#F53E4F").s().p("AgwAyQgVgVAAgdQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAVQgVAUgdAAQgcAAgUgUg");
      this.shape_38.setTransform(384.9,687.8);

      this.shape_39 = new cjs.Shape();
      this.shape_39.graphics.f("#F53E4F").s().p("AhUBVQgjgkAAgxQAAgxAjgjQAjgkAxAAQAyAAAjAkQAjAjAAAxQAAAxgjAkQgjAjgyAAQgxAAgjgjg");
      this.shape_39.setTransform(384.9,687.8);

      this.shape_40 = new cjs.Shape();
      this.shape_40.graphics.f("#F53E4F").s().p("AhJBKQgfgfAAgrQAAgrAfgeQAegfArAAQArAAAfAfQAfAeAAArQAAArgfAfQgfAfgrAAQgrAAgegfg");
      this.shape_40.setTransform(384.9,687.8);

      this.shape_41 = new cjs.Shape();
      this.shape_41.graphics.f("#F53E4F").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
      this.shape_41.setTransform(384.9,687.7);

      this.shape_42 = new cjs.Shape();
      this.shape_42.graphics.f("#F53E4F").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
      this.shape_42.setTransform(384.9,687.7);
      this.shape_42._off = true;

      this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37}]},26).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).wait(1));
      this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(31).to({_off:false},0).wait(34));

      // guy1
      this.instance_4 = new lib.Анимация7("synched",0);
      this.instance_4.parent = this;
      this.instance_4.setTransform(394.4,624,0.283,0.283,18.2,0,0,-509.8,269.9);
      this.instance_4._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({scaleX:1.12,scaleY:1.12,rotation:-3.7,x:394.2,y:623.9},3).to({scaleX:1,scaleY:1,rotation:0},2).to({startPosition:0},37).wait(1));

      // dot 1
      this.shape_43 = new cjs.Shape();
      this.shape_43.graphics.f("#F53E4F").s().p("AgdAeQgNgNAAgRQAAgRANgMQAMgNARABQASgBAMANQANAMAAARQAAARgNANQgMAMgSAAQgRAAgMgMg");
      this.shape_43.setTransform(500.9,614.4);

      this.shape_44 = new cjs.Shape();
      this.shape_44.graphics.f("#F53E4F").s().p("AgiAjQgOgPAAgUQAAgTAOgPQAPgOATAAQAUAAAPAOQAOAPAAATQAAAUgOAPQgPAOgUAAQgTAAgPgOg");
      this.shape_44.setTransform(501.6,615.1);

      this.shape_45 = new cjs.Shape();
      this.shape_45.graphics.f("#F53E4F").s().p("AgmAoQgRgRAAgXQAAgWARgQQAQgRAWAAQAXAAAQARQARAQAAAWQAAAXgRARQgQAQgXAAQgWAAgQgQg");
      this.shape_45.setTransform(502.2,615.7);

      this.shape_46 = new cjs.Shape();
      this.shape_46.graphics.f("#F53E4F").s().p("AgrAsQgSgSgBgaQABgZASgRQASgUAZABQAagBASAUQASARAAAZQAAAagSASQgSATgagBQgZABgSgTg");
      this.shape_46.setTransform(502.9,616.4);

      this.shape_47 = new cjs.Shape();
      this.shape_47.graphics.f("#F53E4F").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgQAVAAQAWAAAPAQQAPAPAAAVQAAAWgPAPQgPAQgWgBQgVABgPgQg");
      this.shape_47.setTransform(501.9,615.4);

      this.shape_48 = new cjs.Shape();
      this.shape_48.graphics.f("#F53E4F").s().p("AgcAeQgOgNAAgRQAAgRAOgMQALgNARABQASgBAMANQANAMAAARQAAARgNANQgMAMgSAAQgRAAgLgMg");
      this.shape_48.setTransform(500.9,614.4);

      this.shape_49 = new cjs.Shape();
      this.shape_49.graphics.f("#F53E4F").s().p("AgcAeQgOgNAAgRQAAgRAOgMQALgNARAAQASAAAMANQANAMAAARQAAARgNANQgMANgSAAQgRAAgLgNg");
      this.shape_49.setTransform(500.9,614.4);
      this.shape_49._off = true;

      this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_43}]},6).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).wait(1));
      this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(12).to({_off:false},0).wait(51).to({_off:true},1).wait(1));

      // girl1
      this.instance_5 = new lib.Анимация5("synched",0);
      this.instance_5.parent = this;
      this.instance_5.setTransform(490.2,584,0.267,0.267,45,0,0,-413.9,230.1);
      this.instance_5._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({regX:-413.8,regY:230,scaleX:1.23,scaleY:1.23,rotation:0,y:584.1},3).to({regX:-413.9,scaleX:1,scaleY:1,x:490.1,y:584},2).to({startPosition:0},33).to({startPosition:0},23).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
// library properties:
    lib.properties = {
      width: 900,
      height: 750,
      fps: 24,
      color: "#FFFFFF",
      opacity: 0.00,
      webfonts: {},
      manifest: [
        {src:"../../img/test2_4_to_check_atlas_.png", id:"test2_4 to check_atlas_"}
      ],
      preloads: []
    };




  })(lib = lib||{}, images = images||{}, createjs = window.createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
  var lib, images, createjs, ss, AdobeAn;

  var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
  function init() {
    canvas = document.getElementById("canvas2");
    anim_container = document.getElementById("animation_container2");
    dom_overlay_container = document.getElementById("dom_overlay_container2");
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
    exportRoot = new lib.test2_4tocheck();
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
