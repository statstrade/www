module.exports = {
  "mode":"jit",
  "content":["./src/**/*.{js,ts,jsx,tsx}"],
    
  theme: {
    fontFamily: {
      sans: [
        'Lato',
        'sans-serif',
      ],
    },
  },
  "daisyui":{
    "styled":true,
    "rtl":false,
    "themes":[
      {
      "statstrade":{
        "success":"#38e8b6",
        "base-100":"#171212",
        "neutral":"#110E0E",
        "warning":"#FBBD23",
        "secondary":"#5f4abd",
        "info":"#aa97fc",
        "error":"#F87272",
        "primary":"#38e8b6",
        "accent":"#aaaae0"
      }
    }
    ]
  },
  "plugins":[require("daisyui")]
}
