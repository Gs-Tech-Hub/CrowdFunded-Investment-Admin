# CrowdFunded-Investment-Admin
Admin page for CrowdFunded-Investment

## basic requirement
to install this package you need to have a node version of 20.19.0 and above

## installation
to run this code 
1. git clone the project
2. cd CrowdFunded-Investment-Admin
3. install necessary dependencies by running ```npm install```
4. run the project by running the command ``` npm run dev ```
<br>**note**: the current version of the project is in the admin git branch, to switch to this branch run the command ```git checkout admin```

## folder structure
```plaintext

├── public/           
│   └── image/          # Stores images accessible as static assets
├── src/                # Main source code
│   ├── components/     # Reusable UI components
│   ├── pages/          # Application screens
│   ├── helper-function/ # Reusable utility/helper functions
│   ├── data/           # Static or textual data used in the project
│   ├── context/        # Global state management (React useContext)
│   ├── assets/         # Fonts, styles, SVGs, images, videos
│   ├── AllFiles.jsx    # Centralized imports and exports for easy access to all components and pages from a single file
│   ├── App.jsx         # Root app component
│   └── main.jsx        # Vite entry point, React DOM rendering
├── index.html          # Main HTML template
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies & scripts
└── README.md           # Project documentation

```

## dependencies
1. mui/material: for reusable material ui component
2. @emotion/styled: for styling material ui component
4. tailwind css: for styling html elements
5. react-slick and slick-carousel: for creating slideable image gallery
6. react-router-dom: for navigating different routes in the front end
7. react-lines-ellipsis: for shortening lengthy texts
8. react-spinners: for loading animation
9. react-icons: for icons

