import express from 'express';
import fs from 'fs';
import https from 'https';
import {IRawGalleryQueryResults} from './extension-types';

const app = express();

const cert = fs.readFileSync('dist/cert.crt');
const key = fs.readFileSync('dist/key.key');

app.post('/extensionquery', (req, res) => {
    const resp: IRawGalleryQueryResults = {
        results: [
            {
                extensions: [{
                    displayName: "Test",
                    extensionId: "ca9e47c0-c841-49f9-a6f4-52ca9016fd61",
                    extensionName: "test",
                    flags: "public",
                    publisher: {
                        displayName: "No one",
                        publisherId: "c41c411f-709e-472a-9196-02a6d84255e9",
                        publisherName: 'no-one'
                    },
                    shortDescription: 'A test extension',
                    statistics: [],
                    versions: [{
                        version: '1.0',
                        lastUpdated: '',
                        assetUri: '',
                        fallbackAssetUri: '',
                        files: []
                    }]
                }],
                resultMetadata: [{
                    metadataItems:[{
                        count: 1,
                        name: 'TotalCount'
                    }],
                    metadataType: 'ResultCount'
                }]
            }
        ]
    };

    res.json(resp);
});

const server = https.createServer({cert, key}, app);

server.listen(3000, () => {
    console.log('Server running on localhost:3000/');
})
