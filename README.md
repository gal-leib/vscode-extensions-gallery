# vscode-extensions-gallery
A Visual Studio Code extensions service.

In order to use you need to open the product.json file inside VSCode installation
and edit extensionsGallery so its serviceUrl looks like this: 
```
"serviceUrl": "https://localhost:3000",
```

For now, this requires having self-signed certificates for 'localhost'.
You can generate them like this:

```
openssl req -x509 -out dist/cert.crt -keyout dist/key.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```