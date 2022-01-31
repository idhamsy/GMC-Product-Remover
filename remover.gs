function gdelete(rangecell) {
  var app= SpreadsheetApp;
  var activeSheet = app.getActiveSpreadsheet().getActiveSheet();
  var batchId=1;
  var productobj=null;
  var batchresource;

  for(row=1;row<=activeSheet.getLastRow();)
{
  var rangecell ='A'+row+':B'+(row+999)+'';//enter range sheet
  rangecell=rangecell.toString();

  //rangecell ="A1:B200"; // add // in beginning if minimum 1000 or more, remove // from the beginning line and change the range to the correct range if less than 1000

  Logger.log(rangecell);
  var temp = activeSheet.getRange(rangecell).getValues();
  row=row+1000;
  var productobj=null;
   for (var i = 1; i < temp.length; i++) { 
   var tempobj=  "{'batchId':"+batchId+", 'merchantId':"+temp[i][0]+", 'method':'delete','productId':'online:id:ID:"+temp[i][1]+"' }"
   batchId++;
   if(i==1){
      productobj = tempobj;
   }
   else
   {
   productobj =productobj+","+tempobj;
   }
  }

   var resources = "{'entries': ["+productobj+"]}";
   resources=resources.toString();

 try{
   batchresource=JSON.stringify(resources);
 } catch(Error){

   Logger.log("Error JSON");
 }

  
  var response = ShoppingContent.Products.custombatch(resources)
  Logger.log(row);
  Logger.log(response);
}


  return resources;
}
