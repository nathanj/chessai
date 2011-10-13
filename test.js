
var i = 1;
var failed = 0;
var passed = 0;
var test = '';

function start_test(name) {
	test = name;
	i = 1;
	failed = 0;
	passed = 0;
}

function end_test() {
	document.write(test + ' - ');
	document.write(passed + " passed, " + failed + " failed.<br/>");
}
function assert(name, x) {
	if (!x) {
		document.write(test + " - ");
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

start_test('white pawn');
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
end_test();

start_test('black pawn');
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
end_test();

var board = [
      /*  Y0  Y1  Y2  Y3  Y4  Y5  Y6  Y7 */
/* X0 */ ['r','n','b','k','q','b',' ','r'],
/* X1 */ ['p','p','p','p','p','p','p','p'],
/* X2 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X3 */ [' ','R',' ',' ','P',' ','n',' '],
/* X4 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X5 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X6 */ ['P','P','P','P',' ','P','P','P'],
/* X7 */ [' ','N','B','Q','K','B','N','R'],
]

start_test('rook');
assert(i++, is_valid_move(board, 3, 1, 0, 1) == false);
assert(i++, is_valid_move(board, 3, 1, 1, 1) == true);
assert(i++, is_valid_move(board, 3, 1, 2, 1) == true);
assert(i++, is_valid_move(board, 3, 1, 4, 1) == true);
assert(i++, is_valid_move(board, 3, 1, 5, 1) == true);
assert(i++, is_valid_move(board, 3, 1, 6, 1) == false);
assert(i++, is_valid_move(board, 3, 1, 7, 1) == false);

assert(i++, is_valid_move(board, 3, 1, 3, 0) == true);
assert(i++, is_valid_move(board, 3, 1, 3, 2) == true);
assert(i++, is_valid_move(board, 3, 1, 3, 3) == true);
assert(i++, is_valid_move(board, 3, 1, 3, 4) == false);
assert(i++, is_valid_move(board, 3, 1, 3, 5) == false);
assert(i++, is_valid_move(board, 3, 1, 3, 6) == false);
assert(i++, is_valid_move(board, 3, 1, 3, 7) == false);

assert(i++, is_valid_move(board, 3, 1, 2, 0) == false);
assert(i++, is_valid_move(board, 3, 1, 2, 2) == false);
assert(i++, is_valid_move(board, 3, 1, 4, 0) == false);
assert(i++, is_valid_move(board, 3, 1, 4, 2) == false);
end_test();

var board = [
      /*  Y0  Y1  Y2  Y3  Y4  Y5  Y6  Y7 */
/* X0 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X1 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X2 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X3 */ [' ',' ',' ','N',' ',' ',' ',' '],
/* X4 */ [' ',' ',' ',' ',' ','p',' ',' '],
/* X5 */ [' ',' ',' ',' ','P',' ',' ',' '],
/* X6 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X7 */ [' ',' ',' ',' ',' ',' ',' ',' '],
]

start_test('knight');
assert(i++, is_valid_move(board, 3, 3, 1, 2) == true);
assert(i++, is_valid_move(board, 3, 3, 2, 1) == true);
assert(i++, is_valid_move(board, 3, 3, 4, 1) == true);
assert(i++, is_valid_move(board, 3, 3, 5, 2) == true);
assert(i++, is_valid_move(board, 3, 3, 1, 4) == true);
assert(i++, is_valid_move(board, 3, 3, 2, 5) == true);
assert(i++, is_valid_move(board, 3, 3, 4, 5) == true);
assert(i++, is_valid_move(board, 3, 3, 5, 4) == false);
end_test();

var board = [
      /*  Y0  Y1  Y2  Y3  Y4  Y5  Y6  Y7 */
/* X0 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X1 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X2 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X3 */ [' ',' ',' ','B',' ',' ',' ',' '],
/* X4 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X5 */ [' ','p',' ',' ',' ','P',' ',' '],
/* X6 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X7 */ [' ',' ',' ',' ',' ',' ',' ',' '],
]

start_test('bishop');
assert(i++, is_valid_move(board, 3, 3, 0, 0) == true);
assert(i++, is_valid_move(board, 3, 3, 1, 1) == true);
assert(i++, is_valid_move(board, 3, 3, 2, 2) == true);
assert(i++, is_valid_move(board, 3, 3, 4, 4) == true);
assert(i++, is_valid_move(board, 3, 3, 5, 5) == false);
assert(i++, is_valid_move(board, 3, 3, 6, 6) == false);
assert(i++, is_valid_move(board, 3, 3, 7, 7) == false);

assert(i++, is_valid_move(board, 3, 3, 6, 0) == false);
assert(i++, is_valid_move(board, 3, 3, 5, 1) == true);
assert(i++, is_valid_move(board, 3, 3, 4, 2) == true);
assert(i++, is_valid_move(board, 3, 3, 2, 4) == true);
assert(i++, is_valid_move(board, 3, 3, 1, 5) == true);
assert(i++, is_valid_move(board, 3, 3, 0, 6) == true);

assert(i++, is_valid_move(board, 3, 3, 3, 2) == false);
assert(i++, is_valid_move(board, 3, 3, 3, 4) == false);
assert(i++, is_valid_move(board, 3, 3, 2, 3) == false);
end_test();

var board = [
      /*  Y0  Y1  Y2  Y3  Y4  Y5  Y6  Y7 */
/* X0 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X1 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X2 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X3 */ [' ',' ',' ','q',' ',' ',' ',' '],
/* X4 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X5 */ [' ','p',' ',' ',' ','P',' ',' '],
/* X6 */ [' ',' ',' ','R',' ',' ',' ',' '],
/* X7 */ [' ',' ',' ',' ',' ',' ',' ',' '],
]

start_test('queen');
assert(i++, is_valid_move(board, 3, 3, 0, 0) == true);
assert(i++, is_valid_move(board, 3, 3, 1, 1) == true);
assert(i++, is_valid_move(board, 3, 3, 2, 2) == true);
assert(i++, is_valid_move(board, 3, 3, 4, 4) == true);
assert(i++, is_valid_move(board, 3, 3, 5, 5) == true);
assert(i++, is_valid_move(board, 3, 3, 6, 6) == false);
assert(i++, is_valid_move(board, 3, 3, 7, 7) == false);

assert(i++, is_valid_move(board, 3, 3, 6, 0) == false);
assert(i++, is_valid_move(board, 3, 3, 5, 1) == false);
assert(i++, is_valid_move(board, 3, 3, 4, 2) == true);
assert(i++, is_valid_move(board, 3, 3, 2, 4) == true);
assert(i++, is_valid_move(board, 3, 3, 1, 5) == true);
assert(i++, is_valid_move(board, 3, 3, 0, 6) == true);

assert(i++, is_valid_move(board, 3, 3, 3, 0) == true);
assert(i++, is_valid_move(board, 3, 3, 3, 1) == true);
assert(i++, is_valid_move(board, 3, 3, 3, 2) == true);
assert(i++, is_valid_move(board, 3, 3, 3, 4) == true);
assert(i++, is_valid_move(board, 3, 3, 3, 5) == true);
assert(i++, is_valid_move(board, 3, 3, 3, 6) == true);
assert(i++, is_valid_move(board, 3, 3, 3, 7) == true);

assert(i++, is_valid_move(board, 3, 3, 0, 3) == true);
assert(i++, is_valid_move(board, 3, 3, 1, 3) == true);
assert(i++, is_valid_move(board, 3, 3, 2, 3) == true);
assert(i++, is_valid_move(board, 3, 3, 4, 3) == true);
assert(i++, is_valid_move(board, 3, 3, 5, 3) == true);
assert(i++, is_valid_move(board, 3, 3, 6, 3) == true);
assert(i++, is_valid_move(board, 3, 3, 7, 3) == false);
end_test();

var board = [
      /*  Y0  Y1  Y2  Y3  Y4  Y5  Y6  Y7 */
/* X0 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X1 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X2 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X3 */ [' ',' ',' ','k',' ',' ',' ',' '],
/* X4 */ [' ',' ',' ','r',' ',' ',' ',' '],
/* X5 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X6 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X7 */ [' ',' ',' ',' ',' ',' ',' ',' '],
]

start_test('king');
assert(i++, is_valid_move(board, 3, 3, 2, 2) == true);
assert(i++, is_valid_move(board, 3, 3, 2, 3) == true);
assert(i++, is_valid_move(board, 3, 3, 2, 4) == true);
assert(i++, is_valid_move(board, 3, 3, 3, 2) == true);
assert(i++, is_valid_move(board, 3, 3, 3, 4) == true);
assert(i++, is_valid_move(board, 3, 3, 4, 2) == true);
assert(i++, is_valid_move(board, 3, 3, 4, 3) == false);
assert(i++, is_valid_move(board, 3, 3, 4, 4) == true);
end_test();

