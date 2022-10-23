var loadingSpinner = document.querySelector("#loading-text");
var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var buildUrl = "Build";
var loaderUrl = buildUrl + "/Build.loader.js";
var config = {
    dataUrl: buildUrl + "/5343542a08c1fc6c377e07d4ed736b8e.data",
    frameworkUrl: buildUrl + "/6ec5266b4bae5dd683cdc8bf59dc9922.js",
    codeUrl: buildUrl + "/864a68dbe2cbe6e8400ddca2ded7651a.wasm",
streamingAssetsUrl: "StreamingAssets",
    companyName: "Wave Function Collapse Test 1",
    productName: "Wave Function Collapse Test 1",
    productVersion: "1.0"
};

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
    }).then((unityInstance) => {
        loadingSpinner.classList.add("hidden");
    });
};
document.body.appendChild(script);
