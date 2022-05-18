const settings = [
  {
  "name": "collective-bean",
  "match": [".*https://test.collectivebean.com(\/.*)?$"],
  "state": {
    "frontity": {
      "url": "https://test.collectivebean.com/",
      "title": "Collective Bean",
      "description": "A site of collectives"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "lang": "en",
          "menu": [],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wordpress.collectivebean.com/",
          "homepage": "home",
          "postTypes": [
            {
              type: "coffee-bean",
              endpoint: "coffee-beans",
              archive: "/coffee-beans"
            },
            {
              type: "cocoa-bean",
              endpoint: "cocoa-beans",
              archive: "/cocoa-beans"
            }
          ],
          "taxonomies": [
            {
              taxonomy: "region",
              endpoint: "region",
              postTypeEndpoint: "coffee-beans",
              params: {
                per_page: 5,
                _embed: true
              },
            },
            {
              taxonomy: "region",
              endpoint: "region",
              postTypeEndpoint: "cocoa-beans",
              params: {
                per_page: 5,
                _embed: true
              },
            },
            {
              taxonomy: "lote_type",
              endpoint: "lote_type",
              postTypeEndpoint: "coffee-beans",
              params: {
                per_page: 5,
                _embed: true
              },
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
  },
  {
    "name": "collective-bean-es",
    "match": [".*https://test.collectivebean.com\/es(\/.*)?$"],
    "state": {
      "frontity": {
        "url": "https://test.collectivebean.com/es",
        "title": "Collective Bean",
        "description": "A site of collectives"
      }
    },
    "packages": [
      {
        "name": "@frontity/mars-theme",
        "state": {
          "theme": {
            "lang": "es",
            "menu": [],
            "featured": {
              "showOnList": false,
              "showOnPost": false
            }
          }
        }
      },
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "url": "https://wordpress.collectivebean.com/es/",
            "homepage": "es",
            "postsPage": "coming-soon",
            "postTypes": [
              {
                type: "coffee-bean",
                endpoint: "coffee-beans",
                archive: "/coffee-beans"
              },
              {
                type: "cocoa-bean",
                endpoint: "cocoa-beans",
                archive: "/cocoa-beans"
              }
            ],
            "taxonomies": [
              {
                taxonomy: "region",
                endpoint: "region",
                postTypeEndpoint: "coffee-beans",
                params: {
                  per_page: 5,
                  _embed: true
                },
              },
              {
                taxonomy: "region",
                endpoint: "region",
                postTypeEndpoint: "cocoa-beans",
                params: {
                  per_page: 5,
                  _embed: true
                },
              },
              {
                taxonomy: "lote_type",
                endpoint: "lote_type",
                postTypeEndpoint: "coffee-beans",
                params: {
                  per_page: 5,
                  _embed: true
                },
              }
            ]
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react"
    ]
    }
];

export default settings;
