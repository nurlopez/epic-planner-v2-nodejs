PROJECT 2

# EPIC PLANNER

### Description

**Main elements**

Epic planner is a urban micro-planner that allows you to create a legendary route in Barcelona on a specific day and area.  Its features include an array of leisure options located in the desired area: concerts, cultural events, cafes and bars, with links to [MeetUp](https://meetup.com) event pages for more information.   

----

*EPIC Planner generates a map with all the stops including starting times, duration and time needed to get to each place.* 



## User Stories

- **ERROR PAGES**
  - **404** - page doesn’t exist 
  - **500** - programming error
- **home page - no cookie**
  - log in
  - sign up
  - log out redirects here.
- **home page - with cookie**
  - main user page with saved day plan(s)
  - edit plan options (edit name field, delete event, add event button, create new plan button)
  - profile edit button
- **edit user profile** change: avatar, location, interest keywords.
- **search page**
  - FIELDS:
    - day name
    - date 
    - location
    - leisure filter options: bar, concert, culture, cafe, club
    - results display
  - MORE INFO button (in results list)
- **event / place card**  displays details of event / place ( name, location, description, times, duration, fee)
- **Map page**  displays route of events and timings. 

## 

## API Routes (Back-end):

| **Method** | **Route**               | **Description**                                              | Request  - Body                                              |
| ---------- | ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `GET`      | `/`                     | Main page route.  Renders home `day-plan` view                  |                                                              |
| `GET`      | `/login`                | Renders `login` form in `signin` view.                                   |                                                              |
| `POST`     | `/login`                | Sends `login` form data to the server.                         | { email, password }                                          |
| `GET`      | `/signup`               | Renders `signup` form `signin` view.                                |                                                              |
| `POST`     | `/signup`               | Sends `Sign Up` info to the server and creates user in the DB. | {  email, password  }                                        |
| `GET`      | `/private/day-main`         | *Private route*. Render the `day-plan` view.                 |                                                              |
|            |                         |                                                              |                                                              |
| `GET`      | `/private/edit-profile` | *Private route*. Renders `edit-profile` form view.           |                                                              |
| `PUT`      | `/private/edit-profile` | *Private route*. Sends edit-profile info to server and updates user in DB. | { email, password, userName], location, avatarUrl, [keyWords] } |
| `POST`     | `/private/select-events/`      | *Private route*. Renders `event-list`.                       | { date, location, activity type }                            |
| `GET`      | `/:eventid`             | *Private route*. Render `event-card` view for the particular event/place. |                                                              |
| `DELETE`   | `/private/:eventId`     | *Private route*. Deletes `event` from `day-plan`.            |                                                              |

## 

## Models

**User** model

```js
{
  userID: String,
  name: String,
  email: String,
  password: String,
  location: [String],
  keywords: [Strings],
  dayPlan: [Obj]
}
```

**Event** model

```js
{
  eventId: String,
  fullAddress: [String], 
  location: String,
  date: date,
  time: date,
  duration: String,
  price: String,
  category: String,
  coordinates: {floatX,floatY}main`
  meetupLink: URL
  
}
```

**Place** model

```js
{
  placeId: String,
  fullAddress: [String], 
  location: String,
  category: String,
  openingSchedule: [String]
  coordinates: {floatX,floatY}
  webLink: URL
}
```



## Backlog

[See the Trello board.](https://trello.com/b/pawm0XYn)



## Links

### Git

[Repository Link](https://github.com/Johanson1988/epic-planner/)

[Deploy Link]()



### Slides

[Slides Link]()
