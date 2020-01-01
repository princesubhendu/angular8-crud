import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Material} from "../material.model";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-list-material',
  templateUrl: './list-material.component.html',
  styleUrls: ['./list-material.component.css']
})
export class ListMaterialComponent implements OnInit {

  materials: Material[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {  
    this.apiService.getMaterials()
      .subscribe( data => {
        console.log("data");
        console.log(data);
        this.materials = data.result;
        
      });
  }

  deleteMaterial(material: Material): void {
    console.log(material);
    this.apiService.deleteMaterial(material.id)
      .subscribe( data => {
        this.materials = this.materials.filter(u => u !== material);
      })
  };

  editMaterial(material: Material): void {
    window.localStorage.removeItem("editMaterialId");
    window.localStorage.setItem("editMaterialId", material.id.toString());
    this.router.navigate(['edit-material']);
  };

  addMaterial(): void {
    this.router.navigate(['/add-material']);
  };
}
