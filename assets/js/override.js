(function () {
  // giscus 评论系统
  //// 若当前 mdbook 主题为 Light 或 Rust，则将 giscus 主题设置为 light
  const getCurrentTheme = function () {
    var theme = "transparent_dark";
    const themeClass = document.getElementsByTagName("html")[0].className;
    if (themeClass.indexOf("light") != -1 || themeClass.indexOf("rust") != -1) {
      theme = "light";
    }
    return theme;
  };

  //// 获取用户使用的语种并转换为 giscus 可识别的标记
  const getCurrentLanguage = function () {
    var lang = translate.language.getCurrent() || "chinese_simplified";
    var giscus_lang = "zh-CN";
    switch (lang) {
      case "chinese_traditional":
        giscus_lang = "zh-TW";
        break;
      case "english":
        giscus_lang = "en";
        break;
      case "spanish":
        giscus_lang = "es";
        break;
      case "japanese":
        giscus_lang = "ja";
        break;
      case "korean":
        giscus_lang = "ko";
        break;
      case "french":
        giscus_lang = "fr";
        break;
      case "arabic":
        giscus_lang = "ar";
        break;
      case "catalan":
        giscus_lang = "ca";
        break;
      case "danish":
        giscus_lang = "da";
        break;
      case "deutsch":
        giscus_lang = "de";
        break;
      case "persian":
        giscus_lang = "fa";
        break;
      case "greek":
        giscus_lang = "gr";
        break;
      case "serbian":
        giscus_lang = "hbs";
        break;
      case "hebrew":
        giscus_lang = "he";
        break;
      case "hungarian":
        giscus_lang = "hu";
        break;
      case "italian":
        giscus_lang = "it";
        break;
      default:
        giscus_lang = "zh-CN";
        break;
    }
    return giscus_lang;
  };

  var SetupGiscus = function (giscus_lang, theme) {
    if (document.getElementById("giscus-container") != null) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://giscus.app/client.js";

      script.setAttribute("data-repo", "haytham-ai/public-docs");
      script.setAttribute("data-repo-id", "R_kgDORD0p8w");
      script.setAttribute("data-category", "Announcements");
      script.setAttribute("data-category-id", "DIC_kwDORD0p884C1lkf");

      script.setAttribute("data-mapping", "pathname");
      script.setAttribute("data-strict", "1");
      script.setAttribute("data-reactions-enabled", "0");
      script.setAttribute("data-emit-metadata", "0");
      script.setAttribute("data-input-position", "top");
      script.setAttribute("data-theme", theme);
      script.setAttribute("data-lang", giscus_lang);

      script.crossOrigin = "anonymous";
      script.async = true;

      document.getElementById("giscus-container").appendChild(script);
    }
  };

  // translate-js 翻译系统
  function initTranslate() {
    try {
      translate.service.use("client.edge");
      translate.listener.start();
      translate.language.setLocal("chinese_simplified");
      translate.setAutoDiscriminateLocalLanguage();
      translate.language.setUrlParamControl();
      translate.ignore.class.push("notTranslate");
      translate.execute();
    } catch (e) {
      console.log("翻译系统出错：" + e);
    }
  }

  var loadingBar = document.querySelector(".loading-bar");
  var progress = document.querySelector(".loading-bar .progress");
  var timer = null;

  function initAni() {
    loadingBar = document.querySelector(".loading-bar");
    progress = document.querySelector(".loading-bar .progress");
  }

  function endLoad() {
    clearInterval(timer);
    progress.style.width = "100%";
    loadingBar.classList.remove("loading");

    setTimeout(function () {
      progress.style.width = 0;
    }, 400);
  }

  // PJAX 集成
  let pjax;
  //// 初始化 PJAX
  function initPjax() {
    try {
      // const Pjax = window.Pjax || function () {
      //   console.error('Pjax 初始化出错。');
      // };
      pjax = new Pjax({
        selectors: [
          "head title",
          "head meta",
          "script[data-pjax]",
          ".chapter",
          ".nav-chapters",
          "#search-wrapper",
          ".content",
          "#mdbook-search-wrapper",
          "nav",
          "#git-edit-button",
          ".pjax-reload",
        ],
        cacheBust: false,
      });
    } catch (e) {
      console.log("PJAX 出错：" + e);
    }
  }

  // 初始化自定义 PJAX 响应
  // function initCustomPJAXResponse() {
  //   //// 覆写 PJAX 处理响应的函数，若处于智能体页面操作阶段，传递智能体提示词到下一页面
  //   pjax._handleResponse = pjax.handleResponse;
  //   pjax.handleResponse = async function (
  //     responseText,
  //     request,
  //     href,
  //     options,
  //   ) {
  //     if (
  //       document.getElementById("page-agent-runtime_simulator-mask").style
  //         .display === "none"
  //     ) {
  //       pjax._handleResponse(responseText, request, href, options);
  //     } else {
  //       pjax._handleResponse(
  //         responseText,
  //         request,
  //         href + "?task=" + encodeURIComponent(window.pageAgent.task),
  //         options,
  //       );
  //     }
  //   };
  // }

  // 网页智能体
  // let agent;
  //// 初始化智能体
  //   function initAgent() {
  //     agent = new PageAgent({
  //       // model: "deepseek-chat",
  //       // baseURL: "https://api.deepseek.com/v1",
  //       // apiKey: "（待补充）",
  //       language: "zh-CN",
  //       instructions: {
  //         system: `
  // **严格遵循**

  // - 即使用户用其他语言交流，用中文回答
  // - 身份：海助（海塞姆科技有限公司人工智能助手）
  //   - GitHub 用户名：haytham-ai-assistant
  // `,
  //       },
  //     });
  //   }
  function initAgentBtn() {
    document
      .getElementById("haytham-agent")
      .addEventListener("click", function (e) {
        if (
          document.getElementById("page-agent-runtime_agent-panel").style
            .display === "none"
        ) {
          window.pageAgent.panel.show();
          window.pageAgent.panel.expand();
        } else {
          window.pageAgent.panel.hide();
        }
      });
  }

  // 搜索覆盖
  // function initOverrideSearch() {
  //   document
  //     .getElementById("mdbook-searchbar")
  //     .addEventListener("keyup", function (e) {
  //       if (e.key === "Enter") {
  //         // 按下回车键在新标签页用必应搜索，结果仅包含本站
  //         // window.open(
  //         //   "https://cn.bing.com/search?q=" +
  //         //     encodeURIComponent(this.value) +
  //         //     " site:" +
  //         //     location.host,
  //         // );
  //         //location.href='?a=' + encodeURIComponent(this.value);
  //       }
  //     });
  // }

  // 主题监听：切换主题时触发 giscus 重新加载
  function initThemeListener() {
    document
      .getElementById("mdbook-theme-list")
      .addEventListener("click", function (e) {
        SetupGiscus(getCurrentLanguage(), getCurrentTheme());
      });
  }

  // 初始化
  function initialize() {
    initPjax(); //// 初始化 PJAX
    initAgentBtn();
    // initCustomPJAXResponse();
    initTranslate(); //// 初始化页面翻译
    initAni(); //// 初始化加载动画
    SetupGiscus(getCurrentLanguage(), getCurrentTheme()); //// 初始化评论系统
    // initOverrideSearch();
    initThemeListener();
  }

  // 触发器
  //// 网页加载完毕后触发
  window.addEventListener("DOMContentLoaded", () => initialize());
  //// 翻译执行完成后触发
  translate.listener.renderTaskFinish = function () {
    SetupGiscus(getCurrentLanguage(), getCurrentTheme());
  };
  //// Pjax 开始时执行的函数（动画相关）
  document.addEventListener("pjax:send", function () {
    var loadingBarWidth = 20;
    var MAX_LOADING_WIDTH = 95;

    loadingBar.classList.add("loading");
    progress.style.width = loadingBarWidth + "%";

    clearInterval(timer);
    timer = setInterval(function () {
      loadingBarWidth += 3;

      if (loadingBarWidth > MAX_LOADING_WIDTH) {
        loadingBarWidth = MAX_LOADING_WIDTH;
      }

      progress.style.width = loadingBarWidth + "%";
    }, 500);
  });
  //// 监听 Pjax 完成后，重新加载上面的函数
  document.addEventListener("pjax:complete", function () {
    SetupGiscus(getCurrentLanguage(), getCurrentTheme());
    endLoad();
  });
})();
