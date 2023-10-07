import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-name',
  templateUrl: './resource-name.component.html',
  styleUrls: ['./resource-name.component.scss'],
})
export class ResourceNameComponent {
  imagePath: string | null = '';
  lang = localStorage.getItem('lang');
  ngOnInit() {
    this.imagePath = localStorage.getItem('selectedImage');
  }
  onImageSelected(event: any) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const selectedFile = inputElement.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.imagePath = e.target.result;
        localStorage.setItem('selectedImage', e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  }
}
