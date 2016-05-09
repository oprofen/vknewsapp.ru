'use strict';

describe('filters', function () {

  // You need to load modules that you want to test,
  // it loads only the "ng" module by default.
  beforeEach(module('vknewsappruApp'));
  var $filter;
  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_;
  }));
  var result = {
    '-108780288': {
      name: "Business Insider [Eng]"
    },
    '-111856805': {
      name: "betiforexcom.livejournalcom"
    },
    '-120603744': {
      name: "Headphone Commute"
    },
    '-113930908': {
      name: "ElecCafe"
    },
    '-120869122': {
      name: "Душевная Музыка 2016"
    }
    ,
    '347919440': {
      name: "Tim James"
    },
    '146077211': {
      name: "Special J"
    }
    ,
    '172924619': {
      name: "Salomea Ocheretyana"
    }
    ,
    '342172763': {
      name: "Icrowd Newswire"
    }
    ,
    '220753857': {
      name: "Francesco Coco"
    }
  };
  var groups = [
    {
      "id": 108780288,
      "name": "Business Insider [Eng]",
      "screen_name": "business.insider",
      "is_closed": 0,
      "type": "page",
      "photo_50": "http://cs633627.vk.me/v633627545/2aa9/DjEn7GTiTBg.jpg",
      "photo_100": "http://cs633627.vk.me/v633627545/2aa8/bnySOH8_sBI.jpg",
      "photo_200": "http://cs633627.vk.me/v633627545/2aa7/Qvym0uBoQdM.jpg"
    }, {
      "id": 111856805,
      "name": "http://betiforexcom.livejournal.com/",
      "screen_name": "betiforexcom.livejournalcom",
      "is_closed": 0,
      "type": "page",
      "photo_50": "http://cs633918.vk.me/v633918742/ca5a/14BEUnV38AY.jpg",
      "photo_100": "http://cs633918.vk.me/v633918742/ca59/JgqbNoUrBkY.jpg",
      "photo_200": "http://cs633918.vk.me/v633918742/ca58/e_rv5PWG92Q.jpg"
    }, {
      "id": 120603744,
      "name": "Headphone Commute",
      "screen_name": "club120603744",
      "is_closed": 0,
      "type": "page",
      "photo_50": "http://cs629525.vk.me/v629525857/576ea/LOSPePtcbkI.jpg",
      "photo_100": "http://cs629525.vk.me/v629525857/576e9/Rd9l_9yv8tc.jpg",
      "photo_200": "http://cs629525.vk.me/v629525857/576e8/bnhUvpsIQHg.jpg"
    }, {
      "id": 113930908,
      "name": "ElecCafe",
      "screen_name": "eleccafe",
      "is_closed": 0,
      "type": "page",
      "photo_50": "http://cs628028.vk.me/v628028094/35bf7/g4WHhRotrFg.jpg",
      "photo_100": "http://cs628028.vk.me/v628028094/35bf6/HySH2qtvQ3A.jpg",
      "photo_200": "http://cs628028.vk.me/v628028094/35bf5/rBlc6jFQMj8.jpg"
    }, {
      "id": 120869122,
      "name": "Душевная Музыка 2016",
      "screen_name": "club120869122",
      "is_closed": 0,
      "type": "group",
      "photo_50": "http://cs627431.vk.me/v627431108/563cb/-MaVfAKwAwc.jpg",
      "photo_100": "http://cs627431.vk.me/v627431108/563ca/WgYfAorprfQ.jpg",
      "photo_200": "http://cs627431.vk.me/v627431108/563c9/kXXIjV0Xu5Q.jpg"
    }];
  var profiles = [
    {
      "id": 347919440,
      "first_name": "Tim",
      "last_name": "James",
      "sex": 2,
      "screen_name": "alternative_news_network",
      "photo_50": "http://cs628227.vk.me/v628227440/4641e/QCJp8t45qxA.jpg",
      "photo_100": "http://cs628227.vk.me/v628227440/4641d/Waq7CgwGiGY.jpg",
      "online": 1,
      "online_app": "5273936"
    },
    {
      "id": 146077211,
      "first_name": "Special",
      "last_name": "J",
      "sex": 2,
      "screen_name": "id146077211",
      "photo_50": "http://cs629417.vk.me/v629417211/38669/fUcJ2L4p-Ko.jpg",
      "photo_100": "http://cs629417.vk.me/v629417211/38668/7H9PJA07XFo.jpg",
      "online": 1,
      "hidden": 1
    },
    {
      "id": 172924619,
      "first_name": "Salomea",
      "last_name": "Ocheretyana",
      "sex": 1,
      "screen_name": "meya_rita",
      "photo_50": "http://cs633223.vk.me/v633223619/29300/6sYy_zxKYws.jpg",
      "photo_100": "http://cs633223.vk.me/v633223619/292ff/pWpcNSRyCko.jpg",
      "online": 1
    },
    {
      "id": 342172763,
      "first_name": "Icrowd",
      "last_name": "Newswire",
      "sex": 2,
      "screen_name": "icrowdnewswire",
      "photo_50": "http://cs623421.vk.me/v623421763/4d35b/-uVbRlRbbwo.jpg",
      "photo_100": "http://cs623421.vk.me/v623421763/4d35a/iLn8WyS93KM.jpg",
      "online": 0
    },
    {
      "id": 220753857,
      "first_name": "Francesco",
      "last_name": "Coco",
      "sex": 2,
      "screen_name": "francesco.coco",
      "photo_50": "http://cs630130.vk.me/v630130857/bb5/rs77XIOkmt0.jpg",
      "photo_100": "http://cs630130.vk.me/v630130857/bb4/JQ_B0AB41es.jpg",
      "online": 1
    }];


  // inject() is used to inject arguments of all given functions
  it('should reorgonize owners', inject(function (reorgonizeOwnersFilter) {
    expect(reorgonizeOwnersFilter(groups, profiles)).toEqual(result);

  }));

  var attachment_1 = [
    {
      "type": "audio",
      "audio": {
        "id": 456239868,
        "owner_id": 2000221605,
        "artist": "Kaskade ft. Martina of Dragonette",
        "title": "Fire in your new shoes",
        "duration": 206,
        "date": 1462575110,
        "url": "http://cs9-5v4.vk.me/p9/af81bd8b2a9c2b.mp3?extra=aiFlWW9MSO4vNs-uSe2hMcYbtX…2LTSsu6ewhWOXOCgQrDGMZBc6sWq87wnIO3w-dLy-MigH4pxoMno1t1c5SMcvLD8frPBOWwNZw",
        "lyrics_id": 10798889,
        "album_id": 3,
        "genre_id": 5
      }
    }, {
      "type": "audio",
      "audio": {
        "id": 456239670,
        "owner_id": 2000222684,
        "artist": "Lukas Graham",
        "title": "7 Years Old ",
        "duration": 235,
        "date": 1462575110,
        "url": "http://cs9-6v4.vk.me/p24/cfb8cc1a347b96.mp3?extra=F_wONNmigl8xvjpsUxtEYNvTa…9FtsoxmmjWwPlHrrKeK_Mv9HzsTrUefVJX_Qo8a3dUfu5AHGaooFrsOzBV33y3FN81pdA8hCvU",
        "album_id": 3,
        "genre_id": 18
      }
    }
  ];
  it('should reorgonize images 1', inject(function (reorgonizeImagesFilter) {
    expect(reorgonizeImagesFilter(attachment_1)).toEqual([]);

  }));
  var attachment_2 = [
    {
      "type": "photo",
      "photo": {
        "id": 414922011,
        "album_id": -7,
        "owner_id": -66841573,
        "user_id": 100,
        "photo_75": "http://cs630729.vk.me/v630729132/2ad4d/nxnp52LgNvY.jpg",
        "photo_130": "http://cs630729.vk.me/v630729132/2ad4e/NYwM2i-nSNI.jpg",
        "photo_604": "http://cs630729.vk.me/v630729132/2ad4f/596JUEEpV5o.jpg",
        "photo_807": "http://cs630729.vk.me/v630729132/2ad50/iBgXGzskxCs.jpg",
        "photo_1280": "http://cs630729.vk.me/v630729132/2ad51/DAYxxoGTIxE.jpg",
        "width": 1280,
        "height": 848,
        "text": "",
        "date": 1462575083,
        "post_id": 122,
        "access_key": "ce97f3cd3f85fd455f"
      }
    },
    {
      "type": "photo",
      "photo": {
        "id": 414922011,
        "album_id": -7,
        "owner_id": -66841573,
        "user_id": 100,
        "photo_75": "http://cs630729.vk.me/v630729132/2ad4d/nxnp52LgNvY.jpg",
        "photo_130": "http://cs630729.vk.me/v630729132/2ad4e/NYwM2i-nSNI.jpg",
        "photo_604": "http://cs630729.vk.me/v630729132/2ad4f/596JUEEpV5o.jpg",
        "photo_807": "http://cs630729.vk.me/v630729132/2ad50/iBgXGzskxCs.jpg",
        "photo_1280": "http://cs630729.vk.me/v630729132/2ad51/DAYxxoGTIxE.jpg",
        "width": 1280,
        "height": 848,
        "text": "",
        "date": 1462575083,
        "post_id": 122,
        "access_key": "ce97f3cd3f85fd455f"
      }
    }, {
      "type": "audio",
      "audio": {
        "id": 456239032,
        "owner_id": 2000225284,
        "artist": "The Amazing Broken Man",
        "title": "New Year Son",
        "duration": 212,
        "date": 1462575083,
        "url": "http://cs4771.vk.me/u99598135/audios/6c4be4de1172.mp3?extra=MPOuXW3_zS_g4o0…SAczohnlW7k6Bx6iLXMCZZbYSZKHy6el9W63JDCZM9q7BXD4X6CzSrYNkdnoIfz2mswQUjcgTY",
        "genre_id": 21
      }
    }];
  var result_2 = [{id: 0, src: 'http://cs630729.vk.me/v630729132/2ad4f/596JUEEpV5o.jpg'}];
  it('should reorgonize images 2', inject(function (reorgonizeImagesFilter) {
    expect(reorgonizeImagesFilter(attachment_2)).toEqual(result_2);

  }));

  var attachment_3 = [
    {
      "type": "photo",
      "photo": {
        "id": 414922011,
        "album_id": -7,
        "owner_id": -66841573,
        "user_id": 100,
        "photo_75": "http://cs630729.vk.me/v630729132/2ad4d/nxnp52LgNvY.jpg",
        "photo_130": "http://cs630729.vk.me/v630729132/2ad4e/NYwM2i-nSNI.jpg",
        "photo_604": "http://cs630729.vk.me/v630729132/2ad4f/596JUEEpV5o.jpg",
        "photo_807": "http://cs630729.vk.me/v630729132/2ad50/iBgXGzskxCs.jpg",
        "photo_1280": "http://cs630729.vk.me/v630729132/2ad51/DAYxxoGTIxE.jpg",
        "width": 1280,
        "height": 848,
        "text": "",
        "date": 1462575083,
        "post_id": 122,
        "access_key": "ce97f3cd3f85fd455f"
      }
    }, {
      "type": "audio",
      "audio": {
        "id": 456239032,
        "owner_id": 2000225284,
        "artist": "The Amazing Broken Man",
        "title": "New Year Son",
        "duration": 212,
        "date": 1462575083,
        "url": "http://cs4771.vk.me/u99598135/audios/6c4be4de1172.mp3?extra=MPOuXW3_zS_g4o0…SAczohnlW7k6Bx6iLXMCZZbYSZKHy6el9W63JDCZM9q7BXD4X6CzSrYNkdnoIfz2mswQUjcgTY",
        "genre_id": 21
      }
    }];
  var result_3 = [{id: 0, src: 'http://cs630729.vk.me/v630729132/2ad4f/596JUEEpV5o.jpg'}];
  it('should reorgonize images 3', inject(function (reorgonizeImagesFilter) {
    expect(reorgonizeImagesFilter(attachment_3)).toEqual(result_3);

  }));

  var attachment_4 = [{
    "type": "doc",
    "doc": {
      "id": 437474217,
      "owner_id": 109890250,
      "title": "2.png",
      "size": 2589976,
      "ext": "png",
      "url": "http://vk.com/doc109890250_437474217?hash=28bba37d67ffed68e7&dl=146257526573dbd8e93e11b3725d&api=1",
      "date": 1462574856,
      "type": 4,
      "preview": {
        "photo": {
          "sizes": [
            {
              "src": "http://cs615221.vk.me/u109890250/-3/m_88523affe6.jpg",
              "width": 130,
              "height": 74,
              "type": "m"
            }, {
              "src": "http://cs615221.vk.me/u109890250/-3/s_88523affe6.jpg",
              "width": 100,
              "height": 57,
              "type": "s"
            }, {
              "src": "http://cs615221.vk.me/u109890250/-3/x_88523affe6.jpg",
              "width": 604,
              "height": 340,
              "type": "x"
            }, {
              "src": "http://cs615221.vk.me/u109890250/-3/y_88523affe6.jpg",
              "width": 807,
              "height": 454,
              "type": "y"
            }, {
              "src": "http://cs615221.vk.me/u109890250/-3/z_88523affe6.jpg",
              "width": 1280,
              "height": 720,
              "type": "z"
            }, {
              "src": "http://cs615221.vk.me/u109890250/-3/o_88523affe6.jpg",
              "width": 1366,
              "height": 768,
              "type": "o"
            }
          ]
        }
      },
      "access_key": "03a44336c8a4b0c027"
    }
  }];
  var result_4 = [{id: 0, src: 'http://cs615221.vk.me/u109890250/-3/x_88523affe6.jpg'}];
  it('should reorgonize images 4', inject(function (reorgonizeImagesFilter) {
    expect(reorgonizeImagesFilter(attachment_4)).toEqual(result_4);

  }));

  var attachment_5 = [
    {
      "type": "link",
      "link": {
        "url": "http://goo.gl/2M8hej",
        "title": "Stocks Slump Most In 3 Months As Commodities & Credit Crash - crude-oil.top",
        "description": "Crude Oil",
        "photo": {
          "id": 414616810,
          "album_id": -2,
          "owner_id": 2843742,
          "photo_75": "http://cs6062.vk.me/v6062742/198b2/mSbF428xxq0.jpg",
          "photo_130": "http://cs6062.vk.me/v6062742/198b3/S9fUtNdMZu4.jpg",
          "photo_604": "http://cs6062.vk.me/v6062742/198b4/y_VZmcij1VY.jpg",
          "width": 150,
          "height": 100,
          "text": "",
          "date": 1462574732
        }
      }
    },
    {
      "type": "link",
      "link": {
        "url": "http://goo.gl/2M8hej",
        "title": "Stocks Slump Most In 3 Months As Commodities & Credit Crash - crude-oil.top",
        "description": "Crude Oil",
        "photo": {
          "id": 414616810,
          "album_id": -2,
          "owner_id": 2843742,
          "photo_75": "http://cs6062.vk.me/v6062742/198b2/mSbF428xxq0.jpg",
          "photo_130": "http://cs6062.vk.me/v6062742/198b3/S9fUtNdMZu4.jpg",
          "photo_604": "http://cs6062.vk.me/v6062742/198b4/y_VZmcij1VY.jpg",
          "width": 150,
          "height": 100,
          "text": "",
          "date": 1462574732
        }
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414616792,
        "album_id": -5,
        "owner_id": 2843742,
        "photo_75": "http://cs631323.vk.me/v631323742/31cf0/PEUQ-KE1Qz4.jpg",
        "photo_130": "http://cs631323.vk.me/v631323742/31cf1/Ofv1jha1grE.jpg",
        "photo_604": "http://cs631323.vk.me/v631323742/31cf2/tf_ktMz5Wog.jpg",
        "width": 600,
        "height": 400,
        "text": "",
        "date": 1462574717,
        "access_key": "0c648d2a847560ab2b"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414616794,
        "album_id": -5,
        "owner_id": 2843742,
        "photo_75": "http://cs631323.vk.me/v631323742/31cf7/NUDR6EgAw6w.jpg",
        "photo_130": "http://cs631323.vk.me/v631323742/31cf8/ZiItulogzk8.jpg",
        "photo_604": "http://cs631323.vk.me/v631323742/31cf9/BFFr0DW9KWY.jpg",
        "width": 600,
        "height": 301,
        "text": "",
        "date": 1462574718,
        "access_key": "577539b5f6b8082d55"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414616796,
        "album_id": -5,
        "owner_id": 2843742,
        "photo_75": "http://cs631323.vk.me/v631323742/31cfe/j_SCFCJf9JQ.jpg",
        "photo_130": "http://cs631323.vk.me/v631323742/31cff/7e7Gthtye0U.jpg",
        "photo_604": "http://cs631323.vk.me/v631323742/31d00/8jFi2WuLeqo.jpg",
        "width": 600,
        "height": 405,
        "text": "",
        "date": 1462574719,
        "access_key": "5619e9daa46bb7e659"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414616797,
        "album_id": -5,
        "owner_id": 2843742,
        "photo_75": "http://cs631323.vk.me/v631323742/31d05/J3OHCss0NRU.jpg",
        "photo_130": "http://cs631323.vk.me/v631323742/31d06/2cfPimpd_PQ.jpg",
        "photo_604": "http://cs631323.vk.me/v631323742/31d07/MRIHyMB6oJk.jpg",
        "width": 600,
        "height": 419,
        "text": "",
        "date": 1462574720,
        "access_key": "81a538861d2c94b5d9"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414616798,
        "album_id": -5,
        "owner_id": 2843742,
        "photo_75": "http://cs631323.vk.me/v631323742/31d0c/pjjjXI_puVw.jpg",
        "photo_130": "http://cs631323.vk.me/v631323742/31d0d/1pSoD3sQTeA.jpg",
        "photo_604": "http://cs631323.vk.me/v631323742/31d0e/ld6gM5w3zWg.jpg",
        "width": 600,
        "height": 353,
        "text": "",
        "date": 1462574720,
        "access_key": "fbbabca1185e5150b7"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414616799,
        "album_id": -5,
        "owner_id": 2843742,
        "photo_75": "http://cs631323.vk.me/v631323742/31d13/_B1fAs-V0DY.jpg",
        "photo_130": "http://cs631323.vk.me/v631323742/31d14/nb2ZsG287aw.jpg",
        "photo_604": "http://cs631323.vk.me/v631323742/31d15/QaQdWUhpZrA.jpg",
        "width": 600,
        "height": 309,
        "text": "",
        "date": 1462574721,
        "access_key": "7ecac8dc7ec72b8915"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414616800,
        "album_id": -5,
        "owner_id": 2843742,
        "photo_75": "http://cs631323.vk.me/v631323742/31d1a/TCuMUX3bxmw.jpg",
        "photo_130": "http://cs631323.vk.me/v631323742/31d1b/N3_n68Oj2hw.jpg",
        "photo_604": "http://cs631323.vk.me/v631323742/31d1c/Ns37DqMbIMs.jpg",
        "width": 600,
        "height": 339,
        "text": "",
        "date": 1462574722,
        "access_key": "1fdad52a03fad50fd2"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414616801,
        "album_id": -5,
        "owner_id": 2843742,
        "photo_75": "http://cs631323.vk.me/v631323742/31d21/1fcYDzQnM1g.jpg",
        "photo_130": "http://cs631323.vk.me/v631323742/31d22/i6W1d2hsTWk.jpg",
        "photo_604": "http://cs631323.vk.me/v631323742/31d23/9LEbRm-ggvw.jpg",
        "width": 600,
        "height": 300,
        "text": "",
        "date": 1462574723,
        "access_key": "e58caf5d88a16d166d"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414616802,
        "album_id": -5,
        "owner_id": 2843742,
        "photo_75": "http://cs631323.vk.me/v631323742/31d28/7i-uYHZKMFQ.jpg",
        "photo_130": "http://cs631323.vk.me/v631323742/31d29/l_zFQfnak5k.jpg",
        "photo_604": "http://cs631323.vk.me/v631323742/31d2a/l_jiw8J1VM8.jpg",
        "width": 600,
        "height": 337,
        "text": "",
        "date": 1462574724,
        "access_key": "e28824ab5c55ff265d"
      }
    }];
  var result_5 = [
    {id: 0, src: 'http://cs6062.vk.me/v6062742/198b4/y_VZmcij1VY.jpg'},
    {id: 1, src: 'http://cs631323.vk.me/v631323742/31cf2/tf_ktMz5Wog.jpg'},
    {id: 2, src: 'http://cs631323.vk.me/v631323742/31cf9/BFFr0DW9KWY.jpg'},
    {id: 3, src: 'http://cs631323.vk.me/v631323742/31d00/8jFi2WuLeqo.jpg'},
    {id: 4, src: 'http://cs631323.vk.me/v631323742/31d07/MRIHyMB6oJk.jpg'},
    {id: 5, src: 'http://cs631323.vk.me/v631323742/31d0e/ld6gM5w3zWg.jpg'},
    {id: 6, src: 'http://cs631323.vk.me/v631323742/31d15/QaQdWUhpZrA.jpg'},
    {id: 7, src: 'http://cs631323.vk.me/v631323742/31d1c/Ns37DqMbIMs.jpg'},
    {id: 8, src: 'http://cs631323.vk.me/v631323742/31d23/9LEbRm-ggvw.jpg'},
    {id: 9, src: 'http://cs631323.vk.me/v631323742/31d2a/l_jiw8J1VM8.jpg'},
  ];
  it('should reorgonize images 5', inject(function (reorgonizeImagesFilter) {
    expect(reorgonizeImagesFilter(attachment_5)).toEqual(result_5);

  }));
  var attachment_6 = [
    {
      "type": "link",
      "link": {
        "url": "http://nz.ivyrc.com/us-marshals-to-offer-2500-reward-in-amber-alert-case-involving-missing-9-year-old-from-rogersville-tenn-wate/",
        "title": "US Marshals to offer $2,500 reward in Amber Alert case involving missing 9-year-old from Rogersville, Tenn. – WATE | Breaking News",
        "description": ""
      }
    }];
  var result_6 = [];
  it('should reorgonize images 6', inject(function (reorgonizeImagesFilter) {
    expect(reorgonizeImagesFilter(attachment_6)).toEqual(result_6);

  }));
  var attachment_7 = [
    {
      "type": "photo",
      "photo": {
        "id": 413851389,
        "album_id": -7,
        "owner_id": -101731261,
        "user_id": 100,
        "photo_75": "http://cs631226.vk.me/v631226200/28637/bXfz0zB5xfc.jpg",
        "photo_130": "http://cs631226.vk.me/v631226200/28638/jb7J0wtLc3A.jpg",
        "photo_604": "http://cs631226.vk.me/v631226200/28639/YfxqlTJo4to.jpg",
        "width": 604,
        "height": 453,
        "text": "",
        "date": 1462532957,
        "post_id": 6933,
        "access_key": "293fb221d6bbc0f6b5"
      }
    }, {
      "type": "audio",
      "audio": {
        "id": 266115717,
        "owner_id": 2000169122,
        "artist": "Radio Record | Yves V & Felguk",
        "title": "WOW [ZD]",
        "duration": 323,
        "date": 1394252091,
        "url": "http://cs9-3v4.vk.me/p16/1c16054b1f0424.mp3?extra=UNtUQQnrGybLXpzMwDfhUmEZg…pZ9drgjeCw9-ZtuoI9jDWzs8TJJL23RSk3mOhIeGEqwqcBTpmvdC0gYfk9AC_huP1XAbfIdCY8",
        "lyrics_id": 136957671,
        "album_id": 2,
        "genre_id": 18
      }
    }, {
      "type": "audio",
      "audio": {
        "id": 267702128,
        "owner_id": 2000170229,
        "artist": "♥ Fabo feat. Lostcause",
        "title": "Where I Stand (Karmon Remix)",
        "duration": 331,
        "date": 1394252091,
        "url": "http://cs9-11v4.vk.me/p14/89af503a9d57f3.mp3?extra=aSEOLyt96sXRbsSn3BAlZSYE…0WofdM_TJRD3GZzXI2oTQiX9zdYYQjHDcLY9FjkE7Gfc87-RGYwxz7M-kMeAfMs4310a4u6SKQ",
        "album_id": 2,
        "genre_id": 18
      }
    }, {
      "type": "audio",
      "audio": {
        "id": 267069134,
        "owner_id": 2000169882,
        "artist": "Клубная Ночь",
        "title": " Track 1",
        "duration": 195,
        "date": 1394252091,
        "url": "http://cs9-11v4.vk.me/p6/811b2042336ff7.mp3?extra=5YEdIUp7h2vsopVDZMMPrXk_i…8Nymmw0DzgOdx04tFQ3b1ewYwICxwYWu_r5_htZdi8ymSgGxIJerqUW8US-C3ILwn0Gh2N31jI",
        "album_id": 2,
        "genre_id": 18
      }
    }, {
      "type": "audio",
      "audio": {
        "id": 266971305,
        "owner_id": 2000170023,
        "artist": "БПАН",
        "title": "Aroma (Radio Edit)8",
        "duration": 202,
        "date": 1394252091,
        "url": "http://cs9-3v4.vk.me/p17/4b21ed13f27ce3.mp3?extra=iO8TF7SgCJc3R_zEXF3XgS3iR…KsnQQLIlGJAMmN70bB0BJpdrmoE4hZrPpfwWsaUYQBeo98TYuB-hbAycT6RmgL_3wuFAT7BsMc",
        "lyrics_id": 155664807,
        "album_id": 2,
        "genre_id": 18
      }
    }, {
      "type": "audio",
      "audio": {
        "id": 266496803,
        "owner_id": 2000171992,
        "artist": "Andreea Banica  ",
        "title": "Le ri ra     (бпан.рф)",
        "duration": 223,
        "date": 1394252091,
        "url": "http://cs9-10v4.vk.me/p13/9418f6d9e77b3c.mp3?extra=CBfDiDdW3oSv3AodCuVEU48N…DJRdemP8h4Rv28qemeNFh0kxBw4HGLENFMTwuOBcNNxFeI9vu3PQNLsCv4IQZUmWhjHvAXUXV0",
        "lyrics_id": 45831768,
        "album_id": 2,
        "genre_id": 2
      }
    }, {
      "type": "audio",
      "audio": {
        "id": 267508393,
        "owner_id": 2000169362,
        "artist": "Dj Dizi art & Dj Igor Blast",
        "title": " Happy New Year [ZD]",
        "duration": 173,
        "date": 1394252091,
        "url": "http://cs9-15v4.vk.me/p9/b8ce2a9889fea5.mp3?extra=_Q9VX5pcVDbmf3CVFTt5vdGaW…yI8pIydgGkoImjB9t8uxGa_ufni2_bJvPm_YgV9WQp2e7ziz48sCma07ZaBlelNll7w10Cl3Pg",
        "lyrics_id": 136957694,
        "album_id": 2,
        "genre_id": 18
      }
    }, {
      "type": "audio",
      "audio": {
        "id": 272061598,
        "owner_id": 2000172008,
        "artist": "DJ Tiesto feat. Kay",
        "title": "Work Hard, Play Hard (Paris FZ & Simo T Remix)",
        "duration": 307,
        "date": 1394252091,
        "url": "http://cs9-5v4.vk.me/p17/1da596543ce741.mp3?extra=jCkwYnO9NcMPAPGUlugwAkzWL…v64Pb5qGiHotuG3BHH_T4JHLFdI5VEKrToknoUMuF0UUVsk_rWgY5-aSvg0DQfIqX3GdNin1qg",
        "album_id": 2,
        "genre_id": 18
      }
    }];
  var result_7 = [{id: 0, src: 'http://cs631226.vk.me/v631226200/28639/YfxqlTJo4to.jpg'}];
  it('should reorgonize images 7', inject(function (reorgonizeImagesFilter) {
    expect(reorgonizeImagesFilter(attachment_7)).toEqual(result_7);

  }));
  var attachment_8 = [
    {
      "type": "photo",
      "photo": {
        "id": 414063558,
        "album_id": 231269807,
        "owner_id": -51765902,
        "user_id": 100,
        "photo_75": "http://cs633225.vk.me/v633225663/2a8a5/altYqDa073M.jpg",
        "photo_130": "http://cs633225.vk.me/v633225663/2a8a6/E8-JJd18eQg.jpg",
        "photo_604": "http://cs633225.vk.me/v633225663/2a8a7/uucg3UsZflg.jpg",
        "photo_807": "http://cs633225.vk.me/v633225663/2a8a8/WLK_eTHSx9Y.jpg",
        "photo_1280": "http://cs633225.vk.me/v633225663/2a8a9/5KVSm6Atw_8.jpg",
        "photo_2560": "http://cs633225.vk.me/v633225663/2a8aa/A3Ya0sNs2nY.jpg",
        "width": 1000,
        "height": 1177,
        "text": "",
        "date": 1462574457,
        "access_key": "64cb4bd58c4ff41d52"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414063559,
        "album_id": 231269807,
        "owner_id": -51765902,
        "user_id": 100,
        "photo_75": "http://cs633225.vk.me/v633225663/2a8af/dLWh0t9gJ6E.jpg",
        "photo_130": "http://cs633225.vk.me/v633225663/2a8b0/WCJSxdcANYY.jpg",
        "photo_604": "http://cs633225.vk.me/v633225663/2a8b1/vHk2_tMiCGA.jpg",
        "photo_807": "http://cs633225.vk.me/v633225663/2a8b2/yfaatW1PuOA.jpg",
        "photo_1280": "http://cs633225.vk.me/v633225663/2a8b3/Lc09cQ0Vd-U.jpg",
        "width": 960,
        "height": 960,
        "text": "",
        "date": 1462574459,
        "access_key": "048594f4c97881b2e3"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414063560,
        "album_id": 231269807,
        "owner_id": -51765902,
        "user_id": 100,
        "photo_75": "http://cs633225.vk.me/v633225663/2a8b8/GKFOfxHiyF8.jpg",
        "photo_130": "http://cs633225.vk.me/v633225663/2a8b9/IxzQwLw-7ck.jpg",
        "photo_604": "http://cs633225.vk.me/v633225663/2a8ba/9X6WcRuX68g.jpg",
        "photo_807": "http://cs633225.vk.me/v633225663/2a8bb/ysqWcvVVDH4.jpg",
        "photo_1280": "http://cs633225.vk.me/v633225663/2a8bc/REqbt-vr8l0.jpg",
        "photo_2560": "http://cs633225.vk.me/v633225663/2a8bd/KFc-_ov_TIU.jpg",
        "width": 1000,
        "height": 1177,
        "text": "",
        "date": 1462574461,
        "access_key": "a2bd1773cc1ab04a04"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414063561,
        "album_id": 231269807,
        "owner_id": -51765902,
        "user_id": 100,
        "photo_75": "http://cs633225.vk.me/v633225663/2a8c2/D3Q0NZAFr1w.jpg",
        "photo_130": "http://cs633225.vk.me/v633225663/2a8c3/QkuxQ8t3jQo.jpg",
        "photo_604": "http://cs633225.vk.me/v633225663/2a8c4/zsBlTyNeI_8.jpg",
        "photo_807": "http://cs633225.vk.me/v633225663/2a8c5/Plyl93WR8xY.jpg",
        "photo_1280": "http://cs633225.vk.me/v633225663/2a8c6/pyO5U4QXnQo.jpg",
        "width": 960,
        "height": 960,
        "text": "",
        "date": 1462574463,
        "access_key": "255cacc34450b7bdf6"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414063563,
        "album_id": 231269807,
        "owner_id": -51765902,
        "user_id": 100,
        "photo_75": "http://cs633225.vk.me/v633225663/2a8cb/QDcjlJW0LGU.jpg",
        "photo_130": "http://cs633225.vk.me/v633225663/2a8cc/EG5Qa2Xab7Q.jpg",
        "photo_604": "http://cs633225.vk.me/v633225663/2a8cd/FyDCj3n6-as.jpg",
        "photo_807": "http://cs633225.vk.me/v633225663/2a8ce/KnnFO_Vk-P4.jpg",
        "photo_1280": "http://cs633225.vk.me/v633225663/2a8cf/ngyORBMgWzE.jpg",
        "width": 960,
        "height": 680,
        "text": "",
        "date": 1462574465,
        "access_key": "5cc109d2cf323ff3a0"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414063565,
        "album_id": 231269807,
        "owner_id": -51765902,
        "user_id": 100,
        "photo_75": "http://cs633225.vk.me/v633225663/2a8d4/jg5xdTU3kxY.jpg",
        "photo_130": "http://cs633225.vk.me/v633225663/2a8d5/hVN-RIbh9f8.jpg",
        "photo_604": "http://cs633225.vk.me/v633225663/2a8d6/LlBLtiq0p38.jpg",
        "photo_807": "http://cs633225.vk.me/v633225663/2a8d7/Qxv42nBhW44.jpg",
        "photo_1280": "http://cs633225.vk.me/v633225663/2a8d8/MFZ6qtsneWk.jpg",
        "photo_2560": "http://cs633225.vk.me/v633225663/2a8d9/riGSxWa6IxI.jpg",
        "width": 1000,
        "height": 1124,
        "text": "",
        "date": 1462574466,
        "access_key": "d79739b7a7a8eed003"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414063568,
        "album_id": 231269807,
        "owner_id": -51765902,
        "user_id": 100,
        "photo_75": "http://cs633225.vk.me/v633225663/2a8de/GYzi_IoWF5w.jpg",
        "photo_130": "http://cs633225.vk.me/v633225663/2a8df/zzCdv5gOj3E.jpg",
        "photo_604": "http://cs633225.vk.me/v633225663/2a8e0/9iqJCfVyMcU.jpg",
        "photo_807": "http://cs633225.vk.me/v633225663/2a8e1/Xhsx5_dh2wk.jpg",
        "photo_1280": "http://cs633225.vk.me/v633225663/2a8e2/duLh7OL_yJE.jpg",
        "photo_2560": "http://cs633225.vk.me/v633225663/2a8e3/cpCCFMZArFA.jpg",
        "width": 1000,
        "height": 1121,
        "text": "",
        "date": 1462574469,
        "access_key": "17d8e3e157f18538e7"
      }
    }, {
      "type": "photo",
      "photo": {
        "id": 414063569,
        "album_id": 231269807,
        "owner_id": -51765902,
        "user_id": 100,
        "photo_75": "http://cs633225.vk.me/v633225663/2a8e8/JlCZVBnh9_8.jpg",
        "photo_130": "http://cs633225.vk.me/v633225663/2a8e9/epD2faB8fkA.jpg",
        "photo_604": "http://cs633225.vk.me/v633225663/2a8ea/wXTB6uLucM4.jpg",
        "photo_807": "http://cs633225.vk.me/v633225663/2a8eb/2mOctcCHKCc.jpg",
        "width": 800,
        "height": 485,
        "text": "",
        "date": 1462574470,
        "access_key": "002c324887bc84bc1b"
      }
    }, {
      "type": "link",
      "link": {
        "url": "http://www.thisiscolossal.com/2016/05/new-birds-painted-on-pharmaceutical-packaging-by-sara-landeta/",
        "title": "New Birds Painted on Pharmaceutical Packaging by Sara Landeta",
        "description": "Artist Sara Landeta (previously) continues to use the back of used medicine packaging as a canvas for depictions of various birds. The artist most recently created a series of 120 paintings for her exhibition titled \"Medicine as Metaphor\" at gallery 6mas1 last year. From the Jealous Cu"
      }
    }];
  var result_8 = [
    {id: 0, src: 'http://cs633225.vk.me/v633225663/2a8a7/uucg3UsZflg.jpg'},
    {id: 1, src: 'http://cs633225.vk.me/v633225663/2a8b1/vHk2_tMiCGA.jpg'},
    {id: 2, src: 'http://cs633225.vk.me/v633225663/2a8ba/9X6WcRuX68g.jpg'},
    {id: 3, src: 'http://cs633225.vk.me/v633225663/2a8c4/zsBlTyNeI_8.jpg'},
    {id: 4, src: 'http://cs633225.vk.me/v633225663/2a8cd/FyDCj3n6-as.jpg'},
    {id: 5, src: 'http://cs633225.vk.me/v633225663/2a8d6/LlBLtiq0p38.jpg'},
    {id: 6, src: 'http://cs633225.vk.me/v633225663/2a8e0/9iqJCfVyMcU.jpg'},
    {id: 7, src: 'http://cs633225.vk.me/v633225663/2a8ea/wXTB6uLucM4.jpg'}
  ];

  it('should reorgonize images 8', inject(function (reorgonizeImagesFilter) {
    expect(reorgonizeImagesFilter(attachment_8)).toEqual(result_8);

  }));

  var attachment_9 = [{
    "type": "album",
    "album": {
      "id": "157627279",
      "thumb": {
        "id": 310130056,
        "album_id": 157627279,
        "owner_id": 172924619,
        "photo_75": "http://cs308320.vk.me/v308320619/88a9/KCIbilGA554.jpg",
        "photo_130": "http://cs308320.vk.me/v308320619/88aa/aD1NEkkbQ-4.jpg",
        "photo_604": "http://cs308320.vk.me/v308320619/88ab/YWztnpJmfoU.jpg",
        "width": 416,
        "height": 555,
        "text": "Аутфит фабричный на мисаки, брала на маника. \n65 уе",
        "date": 1378575055,
        "access_key": "5954875b9f6c4364d9"
      },
      "owner_id": 172924619,
      "title": "Продажа кукол, аутфитов, аксессуаров",
      "description": "Куклы НРФБ Barbie, Monster High и  Dynamite Girls из личной коллекции. Пост аутфитов, аксессуаров и частей в блоге. Всё подробно на доллплэнэт. Фото те же подробнее на моифото. Пересылка куда угодно, перевод удобным для вас способом.",
      "created": 1337375521,
      "updated": 1462573116,
      "size": 39
    }
  }, {
    "type": "photo",
    "photo": {
      "id": 409738789,
      "album_id": 157627279,
      "owner_id": 172924619,
      "photo_75": "http://cs626228.vk.me/v626228619/7c05/1UjP7jGULhY.jpg",
      "photo_130": "http://cs626228.vk.me/v626228619/7c06/-PrjT_ej8pg.jpg",
      "photo_604": "http://cs626228.vk.me/v626228619/7c07/8Uz_2SAtAUE.jpg",
      "width": 343,
      "height": 294,
      "text": "пару слов от Вас о работе со мной. \nпишем отзывы о покупках, продажах. можно и заказы, пожелания по ассортименту и предложениям.\nс благодарностью, Татьяна.",
      "date": 1461581727,
      "access_key": "2b180017729b8c912f"
    }
  }];
  var result_9 = [
    {id: 0, src: 'http://cs308320.vk.me/v308320619/88ab/YWztnpJmfoU.jpg'},
    {id: 1, src: 'http://cs626228.vk.me/v626228619/7c07/8Uz_2SAtAUE.jpg'}
  ];
  it('should reorgonize images 9', inject(function (reorgonizeImagesFilter) {
    expect(reorgonizeImagesFilter(attachment_9)).toEqual(result_9);

  }));

  var attachment_10 = [{
    "type": "video",
    "video": {
      "id": 456239018,
      "owner_id": 359715302,
      "title": "OFFICIAL: 'Manwa Laage' VIDEO Song | Happy New Year | Shah Rukh Khan | Arijit Singh",
      "duration": 176,
      "description": "Результаты поиска по запросу \"шахрукх кхан в контакте\" в Яндекс.Видео",
      "date": 1462624457,
      "views": 6013,
      "comments": 0,
      "photo_130": "http://cs624721.vk.me/u115162853/video/s_6adbf668.jpg",
      "photo_320": "http://cs624721.vk.me/u115162853/video/l_705c1024.jpg",
      "photo_800": "http://cs624721.vk.me/u115162853/video/x_85ac7f25.jpg",
      "access_key": "71e4fbccdf32b87bae",
      "can_add": 1
    }
  }];
  var result_10 = [
    {id: 0, src: 'http://cs624721.vk.me/u115162853/video/x_85ac7f25.jpg'}
  ];
  it('should reorgonize images 10', inject(function (reorgonizeImagesFilter) {
    expect(reorgonizeImagesFilter(attachment_10)).toEqual(result_10);

  }));
  var attachment_11 = [{
    "type": "photo",
    "photo": {
      "id": 412857326,
      "album_id": -7,
      "owner_id": -94986931,
      "user_id": 100,
      "photo_75": "http://cs633120.vk.me/v633120038/2b865/-HqXH3zC7-E.jpg",
      "photo_130": "http://cs633120.vk.me/v633120038/2b866/1hB3eIFwZtM.jpg",
      "photo_604": "http://cs633120.vk.me/v633120038/2b867/vWcuq6KtDJo.jpg",
      "photo_807": "http://cs633120.vk.me/v633120038/2b868/ieG5HHM86Jg.jpg",
      "photo_1280": "http://cs633120.vk.me/v633120038/2b869/ZnjsXKBZWoc.jpg",
      "width": 683,
      "height": 1024,
      "text": "",
      "date": 1462629039,
      "access_key": "3e258ea34b27e2ff46"
    }
  }, {
    "type": "photo",
    "photo": {
      "id": 412857327,
      "album_id": -7,
      "owner_id": -94986931,
      "user_id": 100,
      "photo_75": "http://cs633120.vk.me/v633120038/2b855/52bwZmec2Mc.jpg",
      "photo_130": "http://cs633120.vk.me/v633120038/2b856/ANKDxVrpFK4.jpg",
      "photo_604": "http://cs633120.vk.me/v633120038/2b857/djpVMwKiP_4.jpg",
      "photo_807": "http://cs633120.vk.me/v633120038/2b858/vbSQsJ3H1Fo.jpg",
      "width": 500,
      "height": 751,
      "text": "",
      "date": 1462629039,
      "access_key": "86e5bb0ec7652acd64"
    }
  }, {
    "type": "photo",
    "photo": {
      "id": 412857328,
      "album_id": -7,
      "owner_id": -94986931,
      "user_id": 100,
      "photo_75": "http://cs633120.vk.me/v633120038/2b86e/ajA8_Ng4Lyg.jpg",
      "photo_130": "http://cs633120.vk.me/v633120038/2b86f/DGFdHSXnj24.jpg",
      "photo_604": "http://cs633120.vk.me/v633120038/2b870/mZ867VTaMJY.jpg",
      "width": 314,
      "height": 475,
      "text": "",
      "date": 1462629039,
      "access_key": "4e48f3e55bab7225b4"
    }
  }, {
    "type": "doc",
    "doc": {
      "id": 437488389,
      "owner_id": 24072038,
      "title": "1-The Winner's Curse - Marie Rutkoski.epub",
      "size": 389574,
      "ext": "epub",
      "url": "http://vk.com/doc24072038_437488389?hash=14674d6fb81f017d64&dl=14626292068058cc874d103a6108&api=1",
      "date": 1462628860,
      "type": 8,
      "access_key": "44202d5161643f7ca2"
    }
  }, {
    "type": "doc",
    "doc": {
      "id": 437488390,
      "owner_id": 24072038,
      "title": "2-The Winner's Crime - Marie Rutkoski.epub",
      "size": 1509149,
      "ext": "epub",
      "url": "http://vk.com/doc24072038_437488390?hash=5988b8e8cbef88170b&dl=146262920632a433a7dc9867647c&api=1",
      "date": 1462628923,
      "type": 8,
      "access_key": "47bb263ee62f8a74b9"
    }
  }, {
    "type": "doc",
    "doc": {
      "id": 437488391,
      "owner_id": 24072038,
      "title": "3-The Winner's Kiss - Marie Rutkoski.epub",
      "size": 2003058,
      "ext": "epub",
      "url": "http://vk.com/doc24072038_437488391?hash=77ca167aa37fe47f72&dl=1462629206f53b3ea8cff4ccd418&api=1",
      "date": 1462629011,
      "type": 8,
      "access_key": "cf60dbf89b6814d55a"
    }
  }];
  var result_11 = [
    {id: 0, src: 'http://cs633120.vk.me/v633120038/2b867/vWcuq6KtDJo.jpg'},
    {id: 1, src: 'http://cs633120.vk.me/v633120038/2b857/djpVMwKiP_4.jpg'},
    {id: 2, src: 'http://cs633120.vk.me/v633120038/2b870/mZ867VTaMJY.jpg'}];
  it('should reorgonize images 11', inject(function (reorgonizeImagesFilter) {
    expect(reorgonizeImagesFilter(attachment_11)).toEqual(result_11);

  }));
  var text_1 = 'Цель \n';
  var text_result_1 = 'Цель <br/>';
  it('should add br tag', function () {
    var newLineStart = $filter('newLineStart');
    var newLineStop = $filter('newLineStop');
    expect(newLineStop(newLineStart(text_1))).toEqual(text_result_1);

  });
  var text_2 = 'Цель проекта: дать возможность заработать людям в интернете, строго ' +
    'новичкам!\nПОДРОБНОСТИ ПО ССЫЛКЕ \r\n\r\nonlinevolonters.blogspot.com\n\nТеги:ставки,прог\r\n';
  var text_result_2 = 'Цель проекта: дать возможность заработать людям в интернете, строго ' +
    'новичкам!<br/>ПОДРОБНОСТИ ПО ССЫЛКЕ <br/>onlinevolonters.blogspot.com<br/>Теги:ставки,прог<br/>';
  it('should add br tag', function () {
    var newLineStart = $filter('newLineStart');
    var newLineStop = $filter('newLineStop');
    expect(newLineStop(newLineStart(text_2))).toEqual(text_result_2);

  });
});

