import Orman from "./Orman.js";
import { db, doc, setDoc  } from './FirebaseInit.js'

Orman.tohumEk("/cok-guzel-bir-orman/docs/iceriklik.json");
await Orman.filizlendir();
Orman.cicekAc();