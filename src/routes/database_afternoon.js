// routes.js

const express = require("express");
const fs = require("fs");
const path = require("path");
const agx_dmu_afternoon = require("../../Database/AGX_DMU/Final_Routes_AGX_DMU_Afternoon.json");
const amd_ccu_afternoon = require("../../Database/AMD_CCU/Final_Routes_AMD_CCU_Afternoon.json");
const blr_del_afternoon = require("../../Database/BLR_DEL/Final_Routes_BLR_DEL_Afternoon.json");
const bom_del_afternoon = require("../../Database/BOM_DEL/Final_Routes_BOM_DEL_Afternoon.json");
const ccu_amd_afternoon = require("../../Database/CCU_AMD/Final_Routes_CCU_AMD_Afternoon.json");
const ccu_del_afternoon = require("../../Database/CCU_DEL/Final_Routes_CCU_DEL_Afternoon.json");
const del_blr_afternoon = require("../../Database/DEL_BLR/Final_Routes_DEL_BLR_Afternoon.json");
const del_bom_afternoon = require("../../Database/DEL_BOM/Final_Routes_DEL_BOM_Afternoon.json");
const del_ccu_afternoon = require("../../Database/DEL_CCU/Final_Routes_DEL_CCU_Afternoon.json");
const dmu_agx_afternoon = require("../../Database/DMU_AGX/Final_Routes_DMU_AGX_Afternoon.json");
const router = express.Router();

router.post("/routes_afternoon", (req, res) => {
  try {
    const { dep_iato, arr_iato } = req.body;
    if(dep_iato == "agx" && arr_iato == "dmu") res.json(agx_dmu_afternoon);
    if(dep_iato == "amd" && arr_iato == "ccu") res.json(amd_ccu_afternoon);
    if(dep_iato == "blr" && arr_iato == "del") res.json(blr_del_afternoon);
    if(dep_iato == "bom" && arr_iato == "del") res.json(bom_del_afternoon);
    if(dep_iato == "ccu" && arr_iato == "amd") res.json(ccu_amd_afternoon);
    if(dep_iato == "ccu" && arr_iato == "del") res.json(ccu_del_afternoon);
    if(dep_iato == "del" && arr_iato == "blr") res.json(del_blr_afternoon);
    if(dep_iato == "del" && arr_iato == "bom") res.json(del_bom_afternoon);
    if(dep_iato == "del" && arr_iato == "ccu") res.json(del_ccu_afternoon);
    if(dep_iato == "dmu" && arr_iato == "agx") res.json(dmu_agx_afternoon);
    else res.status(500).sendStatus(500);
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log("Backend error: ", error);
  }
});

module.exports = router;