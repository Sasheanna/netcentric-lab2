# HTTP Methods

## Users

Root URL path: http://localhost:3000/users

### Get

#### Get all users
Parameters: NONE

Request format:

Response: all information of all users currently in the database

#### Get user by id
Parameters: user _id

Request format:

Response format: all information of the specified user
- if the given value is not an ObjectID: returns error that could not cast to ObjectID
- if the given value is an ObjectID that is not in the user database: returns null

### Post

#### Create user
Parameters: NONE

Request format:
- Body
    - FirstName (string)
    - LastName (string)
    - Username (string)
    - Password (string)
    - DOB (date)
    - OrderHistory (array--in general should be empty when creating a new user)

Response format: all information about the user that was created

### Put

#### Update user by id
Parameters: user _id

Request format:

Response format: all updated information of the specified user
- if the given value is not an ObjectID: returns error that could not cast to ObjectID
- if the given value is an ObjectID that is not in the user database: returns null

### Delete

#### Delete user by id
Parameters: user _id

Request format:

Response format: a string saying "User deleted"
- if the given value is not an ObjectID: returns error that could not cast to ObjectID
- if the given value is an ObjectID that is not in the user database: returns null
