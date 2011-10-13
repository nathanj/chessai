

var board = [
      /*  Y0  Y1  Y2  Y3  Y4  Y5  Y6  Y7 */
/* X0 */ ['r','n','b','k','q','b','n','r'],
/* X1 */ ['p','p','p','p','p','p','p','p'],
/* X2 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X3 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X4 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X5 */ [' ',' ',' ',' ',' ',' ',' ',' '],
/* X6 */ ['P','P','P','P','P','P','P','P'],
/* X7 */ ['R','N','B','Q','K','B','N','R'],
]

var WHITE = 0
var BLACK = 1

var valid_move_functions = new Array();
valid_move_functions['p'] = is_pawn_valid_move;
valid_move_functions['r'] = is_rook_valid_move;
valid_move_functions['n'] = is_knight_valid_move;
valid_move_functions['b'] = is_bishop_valid_move;
valid_move_functions['q'] = is_queen_valid_move;
valid_move_functions['k'] = is_king_valid_move;

function is_valid_move(board, x, y, tx, ty) {
	var func = valid_move_functions[board[x][y].toLowerCase()];
	if (func)
		return func(board, x, y, tx, ty);
	else
		return false;
}

function piece_color(board, x, y) {
	if (board[x][y].toLowerCase() == board[x][y])
		return BLACK;
	return WHITE;
}

function is_open(board, x, y) {
	return (board[x][y] == ' ');
}

function is_piece(board, x, y) {
	return (board[x][y] != ' ');
}

function is_pawn_valid_move(board, x, y, tx, ty) {
	var color = piece_color(board, x, y);
	var dir = (color == WHITE ? -1 : 1);
	var startx = (color == WHITE ? 6 : 1);

	if (ty == y) {
		/* Move one space. */
		if (tx == x + 1 * dir
		    && is_open(board, tx, ty))
			return true;

		/* Move two spaces. */
		if (x == startx
		    && tx == x + dir * 2
		    && is_open(board, tx, ty)
		    && is_open(board, tx - dir, ty))
			return true;
	} else if (Math.abs(ty - y) == 1) {
		/* Normal capture. */
		if (tx == x + 1 * dir
		    && is_piece(board, tx, ty)
		    && piece_color(board, tx, ty) != color)
			return true;

		/* En passant. */
		if (x == startx
		    && tx == x + 2 * dir
		    && is_open(board, tx, ty)
		    && is_piece(board, tx - dir, ty)
		    && piece_color(board, tx - dir, ty) != color)
			return true;
	}

	return false;
}

function is_rook_valid_move(board, x, y, tx, ty) {
	var dx = tx - x;
	var dy = ty - y;

	/* Check for horizontal or vertical movement. */
	if (dx != 0 && dy != 0)
		return false;

	if (dx != 0) {
		/* Vertical. */
		dx /= Math.abs(dx);
		for (var cx = x + dx; cx != tx; cx += dx)
			if (is_piece(board, cx, y))
				return false;
	} else {
		/* Horizontal. */
		dy /= Math.abs(dy);
		for (var cy = y + dy; cy != ty; cy += dy)
			if (is_piece(board, x, cy))
				return false;
	}

	/* Make sure final position is not on same color. */
	if (piece_color(board, x, y) == piece_color(board, tx, ty))
		return false;

	return true;
}

function is_knight_valid_move(board, x, y, tx, ty) {
	return false;
}

function is_bishop_valid_move(board, x, y, tx, ty) {
	return false;
}

function is_queen_valid_move(board, x, y, tx, ty) {
	return false;
}

function is_king_valid_move(x, y, tx, ty) {
	return false;
}

