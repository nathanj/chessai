
var i = 1;
var failed = 0;
var passed = 0;

function assert(name, x) {
	if (!x) {
		document.write("TEST ");
		document.write(name);
		document.write(" FAILED<br/>");
		failed++;
	} else {
		passed++;
	}
}


var board = [
      /*  Y0  Y1  Y2  Y3  Y4  Y5  Y6  Y7 */
/* X0 */ ['r','n','b','k','q','b','n','r'],
/* X1 */ [' ','p',' ',' ','p','p',' ','p'],
/* X2 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X3 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X4 */ [' ',' ','p','p',' ',' ',' ',' '],
/* X5 */ ['p',' ','P',' ',' ',' ','p',' '],
/* X6 */ ['P','P',' ','P','P','P','P','P'],
/* X7 */ ['R','N','B','Q','K','B','N','R'],
]

/* White pawn. */
assert(i++, is_valid_move(board, 6, 0, 5, 0) == false);
assert(i++, is_valid_move(board, 6, 0, 4, 0) == false);
assert(i++, is_valid_move(board, 6, 0, 5, 1) == false);
assert(i++, is_valid_move(board, 6, 0, 4, 1) == false);

assert(i++, is_valid_move(board, 5, 2, 4, 2) == false);
assert(i++, is_valid_move(board, 5, 2, 3, 2) == false);
assert(i++, is_valid_move(board, 5, 2, 4, 3) == true);
assert(i++, is_valid_move(board, 5, 2, 3, 3) == false);
assert(i++, is_valid_move(board, 5, 2, 6, 2) == false);

assert(i++, is_valid_move(board, 6, 4, 5, 4) == true);
assert(i++, is_valid_move(board, 6, 4, 4, 4) == true);
assert(i++, is_valid_move(board, 6, 4, 3, 4) == false);
assert(i++, is_valid_move(board, 6, 4, 2, 4) == false);
assert(i++, is_valid_move(board, 6, 4, 1, 4) == false);

assert(i++, is_valid_move(board, 6, 5, 5, 6) == true);
assert(i++, is_valid_move(board, 6, 5, 4, 6) == true);
assert(i++, is_valid_move(board, 6, 5, 5, 5) == true);
assert(i++, is_valid_move(board, 6, 5, 4, 5) == true);
assert(i++, is_valid_move(board, 6, 5, 5, 4) == false);
assert(i++, is_valid_move(board, 6, 5, 4, 4) == false);

assert(i++, is_valid_move(board, 6, 6, 5, 6) == false);
assert(i++, is_valid_move(board, 6, 6, 4, 6) == false);

/* Black pawn. */

assert(i++, is_valid_move(board, 5, 0, 6, 0) == false);
assert(i++, is_valid_move(board, 5, 0, 6, 1) == true);
assert(i++, is_valid_move(board, 5, 0, 7, 1) == false);
assert(i++, is_valid_move(board, 5, 0, 7, 0) == false);

assert(i++, is_valid_move(board, 1, 1, 2, 1) == true);
assert(i++, is_valid_move(board, 1, 1, 3, 1) == true);
assert(i++, is_valid_move(board, 1, 1, 4, 1) == false);

assert(i++, is_valid_move(board, 4, 2, 3, 2) == false);
assert(i++, is_valid_move(board, 4, 2, 5, 2) == false);
assert(i++, is_valid_move(board, 4, 2, 6, 2) == false);
assert(i++, is_valid_move(board, 4, 2, 7, 2) == false);

assert(i++, is_valid_move(board, 4, 3, 5, 3) == true);
assert(i++, is_valid_move(board, 4, 3, 5, 2) == true);
assert(i++, is_valid_move(board, 4, 3, 5, 4) == false);



document.write(passed + " passed, " + failed + " failed.<br/>");
