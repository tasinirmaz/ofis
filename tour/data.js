var APP_DATA = {
  "scenes": [
    {
      "id": "0-karakaya",
      "name": "karakaya",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1821936445106438,
        "pitch": 0.3556540610571126,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.1757219636188605,
          "pitch": 0.5491282937901971,
          "rotation": 0,
          "target": "1-kayack"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8193059419904483,
          "pitch": 0.33285464251583896,
          "title": "Salon",
          "text": "6,5M - 4M (26M²)"
        }
      ]
    },
    {
      "id": "1-kayack",
      "name": "kayacık",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2862463929206278,
        "pitch": 0.6931549157156507,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.2862463929206278,
          "pitch": 0.6931549157156507,
          "rotation": 0,
          "target": "0-karakaya"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6493463031220585,
          "pitch": 0.565619960767636,
          "title": "Mutfak",
          "text": "4M - 3M (12M²)"
        }
      ]
    }
  ],
  "name": "bahcelievler_tekniklise_160_1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
