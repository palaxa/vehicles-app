import { fuel, make, vehicleclass } from "../models/data-model";

export const makesData:make[] = [
    {name:'Volvo'},
    {name:'Mercedes Benz'},
    {name:'Audi'},
    {name:'Volkswagen'},
    {name:'Toyota'},
    {name:'Ford'},
    {name:'Honda Motors'},
    {name:'Tesla Motors'},
    {name:'Stellantis'},
    {name:'BMW'},
    {name:'General Motors'},
    {name:'SAIC'},
    {name:'Hyundai'},
    {name:'Tata'},
    {name:'Renault'}
];

export const fuelTypes:fuel[] =[
  {name:'Petrol'},
  {name:'Diesel'},
  {name:'CNG'},
  {name:'Electric'}
];

export const vehicleClasses:vehicleclass[] = [
  {name:'LMV'},
  {name:'SUV'},
  {name:'MICRO'},
  {name:'SEDAN'},
  {name:'CUV'},
]
