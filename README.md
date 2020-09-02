Trying to find that Metris

## Architecture

CORs requires a non-browser client request the website information. NGinx or OpenResty seemed more complex than a little Python proxy.

```
[ UI ] -> [API] -> HTTP GET $DEALER_WEBSITE
[ WEBSITE RESULT ] -> [ UI ]
[ UI ] -> SearchResult()
```

* The UI calls the API as a proxy to the DealerWebsite.
* When the results from the dealer website are returned, `regexp` runs against the text

Simple. Lots of potential problem cases but this reduces my morning search from a mess of :coffee: and clicking to a few minutes.

## Building

```
npm install
python -m pip install flask flask-cors requests
```

## Running

```
npm start
python api.py
```
