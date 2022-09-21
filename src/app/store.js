import { configureStore } from "@reduxjs/toolkit";
import idItemReducer from "../features/builder/IdItemInsert.js";
import dropzoneBornReducer from "../features/builder/ONDropzoneBorn.js";
import totalNodeReducer from "../features/builder/ObjectTotalNode.js";
import checkModalReducer from "../features/builder/CheckModal.js";
import btnSaveReducer from "../features/builder/ButtonSave.js";
import btnCancelSaveReducer from "../features/builder/ButtonCancelSave.js";
import itemTBGeneralReducer from "../features/builder/ItemToolboxGeneral.js";
import generalProReducer from "../features/builder/GeneralProperties.js";
import objectProReducer from "../features/builder/ObjectProperties.js";

export default configureStore({
  reducer: {
    idItem: idItemReducer,
    dropzoneBorn: dropzoneBornReducer,
    totalNode: totalNodeReducer,
    checkModal: checkModalReducer,
    btnSave: btnSaveReducer,
    btnCancelSave: btnCancelSaveReducer,
    itemTBGeneral: itemTBGeneralReducer,
    generalPro: generalProReducer,
    objectPro: objectProReducer,
  },
});
