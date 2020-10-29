# API DOCUMENTATION

## User Routes

### Route
``GET /api/users/:id``
### Returns
```javascript
{
  firstName,
  lastName,
  avatar,
  createdAt,
  Shops: [
    {
      id,
      name,
      ownerId,
      description,
      createdAt,
      updatedAt
    },
    ...
  ],
  Favorites: [
    {
      id,
      userId,
      favProduct, // boolean: true if product, false if shop
      shopId, // can be null
      productId, // can be null
      createdAt,
      updatedAt,
      Shop: // can be null
      {
        id,
        name,
        ownerId,
        description, // can be null
        createdAt,
        updatedAt
      },
      Product: // can be null
      {
        id,
        name,
        price,
        images,
        description,
        options, // can be null
        inventory,
        shopId,
        createdAt,
        updatedAt
      }
    },
    ...
  ],
  Follower: [
    {
      id,
      followerId,
      followingId,
      createdAt,
      updatedAt
    },
    ...
  ],
  Following: [
    {
      id,
      followerId,
      followingId,
      createdAt,
      updatedAt
    },
    ...
  ]
}
```

### Route
``POST /api/users``
### Returns
```
{
  token,
  newUser: {
    firstName,
    lastName,
    email,
    createdAt
  }
}
```

### Route
``POST /api/users/token``
### Returns
```
{
  token,
  user: {
    id,
    firstName,
    lastName,
    email,
    hashedPassword, // always null

  }
}
```

## Follow Routes


## Shop Routes


## Product Routes


## Favorite Routes


## Order Routes


## Review Routes
