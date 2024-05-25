// routes.js

const express = require("express");
const fs = require("fs");
const path = require("path");
const agx_dmu_morning = require("../../Database/AGX_DMU/Final_Routes_AGX_DMU_Morning.json");
const amd_ccu_morning = require("../../Database/AMD_CCU/Final_Routes_AMD_CCU_Morning.json");
const blr_del_morning = require("../../Database/BLR_DEL/Final_Routes_BLR_DEL_Morning.json");
const bom_del_morning = require("../../Database/BOM_DEL/Final_Routes_BOM_DEL_Morning.json");
const ccu_amd_morning = require("../../Database/CCU_AMD/Final_Routes_CCU_AMD_Morning.json");
const ccu_del_morning = require("../../Database/CCU_DEL/Final_Routes_CCU_DEL_Morning.json");
const del_blr_morning = require("../../Database/DEL_BLR/Final_Routes_DEL_BLR_Morning.json");
const del_bom_morning = require("../../Database/DEL_BOM/Final_Routes_DEL_BOM_Morning.json");
const del_ccu_morning = require("../../Database/DEL_CCU/Final_Routes_DEL_CCU_Morning.json");
const dmu_agx_morning = require("../../Database/DMU_AGX/Final_Routes_DMU_AGX_Morning.json");
const router = express.Router();

router.post("/routes_morning", (req, res) => {
  try {
    const { dep_iato, arr_iato } = req.body;
    console.log(dep_iato, arr_iato)
    if(dep_iato == "agx" && arr_iato == "dmu") res.json(agx_dmu_morning);
    if(dep_iato == "amd" && arr_iato == "ccu") res.json(amd_ccu_morning);
    if(dep_iato == "blr" && arr_iato == "del") res.json(blr_del_morning);
    if(dep_iato == "bom" && arr_iato == "del") res.json(bom_del_morning);
    if(dep_iato == "ccu" && arr_iato == "amd") res.json(ccu_amd_morning);
    if(dep_iato == "ccu" && arr_iato == "del") res.json(ccu_del_morning);
    if(dep_iato == "del" && arr_iato == "blr") res.json(del_blr_morning);
    if(dep_iato == "del" && arr_iato == "bom") res.json(del_bom_morning);
    if(dep_iato == "del" && arr_iato == "ccu") res.json(del_ccu_morning);
    if(dep_iato == "dmu" && arr_iato == "agx") res.json(dmu_agx_morning);
  } catch (error) {
    // res.sendStatus(500);
    console.log("Backend error: ", error);
  }
});

module.exports = router;