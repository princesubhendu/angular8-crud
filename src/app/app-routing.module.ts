import { RouterModule, Routes } from '@angular/router';
import {AddMaterialComponent} from "./add-material/add-material.component";
import {ListMaterialComponent} from "./list-material/list-material.component";
import {EditMaterialComponent} from "./edit-material/edit-material.component";

const routes: Routes = [
  { path: 'add-material', component: AddMaterialComponent },
  { path: 'list-material', component: ListMaterialComponent },
  { path: 'edit-material', component: EditMaterialComponent }
];

export const routing = RouterModule.forRoot(routes);