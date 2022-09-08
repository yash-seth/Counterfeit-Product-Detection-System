# Counterfeit Product Detection System
## The Idea
A Blockchain-Based solution to help users check if a product is real or counterfeit. The idea revolves around having an embedded unique identifier 
on every product the company manufactures. The identifier can be embedded using any of the following - QR Code, NFC, Hologram. These products will be embedded with
the identifier and some meta-data such as the timestamp of manufacturing, location etc during the manufacturing process and will be added to the companies product 
blockchain. The user can then, using an appropriate scanner (potential to be app-based), can see if the product is genuine and present on the companies blockchain. 
This way, if the product is counterfeit, it would show that it isn't present on the companies product blockchain, and thus the user will be able to identify that it 
isn't genuine.


## About
Consists of a React frontend which comprises of a scanner (QR Code/NFC/Hologram) which will scan the embedded unique identifier present on the product
and then check if the product is present on the companies product blockchain using the scanned identifier. The plan for the backend is to receive the scanned input from
the front-end and check if the product is present on the specified blockchain such as Polygon. The app files are planned to be stored on hossted using decentralized storage on the crust platform. 

## Origin
The idea and product were developed as part of the HacKnight Hackathon organized by HackClub VITC in association with Crust and polygon.

## Frontend Demo
https://yash-seth.github.io/Counterfeit-Product-Detection-System-Frontend/
