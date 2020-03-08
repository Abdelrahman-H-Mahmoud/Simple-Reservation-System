# Simple Reservation System

Trivago Task.

## Requirements
- npm
- node > 10
## Installation


```sh
docker-compose up --build
```

## Endpoints

### Get Users
----
  Returns JSON data about All users.

* **URL**

  /api/users

* **Method:**

  `GET`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ```{data:[{ id: 1, name: 'Abdo', role: 'USER', bonus: 100 }]}```

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "You are unauthorized to make this request." }`


### Get Rooms
----
  Returns JSON data about All Rooms.

* **URL**

  /api/rooms

* **Method:**

  `GET`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{data:[{ name: 'Economy Single Room', available_amount: 10, required_points: 10 }]}`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "You are unauthorized to make this request." }`

### Reserve Room
----
  Returns JSON data about All Rooms.

* **URL**

  /api/rooms/reserve

* **Method:**

  `POST`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{message:"OK", room_status:"[PENDING || APPROVED]"}`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "You are unauthorized to make this request." }`


## Notes
- API Gateway adds an authorization header with a secret key for each request and I am checking on this header in each microservice.
- You can't access any microservice directly it will return 401, the request should be made through the API Gateway

## assumption
Based on my understanding from the requirements:
   - There are 3 microservices [api gateway, users, rooms]
   - the client can book 1 room per 1 user per request

## Enhancements 
- More test cases.
- Built Health check for each microservice.
- Configure away for each microservice to register itself in an automatic way in the API Gateway.