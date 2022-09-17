# Kolay - Front-end Developer Challenge

## Information

Your challenge is to create a simple SPA that has a dashboard, employee list, and employee page.

You should use Angular for this task. You also have complete control over which packages you use to do things like make HTTP requests your project. 

- Using the new features of ECMAScript standards is a plus for us.
- You should use routing for every page.
- Eeach page should separated from each other.
- Use lazy loading feature.
- Use Typescript.
- You should use SCSS as a CSS preprocessor.
- We provide the data in a local files, so use that to populate the content. 
- Write tests.
- You can use any icon library for the icons (Font awesome, icomoon, ionicon)
- Responsive (Optional)

Your users should be able to:

- Dashboard
  - Create employee distribution widget
    - You can use any chart library to visualisation data.
    - You can calculate how many people are in which departments with employee list json file.
  - Create public holiday widgets
  - Widgets should be drag and drop feature.
- Employee List
  - Create employee list page with letter avatar. Letter avatar rules are:
    - The letter avatars must be two letters
    - The first letter will be 1st letter of the name 
    - The last letter will be 1st letter of the last name
    - We have 9 different shading color in figma file which will be use for each letter
    - Items with the same letters should not be the same color (For example, we have two DD letters and these two letters should not have the same color) 
  - Search for an employee using an input field
  - Click on an employee to see more detailed information on a separate page
- Employee Detail
  - Create Employee Detail Page

Want some more support on the challenge? Do not hesitate to contact us.

## Figma File

https://www.figma.com/file/UvbGFsNM7T34YqAkHQR21I/Front-end_Challange?node-id=2%3A1621


## Dashboard / Public Holidays

```javascript
[
  {
    id: 1,
    name: "Yılbaşı",
    date: "2021/01/01"
  },
  {
    id: 2,
    name: "Ulusal Egemenlik ve Çocuk Bayramı",
    date: "2021/04/23"
  },
  {
    id: 3,
    name: "Emek ve Dayanışma Günü",
    date: "2021/05/01"
  },
  {
    id: 4,
    name: "Atatürk' ü Anma Gençlik ve Spor Bayramı",
    date: "2021/05/19"
  }
]
```

## Location

```javascript
[
  {
    id: 1,
    name: "İstanbul"
  },
  {
    id: 2,
    name: "Ankara"
  },
  {
    id: 3,
    name: "İzmir"
  }
]
```


## Department

```javascript
[
  {
    id: 1,
    name: "Development"
  },
  {
    id: 2,
    name: "Product"
  },
  {
    id: 3,
    name: "Growth"
  },
  {
    id: 4,
    name: "Marketing"
  }
]
```

## Employee List

```javascript
[
  {
    id: 978543,
    firstName: "Doğan",
    lastName: "Dipcin",
    email: "dogan@kolayhr.com",
    phone: "545 710 34 44",
    position: "Software Developer",
    locationId: 1,
    departmentId: 2,
    startDate: "2020/12/12"
  },
  {
    id: 243534,
    firstName: "Büşra",
    lastName: "Gümüşel",
    email: "busra@kolayhr.com",
    phone: "505 423 85 10",
    position: "Sn. Software Developer",
    locationId: 1,
    departmentId: 1,
    startDate: "2018/02/10"
  },
  {
    id: 982324,
    firstName: "Gizem",
    lastName: "Sevinç",
    email: "gizem@kolayhr.com",
    phone: "505 423 85 10",
    position: "Sn. Backend Developer",
    locationId: 1,
    departmentId: 3,
    startDate: "2010/03/04"
  },
  {
    id: 645664,
    firstName: "Andrea",
    lastName: "Buran",
    email: "andrea@kolayhr.com",
    phone: "503 461 23 92",
    position: "Head of Development Team",
    locationId: 2,
    departmentId: 3,
    startDate: "2015/12/01"
  },
  {
    id: 312398,
    firstName: "Ufukcan",
    lastName: "Erdur",
    email: "ufukcan@kolayhr.com",
    phone: "555 673 43 34",
    position: "Product Manager",
    locationId: 3,
    departmentId: 3,
    startDate: "2013/06/01"
  },
  {
    id: 945234,
    firstName: "Tunca",
    lastName: "Üçer",
    email: "tunca@kolayhr.com",
    phone: "545 932 63 30",
    position: "Sales Manager",
    locationId: 3,
    departmentId: 2,
    startDate: "2019/09/11"
  },
  {
    id: 122395,
    firstName: "Ezgi",
    lastName: "Kar",
    email: "ezgi@kolayhr.com",
    phone: "545 734 56 33",
    position: "Journalist",
    locationId: 1,
    departmentId: 4,
    startDate: "2012/02/19"
  },
  {
    id: 528293,
    firstName: "Dilara",
    lastName: "Gözübüyük",
    email: "dilara@kolayhr.com",
    phone: "544 210 64 94",
    position: "Astrophysics",
    locationId: 1,
    departmentId: 2,
    startDate: "2011/11/30"
  },
  {
    id: 696432,
    firstName: "Erbil",
    lastName: "Şilik",
    email: "erbil@kolayhr.com",
    phone: "534 140 56 74",
    position: "Creative Director",
    locationId: 2,
    departmentId: 4,
    startDate: "2019/04/03"
  },
  {
    id: 595974,
    firstName: "Deniz",
    lastName: "Diyarlı",
    email: "deniz@kolayhr.com",
    phone: "544 877 54 54",
    position: "HR Manager",
    locationId: 3,
    departmentId: 1,
    startDate: "2014/08/25"
  },
  {
    id: 713455,
    firstName: "Emre",
    lastName: "Kardan",
    email: "emre@kolayhr.com",
    phone: "555 307 12 38",
    position: "Product Manager",
    locationId: 2,
    departmentId: 1,
    startDate: "2019/04/03"
  },
  {
    id: 554923,
    firstName: "Ahmet",
    lastName: "Baran",
    email: "ahmet@kolayhr.com",
    phone: "545 376 23 84",
    position: "Product Manager",
    locationId: 1,
    departmentId: 2,
    startDate: "2013/09/08"
  },
];
```

###Your code will be evaluated by:

- Framework domination,
- Structure,
- Commit messaging,
- Documentation

_When you're done send us a Pull Request_
