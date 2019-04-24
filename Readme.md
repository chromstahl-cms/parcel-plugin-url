# parcel-plugin-url

Adds the possibillty to set a url for reaching e.g. an api differently in prod and dev environments

## How to use

- run npm i -D @kloudsoftware/parcel-plugin-url
- create an `api.json` file:
```json
{
  "url": {
    "prod": "Production url here",
    "dev": "Dev url here"
  }
}
```

- run your parcel as normal
- when run with `build`, parcel will use the prod url, otherwise the dev url
- you can bypass the config file with the `CHROMSTAHL_URL` environment variable
