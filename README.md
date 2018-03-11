# psychological-test-api


## /users
### Sub url
### /
Request type - post;

Body: {};

Response:
```
{
  users: [
    {
      mail: 'example@yandex.ru',
      password: '1',
      birthday: '1997-01-18T21:00:00.000Z',
      id_sexs: 1,
      first_name: 'Alex',
      last_name: 'Korotkov',
      city: 'Мурманск'
    },
    ...
  ]
}
```
### /id
Request type - post;

Body:
~~~
{
  mail: 'example@yandex.ru'
};
~~~

Response:
~~~
{
  users: [
    {
      mail: 'example@yandex.ru',
      password: '1',
      birthday: '1997-01-18T21:00:00.000Z',
      id_sexs: 1,
      first_name: 'Alex',
      last_name: 'Korotkov',
      city: 'Мурманск'
    }
  ]
}
~~~
### /logup
Request type - post;

Body:
~~~
{
  mail: 'example@yandex.ru',
  password: '1',
  birthday: '1997-01-18T21:00:00.000Z',
  id_sexs: 1,
  first_name: 'Alex',
  last_name: 'Korotkov',
  city: 'Мурманск'
};
~~~

Response false when haven't any data:
~~~
{
  message: 'Have not all data',
  isLogup: false
}
~~~

Response false when user is exist:
~~~
{
  message: 'user is exist',
  isLogup: false
}
~~~

Response true when user is logup:
~~~
{
  message: 'user is logup',
  isLogup: true
}
~~~

### /login
Request type - post;

Body:
~~~
{
  mail: 'example@yandex.ru',
  password: '1'
};
~~~

Response when mail and password is exist:
~~~
{
  users: [
    {
      mail: 'example@yandex.ru',
      password: '1',
      birthday: '1997-01-18T21:00:00.000Z',
      id_sexs: 1,
      first_name: 'Alex',
      last_name: 'Korotkov',
      city: 'Мурманск'
    }
  ]
}
~~~

Response empty array when mail or password is not valid:
~~~
{
  users: []
}
~~~

### /sexs
Request type - post;

Body:
~~~
{}
~~~

Response:
~~~
{
  sexs: [
    {
      name: 'Мужской'
    },
    {
      name: 'Женский'
    }
  ]
}
~~~

### /update
Request type - post;

Description:
This is request update password, first_name, last_name, city by mail.

Body:
~~~
{
  mail: 'example@.ru',
  password: '123456',
  first_name: 'Ivan',
  last_name: 'Ivanov',
  city: 'Vladimir'
}
~~~

Response:
~~~
{
  users: 'UPDATE'
}
~~~

## /tests

Sub url

### /
Request type - post;

Body:
~~~
{}
~~~

Response:
~~~
{
  tests: [
    {
      description: 'This is test ...',
      title: 'My family',
      id_group: 1,
      id_tests: 1
    },
    ...
  ]
}
~~~

### /id
Request type - post;

Body:
~~~
{
  id_test: 1
}
~~~

Response:
~~~
{
  tests: [
    {
      description: 'This is test ...',
      title: 'My family',
      id_group: 1,
      id_tests: 1
    }
  ]
}
~~~

## /statistics

Sub url

### /own
Request type - post;

Body:
~~~
{
  id_test: 2,
  mail: 'example@yandex.ru'
}
~~~

Response:
~~~
{
  tests: [
    {
      date: 'This is test ...',
      count_time: 'My family',
      number_point: 1,
      tstitle: 1,
      description: 'bla bla',
      title: 'title'
    },
    ...
  ]
}
~~~

## /results

Sub url

### /add
Request type - post;

Body:
~~~
{
  results: [
    {
      id_answer: 2,
      id_question: 22
    },
    ...
  ],
  statistic: {
    id_test: 2,
    mail: 'example@yandex.ru',
    date: '1997-01-18T21:00:00.000Z',
    number_point: 12,
    count_time: 1234
  }
}
~~~

Response:
~~~
{
  total_options: [
    {
      from_values: 123,
      to_values: 124,
      description: 'Bla'
    }
  ],
  number_point: 123
}
~~~

### /id
Request type - post;

Body:
~~~
{
  mail: 'example@yandex.ru'
}
~~~

Response:
~~~
{
  results: [
    {
      id_answer: 123,
      id_quetion: 124,
      mail: 'Bla',
      id_statistics: 1
    }
  ]
}
~~~

## /questions

Sub url

### /id
Request type - post;

Body:
~~~
{
  id_test: 2
}
~~~

Response:
~~~
{
  results: [
    {
      id_quetion: 124,
      description: 'Bla',
      title: 1,
      weight: 12,
      index_answer: 1,
      index_question: 12
    }
  ]
}
~~~

## /totaloptions

Sub url

### /
Request type - post;

Description:
This is request return array total options.

Body:
~~~
{
  id_tests: 1
}
~~~

Response:
~~~
{
  total_options: [
    {
      from_values: 0,
      to_values: 30,
      description: 'Description ...',
      title: 'Title ...',
    }
  ]
}
~~~
