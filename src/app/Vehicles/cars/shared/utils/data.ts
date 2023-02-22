import { fuel, make, vehicleclass } from "../models/data-model";

export const makesData:make[] = [
    {name:'Audi'},
    {name:'BMW'},
    {name:'Ford'},
    {name:'General Motors'},
    {name:'Honda Motors'},
    {name:'Hyundai'},
    {name:'Mercedes Benz'},
    {name:'Renault'},
    {name:'Stellantis'},
    {name:'SAIC'},
    {name:'Tata'},
    {name:'Tesla Motors'},
    {name:'Toyota'},
    {name:'Volkswagen'},
    {name:'Volvo'},
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
