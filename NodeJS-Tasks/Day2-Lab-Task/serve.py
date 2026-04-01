import os
from http.server import SimpleHTTPRequestHandler, HTTPServer

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("CDN-Cache-Control", "no-store")
        super().end_headers()

print("Serving from", os.getcwd(), "on port 8000")
HTTPServer(("0.0.0.0", 8000), NoCacheHandler).serve_forever()
