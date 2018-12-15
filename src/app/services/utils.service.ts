import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Constants } from '../share/constants';

@Injectable({
  providedIn: 'root'
})
export class UtilsServices {

  public static sortBy(array:any[], key: string, orderBy: string){
    if(array && orderBy){
        array.sort( function(item1, item2) {
            if(!item1[key]) item1[key] = 0;
            if(!item2[key]) item2[key] = 0;
            if (item1[key] < item2[key]){
                return -1;
            }else if(item1[key] > item2[key]){
                return 1;
            }else{
                return 0; 
            }
        });
  
        if(orderBy == Constants.SORT_ORDER_BY_DESC){
            array = array.reverse(); 
        }
    }
  
    return array;
  }
  
  

}
