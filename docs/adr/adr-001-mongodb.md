# ADR 001: Choosing MongoDB as the Primary Database

## Status  
Accepted

## Context  
The project requires storing data submitted through forms, with structures that may vary over time. This flexibility is essential, as business rules can change, and a database is needed that can adapt without requiring major restructuring. Data will be written daily, though not in large volumes. Data reads will be slightly more frequent but not intensive. Given the need for schema flexibility and ease of use, it was important to choose a technology that allows for rapid adaptation.

## Decision  
MongoDB was chosen as the primary database for the project. This decision was based on prior experience with the technology, ease of setting up a local environment using Docker, and the flexible schema it offers. Additionally, its good integration with the Node.js ecosystem was a relevant factor.

## Consequences  
The decision brings immediate benefits, such as eliminating the need to learn a new technology and enabling quick setup of the development environment. Since the queries are simple and do not require complex joins, technical risks are low. There will be no need for data pipelines or integration with relational databases, which reinforces MongoDB’s suitability for the project's scope.

## Alternatives Considered  
Relational databases such as PostgreSQL or MySQL were not evaluated, nor were other NoSQL solutions such as Firebase, CouchDB, or DynamoDB. The decision was based on minimizing the learning curve and ensuring compatibility with the rest of the technology stack, which were considered the most relevant criteria at this stage.

## Date  
2025-05-11

## Authors  
Eduardo Endo
