---
theme: seriph
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&dl=nasa-Q1p7bh3SHj8-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb
title: WebAssembly4G - Where we are, and where we're heading
info: |
  WebAssembly4G - Where we are, and where we're heading

  Talk in general track @ FOSS4G 2022 - Firenze (https://2022.foss4g.org/), 2022-08-26, 14:45–15:15 (Europe/Rome), General Online

  see https://github.com/boardend/foss4g-2022-webassembly4g
aspectRatio: '16/9'
css: unocss
colorSchema: 'light'
class: text-center
themeConfig:
  primary: '#654FF0'
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
---

# WebAssembly4G

## Where we are, and where we're heading

<div class="pt-12">
  <span class="px-2 py-1">
    <h3>Michael Schmuki @ <a href="https://2022.foss4g.org/" target="_blank">FOSS4G 2022</a></h3>
    <br /><br />
    <img style="height:5em;display:inline-block;margin-right:2em" src="/webassembly_logo.svg" />
    <img style="height:5em;display:inline-block;background-color:white;padding: 1em;" src="/foss4g2022_logo.png" />
    <br /><br />
    Slides @ <a href="https://boardend.github.io/foss4g-2022-webassembly4g/" target="_blank">
      boardend.github.io/foss4g-2022-webassembly4g
    </a>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="window.location='mailto://'+'michael'+'@'+('schmuki.io')" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:email />
  </button>
  <a href="https://github.com/boardend/foss4g-2022-webassembly4g" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


<div class="absolute bottom-2 right-6" style="font-size: 6pt;">
  Background Image by NASA, <a href="https://unsplash.com/photos/Q1p7bh3SHj8" target="_blank">https://unsplash.com/photos/Q1p7bh3SHj8</a>,
</div>

<!--

Demos:

https://wasm-test.libreoffice.org/
https://www.crunchydata.com/developers/playground/basics-of-postgis

https://starboard.gg/#python

http://localhost:4000/app-multi-release/

https://wonder-sk.github.io/wasm/qgis.html
-->

---

# Intro

<v-click>

### Remote FOSS4G 2022

</v-click>


<ul>
  <li v-click="2">☕ <b>-&gt;</b> <s>🇨🇭 🚅 ⛰️ 🇮🇹</s> <b>-&gt;</b><s>FOSS4G 2022 @ Firenze 🌍</s>
    <ul>
      <li v-click="3">☕ <b>-&gt;</b> 😯🤔 <b>-&gt;</b> 🧪 <b>-&gt;</b> ☑️ 😷 <b>-&gt;</b> FOSS4G 2022 @ Home <b>-&gt;</b> ☕🖥️👌<br /></li>
      <li v-click="4"><s>2022-08-25, 17:15–17:45 @ Room Limonaia</s> <b>-&gt;</b> 2022-08-<b>26</b>, 14:45–15:15 @ General online</li>
      <li v-click="5">Many thanks to the organizers of FOSS4G 2022 🙌</li>
    </ul>
  </li>
</ul>


<br />

<v-click>

### About me

- Michael Schmuki
  - Institute of Cartography and Geoinformation | ETH Zurich
    - Atlas of Switzerland[^1], Teaching, Open Source Geospatial Laboratory
  - 15 years of coding, 5 years in geospatial
    - Geospatial community is exceptional 🌍🥰

</v-click>

<br />

[^1]: [atlasofswitzerland.ch](https://atlasofswitzerland.ch)


---

# Why I'm excited

<v-click>

- Adoption across web projects

- Adoption outside of browsers

- Ability to reuse existing libraries

- Evolution of WebAssembly

- Porting osgEarth to the web

  - Demo

- How to get started with Emscripten

  - Tips and Tricks

- Opportunities ahead

</v-click>

---

# .wasm, what?

<br />

<v-click>

- [Write once, run anywhere: safe and reusable analytic modules for WebAssembly, Javascript, or more!](https://talks.osgeo.org/foss4g-2022/talk/XV87XB/)
  - **Stuart Lynn @ FOSS4G 2022**

</v-click>

<br />

<v-click>

- [WebAssembly - a new technology and its potential for geospatial application](https://talks.2019.foss4g.org/bucharest/talk/PTUAEG/)
  - **Pirmin Kalberer @ FOSS4G 2019**
    - Stream @ [Youtube](https://www.youtube.com/watch?v=WodAYDDSq1g) / [media.ccc.de](https://media.ccc.de/v/bucharest-230-webassembly-a-new-technology-and-its-potential-for-geospatial-application)

</v-click>

<br />
<br />

<v-click>

- [Lin Clark](https://github.com/linclark)
  - **JS Conf**, **WebAssembly Summit**, **Full Stack Fest**, ...
    - https://code-cartoons.com/
    - [@linclark](https://twitter.com/linclark)

<img src="/lin_clark.png" class="absolute bottom-10 right-50" style="height:10em"/>

</v-click>

---


# .wasm, what?

<!--
- Langauges
  - https://blog.scottlogic.com/2022/06/20/state-of-wasm-2022.html
  - https://webassembly.org/getting-started/developers-guide/
- Runtimes
  - Browser
  - Standalone
  - Cloud

https://boardend.github.io/fossgis-2021-webassembly/#/wasm

-->

<v-click>
  <img class="absolute left-20 top-25" style="z-index:1;width:12vw;transform: rotate(-5deg);" src="/wasm_compilation.png" alt="WebAssembly compilation">
</v-click>

<v-click>
  <img class="absolute top-15 right-20" style="z-index:1;width:12vw;transform: rotate(5deg);" src="/wasm_design.png" alt="WebAssembly design">
</v-click>

<v-click>
  <img class="absolute bottom-35 left-20" style="z-index:1;width:12vw" src="/wasm_party.png" alt="WebAssembly browser party">
</v-click>

<v-click>
  <img class="absolute top-80 right-15" style="z-index:1;width:18vw;transform: rotate(0deg);" src="/wasm_security.png" alt="WebAssembly Security">
</v-click>

<v-click>
  <img class="absolute bottom-5 left-75" style="z-index:1;width:12vw" src="/wasm_runtime.png" alt="WebAssembly Runtime">
</v-click>

<div style="position:absolute;z-index:10;margin-left:-4em;margin-top:3em;width:100%;text-align:center">
  <img class="" style="z-index:10;display:inline-block;width:12vw;" src="/webassembly_logo.svg" alt="Logo WebAssembly">
</div>


---

# Adoption across web projects

## "Small" WebAssembly modules

<br />

- `.wasm` modules with a couple of MB in size
  - Examples: Computational statistics, decoding, ...
  - Size- and load-time-efficient binary format
  - Cacheable / Offline
  - Asynchronous / Multithreading

<br />

- Often implicit for the library user
  - API usually written in TypeScript/JavaScript
  - Fallback JS implementation possible
---

## "Small" WebAssembly modules

<br />

- Slide **[Cloud-Native Geospatial in JavaScript](https://talks.osgeo.org/foss4g-2022/talk/MNLFUG/)**
  - FOSS4G 2022 Talk by Daniel J. Dufour & Matthias Mohr

<div class="m2 flex justify-center">
  <img src="/screenshot_cloud-native-geospatial_js.png" style="width:70%;" />
</div>

---

## "Small" WebAssembly modules

<br />

- Example: [loaders.gl](https://loaders.gl/)

  - loaders.gl is a collection of open source loaders and writers for file formats focused on visualization of big data, including tabular, geospatial, and 3D formats
  - More and more WebAssembly based loaders
    - GeoPackageLoader
    - BasisLoader
    - DracoLoader

- Example: [CesiumJS](https://cesium.com/platform/cesiumjs/)

  - [Draco](https://google.github.io/draco/) Compressed Meshes with glTF and 3D Tiles
  - So you have probably already used WebAssembly modules without even noticing

---

# Adoption across web projects

## "Big" WebAssembly web applications

- Full applications running in the browser
  - Porting of large/old code bases
  - WebGL, Audio, Network, File system, ...

- Commercial success stories
  - [Figma](https://www.figma.com/de/blog/webassembly-cut-figmas-load-time-by-3x/)
  - [Adobe **Photoshop**](https://web.dev/ps-on-the-web/)
  - [Autodesk **AutoCAD**](https://web.autocad.com)

- WebAssembly as a runtime target for game engines (Unity, Godot, Unreal Engine 4)
  - Interesting use cases with [Cesium Native](https://github.com/CesiumGS/cesium-native) or [ArcGIS Maps SDK for Unity](https://developers.arcgis.com/unity/)

---

## "Big" WebAssembly web applications: <br /> **Google Earth** [^1]

<br />

<div class="m2 flex justify-center">
  <video autoplay id="earthVideo" style="width: 70%;" muted="">
    <source type="video/mp4" src="https://polybox.ethz.ch/index.php/s/VxCRYlVswzuddkT/download">
    Your browser does not support the video tag.
  </video>
</div>

<v-click>
<div class="absolute top-40 left-50">


- [Google Earth](https://earth.google.com/web/)
  - WebGL 3D globe
  - Visualization of raster and vector datasets
- [Google Earth Studio](https://earth.google.com/web/)
  - Animation tool based on the Google Earth 3D-renderer
  - Rendering und Export of frames inside the browser
- [FFmpeg](https://ffmpeg.org/)
  - FOSS C library for video/audio recording and converting
  - [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)
    - Stitched together individual frames and exported as `H264`


</div>
</v-click>

[^1]: [How we're bringing Google Earth to the web @ web.dev](https://web.dev/earth-webassembly/)


---

## "Big" WebAssembly web applications: <br /> **LibreOffice**

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_libreoffice.png" style="width:70%;" />
</div>

<!--

Will come back to this example / Qt at the end of the presentation

-->

---

## "Big" WebAssembly web applications: <br /> **Crunchy Data PostgreSQL Playground**

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_crunchy_playground.png" style="width:70%;" />
</div>


---

## "Big" WebAssembly web applications: <br /> **Crunchy Data PostgreSQL Playground / v86**

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_crunchy_playground_v86.png" style="width:70%;" />
</div>

<!--
v86 emulates an x86-compatible CPU and hardware

Full linux kernel running in the browser
-->

---


# Adoption outside of browsers

## WebAssembly runtimes

<br />

<div class="m2 flex justify-center">
  <img src="/webassembly_runtime.png" style="height:20em;" />
</div>

<!--
  Portabilty, Security
  Runtimes
-->

---

## State of WebAssembly runtimes 2022

<br />

<div class="m2 flex justify-center">
  <img src="/runtimes.png" style="height:18em;" />
</div>

<br />

- Source: **The State of WebAssembly 2022** <br /> https://blog.scottlogic.com/2022/06/20/state-of-wasm-2022.html


---


# Adoption outside of browsers

## WASI

<br />

- **The WebAssembly System Interface** (WASI)

  - WASI offers a standardized set of APIs for WebAssembly modules to access system resource
    - such as a FileSystem, Environment variables, Networking, Time, Random, ...

  - Design Principles

    - Capability-based security
    - Interposition
    - Compatibility
    - Portability


---

# Adoption outside of browsers

## Other examples

<br />

- Example: **WebAssembly function as a service (FaaS)**

  - WebAssembly on Amazon Lambda, Cloudflare Workers, ...

<br />

- Example: **WebAssembly Module as PostgreSQL function**

  - WebAssembly Module loaded from within the database

  - Integrations:
    - [PLV8](https://github.com/plv8/plv8)
    - [Wasmer Postgres](https://github.com/wasmerio/wasmer-postgres)


---

# Ability to reuse existing libraries


<img v-click="1" src="/logo_cpp.svg" class="absolute top-40 left-10" style="height:8em"/>

<img v-click="2" src="/logo_osgeo.png" class="absolute top-80 left-30" style="height:8em"/>

<img v-click="3" src="/logo_rust.svg" class="absolute top-40 left-65" style="height:8em"/>

<img v-click="4" src="/logo_python.svg" class="absolute top-40 right-5" style="height:8em"/>


---

## Ability to reuse existing libraries: <br /> **Python Notebook (Starboard)**

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_starboard.png" style="width:70%;" />
</div>


---

# Evolution of WebAssembly

- One of the fastest web standards implemented
- Keep getting better since
  - Threads and atomics, Fixed-width SIMD, DWARF Debugging, ...
  - WebAssembly System Interface (WASI)

<br />

<v-click>

- WebAssembly proposals
  - Component Model
    - Interface types: high-level types such as strings, records, collections, etc.
    - A canonical ABI which specifies how high-level types are represented
    - Module and component linking: a mechanism for dynamically composing modules
  - Garbage Collection (GC)
  - Many more
    - https://github.com/WebAssembly/proposals
    - https://chromestatus.com/features#tags%3Awebassembly

</v-click>

---

# Atlas of Switzerland

- Official national Atlas of Switzerland

  - 400+ Maps
  - 3D Globe based on [osgEarth]()

- "Atlas of Switzerland – online"

  - Data downloaded on the fly

  - Clients for **Windows** and **MacOS**

<img src="/ads0.png" class="absolute top-15 right-10" style="width:20em"/>

<img src="/ads1.png" class="absolute bottom-10 right-10" style="width:22em;transform: rotate(3deg);"/>

<img src="/logo_ads.png" class="absolute bottom-10 left-25" style="width:8em"/>

---


# osgEarth WebAssembly

- Personal Side Project

  - Started in 2019 to port osgEarth, GEOS, PROJ, GDAL, SpatiaLite, and Co. to the web
  - On and off ever since

- Not Ready yet

  - Currently in private alpha
  - Hopefully I can share the project in the upcoming months

- Next Steps

  - Bring patches to the upstream projects
  - Publish a npm package
  - Explore how to port the Atlas of Switzerland to the web platform



---

# osgEarth WebAssembly Demo

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_osgearthwasm.png" style="width:70%;" />
</div>


---

# osgEarth WebAssembly Demo

```xml
<OGRFeatures name="country-data">
  <url>/module-scene-osgearth/world.shp</url>
  <filters>
    <buffer distance="-0.08" />
  </filters>
</OGRFeatures>
```

---

# osgEarth WebAssembly Demo

```xml
<styles>
  <style type="text/css">
    <![CDATA[
      base {
        altitude-clamping: terrain-drape;
        text-provider:  annotation;
        text-content:   [code];
        text-priority:  [pop];
        text-align:     center_center;
        text-size:      15;
        text-declutter: true;
      }
      p1: base {
        fill: #016c59;
      }
      p2: base {
        fill: #1c9099;
      }
      p3: base {
        fill: #67a9cf;
      }
      ...
```


---

# osgEarth WebAssembly Demo

```xml
  ...
  <selector class_expr="getStyleClass()" />
  <script language="javascript">
    <![CDATA[
      function getStyleClass() {
        const pop = parseInt(feature.properties.pop);
        if (pop >= 50_000_000) return "p1";
        else if (pop >= 20_000_000) return "p2";
        else if (pop >= 10_000_000) return "p3";
        else if (pop >= 5_000_000) return "p3";
        else return "p5";
      }
    ]]>
  </script>
</styles>
```


---

# osgEarth WebAssembly Libraries

<br />
<br />

<img src="/dependencies.drawio.svg" />

<div class="absolute top-30 left-160">

- `osgEarth.wasm`

  - One big statically linked module
    - `26M` .wasm module
    - `325K` .js glue code

<br />

- ~ 30 patches needed for the libraries

<br />

- More libraries to come

  - Vector Tiles
  - 3D Tiles
  - ...


</div>

---

# How to get started

<table style="font-size:10pt"><thead><tr><th>Language</th><th>Browser</th><th>Other</th><th>WASI</th></tr></thead><tbody>
<tr><td><b>Rust</b></td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td><b>C</b></td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td><b>C++</b></td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td><b>C# and .NET</b></td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td><b>Python</b></td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td><b>Java</b></td><td>✅</td><td>✅</td><td>❌</td></tr>
<tr><td><b>Ruby</b></td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td><b>Go</b></td><td>✅</td><td>✅</td><td>✅</td></tr>
</tbody></table>

<v-click>
<arrow x1="350" y1="208" x2="200" y2="208" color="#654FF0" width="3" arrowSize="1" />
<arrow x1="350" y1="255" x2="200" y2="255" color="#654FF0" width="3" arrowSize="1" />
</v-click>

---

# How to get started: C/C++ with Emscripten

- **Intro**
  - Emscripten is a compiler toolchain using LLVM
  - Compile C and C++ code into WebAssembly, and run it on the Web, Node.js, or other wasm runtimes
  - MIT license, project started Alon Zakai (~2012)

- **Installation**
  - The Emscripten SDK is used to install the entire toolchain
    - The Emscripten SDK (`emsdk`) can be used on Linux, Windows or MacOS

<br />

```
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
emcc --version
```

<img src="/logo_emscripten.svg" class="absolute bottom-5 right-5" style="width:20em"/>

---

# How to get started: C/C++ with Emscripten


- **Docker**
  - The emscripten compiler toolchain can also be used as a Docker container
  - Docker image `emscripten/emsdk` is a self-contained version of `emsdk`
    - Usage without any other installation on the host system:

<br />

```
docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk \
emcc helloworld.cpp -o helloworld.js
```

<img src="/logo_docker.svg" class="absolute bottom-5 right-5" style="width:15em"/>

<br />
<br />

<v-click>

- Note:
  - Current directory is mounted to `/src`
  - Container has to run under the same user/group
    - File ownership mapping between the host and the container

</v-click>

---

# Emscripten: What it does?

- The main tool is the **Emscripten Compiler Frontend** (`emcc`)
  - Drop-in replacement for a standard compiler like **gcc** or **clang**
  - Supports the common flags from **gcc** and **clang**
    - Introduces also many Emscripten specific compiler/linker flags [^1]

<br />

- **Emcc** uses Clang and LLVM to compile to WebAssembly (`.wasm`)
  - **Emcc** also emits JavaScript that provides API support to the compiled code (`.js`)

<br />

- Wrapper scripts around `configure`, `make`, and `cmake`
  - `./configure` -> `emconfigure ./configure`
  - `make` -> `emmake make`
  - `cmake .` -> `emcmake cmake .`

[^1]: [emsettings.surma.technology](https://emsettings.surma.technology/)

---

# Emscripten: What it does?

- **"Emscripten Magic"**
  - Emscripten can be used to compile almost any portable C/C++ code to JavaScript
  - System libraries provided by Emscripten
    - SDL, Multimedia and Graphics, Networking, File System, Audio, ...
  - Binding between JS and WebAssembly

<br />

<v-click>

- **Emscripten Ports**
  - SDL2
  - boost, zlib, libpng, ...
  - [github.com/emscripten-ports](https://github.com/emscripten-ports)

</v-click>


---

# Tips and tricks

<br />
<br />

<v-click>

## OffscreenCanvas / Multithreading

</v-click>

<br />

<v-click>

## Pipeline for native and wasm builds

</v-click>

<br />

<v-click>

## Turn Around Time

</v-click>

<br />

<v-click>

## Debugging

</v-click>



---
layout: center
class: text-center
---

# 🔮✨🤔✨🌍✨🤩

<br />
<br />

## Opportunities ahead

<br />
<br />

<v-click>

### 3 possible future scenarios I'd like to see

</v-click>

---


# 🔮 Portable PyPI/npm packges with "native" bindings?

- The same problem exists for Python/JS package registries
- If a package depends on code with "native" bindings

  - The native code is expected to be available as shared library (runtime error)
  - Compilation is part of the installation procedure (`SIP`, `node-gyp`, ...)
  - A binary is provided for every possible target architecture <br /> (`cp38-cp38-win_amd64.whl`, `cp38-cp38-win32.whl`, `cp36-cp36m-macosx_intel.whl`, ...)

<br />

<v-click>

- WebAssembly could be a good fit to solve this problem

  - A universal `.wasm` module is shipped inside the package
  - Binds to Python/JS package and is executed with a WebAssembly runtime (e.g. wasmtime)

</v-click>


---

# 🔮 QGIS in the browser?

- Why I think it is possible?
  - [Qt](https://doc.qt.io/qt-6/wasm.html) is doing fine (as seen earlier)
  - [Python]() is doing fine (as seen earlier)
  - Dependencies almost identical to the stack showed earlier

<br />

<v-click>

- Ok fine, but why?
  - Online Playground, People who cannot install/use QGIS, ...
  - ***Disclaimer***: You probably still want a desktop GIS compiled for your local system

</v-click>

<br />

<v-click>

- What has been done so far?
  - QGIS Renderer: https://wonder-sk.github.io/wasm/qgis.html
    - By [Martin Dobias](https://github.com/wonder-sk), announced in the [QGIS mailing list](https://lists.osgeo.org/pipermail/qgis-developer/2022-March/064589.html)

</v-click>

---


# 🔮 Composable toolbox of geospatial .wasm modules

- Disclaimer: Advancement in the WebAssembly specs/implementation needed
  - Waiting for the "Component Model" proposal

<br />

<v-click>

- Think about a model builder in a Desktop GIS
  - Source language doesn't matter
  - Single universal .wasm "binary"

</v-click>

<br />

<v-click>

- Reuse the same modules
  - Client/Web, FaaS, DB, "Edge", plugin system, ...

</v-click>

---

# Contact

<ul>
  <li>
    <b>E-Mail</b> <carbon-email/>
  <ul>
  <li>
    <a href="mailto://mschmuki@ethz.ch" target="_blank">mschmuki@ethz.ch</a>
  </li>
  <li>
    <a href="mailto://michael@schmuki.io" target="_blank">michael@schmuki.io</a>
  </li>
  </ul>
  </li>
</ul>

<br />

<ul>
  <li>
    <b>Github</b> <carbon-logo-github />
  <ul>
  <li>
    <a href="https://github.com/boardend" target="_blank">github.com/boardend</a>
  </li>
  </ul>
  </li>
</ul>


<br />
<br />

# Slides


- **Page: [boardend.github.io/foss4g-2022-webassembly4g](https://boardend.github.io/foss4g-2022-webassembly4g/)**

  - Source: [github.com/boardend/foss4g-2022-webassembly4g](https://github.com/boardend/foss4g-2022-webassembly4g)

<img src="/slides_qr.svg" class="absolute bottom-15 right-20" style="height:10em"/>


---
layout: center
class: text-center
---

## ~ La fine ~

<br />
<br />
<br />

<h1>Sarò lieto di rispondere alle vostre domande <sup class="footnote-ref"><i>[IT]</i></sup></h1>

<br />

<h3>I will be happy to answer your questions <sup class="footnote-ref"><i>[EN]</i></sup></h3>

<br />

<img style="height:8em;display:inline-block;background-color:white;padding: 1em;margin-top:2em;" src="/foss4g2022_logo.png" />
