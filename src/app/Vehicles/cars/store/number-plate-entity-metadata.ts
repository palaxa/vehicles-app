import { EntityMetadataMap } from "@ngrx/data";
import { Numberplate } from "../cars/store/numberplate";

export const numberplateEntityMetaData:EntityMetadataMap = {
  Numberplate:{
    selectId:(regNo:Numberplate) => regNo.id
  }
}
