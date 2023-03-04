// Iteration #1
const mongoose = require('mongoose')
require('dotenv').config();
require("../config/db.config");


const Subject = require("../models/subject.model");
const subjects = [
  { name: "Matemáticas", teacher: ["64033e45cdaee6d6bdfc167e"], students: ["63f0cad8a0ce175d0c63d5a9","63fe4d0ace92a7a5a860610b","640339dbb8137e7fd1268819","64033a7f44601a5324e6988b","64033d00cdaee6d6bdfc166a","64033d4dcdaee6d6bdfc166d","64033d9fcdaee6d6bdfc1673","64033dcccdaee6d6bdfc1676","64033e7ccdaee6d6bdfc1681","64033f71cdaee6d6bdfc169f" ] },
  { name: "Lengua", teacher: ["63f0caa5a0ce175d0c63d5a6"], students: ["63f0cad8a0ce175d0c63d5a9","63fe4d0ace92a7a5a860610b","640339dbb8137e7fd1268819","64033a7f44601a5324e6988b","64033d00cdaee6d6bdfc166a","64033d4dcdaee6d6bdfc166d","64033d9fcdaee6d6bdfc1673","64033dcccdaee6d6bdfc1676","64033e7ccdaee6d6bdfc1681","64033f71cdaee6d6bdfc169f" ] },
  { name: "Ingles", teacher: ["64033960bd8235deca49c5fe"], students: ["63f0cad8a0ce175d0c63d5a9","63fe4d0ace92a7a5a860610b","640339dbb8137e7fd1268819","64033a7f44601a5324e6988b","64033d00cdaee6d6bdfc166a","64033d4dcdaee6d6bdfc166d","64033d9fcdaee6d6bdfc1673","64033dcccdaee6d6bdfc1676","64033e7ccdaee6d6bdfc1681","64033f71cdaee6d6bdfc169f" ] },
  { name: "Biologia", teacher: ["64033edfcdaee6d6bdfc1696"], students: ["63f0cad8a0ce175d0c63d5a9","63fe4d0ace92a7a5a860610b","640339dbb8137e7fd1268819","64033a7f44601a5324e6988b","64033d00cdaee6d6bdfc166a","64033d4dcdaee6d6bdfc166d","64033d9fcdaee6d6bdfc1673","64033dcccdaee6d6bdfc1676","64033e7ccdaee6d6bdfc1681","64033f71cdaee6d6bdfc169f" ] },
  { name: "Música", teacher: ["64033f29cdaee6d6bdfc169c"], students: ["63f0cad8a0ce175d0c63d5a9","63fe4d0ace92a7a5a860610b","640339dbb8137e7fd1268819","64033a7f44601a5324e6988b","64033d00cdaee6d6bdfc166a","64033d4dcdaee6d6bdfc166d","64033d9fcdaee6d6bdfc1673","64033dcccdaee6d6bdfc1676","64033e7ccdaee6d6bdfc1681","64033f71cdaee6d6bdfc169f" ] },
  { name: "Informática", teacher: ["64033c490dfa3ad46cdf5c8c"], students: ["63f0cad8a0ce175d0c63d5a9","63fe4d0ace92a7a5a860610b","640339dbb8137e7fd1268819","64033a7f44601a5324e6988b","64033d00cdaee6d6bdfc166a","64033d4dcdaee6d6bdfc166d","64033d9fcdaee6d6bdfc1673","64033dcccdaee6d6bdfc1676","64033e7ccdaee6d6bdfc1681","64033f71cdaee6d6bdfc169f" ] },
  { name: "Física", teacher: ["64033d77cdaee6d6bdfc1670"], students: ["63f0cad8a0ce175d0c63d5a9","63fe4d0ace92a7a5a860610b","640339dbb8137e7fd1268819","64033a7f44601a5324e6988b","64033d00cdaee6d6bdfc166a","64033d4dcdaee6d6bdfc166d","64033d9fcdaee6d6bdfc1673","64033dcccdaee6d6bdfc1676","64033e7ccdaee6d6bdfc1681","64033f71cdaee6d6bdfc169f" ] },
  { name: "Religión", teacher: ["64033cd7cdaee6d6bdfc1667"], students: ["63f0cad8a0ce175d0c63d5a9","63fe4d0ace92a7a5a860610b","640339dbb8137e7fd1268819","64033a7f44601a5324e6988b","64033d00cdaee6d6bdfc166a","64033d4dcdaee6d6bdfc166d","64033d9fcdaee6d6bdfc1673","64033dcccdaee6d6bdfc1676","64033e7ccdaee6d6bdfc1681","64033f71cdaee6d6bdfc169f" ] },
  { name: "Química", teacher: ["64033e08cdaee6d6bdfc1679"], students: ["63f0cad8a0ce175d0c63d5a9","63fe4d0ace92a7a5a860610b","640339dbb8137e7fd1268819","64033a7f44601a5324e6988b","64033d00cdaee6d6bdfc166a","64033d4dcdaee6d6bdfc166d","64033d9fcdaee6d6bdfc1673","64033dcccdaee6d6bdfc1676","64033e7ccdaee6d6bdfc1681","64033f71cdaee6d6bdfc169f" ] },
  { name: "Deporte", teacher: ["64033ea9cdaee6d6bdfc1684"], students: ["63f0cad8a0ce175d0c63d5a9","63fe4d0ace92a7a5a860610b","640339dbb8137e7fd1268819","64033a7f44601a5324e6988b","64033d00cdaee6d6bdfc166a","64033d4dcdaee6d6bdfc166d","64033d9fcdaee6d6bdfc1673","64033dcccdaee6d6bdfc1676","64033e7ccdaee6d6bdfc1681","64033f71cdaee6d6bdfc169f" ] },
];

Subject.create(subjects).then(() => {
  console.log("Subjects Created");
});

