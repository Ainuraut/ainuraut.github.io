function load () {
 
 	let column_1 = [2, 9, 5, 9, 8, 8, 3, 9, 2, 9, 3, 5, 8, 3, 6, 10, 8, 5, 1, 1, 7, 2, 8, 7, 10, 8, 10, 10, 8, 9]
	let column_2 = [9, 5, 6, 1, 5, 6, 6, 5, 1, 7, 5, 6, 7, 10, 9, 1, 6, 6, 2, 1, 4, 10, 1, 7, 1, 6, 2, 8, 3, 7]
	let column_3 = [85, 69, 59, 79, 55, 57, 56, 79, 45,79, 66, 55, 43, 72, 95, 53, 45, 58, 42, 100, 87, 79,67, 77, 77, 41, 95, 99, 51, 94]
	let column_4 = [65, 64, 69, 65, 76, 93, 66, 54, 53, 85, 83, 84, 59, 57, 61, 66, 72, 48, 66, 66, 50, 51, 64, 77, 60, 70, 43, 43, 67, 76]


	let sum_1 = column_1[0] + column_1[1] + column_1[2] + column_1[3] + column_1[4] + column_1[5] + column_1[6] + column_1[7] + column_1[8] + column_1[9] + column_1[10] + column_1[11] + column_1[12] + column_1[13] + column_1[14] + column_1[15] + column_1[16] + column_1[17] + column_1[18] + column_1[19] + column_1[20] + column_1[21] + column_1[22] + column_1[23] + column_1[24] + column_1[25] + column_1[26] + column_1[27] + column_1[28] + column_1[29] 

	let sum_2 = column_2[0] + column_2[1] + column_2[2] + column_2[3] + column_2[4] + column_2[5] + column_2[6] + column_2[7] + column_2[8] + column_2[9] + column_2[10] + column_2[11] + column_2[12] + column_2[13] + column_2[14] + column_2[15] + column_2[16] + column_2[17] + column_2[18] + column_2[19] + column_2[20] + column_2[21] + column_2[22] + column_2[23] + column_2[24] + column_2[25] + column_2[26] + column_2[27] + column_2[28] + column_2[29] 

	let sum_3 = column_3[0] + column_3[1] + column_3[2] + column_3[3] + column_3[4] + column_3[5] + column_3[6] + column_3[7] + column_3[8] + column_3[9] + column_3[10] + column_3[11] + column_3[12] + column_3[13] + column_3[14] + column_3[15] + column_3[16] + column_3[17] + column_3[18] + column_3[19] + column_3[20] + column_3[21] + column_3[22] + column_3[23] + column_3[24] + column_3[25] + column_3[26] + column_3[27] + column_3[28] + column_3[29] 

	let sum_4 = column_4[0] + column_4[1] + column_4[2] + column_4[3] + column_4[4] + column_4[5] + column_4[6] + column_4[7] + column_4[8] + column_4[9] + column_4[10] + column_4[11] + column_4[12] + column_4[13] + column_4[14] + column_4[15] + column_4[16] + column_4[17] + column_4[18] + column_4[19] + column_4[20] + column_4[21] + column_4[22] + column_4[23] + column_4[24] + column_4[25] + column_4[26] + column_4[27] + column_4[28] + column_4[29] 


	let sums = [sum_1, sum_2, sum_3, sum_4]

	const results = {
	col1: [2, 9, 5, 9, 8, 8, 3, 9, 2, 9, 3, 5, 8, 3, 6, 10, 8, 5, 1, 1, 7, 2, 8, 7, 10, 8, 10, 10, 8, 9],	
	col2: [9, 5, 6, 1, 5, 6, 6, 5, 1, 7, 5, 6, 7, 10, 9, 1, 6, 6, 2, 1, 4, 10, 1, 7, 1, 6, 2, 8, 3, 7],   	
	col3: [85, 69, 59, 79, 55, 57, 56, 79, 45,79, 66, 55, 43, 72, 95, 53, 45, 58, 42, 100, 87, 79,67, 77, 77, 41, 95, 99, 51, 94],	
	col4: [65, 64, 69, 65, 76, 93, 66, 54, 53, 85, 83, 84, 59, 57, 61, 66, 72, 48, 66, 66, 50, 51, 64, 77, 60, 70, 43, 43, 67, 76],	
	sums: [sums], 	
	total_score: sum_1 + sum_2 + sum_3 + sum_4,	
}


console.log (results)
}

