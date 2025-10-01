import { Component , OnInit} from '@angular/core';
import { DemoserviceService } from '../demoservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



//for table display
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface


// ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface IRow {
  foodId: number;
  foodItem: string;
  quantity: string;
  calories: string;
}

@Component({
  selector: 'app-food-items',
  standalone: true,
  imports: [AgGridAngular,CommonModule, FormsModule], 
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css'],
  
})


export class FoodItemsComponent implements OnInit {

  
  selectedColumn: string = 'all';  // Default column to search by
  searchKeyword: string = '';
  foodItems: any[] = [];


  colDefs: ColDef[] = [
    { field: 'foodId', headerName: 'Food ID' },
    { field: 'foodItem', headerName: 'Food Item' },
    { field: 'quantity', headerName: 'Quantity' },
    { field: 'calories', headerName: 'Calories' }
  ];

  // themeClass = "ag-theme-quartz";
  
  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    filter: true,
  };


  constructor(private dataSrc:DemoserviceService, private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllFoodItem();
  }

  getAllFoodItem(): void {
    this.dataSrc.getAllFoodItem().subscribe(
      (data:any) => {
        this.foodItems = data?.value;  // ? is used because if null data comes gives no error
        console.log('Food Items:', this.foodItems);
      },
      (error) => {
        console.error('Error fetching food items:', error);
      }
    );
  }

  //global search from backend



  onSearch() {
    this.dataSrc.searchGlobal(this.searchKeyword).subscribe(data => {
      this.foodItems = data;
    });
  }

}


  // //global search from UI

  //   // Search function to filter food items based on the search keyword
  //   onSearch(): void {
  //     const keyword = this.searchKeyword.toLowerCase(); // Case-insensitive search
  //     if(!keyword){
  //       this.foodItems = [...this.foodItems];
  //     }
  //     else{  
        
  //       this.foodItems = this.foodItems.filter((item) =>
  //         (item.foodItem && item.foodItem.toLowerCase().includes(keyword)) ||
  //         (item.quantity && item.quantity.toString().toLowerCase().includes(keyword)) ||
  //         (item.calories && item.calories.toString().toLowerCase().includes(keyword))
  //       );
  //     }
  //   }
  //   clearSearch(): void {
  //     this.searchKeyword = ''; // Clear the search keyword
  //     this.foodItems = [...this.foodItems]; // Reset to original data
  //   }



