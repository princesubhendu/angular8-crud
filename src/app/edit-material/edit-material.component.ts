import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Material} from "../material.model";
import {ApiService} from "../api.service";

@Component({
  selector: 'edit-material',
  templateUrl: './edit-material.component.html',
  styleUrls: ['./edit-material.component.css']
})
export class EditMaterialComponent implements OnInit {

  material: Material;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let materialId = window.localStorage.getItem("editMaterialId");
    console.log(materialId);
    if(!materialId) {
      alert("Invalid action.")
      this.router.navigate(['list-material']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
    this.apiService.getMaterialById(+materialId)
      .subscribe( data => {
        console.log(data.result[0]);
        this.editForm.setValue(data.result[0]);
      });
  }

  onSubmit() {
    this.apiService.updateMaterial(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Material updated successfully.');
            this.router.navigate(['list-material']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
