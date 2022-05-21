const settings = {
  "name": "collective-bean",
  "state": {
    "frontity": {
      "url": "https://collectivebean.com/",
      "title": "Collective Bean",
      "description": "Coffee and Cacao exports"
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
            },
            {
              type: "cafes",
              endpoint: "/category/cafes",
              archive: "es/category/cafes"
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

export default settings;
