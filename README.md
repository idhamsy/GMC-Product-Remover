# GMC-Product-Remover
Remove specific product from Google Merchant Center using Google Sheet and Google App Script. You just need to fill merchant ID and product ID in sheet the run the app script function. This script will be very useful if you have a lot of subaccount and you need to remove product in multiple account at once.It should be works in single non MCC account.


How to use it?

1. Create a new blank Google Sheet 
2. Fill Merchant ID and Product ID in Column A & B (max ~500K rows)
3. Click Extension --> App Script
4. Copy remover.gs to app script code.
5. If number of row >1000 add // at the beginning of line 15. Click Save
6. If number of row <1000, remove // from beginning of line 15 and change with the start and end of row (ex  for 200 row A1:B200). Click Save
7. Click Run
8. If there is remaining row not processed from point no 3, remove the processed row, copy the unprocessed row to  2nd row, then go to Step 4 and Step 5



Note: 
1. This code process each 1K row from the first row for removal, if less than 1K you need to do step 6.
2. To get list of merchant ID and product ID from multiple account you can use https://github.com/google/shopping-markup to pull data in Google Bigquery the pivot in Google Data Studio.


How it works:
1. The script read each 1K row in sheet.
2. Delete that 1K list using Google Content API Product custombatch(https://developers.google.com/shopping-content/reference/rest/v2.1/products/custombatch)
3. Iterate until all row is processed.
4. Limitation: When there is under 1K row unprocessed in the end. It will return error. You need to do step 8.


Feedback and improvement are welcome. Feel free to use it in any project, use it at your own risk. No Warranty Provided. 
Please link back to this repository when you quote this script in your blog, news article etc.


