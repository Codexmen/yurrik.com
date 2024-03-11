---
title: Top 7 Zero configuration Mock REST API services
description: Top 7 Zero configuration Mock REST API services
summary: Exprore top 7 Zero configuration Mock REST API services and what features they offer
length: 6 minutes read
date: 10-03-2024
author: Yurii Kovalenko
order: 5
head:
  meta:
    - name: 'author'
      content: 'Yurii Kovalenko'
    - name: 'keywords'
      content: 'javascript, rest api, mock rest api, rest api mock services, free rest api, rest api testing, rest api development, rest api design, rest api documentation, rest api tools'
---
In this article, I am going to examine zero-configuration services that provide a REST API.

Usually, services like these provide you with a base URL and one or more collections of entities such as users, posts, or products.

A significant number of people opt to use services such as these for rapid prototyping. This practice is particularly prevalent when they are in the process of learning a new framework or exploring the functionalities of various libraries. This strategy allows them to quickly test and iterate their ideas, accelerating their learning process and providing them with the opportunity to readily apply their newly acquired knowledge. In addition, it allows them to experiment freely without having to commit to a specific design or framework from the beginning.

I confidently utilized these services when mastering React and React data fetching libraries. The essential aspect was that I needed some mock data from the "backend", regardless of the nature of the data.

By "zero configuration", I mean that there is no need to sign into a service or download any source code or application. You simply have a URL and parameters that you can use anywhere and at any time.

I've added a few criteria and properties that I'm looking for in these services:

- Number of collections.
- Relationships between collections.
- Support for pagination, filtering, sorting.
- Simulation of adding, editing, deleting new items.
- Emulation of authentication.
- Delay for response support.

All services listed below already meet the following criteria:

- Free and do not require registration.
- Support HTTPS.
- Do not require any downloads or configuration.

So let's start exploring what services are available right now.

I'm not going to describe how to use each service, but instead, I'll compare these services for you. I hope this helps you decide which mock REST API service to choose for your next prototyping or learning project.

## **{JSON} Placeholder**

[Documentation](https://jsonplaceholder.typicode.com/){target="_blank"}

I believe this is the most popular and easiest service to start with. This service has a few linked collections — posts, comments, albums, photos, todos, users.
The documentation is very limited and doesn't contain much information. I found some query parameters only in GitHub issues. It doesn't provide any information about data schemas and relations.

Below is a table with features that this service has.
||   |
|------------------------------|-----|
| Amount of collections        | 6   |
| Relation between collections:   |   ✅ Yes |
| Pagination                   | ✅ Yes |
| Filtering                    | ✅ Yes |
| Sorting                      | ❌ No  |
| Simulating edit, add, delete | ✅ Yes |
| Simulating auth              | ❌ No  |
| Delay for response           | ❌ No  |

## Random User Generator

[Documentation](https://randomuser.me/){target="_blank"}

As indicated by the service name, this is a service solely for mocking users. The response contains a large schema for the user, so you can select only the fields relevant to you. Each response contains random users, but you can control this by passing a seed parameter into the request URL. You can specify a list of fields that you want in the response or those you want to exclude. It also supports additional parameters for random generation, such as specifying gender, password, or nationality. Please refer to the documentation page.

Below is a table with features that this service has.

|                              |       |
|------------------------------|-------|
| Amount of collections        | 1     |
| Relation between collections | ❌ No  |
| Pagination                   | ✅ Yes |
| Filtering                    | ✅ Yes |
| Sorting                      | ❌ No  |
| Simulating edit, add, delete | ❌ No  |
| Simulating auth              | ❌ No  |
| Delay for response           | ❌ No  |

## DummyJSON

[Documentation](https://dummyjson.com/docs){target="_blank"}

DummyJSON has pretty big collection of different entities for mocking like products, cards, recipes, users, posts, comments, todos, quotes. Also contain endpoints for auth and delay responses. Best choice if you prototyping e-commerce project.

For some entities there is possibility to emulate edit, delete and add new items.

|                              |       |
|------------------------------|-------|
| Amount of collections        | ✅ Yes |
| Relation between collections | ✅ Yes |
| Pagination                   | ✅ Yes |
| Filtering                    | ✅ Yes |
| Sorting                      | ❌ No  |
| Simulating edit, add, delete | ✅ Yes |
| Simulating auth              | ✅ Yes |
| Delay for response           | ✅ Yes |

## **Fake Store API**

[Documentation](https://fakestoreapi.com/){target="_blank"}

This service focuses on mocking entities also related to e-commerce like products, card and users.

|                              |       |
|------------------------------|-------|
| Amount of collections        | 3     |
| Relation between collections | ✅ Yes |
| Pagination                   | ✅ Yes |
| Filtering                    | ❌ No  |
| Sorting                      | ✅ Yes |
| Simulating edit, add, delete | ✅ Yes |
| Simulating auth              | ✅ Yes |
| Delay for response           | ❌ No  |

## **SWAPI -** The Star Wars API

[Documentation](https://swapi.tech/){target="_blank"}

Not usual mocking service that contains collection related to Star Wars universe like, films, planets, characters, vehicles, species, starships.

|                              |       |
|------------------------------|-------|
| Amount of collections        | 6     |
| Relation between collections | ✅ Yes |
| Pagination                   | ✅ Yes |
| Filtering                    | ✅ Yes |
| Sorting                      | ❌ No  |
| Simulating edit, add, delete | ❌ No  |
| Simulating auth              | ❌ No  |
| Delay for response           | ❌ No  |

## **Cat Facts API**

[Documentation](https://catfact.ninja/){target="_blank"}

A pretty small mock API services that contains 2 endpoints that returns cat breeds and facts about cats

|                              |       |
|------------------------------|-------|
| Amount of collections        | 2     |
| Relation between collections | ❌  No |
| Pagination                   | ✅ Yes |
| Filtering                    | ❌ No  |
| Sorting                      | ❌  No |
| Simulating edit, add, delete | ❌  No |
| Simulating auth              | ❌  No |
| Delay for response           | ❌  No |

## **REST Countries**

[Documentation](https://restcountries.com/#rest-countries){target="_blank"}

Small mock API service that have collection of countries with comprehensive list of fields.

Supports filtering and searching by fields and white-listing fields returned from API.

|                              |       |
|------------------------------|-------|
| Amount of collections        | 1     |
| Relation between collections | ❌  No |
| Pagination                   | ❌  No |
| Filtering                    | ✅ Yes |
| Sorting                      | ❌  No |
| Simulating edit, add, delete | ❌  No |
| Simulating auth              | ❌  No |
| Delay for response           | ❌  No |

## Conclusion

In this article, I have summarized the most popular completely free mock API services that you could use for the learning process. They support different features, so choose one that fits exactly for your case.

Additionally, there is a list of services that allow you to configure schemas, endpoints, and your responses, but they require more configuration. Let's overview them next time.

